document.write('<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.0.1"></script>');
document.write('<script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/mobilenet@1.0.0"></script>');
document.write('<script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/knn-classifier"></script>');
document.write('<div id="region_knnclassifier" style="z-index:999"><video id="gamevideo_knnclassifier" style="position:absolute;visibility:hidden;" preload autoplay loop muted></video><img id="gameimg_knnclassifier" style="position:absolute;visibility:hidden;" crossorigin="anonymous"><canvas id="gamecanvas_knnclassifier"></canvas><br><br><select id="mirrorimage_knnclassifier" style="position:absolute;display:none;"><option value="1">Y</option><option value="0">N</option></select><select id="opacity_knnclassifier" style="position:absolute;display:none;"><option value="1">1</option><option value="0.9">0.9</option><option value="0.8">0.8</option><option value="0.7">0.7</option><option value="0.6">0.6</option><option value="0.5">0.5</option><option value="0.4">0.4</option><option value="0.3">0.3</option><option value="0.2">0.2</option><option value="0.1">0.1</option><option value="0">0</option></select><button id="saveModel_knnclassifier" style="position:absolute;display:none;">Save Model</button><input type="file" id="loadModel_knnclassifier" style="position:absolute;display:none;"></input><button id="clearAllClasses_knnclassifier" style="position:absolute;display:none;">Clear All Classes</button>&nbsp;&nbsp;&nbsp;&nbsp;<button id="addExample_knnclassifier" style="position:absolute;display:none;">Train</button><select id="class_knnclassifier" style="position:absolute;display:none;"><option value="0" selected>0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select><span id="count_knnclassifier" style="position:absolute;display:none;">0</span><button id="Detect_knnclassifier" style="position:absolute;display:none;">Detect</button><div id="gamediv_knnclassifier" style="color:red"></div><div id="maxclass_knnclassifier" style="position:absolute;display:none;"></div><div id="maxprobability_knnclassifier" style="position:absolute;display:none;"></div></div>');
document.write('<div id="knnclassifierState" style="position:absolute;display:none;">1</div>');
document.write('<div id="sourceId_knnclassifier" style="position:absolute;display:none;"></div>');

window.onload = function () {
	var saveModel = document.getElementById("saveModel_knnclassifier");
	var loadModel = document.getElementById('loadModel_knnclassifier');
	var video = document.getElementById('gamevideo_knnclassifier');
	var canvas = document.getElementById('gamecanvas_knnclassifier');
	var context = canvas.getContext('2d');
	var clearAllClasses = document.getElementById('clearAllClasses_knnclassifier');
	var addExample = document.getElementById('addExample_knnclassifier');
	var classes = document.getElementById('class_knnclassifier');
	var maxclass = document.getElementById('maxclass_knnclassifier');
	var maxprobability = document.getElementById('maxprobability_knnclassifier');
	var result = document.getElementById('gamediv_knnclassifier');
	var count = document.getElementById('count_knnclassifier');
	var region = document.getElementById('region_knnclassifier');
	var opacity = document.getElementById('opacity_knnclassifier');
	var Detect = document.getElementById('Detect_knnclassifier');
	var mirrorimage = document.getElementById("mirrorimage_knnclassifier");
	var obj;

	var classifier;
	var mobilenetModule;
	var sourceTimer;

	classifier = knnClassifier.create();

	mobilenet.load().then(Module => {
		mobilenetModule = Module;
		sourceTimer = setInterval(
			function(){
				var source = document.getElementById("sourceId_knnclassifier");
				if (source.innerHTML!="") {
					clearInterval(sourceTimer);
					obj = document.getElementById(source.innerHTML);
					obj.style.width = obj.width + 'px';
					obj.style.height = obj.height + 'px';				
					setInterval(
						function(){
							region.style.opacity = Number(opacity.value);
							canvas.setAttribute("width", obj.width);
							canvas.setAttribute("height", obj.height);
							canvas.style.width = obj.width+"px";
							canvas.style.height = obj.height+"px";
							if (mirrorimage.value==1) {
								context.translate((canvas.width + obj.width) / 2, 0);
								context.scale(-1, 1);
								context.drawImage(obj, 0, 0, obj.width, obj.height);
								context.setTransform(1, 0, 0, 1, 0, 0);
							}
							else
								context.drawImage(obj, 0, 0, obj.width, obj.height);	
						}	
					, 200);
				}
			}
		, 100);
		result.innerHTML = '';
	});

	function opacity_onclick (event) {
		region.style.opacity = Number(opacity.value);
	};
	opacity.addEventListener("click", opacity_onclick, true);

	function Detect_onclick (event) {
		DetectVideo();
	};
	Detect.addEventListener("click", Detect_onclick, true);

	function clearAllClasses_onclick (event) {
		maxclass.innerHTML = '';
		maxprobability.innerHTML = '';	  
		result.innerHTML = '';
		count.innerHTML = "0";	
		classifier.clearAllClasses();
	};
	clearAllClasses.addEventListener("click", clearAllClasses_onclick, true);

	function addExample_onclick (event) {
		addExampleImage(classes.value);
		count.innerHTML = Number(count.innerHTML)+1;
	};
	addExample.addEventListener("click", addExample_onclick, true);

	function saveModel_onclick (event) {
		let dataset = classifier.getClassifierDataset();
		let myDataset = {}
		Object.keys(dataset).forEach((key) => {
			let data = dataset[key].dataSync();
			myDataset[key] = Array.from(data);
		});
		let json = JSON.stringify(myDataset);

		var link = document.createElement('a');
		link.download="model.json";
		link.href='data:text/json;charset=utf-8,' + encodeURIComponent(json);
		document.body.appendChild(link);
		link.click();
		link.remove();
	}
	saveModel.addEventListener("click", saveModel_onclick, true);

	function loadModel_onchange (event) {
		var target = event.target || window.event.srcElement;
		var files = target.files;
		var fr = new FileReader();
		if (files.length>0) {
			fr.onload = function () {     
				var dataset = fr.result;
				var myDataset = JSON.parse(dataset)
				Object.keys(myDataset).forEach((key) => {
					myDataset[key] = tf.tensor(myDataset[key], [myDataset[key].length / 1024, 1024]);
				})
				classifier.setClassifierDataset(myDataset);
			}
			fr.readAsText(files[0]);
		}
	}
	loadModel.addEventListener("change", loadModel_onchange, true);

	function addExampleImage(classname) {
		var Image = tf.browser.fromPixels(canvas);
		var logits = mobilenetModule.infer(Image, 'conv_preds');
		classifier.addExample(logits, classname);
	}

	async function DetectVideo() {
		try {
			const Image = tf.browser.fromPixels(canvas);
			const xlogits = mobilenetModule.infer(Image, 'conv_preds');
			const predict = await classifier.predictClass(xlogits);
			//console.log(JSON.stringify(predict));
			var msg = classes.options[predict.label].innerText + "<br><br>";
			for (i=0;i<classes.length;i++) {
				if (predict.confidences[i.toString()]>=0) msg += "<font color='black'>[ "+classes.options[i].innerText+" ] " + predict.confidences[i.toString()] + "</font><br>";
			}
			result.innerHTML = msg;
			maxclass.innerHTML = classes.options[predict.label].innerText;
			maxprobability.innerHTML = predict.confidences[predict.label];
		} catch (e) {
		}
	}
}
