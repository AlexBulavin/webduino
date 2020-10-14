document.write('<canvas id="gamecanvas_faceapirecognize" style="z-index:999;position:absolute;display:none"></canvas>');
document.write('<div id="region_faceapirecognize" style="z-index:998;position:absolute"><video id="gamevideo_faceapirecognize" style="position:absolute;" preload autoplay loop muted></video><img id="gameimg_faceapirecognize" style="position:absolute;visibility:hidden;" crossorigin="anonymous"><br><button id="detect_faceapirecognize" onclick="this.disabled=true;DetectVideo();" style="display:none" disabled>Start Detection</button><br><div id="message_faceapirecognize" style="color:red"></div></div>');
document.write('<div id="_faceapirecognizeState" style="position:absolute;display:none;">1</div>');
document.write('<div id="sourceId_faceapirecognize" style="position:absolute;display:none;"></div>');
document.write('<div id="size_faceapirecognize" style="position:absolute;display:none;"></div>');

var video = document.getElementById('gamevideo_faceapirecognize');
var canvas = document.getElementById('gamecanvas_faceapirecognize');
var context = canvas.getContext('2d');
var region = document.getElementById("region_faceapirecognize");
var detect = document.getElementById('detect_faceapirecognize'); 
var message = document.getElementById('message_faceapirecognize');
var size = document.getElementById("size_faceapirecognize");
var sourceTimer; 
	
var myResult,myTimer;
var modelPath,distanceLimit,faceImagesPath,facelabels,faceImagesCount;
var Model,video,canvas,context,result; 

let labeledFaceDescriptors;
let faceMatcher;

function StartFaceRecognition(input_result, input_timer, input_modelpath, input_faceimagepath, input_facelabel, input_faceimagecount, input_distancelimit) {
	myResult = input_result;
	myTimer = input_timer;
	
	distanceLimit = input_distancelimit;
	faceImagesPath = input_faceimagepath;
	facelabels = input_facelabel;
	faceImagesCount = input_faceimagecount ;
	modelPath = input_modelpath;

	Promise.all([
	  faceapi.nets.faceLandmark68Net.load(modelPath),
	  faceapi.nets.faceRecognitionNet.load(modelPath),
	  faceapi.nets.ssdMobilenetv1.load(modelPath)
	]).then(function(){
		sourceTimer = setInterval(
			function(){
				var source = document.getElementById("sourceId_faceapirecognize");
				if (source.innerHTML!="") {
					var obj = document.getElementById(source.innerHTML);
					source.innerHTML = "";
					DetectVideo(obj);
				}				
			}
		, 1000);
	})
}

async function DetectVideo(obj) { 
  canvas.style.display = "block";
  canvas.setAttribute("width", obj.width);
  canvas.setAttribute("height", obj.height);
  canvas.style.left = region.style.left;
  canvas.style.top = region.style.top; 
  canvas.getContext('2d').drawImage(obj,0,0,obj.width,obj.height); 
  if (!labeledFaceDescriptors) {
	labeledFaceDescriptors = await loadLabeledImages();
	faceMatcher = new faceapi.FaceMatcher(labeledFaceDescriptors, distanceLimit)
  }

  const detections = await faceapi.detectAllFaces(canvas).withFaceLandmarks().withFaceDescriptors();
  const resizedDetections = faceapi.resizeResults(detections, JSON.parse(size.innerHTML));

  const results = resizedDetections.map(d => faceMatcher.findBestMatch(d.descriptor));
  //message.innerHTML = JSON.stringify(results);
  //console.log(results);
  //console.log(results.length);
  if (results.length>0) {
	  var res = "";
	  for (var i=0;i<results.length;i++) {
		res += results[i]._label + "," + results[i]._distance;
		if (i<results.length-1)
			res += "<br>";
	  }
	  message.innerHTML = res;
  }
  else
	message.innerHTML = "";
  
  results.forEach((result, i) => {
	const box = resizedDetections[i].detection.box
	var drawBox;
	if (result.distance<=distanceLimit)
		drawBox = new faceapi.draw.DrawBox(box, { label: result.toString()})
	else
		drawBox = new faceapi.draw.DrawBox(box, { label: (Math.round(result.distance*100)/100).toString()})
	drawBox.draw(canvas);
  })
  setTimeout('canvas.style.display = "none";', myTimer*1000);
}

function loadLabeledImages() {
  return Promise.all(
	facelabels.map(async label => {
		const descriptions = []
		for (let i=1;i<=faceImagesCount;i++) {
			const img = await faceapi.fetchImage(faceImagesPath+label+'/'+i+'.jpg')
			const detections = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor();
			descriptions.push(detections.descriptor)
		}
		return new faceapi.LabeledFaceDescriptors(label, descriptions)
	})
  )
}