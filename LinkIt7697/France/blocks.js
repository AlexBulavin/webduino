Blockly.Blocks['fu_taiwan_aqi'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("台灣空氣品質 (ESP32)")
        .appendField(new Blockly.FieldDropdown([
          ["基隆市-基隆","基隆"],
          ["新北市-汐止","汐止"],
          ["新北市-萬里","萬里"],
          ["新北市-新店","新店"],
          ["新北市-土城","土城"],
          ["新北市-板橋","板橋"],
          ["新北市-新莊","新莊"],
          ["新北市-菜寮","菜寮"],
          ["新北市-林口","林口"],
          ["新北市-淡水","淡水"],
          ["新北市-永和","永和"],  
          ["新北市-三重","三重"],
          ["新北市-富貴角","富貴角"],
          ["臺北市-士林","士林"],
          ["臺北市-中山","中山"],
          ["臺北市-萬華","萬華"],
          ["臺北市-古亭","古亭"],
          ["臺北市-松山","松山"],
          ["臺北市-大同","大同"],
          ["臺北市-陽明","陽明"],  
          ["桃園市-桃園","桃園"],
          ["桃園市-大園","大園"],
          ["桃園市-觀音","觀音"],
          ["桃園市-平鎮","平鎮"],
          ["桃園市-龍潭","龍潭"],
          ["桃園市-中壢","中壢"],
          ["新竹縣-湖口","湖口"],
          ["新竹縣-竹東","竹東"],
          ["新竹市-新竹","新竹"],
          ["苗栗縣-頭份","頭份"],
          ["苗栗縣-苗栗","苗栗"],
          ["苗栗縣-三義","三義"],
          ["臺中市-豐原","豐原"],
          ["臺中市-沙鹿","沙鹿"],
          ["臺中市-大里","大里"],
          ["臺中市-忠明","忠明"],
          ["臺中市-西屯","西屯"],
          ["彰化縣-彰化","彰化"],
          ["彰化縣-線西","線西"],
          ["彰化縣-二林","二林"],
          ["南投縣-南投","南投"],
          ["南投縣-竹山","竹山"], 
          ["南投縣-埔里","埔里"],  
          ["雲林縣-斗六","斗六"],
          ["雲林縣-崙背","崙背"],
          ["雲林縣-臺西","臺西"],
          ["雲林縣-麥寮","麥寮"],
          ["嘉義縣-新港","新港"],
          ["嘉義縣-朴子","朴子"],
          ["嘉義市-嘉義","嘉義"],
          ["臺南市-新營","新營"],
          ["臺南市-善化","善化"],
          ["臺南市-安南","安南"],
          ["臺南市-臺南","臺南"],
          ["高雄市-美濃","美濃"],
          ["高雄市-橋頭","橋頭"],
          ["高雄市-仁武","仁武"],
          ["高雄市-鳳山","鳳山"],
          ["高雄市-大寮","大寮"],
          ["高雄市-林園","林園"],
          ["高雄市-楠梓","楠梓"],
          ["高雄市-左營","左營"],
          ["高雄市-前金","前金"],
          ["高雄市-前鎮","前鎮"],
          ["高雄市-小港","小港"],
          ["高雄市-復興","復興"],  
          ["屏東縣-屏東","屏東"],
          ["屏東縣-潮州","潮州"],
          ["屏東縣-恆春","恆春"],
          ["臺東縣-臺東","臺東"],
          ["臺東縣-關山","關山"],  
          ["花蓮縣-花蓮","花蓮"],
          ["宜蘭縣-宜蘭","宜蘭"],
          ["宜蘭縣-冬山","冬山"],
          ["連江縣-馬祖","馬祖"],
          ["金門縣-金門","金門"],
          ["澎湖縣-馬公","馬公"]
		]), "sitename");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)	
        .appendField(new Blockly.FieldVariable("airAQI"), "AQI")
        .appendField("取得AQI值");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)	
        .appendField(new Blockly.FieldVariable("airPM25"), "PM25")
        .appendField("取得PM2.5值");	
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)	
        .appendField(new Blockly.FieldVariable("airSTATUS"), "STATUS")
        .appendField("取得狀態");			
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['fu_ez_digitalwrite'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("EZ+")
        .appendField(new Blockly.FieldDropdown([["紅燈","0"], ["黃燈","1"], ["綠燈","2"]]), "led");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("狀態")
        .appendField(new Blockly.FieldDropdown([["開","1"], ["關","0"]]), "value");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['fu_ez_digitalwrite_input'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("EZ+")
        .appendField(new Blockly.FieldDropdown([["紅燈","0"], ["黃燈","1"], ["綠燈","2"]]), "led");
    this.appendValueInput("value")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("數位輸出值");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['fu_ez_digitalwrite_input_relay'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("EZ+")
        .appendField("繼電器")
        .appendField("數位輸出值"); 
   this.appendValueInput("value")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT);     
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['fu_ez_analogwrite_input'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("EZ+")
        .appendField(new Blockly.FieldDropdown([["紅燈","0"], ["黃燈","1"], ["綠燈","2"]]), "led");
    this.appendValueInput("value")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("類比輸出值");		
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(50);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['fu_ez_analogwrite_input_esp'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("EZ+")
        .appendField("(ESP32)")		
        .appendField(new Blockly.FieldDropdown([["紅燈","0"], ["黃燈","1"], ["綠燈","2"]]), "led");
    this.appendValueInput("value")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("類比輸出值");
    this.appendValueInput("channel")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("通道");		
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['fu_ez_digitalread'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("EZ+")
        .appendField(new Blockly.FieldDropdown([["按鈕A","0"],["按鈕B","1"]]), "button")
        .appendField("數位輸入值");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(80);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['fu_ez_digitalread_button'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("EZ+")
        .appendField(new Blockly.FieldDropdown([["按鈕A","A"],["按鈕B","B"],["按鈕A+B","AB"]]), "type")
        .appendField("按下");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(80);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['fu_ez_analogread_potentiometer'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("EZ+")
        .appendField("可變電阻")
        .appendField("類比輸入值");         
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(110);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['fu_ez_analogread_photoresistor'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("EZ+")
        .appendField("光感測器")
        .appendField("類比輸入值");         
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(110);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['fu_ez_buzzer_tone'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("EZ+")
        .appendField("蜂鳴器");
    this.appendValueInput("frequency")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("頻率");		
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(140);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['fu_ez_buzzer_tone_duration'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("EZ+")
        .appendField("蜂鳴器");
    this.appendValueInput("frequency")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("頻率");
    this.appendValueInput("duration")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("持續時間(ms)");	
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(140);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['fu_ez_buzzer_tone_duration_array'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("EZ+")
        .appendField("蜂鳴器");
    this.appendValueInput("frequency")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("頻率");
    this.appendValueInput("duration")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("持續時間(ms)");	
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(140);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['fu_ez_buzzer_notone'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("EZ+")
        .appendField("蜂鳴器")
        .appendField("停止");		
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(140);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['fu_ez_buzzer_tone_duration_esp'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("EZ+")
        .appendField("蜂鳴器(ESP32)");
    this.appendValueInput("frequency")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("頻率");
    this.appendValueInput("duration")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("持續時間(ms)");
    this.appendValueInput("channel")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("通道");	
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(155);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['fu_ez_buzzer_tone_duration_esp_array'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("EZ+")
        .appendField("蜂鳴器(ESP32)");
    this.appendValueInput("frequency")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("頻率");
    this.appendValueInput("duration")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("持續時間(ms)");
    this.appendValueInput("channel")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("通道");		
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(155);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['fu_ez_buzzer_tone1']={
	init:function(){
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown([
				["C 3 [131]","131"],
				["C# 3 [139]","139"],
				["D 3 [147]","147"],
				["D# 3 [156]","156"],
				["E 3 [165]","165"],
				["F 3 [175]","175"],
				["F# 3 [185]","185"],
				["G 3 [196]","196"],
				["G# 3 [208]","208"],
				["A 3 [220]","220"],
				["A# 3 [233]","233"],
				["B 3 [247]","247"],
				["C 4 [262]","262"],
				["C# 4 [277]","277"],
				["D 4 [294]","294"],
				["D# 4 [311]","311"],
				["E 4 [330]","330"],
				["F 4 [349]","349"],
				["F# 4 [370]","370"],
				["G 4 [392]","392"],
				["G# 4 [415]","415"],
				["A 4 [440]","440"],
				["A# 4 [466]","466"],
				["B 4 [494]","494"]
			]),"frequency");
		this.setInputsInline(true);
		this.setOutput(true);
		this.setColour(155);			
	}
};

Blockly.Blocks['fu_ez_buzzer_tone2']={
	init:function(){
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown([
				["C 5 [523]","523"],
				["C# 5 [554]","554"],
				["D 5 [587]","587"],
				["D# 5 [622]","622"],
				["E 5 [659]","659"],
				["F 5 [698]","698"],
				["F# 5 [740]","740"],
				["G 5 [784]","784"],
				["G# 5 [831]","831"],
				["A 5 [880]","880"],
				["A# 5 [932]","932"],
				["B 5 [988]","988"],			
				["C 6 [1047]","1047"],
				["C# 6 [1109]","1109"],
				["D 6 [1175]","1175"],
				["D# 6 [1245]","1245"],
				["E 6 [1319]","1319"],
				["F 6 [1397]","1397"],
				["F# 6 [1480]","1480"],
				["G 6 [1568]","1568"],
				["G# 6 [1661]","1661"],
				["A 6 [1760]","1760"],
				["A# 6 [1864]","1864"],
				["B 6 [1975]","1975"]
			]),"frequency");
		this.setInputsInline(true);
		this.setOutput(true);
		this.setColour(155);			
	}
};

Blockly.Blocks['fu_ez_buzzer_tone3']={
	init:function(){
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown([
				["C 7 [2093]","2093"],
				["C# 7 [2218]","2218"],
				["D 7 [2349]","2349"],
				["D# 7 [2489]","2489"],
				["E 7 [2637]","2637"],
				["F 7 [2794]","2794"],
				["F# 7 [2960]","2960"],
				["G 7 [3136]","3136"],
				["G# 7 [3322]","3322"],
				["A 7 [3520]","3520"],
				["A# 7 [3729]","3729"],
				["B 7 [3951]","3951"],
				["C 8 [4186]","4186"],
				["C# 8 [4435]","4435"],
				["D 8 [4699]","4699"],
				["D# 8 [4978]","4978"],
				["E 8 [5274]","5274"],
				["F 8 [5588]","5588"],
				["F# 8 [5920]","5920"],
				["G 8 [6272]","6272"],
				["G# 8 [6645]","6645"],
				["A 8 [7040]","7040"],
				["A# 8 [7459]","7459"],
				["B 8 [7902]","7902"]
			]),"frequency");			
		this.setInputsInline(true);
		this.setOutput(true);
		this.setColour(155);		
	}
};

Blockly.Blocks['fu_ez_dht11'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("EZ+")
        .appendField("DHT11");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
         ["相對溼度%","dht.readHumidity()"], 
         ["溫度°C","dht.readTemperature()"]
         ]), "type");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(170);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['fu_ez_pixel_rgb'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("EZ+")
        .appendField("全彩LED");
    this.appendDummyInput()
        .appendField("燈號")
        .appendField(new Blockly.FieldDropdown([["第1顆","0"], ["第2顆","1"], ["第3顆","2"]]), "no");
    this.appendDummyInput()
        .appendField("顏色");		
    this.appendValueInput("R")
        .setCheck("Number")
        .appendField("R");
    this.appendValueInput("G")
        .setCheck("Number")
        .appendField("G");
    this.appendValueInput("B")
        .setCheck("Number")
        .appendField("B");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['fu_ez_pixel_picker'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("EZ+")
        .appendField("全彩LED");
    this.appendDummyInput()
        .appendField("燈號")
        .appendField(new Blockly.FieldDropdown([["第1顆","0"], ["第2顆","1"], ["第3顆","2"]]), "no");
	this.appendValueInput("colour")
		.appendField("顏色");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['fu_ez_pixel_clear'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("EZ+")
        .appendField("全彩LED")
        .appendField("清除亮燈");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['fu_ez_pixel_brightness'] = {
	init:function(){
		this.appendDummyInput()
			.appendField("EZ+ 全彩LED");
		this.appendValueInput("brightness")
			.appendField("亮度[0-255]")
			.setCheck("Number");
		this.setInputsInline(true);
		this.setPreviousStatement(true,null);
		this.setNextStatement(true,null);
		this.setColour(200);			
	}
};

Blockly.Blocks['fu_ez_pixel_color'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("EZ+ 全彩LED");	
	this.appendValueInput("L1")
		.setCheck("String")
        .appendField("第1顆");
	this.appendValueInput("L2")
		.setCheck("String")
        .appendField("第2顆");
	this.appendValueInput("L3")
		.setCheck("String")
        .appendField("第3顆");		
	this.setInputsInline(true);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);	
  }
};

Blockly.Blocks['fu_ez_pixel_color_n'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("EZ+ 全彩LED");
	this.appendValueInput("num")
		.appendField("燈號[1-3]")	
		.setCheck("Number");	
	this.appendValueInput("colour")
		.appendField("顏色");
	this.setInputsInline(true);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);	
  }
};

Blockly.Blocks['fu_color'] = {
  init: function() {	
	this.appendDummyInput()
		.appendField(new Blockly.FieldColour("#FF0000"),"RGB");
	this.setInputsInline(true);
	this.setOutput(true);
	this.setColour(200);	
  }
};

Blockly.Blocks['fu_color_random'] = {
  init: function() {	
    this.appendDummyInput()
        .appendField("隨機顏色");
	this.setInputsInline(true);
	this.setOutput(true);
	this.setColour(200);	
  }
};

Blockly.Blocks['fu_ez_ir_receive'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("EZ+")
        .appendField("紅外線接收器")
        .appendField("讀取到訊號時執行");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)	
        .appendField(new Blockly.FieldVariable("irValue"), "value")
        .appendField("取得訊號編碼(字串)");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)	
        .appendField(new Blockly.FieldVariable("irType"), "type")
        .appendField("取得訊號協定(字串)");
    this.appendStatementInput("execute")
        .setCheck(null);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['fu_oled_initial'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED 初始化");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)	
        .appendField("規格")
        .appendField(new Blockly.FieldDropdown([
			["U8G2_SSD1306_128X64_NONAME_F_HW_I2C","U8G2_SSD1306_128X64_NONAME_F_HW_I2C u8g2(U8G2_R0, /* reset=*/ U8X8_PIN_NONE);"],
			["U8G2_NULL","U8G2_NULL u8g2(U8G2_R0);"],
			["U8G2_SSD1306_128X64_NONAME_F_4W_SW_SPI","U8G2_SSD1306_128X64_NONAME_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1306_128X64_NONAME_F_4W_HW_SPI","U8G2_SSD1306_128X64_NONAME_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 12, /* dc=*/ 4, /* reset=*/ 6);"],
			["U8G2_SSD1306_128X64_NONAME_F_4W_HW_SPI","U8G2_SSD1306_128X64_NONAME_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1306_128X64_NONAME_F_3W_SW_SPI","U8G2_SSD1306_128X64_NONAME_F_3W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* reset=*/ 8);"],
			["U8G2_SSD1306_128X64_NONAME_F_3W_HW_SPI","U8G2_SSD1306_128X64_NONAME_F_3W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* reset=*/ 8);"],
			["U8G2_SSD1306_128X64_ALT0_F_HW_I2C","U8G2_SSD1306_128X64_ALT0_F_HW_I2C u8g2(U8G2_R0, /* reset=*/ U8X8_PIN_NONE);"],
			["U8G2_SSD1306_128X64_NONAME_F_SW_I2C","U8G2_SSD1306_128X64_NONAME_F_SW_I2C u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* reset=*/ 8);"],
			["U8G2_SSD1306_128X64_NONAME_F_SW_I2C","U8G2_SSD1306_128X64_NONAME_F_SW_I2C u8g2(U8G2_R0, /* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);"],
			["U8G2_SSD1306_128X64_NONAME_F_SW_I2C","U8G2_SSD1306_128X64_NONAME_F_SW_I2C u8g2(U8G2_R0, /* clock=*/ 16, /* data=*/ 17, /* reset=*/ U8X8_PIN_NONE);"],
			["U8G2_SSD1306_128X64_NONAME_F_HW_I2C","U8G2_SSD1306_128X64_NONAME_F_HW_I2C u8g2(U8G2_R0, /* reset=*/ U8X8_PIN_NONE, /* clock=*/ 16, /* data=*/ 17);"],
			["U8G2_SSD1306_128X64_NONAME_F_6800","U8G2_SSD1306_128X64_NONAME_F_6800 u8g2(U8G2_R0, 13, 11, 2, 3, 4, 5, 6, A4, /*enable=*/ 7, /*cs=*/ 10, /*dc=*/ 9, /*reset=*/ 8);"],
			["U8G2_SSD1306_128X64_NONAME_F_8080","U8G2_SSD1306_128X64_NONAME_F_8080 u8g2(U8G2_R0, 13, 11, 2, 3, 4, 5, 6, A4, /*enable=*/ 7, /*cs=*/ 10, /*dc=*/ 9, /*reset=*/ 8);"],
			["U8G2_SSD1306_128X64_VCOMH0_F_4W_HW_SPI","U8G2_SSD1306_128X64_VCOMH0_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1306_128X64_ALT0_F_4W_HW_SPI","U8G2_SSD1306_128X64_ALT0_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1306_102X64_EA_OLEDS102_F_4W_HW_SPI","U8G2_SSD1306_102X64_EA_OLEDS102_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SH1106_128X64_NONAME_F_4W_HW_SPI","U8G2_SH1106_128X64_NONAME_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SH1106_128X64_NONAME_F_HW_I2C","U8G2_SH1106_128X64_NONAME_F_HW_I2C u8g2(U8G2_R0, /* reset=*/ U8X8_PIN_NONE);"],
			["U8G2_SH1106_128X64_VCOMH0_F_4W_HW_SPI","U8G2_SH1106_128X64_VCOMH0_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SH1106_128X64_WINSTAR_F_4W_HW_SPI","U8G2_SH1106_128X64_WINSTAR_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SH1106_128X32_VISIONOX_F_HW_I2C","U8G2_SH1106_128X32_VISIONOX_F_HW_I2C u8g2(U8G2_R0, /* reset=*/ U8X8_PIN_NONE);"],
			["U8G2_SH1106_128X32_VISIONOX_F_4W_HW_SPI","U8G2_SH1106_128X32_VISIONOX_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SH1106_72X40_WISE_F_4W_HW_SPI","U8G2_SH1106_72X40_WISE_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SH1107_64X128_F_4W_HW_SPI","U8G2_SH1107_64X128_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SH1107_128X128_F_4W_HW_SPI","U8G2_SH1107_128X128_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SH1107_128X128_F_HW_I2C","U8G2_SH1107_128X128_F_HW_I2C u8g2(U8G2_R0, /* reset=*/ 8);"],
			["U8G2_SH1107_PIMORONI_128X128_F_HW_I2C","U8G2_SH1107_PIMORONI_128X128_F_HW_I2C u8g2(U8G2_R0, /* reset=*/ 8);"],
			["U8G2_SH1107_SEEED_128X128_F_SW_I2C","U8G2_SH1107_SEEED_128X128_F_SW_I2C u8g2(U8G2_R0, /* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);"],
			["U8G2_SH1107_SEEED_128X128_F_HW_I2C","U8G2_SH1107_SEEED_128X128_F_HW_I2C u8g2(U8G2_R0, /* reset=*/ U8X8_PIN_NONE);"],
			["U8G2_SH1107_SEEED_96X96_F_4W_HW_SPI","U8G2_SH1107_SEEED_96X96_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SH1108_160X160_F_4W_HW_SPI","U8G2_SH1108_160X160_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SH1122_256X64_F_4W_HW_SPI","U8G2_SH1122_256X64_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1306_128X32_UNIVISION_F_SW_I2C","U8G2_SSD1306_128X32_UNIVISION_F_SW_I2C u8g2(U8G2_R0, /* clock=*/ 21, /* data=*/ 20, /* reset=*/ U8X8_PIN_NONE);"],
			["U8G2_SSD1306_128X32_UNIVISION_F_SW_I2C","U8G2_SSD1306_128X32_UNIVISION_F_SW_I2C u8g2(U8G2_R0, /* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);"],
			["U8G2_SSD1306_128X32_UNIVISION_F_HW_I2C","U8G2_SSD1306_128X32_UNIVISION_F_HW_I2C u8g2(U8G2_R0, /* reset=*/ U8X8_PIN_NONE);"],
			["U8G2_SSD1306_128X32_UNIVISION_F_HW_I2C","U8G2_SSD1306_128X32_UNIVISION_F_HW_I2C u8g2(U8G2_R0, /* reset=*/ U8X8_PIN_NONE, /* clock=*/ SCL, /* data=*/ SDA);"],
			["U8G2_SSD1306_128X32_WINSTAR_F_HW_I2C","U8G2_SSD1306_128X32_WINSTAR_F_HW_I2C u8g2(U8G2_R0, /* reset=*/ U8X8_PIN_NONE, /* clock=*/ SCL, /* data=*/ SDA);"],
			["U8G2_SSD1306_64X48_ER_F_HW_I2C","U8G2_SSD1306_64X48_ER_F_HW_I2C u8g2(U8G2_R0, /* reset=*/ U8X8_PIN_NONE);"],
			["U8G2_SSD1306_48X64_WINSTAR_F_HW_I2C","U8G2_SSD1306_48X64_WINSTAR_F_HW_I2C u8g2(U8G2_R0, /* reset=*/ U8X8_PIN_NONE);"],
			["U8G2_SSD1306_64X32_NONAME_F_HW_I2C","U8G2_SSD1306_64X32_NONAME_F_HW_I2C u8g2(U8G2_R0, /* reset=*/ U8X8_PIN_NONE);"],
			["U8G2_SSD1306_64X32_1F_F_HW_I2C","U8G2_SSD1306_64X32_1F_F_HW_I2C u8g2(U8G2_R0, /* reset=*/ U8X8_PIN_NONE);"],
			["U8G2_SSD1306_96X16_ER_F_HW_I2C","U8G2_SSD1306_96X16_ER_F_HW_I2C u8g2(U8G2_R0, /* reset=*/ U8X8_PIN_NONE);"],
			["U8G2_SSD1306_72X40_ER_F_HW_I2C","U8G2_SSD1306_72X40_ER_F_HW_I2C u8g2(U8G2_R0, /* reset=*/ U8X8_PIN_NONE);"],
			["U8G2_SSD1320_160X132_F_4W_SW_SPI","U8G2_SSD1320_160X132_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1320_160X132_F_4W_HW_SPI","U8G2_SSD1320_160X132_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1322_NHD_256X64_F_4W_SW_SPI","U8G2_SSD1322_NHD_256X64_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1322_NHD_256X64_F_4W_HW_SPI","U8G2_SSD1322_NHD_256X64_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1322_NHD_128X64_F_4W_SW_SPI","U8G2_SSD1322_NHD_128X64_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1322_NHD_128X64_F_4W_HW_SPI","U8G2_SSD1322_NHD_128X64_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1325_NHD_128X64_F_4W_SW_SPI","U8G2_SSD1325_NHD_128X64_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1325_NHD_128X64_F_4W_HW_SPI","U8G2_SSD1325_NHD_128X64_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD0323_OS128064_F_4W_SW_SPI","U8G2_SSD0323_OS128064_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD0323_OS128064_F_4W_HW_SPI","U8G2_SSD0323_OS128064_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1326_ER_256X32_1_4W_SW_SPI","U8G2_SSD1326_ER_256X32_1_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1327_SEEED_96X96_F_SW_I2C","U8G2_SSD1327_SEEED_96X96_F_SW_I2C u8g2(U8G2_R0, /* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);"],
			["U8G2_SSD1327_SEEED_96X96_F_HW_I2C","U8G2_SSD1327_SEEED_96X96_F_HW_I2C u8g2(U8G2_R0, /* reset=*/ U8X8_PIN_NONE);"],
			["U8G2_SSD1327_EA_W128128_F_4W_SW_SPI","U8G2_SSD1327_EA_W128128_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1327_EA_W128128_F_4W_HW_SPI","U8G2_SSD1327_EA_W128128_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1327_EA_W128128_F_SW_I2C","U8G2_SSD1327_EA_W128128_F_SW_I2C u8g2(U8G2_R0, /* clock=*/ 5, /* data=*/ 4, /* reset=*/ U8X8_PIN_NONE);"],
			["U8G2_SSD1327_EA_W128128_F_HW_I2C","U8G2_SSD1327_EA_W128128_F_HW_I2C u8g2(U8G2_R0, /* reset=*/ U8X8_PIN_NONE);"],
			["U8G2_SSD1327_MIDAS_128X128_F_4W_SW_SPI","U8G2_SSD1327_MIDAS_128X128_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1327_MIDAS_128X128_F_4W_HW_SPI","U8G2_SSD1327_MIDAS_128X128_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1327_MIDAS_128X128_F_HW_I2C","U8G2_SSD1327_MIDAS_128X128_F_HW_I2C u8g2(U8G2_R0, /* reset=*/ U8X8_PIN_NONE);"],
			["U8G2_SSD1327_WS_128X128_F_4W_SW_SPI","U8G2_SSD1327_WS_128X128_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1327_WS_128X128_F_4W_HW_SPI","U8G2_SSD1327_WS_128X128_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1327_VISIONOX_128X96_F_4W_SW_SPI","U8G2_SSD1327_VISIONOX_128X96_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1327_VISIONOX_128X96_F_4W_HW_SPI","U8G2_SSD1327_VISIONOX_128X96_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1329_128X96_NONAME_F_4W_SW_SPI","U8G2_SSD1329_128X96_NONAME_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1329_128X96_NONAME_F_4W_HW_SPI","U8G2_SSD1329_128X96_NONAME_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1329_96X96_NONAME_F_4W_SW_SPI","U8G2_SSD1329_96X96_NONAME_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1329_96X96_NONAME_F_4W_HW_SPI","U8G2_SSD1329_96X96_NONAME_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1329_96X96_NONAME_F_4W_HW_SPI","U8G2_SSD1329_96X96_NONAME_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ A4, /* dc=*/ A2, /* reset=*/ U8X8_PIN_NONE);"],
			["U8G2_SSD1305_128X32_NONAME_F_4W_SW_SPI","U8G2_SSD1305_128X32_NONAME_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1305_128X32_NONAME_F_4W_HW_SPI","U8G2_SSD1305_128X32_NONAME_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1305_128X32_ADAFRUIT_F_4W_SW_SPI","U8G2_SSD1305_128X32_ADAFRUIT_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1305_128X32_ADAFRUIT_F_4W_HW_SPI","U8G2_SSD1305_128X32_ADAFRUIT_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1305_128X64_ADAFRUIT_F_4W_SW_SPI","U8G2_SSD1305_128X64_ADAFRUIT_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1305_128X64_ADAFRUIT_F_4W_HW_SPI","U8G2_SSD1305_128X64_ADAFRUIT_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1305_128X64_RAYSTAR_F_4W_SW_SPI","U8G2_SSD1305_128X64_RAYSTAR_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1305_128X64_RAYSTAR_F_4W_HW_SPI","U8G2_SSD1305_128X64_RAYSTAR_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1309_128X64_NONAME0_F_4W_SW_SPI","U8G2_SSD1309_128X64_NONAME0_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1309_128X64_NONAME0_F_4W_HW_SPI","U8G2_SSD1309_128X64_NONAME0_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1309_128X64_NONAME2_F_4W_SW_SPI","U8G2_SSD1309_128X64_NONAME2_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1309_128X64_NONAME2_F_4W_HW_SPI","U8G2_SSD1309_128X64_NONAME2_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1316_128X32_F_4W_SW_SPI","U8G2_SSD1316_128X32_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1316_128X32_F_4W_HW_SPI","U8G2_SSD1316_128X32_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1317_96X96_F_4W_SW_SPI","U8G2_SSD1317_96X96_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1317_96X96_F_4W_HW_SPI","U8G2_SSD1317_96X96_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1318_128X96_F_4W_SW_SPI","U8G2_SSD1318_128X96_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1318_128X96_F_4W_HW_SPI","U8G2_SSD1318_128X96_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_LD7032_60X32_F_4W_SW_SPI","U8G2_LD7032_60X32_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 11, /* data=*/ 12, /* cs=*/ 9, /* dc=*/ 10, /* reset=*/ 8);"],
			["U8G2_LD7032_60X32_F_4W_SW_I2C","U8G2_LD7032_60X32_F_4W_SW_I2C u8g2(U8G2_R0, /* clock=*/ 11, /* data=*/ 12, /* reset=*/ U8X8_PIN_NONE);"],
			["U8G2_LD7032_60X32_ALT_F_4W_SW_SPI","U8G2_LD7032_60X32_ALT_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 11, /* data=*/ 12, /* cs=*/ 9, /* dc=*/ 10, /* reset=*/ 8);"],
			["U8G2_LD7032_60X32_ALT_F_4W_SW_I2C","U8G2_LD7032_60X32_ALT_F_4W_SW_I2C u8g2(U8G2_R0, /* clock=*/ 11, /* data=*/ 12, /* reset=*/ U8X8_PIN_NONE);"],
			["U8G2_UC1701_EA_DOGS102_F_4W_SW_SPI","U8G2_UC1701_EA_DOGS102_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_UC1701_EA_DOGS102_F_4W_HW_SPI","U8G2_UC1701_EA_DOGS102_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_PCD8544_84X48_F_4W_SW_SPI","U8G2_PCD8544_84X48_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_PCD8544_84X48_F_4W_HW_SPI","U8G2_PCD8544_84X48_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_PCF8812_96X65_F_4W_SW_SPI","U8G2_PCF8812_96X65_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_PCF8812_96X65_F_4W_HW_SPI","U8G2_PCF8812_96X65_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_HX1230_96X68_F_3W_SW_SPI","U8G2_HX1230_96X68_F_3W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* reset=*/ 8);"],
			["U8G2_HX1230_96X68_F_4W_SW_SPI","U8G2_HX1230_96X68_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_KS0108_128X64_F","U8G2_KS0108_128X64_F u8g2(U8G2_R0, 8, 9, 10, 11, 4, 5, 6, 7, /*enable=*/ 18, /*dc=*/ 17, /*cs0=*/ 14, /*cs1=*/ 15, /*cs2=*/ U8X8_PIN_NONE, /* reset=*/  U8X8_PIN_NONE);"],
			["U8G2_KS0108_ERM19264_F","U8G2_KS0108_ERM19264_F u8g2(U8G2_R0, 8, 9, 10, 11, 4, 5, 6, 7, /*enable=*/ 18, /*dc=*/ 17, /*cs0=*/ 14, /*cs1=*/ 15, /*cs2=*/ 16, /* reset=*/  U8X8_PIN_NONE);"],
			["U8G2_HD44102_100X64_F","U8G2_HD44102_100X64_F u8g2(U8G2_R0, 4, 5, 6, 7, 8, 9, 10, 11, /*enable=*/ 2, /*dc=*/ 3, /*cs0=*/ A0, /*cs1=*/ A1, /*cs2=*/ A2, /* reset=*/  U8X8_PIN_NONE);"],
			["U8G2_T7932_150X32_F","U8G2_T7932_150X32_F u8g2(U8G2_R0, 4, 5, 6, 7, 8, 9, 10, 11, /*enable=*/ 2, /*dc=*/ 3, /*cs0=*/ A0, /*cs1=*/ A1, /*cs2=*/ A2, /* reset=*/  U8X8_PIN_NONE);"],
			["U8G2_ST7920_192X32_F_8080","U8G2_ST7920_192X32_F_8080 u8g2(U8G2_R0, 8, 9, 10, 11, 4, 5, 6, 7, /*enable=*/ 18, /*cs=*/ U8X8_PIN_NONE, /*dc=*/ 17, /*reset=*/ U8X8_PIN_NONE);"],
			["U8G2_ST7920_192X32_F_SW_SPI","U8G2_ST7920_192X32_F_SW_SPI u8g2(U8G2_R0, /* clock=*/ 18 /* A4 */ , /* data=*/ 16 /* A2 */, /* CS=*/ 17 /* A3 */, /* reset=*/ U8X8_PIN_NONE);"],
			["U8G2_ST7920_128X64_F_8080","U8G2_ST7920_128X64_F_8080 u8g2(U8G2_R0, 8, 9, 10, 11, 4, 5, 6, 7, /*enable=*/ 18 /* A4 */, /*cs=*/ U8X8_PIN_NONE, /*dc/rs=*/ 17 /* A3 */, /*reset=*/ 15 /* A1 */);"],
			["U8G2_ST7920_128X64_F_SW_SPI","U8G2_ST7920_128X64_F_SW_SPI u8g2(U8G2_R0, /* clock=*/ 18 /* A4 */ , /* data=*/ 16 /* A2 */, /* CS=*/ 17 /* A3 */, /* reset=*/ U8X8_PIN_NONE);"],
			["U8G2_ST7920_128X64_F_SW_SPI","U8G2_ST7920_128X64_F_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* CS=*/ 10, /* reset=*/ 8);"],
			["U8G2_ST7920_128X64_F_SW_SPI","U8G2_ST7920_128X64_F_SW_SPI u8g2(U8G2_R0, /* clock=*/ 14, /* data=*/ 13, /* CS=*/ 15, /* reset=*/ 16);"],
			["U8G2_ST7920_128X64_F_HW_SPI","U8G2_ST7920_128X64_F_HW_SPI u8g2(U8G2_R0, /* CS=*/ 10, /* reset=*/ 8);"],
			["U8G2_ST7920_128X64_F_HW_SPI","U8G2_ST7920_128X64_F_HW_SPI u8g2(U8G2_R0, /* CS=*/ 15, /* reset=*/ 16);"],
			["U8G2_ST7528_ERC16064_F_4W_SW_SPI","U8G2_ST7528_ERC16064_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7528_ERC16064_F_4W_HW_SPI","U8G2_ST7528_ERC16064_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7565_EA_DOGM128_F_4W_SW_SPI","U8G2_ST7565_EA_DOGM128_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7565_EA_DOGM128_F_4W_HW_SPI","U8G2_ST7565_EA_DOGM128_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7565_64128N_F_4W_SW_SPI","U8G2_ST7565_64128N_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7565_64128N_F_4W_HW_SPI","U8G2_ST7565_64128N_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7565_EA_DOGM132_F_4W_SW_SPI","U8G2_ST7565_EA_DOGM132_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ U8X8_PIN_NONE);"],
			["U8G2_ST7565_EA_DOGM132_F_4W_HW_SPI","U8G2_ST7565_EA_DOGM132_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ U8X8_PIN_NONE);"],
			["U8G2_ST7565_ZOLEN_128X64_F_4W_SW_SPI","U8G2_ST7565_ZOLEN_128X64_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7565_ZOLEN_128X64_F_4W_HW_SPI","U8G2_ST7565_ZOLEN_128X64_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7565_LM6059_F_4W_SW_SPI","U8G2_ST7565_LM6059_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7565_LM6059_F_4W_HW_SPI","U8G2_ST7565_LM6059_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7565_KS0713_F_4W_SW_SPI","U8G2_ST7565_KS0713_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7565_KS0713_F_4W_HW_SPI","U8G2_ST7565_KS0713_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7565_LX12864_F_4W_SW_SPI","U8G2_ST7565_LX12864_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7565_LX12864_F_4W_HW_SPI","U8G2_ST7565_LX12864_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7565_ERC12864_F_4W_SW_SPI","U8G2_ST7565_ERC12864_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7565_ERC12864_F_4W_HW_SPI","U8G2_ST7565_ERC12864_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7565_ERC12864_ALT_F_4W_SW_SPI","U8G2_ST7565_ERC12864_ALT_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7565_ERC12864_ALT_F_4W_HW_SPI","U8G2_ST7565_ERC12864_ALT_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7565_NHD_C12832_F_4W_SW_SPI","U8G2_ST7565_NHD_C12832_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7565_NHD_C12832_F_4W_HW_SPI","U8G2_ST7565_NHD_C12832_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7565_NHD_C12864_F_4W_SW_SPI","U8G2_ST7565_NHD_C12864_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7565_NHD_C12864_F_4W_HW_SPI","U8G2_ST7565_NHD_C12864_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7565_JLX12864_F_4W_SW_SPI","U8G2_ST7565_JLX12864_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7565_JLX12864_F_4W_HW_SPI","U8G2_ST7565_JLX12864_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7567_PI_132X64_F_4W_SW_SPI","U8G2_ST7567_PI_132X64_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 7, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7567_PI_132X64_F_4W_HW_SPI","U8G2_ST7567_PI_132X64_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 7, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7567_JLX12864_F_4W_SW_SPI","U8G2_ST7567_JLX12864_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 7, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7567_JLX12864_F_4W_HW_SPI","U8G2_ST7567_JLX12864_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 7, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7567_OS12864_F_4W_SW_SPI","U8G2_ST7567_OS12864_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 7, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7567_OS12864_F_4W_HW_SPI","U8G2_ST7567_OS12864_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 7, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7567_ENH_DG128064_F_4W_SW_SPI","U8G2_ST7567_ENH_DG128064_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7567_ENH_DG128064_F_4W_HW_SPI","U8G2_ST7567_ENH_DG128064_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7567_ENH_DG128064I_F_4W_SW_SPI","U8G2_ST7567_ENH_DG128064I_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7567_ENH_DG128064I_F_4W_HW_SPI","U8G2_ST7567_ENH_DG128064I_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7567_64X32_F_HW_I2C","U8G2_ST7567_64X32_F_HW_I2C u8g2(U8G2_R0, /* reset=*/ U8X8_PIN_NONE);"],
			["U8G2_ST7567_HEM6432_F_HW_I2C","U8G2_ST7567_HEM6432_F_HW_I2C u8g2(U8G2_R0, /* reset=*/ U8X8_PIN_NONE);"],
			["U8G2_ST7571_128X128_F_4W_SW_SPI","U8G2_ST7571_128X128_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7571_128X128_F_4W_HW_SPI","U8G2_ST7571_128X128_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7571_128X96_F_4W_SW_SPI","U8G2_ST7571_128X96_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7571_128X96_F_4W_HW_SPI","U8G2_ST7571_128X96_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7586S_ERC240160_F_4W_HW_SPI","U8G2_ST7586S_ERC240160_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7586S_YMC240160_F_4W_HW_SPI","U8G2_ST7586S_YMC240160_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST75256_JLX172104_F_4W_SW_SPI","U8G2_ST75256_JLX172104_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST75256_JLX172104_F_4W_HW_SPI","U8G2_ST75256_JLX172104_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST75256_JLX19296_F_4W_SW_SPI","U8G2_ST75256_JLX19296_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST75256_JLX19296_F_4W_HW_SPI","U8G2_ST75256_JLX19296_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST75256_JLX256128_F_4W_SW_SPI","U8G2_ST75256_JLX256128_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST75256_JLX256128_F_4W_HW_SPI","U8G2_ST75256_JLX256128_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST75256_WO256X128_F_4W_SW_SPI","U8G2_ST75256_WO256X128_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST75256_WO256X128_F_4W_HW_SPI","U8G2_ST75256_WO256X128_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST75256_JLX256128_F_4W_SW_SPI","U8G2_ST75256_JLX256128_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 9, /* data=*/ 8, /* cs=*/ 7, /* dc=*/ 6, /* reset=*/ 5);"],
			["U8G2_ST75256_JLX256128_F_4W_HW_SPI","U8G2_ST75256_JLX256128_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 7, /* dc=*/ 6, /* reset=*/ 5);"],
			["U8G2_ST75256_JLX256160_F_4W_SW_SPI","U8G2_ST75256_JLX256160_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST75256_JLX256160_F_4W_HW_SPI","U8G2_ST75256_JLX256160_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST75256_JLX256160M_F_4W_SW_SPI","U8G2_ST75256_JLX256160M_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST75256_JLX256160M_F_4W_HW_SPI","U8G2_ST75256_JLX256160M_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST75256_JLX256160_ALT_F_4W_SW_SPI","U8G2_ST75256_JLX256160_ALT_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST75256_JLX256160_ALT_F_4W_HW_SPI","U8G2_ST75256_JLX256160_ALT_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST75256_JLX240160_F_4W_SW_SPI","U8G2_ST75256_JLX240160_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST75256_JLX240160_F_4W_HW_SPI","U8G2_ST75256_JLX240160_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST75256_JLX25664_F_2ND_HW_I2C","U8G2_ST75256_JLX25664_F_2ND_HW_I2C u8g2(U8G2_R0, /* reset=*/ 8);"],
			["U8G2_ST75320_JLX320240_F_4W_SW_SPI","U8G2_ST75320_JLX320240_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST75320_JLX320240_F_4W_HW_SPI","U8G2_ST75320_JLX320240_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_NT7534_TG12864R_F_4W_SW_SPI","U8G2_NT7534_TG12864R_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_NT7534_TG12864R_F_4W_HW_SPI","U8G2_NT7534_TG12864R_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7588_JLX12864_F_SW_I2C","U8G2_ST7588_JLX12864_F_SW_I2C u8g2(U8G2_R0, /* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ 5);"],
			["U8G2_ST7588_JLX12864_F_HW_I2C","U8G2_ST7588_JLX12864_F_HW_I2C u8g2(U8G2_R0, /* reset=*/ 5);"],
			["U8G2_IST3020_ERC19264_F_6800","U8G2_IST3020_ERC19264_F_6800 u8g2(U8G2_R0, 44, 43, 42, 41, 40, 39, 38, 37,  /*enable=*/ 28, /*cs=*/ 32, /*dc=*/ 30, /*reset=*/ 31);"],
			["U8G2_IST3020_ERC19264_F_8080","U8G2_IST3020_ERC19264_F_8080 u8g2(U8G2_R0, 44, 43, 42, 41, 40, 39, 38, 37,  /*enable=*/ 29, /*cs=*/ 32, /*dc=*/ 30, /*reset=*/ 31);"],
			["U8G2_IST3020_ERC19264_F_4W_SW_SPI","U8G2_IST3020_ERC19264_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_IST7920_128X128_F_4W_SW_SPI","U8G2_IST7920_128X128_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_IST7920_128X128_F_4W_HW_SPI","U8G2_IST7920_128X128_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_LC7981_160X80_F_6800","U8G2_LC7981_160X80_F_6800 u8g2(U8G2_R0, 8, 9, 10, 11, 4, 5, 6, 7, /*enable=*/ 18, /*cs=*/ 14, /*dc=*/ 15, /*reset=*/ 16);"],
			["U8G2_LC7981_160X160_F_6800","U8G2_LC7981_160X160_F_6800 u8g2(U8G2_R0, 8, 9, 10, 11, 4, 5, 6, 7, /*enable=*/ 18, /*cs=*/ 14, /*dc=*/ 15, /*reset=*/ 16);"],
			["U8G2_LC7981_240X128_F_6800","U8G2_LC7981_240X128_F_6800 u8g2(U8G2_R0, 8, 9, 10, 11, 4, 5, 6, 7, /*enable=*/ 18, /*cs=*/ 14, /*dc=*/ 15, /*reset=*/ 16);"],
			["U8G2_LC7981_240X64_F_6800","U8G2_LC7981_240X64_F_6800 u8g2(U8G2_R0, 8, 9, 10, 11, 4, 5, 6, 7, /*enable=*/ 18, /*cs=*/ 14, /*dc=*/ 15, /*reset=*/ 16);"],
			["U8G2_SED1520_122X32_F","U8G2_SED1520_122X32_F u8g2(U8G2_R0, 8, 9, 10, 11, 4, 5, 6, 7, /*dc=*/ A0, /*e1=*/ A3, /*e2=*/ A2, /* reset=*/  A4);"],
			["U8G2_T6963_240X128_F_8080","U8G2_T6963_240X128_F_8080 u8g2(U8G2_R0, 8, 9, 10, 11, 4, 5, 6, 7, /*enable/wr=*/ 17, /*cs/ce=*/ 14, /*dc=*/ 15, /*reset=*/ 16);"],
			["U8G2_T6963_256X64_F_8080","U8G2_T6963_256X64_F_8080 u8g2(U8G2_R0, 8, 9, 10, 11, 4, 5, 6, 7, /*enable/wr=*/ 17, /*cs/ce=*/ 14, /*dc=*/ 15, /*reset=*/ 16);"],
			["U8G2_T6963_160X80_F_8080","U8G2_T6963_160X80_F_8080 u8g2(U8G2_R0, 8, 9, 10, 11, 4, 5, 6, 7, /*enable/wr=*/ 17, /*cs/ce=*/ 14, /*dc=*/ 15, /*reset=*/ 16);"],
			["U8G2_T6963_128X64_F_8080","U8G2_T6963_128X64_F_8080 u8g2(U8G2_R0, 8, 9, 10, 11, 4, 5, 6, 7, /*enable/wr=*/ 17, /*cs/ce=*/ 14, /*dc=*/ 15, /*reset=*/ 16);"],
			["U8G2_T6963_128X64_ALT_F_8080","U8G2_T6963_128X64_ALT_F_8080 u8g2(U8G2_R0, 8, 9, 10, 11, 4, 5, 6, 7, /*enable/wr=*/ 17, /*cs/ce=*/ 14, /*dc=*/ 15, /*reset=*/ 16);"],
			["U8G2_SED1330_240X128_F_8080","U8G2_SED1330_240X128_F_8080 u8g2(U8G2_R0, 8, 9, 10, 11, 4, 5, 6, 7, /*enable=*/ 17, /*cs=*/ 14, /*dc=*/ 15, /*reset=*/ 16);"],
			["U8G2_SED1330_240X128_F_6800","U8G2_SED1330_240X128_F_6800 u8g2(U8G2_R0, 13, 11, 2, 3, 4, 5, 6, A4, /*enable=*/ 7, /*cs=*/ 10, /*dc=*/ 9, /*reset=*/ 8);"],
			["U8G2_RA8835_NHD_240X128_F_8080","U8G2_RA8835_NHD_240X128_F_8080 u8g2(U8G2_R0, 8, 9, 10, 11, 4, 5, 6, 7, /*enable=*/ 17, /*cs=*/ 14, /*dc=*/ 15, /*reset=*/ 16);"],
			["U8G2_RA8835_NHD_240X128_F_6800","U8G2_RA8835_NHD_240X128_F_6800 u8g2(U8G2_R0, 8, 9, 10, 11, 4, 5, 6, 7,  /*enable=*/ 17, /*cs=*/ 14, /*dc=*/ 15, /*reset=*/ 16);"],
			["U8G2_UC1601_128X32_F_4W_SW_SPI","U8G2_UC1601_128X32_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_UC1601_128X64_F_4W_SW_SPI","U8G2_UC1601_128X64_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_UC1604_JLX19264_F_4W_SW_SPI","U8G2_UC1604_JLX19264_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_UC1604_JLX19264_F_4W_HW_SPI","U8G2_UC1604_JLX19264_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_UC1608_ERC24064_F_4W_SW_SPI","U8G2_UC1608_ERC24064_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_UC1608_DEM240064_F_4W_SW_SPI","U8G2_UC1608_DEM240064_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_UC1608_ERC240120_F_4W_SW_SPI","U8G2_UC1608_ERC240120_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_UC1608_240X128_F_4W_SW_SPI","U8G2_UC1608_240X128_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_UC1610_EA_DOGXL160_F_4W_SW_SPI","U8G2_UC1610_EA_DOGXL160_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/  U8X8_PIN_NONE);"],
			["U8G2_UC1610_EA_DOGXL160_F_4W_HW_SPI","U8G2_UC1610_EA_DOGXL160_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/  U8X8_PIN_NONE);"],
			["U8G2_UC1611_EA_DOGM240_F_2ND_HW_I2C","U8G2_UC1611_EA_DOGM240_F_2ND_HW_I2C u8g2(U8G2_R0, /* reset=*/ 8);"],
			["U8G2_UC1611_EA_DOGM240_F_4W_SW_SPI","U8G2_UC1611_EA_DOGM240_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_UC1611_EA_DOGXL240_F_2ND_HW_I2C","U8G2_UC1611_EA_DOGXL240_F_2ND_HW_I2C u8g2(U8G2_R0, /* reset=*/ 8);"],
			["U8G2_UC1611_EA_DOGXL240_F_4W_SW_SPI","U8G2_UC1611_EA_DOGXL240_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_UC1611_EW50850_F_8080","U8G2_UC1611_EW50850_F_8080 u8g2(U8G2_R0, 8, 9, 10, 11, 4, 5, 6, 7,  /*enable=*/ 18, /*cs=*/ 3, /*dc=*/ 16, /*reset=*/ 17);"],
			["U8G2_UC1611_CG160160_F_8080","U8G2_UC1611_CG160160_F_8080 u8g2(U8G2_R0, 8, 9, 10, 11, 4, 5, 6, 7,  /*enable=*/ 18, /*cs=*/ 3, /*dc=*/ 16, /*reset=*/ 17);"],
			["U8G2_UC1611_IDS4073_F_4W_SW_SPI","U8G2_UC1611_IDS4073_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_UC1611_IDS4073_F_4W_HW_SPI","U8G2_UC1611_IDS4073_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_UC1617_JLX128128_F_4W_SW_SPI","U8G2_UC1617_JLX128128_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_UC1617_JLX128128_F_4W_HW_SPI","U8G2_UC1617_JLX128128_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_UC1638_192X96_F_4W_SW_SPI","U8G2_UC1638_192X96_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_UC1638_192X96_F_4W_HW_SPI","U8G2_UC1638_192X96_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_UC1638_192X96_F_SW_I2C","U8G2_UC1638_192X96_F_SW_I2C u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* reset=*/ 8);"],
			["U8G2_SSD1606_172X72_F_4W_SW_SPI","U8G2_SSD1606_172X72_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1607_200X200_F_4W_SW_SPI","U8G2_SSD1607_200X200_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1607_GD_200X200_F_4W_SW_SPI","U8G2_SSD1607_GD_200X200_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1607_WS_200X200_F_4W_SW_SPI","U8G2_SSD1607_WS_200X200_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_IL3820_296X128_F_4W_SW_SPI","U8G2_IL3820_296X128_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_IL3820_V2_296X128_F_4W_SW_SPI","U8G2_IL3820_V2_296X128_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_MAX7219_64X8_F_4W_SW_SPI","U8G2_MAX7219_64X8_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 11, /* data=*/ 12, /* cs=*/ 10, /* dc=*/ U8X8_PIN_NONE, /* reset=*/ U8X8_PIN_NONE);"],
			["U8G2_MAX7219_32X8_F_4W_SW_SPI","U8G2_MAX7219_32X8_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 11, /* data=*/ 12, /* cs=*/ 10, /* dc=*/ U8X8_PIN_NONE, /* reset=*/ U8X8_PIN_NONE);"],
			["U8G2_MAX7219_8X8_F_4W_SW_SPI","U8G2_MAX7219_8X8_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 11, /* data=*/ 12, /* cs=*/ 10, /* dc=*/ U8X8_PIN_NONE, /* reset=*/ U8X8_PIN_NONE);"],
			["U8G2_LS013B7DH03_128X128_F_4W_HW_SPI","U8G2_LS013B7DH03_128X128_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ U8X8_PIN_NONE, /* reset=*/ 8);"],
			["U8G2_LS027B7DH01_400X240_F_4W_HW_SPI","U8G2_LS027B7DH01_400X240_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ U8X8_PIN_NONE, /* reset=*/ 8);"],
			["U8G2_LS027B7DH01_M0_400X240_F_4W_HW_SPI","U8G2_LS027B7DH01_M0_400X240_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ U8X8_PIN_NONE, /* reset=*/ 8);"],
			["U8G2_LS013B7DH05_144X168_F_4W_HW_SPI","U8G2_LS013B7DH05_144X168_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ U8X8_PIN_NONE, /* reset=*/ 8);"],
			["U8G2_ST7511_AVD_320X240_F_8080","U8G2_ST7511_AVD_320X240_F_8080 u8g2(U8G2_R0, 13, 11, 2, 3, 4, 5, 6, A4, /*enable/WR=*/ 7, /*cs=*/ 10, /*dc=*/ 9, /*reset=*/ 8);"],
			["U8G2_S1D15721_240X64_F_4W_SW_SPI","U8G2_S1D15721_240X64_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_S1D15721_240X64_F_4W_HW_SPI","U8G2_S1D15721_240X64_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"]	
	]), "format");		
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)	
        .appendField("預設顯示方式")
        .appendField(new Blockly.FieldDropdown([
		["不旋轉，橫向","U8G2_R0"], 
		["順時針旋轉90度","U8G2_R1"], 
		["順時針旋轉180度","U8G2_R2"],
		["順時針旋轉270度","U8G2_R3"], 
		["不旋轉，水平鏡像","U8G2_MIRROR"], 
		["不旋轉，重直鏡像","U8G2_MIRROR_VERTICAL"]				
	]), "display");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)	
        .appendField("UTF8(中文)")
        .appendField(new Blockly.FieldDropdown([
		["停用","0"], 
		["啟用","1"]			
	]), "utf8");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)	
        .appendField("預設字型")
        .appendField(new Blockly.FieldDropdown(opt), "font");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(10);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['fu_oled_home'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED")
        .appendField("游標回到左上角原點");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(30);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['fu_oled_setContrast'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED")
        .appendField("顯示器對比度(0-255)");
    this.appendValueInput("value")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(30);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['fu_oled_setFont'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED")
        .appendField("設定字型");
    this.appendValueInput("font")
        .setCheck("String");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(30);
 this.setTooltip("");
 this.setHelpUrl("https://github.com/olikraus/u8g2/wiki/fntlistall");
  }
};

Blockly.Blocks['fu_oled_setFont_chinese'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED")
        .appendField("設定中文字型");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField(new Blockly.FieldDropdown([
		["u8g2_font_unifont_t_chinese1","u8g2_font_unifont_t_chinese1"],
		["u8g2_font_unifont_t_chinese2","u8g2_font_unifont_t_chinese2"],
		["u8g2_font_unifont_t_chinese3","u8g2_font_unifont_t_chinese3"],
		["u8g2_font_wqy12_t_chinese1","u8g2_font_wqy12_t_chinese1"],
		["u8g2_font_wqy12_t_chinese2","u8g2_font_wqy12_t_chinese2"],
		["u8g2_font_wqy12_t_chinese3","u8g2_font_wqy12_t_chinese3"],
		["u8g2_font_wqy13_t_chinese1","u8g2_font_wqy13_t_chinese1"],
		["u8g2_font_wqy13_t_chinese2","u8g2_font_wqy13_t_chinese2"],
		["u8g2_font_wqy13_t_chinese3","u8g2_font_wqy13_t_chinese3"],
		["u8g2_font_wqy14_t_chinese1","u8g2_font_wqy14_t_chinese1"],
		["u8g2_font_wqy14_t_chinese2","u8g2_font_wqy14_t_chinese2"],
		["u8g2_font_wqy14_t_chinese3","u8g2_font_wqy14_t_chinese3"],
		["u8g2_font_wqy15_t_chinese1","u8g2_font_wqy15_t_chinese1"],
		["u8g2_font_wqy15_t_chinese2","u8g2_font_wqy15_t_chinese2"],
		["u8g2_font_wqy15_t_chinese3","u8g2_font_wqy15_t_chinese3"],
		["u8g2_font_wqy16_t_chinese1","u8g2_font_wqy16_t_chinese1"],
		["u8g2_font_wqy16_t_chinese2","u8g2_font_wqy16_t_chinese2"],
		["u8g2_font_wqy16_t_chinese3","u8g2_font_wqy16_t_chinese3"]		
	]), "font");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(30);
 this.setTooltip("");
 this.setHelpUrl("https://github.com/olikraus/u8g2/wiki/fntlistall");
  }
};

Blockly.Blocks['fu_oled_setFont_icon'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED")
        .appendField("設定圖示字型");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField(new Blockly.FieldDropdown([
			["u8g2_font_open_iconic_weather_1x_t","u8g2_font_open_iconic_weather_1x_t"],
			["u8g2_font_open_iconic_weather_2x_t","u8g2_font_open_iconic_weather_2x_t"],
			["u8g2_font_open_iconic_weather_4x_t","u8g2_font_open_iconic_weather_4x_t"],
			["u8g2_font_open_iconic_weather_6x_t","u8g2_font_open_iconic_weather_6x_t"],
			["u8g2_font_open_iconic_weather_8x_t","u8g2_font_open_iconic_weather_8x_t"],		
			["u8g2_font_open_iconic_all_1x_t","u8g2_font_open_iconic_all_1x_t"],
			["u8g2_font_open_iconic_all_2x_t","u8g2_font_open_iconic_all_2x_t"],
			["u8g2_font_open_iconic_all_4x_t","u8g2_font_open_iconic_all_4x_t"],
			["u8g2_font_open_iconic_all_6x_t","u8g2_font_open_iconic_all_6x_t"],
			["u8g2_font_open_iconic_all_8x_t","u8g2_font_open_iconic_all_8x_t"],
			["u8g2_font_open_iconic_app_1x_t","u8g2_font_open_iconic_app_1x_t"],
			["u8g2_font_open_iconic_app_2x_t","u8g2_font_open_iconic_app_2x_t"],
			["u8g2_font_open_iconic_app_4x_t","u8g2_font_open_iconic_app_4x_t"],
			["u8g2_font_open_iconic_app_6x_t","u8g2_font_open_iconic_app_6x_t"],
			["u8g2_font_open_iconic_app_8x_t","u8g2_font_open_iconic_app_8x_t"],
			["u8g2_font_open_iconic_arrow_1x_t","u8g2_font_open_iconic_arrow_1x_t"],
			["u8g2_font_open_iconic_arrow_2x_t","u8g2_font_open_iconic_arrow_2x_t"],
			["u8g2_font_open_iconic_arrow_4x_t","u8g2_font_open_iconic_arrow_4x_t"],
			["u8g2_font_open_iconic_arrow_6x_t","u8g2_font_open_iconic_arrow_6x_t"],
			["u8g2_font_open_iconic_arrow_8x_t","u8g2_font_open_iconic_arrow_8x_t"],
			["u8g2_font_open_iconic_check_1x_t","u8g2_font_open_iconic_check_1x_t"],
			["u8g2_font_open_iconic_check_2x_t","u8g2_font_open_iconic_check_2x_t"],
			["u8g2_font_open_iconic_check_4x_t","u8g2_font_open_iconic_check_4x_t"],
			["u8g2_font_open_iconic_check_6x_t","u8g2_font_open_iconic_check_6x_t"],
			["u8g2_font_open_iconic_check_8x_t","u8g2_font_open_iconic_check_8x_t"],
			["u8g2_font_open_iconic_email_1x_t","u8g2_font_open_iconic_email_1x_t"],
			["u8g2_font_open_iconic_email_2x_t","u8g2_font_open_iconic_email_2x_t"],
			["u8g2_font_open_iconic_email_4x_t","u8g2_font_open_iconic_email_4x_t"],
			["u8g2_font_open_iconic_email_6x_t","u8g2_font_open_iconic_email_6x_t"],
			["u8g2_font_open_iconic_email_8x_t","u8g2_font_open_iconic_email_8x_t"],
			["u8g2_font_open_iconic_embedded_1x_t","u8g2_font_open_iconic_embedded_1x_t"],
			["u8g2_font_open_iconic_embedded_2x_t","u8g2_font_open_iconic_embedded_2x_t"],
			["u8g2_font_open_iconic_embedded_4x_t","u8g2_font_open_iconic_embedded_4x_t"],
			["u8g2_font_open_iconic_embedded_6x_t","u8g2_font_open_iconic_embedded_6x_t"],
			["u8g2_font_open_iconic_embedded_8x_t","u8g2_font_open_iconic_embedded_8x_t"],
			["u8g2_font_open_iconic_gui_1x_t","u8g2_font_open_iconic_gui_1x_t"],
			["u8g2_font_open_iconic_gui_2x_t","u8g2_font_open_iconic_gui_2x_t"],
			["u8g2_font_open_iconic_gui_4x_t","u8g2_font_open_iconic_gui_4x_t"],
			["u8g2_font_open_iconic_gui_6x_t","u8g2_font_open_iconic_gui_6x_t"],
			["u8g2_font_open_iconic_gui_8x_t","u8g2_font_open_iconic_gui_8x_t"],
			["u8g2_font_open_iconic_human_1x_t","u8g2_font_open_iconic_human_1x_t"],
			["u8g2_font_open_iconic_human_2x_t","u8g2_font_open_iconic_human_2x_t"],
			["u8g2_font_open_iconic_human_4x_t","u8g2_font_open_iconic_human_4x_t"],
			["u8g2_font_open_iconic_human_6x_t","u8g2_font_open_iconic_human_6x_t"],
			["u8g2_font_open_iconic_human_8x_t","u8g2_font_open_iconic_human_8x_t"],
			["u8g2_font_open_iconic_mime_1x_t","u8g2_font_open_iconic_mime_1x_t"],
			["u8g2_font_open_iconic_mime_2x_t","u8g2_font_open_iconic_mime_2x_t"],
			["u8g2_font_open_iconic_mime_4x_t","u8g2_font_open_iconic_mime_4x_t"],
			["u8g2_font_open_iconic_mime_6x_t","u8g2_font_open_iconic_mime_6x_t"],
			["u8g2_font_open_iconic_mime_8x_t","u8g2_font_open_iconic_mime_8x_t"],
			["u8g2_font_open_iconic_other_1x_t","u8g2_font_open_iconic_other_1x_t"],
			["u8g2_font_open_iconic_other_2x_t","u8g2_font_open_iconic_other_2x_t"],
			["u8g2_font_open_iconic_other_4x_t","u8g2_font_open_iconic_other_4x_t"],
			["u8g2_font_open_iconic_other_6x_t","u8g2_font_open_iconic_other_6x_t"],
			["u8g2_font_open_iconic_other_8x_t","u8g2_font_open_iconic_other_8x_t"],
			["u8g2_font_open_iconic_play_1x_t","u8g2_font_open_iconic_play_1x_t"],
			["u8g2_font_open_iconic_play_2x_t","u8g2_font_open_iconic_play_2x_t"],
			["u8g2_font_open_iconic_play_4x_t","u8g2_font_open_iconic_play_4x_t"],
			["u8g2_font_open_iconic_play_6x_t","u8g2_font_open_iconic_play_6x_t"],
			["u8g2_font_open_iconic_play_8x_t","u8g2_font_open_iconic_play_8x_t"],
			["u8g2_font_open_iconic_text_1x_t","u8g2_font_open_iconic_text_1x_t"],
			["u8g2_font_open_iconic_text_2x_t","u8g2_font_open_iconic_text_2x_t"],
			["u8g2_font_open_iconic_text_4x_t","u8g2_font_open_iconic_text_4x_t"],
			["u8g2_font_open_iconic_text_6x_t","u8g2_font_open_iconic_text_6x_t"],
			["u8g2_font_open_iconic_text_8x_t","u8g2_font_open_iconic_text_8x_t"],
			["u8g2_font_open_iconic_thing_1x_t","u8g2_font_open_iconic_thing_1x_t"],
			["u8g2_font_open_iconic_thing_2x_t","u8g2_font_open_iconic_thing_2x_t"],
			["u8g2_font_open_iconic_thing_4x_t","u8g2_font_open_iconic_thing_4x_t"],
			["u8g2_font_open_iconic_thing_6x_t","u8g2_font_open_iconic_thing_6x_t"],
			["u8g2_font_open_iconic_thing_8x_t","u8g2_font_open_iconic_thing_8x_t"],
			["u8g2_font_open_iconic_www_1x_t","u8g2_font_open_iconic_www_1x_t"],
			["u8g2_font_open_iconic_www_2x_t","u8g2_font_open_iconic_www_2x_t"],
			["u8g2_font_open_iconic_www_4x_t","u8g2_font_open_iconic_www_4x_t"],
			["u8g2_font_open_iconic_www_6x_t","u8g2_font_open_iconic_www_6x_t"],
			["u8g2_font_open_iconic_www_8x_t","u8g2_font_open_iconic_www_8x_t"]
	]), "font");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(30);
 this.setTooltip("");
 this.setHelpUrl("https://github.com/olikraus/u8g2/wiki/fntgrpiconic");
  }
};

Blockly.Blocks['fu_oled_setFont_all'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED")
        .appendField("設定字型");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField(new Blockly.FieldDropdown(opt), "font");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(30);
 this.setTooltip("");
 this.setHelpUrl("https://github.com/olikraus/u8g2/wiki/fntlistall");
  }
};

Blockly.Blocks['fu_oled_setFontDirection'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED 字型繪製方向");		
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField(new Blockly.FieldDropdown([
		["顯示從左到右","0"], 
		["顯示從上到下","1"], 
		["顯示右到左","2"],
		["顯示從下到上","3"]
	]), "display");		
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(30);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['fu_oled_setDrawColor'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED 繪製顏色");		
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField(new Blockly.FieldDropdown([
		["實顯","1"], 
		["透顯","0"]			
	]), "mode");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(30);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['fu_oled_setDisplayRotation'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED 顯示方式");		
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField(new Blockly.FieldDropdown([
		["不旋轉，橫向","U8G2_R0"], 
		["順時針旋轉90度","U8G2_R1"], 
		["順時針旋轉180度","U8G2_R2"],
		["順時針旋轉270度","U8G2_R3"], 
		["不旋轉，水平鏡像","U8G2_MIRROR"], 
		["不旋轉，重直鏡像","U8G2_MIRROR_VERTICAL"]				
	]), "display");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(30);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['fu_oled_setPowerSave'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED 省電模式");		
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField(new Blockly.FieldDropdown([
		["停用","0"], 
		["啟用","1"]			
	]), "power");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(30);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['fu_oled_clear'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED")
        .appendField("清除畫面");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(30);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['fu_oled_sendBuffer'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED")
        .appendField("開始繪製(緩衝區)");
    this.appendStatementInput("draw")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(50);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['fu_oled_nextPage'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED")
        .appendField("開始繪製");
    this.appendStatementInput("draw")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(50);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['fu_oled_drawStr'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED")
        .appendField("繪製文字");
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("x");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("y");
    this.appendValueInput("str")
        .setCheck(null)
        .appendField("文字");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(70);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['fu_oled_drawFont'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED")
        .appendField("繪製使用本機字型");
  this.appendDummyInput()  
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("名稱")
      .appendField(new Blockly.FieldDropdown([
		["Abadi MT","Abadi MT"],
		["Agency FB","Agency FB"],
		["Aharoni Bold","Aharoni Bold"],
		["Aldhabi","Aldhabi"],
		["Algerian","Algerian"],
		["Almanac MT","Almanac MT"],
		["American Uncial","American Uncial"],
		["Andale Mono","Andale Mono"],
		["Andalus","Andalus"],
		["Andy","Andy"],
		["Angsana New","Angsana New"],
		["AngsanaUPC","AngsanaUPC"],
		["Aparajita","Aparajita"],
		["Arabic Transparent","Arabic Transparent"],
		["Arabic Typesetting","Arabic Typesetting"],
		["Arial","Arial"],
		["Arial Black","Arial Black"],
		["Arial Narrow","Arial Narrow"],
		["Arial Narrow Special","Arial Narrow Special"],
		["Arial Rounded MT","Arial Rounded MT"],
		["Arial Special","Arial Special"],
		["Arial Unicode MS","Arial Unicode MS"],
		["Augsburger Initials","Augsburger Initials"],
		["Avenir Next LT Pro","Avenir Next LT Pro"],
		["Bahnschrift","Bahnschrift"],
		["Baskerville Old Face","Baskerville Old Face"],
		["Batang & BatangChe","Batang & BatangChe"],
		["Bauhaus 93","Bauhaus 93"],
		["Beesknees ITC","Beesknees ITC"],
		["Bell MT","Bell MT"],
		["Bembo","Bembo"],
		["Berlin Sans FB","Berlin Sans FB"],
		["Bernard MT Condensed","Bernard MT Condensed"],
		["Bickley Script","Bickley Script"],
		["Biome","Biome"],
		["BIZ UDGothic","BIZ UDGothic"],
		["BIZ UDMincho Medium","BIZ UDMincho Medium"],
		["Blackadder ITC","Blackadder ITC"],
		["Bodoni MT","Bodoni MT"],
		["Bodoni MT Condensed","Bodoni MT Condensed"],
		["Bon Apetit MT","Bon Apetit MT"],
		["Book Antiqua","Book Antiqua"],
		["Bookman Old Style","Bookman Old Style"],
		["Bookshelf Symbol","Bookshelf Symbol"],
		["Bradley Hand ITC","Bradley Hand ITC"],
		["Braggadocio","Braggadocio"],
		["BriemScript","BriemScript"],
		["Britannic Bold","Britannic Bold"],
		["Broadway","Broadway"],
		["Browallia New","Browallia New"],
		["BrowalliaUPC","BrowalliaUPC"],
		["Brush Script MT","Brush Script MT"],
		["Calibri","Calibri"],
		["Californian FB","Californian FB"],
		["Calisto MT","Calisto MT"],
		["Cambria","Cambria"],
		["Cambria Math","Cambria Math"],
		["Candara","Candara"],
		["Cariadings","Cariadings"],
		["Castellar","Castellar"],
		["Cavolini","Cavolini"],
		["Centaur","Centaur"],
		["Century","Century"],
		["Century Gothic","Century Gothic"],
		["Century Schoolbook","Century Schoolbook"],
		["Chiller","Chiller"],
		["Colonna MT","Colonna MT"],
		["Comic Sans MS","Comic Sans MS"],
		["Consolas","Consolas"],
		["Constantia","Constantia"],
		["Contemporary Brush","Contemporary Brush"],
		["Cooper Black","Cooper Black"],
		["Copperplate Gothic","Copperplate Gothic"],
		["Corbel","Corbel"],
		["Cordia New","Cordia New"],
		["CordiaUPC","CordiaUPC"],
		["Courier New","Courier New"],
		["Curlz MT","Curlz MT"],
		["Dante","Dante"],
		["DaunPenh","DaunPenh"],
		["David","David"],
		["Daytona","Daytona"],
		["Desdemona","Desdemona"],
		["DFKai-SB","DFKai-SB"],
		["DilleniaUPC","DilleniaUPC"],
		["Directions MT","Directions MT"],
		["DokChampa","DokChampa"],
		["Dotum & DotumChe","Dotum & DotumChe"],
		["Ebrima","Ebrima"],
		["Eckmann","Eckmann"],
		["Edda","Edda"],
		["Edwardian Script ITC","Edwardian Script ITC"],
		["Elephant","Elephant"],
		["Engravers MT","Engravers MT"],
		["Enviro","Enviro"],
		["Eras ITC","Eras ITC"],
		["Estrangelo Edessa","Estrangelo Edessa"],
		["EucrosiaUPC","EucrosiaUPC"],
		["Euphemia","Euphemia"],
		["Eurostile","Eurostile"],
		["FangSong","FangSong"],
		["Felix Titling","Felix Titling"],
		["Fine Hand","Fine Hand"],
		["Fixed Miriam Transparent","Fixed Miriam Transparent"],
		["Flexure","Flexure"],
		["Footlight MT","Footlight MT"],
		["Forte","Forte"],
		["Franklin Gothic","Franklin Gothic"],
		["Franklin Gothic Medium","Franklin Gothic Medium"],
		["FrankRuehl","FrankRuehl"],
		["FreesiaUPC","FreesiaUPC"],
		["Freestyle Script","Freestyle Script"],
		["French Script MT","French Script MT"],
		["Futura","Futura"],
		["Gabriola","Gabriola"],
		["Gadugi","Gadugi"],
		["Garamond","Garamond"],
		["Garamond MT","Garamond MT"],
		["Gautami","Gautami"],
		["Georgia","Georgia"],
		["Georgia Ref","Georgia Ref"],
		["Gigi","Gigi"],
		["Gill Sans MT","Gill Sans MT"],
		["Gill Sans MT Condensed","Gill Sans MT Condensed"],
		["Gisha","Gisha"],
		["Gloucester","Gloucester"],
		["Goudy Old Style","Goudy Old Style"],
		["Goudy Stout","Goudy Stout"],
		["Gradl","Gradl"],
		["Grotesque","Grotesque"],
		["Gulim & GulimChe","Gulim & GulimChe"],
		["Gungsuh & GungsuhChe","Gungsuh & GungsuhChe"],
		["Hadassah Friedlaender","Hadassah Friedlaender"],
		["Haettenschweiler","Haettenschweiler"],
		["Harlow Solid Italic","Harlow Solid Italic"],
		["Harrington","Harrington"],
		["HGGothicE","HGGothicE"],
		["HGMinchoE","HGMinchoE"],
		["HGSoeiKakugothicUB","HGSoeiKakugothicUB"],
		["High Tower Text","High Tower Text"],
		["Holidays MT","Holidays MT"],
		["HoloLens MDL2 Assets","HoloLens MDL2 Assets"],
		["Impact","Impact"],
		["Imprint MT Shadow","Imprint MT Shadow"],
		["Informal Roman","Informal Roman"],
		["IrisUPC","IrisUPC"],
		["Iskoola Pota","Iskoola Pota"],
		["JasmineUPC","JasmineUPC"],
		["Javanese Text","Javanese Text"],
		["Jokerman","Jokerman"],
		["Juice ITC","Juice ITC"],
		["KaiTi","KaiTi"],
		["Kalinga","Kalinga"],
		["Kartika","Kartika"],
		["Keystrokes MT","Keystrokes MT"],
		["Khmer UI","Khmer UI"],
		["Kino MT","Kino MT"],
		["KodchiangUPC","KodchiangUPC"],
		["Kokila","Kokila"],
		["Kristen ITC","Kristen ITC"],
		["Kunstler Script","Kunstler Script"],
		["Lao UI","Lao UI"],
		["Latha","Latha"],
		["LCD","LCD"],
		["Leelawadee","Leelawadee"],
		["Levenim MT","Levenim MT"],
		["LilyUPC","LilyUPC"],
		["Lucida Blackletter","Lucida Blackletter"],
		["Lucida Bright","Lucida Bright"],
		["Lucida Bright Math","Lucida Bright Math"],
		["Lucida Calligraphy","Lucida Calligraphy"],
		["Lucida Console","Lucida Console"],
		["Lucida Fax","Lucida Fax"],
		["Lucida Handwriting","Lucida Handwriting"],
		["Lucida Sans","Lucida Sans"],
		["Lucida Sans Typewriter","Lucida Sans Typewriter"],
		["Lucida Sans Unicode","Lucida Sans Unicode"],
		["Magneto","Magneto"],
		["Maiandra GD","Maiandra GD"],
		["Malgun Gothic","Malgun Gothic"],
		["Mangal","Mangal"],
		["Map Symbols","Map Symbols"],
		["Marlett","Marlett"],
		["Matisse ITC","Matisse ITC"],
		["Matura MT Script Capitals","Matura MT Script Capitals"],
		["McZee","McZee"],
		["Mead Bold","Mead Bold"],
		["Meiryo","Meiryo"],
		["Mercurius Script MT Bold","Mercurius Script MT Bold"],
		["Microsoft GothicNeo","Microsoft GothicNeo"],
		["Microsoft Himalaya","Microsoft Himalaya"],
		["Microsoft JhengHei","Microsoft JhengHei"],
		["Microsoft JhengHei UI","Microsoft JhengHei UI"],
		["Microsoft New Tai Lue","Microsoft New Tai Lue"],
		["Microsoft PhagsPa","Microsoft PhagsPa"],
		["Microsoft Sans Serif","Microsoft Sans Serif"],
		["Microsoft Tai Le","Microsoft Tai Le"],
		["Microsoft Uighur","Microsoft Uighur"],
		["Microsoft YaHei","Microsoft YaHei"],
		["Microsoft YaHei UI","Microsoft YaHei UI"],
		["Microsoft Yi Baiti","Microsoft Yi Baiti"],
		["MingLiU","MingLiU"],
		["MingLiU_HKSCS","MingLiU_HKSCS"],
		["MingLiU_HKSCS-ExtB","MingLiU_HKSCS-ExtB"],
		["MingLiU-ExtB","MingLiU-ExtB"],
		["Minion Web","Minion Web"],
		["Minion Web","Minion Web"],
		["Miriam","Miriam"],
		["Miriam Fixed","Miriam Fixed"],
		["Mistral","Mistral"],
		["Modern Love","Modern Love"],
		["Modern No. 20","Modern No. 20"],
		["Mongolian Baiti","Mongolian Baiti"],
		["Monotype Corsiva","Monotype Corsiva"],
		["Monotype Sorts","Monotype Sorts"],
		["Monotype.com","Monotype.com"],
		["MoolBoran","MoolBoran"],
		["MS Gothic","MS Gothic"],
		["MS LineDraw","MS LineDraw"],
		["MS Mincho","MS Mincho"],
		["MS Outlook","MS Outlook"],
		["MS PGothic","MS PGothic"],
		["MS PMincho","MS PMincho"],
		["MS Reference","MS Reference"],
		["MS UI Gothic","MS UI Gothic"],
		["MT Extra","MT Extra"],
		["MV Boli","MV Boli"],
		["Myanmar Text","Myanmar Text"],
		["Narkisim","Narkisim"],
		["New Caledonia","New Caledonia"],
		["News Gothic MT","News Gothic MT"],
		["Niagara","Niagara"],
		["Nirmala UI","Nirmala UI"],
		["NSimSun","NSimSun"],
		["Nyala","Nyala"],
		["OCR A Extended","OCR A Extended"],
		["OCRB","OCRB"],
		["OCR-B-Digits","OCR-B-Digits"],
		["Old English Text MT","Old English Text MT"],
		["Onyx","Onyx"],
		["Palace Script MT","Palace Script MT"],
		["Palatino Linotype","Palatino Linotype"],
		["Papyrus","Papyrus"],
		["Parade","Parade"],
		["Parchment","Parchment"],
		["Parties MT","Parties MT"],
		["Peignot Medium","Peignot Medium"],
		["Pepita MT","Pepita MT"],
		["Perpetua","Perpetua"],
		["Perpetua Titling MT","Perpetua Titling MT"],
		["Placard Condensed","Placard Condensed"],
		["Plantagenet Cherokee","Plantagenet Cherokee"],
		["Playbill","Playbill"],
		["PMingLiU","PMingLiU"],
		["PMingLiU-ExtB","PMingLiU-ExtB"],
		["Poor Richard","Poor Richard"],
		["Posterama","Posterama"],
		["Pristina","Pristina"],
		["Quire Sans","Quire Sans"],
		["Raavi","Raavi"],
		["Rage Italic","Rage Italic"],
		["Ransom","Ransom"],
		["Ravie","Ravie"],
		["RefSpecialty","RefSpecialty"],
		["Rockwell","Rockwell"],
		["Rockwell Nova","Rockwell Nova"],
		["Rod","Rod"],
		["Runic MT Condensed","Runic MT Condensed"],
		["Sabon Next LT","Sabon Next LT"],
		["Sagona","Sagona"],
		["Sakkal Majalla","Sakkal Majalla"],
		["Script MT Bold","Script MT Bold"],
		["Segoe Chess","Segoe Chess"],
		["Segoe Print","Segoe Print"],
		["Segoe Script","Segoe Script"],
		["Segoe UI","Segoe UI"],
		["Segoe UI Symbol","Segoe UI Symbol"],
		["Selawik","Selawik"],
		["Shonar Bangla","Shonar Bangla"],
		["Showcard Gothic","Showcard Gothic"],
		["Shruti","Shruti"],
		["Signs MT","Signs MT"],
		["SimHei","SimHei"],
		["Simplified Arabic Fixed","Simplified Arabic Fixed"],
		["SimSun","SimSun"],
		["SimSun-ExtB","SimSun-ExtB"],
		["Sitka","Sitka"],
		["Snap ITC","Snap ITC"],
		["Sports MT","Sports MT"],
		["STCaiyun","STCaiyun"],
		["Stencil","Stencil"],
		["STFangsong","STFangsong"],
		["STHupo","STHupo"],
		["STKaiti","STKaiti"],
		["Stop","Stop"],
		["STXihei","STXihei"],
		["STXingkai","STXingkai"],
		["STXinwei","STXinwei"],
		["STZhongsong","STZhongsong"],
		["Sylfaen","Sylfaen"],
		["Symbol","Symbol"],
		["Tahoma","Tahoma"],
		["Temp Installer Font","Temp Installer Font"],
		["Tempo Grunge","Tempo Grunge"],
		["Tempus Sans ITC","Tempus Sans ITC"],
		["The Hand","The Hand"],
		["The Serif Hand","The Serif Hand"],
		["Times New Roman","Times New Roman"],
		["Times New Roman Special","Times New Roman Special"],
		["Tisa Offc Serif Pro","Tisa Offc Serif Pro"],
		["Traditional Arabic","Traditional Arabic"],
		["Transport MT","Transport MT"],
		["Trebuchet MS","Trebuchet MS"],
		["Tunga","Tunga"],
		["Tw Cen MT","Tw Cen MT"],
		["Univers","Univers"],
		["Urdu Typesetting","Urdu Typesetting"],
		["Utsaah","Utsaah"],
		["Vacation MT","Vacation MT"],
		["Vani","Vani"],
		["Verdana","Verdana"],
		["Verdana Ref","Verdana Ref"],
		["Vijaya","Vijaya"],
		["Viner Hand ITC","Viner Hand ITC"],
		["Vivaldi","Vivaldi"],
		["Vixar ASCI","Vixar ASCI"],
		["Vladimir Script","Vladimir Script"],
		["Vrinda","Vrinda"],
		["Walbaum","Walbaum"],
		["Webdings","Webdings"],
		["Westminster","Westminster"],
		["Wide Latin","Wide Latin"],
		["Wingdings","Wingdings"]
	  ]), "font");
  this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)    
      .appendField("大小")
      .appendField(new Blockly.FieldDropdown([
		  ["8px","8"],
		  ["9px","9"],		  
		  ["10px","10"],
		  ["11px","11"],		  
		  ["12px","12"],
		  ["14px","14"],		  
		  ["16px","16"],		  
		  ["18px","18"],		  
		  ["20px","20"],
		  ["24px","24"],		  
		  ["32px","32"],
		  ["42px","42"]					  
	  ]), "size"); 
    this.appendValueInput("x")
        .setAlign(Blockly.ALIGN_RIGHT)  	
        .setCheck("Number")
        .appendField("x");
    this.appendValueInput("y")
        .setAlign(Blockly.ALIGN_RIGHT)  	
        .setCheck("Number")
        .appendField("y");
    this.appendValueInput("str")
        .setAlign(Blockly.ALIGN_RIGHT)	
        .setCheck("String")
        .appendField("文字");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(220);
	this.setTooltip("");
	this.setHelpUrl("https://docs.microsoft.com/en-us/typography/font-list/");
  }
};

Blockly.Blocks['fu_oled_drawCustomFont'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED")
        .appendField("繪製使用本機字型");
    this.appendValueInput("font")
        .setAlign(Blockly.ALIGN_RIGHT)  	
        .setCheck("String");
	this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)    
      .appendField("大小")
      .appendField(new Blockly.FieldDropdown([
		  ["8px","8"],
		  ["9px","9"],		  
		  ["10px","10"],
		  ["11px","11"],		  
		  ["12px","12"],
		  ["14px","14"],		  
		  ["16px","16"],		  
		  ["18px","18"],		  
		  ["20px","20"],
		  ["24px","24"],		  
		  ["32px","32"],
		  ["42px","42"]					  
	  ]), "size"); 
    this.appendValueInput("x")
        .setAlign(Blockly.ALIGN_RIGHT)  	
        .setCheck("Number")
        .appendField("x");
    this.appendValueInput("y")
        .setAlign(Blockly.ALIGN_RIGHT)  	
        .setCheck("Number")
        .appendField("y");
    this.appendValueInput("str")
        .setAlign(Blockly.ALIGN_RIGHT)	
        .setCheck("String")
        .appendField("文字");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(220);
	this.setTooltip("");
	this.setHelpUrl("https://docs.microsoft.com/en-us/typography/font-list/");
  }
};

Blockly.Blocks['fu_oled_setCursor'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED")
        .appendField("設定游標位置");
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("x");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("y");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['fu_oled_Print'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED")
        .appendField("游標處繪製文字");
    this.appendValueInput("str")
        .setCheck(null)
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['fu_oled_drawGlyph'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED")
        .appendField("繪製圖示(Unicode字元)");
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("x");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("y");
    this.appendValueInput("position")
        .setCheck("Number")
        .appendField("位置");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(110);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['fu_oled_drawUTF8'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED")
        .appendField("繪製UTF8編碼字串");
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("x");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("y");
    this.appendValueInput("str")
        .setCheck(null)
        .appendField("字串");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(130);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//https://www.fileformat.info/info/charset/UTF-16/list.htm
//Blockly.FieldCheckbox.CHECK_CHAR="\u2615";

Blockly.Blocks['fu_oled_PROGMEM'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED");
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("logo"), "variable")
		.appendField("設定為");		
	var imageToXbm = function() {
		var block = this.sourceBlock_;
        var input = block.getInputTargetBlock("PROGMEM");
	    if (input) {
		    if (input.type="text") {
				var img=document.createElement('img');
				img.onload = function (event) {
					const canvas = document.createElement('canvas');
					const context = canvas.getContext('2d');
					
					canvas.width=img.width;
					canvas.height=img.height; 
					canvas.width = (canvas.width%8>0)?Math.round(canvas.width-canvas.width%8+8):Math.round(canvas.width);
					block.getField("size").setValue("( "+canvas.width + " * " + canvas.height + " )", "size");
					
					context.fillStyle="#FFFFFF";
					context.fillRect(0, 0, canvas.width, canvas.height);
					context.drawImage(img,0,0,img.width,img.height);

					const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
					const data = imageData.data;

					let xbmString = "";
					let pixel = 0;
					let value = 0;
					
					for(let h = 0; h < canvas.height; h++) {
						for(let w = 0; w < canvas.width / 8; w++) {
							value = 0;
							for(let p = 0; p < 8; p++) {
								const isBlack = !(data[pixel * 4]);
								if(isBlack)
									value += Math.pow(2, p);
								pixel++;
								const isNewRow = pixel/canvas.width === 1;
								if(isNewRow) break;
							}
							xbmString += ("0x"+("0"+(Number(value).toString(16))).slice(-2).toUpperCase()+",");
						}
					}
					
					document.body.appendChild(canvas);
					canvas.parentNode.removeChild(canvas);
					input.setFieldValue(xbmString, 'TEXT');
				}
				
				var file=document.createElement('input');
				file.type="file";
				file.onchange = function (event) {
					var target = event.target || window.event.srcElement;
					var files = target.files;
					if (FileReader && files && files.length) {
						var fr = new FileReader();
							fr.onload = function () {    
							img.src = fr.result;
						}
						fr.readAsDataURL(files[0]);
						file.parentNode.removeChild(file);
					}
				}
				document.body.appendChild(file);
				file.click();
		    }
		}
    };
    this.appendValueInput("PROGMEM")
        .setCheck("String")
        .appendField("XBM值");
		
	var field = new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABmJLR0QA/wD/AP+gvaeTAAABwElEQVRYhe3YzysEYRzH8fdYa3/FQStFCimnTUTK0VHtH+AoF24ODuvi4uCwSu4rzo7kIAdyozZam7BJcRO7XOz4scZh8zOzPM+z86DmU9vszDPfeV7zPDPP1oIbtRh2DbF4wipXJ16vJzk1NtRdrusBRWA5EosnrHhi6WlybnFbxlFR1ruyyehg1KgJBXsmZxeSorVagKGgn5HBqFFTHeoURWoBgjxSGxDkkFqBII7UDgQx5K8A4efISh2YiZn5Us0G0GXX6Dhwenz423NK3cCvTfFP8+eBjk/xxS2kLwEDImGoC4jVOz6C6SswC2A+wv6leP2fn2LHgZEw+CuLn0hYvN7xZ7AuAP1N8vXKI5jJwVFW9Sr2URrBTA4y12/77bVv33fPHqgwoKPJq9KFPPAz7uSmuG2vhZ3Te5b38mCB+RCgt7VKL/Az7j3yPFtgI5V/Pbayl6fwZNHX5pMCCj+DdriX3Hs8NDf4X/ctYDVlsnl4J+OTAJbAvaSx3vcBCbB+YLKWNkW7c24d/Aq5dSw+io4u1F8hReP4L4kqUvgtHmiR6KXFB2h6i3XHBarGBarGBaqm5Dr4zT8Cbv5FngFVTsI04FIf1wAAAABJRU5ErkJggg==", 30, 30, { alt: "*", flipRtl: "FALSE" });
	field.setOnClickHandler(imageToXbm);
	
	this.appendDummyInput()
		.appendField(new Blockly.FieldLabelSerializable("(白底黑字)"), "size")
		.appendField(field);
		
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(220);
 this.setTooltip("");
 this.setHelpUrl("https://windows87.github.io/xbm-viewer-converter/");
  }
};

Blockly.Blocks['fu_oled_qrcode_PROGMEM'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED");
	this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("qrcode"), "variable")
		.appendField("設定為");	
	this.appendDummyInput()
        .appendField("QRCODE")	
        .appendField(new Blockly.FieldDropdown([
		["64x64","64x64"]		
	]), "size");			
    var field = new Blockly.FieldTextInput();
    field.onFinishEditing_ = this.onFinishEditing;	
    this.appendDummyInput()		
        .appendField("文字")
		.appendField(field);	
    this.appendValueInput("PROGMEM")
        .setCheck("String");	
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(220);
    this.setTooltip("");
	this.setHelpUrl("https://windows87.github.io/xbm-viewer-converter/");
    this.getInput('PROGMEM').setVisible(false);
  },
  
	onFinishEditing: function(val) {
		var block = this.sourceBlock_;
		var input = block.getInputTargetBlock("PROGMEM");
		var img=document.createElement('img');
		var url = "https://chart.googleapis.com/chart?chs=64x64&cht=qr&chl=" + val + "&choe=UTF-8&chld=M|0";
		console.log(url);
		img.src = url;
		
		img.onload = function (event) {
			const canvas = document.createElement('canvas');
			const context = canvas.getContext('2d');
			
			canvas.width=img.width;
			canvas.height=img.height; 
			canvas.width = (canvas.width%8>0)?Math.round(canvas.width-canvas.width%8+8):Math.round(canvas.width);
			
			context.fillStyle="#FFFFFF";
			context.fillRect(0, 0, canvas.width, canvas.height);
			context.drawImage(img,0,0,img.width,img.height);

			const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
			const data = imageData.data;

			let xbmString = "";
			let pixel = 0;
			let value = 0;
			
			for(let h = 0; h < canvas.height; h++) {
				for(let w = 0; w < canvas.width / 8; w++) {
					value = 0;
					for(let p = 0; p < 8; p++) {
						const isBlack = !(data[pixel * 4]);
						if(isBlack)
							value += Math.pow(2, p);
						pixel++;
						const isNewRow = pixel/canvas.width === 1;
						if(isNewRow) break;
					}
					xbmString += ("0x"+("0"+(Number(value).toString(16))).slice(-2).toUpperCase()+",");
				}
			}
			
			document.body.appendChild(canvas);
			canvas.parentNode.removeChild(canvas);
			input.setFieldValue(xbmString, 'TEXT');
		}
    }
};

Blockly.Blocks['fu_oled_PROGMEM_array'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED");
    this.appendDummyInput()
        .appendField("陣列")	
        .appendField(new Blockly.FieldVariable("logo"), "variable")	;		
    this.appendValueInput("PROGMEM")
        .setCheck("Array")
        .appendField("XBM值");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(220);
 this.setTooltip("");
 this.setHelpUrl("https://windows87.github.io/xbm-viewer-converter/");
  }
};

Blockly.Blocks['fu_oled_setBitmapMode'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED")
        .appendField("繪製圖像背景顏色");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField(new Blockly.FieldDropdown([
		["不透明","0"], 
		["透明","1"]		
	]), "mode");		
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(150);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['fu_oled_drawXBMP'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED")
        .appendField("繪製圖像");
    this.appendValueInput("PROGMEM")
        .setCheck("String")
        .appendField("XBM值");	
    this.appendValueInput("width")
        .setCheck("Number")
        .appendField("寬度");
    this.appendValueInput("height")
        .setCheck("Number")
        .appendField("高度");
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("x");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("y");		
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(220);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['fu_oled_drawXBMP_PROGMEM'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED")
        .appendField("繪製圖像");
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("logo"), "variable");		
    this.appendValueInput("width")
        .setCheck("Number")
        .appendField("寬度");
    this.appendValueInput("height")
        .setCheck("Number")
        .appendField("高度");
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("x");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("y");		
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(220);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['fu_oled_drawXBMP_PROGMEM_array'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED")
        .appendField("繪製圖像");
    this.appendDummyInput()
        .appendField("陣列")	
        .appendField(new Blockly.FieldVariable("logo"), "variable");
    this.appendValueInput("index")
        .setCheck("Number")
        .appendField("索引");		
    this.appendValueInput("width")
        .setCheck("Number")
        .appendField("寬度");
    this.appendValueInput("height")
        .setCheck("Number")
        .appendField("高度");
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("x");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("y");		
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(220);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['fu_oled_drawPixelMap'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED")
        .appendField("繪製像素圖");
		
	var block = this;
    var validator_width = function(newValue) {
	    var width = Number(newValue);
		var height = Number(block.getFieldValue("height"));
	  	var field;
		var input;
		for (var i=0;i<(64*64);i++) {
			if (block.getField("chk"+i)) {
				block.getField("chk"+i).dispose();
			}
			if (block.getInput("input"+i)) {
				block.removeInput("input"+i);
			}			
		}
		for (var j=0;j<(width*height);j++) {
			if (j%width==0) 
				input = block.appendDummyInput("input"+j);
			field = new Blockly.FieldCheckbox("FALSE");
			input.appendField(field, "chk"+j);
		}
    };
    var validator_height = function(newValue) {
	    var width = Number(block.getFieldValue("width"));
		var height = Number(newValue);
	  	var field;
		var input;
		for (var i=0;i<(64*64);i++) {
			if (block.getField("chk"+i)) {
				block.getField("chk"+i).dispose();
			}
			if (block.getInput("input"+i)) {
				block.removeInput("input"+i);
			}			
		}
		for (var j=0;j<(width*height);j++) {
			if (j%width==0) 
				input = block.appendDummyInput("input"+j);
			field = new Blockly.FieldCheckbox("FALSE");
			input.appendField(field, "chk"+j);
		}
    };	
	
	var opt = [];
	for (var k=8;k<=128;k+=8) {
		opt.push([k.toString(),k.toString()]);
	}
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)	
        .appendField("寬度")
        .appendField(new Blockly.FieldDropdown(opt, validator_width), "width")
        .appendField("高度")
        .appendField(new Blockly.FieldDropdown(opt, validator_height), "height");
    this.appendValueInput("x")
        .setAlign(Blockly.ALIGN_RIGHT)		
        .setCheck("Number")
        .appendField("x");
    this.appendValueInput("y")
        .setAlign(Blockly.ALIGN_RIGHT)		
        .setCheck("Number")
        .appendField("y");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(10);
  }
};

Blockly.Blocks['fu_oled_drawBox'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED")
        .appendField("繪製實心方形");
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("中心：x");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("y");
    this.appendValueInput("width")
        .setCheck("Number")
        .appendField("寬度");
    this.appendValueInput("height")
        .setCheck("Number")
        .appendField("高度");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(170);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['fu_oled_drawRBox'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED")
        .appendField("繪製圓角實心方形");
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("中心：x");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("y");
    this.appendValueInput("width")
        .setCheck("Number")
        .appendField("寬度");
    this.appendValueInput("height")
        .setCheck("Number")
        .appendField("高度");
    this.appendValueInput("radius")
        .setCheck("Number")
        .appendField("圓角半徑");		
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(170);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['fu_oled_drawFrame'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED")
        .appendField("繪製空心方形");
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("中心：x");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("y");
    this.appendValueInput("width")
        .setCheck("Number")
        .appendField("寬度");
    this.appendValueInput("height")
        .setCheck("Number")
        .appendField("高度");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['fu_oled_drawRFrame'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED")
        .appendField("繪製圓角空心方形");
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("中心：x");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("y");
    this.appendValueInput("width")
        .setCheck("Number")
        .appendField("寬度");
    this.appendValueInput("height")
        .setCheck("Number")
        .appendField("高度");
    this.appendValueInput("radius")
        .setCheck("Number")
        .appendField("圓角半徑");		
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['fu_oled_drawCircle'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED")
        .appendField("繪製空心圓");
    this.appendValueInput("x0")
        .setCheck("Number")
        .appendField("圓心：x");
    this.appendValueInput("y0")
        .setCheck("Number")
        .appendField("y");
    this.appendValueInput("radius")
        .setCheck("Number")
        .appendField("半徑");
    this.appendDummyInput()
        .appendField("選項")
        .appendField(new Blockly.FieldDropdown([
		["完整的圓","U8G_DRAW_ALL"], 
		["右上圓弧","U8G2_DRAW_UPPER_RIGHT"], 
		["左上圓弧","U8G2_DRAW_UPPER_LEFT"],
		["左下圓弧","U8G2_DRAW_LOWER_LEFT"], 
		["右下圓弧","U8G2_DRAW_LOWER_RIGHT"]			
	]), "option");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(190);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['fu_oled_drawDisc'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED")
        .appendField("繪製實心圓");
    this.appendValueInput("x0")
        .setCheck("Number")
        .appendField("圓心：x");
    this.appendValueInput("y0")
        .setCheck("Number")
        .appendField("y");
    this.appendValueInput("radius")
        .setCheck("Number")
        .appendField("半徑");
    this.appendDummyInput()
        .appendField("選項")
        .appendField(new Blockly.FieldDropdown([
		["完整的圓","U8G_DRAW_ALL"], 
		["右上圓弧","U8G2_DRAW_UPPER_RIGHT"], 
		["左上圓弧","U8G2_DRAW_UPPER_LEFT"],
		["左下圓弧","U8G2_DRAW_LOWER_LEFT"], 
		["右下圓弧","U8G2_DRAW_LOWER_RIGHT"]			
	]), "option");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['fu_oled_drawEllipse'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED")
        .appendField("繪製空心橢圓");
    this.appendValueInput("x0")
        .setCheck("Number")
        .appendField("圓心：x");
    this.appendValueInput("y0")
        .setCheck("Number")
        .appendField("y");
    this.appendValueInput("rx")
        .setCheck("Number")
        .appendField("水平向半徑");
    this.appendValueInput("ry")
        .setCheck("Number")
        .appendField("垂直向半徑");
    this.appendDummyInput()
        .appendField("選項")
        .appendField(new Blockly.FieldDropdown([
		["完整的圓","U8G_DRAW_ALL"], 
		["右上圓弧","U8G2_DRAW_UPPER_RIGHT"], 
		["左上圓弧","U8G2_DRAW_UPPER_LEFT"],
		["左下圓弧","U8G2_DRAW_LOWER_LEFT"], 
		["右下圓弧","U8G2_DRAW_LOWER_RIGHT"]			
	]), "option");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['fu_oled_drawFilledEllipse'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED")
        .appendField("繪製實心橢圓");
    this.appendValueInput("x0")
        .setCheck("Number")
        .appendField("圓心：x");
    this.appendValueInput("y0")
        .setCheck("Number")
        .appendField("y");
    this.appendValueInput("rx")
        .setCheck("Number")
        .appendField("水平向半徑");
    this.appendValueInput("ry")
        .setCheck("Number")
        .appendField("垂直向半徑");
    this.appendDummyInput()
        .appendField("選項")
        .appendField(new Blockly.FieldDropdown([
		["完整的圓","U8G_DRAW_ALL"], 
		["右上圓弧","U8G2_DRAW_UPPER_RIGHT"], 
		["左上圓弧","U8G2_DRAW_UPPER_LEFT"],
		["左下圓弧","U8G2_DRAW_LOWER_LEFT"], 
		["右下圓弧","U8G2_DRAW_LOWER_RIGHT"]			
	]), "option");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(220);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['fu_oled_drawHLine'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED")
        .appendField("繪製水平線");
    this.appendValueInput("x0")
        .setCheck("Number")
        .appendField("起點：x");
    this.appendValueInput("y0")
        .setCheck("Number")
        .appendField("y");
    this.appendValueInput("width")
        .setCheck("Number")
        .appendField("寬度");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['fu_oled_drawVLine'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED")
        .appendField("繪製垂直線");
    this.appendValueInput("x0")
        .setCheck("Number")
        .appendField("起點：x");
    this.appendValueInput("y0")
        .setCheck("Number")
        .appendField("y");
    this.appendValueInput("height")
        .setCheck("Number")
        .appendField("高度");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['fu_oled_drawLine'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED")
        .appendField("繪製斜直線");
    this.appendValueInput("x0")
        .setCheck("Number")
        .appendField("起點：x");
    this.appendValueInput("y0")
        .setCheck("Number")
        .appendField("y");
    this.appendValueInput("x1")
        .setCheck("Number")
        .appendField("終點：x");
    this.appendValueInput("y1")
        .setCheck("Number")
        .appendField("y");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(250);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['fu_oled_drawTriangle'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED")
        .appendField("繪製三角形");
    this.appendValueInput("x0")
        .setCheck("Number")
        .appendField("第一點：x");
    this.appendValueInput("y0")
        .setCheck("Number")
        .appendField("y");
    this.appendValueInput("x1")
        .setCheck("Number")
        .appendField("第二點：x");
    this.appendValueInput("y1")
        .setCheck("Number")
        .appendField("y");
    this.appendValueInput("x2")
        .setCheck("Number")
        .appendField("第三點：x");
    this.appendValueInput("y2")
        .setCheck("Number")
        .appendField("y");		
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(250);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['fu_oled_drawPixel'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED")
        .appendField("繪製像素點");
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("x");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("y");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

var opt = [
	["u8g2_font_10x20_me","u8g2_font_10x20_me"],
	["u8g2_font_10x20_mf","u8g2_font_10x20_mf"],
	["u8g2_font_10x20_mn","u8g2_font_10x20_mn"],
	["u8g2_font_10x20_mr","u8g2_font_10x20_mr"],
	["u8g2_font_10x20_t_arabic","u8g2_font_10x20_t_arabic"],
	["u8g2_font_10x20_t_cyrillic","u8g2_font_10x20_t_cyrillic"],
	["u8g2_font_10x20_t_greek","u8g2_font_10x20_t_greek"],
	["u8g2_font_10x20_te","u8g2_font_10x20_te"],
	["u8g2_font_10x20_tf","u8g2_font_10x20_tf"],
	["u8g2_font_10x20_tn","u8g2_font_10x20_tn"],
	["u8g2_font_10x20_tr","u8g2_font_10x20_tr"],
	["u8g2_font_4x6_mf","u8g2_font_4x6_mf"],
	["u8g2_font_4x6_mn","u8g2_font_4x6_mn"],
	["u8g2_font_4x6_mr","u8g2_font_4x6_mr"],
	["u8g2_font_4x6_t_cyrillic","u8g2_font_4x6_t_cyrillic"],
	["u8g2_font_4x6_tf","u8g2_font_4x6_tf"],
	["u8g2_font_4x6_tn","u8g2_font_4x6_tn"],
	["u8g2_font_4x6_tr","u8g2_font_4x6_tr"],
	["u8g2_font_5x7_mf","u8g2_font_5x7_mf"],
	["u8g2_font_5x7_mn","u8g2_font_5x7_mn"],
	["u8g2_font_5x7_mr","u8g2_font_5x7_mr"],
	["u8g2_font_5x7_t_cyrillic","u8g2_font_5x7_t_cyrillic"],
	["u8g2_font_5x7_tf","u8g2_font_5x7_tf"],
	["u8g2_font_5x7_tn","u8g2_font_5x7_tn"],
	["u8g2_font_5x7_tr","u8g2_font_5x7_tr"],
	["u8g2_font_5x8_mf","u8g2_font_5x8_mf"],
	["u8g2_font_5x8_mn","u8g2_font_5x8_mn"],
	["u8g2_font_5x8_mr","u8g2_font_5x8_mr"],
	["u8g2_font_5x8_t_cyrillic","u8g2_font_5x8_t_cyrillic"],
	["u8g2_font_5x8_tf","u8g2_font_5x8_tf"],
	["u8g2_font_5x8_tn","u8g2_font_5x8_tn"],
	["u8g2_font_5x8_tr","u8g2_font_5x8_tr"],
	["u8g2_font_6x10_mf","u8g2_font_6x10_mf"],
	["u8g2_font_6x10_mn","u8g2_font_6x10_mn"],
	["u8g2_font_6x10_mr","u8g2_font_6x10_mr"],
	["u8g2_font_6x10_tf","u8g2_font_6x10_tf"],
	["u8g2_font_6x10_tn","u8g2_font_6x10_tn"],
	["u8g2_font_6x10_tr","u8g2_font_6x10_tr"],
	["u8g2_font_6x12_m_symbols","u8g2_font_6x12_m_symbols"],
	["u8g2_font_6x12_me","u8g2_font_6x12_me"],
	["u8g2_font_6x12_mf","u8g2_font_6x12_mf"],
	["u8g2_font_6x12_mn","u8g2_font_6x12_mn"],
	["u8g2_font_6x12_mr","u8g2_font_6x12_mr"],
	["u8g2_font_6x12_t_cyrillic","u8g2_font_6x12_t_cyrillic"],
	["u8g2_font_6x12_t_symbols","u8g2_font_6x12_t_symbols"],
	["u8g2_font_6x12_te","u8g2_font_6x12_te"],
	["u8g2_font_6x12_tf","u8g2_font_6x12_tf"],
	["u8g2_font_6x12_tn","u8g2_font_6x12_tn"],
	["u8g2_font_6x12_tr","u8g2_font_6x12_tr"],
	["u8g2_font_6x13_me","u8g2_font_6x13_me"],
	["u8g2_font_6x13_mf","u8g2_font_6x13_mf"],
	["u8g2_font_6x13_mn","u8g2_font_6x13_mn"],
	["u8g2_font_6x13_mr","u8g2_font_6x13_mr"],
	["u8g2_font_6x13_t_cyrillic","u8g2_font_6x13_t_cyrillic"],
	["u8g2_font_6x13_t_hebrew","u8g2_font_6x13_t_hebrew"],
	["u8g2_font_6x13_te","u8g2_font_6x13_te"],
	["u8g2_font_6x13_tf","u8g2_font_6x13_tf"],
	["u8g2_font_6x13_tn","u8g2_font_6x13_tn"],
	["u8g2_font_6x13_tr","u8g2_font_6x13_tr"],
	["u8g2_font_6x13B_mf","u8g2_font_6x13B_mf"],
	["u8g2_font_6x13B_mn","u8g2_font_6x13B_mn"],
	["u8g2_font_6x13B_mr","u8g2_font_6x13B_mr"],
	["u8g2_font_6x13B_t_cyrillic","u8g2_font_6x13B_t_cyrillic"],
	["u8g2_font_6x13B_t_hebrew","u8g2_font_6x13B_t_hebrew"],
	["u8g2_font_6x13B_tf","u8g2_font_6x13B_tf"],
	["u8g2_font_6x13B_tn","u8g2_font_6x13B_tn"],
	["u8g2_font_6x13B_tr","u8g2_font_6x13B_tr"],
	["u8g2_font_6x13O_mf","u8g2_font_6x13O_mf"],
	["u8g2_font_6x13O_mn","u8g2_font_6x13O_mn"],
	["u8g2_font_6x13O_mr","u8g2_font_6x13O_mr"],
	["u8g2_font_6x13O_tf","u8g2_font_6x13O_tf"],
	["u8g2_font_6x13O_tn","u8g2_font_6x13O_tn"],
	["u8g2_font_6x13O_tr","u8g2_font_6x13O_tr"],
	["u8g2_font_7Segments_26x42_mn","u8g2_font_7Segments_26x42_mn"],
	["u8g2_font_7x13_m_symbols","u8g2_font_7x13_m_symbols"],
	["u8g2_font_7x13_me","u8g2_font_7x13_me"],
	["u8g2_font_7x13_mf","u8g2_font_7x13_mf"],
	["u8g2_font_7x13_mn","u8g2_font_7x13_mn"],
	["u8g2_font_7x13_mr","u8g2_font_7x13_mr"],
	["u8g2_font_7x13_t_cyrillic","u8g2_font_7x13_t_cyrillic"],
	["u8g2_font_7x13_t_symbols","u8g2_font_7x13_t_symbols"],
	["u8g2_font_7x13_te","u8g2_font_7x13_te"],
	["u8g2_font_7x13_tf","u8g2_font_7x13_tf"],
	["u8g2_font_7x13_tn","u8g2_font_7x13_tn"],
	["u8g2_font_7x13_tr","u8g2_font_7x13_tr"],
	["u8g2_font_7x13B_mf","u8g2_font_7x13B_mf"],
	["u8g2_font_7x13B_mn","u8g2_font_7x13B_mn"],
	["u8g2_font_7x13B_mr","u8g2_font_7x13B_mr"],
	["u8g2_font_7x13B_tf","u8g2_font_7x13B_tf"],
	["u8g2_font_7x13B_tn","u8g2_font_7x13B_tn"],
	["u8g2_font_7x13B_tr","u8g2_font_7x13B_tr"],
	["u8g2_font_7x13O_mf","u8g2_font_7x13O_mf"],
	["u8g2_font_7x13O_mn","u8g2_font_7x13O_mn"],
	["u8g2_font_7x13O_mr","u8g2_font_7x13O_mr"],
	["u8g2_font_7x13O_tf","u8g2_font_7x13O_tf"],
	["u8g2_font_7x13O_tn","u8g2_font_7x13O_tn"],
	["u8g2_font_7x13O_tr","u8g2_font_7x13O_tr"],
	["u8g2_font_7x14_mf","u8g2_font_7x14_mf"],
	["u8g2_font_7x14_mn","u8g2_font_7x14_mn"],
	["u8g2_font_7x14_mr","u8g2_font_7x14_mr"],
	["u8g2_font_7x14_tf","u8g2_font_7x14_tf"],
	["u8g2_font_7x14_tn","u8g2_font_7x14_tn"],
	["u8g2_font_7x14_tr","u8g2_font_7x14_tr"],
	["u8g2_font_7x14B_mf","u8g2_font_7x14B_mf"],
	["u8g2_font_7x14B_mn","u8g2_font_7x14B_mn"],
	["u8g2_font_7x14B_mr","u8g2_font_7x14B_mr"],
	["u8g2_font_7x14B_tf","u8g2_font_7x14B_tf"],
	["u8g2_font_7x14B_tn","u8g2_font_7x14B_tn"],
	["u8g2_font_7x14B_tr","u8g2_font_7x14B_tr"],
	["u8g2_font_8x13_m_symbols","u8g2_font_8x13_m_symbols"],
	["u8g2_font_8x13_me","u8g2_font_8x13_me"],
	["u8g2_font_8x13_mf","u8g2_font_8x13_mf"],
	["u8g2_font_8x13_mn","u8g2_font_8x13_mn"],
	["u8g2_font_8x13_mr","u8g2_font_8x13_mr"],
	["u8g2_font_8x13_t_cyrillic","u8g2_font_8x13_t_cyrillic"],
	["u8g2_font_8x13_t_symbols","u8g2_font_8x13_t_symbols"],
	["u8g2_font_8x13_te","u8g2_font_8x13_te"],
	["u8g2_font_8x13_tf","u8g2_font_8x13_tf"],
	["u8g2_font_8x13_tn","u8g2_font_8x13_tn"],
	["u8g2_font_8x13_tr","u8g2_font_8x13_tr"],
	["u8g2_font_8x13B_mf","u8g2_font_8x13B_mf"],
	["u8g2_font_8x13B_mn","u8g2_font_8x13B_mn"],
	["u8g2_font_8x13B_mr","u8g2_font_8x13B_mr"],
	["u8g2_font_8x13B_tf","u8g2_font_8x13B_tf"],
	["u8g2_font_8x13B_tn","u8g2_font_8x13B_tn"],
	["u8g2_font_8x13B_tr","u8g2_font_8x13B_tr"],
	["u8g2_font_8x13O_mf","u8g2_font_8x13O_mf"],
	["u8g2_font_8x13O_mn","u8g2_font_8x13O_mn"],
	["u8g2_font_8x13O_mr","u8g2_font_8x13O_mr"],
	["u8g2_font_8x13O_tf","u8g2_font_8x13O_tf"],
	["u8g2_font_8x13O_tn","u8g2_font_8x13O_tn"],
	["u8g2_font_8x13O_tr","u8g2_font_8x13O_tr"],
	["u8g2_font_9x15_m_symbols","u8g2_font_9x15_m_symbols"],
	["u8g2_font_9x15_me","u8g2_font_9x15_me"],
	["u8g2_font_9x15_mf","u8g2_font_9x15_mf"],
	["u8g2_font_9x15_mn","u8g2_font_9x15_mn"],
	["u8g2_font_9x15_mr","u8g2_font_9x15_mr"],
	["u8g2_font_9x15_t_cyrillic","u8g2_font_9x15_t_cyrillic"],
	["u8g2_font_9x15_t_symbols","u8g2_font_9x15_t_symbols"],
	["u8g2_font_9x15_te","u8g2_font_9x15_te"],
	["u8g2_font_9x15_tf","u8g2_font_9x15_tf"],
	["u8g2_font_9x15_tn","u8g2_font_9x15_tn"],
	["u8g2_font_9x15_tr","u8g2_font_9x15_tr"],
	["u8g2_font_9x15B_mf","u8g2_font_9x15B_mf"],
	["u8g2_font_9x15B_mn","u8g2_font_9x15B_mn"],
	["u8g2_font_9x15B_mr","u8g2_font_9x15B_mr"],
	["u8g2_font_9x15B_tf","u8g2_font_9x15B_tf"],
	["u8g2_font_9x15B_tn","u8g2_font_9x15B_tn"],
	["u8g2_font_9x15B_tr","u8g2_font_9x15B_tr"],
	["u8g2_font_9x18_mf","u8g2_font_9x18_mf"],
	["u8g2_font_9x18_mn","u8g2_font_9x18_mn"],
	["u8g2_font_9x18_mr","u8g2_font_9x18_mr"],
	["u8g2_font_9x18_tf","u8g2_font_9x18_tf"],
	["u8g2_font_9x18_tn","u8g2_font_9x18_tn"],
	["u8g2_font_9x18_tr","u8g2_font_9x18_tr"],
	["u8g2_font_9x18B_mf","u8g2_font_9x18B_mf"],
	["u8g2_font_9x18B_mn","u8g2_font_9x18B_mn"],
	["u8g2_font_9x18B_mr","u8g2_font_9x18B_mr"],
	["u8g2_font_9x18B_tf","u8g2_font_9x18B_tf"],
	["u8g2_font_9x18B_tn","u8g2_font_9x18B_tn"],
	["u8g2_font_9x18B_tr","u8g2_font_9x18B_tr"],
	["u8g2_font_adventurer_t_all","u8g2_font_adventurer_t_all"],
	["u8g2_font_adventurer_tf","u8g2_font_adventurer_tf"],
	["u8g2_font_adventurer_tr","u8g2_font_adventurer_tr"],
	["u8g2_font_amstrad_cpc_extended_8f","u8g2_font_amstrad_cpc_extended_8f"],
	["u8g2_font_amstrad_cpc_extended_8n","u8g2_font_amstrad_cpc_extended_8n"],
	["u8g2_font_amstrad_cpc_extended_8r","u8g2_font_amstrad_cpc_extended_8r"],
	["u8g2_font_amstrad_cpc_extended_8u","u8g2_font_amstrad_cpc_extended_8u"],
	["u8g2_font_artossans8_8n","u8g2_font_artossans8_8n"],
	["u8g2_font_artossans8_8r","u8g2_font_artossans8_8r"],
	["u8g2_font_artossans8_8u","u8g2_font_artossans8_8u"],
	["u8g2_font_artosserif8_8n","u8g2_font_artosserif8_8n"],
	["u8g2_font_artosserif8_8r","u8g2_font_artosserif8_8r"],
	["u8g2_font_artosserif8_8u","u8g2_font_artosserif8_8u"],
	["u8g2_font_astragal_nbp_tf","u8g2_font_astragal_nbp_tf"],
	["u8g2_font_astragal_nbp_tn","u8g2_font_astragal_nbp_tn"],
	["u8g2_font_astragal_nbp_tr","u8g2_font_astragal_nbp_tr"],
	["u8g2_font_b10_b_t_japanese1","u8g2_font_b10_b_t_japanese1"],
	["u8g2_font_b10_b_t_japanese2","u8g2_font_b10_b_t_japanese2"],
	["u8g2_font_b10_t_japanese1","u8g2_font_b10_t_japanese1"],
	["u8g2_font_b10_t_japanese2","u8g2_font_b10_t_japanese2"],
	["u8g2_font_b12_b_t_japanese1","u8g2_font_b12_b_t_japanese1"],
	["u8g2_font_b12_b_t_japanese2","u8g2_font_b12_b_t_japanese2"],
	["u8g2_font_b12_b_t_japanese3","u8g2_font_b12_b_t_japanese3"],
	["u8g2_font_b12_t_japanese1","u8g2_font_b12_t_japanese1"],
	["u8g2_font_b12_t_japanese2","u8g2_font_b12_t_japanese2"],
	["u8g2_font_b12_t_japanese3","u8g2_font_b12_t_japanese3"],
	["u8g2_font_b16_b_t_japanese1","u8g2_font_b16_b_t_japanese1"],
	["u8g2_font_b16_b_t_japanese2","u8g2_font_b16_b_t_japanese2"],
	["u8g2_font_b16_b_t_japanese3","u8g2_font_b16_b_t_japanese3"],
	["u8g2_font_b16_t_japanese1","u8g2_font_b16_t_japanese1"],
	["u8g2_font_b16_t_japanese2","u8g2_font_b16_t_japanese2"],
	["u8g2_font_b16_t_japanese3","u8g2_font_b16_t_japanese3"],
	["u8g2_font_baby_tf","u8g2_font_baby_tf"],
	["u8g2_font_baby_tn","u8g2_font_baby_tn"],
	["u8g2_font_baby_tr","u8g2_font_baby_tr"],
	["u8g2_font_balthasar_regular_nbp_tf","u8g2_font_balthasar_regular_nbp_tf"],
	["u8g2_font_balthasar_regular_nbp_tn","u8g2_font_balthasar_regular_nbp_tn"],
	["u8g2_font_balthasar_regular_nbp_tr","u8g2_font_balthasar_regular_nbp_tr"],
	["u8g2_font_balthasar_titling_nbp_tf","u8g2_font_balthasar_titling_nbp_tf"],
	["u8g2_font_balthasar_titling_nbp_tn","u8g2_font_balthasar_titling_nbp_tn"],
	["u8g2_font_balthasar_titling_nbp_tr","u8g2_font_balthasar_titling_nbp_tr"],
	["u8g2_font_battery19_tn","u8g2_font_battery19_tn"],
	["u8g2_font_bauhaus2015_tn","u8g2_font_bauhaus2015_tn"],
	["u8g2_font_bauhaus2015_tr","u8g2_font_bauhaus2015_tr"],
	["u8g2_font_BBSesque_te","u8g2_font_BBSesque_te"],
	["u8g2_font_BBSesque_tf","u8g2_font_BBSesque_tf"],
	["u8g2_font_BBSesque_tr","u8g2_font_BBSesque_tr"],
	["u8g2_font_beanstalk_mel_tn","u8g2_font_beanstalk_mel_tn"],
	["u8g2_font_beanstalk_mel_tr","u8g2_font_beanstalk_mel_tr"],
	["u8g2_font_bitcasual_t_all","u8g2_font_bitcasual_t_all"],
	["u8g2_font_bitcasual_tf","u8g2_font_bitcasual_tf"],
	["u8g2_font_bitcasual_tn","u8g2_font_bitcasual_tn"],
	["u8g2_font_bitcasual_tr","u8g2_font_bitcasual_tr"],
	["u8g2_font_bitcasual_tu","u8g2_font_bitcasual_tu"],
	["u8g2_font_BitTypeWriter_te","u8g2_font_BitTypeWriter_te"],
	["u8g2_font_BitTypeWriter_tr","u8g2_font_BitTypeWriter_tr"],
	["u8g2_font_blipfest_07_tn","u8g2_font_blipfest_07_tn"],
	["u8g2_font_blipfest_07_tr","u8g2_font_blipfest_07_tr"],
	["u8g2_font_Born2bSportySlab_t_all","u8g2_font_Born2bSportySlab_t_all"],
	["u8g2_font_Born2bSportySlab_te","u8g2_font_Born2bSportySlab_te"],
	["u8g2_font_Born2bSportySlab_tf","u8g2_font_Born2bSportySlab_tf"],
	["u8g2_font_Born2bSportySlab_tr","u8g2_font_Born2bSportySlab_tr"],
	["u8g2_font_Born2bSportyV2_te","u8g2_font_Born2bSportyV2_te"],
	["u8g2_font_Born2bSportyV2_tf","u8g2_font_Born2bSportyV2_tf"],
	["u8g2_font_Born2bSportyV2_tr","u8g2_font_Born2bSportyV2_tr"],
	["u8g2_font_bracketedbabies_tr","u8g2_font_bracketedbabies_tr"],
	["u8g2_font_bubble_tn","u8g2_font_bubble_tn"],
	["u8g2_font_bubble_tr","u8g2_font_bubble_tr"],
	["u8g2_font_calibration_gothic_nbp_t_all","u8g2_font_calibration_gothic_nbp_t_all"],
	["u8g2_font_calibration_gothic_nbp_tf","u8g2_font_calibration_gothic_nbp_tf"],
	["u8g2_font_calibration_gothic_nbp_tn","u8g2_font_calibration_gothic_nbp_tn"],
	["u8g2_font_calibration_gothic_nbp_tr","u8g2_font_calibration_gothic_nbp_tr"],
	["u8g2_font_cardimon_pixel_tf","u8g2_font_cardimon_pixel_tf"],
	["u8g2_font_cardimon_pixel_tn","u8g2_font_cardimon_pixel_tn"],
	["u8g2_font_cardimon_pixel_tr","u8g2_font_cardimon_pixel_tr"],
	["u8g2_font_celibatemonk_tr","u8g2_font_celibatemonk_tr"],
	["u8g2_font_chikita_tf","u8g2_font_chikita_tf"],
	["u8g2_font_chikita_tn","u8g2_font_chikita_tn"],
	["u8g2_font_chikita_tr","u8g2_font_chikita_tr"],
	["u8g2_font_chroma48medium8_8n","u8g2_font_chroma48medium8_8n"],
	["u8g2_font_chroma48medium8_8r","u8g2_font_chroma48medium8_8r"],
	["u8g2_font_chroma48medium8_8u","u8g2_font_chroma48medium8_8u"],
	["u8g2_font_courB08_tf","u8g2_font_courB08_tf"],
	["u8g2_font_courB08_tn","u8g2_font_courB08_tn"],
	["u8g2_font_courB08_tr","u8g2_font_courB08_tr"],
	["u8g2_font_courB10_tf","u8g2_font_courB10_tf"],
	["u8g2_font_courB10_tn","u8g2_font_courB10_tn"],
	["u8g2_font_courB10_tr","u8g2_font_courB10_tr"],
	["u8g2_font_courB12_tf","u8g2_font_courB12_tf"],
	["u8g2_font_courB12_tn","u8g2_font_courB12_tn"],
	["u8g2_font_courB12_tr","u8g2_font_courB12_tr"],
	["u8g2_font_courB14_tf","u8g2_font_courB14_tf"],
	["u8g2_font_courB14_tn","u8g2_font_courB14_tn"],
	["u8g2_font_courB14_tr","u8g2_font_courB14_tr"],
	["u8g2_font_courB18_tf","u8g2_font_courB18_tf"],
	["u8g2_font_courB18_tn","u8g2_font_courB18_tn"],
	["u8g2_font_courB18_tr","u8g2_font_courB18_tr"],
	["u8g2_font_courB24_tf","u8g2_font_courB24_tf"],
	["u8g2_font_courB24_tn","u8g2_font_courB24_tn"],
	["u8g2_font_courB24_tr","u8g2_font_courB24_tr"],
	["u8g2_font_courR08_tf","u8g2_font_courR08_tf"],
	["u8g2_font_courR08_tn","u8g2_font_courR08_tn"],
	["u8g2_font_courR08_tr","u8g2_font_courR08_tr"],
	["u8g2_font_courR10_tf","u8g2_font_courR10_tf"],
	["u8g2_font_courR10_tn","u8g2_font_courR10_tn"],
	["u8g2_font_courR10_tr","u8g2_font_courR10_tr"],
	["u8g2_font_courR12_tf","u8g2_font_courR12_tf"],
	["u8g2_font_courR12_tn","u8g2_font_courR12_tn"],
	["u8g2_font_courR12_tr","u8g2_font_courR12_tr"],
	["u8g2_font_courR14_tf","u8g2_font_courR14_tf"],
	["u8g2_font_courR14_tn","u8g2_font_courR14_tn"],
	["u8g2_font_courR14_tr","u8g2_font_courR14_tr"],
	["u8g2_font_courR18_tf","u8g2_font_courR18_tf"],
	["u8g2_font_courR18_tn","u8g2_font_courR18_tn"],
	["u8g2_font_courR18_tr","u8g2_font_courR18_tr"],
	["u8g2_font_courR24_tf","u8g2_font_courR24_tf"],
	["u8g2_font_courR24_tn","u8g2_font_courR24_tn"],
	["u8g2_font_courR24_tr","u8g2_font_courR24_tr"],
	["u8g2_font_crox1c_mf","u8g2_font_crox1c_mf"],
	["u8g2_font_crox1c_mn","u8g2_font_crox1c_mn"],
	["u8g2_font_crox1c_mr","u8g2_font_crox1c_mr"],
	["u8g2_font_crox1c_tf","u8g2_font_crox1c_tf"],
	["u8g2_font_crox1c_tn","u8g2_font_crox1c_tn"],
	["u8g2_font_crox1c_tr","u8g2_font_crox1c_tr"],
	["u8g2_font_crox1cb_mf","u8g2_font_crox1cb_mf"],
	["u8g2_font_crox1cb_mn","u8g2_font_crox1cb_mn"],
	["u8g2_font_crox1cb_mr","u8g2_font_crox1cb_mr"],
	["u8g2_font_crox1cb_tf","u8g2_font_crox1cb_tf"],
	["u8g2_font_crox1cb_tn","u8g2_font_crox1cb_tn"],
	["u8g2_font_crox1cb_tr","u8g2_font_crox1cb_tr"],
	["u8g2_font_crox1h_tf","u8g2_font_crox1h_tf"],
	["u8g2_font_crox1h_tn","u8g2_font_crox1h_tn"],
	["u8g2_font_crox1h_tr","u8g2_font_crox1h_tr"],
	["u8g2_font_crox1hb_tf","u8g2_font_crox1hb_tf"],
	["u8g2_font_crox1hb_tn","u8g2_font_crox1hb_tn"],
	["u8g2_font_crox1hb_tr","u8g2_font_crox1hb_tr"],
	["u8g2_font_crox1t_tf","u8g2_font_crox1t_tf"],
	["u8g2_font_crox1t_tn","u8g2_font_crox1t_tn"],
	["u8g2_font_crox1t_tr","u8g2_font_crox1t_tr"],
	["u8g2_font_crox1tb_tf","u8g2_font_crox1tb_tf"],
	["u8g2_font_crox1tb_tn","u8g2_font_crox1tb_tn"],
	["u8g2_font_crox1tb_tr","u8g2_font_crox1tb_tr"],
	["u8g2_font_crox2c_mf","u8g2_font_crox2c_mf"],
	["u8g2_font_crox2c_mn","u8g2_font_crox2c_mn"],
	["u8g2_font_crox2c_mr","u8g2_font_crox2c_mr"],
	["u8g2_font_crox2c_tf","u8g2_font_crox2c_tf"],
	["u8g2_font_crox2c_tn","u8g2_font_crox2c_tn"],
	["u8g2_font_crox2c_tr","u8g2_font_crox2c_tr"],
	["u8g2_font_crox2cb_mf","u8g2_font_crox2cb_mf"],
	["u8g2_font_crox2cb_mn","u8g2_font_crox2cb_mn"],
	["u8g2_font_crox2cb_mr","u8g2_font_crox2cb_mr"],
	["u8g2_font_crox2cb_tf","u8g2_font_crox2cb_tf"],
	["u8g2_font_crox2cb_tn","u8g2_font_crox2cb_tn"],
	["u8g2_font_crox2cb_tr","u8g2_font_crox2cb_tr"],
	["u8g2_font_crox2h_tf","u8g2_font_crox2h_tf"],
	["u8g2_font_crox2h_tn","u8g2_font_crox2h_tn"],
	["u8g2_font_crox2h_tr","u8g2_font_crox2h_tr"],
	["u8g2_font_crox2hb_tf","u8g2_font_crox2hb_tf"],
	["u8g2_font_crox2hb_tn","u8g2_font_crox2hb_tn"],
	["u8g2_font_crox2hb_tr","u8g2_font_crox2hb_tr"],
	["u8g2_font_crox2t_tf","u8g2_font_crox2t_tf"],
	["u8g2_font_crox2t_tn","u8g2_font_crox2t_tn"],
	["u8g2_font_crox2t_tr","u8g2_font_crox2t_tr"],
	["u8g2_font_crox2tb_tf","u8g2_font_crox2tb_tf"],
	["u8g2_font_crox2tb_tn","u8g2_font_crox2tb_tn"],
	["u8g2_font_crox2tb_tr","u8g2_font_crox2tb_tr"],
	["u8g2_font_crox3c_mf","u8g2_font_crox3c_mf"],
	["u8g2_font_crox3c_mn","u8g2_font_crox3c_mn"],
	["u8g2_font_crox3c_mr","u8g2_font_crox3c_mr"],
	["u8g2_font_crox3c_tf","u8g2_font_crox3c_tf"],
	["u8g2_font_crox3c_tn","u8g2_font_crox3c_tn"],
	["u8g2_font_crox3c_tr","u8g2_font_crox3c_tr"],
	["u8g2_font_crox3cb_mf","u8g2_font_crox3cb_mf"],
	["u8g2_font_crox3cb_mn","u8g2_font_crox3cb_mn"],
	["u8g2_font_crox3cb_mr","u8g2_font_crox3cb_mr"],
	["u8g2_font_crox3cb_tf","u8g2_font_crox3cb_tf"],
	["u8g2_font_crox3cb_tn","u8g2_font_crox3cb_tn"],
	["u8g2_font_crox3cb_tr","u8g2_font_crox3cb_tr"],
	["u8g2_font_crox3h_tf","u8g2_font_crox3h_tf"],
	["u8g2_font_crox3h_tn","u8g2_font_crox3h_tn"],
	["u8g2_font_crox3h_tr","u8g2_font_crox3h_tr"],
	["u8g2_font_crox3hb_tf","u8g2_font_crox3hb_tf"],
	["u8g2_font_crox3hb_tn","u8g2_font_crox3hb_tn"],
	["u8g2_font_crox3hb_tr","u8g2_font_crox3hb_tr"],
	["u8g2_font_crox3t_tf","u8g2_font_crox3t_tf"],
	["u8g2_font_crox3t_tn","u8g2_font_crox3t_tn"],
	["u8g2_font_crox3t_tr","u8g2_font_crox3t_tr"],
	["u8g2_font_crox3tb_tf","u8g2_font_crox3tb_tf"],
	["u8g2_font_crox3tb_tn","u8g2_font_crox3tb_tn"],
	["u8g2_font_crox3tb_tr","u8g2_font_crox3tb_tr"],
	["u8g2_font_crox4h_tf","u8g2_font_crox4h_tf"],
	["u8g2_font_crox4h_tn","u8g2_font_crox4h_tn"],
	["u8g2_font_crox4h_tr","u8g2_font_crox4h_tr"],
	["u8g2_font_crox4hb_tf","u8g2_font_crox4hb_tf"],
	["u8g2_font_crox4hb_tn","u8g2_font_crox4hb_tn"],
	["u8g2_font_crox4hb_tr","u8g2_font_crox4hb_tr"],
	["u8g2_font_crox4t_tf","u8g2_font_crox4t_tf"],
	["u8g2_font_crox4t_tn","u8g2_font_crox4t_tn"],
	["u8g2_font_crox4t_tr","u8g2_font_crox4t_tr"],
	["u8g2_font_crox4tb_tf","u8g2_font_crox4tb_tf"],
	["u8g2_font_crox4tb_tn","u8g2_font_crox4tb_tn"],
	["u8g2_font_crox4tb_tr","u8g2_font_crox4tb_tr"],
	["u8g2_font_crox5h_tf","u8g2_font_crox5h_tf"],
	["u8g2_font_crox5h_tn","u8g2_font_crox5h_tn"],
	["u8g2_font_crox5h_tr","u8g2_font_crox5h_tr"],
	["u8g2_font_crox5hb_tf","u8g2_font_crox5hb_tf"],
	["u8g2_font_crox5hb_tn","u8g2_font_crox5hb_tn"],
	["u8g2_font_crox5hb_tr","u8g2_font_crox5hb_tr"],
	["u8g2_font_crox5t_tf","u8g2_font_crox5t_tf"],
	["u8g2_font_crox5t_tn","u8g2_font_crox5t_tn"],
	["u8g2_font_crox5t_tr","u8g2_font_crox5t_tr"],
	["u8g2_font_crox5tb_tf","u8g2_font_crox5tb_tf"],
	["u8g2_font_crox5tb_tn","u8g2_font_crox5tb_tn"],
	["u8g2_font_crox5tb_tr","u8g2_font_crox5tb_tr"],
	["u8g2_font_cu12_h_symbols","u8g2_font_cu12_h_symbols"],
	["u8g2_font_cu12_he","u8g2_font_cu12_he"],
	["u8g2_font_cu12_hf","u8g2_font_cu12_hf"],
	["u8g2_font_cu12_hn","u8g2_font_cu12_hn"],
	["u8g2_font_cu12_hr","u8g2_font_cu12_hr"],
	["u8g2_font_cu12_me","u8g2_font_cu12_me"],
	["u8g2_font_cu12_mf","u8g2_font_cu12_mf"],
	["u8g2_font_cu12_mn","u8g2_font_cu12_mn"],
	["u8g2_font_cu12_mr","u8g2_font_cu12_mr"],
	["u8g2_font_cu12_t_arabic","u8g2_font_cu12_t_arabic"],
	["u8g2_font_cu12_t_cyrillic","u8g2_font_cu12_t_cyrillic"],
	["u8g2_font_cu12_t_greek","u8g2_font_cu12_t_greek"],
	["u8g2_font_cu12_t_hebrew","u8g2_font_cu12_t_hebrew"],
	["u8g2_font_cu12_t_symbols","u8g2_font_cu12_t_symbols"],
	["u8g2_font_cu12_t_tibetan","u8g2_font_cu12_t_tibetan"],
	["u8g2_font_cu12_te","u8g2_font_cu12_te"],
	["u8g2_font_cu12_tf","u8g2_font_cu12_tf"],
	["u8g2_font_cu12_tn","u8g2_font_cu12_tn"],
	["u8g2_font_cu12_tr","u8g2_font_cu12_tr"],
	["u8g2_font_cube_mel_tn","u8g2_font_cube_mel_tn"],
	["u8g2_font_cube_mel_tr","u8g2_font_cube_mel_tr"],
	["u8g2_font_cupcakemetoyourleader_tn","u8g2_font_cupcakemetoyourleader_tn"],
	["u8g2_font_cupcakemetoyourleader_tr","u8g2_font_cupcakemetoyourleader_tr"],
	["u8g2_font_cupcakemetoyourleader_tu","u8g2_font_cupcakemetoyourleader_tu"],
	["u8g2_font_CursivePixel_tr","u8g2_font_CursivePixel_tr"],
	["u8g2_font_cursor_tf","u8g2_font_cursor_tf"],
	["u8g2_font_cursor_tr","u8g2_font_cursor_tr"],
	["u8g2_font_DigitalDisco_te","u8g2_font_DigitalDisco_te"],
	["u8g2_font_DigitalDisco_tf","u8g2_font_DigitalDisco_tf"],
	["u8g2_font_DigitalDisco_tn","u8g2_font_DigitalDisco_tn"],
	["u8g2_font_DigitalDisco_tr","u8g2_font_DigitalDisco_tr"],
	["u8g2_font_DigitalDisco_tu","u8g2_font_DigitalDisco_tu"],
	["u8g2_font_DigitalDiscoThin_te","u8g2_font_DigitalDiscoThin_te"],
	["u8g2_font_DigitalDiscoThin_tf","u8g2_font_DigitalDiscoThin_tf"],
	["u8g2_font_DigitalDiscoThin_tn","u8g2_font_DigitalDiscoThin_tn"],
	["u8g2_font_DigitalDiscoThin_tr","u8g2_font_DigitalDiscoThin_tr"],
	["u8g2_font_DigitalDiscoThin_tu","u8g2_font_DigitalDiscoThin_tu"],
	["u8g2_font_diodesemimono_tr","u8g2_font_diodesemimono_tr"],
	["u8g2_font_disrespectfulteenager_tu","u8g2_font_disrespectfulteenager_tu"],
	["u8g2_font_emoticons21_tr","u8g2_font_emoticons21_tr"],
	["u8g2_font_Engrish_tf","u8g2_font_Engrish_tf"],
	["u8g2_font_Engrish_tr","u8g2_font_Engrish_tr"],
	["u8g2_font_etl14thai_t","u8g2_font_etl14thai_t"],
	["u8g2_font_etl16thai_t","u8g2_font_etl16thai_t"],
	["u8g2_font_etl24thai_t","u8g2_font_etl24thai_t"],
	["u8g2_font_f10_b_t_japanese1","u8g2_font_f10_b_t_japanese1"],
	["u8g2_font_f10_b_t_japanese2","u8g2_font_f10_b_t_japanese2"],
	["u8g2_font_f10_t_japanese1","u8g2_font_f10_t_japanese1"],
	["u8g2_font_f10_t_japanese2","u8g2_font_f10_t_japanese2"],
	["u8g2_font_f12_b_t_japanese1","u8g2_font_f12_b_t_japanese1"],
	["u8g2_font_f12_b_t_japanese2","u8g2_font_f12_b_t_japanese2"],
	["u8g2_font_f12_t_japanese1","u8g2_font_f12_t_japanese1"],
	["u8g2_font_f12_t_japanese2","u8g2_font_f12_t_japanese2"],
	["u8g2_font_f16_b_t_japanese1","u8g2_font_f16_b_t_japanese1"],
	["u8g2_font_f16_b_t_japanese2","u8g2_font_f16_b_t_japanese2"],
	["u8g2_font_f16_t_japanese1","u8g2_font_f16_t_japanese1"],
	["u8g2_font_f16_t_japanese2","u8g2_font_f16_t_japanese2"],
	["u8g2_font_fancypixels_tf","u8g2_font_fancypixels_tf"],
	["u8g2_font_fancypixels_tr","u8g2_font_fancypixels_tr"],
	["u8g2_font_fewture_tf","u8g2_font_fewture_tf"],
	["u8g2_font_fewture_tn","u8g2_font_fewture_tn"],
	["u8g2_font_fewture_tr","u8g2_font_fewture_tr"],
	["u8g2_font_finderskeepers_tf","u8g2_font_finderskeepers_tf"],
	["u8g2_font_finderskeepers_tn","u8g2_font_finderskeepers_tn"],
	["u8g2_font_finderskeepers_tr","u8g2_font_finderskeepers_tr"],
	["u8g2_font_freedoomr10_mu","u8g2_font_freedoomr10_mu"],
	["u8g2_font_freedoomr10_tu","u8g2_font_freedoomr10_tu"],
	["u8g2_font_freedoomr25_mn","u8g2_font_freedoomr25_mn"],
	["u8g2_font_freedoomr25_tn","u8g2_font_freedoomr25_tn"],
	["u8g2_font_frikativ_t_all","u8g2_font_frikativ_t_all"],
	["u8g2_font_frikativ_tf","u8g2_font_frikativ_tf"],
	["u8g2_font_frikativ_tr","u8g2_font_frikativ_tr"],
	["u8g2_font_fub11_t_symbol","u8g2_font_fub11_t_symbol"],
	["u8g2_font_fub11_tf","u8g2_font_fub11_tf"],
	["u8g2_font_fub11_tn","u8g2_font_fub11_tn"],
	["u8g2_font_fub11_tr","u8g2_font_fub11_tr"],
	["u8g2_font_fub14_t_symbol","u8g2_font_fub14_t_symbol"],
	["u8g2_font_fub14_tf","u8g2_font_fub14_tf"],
	["u8g2_font_fub14_tn","u8g2_font_fub14_tn"],
	["u8g2_font_fub14_tr","u8g2_font_fub14_tr"],
	["u8g2_font_fub17_t_symbol","u8g2_font_fub17_t_symbol"],
	["u8g2_font_fub17_tf","u8g2_font_fub17_tf"],
	["u8g2_font_fub17_tn","u8g2_font_fub17_tn"],
	["u8g2_font_fub17_tr","u8g2_font_fub17_tr"],
	["u8g2_font_fub20_t_symbol","u8g2_font_fub20_t_symbol"],
	["u8g2_font_fub20_tf","u8g2_font_fub20_tf"],
	["u8g2_font_fub20_tn","u8g2_font_fub20_tn"],
	["u8g2_font_fub20_tr","u8g2_font_fub20_tr"],
	["u8g2_font_fub25_t_symbol","u8g2_font_fub25_t_symbol"],
	["u8g2_font_fub25_tf","u8g2_font_fub25_tf"],
	["u8g2_font_fub25_tn","u8g2_font_fub25_tn"],
	["u8g2_font_fub25_tr","u8g2_font_fub25_tr"],
	["u8g2_font_fub30_t_symbol","u8g2_font_fub30_t_symbol"],
	["u8g2_font_fub30_tf","u8g2_font_fub30_tf"],
	["u8g2_font_fub30_tn","u8g2_font_fub30_tn"],
	["u8g2_font_fub30_tr","u8g2_font_fub30_tr"],
	["u8g2_font_fub35_t_symbol","u8g2_font_fub35_t_symbol"],
	["u8g2_font_fub35_tf","u8g2_font_fub35_tf"],
	["u8g2_font_fub35_tn","u8g2_font_fub35_tn"],
	["u8g2_font_fub35_tr","u8g2_font_fub35_tr"],
	["u8g2_font_fub42_t_symbol","u8g2_font_fub42_t_symbol"],
	["u8g2_font_fub42_tf","u8g2_font_fub42_tf"],
	["u8g2_font_fub42_tn","u8g2_font_fub42_tn"],
	["u8g2_font_fub42_tr","u8g2_font_fub42_tr"],
	["u8g2_font_fub49_t_symbol","u8g2_font_fub49_t_symbol"],
	["u8g2_font_fub49_tn","u8g2_font_fub49_tn"],
	["u8g2_font_fur11_t_symbol","u8g2_font_fur11_t_symbol"],
	["u8g2_font_fur11_tf","u8g2_font_fur11_tf"],
	["u8g2_font_fur11_tn","u8g2_font_fur11_tn"],
	["u8g2_font_fur11_tr","u8g2_font_fur11_tr"],
	["u8g2_font_fur14_t_symbol","u8g2_font_fur14_t_symbol"],
	["u8g2_font_fur14_tf","u8g2_font_fur14_tf"],
	["u8g2_font_fur14_tn","u8g2_font_fur14_tn"],
	["u8g2_font_fur14_tr","u8g2_font_fur14_tr"],
	["u8g2_font_fur17_t_symbol","u8g2_font_fur17_t_symbol"],
	["u8g2_font_fur17_tf","u8g2_font_fur17_tf"],
	["u8g2_font_fur17_tn","u8g2_font_fur17_tn"],
	["u8g2_font_fur17_tr","u8g2_font_fur17_tr"],
	["u8g2_font_fur20_t_symbol","u8g2_font_fur20_t_symbol"],
	["u8g2_font_fur20_tf","u8g2_font_fur20_tf"],
	["u8g2_font_fur20_tn","u8g2_font_fur20_tn"],
	["u8g2_font_fur20_tr","u8g2_font_fur20_tr"],
	["u8g2_font_fur25_t_symbol","u8g2_font_fur25_t_symbol"],
	["u8g2_font_fur25_tf","u8g2_font_fur25_tf"],
	["u8g2_font_fur25_tn","u8g2_font_fur25_tn"],
	["u8g2_font_fur25_tr","u8g2_font_fur25_tr"],
	["u8g2_font_fur30_t_symbol","u8g2_font_fur30_t_symbol"],
	["u8g2_font_fur30_tf","u8g2_font_fur30_tf"],
	["u8g2_font_fur30_tn","u8g2_font_fur30_tn"],
	["u8g2_font_fur30_tr","u8g2_font_fur30_tr"],
	["u8g2_font_fur35_t_symbol","u8g2_font_fur35_t_symbol"],
	["u8g2_font_fur35_tf","u8g2_font_fur35_tf"],
	["u8g2_font_fur35_tn","u8g2_font_fur35_tn"],
	["u8g2_font_fur35_tr","u8g2_font_fur35_tr"],
	["u8g2_font_fur42_t_symbol","u8g2_font_fur42_t_symbol"],
	["u8g2_font_fur42_tf","u8g2_font_fur42_tf"],
	["u8g2_font_fur42_tn","u8g2_font_fur42_tn"],
	["u8g2_font_fur42_tr","u8g2_font_fur42_tr"],
	["u8g2_font_fur49_t_symbol","u8g2_font_fur49_t_symbol"],
	["u8g2_font_fur49_tn","u8g2_font_fur49_tn"],
	["u8g2_font_ganj_nameh_sans10_t_all","u8g2_font_ganj_nameh_sans10_t_all"],
	["u8g2_font_ganj_nameh_sans12_t_all","u8g2_font_ganj_nameh_sans12_t_all"],
	["u8g2_font_ganj_nameh_sans14_t_all","u8g2_font_ganj_nameh_sans14_t_all"],
	["u8g2_font_ganj_nameh_sans16_t_all","u8g2_font_ganj_nameh_sans16_t_all"],
	["u8g2_font_gb16st_t_1","u8g2_font_gb16st_t_1"],
	["u8g2_font_gb16st_t_2","u8g2_font_gb16st_t_2"],
	["u8g2_font_gb16st_t_3","u8g2_font_gb16st_t_3"],
	["u8g2_font_gb24st_t_1","u8g2_font_gb24st_t_1"],
	["u8g2_font_gb24st_t_2","u8g2_font_gb24st_t_2"],
	["u8g2_font_gb24st_t_3","u8g2_font_gb24st_t_3"],
	["u8g2_font_Georgia7px_te","u8g2_font_Georgia7px_te"],
	["u8g2_font_Georgia7px_tf","u8g2_font_Georgia7px_tf"],
	["u8g2_font_Georgia7px_tr","u8g2_font_Georgia7px_tr"],
	["u8g2_font_glasstown_nbp_t_all","u8g2_font_glasstown_nbp_t_all"],
	["u8g2_font_glasstown_nbp_tf","u8g2_font_glasstown_nbp_tf"],
	["u8g2_font_glasstown_nbp_tn","u8g2_font_glasstown_nbp_tn"],
	["u8g2_font_glasstown_nbp_tr","u8g2_font_glasstown_nbp_tr"],
	["u8g2_font_guildenstern_nbp_t_all","u8g2_font_guildenstern_nbp_t_all"],
	["u8g2_font_guildenstern_nbp_tf","u8g2_font_guildenstern_nbp_tf"],
	["u8g2_font_guildenstern_nbp_tn","u8g2_font_guildenstern_nbp_tn"],
	["u8g2_font_guildenstern_nbp_tr","u8g2_font_guildenstern_nbp_tr"],
	["u8g2_font_habsburgchancery_t_all","u8g2_font_habsburgchancery_t_all"],
	["u8g2_font_habsburgchancery_tf","u8g2_font_habsburgchancery_tf"],
	["u8g2_font_habsburgchancery_tn","u8g2_font_habsburgchancery_tn"],
	["u8g2_font_habsburgchancery_tr","u8g2_font_habsburgchancery_tr"],
	["u8g2_font_halftone_tf","u8g2_font_halftone_tf"],
	["u8g2_font_halftone_tn","u8g2_font_halftone_tn"],
	["u8g2_font_halftone_tr","u8g2_font_halftone_tr"],
	["u8g2_font_haxrcorp4089_t_cyrillic","u8g2_font_haxrcorp4089_t_cyrillic"],
	["u8g2_font_haxrcorp4089_tn","u8g2_font_haxrcorp4089_tn"],
	["u8g2_font_haxrcorp4089_tr","u8g2_font_haxrcorp4089_tr"],
	["u8g2_font_heavybottom_tr","u8g2_font_heavybottom_tr"],
	["u8g2_font_helvB08_te","u8g2_font_helvB08_te"],
	["u8g2_font_helvB08_tf","u8g2_font_helvB08_tf"],
	["u8g2_font_helvB08_tn","u8g2_font_helvB08_tn"],
	["u8g2_font_helvB08_tr","u8g2_font_helvB08_tr"],
	["u8g2_font_helvB10_te","u8g2_font_helvB10_te"],
	["u8g2_font_helvB10_tf","u8g2_font_helvB10_tf"],
	["u8g2_font_helvB10_tn","u8g2_font_helvB10_tn"],
	["u8g2_font_helvB10_tr","u8g2_font_helvB10_tr"],
	["u8g2_font_helvB12_te","u8g2_font_helvB12_te"],
	["u8g2_font_helvB12_tf","u8g2_font_helvB12_tf"],
	["u8g2_font_helvB12_tn","u8g2_font_helvB12_tn"],
	["u8g2_font_helvB12_tr","u8g2_font_helvB12_tr"],
	["u8g2_font_helvB14_te","u8g2_font_helvB14_te"],
	["u8g2_font_helvB14_tf","u8g2_font_helvB14_tf"],
	["u8g2_font_helvB14_tn","u8g2_font_helvB14_tn"],
	["u8g2_font_helvB14_tr","u8g2_font_helvB14_tr"],
	["u8g2_font_helvB18_te","u8g2_font_helvB18_te"],
	["u8g2_font_helvB18_tf","u8g2_font_helvB18_tf"],
	["u8g2_font_helvB18_tn","u8g2_font_helvB18_tn"],
	["u8g2_font_helvB18_tr","u8g2_font_helvB18_tr"],
	["u8g2_font_helvB24_te","u8g2_font_helvB24_te"],
	["u8g2_font_helvB24_tf","u8g2_font_helvB24_tf"],
	["u8g2_font_helvB24_tn","u8g2_font_helvB24_tn"],
	["u8g2_font_helvB24_tr","u8g2_font_helvB24_tr"],
	["u8g2_font_HelvetiPixel_tr","u8g2_font_HelvetiPixel_tr"],
	["u8g2_font_HelvetiPixelOutline_te","u8g2_font_HelvetiPixelOutline_te"],
	["u8g2_font_HelvetiPixelOutline_tr","u8g2_font_HelvetiPixelOutline_tr"],
	["u8g2_font_helvR08_te","u8g2_font_helvR08_te"],
	["u8g2_font_helvR08_tf","u8g2_font_helvR08_tf"],
	["u8g2_font_helvR08_tn","u8g2_font_helvR08_tn"],
	["u8g2_font_helvR08_tr","u8g2_font_helvR08_tr"],
	["u8g2_font_helvR10_te","u8g2_font_helvR10_te"],
	["u8g2_font_helvR10_tf","u8g2_font_helvR10_tf"],
	["u8g2_font_helvR10_tn","u8g2_font_helvR10_tn"],
	["u8g2_font_helvR10_tr","u8g2_font_helvR10_tr"],
	["u8g2_font_helvR12_te","u8g2_font_helvR12_te"],
	["u8g2_font_helvR12_tf","u8g2_font_helvR12_tf"],
	["u8g2_font_helvR12_tn","u8g2_font_helvR12_tn"],
	["u8g2_font_helvR12_tr","u8g2_font_helvR12_tr"],
	["u8g2_font_helvR14_te","u8g2_font_helvR14_te"],
	["u8g2_font_helvR14_tf","u8g2_font_helvR14_tf"],
	["u8g2_font_helvR14_tn","u8g2_font_helvR14_tn"],
	["u8g2_font_helvR14_tr","u8g2_font_helvR14_tr"],
	["u8g2_font_helvR18_te","u8g2_font_helvR18_te"],
	["u8g2_font_helvR18_tf","u8g2_font_helvR18_tf"],
	["u8g2_font_helvR18_tn","u8g2_font_helvR18_tn"],
	["u8g2_font_helvR18_tr","u8g2_font_helvR18_tr"],
	["u8g2_font_helvR24_te","u8g2_font_helvR24_te"],
	["u8g2_font_helvR24_tf","u8g2_font_helvR24_tf"],
	["u8g2_font_helvR24_tn","u8g2_font_helvR24_tn"],
	["u8g2_font_helvR24_tr","u8g2_font_helvR24_tr"],
	["u8g2_font_iconquadpix_m_all","u8g2_font_iconquadpix_m_all"],
	["u8g2_font_ImpactBits_tr","u8g2_font_ImpactBits_tr"],
	["u8g2_font_inb16_mf","u8g2_font_inb16_mf"],
	["u8g2_font_inb16_mn","u8g2_font_inb16_mn"],
	["u8g2_font_inb16_mr","u8g2_font_inb16_mr"],
	["u8g2_font_inb19_mf","u8g2_font_inb19_mf"],
	["u8g2_font_inb19_mn","u8g2_font_inb19_mn"],
	["u8g2_font_inb19_mr","u8g2_font_inb19_mr"],
	["u8g2_font_inb21_mf","u8g2_font_inb21_mf"],
	["u8g2_font_inb21_mn","u8g2_font_inb21_mn"],
	["u8g2_font_inb21_mr","u8g2_font_inb21_mr"],
	["u8g2_font_inb24_mf","u8g2_font_inb24_mf"],
	["u8g2_font_inb24_mn","u8g2_font_inb24_mn"],
	["u8g2_font_inb24_mr","u8g2_font_inb24_mr"],
	["u8g2_font_inb27_mf","u8g2_font_inb27_mf"],
	["u8g2_font_inb27_mn","u8g2_font_inb27_mn"],
	["u8g2_font_inb27_mr","u8g2_font_inb27_mr"],
	["u8g2_font_inb30_mf","u8g2_font_inb30_mf"],
	["u8g2_font_inb30_mn","u8g2_font_inb30_mn"],
	["u8g2_font_inb30_mr","u8g2_font_inb30_mr"],
	["u8g2_font_inb33_mf","u8g2_font_inb33_mf"],
	["u8g2_font_inb33_mn","u8g2_font_inb33_mn"],
	["u8g2_font_inb33_mr","u8g2_font_inb33_mr"],
	["u8g2_font_inb38_mf","u8g2_font_inb38_mf"],
	["u8g2_font_inb38_mn","u8g2_font_inb38_mn"],
	["u8g2_font_inb38_mr","u8g2_font_inb38_mr"],
	["u8g2_font_inb42_mf","u8g2_font_inb42_mf"],
	["u8g2_font_inb42_mn","u8g2_font_inb42_mn"],
	["u8g2_font_inb42_mr","u8g2_font_inb42_mr"],
	["u8g2_font_inb46_mf","u8g2_font_inb46_mf"],
	["u8g2_font_inb46_mn","u8g2_font_inb46_mn"],
	["u8g2_font_inb46_mr","u8g2_font_inb46_mr"],
	["u8g2_font_inb49_mf","u8g2_font_inb49_mf"],
	["u8g2_font_inb49_mn","u8g2_font_inb49_mn"],
	["u8g2_font_inb49_mr","u8g2_font_inb49_mr"],
	["u8g2_font_inb53_mf","u8g2_font_inb53_mf"],
	["u8g2_font_inb53_mn","u8g2_font_inb53_mn"],
	["u8g2_font_inb53_mr","u8g2_font_inb53_mr"],
	["u8g2_font_inb57_mn","u8g2_font_inb57_mn"],
	["u8g2_font_inb63_mn","u8g2_font_inb63_mn"],
	["u8g2_font_inr16_mf","u8g2_font_inr16_mf"],
	["u8g2_font_inr16_mn","u8g2_font_inr16_mn"],
	["u8g2_font_inr16_mr","u8g2_font_inr16_mr"],
	["u8g2_font_inr19_mf","u8g2_font_inr19_mf"],
	["u8g2_font_inr19_mn","u8g2_font_inr19_mn"],
	["u8g2_font_inr19_mr","u8g2_font_inr19_mr"],
	["u8g2_font_inr21_mf","u8g2_font_inr21_mf"],
	["u8g2_font_inr21_mn","u8g2_font_inr21_mn"],
	["u8g2_font_inr21_mr","u8g2_font_inr21_mr"],
	["u8g2_font_inr24_mf","u8g2_font_inr24_mf"],
	["u8g2_font_inr24_mn","u8g2_font_inr24_mn"],
	["u8g2_font_inr24_mr","u8g2_font_inr24_mr"],
	["u8g2_font_inr24_t_cyrillic","u8g2_font_inr24_t_cyrillic"],
	["u8g2_font_inr27_mf","u8g2_font_inr27_mf"],
	["u8g2_font_inr27_mn","u8g2_font_inr27_mn"],
	["u8g2_font_inr27_mr","u8g2_font_inr27_mr"],
	["u8g2_font_inr27_t_cyrillic","u8g2_font_inr27_t_cyrillic"],
	["u8g2_font_inr30_mf","u8g2_font_inr30_mf"],
	["u8g2_font_inr30_mn","u8g2_font_inr30_mn"],
	["u8g2_font_inr30_mr","u8g2_font_inr30_mr"],
	["u8g2_font_inr30_t_cyrillic","u8g2_font_inr30_t_cyrillic"],
	["u8g2_font_inr33_mf","u8g2_font_inr33_mf"],
	["u8g2_font_inr33_mn","u8g2_font_inr33_mn"],
	["u8g2_font_inr33_mr","u8g2_font_inr33_mr"],
	["u8g2_font_inr33_t_cyrillic","u8g2_font_inr33_t_cyrillic"],
	["u8g2_font_inr38_mf","u8g2_font_inr38_mf"],
	["u8g2_font_inr38_mn","u8g2_font_inr38_mn"],
	["u8g2_font_inr38_mr","u8g2_font_inr38_mr"],
	["u8g2_font_inr38_t_cyrillic","u8g2_font_inr38_t_cyrillic"],
	["u8g2_font_inr42_mf","u8g2_font_inr42_mf"],
	["u8g2_font_inr42_mn","u8g2_font_inr42_mn"],
	["u8g2_font_inr42_mr","u8g2_font_inr42_mr"],
	["u8g2_font_inr42_t_cyrillic","u8g2_font_inr42_t_cyrillic"],
	["u8g2_font_inr46_mf","u8g2_font_inr46_mf"],
	["u8g2_font_inr46_mn","u8g2_font_inr46_mn"],
	["u8g2_font_inr46_mr","u8g2_font_inr46_mr"],
	["u8g2_font_inr46_t_cyrillic","u8g2_font_inr46_t_cyrillic"],
	["u8g2_font_inr49_mf","u8g2_font_inr49_mf"],
	["u8g2_font_inr49_mn","u8g2_font_inr49_mn"],
	["u8g2_font_inr49_mr","u8g2_font_inr49_mr"],
	["u8g2_font_inr49_t_cyrillic","u8g2_font_inr49_t_cyrillic"],
	["u8g2_font_inr53_mf","u8g2_font_inr53_mf"],
	["u8g2_font_inr53_mn","u8g2_font_inr53_mn"],
	["u8g2_font_inr53_mr","u8g2_font_inr53_mr"],
	["u8g2_font_inr53_t_cyrillic","u8g2_font_inr53_t_cyrillic"],
	["u8g2_font_inr57_mn","u8g2_font_inr57_mn"],
	["u8g2_font_inr62_mn","u8g2_font_inr62_mn"],
	["u8g2_font_IPAandRUSLCD_te","u8g2_font_IPAandRUSLCD_te"],
	["u8g2_font_IPAandRUSLCD_tf","u8g2_font_IPAandRUSLCD_tf"],
	["u8g2_font_IPAandRUSLCD_tr","u8g2_font_IPAandRUSLCD_tr"],
	["u8g2_font_iranian_sans_10_t_all","u8g2_font_iranian_sans_10_t_all"],
	["u8g2_font_iranian_sans_12_t_all","u8g2_font_iranian_sans_12_t_all"],
	["u8g2_font_iranian_sans_14_t_all","u8g2_font_iranian_sans_14_t_all"],
	["u8g2_font_iranian_sans_16_t_all","u8g2_font_iranian_sans_16_t_all"],
	["u8g2_font_iranian_sans_8_t_all","u8g2_font_iranian_sans_8_t_all"],
	["u8g2_font_jinxedwizards_tr","u8g2_font_jinxedwizards_tr"],
	["u8g2_font_koleeko_tf","u8g2_font_koleeko_tf"],
	["u8g2_font_koleeko_tn","u8g2_font_koleeko_tn"],
	["u8g2_font_koleeko_tr","u8g2_font_koleeko_tr"],
	["u8g2_font_koleeko_tu","u8g2_font_koleeko_tu"],
	["u8g2_font_lastapprenticebold_tr","u8g2_font_lastapprenticebold_tr"],
	["u8g2_font_lastapprenticethin_tr","u8g2_font_lastapprenticethin_tr"],
	["u8g2_font_lastpriestess_tr","u8g2_font_lastpriestess_tr"],
	["u8g2_font_lastpriestess_tu","u8g2_font_lastpriestess_tu"],
	["u8g2_font_logisoso16_tf","u8g2_font_logisoso16_tf"],
	["u8g2_font_logisoso16_tn","u8g2_font_logisoso16_tn"],
	["u8g2_font_logisoso16_tr","u8g2_font_logisoso16_tr"],
	["u8g2_font_logisoso18_tf","u8g2_font_logisoso18_tf"],
	["u8g2_font_logisoso18_tn","u8g2_font_logisoso18_tn"],
	["u8g2_font_logisoso18_tr","u8g2_font_logisoso18_tr"],
	["u8g2_font_logisoso20_tf","u8g2_font_logisoso20_tf"],
	["u8g2_font_logisoso20_tn","u8g2_font_logisoso20_tn"],
	["u8g2_font_logisoso20_tr","u8g2_font_logisoso20_tr"],
	["u8g2_font_logisoso22_tf","u8g2_font_logisoso22_tf"],
	["u8g2_font_logisoso22_tn","u8g2_font_logisoso22_tn"],
	["u8g2_font_logisoso22_tr","u8g2_font_logisoso22_tr"],
	["u8g2_font_logisoso24_tf","u8g2_font_logisoso24_tf"],
	["u8g2_font_logisoso24_tn","u8g2_font_logisoso24_tn"],
	["u8g2_font_logisoso24_tr","u8g2_font_logisoso24_tr"],
	["u8g2_font_logisoso26_tf","u8g2_font_logisoso26_tf"],
	["u8g2_font_logisoso26_tn","u8g2_font_logisoso26_tn"],
	["u8g2_font_logisoso26_tr","u8g2_font_logisoso26_tr"],
	["u8g2_font_logisoso28_tf","u8g2_font_logisoso28_tf"],
	["u8g2_font_logisoso28_tn","u8g2_font_logisoso28_tn"],
	["u8g2_font_logisoso28_tr","u8g2_font_logisoso28_tr"],
	["u8g2_font_logisoso30_tf","u8g2_font_logisoso30_tf"],
	["u8g2_font_logisoso30_tn","u8g2_font_logisoso30_tn"],
	["u8g2_font_logisoso30_tr","u8g2_font_logisoso30_tr"],
	["u8g2_font_logisoso32_tf","u8g2_font_logisoso32_tf"],
	["u8g2_font_logisoso32_tn","u8g2_font_logisoso32_tn"],
	["u8g2_font_logisoso32_tr","u8g2_font_logisoso32_tr"],
	["u8g2_font_logisoso34_tf","u8g2_font_logisoso34_tf"],
	["u8g2_font_logisoso34_tn","u8g2_font_logisoso34_tn"],
	["u8g2_font_logisoso34_tr","u8g2_font_logisoso34_tr"],
	["u8g2_font_logisoso38_tf","u8g2_font_logisoso38_tf"],
	["u8g2_font_logisoso38_tn","u8g2_font_logisoso38_tn"],
	["u8g2_font_logisoso38_tr","u8g2_font_logisoso38_tr"],
	["u8g2_font_logisoso42_tf","u8g2_font_logisoso42_tf"],
	["u8g2_font_logisoso42_tn","u8g2_font_logisoso42_tn"],
	["u8g2_font_logisoso42_tr","u8g2_font_logisoso42_tr"],
	["u8g2_font_logisoso46_tf","u8g2_font_logisoso46_tf"],
	["u8g2_font_logisoso46_tn","u8g2_font_logisoso46_tn"],
	["u8g2_font_logisoso46_tr","u8g2_font_logisoso46_tr"],
	["u8g2_font_logisoso50_tf","u8g2_font_logisoso50_tf"],
	["u8g2_font_logisoso50_tn","u8g2_font_logisoso50_tn"],
	["u8g2_font_logisoso50_tr","u8g2_font_logisoso50_tr"],
	["u8g2_font_logisoso54_tf","u8g2_font_logisoso54_tf"],
	["u8g2_font_logisoso54_tn","u8g2_font_logisoso54_tn"],
	["u8g2_font_logisoso54_tr","u8g2_font_logisoso54_tr"],
	["u8g2_font_logisoso58_tf","u8g2_font_logisoso58_tf"],
	["u8g2_font_logisoso58_tn","u8g2_font_logisoso58_tn"],
	["u8g2_font_logisoso58_tr","u8g2_font_logisoso58_tr"],
	["u8g2_font_logisoso62_tn","u8g2_font_logisoso62_tn"],
	["u8g2_font_logisoso78_tn","u8g2_font_logisoso78_tn"],
	["u8g2_font_logisoso92_tn","u8g2_font_logisoso92_tn"],
	["u8g2_font_lubB08_te","u8g2_font_lubB08_te"],
	["u8g2_font_lubB08_tf","u8g2_font_lubB08_tf"],
	["u8g2_font_lubB08_tn","u8g2_font_lubB08_tn"],
	["u8g2_font_lubB08_tr","u8g2_font_lubB08_tr"],
	["u8g2_font_lubB10_te","u8g2_font_lubB10_te"],
	["u8g2_font_lubB10_tf","u8g2_font_lubB10_tf"],
	["u8g2_font_lubB10_tn","u8g2_font_lubB10_tn"],
	["u8g2_font_lubB10_tr","u8g2_font_lubB10_tr"],
	["u8g2_font_lubB12_te","u8g2_font_lubB12_te"],
	["u8g2_font_lubB12_tf","u8g2_font_lubB12_tf"],
	["u8g2_font_lubB12_tn","u8g2_font_lubB12_tn"],
	["u8g2_font_lubB12_tr","u8g2_font_lubB12_tr"],
	["u8g2_font_lubB14_te","u8g2_font_lubB14_te"],
	["u8g2_font_lubB14_tf","u8g2_font_lubB14_tf"],
	["u8g2_font_lubB14_tn","u8g2_font_lubB14_tn"],
	["u8g2_font_lubB14_tr","u8g2_font_lubB14_tr"],
	["u8g2_font_lubB18_te","u8g2_font_lubB18_te"],
	["u8g2_font_lubB18_tf","u8g2_font_lubB18_tf"],
	["u8g2_font_lubB18_tn","u8g2_font_lubB18_tn"],
	["u8g2_font_lubB18_tr","u8g2_font_lubB18_tr"],
	["u8g2_font_lubB19_te","u8g2_font_lubB19_te"],
	["u8g2_font_lubB19_tf","u8g2_font_lubB19_tf"],
	["u8g2_font_lubB19_tn","u8g2_font_lubB19_tn"],
	["u8g2_font_lubB19_tr","u8g2_font_lubB19_tr"],
	["u8g2_font_lubB24_te","u8g2_font_lubB24_te"],
	["u8g2_font_lubB24_tf","u8g2_font_lubB24_tf"],
	["u8g2_font_lubB24_tn","u8g2_font_lubB24_tn"],
	["u8g2_font_lubB24_tr","u8g2_font_lubB24_tr"],
	["u8g2_font_lubBI08_te","u8g2_font_lubBI08_te"],
	["u8g2_font_lubBI08_tf","u8g2_font_lubBI08_tf"],
	["u8g2_font_lubBI08_tn","u8g2_font_lubBI08_tn"],
	["u8g2_font_lubBI08_tr","u8g2_font_lubBI08_tr"],
	["u8g2_font_lubBI10_te","u8g2_font_lubBI10_te"],
	["u8g2_font_lubBI10_tf","u8g2_font_lubBI10_tf"],
	["u8g2_font_lubBI10_tn","u8g2_font_lubBI10_tn"],
	["u8g2_font_lubBI10_tr","u8g2_font_lubBI10_tr"],
	["u8g2_font_lubBI12_te","u8g2_font_lubBI12_te"],
	["u8g2_font_lubBI12_tf","u8g2_font_lubBI12_tf"],
	["u8g2_font_lubBI12_tn","u8g2_font_lubBI12_tn"],
	["u8g2_font_lubBI12_tr","u8g2_font_lubBI12_tr"],
	["u8g2_font_lubBI14_te","u8g2_font_lubBI14_te"],
	["u8g2_font_lubBI14_tf","u8g2_font_lubBI14_tf"],
	["u8g2_font_lubBI14_tn","u8g2_font_lubBI14_tn"],
	["u8g2_font_lubBI14_tr","u8g2_font_lubBI14_tr"],
	["u8g2_font_lubBI18_te","u8g2_font_lubBI18_te"],
	["u8g2_font_lubBI18_tf","u8g2_font_lubBI18_tf"],
	["u8g2_font_lubBI18_tn","u8g2_font_lubBI18_tn"],
	["u8g2_font_lubBI18_tr","u8g2_font_lubBI18_tr"],
	["u8g2_font_lubBI19_te","u8g2_font_lubBI19_te"],
	["u8g2_font_lubBI19_tf","u8g2_font_lubBI19_tf"],
	["u8g2_font_lubBI19_tn","u8g2_font_lubBI19_tn"],
	["u8g2_font_lubBI19_tr","u8g2_font_lubBI19_tr"],
	["u8g2_font_lubBI24_te","u8g2_font_lubBI24_te"],
	["u8g2_font_lubBI24_tf","u8g2_font_lubBI24_tf"],
	["u8g2_font_lubBI24_tn","u8g2_font_lubBI24_tn"],
	["u8g2_font_lubBI24_tr","u8g2_font_lubBI24_tr"],
	["u8g2_font_lubI08_te","u8g2_font_lubI08_te"],
	["u8g2_font_lubI08_tf","u8g2_font_lubI08_tf"],
	["u8g2_font_lubI08_tn","u8g2_font_lubI08_tn"],
	["u8g2_font_lubI08_tr","u8g2_font_lubI08_tr"],
	["u8g2_font_lubI10_te","u8g2_font_lubI10_te"],
	["u8g2_font_lubI10_tf","u8g2_font_lubI10_tf"],
	["u8g2_font_lubI10_tn","u8g2_font_lubI10_tn"],
	["u8g2_font_lubI10_tr","u8g2_font_lubI10_tr"],
	["u8g2_font_lubI12_te","u8g2_font_lubI12_te"],
	["u8g2_font_lubI12_tf","u8g2_font_lubI12_tf"],
	["u8g2_font_lubI12_tn","u8g2_font_lubI12_tn"],
	["u8g2_font_lubI12_tr","u8g2_font_lubI12_tr"],
	["u8g2_font_lubI14_te","u8g2_font_lubI14_te"],
	["u8g2_font_lubI14_tf","u8g2_font_lubI14_tf"],
	["u8g2_font_lubI14_tn","u8g2_font_lubI14_tn"],
	["u8g2_font_lubI14_tr","u8g2_font_lubI14_tr"],
	["u8g2_font_lubI18_te","u8g2_font_lubI18_te"],
	["u8g2_font_lubI18_tf","u8g2_font_lubI18_tf"],
	["u8g2_font_lubI18_tn","u8g2_font_lubI18_tn"],
	["u8g2_font_lubI18_tr","u8g2_font_lubI18_tr"],
	["u8g2_font_lubI19_te","u8g2_font_lubI19_te"],
	["u8g2_font_lubI19_tf","u8g2_font_lubI19_tf"],
	["u8g2_font_lubI19_tn","u8g2_font_lubI19_tn"],
	["u8g2_font_lubI19_tr","u8g2_font_lubI19_tr"],
	["u8g2_font_lubI24_te","u8g2_font_lubI24_te"],
	["u8g2_font_lubI24_tf","u8g2_font_lubI24_tf"],
	["u8g2_font_lubI24_tn","u8g2_font_lubI24_tn"],
	["u8g2_font_lubI24_tr","u8g2_font_lubI24_tr"],
	["u8g2_font_luBIS08_te","u8g2_font_luBIS08_te"],
	["u8g2_font_luBIS08_tf","u8g2_font_luBIS08_tf"],
	["u8g2_font_luBIS08_tn","u8g2_font_luBIS08_tn"],
	["u8g2_font_luBIS08_tr","u8g2_font_luBIS08_tr"],
	["u8g2_font_luBIS10_te","u8g2_font_luBIS10_te"],
	["u8g2_font_luBIS10_tf","u8g2_font_luBIS10_tf"],
	["u8g2_font_luBIS10_tn","u8g2_font_luBIS10_tn"],
	["u8g2_font_luBIS10_tr","u8g2_font_luBIS10_tr"],
	["u8g2_font_luBIS12_te","u8g2_font_luBIS12_te"],
	["u8g2_font_luBIS12_tf","u8g2_font_luBIS12_tf"],
	["u8g2_font_luBIS12_tn","u8g2_font_luBIS12_tn"],
	["u8g2_font_luBIS12_tr","u8g2_font_luBIS12_tr"],
	["u8g2_font_luBIS14_te","u8g2_font_luBIS14_te"],
	["u8g2_font_luBIS14_tf","u8g2_font_luBIS14_tf"],
	["u8g2_font_luBIS14_tn","u8g2_font_luBIS14_tn"],
	["u8g2_font_luBIS14_tr","u8g2_font_luBIS14_tr"],
	["u8g2_font_luBIS18_te","u8g2_font_luBIS18_te"],
	["u8g2_font_luBIS18_tf","u8g2_font_luBIS18_tf"],
	["u8g2_font_luBIS18_tn","u8g2_font_luBIS18_tn"],
	["u8g2_font_luBIS18_tr","u8g2_font_luBIS18_tr"],
	["u8g2_font_luBIS19_te","u8g2_font_luBIS19_te"],
	["u8g2_font_luBIS19_tf","u8g2_font_luBIS19_tf"],
	["u8g2_font_luBIS19_tn","u8g2_font_luBIS19_tn"],
	["u8g2_font_luBIS19_tr","u8g2_font_luBIS19_tr"],
	["u8g2_font_luBIS24_te","u8g2_font_luBIS24_te"],
	["u8g2_font_luBIS24_tf","u8g2_font_luBIS24_tf"],
	["u8g2_font_luBIS24_tn","u8g2_font_luBIS24_tn"],
	["u8g2_font_luBIS24_tr","u8g2_font_luBIS24_tr"],
	["u8g2_font_lubR08_te","u8g2_font_lubR08_te"],
	["u8g2_font_lubR08_tf","u8g2_font_lubR08_tf"],
	["u8g2_font_lubR08_tn","u8g2_font_lubR08_tn"],
	["u8g2_font_lubR08_tr","u8g2_font_lubR08_tr"],
	["u8g2_font_lubR10_te","u8g2_font_lubR10_te"],
	["u8g2_font_lubR10_tf","u8g2_font_lubR10_tf"],
	["u8g2_font_lubR10_tn","u8g2_font_lubR10_tn"],
	["u8g2_font_lubR10_tr","u8g2_font_lubR10_tr"],
	["u8g2_font_lubR12_te","u8g2_font_lubR12_te"],
	["u8g2_font_lubR12_tf","u8g2_font_lubR12_tf"],
	["u8g2_font_lubR12_tn","u8g2_font_lubR12_tn"],
	["u8g2_font_lubR12_tr","u8g2_font_lubR12_tr"],
	["u8g2_font_lubR14_te","u8g2_font_lubR14_te"],
	["u8g2_font_lubR14_tf","u8g2_font_lubR14_tf"],
	["u8g2_font_lubR14_tn","u8g2_font_lubR14_tn"],
	["u8g2_font_lubR14_tr","u8g2_font_lubR14_tr"],
	["u8g2_font_lubR18_te","u8g2_font_lubR18_te"],
	["u8g2_font_lubR18_tf","u8g2_font_lubR18_tf"],
	["u8g2_font_lubR18_tn","u8g2_font_lubR18_tn"],
	["u8g2_font_lubR18_tr","u8g2_font_lubR18_tr"],
	["u8g2_font_lubR19_te","u8g2_font_lubR19_te"],
	["u8g2_font_lubR19_tf","u8g2_font_lubR19_tf"],
	["u8g2_font_lubR19_tn","u8g2_font_lubR19_tn"],
	["u8g2_font_lubR19_tr","u8g2_font_lubR19_tr"],
	["u8g2_font_lubR24_te","u8g2_font_lubR24_te"],
	["u8g2_font_lubR24_tf","u8g2_font_lubR24_tf"],
	["u8g2_font_lubR24_tn","u8g2_font_lubR24_tn"],
	["u8g2_font_lubR24_tr","u8g2_font_lubR24_tr"],
	["u8g2_font_luBS08_te","u8g2_font_luBS08_te"],
	["u8g2_font_luBS08_tf","u8g2_font_luBS08_tf"],
	["u8g2_font_luBS08_tn","u8g2_font_luBS08_tn"],
	["u8g2_font_luBS08_tr","u8g2_font_luBS08_tr"],
	["u8g2_font_luBS10_te","u8g2_font_luBS10_te"],
	["u8g2_font_luBS10_tf","u8g2_font_luBS10_tf"],
	["u8g2_font_luBS10_tn","u8g2_font_luBS10_tn"],
	["u8g2_font_luBS10_tr","u8g2_font_luBS10_tr"],
	["u8g2_font_luBS12_te","u8g2_font_luBS12_te"],
	["u8g2_font_luBS12_tf","u8g2_font_luBS12_tf"],
	["u8g2_font_luBS12_tn","u8g2_font_luBS12_tn"],
	["u8g2_font_luBS12_tr","u8g2_font_luBS12_tr"],
	["u8g2_font_luBS14_te","u8g2_font_luBS14_te"],
	["u8g2_font_luBS14_tf","u8g2_font_luBS14_tf"],
	["u8g2_font_luBS14_tn","u8g2_font_luBS14_tn"],
	["u8g2_font_luBS14_tr","u8g2_font_luBS14_tr"],
	["u8g2_font_luBS18_te","u8g2_font_luBS18_te"],
	["u8g2_font_luBS18_tf","u8g2_font_luBS18_tf"],
	["u8g2_font_luBS18_tn","u8g2_font_luBS18_tn"],
	["u8g2_font_luBS18_tr","u8g2_font_luBS18_tr"],
	["u8g2_font_luBS19_te","u8g2_font_luBS19_te"],
	["u8g2_font_luBS19_tf","u8g2_font_luBS19_tf"],
	["u8g2_font_luBS19_tn","u8g2_font_luBS19_tn"],
	["u8g2_font_luBS19_tr","u8g2_font_luBS19_tr"],
	["u8g2_font_luBS24_te","u8g2_font_luBS24_te"],
	["u8g2_font_luBS24_tf","u8g2_font_luBS24_tf"],
	["u8g2_font_luBS24_tn","u8g2_font_luBS24_tn"],
	["u8g2_font_luBS24_tr","u8g2_font_luBS24_tr"],
	["u8g2_font_lucasarts_scumm_subtitle_o_tf","u8g2_font_lucasarts_scumm_subtitle_o_tf"],
	["u8g2_font_lucasarts_scumm_subtitle_o_tn","u8g2_font_lucasarts_scumm_subtitle_o_tn"],
	["u8g2_font_lucasarts_scumm_subtitle_o_tr","u8g2_font_lucasarts_scumm_subtitle_o_tr"],
	["u8g2_font_lucasarts_scumm_subtitle_r_tf","u8g2_font_lucasarts_scumm_subtitle_r_tf"],
	["u8g2_font_lucasarts_scumm_subtitle_r_tn","u8g2_font_lucasarts_scumm_subtitle_r_tn"],
	["u8g2_font_lucasarts_scumm_subtitle_r_tr","u8g2_font_lucasarts_scumm_subtitle_r_tr"],
	["u8g2_font_lucasfont_alternate_tf","u8g2_font_lucasfont_alternate_tf"],
	["u8g2_font_lucasfont_alternate_tn","u8g2_font_lucasfont_alternate_tn"],
	["u8g2_font_lucasfont_alternate_tr","u8g2_font_lucasfont_alternate_tr"],
	["u8g2_font_luIS08_te","u8g2_font_luIS08_te"],
	["u8g2_font_luIS08_tf","u8g2_font_luIS08_tf"],
	["u8g2_font_luIS08_tn","u8g2_font_luIS08_tn"],
	["u8g2_font_luIS08_tr","u8g2_font_luIS08_tr"],
	["u8g2_font_luIS10_te","u8g2_font_luIS10_te"],
	["u8g2_font_luIS10_tf","u8g2_font_luIS10_tf"],
	["u8g2_font_luIS10_tn","u8g2_font_luIS10_tn"],
	["u8g2_font_luIS10_tr","u8g2_font_luIS10_tr"],
	["u8g2_font_luIS12_te","u8g2_font_luIS12_te"],
	["u8g2_font_luIS12_tf","u8g2_font_luIS12_tf"],
	["u8g2_font_luIS12_tn","u8g2_font_luIS12_tn"],
	["u8g2_font_luIS12_tr","u8g2_font_luIS12_tr"],
	["u8g2_font_luIS14_te","u8g2_font_luIS14_te"],
	["u8g2_font_luIS14_tf","u8g2_font_luIS14_tf"],
	["u8g2_font_luIS14_tn","u8g2_font_luIS14_tn"],
	["u8g2_font_luIS14_tr","u8g2_font_luIS14_tr"],
	["u8g2_font_luIS18_te","u8g2_font_luIS18_te"],
	["u8g2_font_luIS18_tf","u8g2_font_luIS18_tf"],
	["u8g2_font_luIS18_tn","u8g2_font_luIS18_tn"],
	["u8g2_font_luIS18_tr","u8g2_font_luIS18_tr"],
	["u8g2_font_luIS19_te","u8g2_font_luIS19_te"],
	["u8g2_font_luIS19_tf","u8g2_font_luIS19_tf"],
	["u8g2_font_luIS19_tn","u8g2_font_luIS19_tn"],
	["u8g2_font_luIS19_tr","u8g2_font_luIS19_tr"],
	["u8g2_font_luIS24_te","u8g2_font_luIS24_te"],
	["u8g2_font_luIS24_tf","u8g2_font_luIS24_tf"],
	["u8g2_font_luIS24_tn","u8g2_font_luIS24_tn"],
	["u8g2_font_luIS24_tr","u8g2_font_luIS24_tr"],
	["u8g2_font_luRS08_te","u8g2_font_luRS08_te"],
	["u8g2_font_luRS08_tf","u8g2_font_luRS08_tf"],
	["u8g2_font_luRS08_tn","u8g2_font_luRS08_tn"],
	["u8g2_font_luRS08_tr","u8g2_font_luRS08_tr"],
	["u8g2_font_luRS10_te","u8g2_font_luRS10_te"],
	["u8g2_font_luRS10_tf","u8g2_font_luRS10_tf"],
	["u8g2_font_luRS10_tn","u8g2_font_luRS10_tn"],
	["u8g2_font_luRS10_tr","u8g2_font_luRS10_tr"],
	["u8g2_font_luRS12_te","u8g2_font_luRS12_te"],
	["u8g2_font_luRS12_tf","u8g2_font_luRS12_tf"],
	["u8g2_font_luRS12_tn","u8g2_font_luRS12_tn"],
	["u8g2_font_luRS12_tr","u8g2_font_luRS12_tr"],
	["u8g2_font_luRS14_te","u8g2_font_luRS14_te"],
	["u8g2_font_luRS14_tf","u8g2_font_luRS14_tf"],
	["u8g2_font_luRS14_tn","u8g2_font_luRS14_tn"],
	["u8g2_font_luRS14_tr","u8g2_font_luRS14_tr"],
	["u8g2_font_luRS18_te","u8g2_font_luRS18_te"],
	["u8g2_font_luRS18_tf","u8g2_font_luRS18_tf"],
	["u8g2_font_luRS18_tn","u8g2_font_luRS18_tn"],
	["u8g2_font_luRS18_tr","u8g2_font_luRS18_tr"],
	["u8g2_font_luRS19_te","u8g2_font_luRS19_te"],
	["u8g2_font_luRS19_tf","u8g2_font_luRS19_tf"],
	["u8g2_font_luRS19_tn","u8g2_font_luRS19_tn"],
	["u8g2_font_luRS19_tr","u8g2_font_luRS19_tr"],
	["u8g2_font_luRS24_te","u8g2_font_luRS24_te"],
	["u8g2_font_luRS24_tf","u8g2_font_luRS24_tf"],
	["u8g2_font_luRS24_tn","u8g2_font_luRS24_tn"],
	["u8g2_font_luRS24_tr","u8g2_font_luRS24_tr"],
	["u8g2_font_m2icon_5_tf","u8g2_font_m2icon_5_tf"],
	["u8g2_font_m2icon_7_tf","u8g2_font_m2icon_7_tf"],
	["u8g2_font_m2icon_9_tf","u8g2_font_m2icon_9_tf"],
	["u8g2_font_mademoiselle_mel_tn","u8g2_font_mademoiselle_mel_tn"],
	["u8g2_font_mademoiselle_mel_tr","u8g2_font_mademoiselle_mel_tr"],
	["u8g2_font_maniac_te","u8g2_font_maniac_te"],
	["u8g2_font_maniac_tf","u8g2_font_maniac_tf"],
	["u8g2_font_maniac_tn","u8g2_font_maniac_tn"],
	["u8g2_font_maniac_tr","u8g2_font_maniac_tr"],
	["u8g2_font_mercutio_basic_nbp_t_all","u8g2_font_mercutio_basic_nbp_t_all"],
	["u8g2_font_mercutio_basic_nbp_tf","u8g2_font_mercutio_basic_nbp_tf"],
	["u8g2_font_mercutio_basic_nbp_tn","u8g2_font_mercutio_basic_nbp_tn"],
	["u8g2_font_mercutio_basic_nbp_tr","u8g2_font_mercutio_basic_nbp_tr"],
	["u8g2_font_mercutio_sc_nbp_t_all","u8g2_font_mercutio_sc_nbp_t_all"],
	["u8g2_font_mercutio_sc_nbp_tf","u8g2_font_mercutio_sc_nbp_tf"],
	["u8g2_font_mercutio_sc_nbp_tn","u8g2_font_mercutio_sc_nbp_tn"],
	["u8g2_font_mercutio_sc_nbp_tr","u8g2_font_mercutio_sc_nbp_tr"],
	["u8g2_font_michaelmouse_tu","u8g2_font_michaelmouse_tu"],
	["u8g2_font_micro_mn","u8g2_font_micro_mn"],
	["u8g2_font_micro_mr","u8g2_font_micro_mr"],
	["u8g2_font_micro_tn","u8g2_font_micro_tn"],
	["u8g2_font_micro_tr","u8g2_font_micro_tr"],
	["u8g2_font_miranda_nbp_tf","u8g2_font_miranda_nbp_tf"],
	["u8g2_font_miranda_nbp_tn","u8g2_font_miranda_nbp_tn"],
	["u8g2_font_miranda_nbp_tr","u8g2_font_miranda_nbp_tr"],
	["u8g2_font_missingplanet_t_all","u8g2_font_missingplanet_t_all"],
	["u8g2_font_missingplanet_tf","u8g2_font_missingplanet_tf"],
	["u8g2_font_missingplanet_tn","u8g2_font_missingplanet_tn"],
	["u8g2_font_missingplanet_tr","u8g2_font_missingplanet_tr"],
	["u8g2_font_mozart_nbp_h_all","u8g2_font_mozart_nbp_h_all"],
	["u8g2_font_mozart_nbp_t_all","u8g2_font_mozart_nbp_t_all"],
	["u8g2_font_mozart_nbp_tf","u8g2_font_mozart_nbp_tf"],
	["u8g2_font_mozart_nbp_tn","u8g2_font_mozart_nbp_tn"],
	["u8g2_font_mozart_nbp_tr","u8g2_font_mozart_nbp_tr"],
	["u8g2_font_ncenB08_te","u8g2_font_ncenB08_te"],
	["u8g2_font_ncenB08_tf","u8g2_font_ncenB08_tf"],
	["u8g2_font_ncenB08_tn","u8g2_font_ncenB08_tn"],
	["u8g2_font_ncenB08_tr","u8g2_font_ncenB08_tr"],
	["u8g2_font_ncenB10_te","u8g2_font_ncenB10_te"],
	["u8g2_font_ncenB10_tf","u8g2_font_ncenB10_tf"],
	["u8g2_font_ncenB10_tn","u8g2_font_ncenB10_tn"],
	["u8g2_font_ncenB10_tr","u8g2_font_ncenB10_tr"],
	["u8g2_font_ncenB12_te","u8g2_font_ncenB12_te"],
	["u8g2_font_ncenB12_tf","u8g2_font_ncenB12_tf"],
	["u8g2_font_ncenB12_tn","u8g2_font_ncenB12_tn"],
	["u8g2_font_ncenB12_tr","u8g2_font_ncenB12_tr"],
	["u8g2_font_ncenB14_te","u8g2_font_ncenB14_te"],
	["u8g2_font_ncenB14_tf","u8g2_font_ncenB14_tf"],
	["u8g2_font_ncenB14_tn","u8g2_font_ncenB14_tn"],
	["u8g2_font_ncenB14_tr","u8g2_font_ncenB14_tr"],
	["u8g2_font_ncenB18_te","u8g2_font_ncenB18_te"],
	["u8g2_font_ncenB18_tf","u8g2_font_ncenB18_tf"],
	["u8g2_font_ncenB18_tn","u8g2_font_ncenB18_tn"],
	["u8g2_font_ncenB18_tr","u8g2_font_ncenB18_tr"],
	["u8g2_font_ncenB24_te","u8g2_font_ncenB24_te"],
	["u8g2_font_ncenB24_tf","u8g2_font_ncenB24_tf"],
	["u8g2_font_ncenB24_tn","u8g2_font_ncenB24_tn"],
	["u8g2_font_ncenB24_tr","u8g2_font_ncenB24_tr"],
	["u8g2_font_ncenR08_te","u8g2_font_ncenR08_te"],
	["u8g2_font_ncenR08_tf","u8g2_font_ncenR08_tf"],
	["u8g2_font_ncenR08_tn","u8g2_font_ncenR08_tn"],
	["u8g2_font_ncenR08_tr","u8g2_font_ncenR08_tr"],
	["u8g2_font_ncenR10_te","u8g2_font_ncenR10_te"],
	["u8g2_font_ncenR10_tf","u8g2_font_ncenR10_tf"],
	["u8g2_font_ncenR10_tn","u8g2_font_ncenR10_tn"],
	["u8g2_font_ncenR10_tr","u8g2_font_ncenR10_tr"],
	["u8g2_font_ncenR12_te","u8g2_font_ncenR12_te"],
	["u8g2_font_ncenR12_tf","u8g2_font_ncenR12_tf"],
	["u8g2_font_ncenR12_tn","u8g2_font_ncenR12_tn"],
	["u8g2_font_ncenR12_tr","u8g2_font_ncenR12_tr"],
	["u8g2_font_ncenR14_te","u8g2_font_ncenR14_te"],
	["u8g2_font_ncenR14_tf","u8g2_font_ncenR14_tf"],
	["u8g2_font_ncenR14_tn","u8g2_font_ncenR14_tn"],
	["u8g2_font_ncenR14_tr","u8g2_font_ncenR14_tr"],
	["u8g2_font_ncenR18_te","u8g2_font_ncenR18_te"],
	["u8g2_font_ncenR18_tf","u8g2_font_ncenR18_tf"],
	["u8g2_font_ncenR18_tn","u8g2_font_ncenR18_tn"],
	["u8g2_font_ncenR18_tr","u8g2_font_ncenR18_tr"],
	["u8g2_font_ncenR24_te","u8g2_font_ncenR24_te"],
	["u8g2_font_ncenR24_tf","u8g2_font_ncenR24_tf"],
	["u8g2_font_ncenR24_tn","u8g2_font_ncenR24_tn"],
	["u8g2_font_ncenR24_tr","u8g2_font_ncenR24_tr"],
	["u8g2_font_nerhoe_tf","u8g2_font_nerhoe_tf"],
	["u8g2_font_nerhoe_tn","u8g2_font_nerhoe_tn"],
	["u8g2_font_nerhoe_tr","u8g2_font_nerhoe_tr"],
	["u8g2_font_nine_by_five_nbp_t_all","u8g2_font_nine_by_five_nbp_t_all"],
	["u8g2_font_nine_by_five_nbp_tf","u8g2_font_nine_by_five_nbp_tf"],
	["u8g2_font_nine_by_five_nbp_tn","u8g2_font_nine_by_five_nbp_tn"],
	["u8g2_font_nine_by_five_nbp_tr","u8g2_font_nine_by_five_nbp_tr"],
	["u8g2_font_nokiafc22_tf","u8g2_font_nokiafc22_tf"],
	["u8g2_font_nokiafc22_tn","u8g2_font_nokiafc22_tn"],
	["u8g2_font_nokiafc22_tr","u8g2_font_nokiafc22_tr"],
	["u8g2_font_nokiafc22_tu","u8g2_font_nokiafc22_tu"],
	["u8g2_font_oldwizard_tf","u8g2_font_oldwizard_tf"],
	["u8g2_font_oldwizard_tn","u8g2_font_oldwizard_tn"],
	["u8g2_font_oldwizard_tr","u8g2_font_oldwizard_tr"],
	["u8g2_font_oldwizard_tu","u8g2_font_oldwizard_tu"],
	["u8g2_font_open_iconic_all_1x_t","u8g2_font_open_iconic_all_1x_t"],
	["u8g2_font_open_iconic_all_2x_t","u8g2_font_open_iconic_all_2x_t"],
	["u8g2_font_open_iconic_all_4x_t","u8g2_font_open_iconic_all_4x_t"],
	["u8g2_font_open_iconic_all_6x_t","u8g2_font_open_iconic_all_6x_t"],
	["u8g2_font_open_iconic_all_8x_t","u8g2_font_open_iconic_all_8x_t"],
	["u8g2_font_open_iconic_app_1x_t","u8g2_font_open_iconic_app_1x_t"],
	["u8g2_font_open_iconic_app_2x_t","u8g2_font_open_iconic_app_2x_t"],
	["u8g2_font_open_iconic_app_4x_t","u8g2_font_open_iconic_app_4x_t"],
	["u8g2_font_open_iconic_app_6x_t","u8g2_font_open_iconic_app_6x_t"],
	["u8g2_font_open_iconic_app_8x_t","u8g2_font_open_iconic_app_8x_t"],
	["u8g2_font_open_iconic_arrow_1x_t","u8g2_font_open_iconic_arrow_1x_t"],
	["u8g2_font_open_iconic_arrow_2x_t","u8g2_font_open_iconic_arrow_2x_t"],
	["u8g2_font_open_iconic_arrow_4x_t","u8g2_font_open_iconic_arrow_4x_t"],
	["u8g2_font_open_iconic_arrow_6x_t","u8g2_font_open_iconic_arrow_6x_t"],
	["u8g2_font_open_iconic_arrow_8x_t","u8g2_font_open_iconic_arrow_8x_t"],
	["u8g2_font_open_iconic_check_1x_t","u8g2_font_open_iconic_check_1x_t"],
	["u8g2_font_open_iconic_check_2x_t","u8g2_font_open_iconic_check_2x_t"],
	["u8g2_font_open_iconic_check_4x_t","u8g2_font_open_iconic_check_4x_t"],
	["u8g2_font_open_iconic_check_6x_t","u8g2_font_open_iconic_check_6x_t"],
	["u8g2_font_open_iconic_check_8x_t","u8g2_font_open_iconic_check_8x_t"],
	["u8g2_font_open_iconic_email_1x_t","u8g2_font_open_iconic_email_1x_t"],
	["u8g2_font_open_iconic_email_2x_t","u8g2_font_open_iconic_email_2x_t"],
	["u8g2_font_open_iconic_email_4x_t","u8g2_font_open_iconic_email_4x_t"],
	["u8g2_font_open_iconic_email_6x_t","u8g2_font_open_iconic_email_6x_t"],
	["u8g2_font_open_iconic_email_8x_t","u8g2_font_open_iconic_email_8x_t"],
	["u8g2_font_open_iconic_embedded_1x_t","u8g2_font_open_iconic_embedded_1x_t"],
	["u8g2_font_open_iconic_embedded_2x_t","u8g2_font_open_iconic_embedded_2x_t"],
	["u8g2_font_open_iconic_embedded_4x_t","u8g2_font_open_iconic_embedded_4x_t"],
	["u8g2_font_open_iconic_embedded_6x_t","u8g2_font_open_iconic_embedded_6x_t"],
	["u8g2_font_open_iconic_embedded_8x_t","u8g2_font_open_iconic_embedded_8x_t"],
	["u8g2_font_open_iconic_gui_1x_t","u8g2_font_open_iconic_gui_1x_t"],
	["u8g2_font_open_iconic_gui_2x_t","u8g2_font_open_iconic_gui_2x_t"],
	["u8g2_font_open_iconic_gui_4x_t","u8g2_font_open_iconic_gui_4x_t"],
	["u8g2_font_open_iconic_gui_6x_t","u8g2_font_open_iconic_gui_6x_t"],
	["u8g2_font_open_iconic_gui_8x_t","u8g2_font_open_iconic_gui_8x_t"],
	["u8g2_font_open_iconic_human_1x_t","u8g2_font_open_iconic_human_1x_t"],
	["u8g2_font_open_iconic_human_2x_t","u8g2_font_open_iconic_human_2x_t"],
	["u8g2_font_open_iconic_human_4x_t","u8g2_font_open_iconic_human_4x_t"],
	["u8g2_font_open_iconic_human_6x_t","u8g2_font_open_iconic_human_6x_t"],
	["u8g2_font_open_iconic_human_8x_t","u8g2_font_open_iconic_human_8x_t"],
	["u8g2_font_open_iconic_mime_1x_t","u8g2_font_open_iconic_mime_1x_t"],
	["u8g2_font_open_iconic_mime_2x_t","u8g2_font_open_iconic_mime_2x_t"],
	["u8g2_font_open_iconic_mime_4x_t","u8g2_font_open_iconic_mime_4x_t"],
	["u8g2_font_open_iconic_mime_6x_t","u8g2_font_open_iconic_mime_6x_t"],
	["u8g2_font_open_iconic_mime_8x_t","u8g2_font_open_iconic_mime_8x_t"],
	["u8g2_font_open_iconic_other_1x_t","u8g2_font_open_iconic_other_1x_t"],
	["u8g2_font_open_iconic_other_2x_t","u8g2_font_open_iconic_other_2x_t"],
	["u8g2_font_open_iconic_other_4x_t","u8g2_font_open_iconic_other_4x_t"],
	["u8g2_font_open_iconic_other_6x_t","u8g2_font_open_iconic_other_6x_t"],
	["u8g2_font_open_iconic_other_8x_t","u8g2_font_open_iconic_other_8x_t"],
	["u8g2_font_open_iconic_play_1x_t","u8g2_font_open_iconic_play_1x_t"],
	["u8g2_font_open_iconic_play_2x_t","u8g2_font_open_iconic_play_2x_t"],
	["u8g2_font_open_iconic_play_4x_t","u8g2_font_open_iconic_play_4x_t"],
	["u8g2_font_open_iconic_play_6x_t","u8g2_font_open_iconic_play_6x_t"],
	["u8g2_font_open_iconic_play_8x_t","u8g2_font_open_iconic_play_8x_t"],
	["u8g2_font_open_iconic_text_1x_t","u8g2_font_open_iconic_text_1x_t"],
	["u8g2_font_open_iconic_text_2x_t","u8g2_font_open_iconic_text_2x_t"],
	["u8g2_font_open_iconic_text_4x_t","u8g2_font_open_iconic_text_4x_t"],
	["u8g2_font_open_iconic_text_6x_t","u8g2_font_open_iconic_text_6x_t"],
	["u8g2_font_open_iconic_text_8x_t","u8g2_font_open_iconic_text_8x_t"],
	["u8g2_font_open_iconic_thing_1x_t","u8g2_font_open_iconic_thing_1x_t"],
	["u8g2_font_open_iconic_thing_2x_t","u8g2_font_open_iconic_thing_2x_t"],
	["u8g2_font_open_iconic_thing_4x_t","u8g2_font_open_iconic_thing_4x_t"],
	["u8g2_font_open_iconic_thing_6x_t","u8g2_font_open_iconic_thing_6x_t"],
	["u8g2_font_open_iconic_thing_8x_t","u8g2_font_open_iconic_thing_8x_t"],
	["u8g2_font_open_iconic_weather_1x_t","u8g2_font_open_iconic_weather_1x_t"],
	["u8g2_font_open_iconic_weather_2x_t","u8g2_font_open_iconic_weather_2x_t"],
	["u8g2_font_open_iconic_weather_4x_t","u8g2_font_open_iconic_weather_4x_t"],
	["u8g2_font_open_iconic_weather_6x_t","u8g2_font_open_iconic_weather_6x_t"],
	["u8g2_font_open_iconic_weather_8x_t","u8g2_font_open_iconic_weather_8x_t"],
	["u8g2_font_open_iconic_www_1x_t","u8g2_font_open_iconic_www_1x_t"],
	["u8g2_font_open_iconic_www_2x_t","u8g2_font_open_iconic_www_2x_t"],
	["u8g2_font_open_iconic_www_4x_t","u8g2_font_open_iconic_www_4x_t"],
	["u8g2_font_open_iconic_www_6x_t","u8g2_font_open_iconic_www_6x_t"],
	["u8g2_font_open_iconic_www_8x_t","u8g2_font_open_iconic_www_8x_t"],
	["u8g2_font_ordinarybasis_t_all","u8g2_font_ordinarybasis_t_all"],
	["u8g2_font_ordinarybasis_tf","u8g2_font_ordinarybasis_tf"],
	["u8g2_font_ordinarybasis_tn","u8g2_font_ordinarybasis_tn"],
	["u8g2_font_ordinarybasis_tr","u8g2_font_ordinarybasis_tr"],
	["u8g2_font_osb18_tf","u8g2_font_osb18_tf"],
	["u8g2_font_osb18_tn","u8g2_font_osb18_tn"],
	["u8g2_font_osb18_tr","u8g2_font_osb18_tr"],
	["u8g2_font_osb21_tf","u8g2_font_osb21_tf"],
	["u8g2_font_osb21_tn","u8g2_font_osb21_tn"],
	["u8g2_font_osb21_tr","u8g2_font_osb21_tr"],
	["u8g2_font_osb26_tf","u8g2_font_osb26_tf"],
	["u8g2_font_osb26_tn","u8g2_font_osb26_tn"],
	["u8g2_font_osb26_tr","u8g2_font_osb26_tr"],
	["u8g2_font_osb29_tf","u8g2_font_osb29_tf"],
	["u8g2_font_osb29_tn","u8g2_font_osb29_tn"],
	["u8g2_font_osb29_tr","u8g2_font_osb29_tr"],
	["u8g2_font_osb35_tf","u8g2_font_osb35_tf"],
	["u8g2_font_osb35_tn","u8g2_font_osb35_tn"],
	["u8g2_font_osb35_tr","u8g2_font_osb35_tr"],
	["u8g2_font_osb41_tf","u8g2_font_osb41_tf"],
	["u8g2_font_osb41_tn","u8g2_font_osb41_tn"],
	["u8g2_font_osb41_tr","u8g2_font_osb41_tr"],
	["u8g2_font_oskool_tf","u8g2_font_oskool_tf"],
	["u8g2_font_oskool_tn","u8g2_font_oskool_tn"],
	["u8g2_font_oskool_tr","u8g2_font_oskool_tr"],
	["u8g2_font_osr18_tf","u8g2_font_osr18_tf"],
	["u8g2_font_osr18_tn","u8g2_font_osr18_tn"],
	["u8g2_font_osr18_tr","u8g2_font_osr18_tr"],
	["u8g2_font_osr21_tf","u8g2_font_osr21_tf"],
	["u8g2_font_osr21_tn","u8g2_font_osr21_tn"],
	["u8g2_font_osr21_tr","u8g2_font_osr21_tr"],
	["u8g2_font_osr26_tf","u8g2_font_osr26_tf"],
	["u8g2_font_osr26_tn","u8g2_font_osr26_tn"],
	["u8g2_font_osr26_tr","u8g2_font_osr26_tr"],
	["u8g2_font_osr29_tf","u8g2_font_osr29_tf"],
	["u8g2_font_osr29_tn","u8g2_font_osr29_tn"],
	["u8g2_font_osr29_tr","u8g2_font_osr29_tr"],
	["u8g2_font_osr35_tf","u8g2_font_osr35_tf"],
	["u8g2_font_osr35_tn","u8g2_font_osr35_tn"],
	["u8g2_font_osr35_tr","u8g2_font_osr35_tr"],
	["u8g2_font_osr41_tf","u8g2_font_osr41_tf"],
	["u8g2_font_osr41_tn","u8g2_font_osr41_tn"],
	["u8g2_font_osr41_tr","u8g2_font_osr41_tr"],
	["u8g2_font_p01type_tf","u8g2_font_p01type_tf"],
	["u8g2_font_p01type_tn","u8g2_font_p01type_tn"],
	["u8g2_font_p01type_tr","u8g2_font_p01type_tr"],
	["u8g2_font_pcsenior_8f","u8g2_font_pcsenior_8f"],
	["u8g2_font_pcsenior_8n","u8g2_font_pcsenior_8n"],
	["u8g2_font_pcsenior_8r","u8g2_font_pcsenior_8r"],
	["u8g2_font_pcsenior_8u","u8g2_font_pcsenior_8u"],
	["u8g2_font_pearfont_tr","u8g2_font_pearfont_tr"],
	["u8g2_font_pieceofcake_mel_tn","u8g2_font_pieceofcake_mel_tn"],
	["u8g2_font_pieceofcake_mel_tr","u8g2_font_pieceofcake_mel_tr"],
	["u8g2_font_Pixellari_te","u8g2_font_Pixellari_te"],
	["u8g2_font_Pixellari_tf","u8g2_font_Pixellari_tf"],
	["u8g2_font_Pixellari_tn","u8g2_font_Pixellari_tn"],
	["u8g2_font_Pixellari_tr","u8g2_font_Pixellari_tr"],
	["u8g2_font_Pixellari_tu","u8g2_font_Pixellari_tu"],
	["u8g2_font_pixelle_micro_tn","u8g2_font_pixelle_micro_tn"],
	["u8g2_font_pixelle_micro_tr","u8g2_font_pixelle_micro_tr"],
	["u8g2_font_pixelmordred_t_all","u8g2_font_pixelmordred_t_all"],
	["u8g2_font_pixelmordred_tf","u8g2_font_pixelmordred_tf"],
	["u8g2_font_pixelmordred_tn","u8g2_font_pixelmordred_tn"],
	["u8g2_font_pixelmordred_tr","u8g2_font_pixelmordred_tr"],
	["u8g2_font_pixelpoiiz_tr","u8g2_font_pixelpoiiz_tr"],
	["u8g2_font_press_mel_tn","u8g2_font_press_mel_tn"],
	["u8g2_font_press_mel_tr","u8g2_font_press_mel_tr"],
	["u8g2_font_pressstart2p_8f","u8g2_font_pressstart2p_8f"],
	["u8g2_font_pressstart2p_8n","u8g2_font_pressstart2p_8n"],
	["u8g2_font_pressstart2p_8r","u8g2_font_pressstart2p_8r"],
	["u8g2_font_pressstart2p_8u","u8g2_font_pressstart2p_8u"],
	["u8g2_font_profont10_mf","u8g2_font_profont10_mf"],
	["u8g2_font_profont10_mn","u8g2_font_profont10_mn"],
	["u8g2_font_profont10_mr","u8g2_font_profont10_mr"],
	["u8g2_font_profont10_tf","u8g2_font_profont10_tf"],
	["u8g2_font_profont10_tn","u8g2_font_profont10_tn"],
	["u8g2_font_profont10_tr","u8g2_font_profont10_tr"],
	["u8g2_font_profont11_mf","u8g2_font_profont11_mf"],
	["u8g2_font_profont11_mn","u8g2_font_profont11_mn"],
	["u8g2_font_profont11_mr","u8g2_font_profont11_mr"],
	["u8g2_font_profont11_tf","u8g2_font_profont11_tf"],
	["u8g2_font_profont11_tn","u8g2_font_profont11_tn"],
	["u8g2_font_profont11_tr","u8g2_font_profont11_tr"],
	["u8g2_font_profont12_mf","u8g2_font_profont12_mf"],
	["u8g2_font_profont12_mn","u8g2_font_profont12_mn"],
	["u8g2_font_profont12_mr","u8g2_font_profont12_mr"],
	["u8g2_font_profont12_tf","u8g2_font_profont12_tf"],
	["u8g2_font_profont12_tn","u8g2_font_profont12_tn"],
	["u8g2_font_profont12_tr","u8g2_font_profont12_tr"],
	["u8g2_font_profont15_mf","u8g2_font_profont15_mf"],
	["u8g2_font_profont15_mn","u8g2_font_profont15_mn"],
	["u8g2_font_profont15_mr","u8g2_font_profont15_mr"],
	["u8g2_font_profont15_tf","u8g2_font_profont15_tf"],
	["u8g2_font_profont15_tn","u8g2_font_profont15_tn"],
	["u8g2_font_profont15_tr","u8g2_font_profont15_tr"],
	["u8g2_font_profont17_mf","u8g2_font_profont17_mf"],
	["u8g2_font_profont17_mn","u8g2_font_profont17_mn"],
	["u8g2_font_profont17_mr","u8g2_font_profont17_mr"],
	["u8g2_font_profont17_tf","u8g2_font_profont17_tf"],
	["u8g2_font_profont17_tn","u8g2_font_profont17_tn"],
	["u8g2_font_profont17_tr","u8g2_font_profont17_tr"],
	["u8g2_font_profont22_mf","u8g2_font_profont22_mf"],
	["u8g2_font_profont22_mn","u8g2_font_profont22_mn"],
	["u8g2_font_profont22_mr","u8g2_font_profont22_mr"],
	["u8g2_font_profont22_tf","u8g2_font_profont22_tf"],
	["u8g2_font_profont22_tn","u8g2_font_profont22_tn"],
	["u8g2_font_profont22_tr","u8g2_font_profont22_tr"],
	["u8g2_font_profont29_mf","u8g2_font_profont29_mf"],
	["u8g2_font_profont29_mn","u8g2_font_profont29_mn"],
	["u8g2_font_profont29_mr","u8g2_font_profont29_mr"],
	["u8g2_font_profont29_tf","u8g2_font_profont29_tf"],
	["u8g2_font_profont29_tn","u8g2_font_profont29_tn"],
	["u8g2_font_profont29_tr","u8g2_font_profont29_tr"],
	["u8g2_font_prospero_bold_nbp_tf","u8g2_font_prospero_bold_nbp_tf"],
	["u8g2_font_prospero_bold_nbp_tn","u8g2_font_prospero_bold_nbp_tn"],
	["u8g2_font_prospero_bold_nbp_tr","u8g2_font_prospero_bold_nbp_tr"],
	["u8g2_font_prospero_nbp_tf","u8g2_font_prospero_nbp_tf"],
	["u8g2_font_prospero_nbp_tn","u8g2_font_prospero_nbp_tn"],
	["u8g2_font_prospero_nbp_tr","u8g2_font_prospero_nbp_tr"],
	["u8g2_font_px437wyse700a_mf","u8g2_font_px437wyse700a_mf"],
	["u8g2_font_px437wyse700a_mn","u8g2_font_px437wyse700a_mn"],
	["u8g2_font_px437wyse700a_mr","u8g2_font_px437wyse700a_mr"],
	["u8g2_font_px437wyse700a_tf","u8g2_font_px437wyse700a_tf"],
	["u8g2_font_px437wyse700a_tn","u8g2_font_px437wyse700a_tn"],
	["u8g2_font_px437wyse700a_tr","u8g2_font_px437wyse700a_tr"],
	["u8g2_font_px437wyse700b_mf","u8g2_font_px437wyse700b_mf"],
	["u8g2_font_px437wyse700b_mn","u8g2_font_px437wyse700b_mn"],
	["u8g2_font_px437wyse700b_mr","u8g2_font_px437wyse700b_mr"],
	["u8g2_font_px437wyse700b_tf","u8g2_font_px437wyse700b_tf"],
	["u8g2_font_px437wyse700b_tn","u8g2_font_px437wyse700b_tn"],
	["u8g2_font_px437wyse700b_tr","u8g2_font_px437wyse700b_tr"],
	["u8g2_font_pxplusibmcga_8f","u8g2_font_pxplusibmcga_8f"],
	["u8g2_font_pxplusibmcga_8n","u8g2_font_pxplusibmcga_8n"],
	["u8g2_font_pxplusibmcga_8r","u8g2_font_pxplusibmcga_8r"],
	["u8g2_font_pxplusibmcga_8u","u8g2_font_pxplusibmcga_8u"],
	["u8g2_font_pxplusibmcgathin_8f","u8g2_font_pxplusibmcgathin_8f"],
	["u8g2_font_pxplusibmcgathin_8n","u8g2_font_pxplusibmcgathin_8n"],
	["u8g2_font_pxplusibmcgathin_8r","u8g2_font_pxplusibmcgathin_8r"],
	["u8g2_font_pxplusibmcgathin_8u","u8g2_font_pxplusibmcgathin_8u"],
	["u8g2_font_pxplusibmvga8_m_all","u8g2_font_pxplusibmvga8_m_all"],
	["u8g2_font_pxplusibmvga8_mf","u8g2_font_pxplusibmvga8_mf"],
	["u8g2_font_pxplusibmvga8_mn","u8g2_font_pxplusibmvga8_mn"],
	["u8g2_font_pxplusibmvga8_mr","u8g2_font_pxplusibmvga8_mr"],
	["u8g2_font_pxplusibmvga8_t_all","u8g2_font_pxplusibmvga8_t_all"],
	["u8g2_font_pxplusibmvga8_tf","u8g2_font_pxplusibmvga8_tf"],
	["u8g2_font_pxplusibmvga8_tn","u8g2_font_pxplusibmvga8_tn"],
	["u8g2_font_pxplusibmvga8_tr","u8g2_font_pxplusibmvga8_tr"],
	["u8g2_font_pxplusibmvga9_m_all","u8g2_font_pxplusibmvga9_m_all"],
	["u8g2_font_pxplusibmvga9_mf","u8g2_font_pxplusibmvga9_mf"],
	["u8g2_font_pxplusibmvga9_mn","u8g2_font_pxplusibmvga9_mn"],
	["u8g2_font_pxplusibmvga9_mr","u8g2_font_pxplusibmvga9_mr"],
	["u8g2_font_pxplusibmvga9_t_all","u8g2_font_pxplusibmvga9_t_all"],
	["u8g2_font_pxplusibmvga9_tf","u8g2_font_pxplusibmvga9_tf"],
	["u8g2_font_pxplusibmvga9_tn","u8g2_font_pxplusibmvga9_tn"],
	["u8g2_font_pxplusibmvga9_tr","u8g2_font_pxplusibmvga9_tr"],
	["u8g2_font_pxplustandynewtv_8_all","u8g2_font_pxplustandynewtv_8_all"],
	["u8g2_font_pxplustandynewtv_8f","u8g2_font_pxplustandynewtv_8f"],
	["u8g2_font_pxplustandynewtv_8n","u8g2_font_pxplustandynewtv_8n"],
	["u8g2_font_pxplustandynewtv_8r","u8g2_font_pxplustandynewtv_8r"],
	["u8g2_font_pxplustandynewtv_8u","u8g2_font_pxplustandynewtv_8u"],
	["u8g2_font_pxplustandynewtv_t_all","u8g2_font_pxplustandynewtv_t_all"],
	["u8g2_font_questgiver_tr","u8g2_font_questgiver_tr"],
	["u8g2_font_repress_mel_tn","u8g2_font_repress_mel_tn"],
	["u8g2_font_repress_mel_tr","u8g2_font_repress_mel_tr"],
	["u8g2_font_robot_de_niro_tf","u8g2_font_robot_de_niro_tf"],
	["u8g2_font_robot_de_niro_tn","u8g2_font_robot_de_niro_tn"],
	["u8g2_font_robot_de_niro_tr","u8g2_font_robot_de_niro_tr"],
	["u8g2_font_roentgen_nbp_h_all","u8g2_font_roentgen_nbp_h_all"],
	["u8g2_font_roentgen_nbp_t_all","u8g2_font_roentgen_nbp_t_all"],
	["u8g2_font_roentgen_nbp_tf","u8g2_font_roentgen_nbp_tf"],
	["u8g2_font_roentgen_nbp_tn","u8g2_font_roentgen_nbp_tn"],
	["u8g2_font_roentgen_nbp_tr","u8g2_font_roentgen_nbp_tr"],
	["u8g2_font_rosencrantz_nbp_t_all","u8g2_font_rosencrantz_nbp_t_all"],
	["u8g2_font_rosencrantz_nbp_tf","u8g2_font_rosencrantz_nbp_tf"],
	["u8g2_font_rosencrantz_nbp_tn","u8g2_font_rosencrantz_nbp_tn"],
	["u8g2_font_rosencrantz_nbp_tr","u8g2_font_rosencrantz_nbp_tr"],
	["u8g2_font_saikyosansbold8_8n","u8g2_font_saikyosansbold8_8n"],
	["u8g2_font_saikyosansbold8_8u","u8g2_font_saikyosansbold8_8u"],
	["u8g2_font_samim_10_t_all","u8g2_font_samim_10_t_all"],
	["u8g2_font_samim_12_t_all","u8g2_font_samim_12_t_all"],
	["u8g2_font_samim_14_t_all","u8g2_font_samim_14_t_all"],
	["u8g2_font_samim_16_t_all","u8g2_font_samim_16_t_all"],
	["u8g2_font_samim_fd_10_t_all","u8g2_font_samim_fd_10_t_all"],
	["u8g2_font_samim_fd_12_t_all","u8g2_font_samim_fd_12_t_all"],
	["u8g2_font_samim_fd_14_t_all","u8g2_font_samim_fd_14_t_all"],
	["u8g2_font_samim_fd_16_t_all","u8g2_font_samim_fd_16_t_all"],
	["u8g2_font_sandyforest_tn","u8g2_font_sandyforest_tn"],
	["u8g2_font_sandyforest_tr","u8g2_font_sandyforest_tr"],
	["u8g2_font_sandyforest_tu","u8g2_font_sandyforest_tu"],
	["u8g2_font_secretaryhand_t_all","u8g2_font_secretaryhand_t_all"],
	["u8g2_font_secretaryhand_tf","u8g2_font_secretaryhand_tf"],
	["u8g2_font_secretaryhand_tn","u8g2_font_secretaryhand_tn"],
	["u8g2_font_secretaryhand_tr","u8g2_font_secretaryhand_tr"],
	["u8g2_font_seraphimb1_tr","u8g2_font_seraphimb1_tr"],
	["u8g2_font_shylock_nbp_t_all","u8g2_font_shylock_nbp_t_all"],
	["u8g2_font_shylock_nbp_tf","u8g2_font_shylock_nbp_tf"],
	["u8g2_font_shylock_nbp_tn","u8g2_font_shylock_nbp_tn"],
	["u8g2_font_shylock_nbp_tr","u8g2_font_shylock_nbp_tr"],
	["u8g2_font_siji_t_6x10","u8g2_font_siji_t_6x10"],
	["u8g2_font_sirclive_tn","u8g2_font_sirclive_tn"],
	["u8g2_font_sirclive_tr","u8g2_font_sirclive_tr"],
	["u8g2_font_sirclivethebold_tn","u8g2_font_sirclivethebold_tn"],
	["u8g2_font_sirclivethebold_tr","u8g2_font_sirclivethebold_tr"],
	["u8g2_font_smart_patrol_nbp_tf","u8g2_font_smart_patrol_nbp_tf"],
	["u8g2_font_smart_patrol_nbp_tn","u8g2_font_smart_patrol_nbp_tn"],
	["u8g2_font_smart_patrol_nbp_tr","u8g2_font_smart_patrol_nbp_tr"],
	["u8g2_font_squirrel_tn","u8g2_font_squirrel_tn"],
	["u8g2_font_squirrel_tr","u8g2_font_squirrel_tr"],
	["u8g2_font_squirrel_tu","u8g2_font_squirrel_tu"],
	["u8g2_font_sticker_mel_tn","u8g2_font_sticker_mel_tn"],
	["u8g2_font_sticker_mel_tr","u8g2_font_sticker_mel_tr"],
	["u8g2_font_synchronizer_nbp_tf","u8g2_font_synchronizer_nbp_tf"],
	["u8g2_font_synchronizer_nbp_tn","u8g2_font_synchronizer_nbp_tn"],
	["u8g2_font_synchronizer_nbp_tr","u8g2_font_synchronizer_nbp_tr"],
	["u8g2_font_t0_11_me","u8g2_font_t0_11_me"],
	["u8g2_font_t0_11_mf","u8g2_font_t0_11_mf"],
	["u8g2_font_t0_11_mn","u8g2_font_t0_11_mn"],
	["u8g2_font_t0_11_mr","u8g2_font_t0_11_mr"],
	["u8g2_font_t0_11_t_all","u8g2_font_t0_11_t_all"],
	["u8g2_font_t0_11_te","u8g2_font_t0_11_te"],
	["u8g2_font_t0_11_tf","u8g2_font_t0_11_tf"],
	["u8g2_font_t0_11_tn","u8g2_font_t0_11_tn"],
	["u8g2_font_t0_11_tr","u8g2_font_t0_11_tr"],
	["u8g2_font_t0_11b_me","u8g2_font_t0_11b_me"],
	["u8g2_font_t0_11b_mf","u8g2_font_t0_11b_mf"],
	["u8g2_font_t0_11b_mn","u8g2_font_t0_11b_mn"],
	["u8g2_font_t0_11b_mr","u8g2_font_t0_11b_mr"],
	["u8g2_font_t0_11b_te","u8g2_font_t0_11b_te"],
	["u8g2_font_t0_11b_tf","u8g2_font_t0_11b_tf"],
	["u8g2_font_t0_11b_tn","u8g2_font_t0_11b_tn"],
	["u8g2_font_t0_11b_tr","u8g2_font_t0_11b_tr"],
	["u8g2_font_t0_12_me","u8g2_font_t0_12_me"],
	["u8g2_font_t0_12_mf","u8g2_font_t0_12_mf"],
	["u8g2_font_t0_12_mn","u8g2_font_t0_12_mn"],
	["u8g2_font_t0_12_mr","u8g2_font_t0_12_mr"],
	["u8g2_font_t0_12_te","u8g2_font_t0_12_te"],
	["u8g2_font_t0_12_tf","u8g2_font_t0_12_tf"],
	["u8g2_font_t0_12_tn","u8g2_font_t0_12_tn"],
	["u8g2_font_t0_12_tr","u8g2_font_t0_12_tr"],
	["u8g2_font_t0_12b_me","u8g2_font_t0_12b_me"],
	["u8g2_font_t0_12b_mf","u8g2_font_t0_12b_mf"],
	["u8g2_font_t0_12b_mn","u8g2_font_t0_12b_mn"],
	["u8g2_font_t0_12b_mr","u8g2_font_t0_12b_mr"],
	["u8g2_font_t0_12b_te","u8g2_font_t0_12b_te"],
	["u8g2_font_t0_12b_tf","u8g2_font_t0_12b_tf"],
	["u8g2_font_t0_12b_tn","u8g2_font_t0_12b_tn"],
	["u8g2_font_t0_12b_tr","u8g2_font_t0_12b_tr"],
	["u8g2_font_t0_13_me","u8g2_font_t0_13_me"],
	["u8g2_font_t0_13_mf","u8g2_font_t0_13_mf"],
	["u8g2_font_t0_13_mn","u8g2_font_t0_13_mn"],
	["u8g2_font_t0_13_mr","u8g2_font_t0_13_mr"],
	["u8g2_font_t0_13_te","u8g2_font_t0_13_te"],
	["u8g2_font_t0_13_tf","u8g2_font_t0_13_tf"],
	["u8g2_font_t0_13_tn","u8g2_font_t0_13_tn"],
	["u8g2_font_t0_13_tr","u8g2_font_t0_13_tr"],
	["u8g2_font_t0_13b_me","u8g2_font_t0_13b_me"],
	["u8g2_font_t0_13b_mf","u8g2_font_t0_13b_mf"],
	["u8g2_font_t0_13b_mn","u8g2_font_t0_13b_mn"],
	["u8g2_font_t0_13b_mr","u8g2_font_t0_13b_mr"],
	["u8g2_font_t0_13b_te","u8g2_font_t0_13b_te"],
	["u8g2_font_t0_13b_tf","u8g2_font_t0_13b_tf"],
	["u8g2_font_t0_13b_tn","u8g2_font_t0_13b_tn"],
	["u8g2_font_t0_13b_tr","u8g2_font_t0_13b_tr"],
	["u8g2_font_t0_14_me","u8g2_font_t0_14_me"],
	["u8g2_font_t0_14_mf","u8g2_font_t0_14_mf"],
	["u8g2_font_t0_14_mn","u8g2_font_t0_14_mn"],
	["u8g2_font_t0_14_mr","u8g2_font_t0_14_mr"],
	["u8g2_font_t0_14_te","u8g2_font_t0_14_te"],
	["u8g2_font_t0_14_tf","u8g2_font_t0_14_tf"],
	["u8g2_font_t0_14_tn","u8g2_font_t0_14_tn"],
	["u8g2_font_t0_14_tr","u8g2_font_t0_14_tr"],
	["u8g2_font_t0_14b_me","u8g2_font_t0_14b_me"],
	["u8g2_font_t0_14b_mf","u8g2_font_t0_14b_mf"],
	["u8g2_font_t0_14b_mn","u8g2_font_t0_14b_mn"],
	["u8g2_font_t0_14b_mr","u8g2_font_t0_14b_mr"],
	["u8g2_font_t0_14b_te","u8g2_font_t0_14b_te"],
	["u8g2_font_t0_14b_tf","u8g2_font_t0_14b_tf"],
	["u8g2_font_t0_14b_tn","u8g2_font_t0_14b_tn"],
	["u8g2_font_t0_14b_tr","u8g2_font_t0_14b_tr"],
	["u8g2_font_t0_15_me","u8g2_font_t0_15_me"],
	["u8g2_font_t0_15_mf","u8g2_font_t0_15_mf"],
	["u8g2_font_t0_15_mn","u8g2_font_t0_15_mn"],
	["u8g2_font_t0_15_mr","u8g2_font_t0_15_mr"],
	["u8g2_font_t0_15_te","u8g2_font_t0_15_te"],
	["u8g2_font_t0_15_tf","u8g2_font_t0_15_tf"],
	["u8g2_font_t0_15_tn","u8g2_font_t0_15_tn"],
	["u8g2_font_t0_15_tr","u8g2_font_t0_15_tr"],
	["u8g2_font_t0_15b_me","u8g2_font_t0_15b_me"],
	["u8g2_font_t0_15b_mf","u8g2_font_t0_15b_mf"],
	["u8g2_font_t0_15b_mn","u8g2_font_t0_15b_mn"],
	["u8g2_font_t0_15b_mr","u8g2_font_t0_15b_mr"],
	["u8g2_font_t0_15b_te","u8g2_font_t0_15b_te"],
	["u8g2_font_t0_15b_tf","u8g2_font_t0_15b_tf"],
	["u8g2_font_t0_15b_tn","u8g2_font_t0_15b_tn"],
	["u8g2_font_t0_15b_tr","u8g2_font_t0_15b_tr"],
	["u8g2_font_t0_16_me","u8g2_font_t0_16_me"],
	["u8g2_font_t0_16_mf","u8g2_font_t0_16_mf"],
	["u8g2_font_t0_16_mn","u8g2_font_t0_16_mn"],
	["u8g2_font_t0_16_mr","u8g2_font_t0_16_mr"],
	["u8g2_font_t0_16_te","u8g2_font_t0_16_te"],
	["u8g2_font_t0_16_tf","u8g2_font_t0_16_tf"],
	["u8g2_font_t0_16_tn","u8g2_font_t0_16_tn"],
	["u8g2_font_t0_16_tr","u8g2_font_t0_16_tr"],
	["u8g2_font_t0_16b_me","u8g2_font_t0_16b_me"],
	["u8g2_font_t0_16b_mf","u8g2_font_t0_16b_mf"],
	["u8g2_font_t0_16b_mn","u8g2_font_t0_16b_mn"],
	["u8g2_font_t0_16b_mr","u8g2_font_t0_16b_mr"],
	["u8g2_font_t0_16b_te","u8g2_font_t0_16b_te"],
	["u8g2_font_t0_16b_tf","u8g2_font_t0_16b_tf"],
	["u8g2_font_t0_16b_tn","u8g2_font_t0_16b_tn"],
	["u8g2_font_t0_16b_tr","u8g2_font_t0_16b_tr"],
	["u8g2_font_t0_17_me","u8g2_font_t0_17_me"],
	["u8g2_font_t0_17_mf","u8g2_font_t0_17_mf"],
	["u8g2_font_t0_17_mn","u8g2_font_t0_17_mn"],
	["u8g2_font_t0_17_mr","u8g2_font_t0_17_mr"],
	["u8g2_font_t0_17_te","u8g2_font_t0_17_te"],
	["u8g2_font_t0_17_tf","u8g2_font_t0_17_tf"],
	["u8g2_font_t0_17_tn","u8g2_font_t0_17_tn"],
	["u8g2_font_t0_17_tr","u8g2_font_t0_17_tr"],
	["u8g2_font_t0_17b_me","u8g2_font_t0_17b_me"],
	["u8g2_font_t0_17b_mf","u8g2_font_t0_17b_mf"],
	["u8g2_font_t0_17b_mn","u8g2_font_t0_17b_mn"],
	["u8g2_font_t0_17b_mr","u8g2_font_t0_17b_mr"],
	["u8g2_font_t0_17b_te","u8g2_font_t0_17b_te"],
	["u8g2_font_t0_17b_tf","u8g2_font_t0_17b_tf"],
	["u8g2_font_t0_17b_tn","u8g2_font_t0_17b_tn"],
	["u8g2_font_t0_17b_tr","u8g2_font_t0_17b_tr"],
	["u8g2_font_t0_18_me","u8g2_font_t0_18_me"],
	["u8g2_font_t0_18_mf","u8g2_font_t0_18_mf"],
	["u8g2_font_t0_18_mn","u8g2_font_t0_18_mn"],
	["u8g2_font_t0_18_mr","u8g2_font_t0_18_mr"],
	["u8g2_font_t0_18_te","u8g2_font_t0_18_te"],
	["u8g2_font_t0_18_tf","u8g2_font_t0_18_tf"],
	["u8g2_font_t0_18_tn","u8g2_font_t0_18_tn"],
	["u8g2_font_t0_18_tr","u8g2_font_t0_18_tr"],
	["u8g2_font_t0_18b_me","u8g2_font_t0_18b_me"],
	["u8g2_font_t0_18b_mf","u8g2_font_t0_18b_mf"],
	["u8g2_font_t0_18b_mn","u8g2_font_t0_18b_mn"],
	["u8g2_font_t0_18b_mr","u8g2_font_t0_18b_mr"],
	["u8g2_font_t0_18b_te","u8g2_font_t0_18b_te"],
	["u8g2_font_t0_18b_tf","u8g2_font_t0_18b_tf"],
	["u8g2_font_t0_18b_tn","u8g2_font_t0_18b_tn"],
	["u8g2_font_t0_18b_tr","u8g2_font_t0_18b_tr"],
	["u8g2_font_t0_22_me","u8g2_font_t0_22_me"],
	["u8g2_font_t0_22_mf","u8g2_font_t0_22_mf"],
	["u8g2_font_t0_22_mn","u8g2_font_t0_22_mn"],
	["u8g2_font_t0_22_mr","u8g2_font_t0_22_mr"],
	["u8g2_font_t0_22_te","u8g2_font_t0_22_te"],
	["u8g2_font_t0_22_tf","u8g2_font_t0_22_tf"],
	["u8g2_font_t0_22_tn","u8g2_font_t0_22_tn"],
	["u8g2_font_t0_22_tr","u8g2_font_t0_22_tr"],
	["u8g2_font_t0_22b_me","u8g2_font_t0_22b_me"],
	["u8g2_font_t0_22b_mf","u8g2_font_t0_22b_mf"],
	["u8g2_font_t0_22b_mn","u8g2_font_t0_22b_mn"],
	["u8g2_font_t0_22b_mr","u8g2_font_t0_22b_mr"],
	["u8g2_font_t0_22b_te","u8g2_font_t0_22b_te"],
	["u8g2_font_t0_22b_tf","u8g2_font_t0_22b_tf"],
	["u8g2_font_t0_22b_tn","u8g2_font_t0_22b_tn"],
	["u8g2_font_t0_22b_tr","u8g2_font_t0_22b_tr"],
	["u8g2_font_tallpix_tr","u8g2_font_tallpix_tr"],
	["u8g2_font_tenfatguys_t_all","u8g2_font_tenfatguys_t_all"],
	["u8g2_font_tenfatguys_tf","u8g2_font_tenfatguys_tf"],
	["u8g2_font_tenfatguys_tn","u8g2_font_tenfatguys_tn"],
	["u8g2_font_tenfatguys_tr","u8g2_font_tenfatguys_tr"],
	["u8g2_font_tenfatguys_tu","u8g2_font_tenfatguys_tu"],
	["u8g2_font_tenstamps_mf","u8g2_font_tenstamps_mf"],
	["u8g2_font_tenstamps_mn","u8g2_font_tenstamps_mn"],
	["u8g2_font_tenstamps_mr","u8g2_font_tenstamps_mr"],
	["u8g2_font_tenstamps_mu","u8g2_font_tenstamps_mu"],
	["u8g2_font_tenthinguys_t_all","u8g2_font_tenthinguys_t_all"],
	["u8g2_font_tenthinguys_tf","u8g2_font_tenthinguys_tf"],
	["u8g2_font_tenthinguys_tn","u8g2_font_tenthinguys_tn"],
	["u8g2_font_tenthinguys_tr","u8g2_font_tenthinguys_tr"],
	["u8g2_font_tenthinguys_tu","u8g2_font_tenthinguys_tu"],
	["u8g2_font_tenthinnerguys_t_all","u8g2_font_tenthinnerguys_t_all"],
	["u8g2_font_tenthinnerguys_tf","u8g2_font_tenthinnerguys_tf"],
	["u8g2_font_tenthinnerguys_tn","u8g2_font_tenthinnerguys_tn"],
	["u8g2_font_tenthinnerguys_tr","u8g2_font_tenthinnerguys_tr"],
	["u8g2_font_tenthinnerguys_tu","u8g2_font_tenthinnerguys_tu"],
	["u8g2_font_timB08_tf","u8g2_font_timB08_tf"],
	["u8g2_font_timB08_tn","u8g2_font_timB08_tn"],
	["u8g2_font_timB08_tr","u8g2_font_timB08_tr"],
	["u8g2_font_timB10_tf","u8g2_font_timB10_tf"],
	["u8g2_font_timB10_tn","u8g2_font_timB10_tn"],
	["u8g2_font_timB10_tr","u8g2_font_timB10_tr"],
	["u8g2_font_timB12_tf","u8g2_font_timB12_tf"],
	["u8g2_font_timB12_tn","u8g2_font_timB12_tn"],
	["u8g2_font_timB12_tr","u8g2_font_timB12_tr"],
	["u8g2_font_timB14_tf","u8g2_font_timB14_tf"],
	["u8g2_font_timB14_tn","u8g2_font_timB14_tn"],
	["u8g2_font_timB14_tr","u8g2_font_timB14_tr"],
	["u8g2_font_timB18_tf","u8g2_font_timB18_tf"],
	["u8g2_font_timB18_tn","u8g2_font_timB18_tn"],
	["u8g2_font_timB18_tr","u8g2_font_timB18_tr"],
	["u8g2_font_timB24_tf","u8g2_font_timB24_tf"],
	["u8g2_font_timB24_tn","u8g2_font_timB24_tn"],
	["u8g2_font_timB24_tr","u8g2_font_timB24_tr"],
	["u8g2_font_TimesNewPixel_tr","u8g2_font_TimesNewPixel_tr"],
	["u8g2_font_timR08_tf","u8g2_font_timR08_tf"],
	["u8g2_font_timR08_tn","u8g2_font_timR08_tn"],
	["u8g2_font_timR08_tr","u8g2_font_timR08_tr"],
	["u8g2_font_timR10_tf","u8g2_font_timR10_tf"],
	["u8g2_font_timR10_tn","u8g2_font_timR10_tn"],
	["u8g2_font_timR10_tr","u8g2_font_timR10_tr"],
	["u8g2_font_timR12_tf","u8g2_font_timR12_tf"],
	["u8g2_font_timR12_tn","u8g2_font_timR12_tn"],
	["u8g2_font_timR12_tr","u8g2_font_timR12_tr"],
	["u8g2_font_timR14_tf","u8g2_font_timR14_tf"],
	["u8g2_font_timR14_tn","u8g2_font_timR14_tn"],
	["u8g2_font_timR14_tr","u8g2_font_timR14_tr"],
	["u8g2_font_timR18_tf","u8g2_font_timR18_tf"],
	["u8g2_font_timR18_tn","u8g2_font_timR18_tn"],
	["u8g2_font_timR18_tr","u8g2_font_timR18_tr"],
	["u8g2_font_timR24_tf","u8g2_font_timR24_tf"],
	["u8g2_font_timR24_tn","u8g2_font_timR24_tn"],
	["u8g2_font_timR24_tr","u8g2_font_timR24_tr"],
	["u8g2_font_tinytim_tf","u8g2_font_tinytim_tf"],
	["u8g2_font_tinytim_tn","u8g2_font_tinytim_tn"],
	["u8g2_font_tinytim_tr","u8g2_font_tinytim_tr"],
	["u8g2_font_tom_thumb_4x6_me","u8g2_font_tom_thumb_4x6_me"],
	["u8g2_font_tom_thumb_4x6_mf","u8g2_font_tom_thumb_4x6_mf"],
	["u8g2_font_tom_thumb_4x6_mn","u8g2_font_tom_thumb_4x6_mn"],
	["u8g2_font_tom_thumb_4x6_mr","u8g2_font_tom_thumb_4x6_mr"],
	["u8g2_font_tom_thumb_4x6_t_all","u8g2_font_tom_thumb_4x6_t_all"],
	["u8g2_font_tom_thumb_4x6_te","u8g2_font_tom_thumb_4x6_te"],
	["u8g2_font_tom_thumb_4x6_tf","u8g2_font_tom_thumb_4x6_tf"],
	["u8g2_font_tom_thumb_4x6_tn","u8g2_font_tom_thumb_4x6_tn"],
	["u8g2_font_tom_thumb_4x6_tr","u8g2_font_tom_thumb_4x6_tr"],
	["u8g2_font_tooseornament_tf","u8g2_font_tooseornament_tf"],
	["u8g2_font_tooseornament_tn","u8g2_font_tooseornament_tn"],
	["u8g2_font_tooseornament_tr","u8g2_font_tooseornament_tr"],
	["u8g2_font_torussansbold8_8n","u8g2_font_torussansbold8_8n"],
	["u8g2_font_torussansbold8_8r","u8g2_font_torussansbold8_8r"],
	["u8g2_font_torussansbold8_8u","u8g2_font_torussansbold8_8u"],
	["u8g2_font_trixel_square_tf","u8g2_font_trixel_square_tf"],
	["u8g2_font_trixel_square_tn","u8g2_font_trixel_square_tn"],
	["u8g2_font_trixel_square_tr","u8g2_font_trixel_square_tr"],
	["u8g2_font_twelvedings_t_all","u8g2_font_twelvedings_t_all"],
	["u8g2_font_u8glib_4_hf","u8g2_font_u8glib_4_hf"],
	["u8g2_font_u8glib_4_hr","u8g2_font_u8glib_4_hr"],
	["u8g2_font_u8glib_4_tf","u8g2_font_u8glib_4_tf"],
	["u8g2_font_u8glib_4_tr","u8g2_font_u8glib_4_tr"],
	["u8g2_font_unifont_h_symbols","u8g2_font_unifont_h_symbols"],
	["u8g2_font_unifont_t_0_72_73","u8g2_font_unifont_t_0_72_73"],
	["u8g2_font_unifont_t_0_75","u8g2_font_unifont_t_0_75"],
	["u8g2_font_unifont_t_0_76","u8g2_font_unifont_t_0_76"],
	["u8g2_font_unifont_t_0_77","u8g2_font_unifont_t_0_77"],
	["u8g2_font_unifont_t_0_78_79","u8g2_font_unifont_t_0_78_79"],
	["u8g2_font_unifont_t_0_86","u8g2_font_unifont_t_0_86"],
	["u8g2_font_unifont_t_72_73","u8g2_font_unifont_t_72_73"],
	["u8g2_font_unifont_t_75","u8g2_font_unifont_t_75"],
	["u8g2_font_unifont_t_76","u8g2_font_unifont_t_76"],
	["u8g2_font_unifont_t_77","u8g2_font_unifont_t_77"],
	["u8g2_font_unifont_t_78_79","u8g2_font_unifont_t_78_79"],
	["u8g2_font_unifont_t_86","u8g2_font_unifont_t_86"],
	["u8g2_font_unifont_t_animals","u8g2_font_unifont_t_animals"],
	["u8g2_font_unifont_t_arabic","u8g2_font_unifont_t_arabic"],
	["u8g2_font_unifont_t_bengali","u8g2_font_unifont_t_bengali"],
	["u8g2_font_unifont_t_cards","u8g2_font_unifont_t_cards"],
	["u8g2_font_unifont_t_chinese1","u8g2_font_unifont_t_chinese1"],
	["u8g2_font_unifont_t_chinese2","u8g2_font_unifont_t_chinese2"],
	["u8g2_font_unifont_t_chinese3","u8g2_font_unifont_t_chinese3"],
	["u8g2_font_unifont_t_cyrillic","u8g2_font_unifont_t_cyrillic"],
	["u8g2_font_unifont_t_devanagari","u8g2_font_unifont_t_devanagari"],
	["u8g2_font_unifont_t_domino","u8g2_font_unifont_t_domino"],
	["u8g2_font_unifont_t_emoticons","u8g2_font_unifont_t_emoticons"],
	["u8g2_font_unifont_t_extended","u8g2_font_unifont_t_extended"],
	["u8g2_font_unifont_t_greek","u8g2_font_unifont_t_greek"],
	["u8g2_font_unifont_t_hebrew","u8g2_font_unifont_t_hebrew"],
	["u8g2_font_unifont_t_japanese1","u8g2_font_unifont_t_japanese1"],
	["u8g2_font_unifont_t_japanese2","u8g2_font_unifont_t_japanese2"],
	["u8g2_font_unifont_t_japanese3","u8g2_font_unifont_t_japanese3"],
	["u8g2_font_unifont_t_korean1","u8g2_font_unifont_t_korean1"],
	["u8g2_font_unifont_t_korean2","u8g2_font_unifont_t_korean2"],
	["u8g2_font_unifont_t_latin","u8g2_font_unifont_t_latin"],
	["u8g2_font_unifont_t_polish","u8g2_font_unifont_t_polish"],
	["u8g2_font_unifont_t_symbols","u8g2_font_unifont_t_symbols"],
	["u8g2_font_unifont_t_tibetan","u8g2_font_unifont_t_tibetan"],
	["u8g2_font_unifont_t_urdu","u8g2_font_unifont_t_urdu"],
	["u8g2_font_unifont_t_vietnamese1","u8g2_font_unifont_t_vietnamese1"],
	["u8g2_font_unifont_t_vietnamese2","u8g2_font_unifont_t_vietnamese2"],
	["u8g2_font_unifont_t_weather","u8g2_font_unifont_t_weather"],
	["u8g2_font_unifont_te","u8g2_font_unifont_te"],
	["u8g2_font_unifont_tf","u8g2_font_unifont_tf"],
	["u8g2_font_unifont_tr","u8g2_font_unifont_tr"],
	["u8g2_font_Untitled16PixelSansSerifBitmap_tr","u8g2_font_Untitled16PixelSansSerifBitmap_tr"],
	["u8g2_font_VCR_OSD_mf","u8g2_font_VCR_OSD_mf"],
	["u8g2_font_VCR_OSD_mn","u8g2_font_VCR_OSD_mn"],
	["u8g2_font_VCR_OSD_mr","u8g2_font_VCR_OSD_mr"],
	["u8g2_font_VCR_OSD_mu","u8g2_font_VCR_OSD_mu"],
	["u8g2_font_VCR_OSD_tf","u8g2_font_VCR_OSD_tf"],
	["u8g2_font_VCR_OSD_tn","u8g2_font_VCR_OSD_tn"],
	["u8g2_font_VCR_OSD_tr","u8g2_font_VCR_OSD_tr"],
	["u8g2_font_VCR_OSD_tu","u8g2_font_VCR_OSD_tu"],
	["u8g2_font_victoriabold8_8n","u8g2_font_victoriabold8_8n"],
	["u8g2_font_victoriabold8_8r","u8g2_font_victoriabold8_8r"],
	["u8g2_font_victoriabold8_8u","u8g2_font_victoriabold8_8u"],
	["u8g2_font_victoriamedium8_8n","u8g2_font_victoriamedium8_8n"],
	["u8g2_font_victoriamedium8_8r","u8g2_font_victoriamedium8_8r"],
	["u8g2_font_victoriamedium8_8u","u8g2_font_victoriamedium8_8u"],
	["u8g2_font_Wizzard_tr","u8g2_font_Wizzard_tr"],
	["u8g2_font_wqy12_t_chinese1","u8g2_font_wqy12_t_chinese1"],
	["u8g2_font_wqy12_t_chinese2","u8g2_font_wqy12_t_chinese2"],
	["u8g2_font_wqy12_t_chinese3","u8g2_font_wqy12_t_chinese3"],
	["u8g2_font_wqy12_t_gb2312","u8g2_font_wqy12_t_gb2312"],
	["u8g2_font_wqy12_t_gb2312a","u8g2_font_wqy12_t_gb2312a"],
	["u8g2_font_wqy12_t_gb2312b","u8g2_font_wqy12_t_gb2312b"],
	["u8g2_font_wqy13_t_chinese1","u8g2_font_wqy13_t_chinese1"],
	["u8g2_font_wqy13_t_chinese2","u8g2_font_wqy13_t_chinese2"],
	["u8g2_font_wqy13_t_chinese3","u8g2_font_wqy13_t_chinese3"],
	["u8g2_font_wqy13_t_gb2312","u8g2_font_wqy13_t_gb2312"],
	["u8g2_font_wqy13_t_gb2312a","u8g2_font_wqy13_t_gb2312a"],
	["u8g2_font_wqy13_t_gb2312b","u8g2_font_wqy13_t_gb2312b"],
	["u8g2_font_wqy14_t_chinese1","u8g2_font_wqy14_t_chinese1"],
	["u8g2_font_wqy14_t_chinese2","u8g2_font_wqy14_t_chinese2"],
	["u8g2_font_wqy14_t_chinese3","u8g2_font_wqy14_t_chinese3"],
	["u8g2_font_wqy14_t_gb2312","u8g2_font_wqy14_t_gb2312"],
	["u8g2_font_wqy14_t_gb2312a","u8g2_font_wqy14_t_gb2312a"],
	["u8g2_font_wqy14_t_gb2312b","u8g2_font_wqy14_t_gb2312b"],
	["u8g2_font_wqy15_t_chinese1","u8g2_font_wqy15_t_chinese1"],
	["u8g2_font_wqy15_t_chinese2","u8g2_font_wqy15_t_chinese2"],
	["u8g2_font_wqy15_t_chinese3","u8g2_font_wqy15_t_chinese3"],
	["u8g2_font_wqy15_t_gb2312","u8g2_font_wqy15_t_gb2312"],
	["u8g2_font_wqy15_t_gb2312a","u8g2_font_wqy15_t_gb2312a"],
	["u8g2_font_wqy15_t_gb2312b","u8g2_font_wqy15_t_gb2312b"],
	["u8g2_font_wqy16_t_chinese1","u8g2_font_wqy16_t_chinese1"],
	["u8g2_font_wqy16_t_chinese2","u8g2_font_wqy16_t_chinese2"],
	["u8g2_font_wqy16_t_chinese3","u8g2_font_wqy16_t_chinese3"],
	["u8g2_font_wqy16_t_gb2312","u8g2_font_wqy16_t_gb2312"],
	["u8g2_font_wqy16_t_gb2312a","u8g2_font_wqy16_t_gb2312a"],
	["u8g2_font_wqy16_t_gb2312b","u8g2_font_wqy16_t_gb2312b"]
	];










Blockly.Blocks['customcode_head'] = {
  init: function() {
    this.appendValueInput("text")
        .setCheck("String")
        .appendField(Blockly.Msg.FRANCE1_HEAD_SHOW);     
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);    
  }
};

Blockly.Blocks['customcode_code'] = {
  init: function() {
    this.appendValueInput("text")
        .setCheck("String")
        .appendField(Blockly.Msg.FRANCE1_CODE_SHOW);  
    this.setInputsInline(true);    
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(200);
  }
};

Blockly.Blocks['customcode_variable'] = {
  init: function() {
    this.appendValueInput("variable")
        .setCheck("String")
        .appendField(Blockly.Msg.FRANCE1_VARIABLE_SHOW);
	this.appendDummyInput() 
		.appendField(" = ");	
    this.appendValueInput("text")
        .setCheck(null);
    this.setInputsInline(true);    
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(200);
  }
};

Blockly.Blocks['customcode_code_input'] = {
  init: function() {
    this.appendValueInput("text")
        .setCheck("String");   
    this.setInputsInline(true);
    this.setOutput(true, null); 
    this.setColour(20);
  }
};

Blockly.Blocks['customcode_comment'] = {
  init: function() {
    this.appendValueInput("text")
        .setCheck("String")
        .appendField(Blockly.Msg.FRANCE1_COMMENT_SHOW);     
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks['customcode_comment_block'] = {
  init: function() {
    this.appendValueInput("text")
        .setCheck("String")
        .appendField(Blockly.Msg.FRANCE1_COMMENT_BLOCK_SHOW);     
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks['customcode_instruction1'] = {
  init: function() {
	  this.appendValueInput("instruction")
		  .setCheck("String")
		  .appendField(Blockly.Msg.FRANCE1_INSTRUCTION_SHOW);   
	  this.appendDummyInput()
		  .appendField("( ");      
	  this.appendValueInput("text")
		  .setCheck(null);  
	  this.appendDummyInput()
		  .appendField(" )");      
	  this.setOutput(true, null);
	  this.setInputsInline(true);
	  this.setColour(20);
  }
};

Blockly.Blocks['customcode_instruction2'] = {
  init: function() {
	  this.appendValueInput("instruction")
		  .setCheck("String")
		  .appendField(Blockly.Msg.FRANCE1_INSTRUCTION_SHOW);
	  this.appendDummyInput()
		  .appendField("( ");    
	  this.appendValueInput("text1")
		  .setCheck(null);  
	  this.appendDummyInput()
		  .appendField(", ");       
	  this.appendValueInput("text2")
		  .setCheck(null);     
	  this.appendDummyInput()
		  .appendField(" )");      
	  this.setOutput(true, null);
	  this.setInputsInline(true);
	  this.setColour(20);
  }
};

Blockly.Blocks['customcode_instruction3'] = {
  init: function() {
	  this.appendDummyInput()
		  .appendField(Blockly.Msg.FRANCE1_INSTRUCTION_SHOW);
	  this.appendValueInput("instruction")
		  .setCheck(null); 
	  this.appendDummyInput()
		  .appendField("( ");
	  this.appendValueInput("text1")
		  .setCheck(null);  
	  this.appendDummyInput()
		  .appendField(", "); 	  
	  this.appendValueInput("text2")
		  .setCheck(null);  
	  this.appendDummyInput()
		  .appendField(", ");       
	  this.appendValueInput("text3")
		  .setCheck(null);     
	  this.appendDummyInput()
		  .appendField(" )");      
	  this.setOutput(true, null);
	  this.setInputsInline(true);
	  this.setColour(20);
  }
};

Blockly.Blocks['customcode_instruction4'] = {
  init: function() {
	  this.appendDummyInput()
		  .appendField(Blockly.Msg.FRANCE1_INSTRUCTION_SHOW);
	  this.appendValueInput("instruction")
		  .setCheck(null); 
	  this.appendDummyInput()
		  .appendField(".");
	  this.appendValueInput("text1")
		  .setCheck(null);       
	  this.setOutput(true, null);
	  this.setInputsInline(true);
	  this.setColour(20);
  }
};

Blockly.Blocks['customcode_instruction5'] = {
  init: function() {
	  this.appendDummyInput()
		  .appendField(Blockly.Msg.FRANCE1_VARIABLE_SHOW);
	  this.appendValueInput("instruction")
		  .setCheck(null); 
	  this.appendDummyInput()
		  .appendField(".");
	  this.appendDummyInput()    
		  .appendField(new Blockly.FieldDropdown([
			["toInt()","toInt()"],
			["toDouble()","toDouble()"],	
			["toFloat()","toFloat()"],
			["toLowerCase()","toLowerCase()"],	
			["toUpperCase()","toUpperCase()"],
			["trim()","trim()"],	
			["c_str()","c_str()"],
			["length()","length()"]		  
	  ]), "type");     
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
  }
};

Blockly.Blocks['customcode_instruction5_get'] = {
  init: function() {
	  this.appendDummyInput()
		  .appendField(Blockly.Msg.FRANCE1_VARIABLE_SHOW);
	  this.appendValueInput("instruction")
		  .setCheck(null); 
	  this.appendDummyInput()
		  .appendField(".");
	  this.appendDummyInput()    
		  .appendField(new Blockly.FieldDropdown([
			["toInt()","toInt()"],
			["toDouble()","toDouble()"],	
			["toFloat()","toFloat()"],
			["toLowerCase()","toLowerCase()"],	
			["toUpperCase()","toUpperCase()"],
			["trim()","trim()"],	
			["c_str()","c_str()"],
			["length()","length()"]		  
	  ]), "type");     
	  this.setOutput(true, null);
	  this.setInputsInline(true);
	  this.setColour(20);
  }
};

Blockly.Blocks['customcode_instruction6'] = {
  init: function() {
	  this.appendDummyInput()    
		  .appendField(new Blockly.FieldDropdown([
			["String","String"],
			["byte","byte"],
			["char","char"],
			["float","float"],
			["int","int"],
			["long","long"],
			["word","word"],
			["sizeof","sizeof"],		  
			["isAlpha","isAlpha"],
			["isAlphaNumeric","isAlphaNumeric"],
			["isAscii","isAscii"],
			["isControl","isControl"],
			["isDigit","isDigit"],
			["isGraph","isGraph"],
			["isHexadecimalDigit","isHexadecimalDigit"],
			["isLowerCase","isLowerCase"],
			["isPrintable","isPrintable"],
			["isPunct","isPunct"],
			["isSpace","isSpace"],
			["isUpperCase","isUpperCase"],
			["isWhitespace","isWhitespace"]	  
			]), "instruction");    
	  this.appendDummyInput()
		  .appendField("( ");      
	  this.appendValueInput("text")
		  .setCheck(null);  
	  this.appendDummyInput()
		  .appendField(" )");      
	  this.setOutput(true, null);
	  this.setInputsInline(true);
	  this.setColour(20);
  }
};

Blockly.Blocks['linenotify_text'] = {
  init: function() {
    this.appendValueInput("value_text")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ESP32_LINE_MESSAGE_SHOW);
	this.setInputsInline(true);		
    this.setOutput(true, null);  
    this.setColour(50);
  }
};

Blockly.Blocks['linenotify_sticker'] = {
  init: function() {
    this.appendValueInput("value_text")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ESP32_LINE_MESSAGE_SHOW);
    this.appendValueInput("value_packageId")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ESP32_LINE_PACKAGEID_SHOW);
    this.appendValueInput("value_stickerId")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ESP32_LINE_STICKERID_SHOW);
	this.setInputsInline(true);			
    this.setOutput(true, null);  
    this.setColour(50);
  }
};

Blockly.Blocks['linenotify_image'] = {
  init: function() {
    this.appendValueInput("value_text")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ESP32_LINE_MESSAGE_SHOW);
    this.appendValueInput("value_originalContentUrl")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ESP32_LINE_ORIGINALCONTENTURL_SHOW);
    this.appendValueInput("value_previewImageUrl")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ESP32_LINE_PREVIEWIMAGEURL_SHOW);
	this.setInputsInline(true);			
    this.setOutput(true, null);  
    this.setColour(50);
  }
};


Blockly.Blocks['tcp_https_esp32'] = {
  init: function() {
	this.appendDummyInput() 
	.appendField(Blockly.Msg.FRANCE4_HEAD_HTTPS_SHOW);
    this.appendValueInput("domain")
        .setCheck("String")
	.setAlign(Blockly.ALIGN_RIGHT)		
        .appendField(Blockly.Msg.FRANCE2_DOMAIN_SHOW);
    this.appendValueInput("request")
        .setCheck("String")
	.setAlign(Blockly.ALIGN_RIGHT)		
        .appendField(Blockly.Msg.FRANCE2_REQUEST_SHOW); 	  
    this.appendValueInput("port")
        .setCheck("Number")
	.setAlign(Blockly.ALIGN_RIGHT)		
        .appendField(Blockly.Msg.FRANCE2_PORT_SHOW); 
    this.appendValueInput("timeout")
        .setCheck("Number")
	.setAlign(Blockly.ALIGN_RIGHT)		
        .appendField(Blockly.Msg.FRANCE2_TIMEOUT_SHOW)
	.appendField(Blockly.Msg.FRANCE2_SECOND_SHOW);	
	this.setInputsInline(false);
	this.setOutput(true, null);
	this.setColour(20);   
  }
};

Blockly.Blocks['tcp_http_esp32'] = {
  init: function() {
	this.appendDummyInput() 
	.appendField(Blockly.Msg.FRANCE4_HEAD_HTTP_SHOW);
    this.appendValueInput("domain")
        .setCheck("String")
	.setAlign(Blockly.ALIGN_RIGHT)		
        .appendField(Blockly.Msg.FRANCE2_DOMAIN_SHOW); 
    this.appendValueInput("request")
        .setCheck("String")
	.setAlign(Blockly.ALIGN_RIGHT)		
        .appendField(Blockly.Msg.FRANCE2_REQUEST_SHOW); 	  
    this.appendValueInput("port")
        .setCheck("Number")
	.setAlign(Blockly.ALIGN_RIGHT)		
        .appendField(Blockly.Msg.FRANCE2_PORT_SHOW); 
    this.appendValueInput("timeout")
        .setCheck("Number")
	.setAlign(Blockly.ALIGN_RIGHT)		
        .appendField(Blockly.Msg.FRANCE2_TIMEOUT_SHOW)
	.appendField(Blockly.Msg.FRANCE2_SECOND_SHOW);	
	this.setInputsInline(false);
	this.setOutput(true, null);
	this.setColour(20);   
  }
};

Blockly.Blocks['linenotify_esp32'] = {
  init: function() {
  this.appendValueInput("linenotify_token")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.FRANCE5_HEAD_LINE_SHOW)
      .appendField(Blockly.Msg.ESP32_LINE_TOKEN_SHOW);  
  this.appendValueInput("linenotify_msg")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ESP32_LINE_NOTIFY_SHOW);
	this.setInputsInline(true);		  
    this.setOutput(true, null);  
    this.setColour(200);
  }
};

Blockly.Blocks['linenotify_esp32_no'] = {
  init: function() {
	this.appendValueInput("linenotify_token")
		.setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.FRANCE5_HEAD_LINE_SHOW)
		.appendField(Blockly.Msg.ESP32_LINE_TOKEN_SHOW);  
	this.appendValueInput("linenotify_msg")
		.setCheck(null)
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.ESP32_LINE_NOTIFY_SHOW);
	this.setInputsInline(true);		  
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(200);
  }
};

Blockly.Blocks['linenotify_esp32_br'] = {
  init: function() {
	this.appendDummyInput() 
		.appendField(Blockly.Msg.ESP32_LINE_BR_SHOW);
	this.setInputsInline(true);
	this.setOutput(true, null);  
	this.setColour(20);
  }
};

Blockly.Blocks['linenotify_http'] = {
  init: function() {
	this.appendDummyInput() 
      .appendField(Blockly.Msg.FRANCE5_LINE_HTTP_SHOW)  
  this.appendValueInput("linenotify_token")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ESP32_LINE_TOKEN_SHOW);  
  this.appendValueInput("linenotify_msg")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ESP32_LINE_NOTIFY_SHOW);
	this.setInputsInline(true);	  
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(200);
  }
};

Blockly.Blocks['close_powerdog'] = {
  init: function() {
	this.appendDummyInput() 
		.appendField(Blockly.Msg.FRANCE6_CLOSE_POWERDOG_SHOW);    
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
  }
};

Blockly.Blocks['esp32_wifi_wait_until_ready'] = {
  init:function(){
	this.appendDummyInput().appendField(Blockly.Msg.ESP32_SET_WIFI_UNTIL_READY_TITLE);
	this.appendValueInput("SSID")
		.setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.SERVERMODULE_SSID_SHOW);
	this.appendValueInput("PASSWORD")
		.setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.SERVERMODULE_PASSWORD_SHOW);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(200);
  }
};


Blockly.Blocks['thingspeak_update'] = {
  init: function() {   
  this.appendValueInput("key")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("ThingSpeak ")
      .appendField("Write API Key");
  this.appendValueInput("field1")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Field1");
  this.appendValueInput("field2")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Field2");
  this.appendValueInput("field3")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Field3");  
  this.appendValueInput("field4")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Field4");
  this.appendValueInput("field5")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Field5");
  this.appendValueInput("field6")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Field6");  
  this.appendValueInput("field7")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Field7");
  this.appendValueInput("field8")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Field8");  
	this.setOutput(true, null);  
	this.setColour(20);
  }
};

Blockly.Blocks['thingspeak_read1'] = {
  init: function() {  
	this.appendDummyInput()
	  .appendField("ThingSpeak Get a Channel Feed");
	this.appendValueInput("key")
	  .setCheck(null)
	  .setAlign(Blockly.ALIGN_RIGHT)
	  .appendField("https://api.thingspeak.com/channels/");
	this.appendValueInput("count")
	  .setCheck("Number")
	  .setAlign(Blockly.ALIGN_RIGHT)
	  .appendField("/feeds.json?results=");
	this.appendValueInput("api_key")
	  .setCheck(null)
	  .setAlign(Blockly.ALIGN_RIGHT)
	  .appendField("&api_key=");    
	this.setInputsInline(true);
	this.setOutput(true, null);  
	this.setColour(20);
  }
};

Blockly.Blocks['thingspeak_read2'] = {
  init: function() {  
	this.appendDummyInput()
	  .appendField("ThingSpeak Get a Channel Feed");
	this.appendValueInput("key")
	  .setCheck(null)
	  .setAlign(Blockly.ALIGN_RIGHT)
	  .appendField("https://api.thingspeak.com/channels/");
	this.appendValueInput("field")
	  .setCheck("Number")
	  .setAlign(Blockly.ALIGN_RIGHT)
	  .appendField("/fields/");    
	this.appendValueInput("count")
	  .setCheck("Number")
	  .setAlign(Blockly.ALIGN_RIGHT)
	  .appendField(".json?results=");
	this.appendValueInput("api_key")
	  .setCheck(null)
	  .setAlign(Blockly.ALIGN_RIGHT)
	  .appendField("&api_key=");     
	this.setInputsInline(true);
	this.setOutput(true, null);  
	this.setColour(20);
  }
};

Blockly.Blocks['thingspeak_read3'] = {
  init: function() {  
	this.appendDummyInput()
	  .appendField("ThingSpeak Get Channel Status Updates");
	this.appendValueInput("key")
	  .setCheck(null)
	  .setAlign(Blockly.ALIGN_RIGHT)
	  .appendField("https://api.thingspeak.com/channels/");
	this.appendDummyInput()
	  .appendField("/status.json"); 
	this.appendValueInput("api_key")
	  .setCheck(null)
	  .setAlign(Blockly.ALIGN_RIGHT)
	  .appendField("?api_key=");     
	this.setInputsInline(true);
    this.setOutput(true, null);  
    this.setColour(20);
  }
};

Blockly.Blocks['thingspeak_format'] = {
  init: function() {  
	this.appendDummyInput()
	  .appendField("ThingSpeak Data to Json");
	this.appendValueInput("text")
	  .setCheck(null);
	this.setInputsInline(true);
    this.setOutput(true, null);  
    this.setColour(50);
  }
};

Blockly.Blocks['thingspeak_field'] = {
  init: function() {  
	this.appendDummyInput()
	  .appendField("Get ThingSpeak Json Data");
	this.appendValueInput("text")
	  .setCheck(null);
	this.appendDummyInput()
	  .appendField("RecordNumber");
	this.appendValueInput("recordnumber")
	  .setCheck("Number"); 
	this.appendDummyInput()
	  .appendField("FieldName");
	this.appendDummyInput()    
	  .appendField(new Blockly.FieldDropdown([
		["created_at","created_at"],
		["entry_id","entry_id"], 
		["field1","field1"],
		["field2","field2"],
		["field3","field3"],
		["field4","field4"],
		["field5","field5"],
		["field6","field6"],
		["field7","field7"],
		["field8","field8"]	
		]), "fieldname"); 
	this.setInputsInline(true);
    this.setOutput(true, null);  
    this.setColour(50);
  }
};

Blockly.Blocks['esp32_analogwrite'] = {
  init: function() {  
	this.appendDummyInput()
	  .appendField(Blockly.Msg.ESP32_ANALOGWRITE_SHOW);
	this.appendValueInput("pin")
	  .setCheck("Number")
      .appendField(Blockly.Msg.SERVERMODULE_PIN_SHOW);	  
	this.appendDummyInput()
	  .appendField(Blockly.Msg.ESP32_ANALOGWRITE_VALUE_SHOW);
	this.appendValueInput("val")
	  .setCheck("Number"); 	
	this.appendDummyInput()
	  .appendField(Blockly.Msg.ESP32_CHANNEL_SHOW);
	this.appendValueInput("channel")
	  .setCheck("Number"); 	
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(200);
  }
};

Blockly.Blocks['arduino_analogwrite'] = {
  init: function() {  
	this.appendDummyInput()
	  .appendField(Blockly.Msg.ARDUINO_ANALOGWRITE_SHOW);
	this.appendValueInput("pin")
	  .setCheck("Number")
      .appendField(Blockly.Msg.SERVERMODULE_PIN_SHOW);	  
	this.appendDummyInput()
	  .appendField(Blockly.Msg.ESP32_ANALOGWRITE_VALUE_SHOW);
	this.appendValueInput("val")
	  .setCheck("Number");
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(200);
  }
};

Blockly.Blocks['esp32_digitalwrite'] = {
  init: function() {  
	this.appendDummyInput()
	  .appendField(Blockly.Msg.ESP32_DIGITALWRITE_SHOW);
	this.appendValueInput("pin")
	  .setCheck("Number")
	  .appendField(Blockly.Msg.SERVERMODULE_PIN_SHOW);
	this.appendDummyInput()
	  .appendField(Blockly.Msg.ESP32_DIGITALWRITE_VALUE_SHOW);
	this.appendDummyInput()    
	  .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.ESP32_DIGITALWRITE_HIGH_SHOW,"HIGH"],
		[Blockly.Msg.ESP32_DIGITALWRITE_LOW_SHOW,"LOW"]	  
		]), "val"); 
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(200);
  }
};

Blockly.Blocks['esp32_myfirmata'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ESP32_SERVERMODULE_SHOW);
    this.appendValueInput("ssid")
        .setCheck(null)
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg.SERVERMODULE_SSID_SHOW);
    this.appendValueInput("password")
        .setCheck(null)
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg.SERVERMODULE_PASSWORD_SHOW);
    this.appendValueInput("mainpage")
        .setCheck(null)
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg.SERVERMODULE_MAINPAGE_SHOW);
    this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_EXECUTE_SHOW);
    this.appendStatementInput("ExecuteCommand")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_SETUP_SHOW);
    this.appendStatementInput("setup")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_LOOP_SHOW);
    this.appendStatementInput("loop")
        .setCheck(null);
    this.setInputsInline(false);
    this.setColour(210);
  }
};

Blockly.Blocks['esp32_cam_myfirmata'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ESP32_CAM_SERVERMODULE_SHOW);
    this.appendValueInput("ssid")
        .setCheck(null)
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg.SERVERMODULE_SSID_SHOW);
    this.appendValueInput("password")
        .setCheck(null)
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg.SERVERMODULE_PASSWORD_SHOW);
    this.appendValueInput("ssid_ap")
        .setCheck(null)
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg.SERVERMODULE_SSID_AP_SHOW);
    this.appendValueInput("password_ap")
        .setCheck(null)
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg.SERVERMODULE_PASSWORD_AP_SHOW);
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)	
		.appendField(Blockly.Msg.SERVERMODULE_FRAMESIZE_SHOW)	
		.appendField(new Blockly.FieldDropdown([
			["UXGA(1600x1200)","UXGA"],
			["SXGA(1280x1024)","SXGA"], 
			["XGA(1024x768)","XGA"],
			["SVGA(800x600)","SVGA"],
			["VGA(640x480)","VGA"],
			["CIF(400x296)","CIF"],
			["QVGA(320x240)","QVGA"],
			["HQVGA(240x176)","HQVGA"],
			["QQVGA(160x120)","QQVGA"],
			["QXGA(2048x1564)","QXGA"]	
		]), "framesize");		
    this.appendValueInput("mainpage")
        .setCheck(null)
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg.SERVERMODULE_MAINPAGE_SHOW);
    this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_EXECUTE_SHOW);
    this.appendStatementInput("ExecuteCommand")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_SETUP_SHOW);
    this.appendStatementInput("setup")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_LOOP_SHOW);
    this.appendStatementInput("loop")
        .setCheck(null);
    this.setInputsInline(false);
    this.setColour(210);
  }
};

Blockly.Blocks['esp32_bluetooth_initial'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg.ESP32_BLUETOOTH_INITIAL_SHOW);
    this.appendValueInput("baudrate")
        .setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg.ESP32_BLUETOOTH_BAUDRATE_SHOW);
    this.appendValueInput("blename")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg.ESP32_BLUETOOTH_NAME_SHOW);		
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(200);
  }
};

Blockly.Blocks['esp32_bluetooth_readdata'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg.ESP32_BLUETOOTH_READDATA_SHOW);   
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(200);
  }
};

Blockly.Blocks['esp32_bluetooth_getdata'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg.ESP32_BLUETOOTH_GETDATA_SHOW);   
	this.setInputsInline(true);
    this.setOutput(true, null);  
    this.setColour(20);
  }
};

Blockly.Blocks['esp32_myfirmata_bluetooth'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ESP32_BLUETOOTH_SHOW);
    this.appendValueInput("baudrate")
        .setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg.ESP32_BLUETOOTH_BAUDRATE_SHOW);
    this.appendValueInput("blename")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg.ESP32_BLUETOOTH_NAME_SHOW);		
    this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_EXECUTE_SHOW);
    this.appendStatementInput("ExecuteCommand")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_SETUP_SHOW);
    this.appendStatementInput("setup")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_LOOP_SHOW);
    this.appendStatementInput("loop")
        .setCheck(null);
    this.setInputsInline(false);
    this.setColour(210);
  }
};

Blockly.Blocks['servermodule_cmd'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_CMD_SHOW);
    this.appendValueInput("text")
        .setCheck(null);   
    this.setInputsInline(true);
    this.setOutput(true, null); 
    this.setColour(20);
  }
};

Blockly.Blocks['servermodule_feedback'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_FEEDBACK_SHOW);
    this.appendValueInput("text")
        .setCheck(null);   
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(200);
  }
};

Blockly.Blocks['servermodule_bluetooth_feedback'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg.ESP32_BLUETOOTH_FEEDBACK_SHOW);
    this.appendValueInput("text")
        .setCheck(null);   
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(200);
  }
};

Blockly.Blocks['servermodule_bluetooth_feedback_newline'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg.ESP32_BLUETOOTH_FEEDBACK_NEWLINE_SHOW);
    this.appendValueInput("text")
        .setCheck(null);   
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(200);
  }
};

Blockly.Blocks['servermodule_parameter'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_PARAMETER_SET_SHOW);
	this.appendDummyInput()    
	  .appendField(new Blockly.FieldDropdown([
		["P1","P1"],
		["P2","P2"],
		["P3","P3"],	
		["P4","P4"],
		["P5","P5"],
		["P6","P6"],
		["P7","P7"],	
		["P8","P8"],
		["P9","P9"],	  
	]), "parameter"); 
	this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_PARAMETER_FORMAT_SHOW);
	this.appendDummyInput()    
	  .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.SERVERMODULE_TOINT_SHOW,"toInt()"],
		[Blockly.Msg.SERVERMODULE_TODOUBLE_SHOW,"toDouble()"],	
		[Blockly.Msg.SERVERMODULE_TOFLOAT_SHOW,"toFloat()"],
		[Blockly.Msg.SERVERMODULE_TOLOWERCASE_SHOW,"toLowerCase()"],	
		[Blockly.Msg.SERVERMODULE_TOUPPERCASE_SHOW,"toUpperCase()"],
		[Blockly.Msg.SERVERMODULE_TRIM_SHOW,"trim()"],	
		[Blockly.Msg.SERVERMODULE_C_STR_SHOW,"c_str()"],
		[Blockly.Msg.SERVERMODULE_LENGTH_SHOW,"length()"]		  
	]), "type");     
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(200);
  }
};

Blockly.Blocks['servermodule_parameter_variable'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_PARAMETER_GET_SHOW);
	this.appendDummyInput()    
	  .appendField(new Blockly.FieldDropdown([
		["P1","P1"],
		["P2","P2"],
		["P3","P3"],	
		["P4","P4"],
		["P5","P5"],
		["P6","P6"],
		["P7","P7"],	
		["P8","P8"],
		["P9","P9"],	  
	]), "parameter"); 
	this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_PARAMETER_FORMAT_SHOW);
	this.appendDummyInput()    
	  .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.SERVERMODULE_TOINT_SHOW,"toInt()"],
		[Blockly.Msg.SERVERMODULE_TODOUBLE_SHOW,"toDouble()"],	
		[Blockly.Msg.SERVERMODULE_TOFLOAT_SHOW,"toFloat()"],
		[Blockly.Msg.SERVERMODULE_TOLOWERCASE_SHOW,"toLowerCase()"],	
		[Blockly.Msg.SERVERMODULE_TOUPPERCASE_SHOW,"toUpperCase()"],
		[Blockly.Msg.SERVERMODULE_TRIM_SHOW,"trim()"],	
		[Blockly.Msg.SERVERMODULE_C_STR_SHOW,"c_str()"],
		[Blockly.Msg.SERVERMODULE_LENGTH_SHOW,"length()"]		  
	]), "type");     
	this.setInputsInline(true);
    this.setOutput(true, null);  
    this.setColour(20);
  }
};

Blockly.Blocks['servermodule_parameter_variable_urldecode'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_PARAMETER_GET_SHOW);
	this.appendDummyInput()    
	  .appendField(new Blockly.FieldDropdown([
		["P1","P1"],
		["P2","P2"],
		["P3","P3"],	
		["P4","P4"],
		["P5","P5"],
		["P6","P6"],
		["P7","P7"],	
		["P8","P8"],
		["P9","P9"],	  
	]), "parameter"); 
	this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_PARAMETER_URLDECODE_SHOW);    
	this.setInputsInline(true);
    this.setOutput(true, null);  
    this.setColour(20);
  }
};

Blockly.Blocks['servermodule_parameter_get'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_PARAMETER_GET_SHOW);
	this.appendDummyInput()    
		  .appendField(new Blockly.FieldDropdown([
			["P1","P1"],
			["P2","P2"],
			["P3","P3"],	
			["P4","P4"],
			["P5","P5"],
			["P6","P6"],
			["P7","P7"],	
			["P8","P8"],
			["P9","P9"],	  
	  ]), "parameter");   
	this.setInputsInline(true);
    this.setOutput(true, null);  
    this.setColour(20);
  }
};

Blockly.Blocks['servermodule_parameter_set'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_PARAMETER_SET_SHOW);
	this.appendDummyInput()    
		  .appendField(new Blockly.FieldDropdown([
			["P1","P1"],
			["P2","P2"],
			["P3","P3"],	
			["P4","P4"],
			["P5","P5"],
			["P6","P6"],
			["P7","P7"],	
			["P8","P8"],
			["P9","P9"],	  
	  ]), "parameter"); 
	this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_PARAMETER_EQUAL_SHOW);
    this.appendValueInput("text")
        .setCheck(null);   
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(200);
  }
};

Blockly.Blocks['servermodule_parameter_set_address'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_PARAMETER_SET_ADDRESS_SHOW);
    this.appendValueInput("cmd")
        .appendField("cmd")	
        .setCheck(null);   
    this.appendValueInput("P1")
        .appendField("P1")	
        .setCheck(null); 
    this.appendValueInput("P2")
        .appendField("P2")	
        .setCheck(null); 
	this.appendValueInput("P3")
        .appendField("P3")	
        .setCheck(null); 
    this.appendValueInput("P4")
        .appendField("P4")	
        .setCheck(null); 
    this.appendValueInput("P5")
        .appendField("P5")	
        .setCheck(null); 		
    this.appendValueInput("P6")
        .appendField("P6")	
        .setCheck(null); 
    this.appendValueInput("P7")
        .appendField("P7")	
        .setCheck(null); 
    this.appendValueInput("P8")
        .appendField("P8")	
        .setCheck(null);
    this.appendValueInput("P9")
        .appendField("P9")	
        .setCheck(null);  		
	this.setInputsInline(true);
    this.setOutput(true, null);  
    this.setColour(20);
  }
};

Blockly.Blocks['servermodule_parameter_set_address1'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_PARAMETER_SET_ADDRESS_SHOW);
    this.appendValueInput("cmd")
        .appendField("cmd")		
        .setCheck(null);   
    this.appendValueInput("P1")
        .appendField("P1")	
        .setCheck(null); 
    this.appendValueInput("P2")
        .appendField("P2")	
        .setCheck(null);		
	this.setInputsInline(true);
    this.setOutput(true, null);  
    this.setColour(20);
  }
};

Blockly.Blocks['servermodule_parameter_set_address2'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_PARAMETER_SET_ADDRESS_SHOW);
    this.appendValueInput("cmd")
        .appendField("cmd")		
        .setCheck(null);	
	this.setInputsInline(true);
    this.setOutput(true, null);  
    this.setColour(20);
  }
};

Blockly.Blocks['esp32_pinmode'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_SET_SHOW)
        .appendField(Blockly.Msg.SERVERMODULE_PIN_SHOW);
    this.appendValueInput("pin")
        .setCheck("Number");   
	this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_MODE_SHOW);
	this.appendDummyInput()    
	  .appendField(new Blockly.FieldDropdown([
		["OUTPUT","OUTPUT"],
		["INPUT","INPUT"],	
		["INPUT_PULLUP","INPUT_PULLUP"]	  
	]), "mode");     
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(200);
  }
};

Blockly.Blocks['servermodule_pinwrite'] = {
  init: function() {
	this.appendDummyInput()    
	    .appendField(Blockly.Msg.ESP32_DIGITALWRITE_SHOW);
	this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_PIN_SHOW);
    this.appendValueInput("pin")
        .setCheck("Number");   
	this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_VALUE_SHOW);
    this.appendValueInput("val")
        .setCheck("Number");     
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(200);
  }
};

Blockly.Blocks['esp32_pinread'] = {
  init: function() {
	this.appendDummyInput()    
	  .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.SERVERMODULE_DIGITALREAD_SHOW,"digitalRead"],
		[Blockly.Msg.SERVERMODULE_ANALOGREAD_SHOW,"analogRead"] 
	]), "type");
	this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_PIN_SHOW);
    this.appendValueInput("pin")
        .setCheck("Number");   
	this.setInputsInline(true);
    this.setOutput(true, null);  
    this.setColour(20);
  }
};

Blockly.Blocks['MLX90614'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg.MLX90614_SHOW);
	this.appendDummyInput()    
		.appendField(new Blockly.FieldDropdown([
		["MLX90615","MLX90615"],
		["MLX90614","MLX90614"]  
		]), "sensor");
    this.appendValueInput("sda")
        .appendField("SDA")
        .setCheck("Number");   
    this.appendValueInput("scl")
        .appendField("SCL")
        .setCheck("Number");
	this.appendDummyInput()    
        .appendField(" ");		
	this.appendDummyInput()    
		.appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.MLX90614_KIND_OBJECT_SHOW,"object"],
		[Blockly.Msg.MLX90614_KIND_AMBIENT_SHOW,"ambient"]  
		]), "kind");
	this.appendDummyInput()    
        .appendField(Blockly.Msg.MLX90614_SCALE_SHOW);
	this.appendDummyInput()    
		.appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.MLX90614_SCALE_CELCIUS_SHOW,"0"],
		[Blockly.Msg.MLX90614_SCALE_FAHRENHEIT_SHOW,"1"],	
		[Blockly.Msg.MLX90614_SCALE_KELVIN_SHOW,"2"]	  
		]), "scale");
	this.appendDummyInput()    
		.appendField(Blockly.Msg.MLX90614_COMPENSATION_SHOW);	
    this.appendValueInput("compensation")
        .setCheck("Number");	
	this.setInputsInline(true);
    this.setOutput(true, null);  
    this.setColour(20);
  }
};

Blockly.Blocks['dht11_pin'] = {
  init: function() {  
	this.appendDummyInput()
	  .appendField(Blockly.Msg.ESP32_DHT11_PIN_SHOW);
	this.appendValueInput("pin")
	  .setCheck("Number");	
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(200);
  }
};

Blockly.Blocks['dht11_read'] = {
  init: function() {  
	this.appendDummyInput()
	  .appendField(Blockly.Msg.ESP32_DHT11_READ_SHOW);	
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(200);
  }
};

Blockly.Blocks['dht11_get'] = {
  init: function() {  
	this.appendDummyInput()
	  .appendField(Blockly.Msg.ESP32_DHT11_GET_SHOW);
	this.appendDummyInput()    
		.appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.ESP32_DHT11_TEMPERATURE_SHOW,"temperature"],
		[Blockly.Msg.ESP32_DHT11_HUMIDITY_SHOW,"humidity"]	  
		]), "type");	
	this.setInputsInline(true);
    this.setOutput(true, null);  
    this.setColour(20);
  }
};


Blockly.Blocks['lcd1602_initial'] = {
  init: function() {  
	this.appendDummyInput()
	    .appendField(Blockly.Msg.ESP32_LCD1602_SHOW)
		.appendField(Blockly.Msg.ESP32_LCD1602_ADDRESS_SHOW);
	this.appendDummyInput()    
		.appendField(new Blockly.FieldDropdown([
			["0x27","0x27"],
			["0x3F","0x3F"]	  
		]), "address");
	this.appendValueInput("sda")
	    .setCheck("Number")
	    .appendField(Blockly.Msg.ESP32_LCD1602_SDA_SHOW);	  
	this.appendValueInput("scl")
	    .setCheck("Number") 
	    .appendField(Blockly.Msg.ESP32_LCD1602_SCL_SHOW);
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(200);
  }
};

Blockly.Blocks['lcd1602_backlight'] = {
  init: function() {  
	this.appendDummyInput()
	    .appendField(Blockly.Msg.ESP32_LCD1602_SHOW)
	    .appendField(Blockly.Msg.ESP32_LCD1602_BACKLIGHT_SHOW);	
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(200);
  }
};

Blockly.Blocks['lcd1602_clear'] = {
  init: function() {  
	this.appendDummyInput()
	    .appendField(Blockly.Msg.ESP32_LCD1602_SHOW)
	    .appendField(Blockly.Msg.ESP32_LCD1602_CLEAR_SHOW);	
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(200);
  }
};

Blockly.Blocks['lcd1602_print'] = {
  init: function() {  
	this.appendDummyInput()
	    .appendField(Blockly.Msg.ESP32_LCD1602_SHOW)
	    .appendField(Blockly.Msg.ESP32_LCD1602_PRINT_SHOW);
	this.appendDummyInput()    
		.appendField(new Blockly.FieldDropdown([
			["0","0"],
			["1","1"]	
		]), "row")
	    .appendField(Blockly.Msg.ESP32_LCD1602_ROW_SHOW);		
	this.appendDummyInput()    
		.appendField(new Blockly.FieldDropdown([
			["0","0"],
			["1","1"],	
			["2","2"],
			["3","3"],
			["4","4"],
			["5","5"],
			["6","6"],
			["7","7"],
			["8","8"],
			["9","9"],	
			["10","10"],
			["11","11"],
			["12","12"],
			["13","13"],
			["14","14"],
			["15","15"]			  
		]), "col")
	    .appendField(Blockly.Msg.ESP32_LCD1602_COL_SHOW);	  
	this.appendValueInput("str")
	    .setCheck(null)	
	    .appendField(Blockly.Msg.ESP32_LCD1602_STR_SHOW);	  
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(200);
  }
};

Blockly.Blocks['esp32_setuploop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_SETUP_SHOW);
    this.appendStatementInput("setup")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_LOOP_SHOW);
    this.appendStatementInput("loop")
        .setCheck(null);
    this.setInputsInline(false);
    this.setColour(40);
  }
};

Blockly.Blocks['linkit7697_myfirmata'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.LINKIT7697_SERVERMODULE_SHOW);
    this.appendValueInput("ssid")
        .setCheck(null)
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg.SERVERMODULE_SSID_SHOW);
    this.appendValueInput("password")
        .setCheck(null)
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg.SERVERMODULE_PASSWORD_SHOW);
    this.appendValueInput("mainpage")
        .setCheck(null)
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg.SERVERMODULE_MAINPAGE_SHOW);
    this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_EXECUTE_SHOW);
    this.appendStatementInput("ExecuteCommand")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_SETUP_SHOW);
    this.appendStatementInput("setup")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_LOOP_SHOW);
    this.appendStatementInput("loop")
        .setCheck(null);
    this.setInputsInline(false);
    this.setColour(210);
  }
};
Blockly.Blocks['table_create'] = {
  init: function() {
  this.appendDummyInput()     
      .appendField(Blockly.Msg.TABLE_CREATE);
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_ID);     
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TABLE_BORDERSTYLE)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_SOLID,"solid"], [Blockly.Msg.PROPERTY_DASHED,"dashed"], [Blockly.Msg.PROPERTY_DOUBLE,"double"], [Blockly.Msg.PROPERTY_DOTTED,"dotted"], [Blockly.Msg.PROPERTY_GROOVE,"groove"], [Blockly.Msg.PROPERTY_RIDGE,"ridge"], [Blockly.Msg.PROPERTY_INSET,"inset"], [Blockly.Msg.PROPERTY_OUTSET,"outset"],  [Blockly.Msg.PROPERTY_NONE,"none"], [Blockly.Msg.PROPERTY_HIDDEN,"hidden"]]), "borderstyle_");  
  this.appendValueInput("borderwidth_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_BORDERWIDTH);       
  this.appendValueInput("bordercolor_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_BORDERCOLOR);       
  this.appendValueInput("trcount_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TRCOUNT);    
  this.appendValueInput("tdcount_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TDCOUNT);   
  this.appendValueInput("width_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_WIDTH);
  this.appendValueInput("height_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_HEIGHT);    
  this.appendValueInput("bgcolor_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_BGCOLOR); 
  this.appendValueInput("zindex_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ZINDEX);   
  this.appendValueInput("display_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DISPLAY); 
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['table_set'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
	  .appendField(Blockly.Msg.TABLE)
      .appendField(Blockly.Msg.TABLE_ID);     
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TABLE_SET)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.PROPERTY_BORDERSTYLE,"borderstyle"], [Blockly.Msg.PROPERTY_BORDERWIDTH,"borderwidth"], [Blockly.Msg.PROPERTY_BORDERCOLOR,"bordercolor"], [Blockly.Msg.PROPERTY_CELLWIDTH,"cellwidth"], [Blockly.Msg.PROPERTY_CELLHEIGHT,"cellheight"], [Blockly.Msg.PROPERTY_CELLCOLOR,"cellcolor"], [Blockly.Msg.PROPERTY_BACKGROUND,"background"], [Blockly.Msg.PROPERTY_BACKGROUNDIMAGE,"backgroundimage"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_STYLE,"style"]]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['table_get'] = {
  init: function () {   
  this.appendValueInput("id_")
      .setCheck(null)
	  .appendField(Blockly.Msg.TABLE)
      .appendField(Blockly.Msg.TABLE_ID); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TABLE_GET) 
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_ONCLICK_COLUMN_ROW,"onclick[Column,Row]"], [Blockly.Msg.PROPERTY_ONCLICKIMAGE,"onclickImage"], [Blockly.Msg.PROPERTY_COLUMNS,"columns"], [Blockly.Msg.PROPERTY_ROWS,"rows"], [Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.PROPERTY_BORDERSTYLE,"borderstyle"], [Blockly.Msg.PROPERTY_BORDERWIDTH,"borderwidth"], [Blockly.Msg.PROPERTY_BORDERCOLOR,"bordercolor"], [Blockly.Msg.PROPERTY_BACKGROUND,"background"], [Blockly.Msg.PROPERTY_BACKGROUNDIMAGE,"backgroundimage"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.ID,"id"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['table_clear'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
	  .appendField(Blockly.Msg.TABLE)
      .appendField(Blockly.Msg.TABLE_ID);
  this.appendDummyInput()
      .appendField(Blockly.Msg.TABLE_CLEAR);
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['table_change_colsrows'] = {
  init: function () {
  this.appendDummyInput()     
      .appendField(Blockly.Msg.TABLE_CHANGE_COLSROWS);       
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_ID); 
  this.appendDummyInput() 
      .setAlign(Blockly.ALIGN_RIGHT)   
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_ADD,"add"], [Blockly.Msg.PROPERTY_REMOVE,"remove"]]), "cmd_");  
  this.appendDummyInput() 
      .setAlign(Blockly.ALIGN_RIGHT)    
      .appendField(" ")    
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_COL,"col"], [Blockly.Msg.PROPERTY_ROW,"row"]]), "target_");     
  this.appendValueInput("index_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_INDEX);   
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['table_td_set'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
	  .appendField(Blockly.Msg.TABLE)
      .appendField(Blockly.Msg.TABLE_ID); 
  this.appendValueInput("x_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_SET)
      .appendField(Blockly.Msg.TABLE_TD_X);
  this.appendValueInput("y_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_Y);       
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.WIDTH,"width"], [Blockly.Msg.HEIGHT,"height"], [Blockly.Msg.PROPERTY_TEXTALIGN,"textalign"], [Blockly.Msg.PROPERTY_BACKGROUND,"background"], [Blockly.Msg.PROPERTY_INNERHTML,"innerHTML"], [Blockly.Msg.PROPERTY_STYLE,"style"]]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['table_border_set'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
	  .appendField(Blockly.Msg.TABLE)
      .appendField(Blockly.Msg.TABLE_ID); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TABLE_BORDER_SET)
      .appendField(Blockly.Msg.TABLE_BORDERSTYLE)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_SOLID,"solid"], [Blockly.Msg.PROPERTY_DASHED,"dashed"], [Blockly.Msg.PROPERTY_DOUBLE,"double"], [Blockly.Msg.PROPERTY_DOTTED,"dotted"], [Blockly.Msg.PROPERTY_GROOVE,"groove"], [Blockly.Msg.PROPERTY_RIDGE,"ridge"], [Blockly.Msg.PROPERTY_INSET,"inset"], [Blockly.Msg.PROPERTY_OUTSET,"outset"],  [Blockly.Msg.PROPERTY_NONE,"none"], [Blockly.Msg.PROPERTY_HIDDEN,"hidden"]]), "borderstyle_");  
  this.appendValueInput("borderwidth_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_BORDERWIDTH);       
  this.appendValueInput("bordercolor_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_BORDERCOLOR);       
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['table_td_border_set'] = {
  init: function() {
  this.appendDummyInput()     
      .appendField(Blockly.Msg.TABLE_TD_BORDER_SET);    
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
	  .appendField(Blockly.Msg.TABLE)
      .appendField(Blockly.Msg.TABLE_ID); 
  this.appendValueInput("x_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_X);
  this.appendValueInput("y_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_Y);       
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TABLE_BORDERSTYLE)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_SOLID,"solid"], [Blockly.Msg.PROPERTY_DASHED,"dashed"], [Blockly.Msg.PROPERTY_DOUBLE,"double"], [Blockly.Msg.PROPERTY_DOTTED,"dotted"], [Blockly.Msg.PROPERTY_GROOVE,"groove"], [Blockly.Msg.PROPERTY_RIDGE,"ridge"], [Blockly.Msg.PROPERTY_INSET,"inset"], [Blockly.Msg.PROPERTY_OUTSET,"outset"],  [Blockly.Msg.PROPERTY_NONE,"none"], [Blockly.Msg.PROPERTY_HIDDEN,"hidden"]]), "borderstyle_");  
  this.appendValueInput("borderwidth_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_BORDERWIDTH);       
  this.appendValueInput("bordercolor_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_BORDERCOLOR);       
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['table_td_get'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
	  .appendField(Blockly.Msg.TABLE)
      .appendField(Blockly.Msg.TABLE_ID); 
  this.appendValueInput("x_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_GET)
      .appendField(Blockly.Msg.TABLE_TD_X);
  this.appendValueInput("y_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_Y); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.PROPERTY)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.WIDTH,"width"], [Blockly.Msg.HEIGHT,"height"], [Blockly.Msg.PROPERTY_BACKGROUND,"background"], [Blockly.Msg.PROPERTY_TEXT_SHOW,"text"], [Blockly.Msg.PROPERTY_INNERHTML,"innerHTML"], [Blockly.Msg.PROPERTY_IMAGE,"image"], [Blockly.Msg.PROPERTY_CHILDLENGTH,"childlength"], [Blockly.Msg.PROPERTY_CHILDID,"childid"], [Blockly.Msg.PROPERTY_TDID,"tdid"]]), "property_");  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['table_td_onclick_do'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
	  .appendField(Blockly.Msg.TABLE)
      .appendField(Blockly.Msg.TABLE_ID);     
  this.appendValueInput("x_")
      .setCheck(null)
      .appendField(Blockly.Msg.TABLE_TD_X);
  this.appendValueInput("y_")
      .setCheck(null)
      .appendField(Blockly.Msg.TABLE_TD_Y); 
  this.appendDummyInput()
      .appendField(Blockly.Msg.TABLE_TD_ONCLICK_DO);    
  this.appendStatementInput("do_");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['table_td_insert_img'] = {
  init: function () {
  this.appendDummyInput()     
      .appendField(Blockly.Msg.TABLE_TD_INSERT_IMAGE);        
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
	  .appendField(Blockly.Msg.TABLE)
      .appendField(Blockly.Msg.TABLE_ID); 
  this.appendValueInput("x_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_X);
  this.appendValueInput("y_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_Y); 
  this.appendValueInput("imgid_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
	  .appendField(Blockly.Msg.IMAGE)
      .appendField(Blockly.Msg.ID);      
  this.appendValueInput("url_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
	  .appendField(Blockly.Msg.IMAGE)
      .appendField(Blockly.Msg.URL);     
  this.appendValueInput("width_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
	  .appendField(Blockly.Msg.IMAGE)
      .appendField(Blockly.Msg.WIDTH);
  this.appendValueInput("height_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
	  .appendField(Blockly.Msg.IMAGE)
      .appendField(Blockly.Msg.HEIGHT);   
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['table_td_img_move'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
	  .appendField(Blockly.Msg.TABLE)
      .appendField(Blockly.Msg.TABLE_ID); 
  this.appendValueInput("imgid_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.IMAGE_ID);
  this.appendValueInput("x_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_IMAGE_MOVE)
      .appendField(Blockly.Msg.TABLE_TD_X);
  this.appendValueInput("y_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_Y);     
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['table_td_canvas_move'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
	  .appendField(Blockly.Msg.TABLE)
      .appendField(Blockly.Msg.TABLE_ID); 
  this.appendValueInput("canvasid_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_ID);
  this.appendValueInput("x_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_CANVAS_MOVE)
      .appendField(Blockly.Msg.TABLE_TD_X);
  this.appendValueInput("y_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_Y);     
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['table_td_copy_move'] = {
  init: function () {
  this.appendDummyInput()     
      .appendField(Blockly.Msg.TABLE_TD_COPY_MOVE);       
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
	  .appendField(Blockly.Msg.TABLE)
      .appendField(Blockly.Msg.TABLE_ID); 
  this.appendValueInput("x0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_X);
  this.appendValueInput("y0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_Y);     
this.appendDummyInput() 
      .setAlign(Blockly.ALIGN_RIGHT)    
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_COPYTO,"copy"], [Blockly.Msg.PROPERTY_MOVETO,"move"]]), "property_");
  this.appendValueInput("x_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_X);
  this.appendValueInput("y_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_Y);       
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['table_td_img_get'] = {
  init: function () {
  this.appendValueInput("imgid_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_IMAGE_GET)
      .appendField(Blockly.Msg.IMAGE_ID); 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_COLUMN,"column"], [Blockly.Msg.PROPERTY_ROW,"row"], [Blockly.Msg.WIDTH,"width"], [Blockly.Msg.HEIGHT,"height"], [Blockly.Msg.PROPERTY_NATURALWIDTH,"naturalwidth"], [Blockly.Msg.PROPERTY_NATURALHEIGHT,"naturalheight"], [Blockly.Msg.PROPERTY_IMAGEID,"imageid"]]), "property_");  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['table_td_insert_text'] = {
  init: function () {
  this.appendDummyInput()     
      .appendField(Blockly.Msg.TABLE_TD_INSERT_TEXT);     
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
	  .appendField(Blockly.Msg.TABLE)
      .appendField(Blockly.Msg.TABLE_ID); 
  this.appendValueInput("x_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_X);
  this.appendValueInput("y_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_Y); 
  this.appendValueInput("text_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CONTEXT);
  this.appendValueInput("fontname_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.FONTNAME);    
  this.appendValueInput("fontsize_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.FONTSIZE); 
  this.appendValueInput("color_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.FONTCOLOR);       
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['table_td_clear'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
	  .appendField(Blockly.Msg.TABLE)
      .appendField(Blockly.Msg.TABLE_ID); 
  this.appendValueInput("x_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_CLEAR)
      .appendField(Blockly.Msg.TABLE_TD_X);
  this.appendValueInput("y_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_Y); 
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['table_delete'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
	  .appendField(Blockly.Msg.TABLE)
      .appendField(Blockly.Msg.TABLE_ID); 
  this.appendDummyInput() 
      .appendField(Blockly.Msg.TABLE_DELETE);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['music_create'] = {
  init: function() {
  this.appendValueInput("url_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.MUSIC_CREATE)
      .appendField(Blockly.Msg.URL);
  this.appendValueInput("length_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.MUSIC_LENGTH);
  this.appendValueInput("loop_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.MUSIC_LOOP);  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['music_delete'] = {
  init: function () {
    this.appendDummyInput()
        .appendField(Blockly.Msg.MUSIC_DELETE);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
  }
};

Blockly.Blocks['canvas_create'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.CANVAS_CREATE);    
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)    
      .appendField(Blockly.Msg.ID); 
  this.appendValueInput("width_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WIDTH);
  this.appendValueInput("height_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HEIGHT);
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP);  
  this.appendValueInput("zindex_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ZINDEX);   
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['canvas_set'] = {
  init: function() {
  this.appendValueInput("id_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null)
      .appendField(Blockly.Msg.CANVAS_ID);    
  this.appendDummyInput() 
      .appendField(Blockly.Msg.SET)    
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.WIDTH,"width"], [Blockly.Msg.HEIGHT,"height"], [Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_MOVEX,"moveX"], [Blockly.Msg.PROPERTY_MOVEY,"moveY"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.PROPERTY_BORDER,"border"], [Blockly.Msg.PROPERTY_BACKGROUNDCOLOR,"backgroundColor"], [Blockly.Msg.PROPERTY_STYLE,"style"]]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['canvas_get'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.CANVAS_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.GET)    
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_EXIST,"exist"], [Blockly.Msg.WIDTH,"width"], [Blockly.Msg.HEIGHT,"height"], [Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.PROPERTY_BORDER,"border"], [Blockly.Msg.PROPERTY_BACKGROUNDCOLOR,"backgroundColor"], [Blockly.Msg.ID,"id"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['canvas_line'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.CANVAS_LINE);     
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT) 
      .appendField(Blockly.Msg.ID);
  this.appendValueInput("linewidth_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(Blockly.Msg.CANVAS_LINEWIDTH);    
  this.appendValueInput("x0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_X0);
  this.appendValueInput("y0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_Y0);
  this.appendValueInput("x1_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_X1);    
  this.appendValueInput("y1_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_Y1);  
  this.appendValueInput("color_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.COLOR);  
  this.appendValueInput("rotate_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ROTATEZ_DEGREES);     
  this.appendValueInput("globalAlpha_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);      
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['canvas_rect'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.CANVAS_RECT);      
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT) 
      .appendField(Blockly.Msg.ID);
  this.appendValueInput("linewidth_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)   
      .appendField(Blockly.Msg.CANVAS_LINEWIDTH);    
  this.appendValueInput("x0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_X0);
  this.appendValueInput("y0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_Y0);
  this.appendValueInput("width_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WIDTH);
  this.appendValueInput("height_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HEIGHT);
  this.appendValueInput("fill_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_FILL);     
  this.appendValueInput("color_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.COLOR);   
  this.appendValueInput("rotate_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ROTATEZ_DEGREES);     
  this.appendValueInput("globalAlpha_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);     
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['canvas_arc'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.CANVAS_ARC);      
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT) 
      .appendField(Blockly.Msg.ID);
  this.appendValueInput("linewidth_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)   
      .appendField(Blockly.Msg.CANVAS_LINEWIDTH);    
  this.appendValueInput("x0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_X0);
  this.appendValueInput("y0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_Y0);
  this.appendValueInput("r_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_R);    
  this.appendValueInput("sAngle_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_SANGLE);  
  this.appendValueInput("eAngle_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_EANGLE);
  this.appendValueInput("counterclockwise_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_COUNTERCLOCKWISE);
  this.appendValueInput("fill_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_FILL);      
  this.appendValueInput("color_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.COLOR);  
  this.appendValueInput("rotate_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ROTATEZ_DEGREES);     
  this.appendValueInput("globalAlpha_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);     
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['canvas_img_url'] = {
  init: function() {
  this.appendDummyInput() 
      .appendField(Blockly.Msg.CANVAS_IMG);
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.URL,"url"], [Blockly.Msg.IMAGE+Blockly.Msg.ID,"imageid"]]), "source_");
  this.appendValueInput("url_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT);
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['canvas_img'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.CANVAS_IMG);      
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ID);  
  this.appendValueInput("sx_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_SX);
  this.appendValueInput("sy_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_SY);
  this.appendValueInput("swidth_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_SWIDTH);
  this.appendValueInput("sheight_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_SHEIGHT);     
  this.appendValueInput("x0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_X0);
  this.appendValueInput("y0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_Y0);
  this.appendValueInput("width_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WIDTH);
  this.appendValueInput("height_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HEIGHT); 
  this.appendValueInput("rotate_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ROTATEZ_DEGREES);     
  this.appendValueInput("globalAlpha_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);     
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['canvas_capturevideo'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.CANVAS_CAPTUREVIDEO);      
  this.appendValueInput("canvasid_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_ID); 
  this.appendValueInput("videoid_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.VIDEO_ID);   
  this.appendValueInput("sx_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_SX);
  this.appendValueInput("sy_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_SY);
  this.appendValueInput("swidth_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_SWIDTH);
  this.appendValueInput("sheight_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_SHEIGHT);     
  this.appendValueInput("x0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_X0);
  this.appendValueInput("y0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_Y0);
  this.appendValueInput("width_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WIDTH);
  this.appendValueInput("height_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HEIGHT); 
  this.appendValueInput("rotate_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ROTATEZ_DEGREES);     
  this.appendValueInput("globalAlpha_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);     
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['canvas_text'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.CANVAS_TEXT);     
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ID);
  this.appendValueInput("text_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)   
      .appendField(Blockly.Msg.CONTEXT);    
  this.appendValueInput("x0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_X0);
  this.appendValueInput("y0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_Y0);
  this.appendValueInput("fontname_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.FONTNAME);    
  this.appendValueInput("fontsize_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.FONTSIZE);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TEXTALIGN)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_START,"start"], [Blockly.Msg.PROPERTY_END,"end"], [Blockly.Msg.PROPERTY_CENTER,"center"], [Blockly.Msg.PROPERTY_LEFT,"left"], [Blockly.Msg.PROPERTY_RIGHT,"right"]]), "textalign_");
  this.appendValueInput("fill_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_FILL);     
  this.appendValueInput("color_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.FONTCOLOR); 
  this.appendValueInput("rotate_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ROTATEZ_DEGREES);     
  this.appendValueInput("globalAlpha_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);     
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['canvas_quadraticcurve'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.CANVAS_QUADRATICCURVE);     
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT) 
      .appendField(Blockly.Msg.ID);  
  this.appendValueInput("x0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)     
      .appendField(Blockly.Msg.CANVAS_X0);
  this.appendValueInput("y0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_Y0);
  this.appendValueInput("cp1x_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_CP1X);
  this.appendValueInput("cp1y_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_CP1Y);    
  this.appendValueInput("x_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_X);    
  this.appendValueInput("y_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_Y);  
  this.appendValueInput("linewidth_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT) 
      .appendField(Blockly.Msg.CANVAS_LINEWIDTH);      
  this.appendValueInput("color_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.COLOR);  
  this.appendValueInput("fill_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_FILL);      
  this.appendValueInput("rotate_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ROTATEZ_DEGREES);     
  this.appendValueInput("globalAlpha_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);     
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['canvas_beziercurve'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.CANVAS_BEZIERCURVE);     
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)    
      .appendField(Blockly.Msg.ID);  
  this.appendValueInput("x0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)    
      .appendField(Blockly.Msg.CANVAS_X0);
  this.appendValueInput("y0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_Y0);
  this.appendValueInput("cp1x_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_CP1X);
  this.appendValueInput("cp1y_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_CP1Y); 
  this.appendValueInput("cp2x_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_CP2X);
  this.appendValueInput("cp2y_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_CP2Y);    
  this.appendValueInput("x_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_X);    
  this.appendValueInput("y_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_Y);  
  this.appendValueInput("linewidth_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT) 
      .appendField(Blockly.Msg.CANVAS_LINEWIDTH);      
  this.appendValueInput("color_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.COLOR);
  this.appendValueInput("fill_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_FILL);      
  this.appendValueInput("rotate_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ROTATEZ_DEGREES);     
  this.appendValueInput("globalAlpha_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);     
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['canvas_clearrect'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.CANVAS_CLEARRECT);     
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)     
      .appendField(Blockly.Msg.ID);  
  this.appendValueInput("x_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)    
      .appendField(Blockly.Msg.CANVAS_X0);
  this.appendValueInput("y_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_Y0); 
  this.appendValueInput("width_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WIDTH);
  this.appendValueInput("height_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HEIGHT); 
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['canvas_clear'] = {
  init: function () {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.CANVAS_CLEAR);      
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT) 
      .appendField(Blockly.Msg.ID);
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['canvas_delete'] = {
  init: function () {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.CANVAS_DELETE);      
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT) 
      .appendField(Blockly.Msg.ID);
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['canvas_onclick_do'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.CANVAS_ID);
  this.appendDummyInput()  
      .appendField(Blockly.Msg.CANVAS_ONCLICK_DO_IF); 
  this.appendStatementInput("do_");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['canvas_onclick_dom'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.CANVAS_ID);
  this.appendDummyInput()  
      .appendField(Blockly.Msg.CANVAS_ONCLICK_DO); 
  this.appendStatementInput("do_");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(220);
  }
};

Blockly.Blocks['canvas_onclick_get'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.CANVAS_ID)
  this.appendDummyInput()
      .appendField(Blockly.Msg.ONCLICK);    
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['canvas_getcolor'] = {
  init: function() {  
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT) 
      .appendField(Blockly.Msg.CANVAS_ID); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.CANVAS_GETCOLOR);       
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP);  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['canvas_getimagedata'] = {
  init: function() {  
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT) 
      .appendField(Blockly.Msg.CANVAS_ID); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.CANVAS_GETIMAGEDATA);	  
  this.appendValueInput("x0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_X0);
  this.appendValueInput("y0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_Y0);
  this.appendValueInput("width_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WIDTH);
  this.appendValueInput("height_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HEIGHT);	   
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['canvas_setimagedata'] = {
  init: function() {  
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT) 
      .appendField(Blockly.Msg.CANVAS_ID);
  this.appendDummyInput()  
      .appendField(Blockly.Msg.CANVAS_SETIMAGEDATA);	  
  this.appendValueInput("data_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT);
  this.appendValueInput("x0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_X0);
  this.appendValueInput("y0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_Y0);  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['image_create'] = {
  init: function() {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.IMAGE_CREATE);
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ID); 
  this.appendValueInput("url_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.URL);
  this.appendValueInput("width_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WIDTH);
  this.appendValueInput("height_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HEIGHT);
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP);  
  this.appendValueInput("zindex_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ZINDEX);      
  this.appendValueInput("display_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DISPLAY);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['image_create_stream'] = {
  init: function() {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.IMAGE_CREATE);
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ID); 
  this.appendValueInput("url_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.STREAMURL);
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP);  
  this.appendValueInput("zindex_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ZINDEX);      
  this.appendValueInput("display_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DISPLAY);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['image_set'] = {
  init: function() {
  this.appendValueInput("id_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null)
      .appendField(Blockly.Msg.IMAGE_ID);    
  this.appendDummyInput() 
      .appendField(Blockly.Msg.SET)    
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.URL,"url"], [Blockly.Msg.WIDTH,"width"], [Blockly.Msg.HEIGHT,"height"], [Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_ROTATE,"rotate"], [Blockly.Msg.PROPERTY_ROTATEX,"rotateX"], [Blockly.Msg.PROPERTY_ROTATEY,"rotateY"], [Blockly.Msg.PROPERTY_ROTATEZ,"rotateZ"], [Blockly.Msg.PROPERTY_MOVEX,"moveX"], [Blockly.Msg.PROPERTY_MOVEY,"moveY"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.PROPERTY_STYLE,"style"]]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['image_get'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.IMAGE_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.GET)    
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_EXIST,"exist"], [Blockly.Msg.URL,"url"], [Blockly.Msg.WIDTH,"width"], [Blockly.Msg.HEIGHT,"height"], [Blockly.Msg.PROPERTY_NATURALWIDTH,"naturalwidth"], [Blockly.Msg.PROPERTY_NATURALHEIGHT,"naturalheight"], [Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_ROTATE,"rotate"], [Blockly.Msg.PROPERTY_ROTATEX,"rotateX"], [Blockly.Msg.PROPERTY_ROTATEY,"rotateY"], [Blockly.Msg.PROPERTY_ROTATEZ,"rotateZ"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.ID,"id"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['image_delete'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.IMAGE_ID); 
  this.appendDummyInput()
      .appendField(Blockly.Msg.DELETE);
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(60);
  }
};

Blockly.Blocks['elements_collision'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ELEMENT_TABLE,"table"],[Blockly.Msg.ELEMENT_IMAGE,"image"],[Blockly.Msg.ELEMENT_CANVAS,"canvas"]]), "element1_");    
  this.appendValueInput("id1_")
      .setCheck(null)
      .appendField(Blockly.Msg.ID); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.AND)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ELEMENT_TABLE,"table"],[Blockly.Msg.ELEMENT_IMAGE,"image"],[Blockly.Msg.ELEMENT_CANVAS,"canvas"]]), "element2_");    
  this.appendValueInput("id2_")
      .setCheck(null)
      .appendField(Blockly.Msg.ID);    
  this.appendDummyInput()
      .appendField(Blockly.Msg.COLLISION_SIDE)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_ANY,"any"], [Blockly.Msg.PROPERTY_UP,"up"], [Blockly.Msg.PROPERTY_DOWN,"down"], [Blockly.Msg.PROPERTY_LEFT,"left"], [Blockly.Msg.PROPERTY_RIGHT,"right"]]), "position_");   
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['elements_collision_color'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ELEMENT_TABLE,"table"],[Blockly.Msg.ELEMENT_IMAGE,"image"],[Blockly.Msg.ELEMENT_CANVAS,"canvas"]]), "element1_");    
  this.appendValueInput("id1_")
      .setCheck(null)
      .appendField(Blockly.Msg.ID); 
  this.appendValueInput("id2_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT) 
      .appendField(Blockly.Msg.AND)     
      .appendField(Blockly.Msg.CANVAS_ID);      
  this.appendValueInput("color_")
      .setCheck(null) 
      .setAlign(Blockly.ALIGN_RIGHT)   
      .appendField(Blockly.Msg.COLOR);
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['image_collision'] = {
  init: function() {
  this.appendValueInput("id1_")
      .setCheck(null)
      .appendField(Blockly.Msg.COLLISION)
      .appendField(Blockly.Msg.ID); 
  this.appendValueInput("id2_")
      .setCheck(null)
      .appendField(Blockly.Msg.AND)
      .appendField(Blockly.Msg.ID);    
  this.appendDummyInput()
      .appendField(Blockly.Msg.COLLISION_SIDE)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_ANY,"any"], [Blockly.Msg.PROPERTY_UP,"up"], [Blockly.Msg.PROPERTY_DOWN,"down"], [Blockly.Msg.PROPERTY_LEFT,"left"], [Blockly.Msg.PROPERTY_RIGHT,"right"]]), "position_");   
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['image_boundary'] = {
  init: function() {
  this.appendValueInput("left_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck("Number")
      .appendField(Blockly.Msg.BOUNDARY)
      .appendField(Blockly.Msg.WIDTH);
  this.appendValueInput("top_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck("Number")
      .appendField(Blockly.Msg.HEIGHT);
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['image_boundary_collision'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.IMAGE_ID);       
  this.appendDummyInput()
      .appendField(Blockly.Msg.BOUNDARY_COLLISION)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_ANY,"any"], [Blockly.Msg.PROPERTY_UP,"up"], [Blockly.Msg.PROPERTY_DOWN,"down"], [Blockly.Msg.PROPERTY_LEFT,"left"], [Blockly.Msg.PROPERTY_RIGHT,"right"]]), "property_");   
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['image_boundary_collision_do'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.IMAGE_ID);      
  this.appendDummyInput()
      .appendField(Blockly.Msg.BOUNDARY_COLLISION_DO) 
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_ANY,"any"], [Blockly.Msg.PROPERTY_UP,"up"], [Blockly.Msg.PROPERTY_DOWN,"down"], [Blockly.Msg.PROPERTY_LEFT,"left"], [Blockly.Msg.PROPERTY_RIGHT,"right"]]), "property_");
  this.appendStatementInput("do_");
  this.setInputsInline(true);    
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['image_sys_get'] = {
  init: function() {
  this.appendDummyInput()
      .appendField(Blockly.Msg.SYS_GET)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.WIDTH,"screen_width"], [Blockly.Msg.HEIGHT,"screen_height"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['image_onclick_listener'] = {
  init: function () {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ONCLICK_LISTENER);
    this.appendStatementInput("do_");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
  }
};

Blockly.Blocks['image_onclick_do'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.IMAGE_ID);
  this.appendDummyInput()
      .appendField(Blockly.Msg.IMAGE_ONCLICK_DO_IF);  
  this.appendStatementInput("do_");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['image_onclick_dom'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.IMAGE_ID);
  this.appendDummyInput()
      .appendField(Blockly.Msg.IMAGE_ONCLICK_DO);  
  this.appendStatementInput("do_");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(220);
  }
};

Blockly.Blocks['image_onload_dom'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.IMAGE_ID);
  this.appendDummyInput()
      .appendField(Blockly.Msg.IMAGE_ONLOAD_DO);  
  this.appendStatementInput("do_");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(220);
  }
};

Blockly.Blocks['image_onclick_get'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.IMAGE_ID); 
  this.appendDummyInput()
      .appendField(Blockly.Msg.ONCLICK);    
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['image_move'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.IMAGE_ID);
  this.appendDummyInput()
      .appendField(Blockly.Msg.IMAGE_MOVE_DIRECTION)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_UP,"up"], [Blockly.Msg.PROPERTY_DOWN,"down"], [Blockly.Msg.PROPERTY_LEFT,"left"], [Blockly.Msg.PROPERTY_RIGHT,"right"]]), "property_");   
  this.appendValueInput("step_")
      .setCheck("Number")
      .appendField(Blockly.Msg.IMAGE_MOVE_STEP);
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['image_resize'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.IMAGE_ID);
  this.appendValueInput("percentage_")
      .setCheck("Number")
      .appendField(Blockly.Msg.IMAGE_RESIZE); 
  this.appendDummyInput()
      .appendField(Blockly.Msg.PERCENTAGE);
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['mouse_coordinate_get_start'] = {
  init: function() {
  this.appendDummyInput()
      .appendField(Blockly.Msg.MOUSE_COORDINATE_GET_START);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['mouse_coordinate_get'] = {
  init: function() {
  this.appendDummyInput()
      .appendField(Blockly.Msg.MOUSE_COORDINATE_GET)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_PAGEX,"pageX"], [Blockly.Msg.PROPERTY_PAGEY,"pageY"], [Blockly.Msg.PROPERTY_OFFSETX,"offsetX"], [Blockly.Msg.PROPERTY_OFFSETY,"offsetY"], [Blockly.Msg.PROPERTY_CLIENTX,"clientX"], [Blockly.Msg.PROPERTY_CLIENTY,"clientY"], [Blockly.Msg.PROPERTY_SCREENX,"screenX"], [Blockly.Msg.PROPERTY_SCREENY,"screenY"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  this.setHelpUrl("https://www.w3schools.com/jsref/obj_mouseevent.asp");
  }
};

Blockly.Blocks['document_timer_novar'] = {
  init: function () {
    this.appendValueInput("intervals_")
        .setAlign(Blockly.ALIGN_RIGHT)
        .setCheck("Number")
        .appendField(Blockly.Msg.DOCUMENT_TIMER);
    this.setInputsInline(true);    
    this.appendStatementInput("do_");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
  }
};

Blockly.Blocks['document_timer_once_novar'] = {
  init: function () {  
    this.appendValueInput("intervals_")
        .setAlign(Blockly.ALIGN_RIGHT)
        .setCheck("Number")
        .appendField(Blockly.Msg.DOCUMENT_TIMER_ONCE);
    this.setInputsInline(true);    
    this.appendStatementInput("do_");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
  }
};

Blockly.Blocks['document_timer'] = {
  init: function () {
	this.appendValueInput("var_")
        .setCheck("String")
        .appendField(Blockly.Msg.VARIABLE_NAME);		  
    this.appendValueInput("intervals_")
        .setAlign(Blockly.ALIGN_RIGHT)
        .setCheck("Number")
        .appendField(Blockly.Msg.DOCUMENT_TIMER);  
    this.setInputsInline(true);    
    this.appendStatementInput("do_");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
  }
};

Blockly.Blocks['document_timer_once'] = {
  init: function () {
	this.appendValueInput("var_")
        .setCheck("String")
        .appendField(Blockly.Msg.VARIABLE_NAME);	  
    this.appendValueInput("intervals_")
        .setAlign(Blockly.ALIGN_RIGHT)
        .setCheck("Number")
        .appendField(Blockly.Msg.DOCUMENT_TIMER_ONCE);   
    this.setInputsInline(true);    
    this.appendStatementInput("do_");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
  }
};

Blockly.Blocks['document_timer_stop'] = {
  init: function () {
	this.appendValueInput("var_")
        .setCheck("String")
        .appendField(Blockly.Msg.VARIABLE_NAME);	  
    this.appendDummyInput()
      .appendField(Blockly.Msg.DOCUMENT_TIMER_STOP);
    this.setInputsInline(true);  	  
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
  }
};

Blockly.Blocks['text_to_number'] = {
  init: function() {
    this.appendValueInput("value_text_")
        .setCheck(null)
        .appendField(Blockly.Msg.TEXT_TO_NUMBER);
    this.setOutput(true);  
    this.setColour(300);
  }  
};

Blockly.Blocks['loop_break'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.LOOP_BREAK);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
  }
};

Blockly.Blocks['loop_continue'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.LOOP_CONTINUE);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
  }
};

Blockly.Blocks['function_return'] = {
  init: function () {
    this.appendValueInput("value_")
        .setCheck(null)
        .appendField(Blockly.Msg.FUNCTION_RETURN);   
    this.setInputsInline(true);    
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
  }
};

Blockly.Blocks['gameelements_1'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.LOAD_JS); 
    this.setInputsInline(true);    
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
  }
};

Blockly.Blocks['move_to_mouse'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.IMAGE_ID);
  this.appendDummyInput()
      .appendField(Blockly.Msg.MOVE_TO_MOUSE);
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_CENTER,"center"], [Blockly.Msg.PROPERTY_UP,"up"], [Blockly.Msg.PROPERTY_DOWN,"down"], [Blockly.Msg.PROPERTY_LEFT,"left"], [Blockly.Msg.PROPERTY_RIGHT,"right"], [Blockly.Msg.PROPERTY_UPPERLEFT,"upperLeft"], [Blockly.Msg.PROPERTY_LOWERLEFT,"lowerLeft"], [Blockly.Msg.PROPERTY_UPPERRIGHT,"upperRight"], [Blockly.Msg.PROPERTY_LOWERRIGHT,"lowerRight"]]), "position");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['move_to_coordinate'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.IMAGE_ID); 
  this.appendDummyInput()
      .appendField(Blockly.Msg.MOVE_TO_COORDINATE);
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP);
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['rotatez_degrees'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.IMAGE_ID); 
  this.appendDummyInput()
      .appendField(Blockly.Msg.ROTATEZ_DEGREES);  
  this.appendValueInput("degrees_")
      .setCheck("Number"); 
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['rotate_vertical_flip'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.IMAGE_ID); 
  this.appendDummyInput()
      .appendField(Blockly.Msg.ROTATE_VERTICAL_FLIP);
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['rotate_horizontal_flip'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.IMAGE_ID); 
  this.appendDummyInput()
      .appendField(Blockly.Msg.ROTATE_HORIZONTAL_FLIP);
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['button_create'] = {
  init: function() {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.BUTTON_CREATE);
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ID);    
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP);   
  this.appendValueInput("width_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WIDTH);
  this.appendValueInput("height_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HEIGHT);
  this.appendValueInput("opacity_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);  
  this.appendValueInput("bgcolor_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.BACKCOLOR);     
  this.appendValueInput("value_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.VALUE); 
  this.appendValueInput("fontsize_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.FONTSIZE); 
  this.appendValueInput("zindex_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ZINDEX);   
  this.appendValueInput("display_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DISPLAY); 
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['button_set'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.BUTTON_ID);      
  this.appendDummyInput()  
      .appendField(Blockly.Msg.BUTTON_SET) 
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.WIDTH,"width"], [Blockly.Msg.HEIGHT,"height"], [Blockly.Msg.PROPERTY_BORDERRADIUS,"borderradius"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_BACKGROUND,"background"], [Blockly.Msg.PROPERTY_VALUE,"value"], [Blockly.Msg.PROPERTY_FONTSIZE,"fontsize"], [Blockly.Msg.FONTCOLOR,"color"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.PROPERTY_STYLE,"style"]]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['button_get'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.BUTTON_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.BUTTON_GET)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.WIDTH,"width"], [Blockly.Msg.HEIGHT,"height"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_BACKGROUND,"background"], [Blockly.Msg.PROPERTY_VALUE,"value"], [Blockly.Msg.PROPERTY_FONTSIZE,"fontsize"], [Blockly.Msg.FONTCOLOR,"color"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.ID,"id"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['button_delete'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.BUTTON_ID); 
  this.appendDummyInput()   
      .appendField(Blockly.Msg.BUTTON_DELETE);  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['button_onclick_do'] = {
  init: function () {
  this.appendValueInput("id_")
    .setCheck(null)
    .appendField(Blockly.Msg.BUTTON_ID);
  this.appendDummyInput()   
    .appendField(Blockly.Msg.BUTTON_ONCLICK);
  this.setInputsInline(true);
  this.appendStatementInput("do_");
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(220);
  }
};

Blockly.Blocks['async_function'] = {
  init: function () {
  this.appendValueInput("name_")
      .setCheck("String")   
      .appendField(Blockly.Msg.ASYNC_FUNCTION);
  this.appendDummyInput()  
      .appendField("(");    
  this.appendValueInput("parameter_")
      .setCheck("String");    
  this.appendDummyInput()  
      .appendField(")");    
  this.appendStatementInput("do_");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['call_async_function'] = {
  init: function () {
  this.appendValueInput("name_")
      .setCheck("String")   
      .appendField(Blockly.Msg.CALL_ASYNC_FUNCTION);
  this.appendDummyInput()  
      .appendField("(");
  this.appendValueInput("parameter_")
      .setCheck("String");   
  this.appendDummyInput()  
      .appendField(")");    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['transform_async_function'] = {
  init: function () {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TRANSFORM_ASYNC_FUNCTION);    
  this.appendStatementInput("do_");
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};


Blockly.Blocks['element_event'] = {
  init: function () {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.ELEMENT)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ELEMENT_WINDOW,"window"],[Blockly.Msg.ELEMENT_DOCUMENT,"document"],[Blockly.Msg.ELEMENT_TABLE,"table"],[Blockly.Msg.ELEMENT_IMAGE,"image"],[Blockly.Msg.ELEMENT_CANVAS,"canvas"],[Blockly.Msg.ELEMENT_BUTTON,"button"],[Blockly.Msg.ELEMENT_COLOR,"color"],[Blockly.Msg.ELEMENT_SELECT,"select"],[Blockly.Msg.ELEMENT_RANGE,"range"],[Blockly.Msg.ELEMENT_TEXT,"text"],[Blockly.Msg.ELEMENT_DIV,"div"],[Blockly.Msg.ELEMENT_IFRAME,"iframe"],[Blockly.Msg.ELEMENT_A,"a"],[Blockly.Msg.ELEMENT_RADIO,"radio"],[Blockly.Msg.ELEMENT_CHECKBOX,"checkbox"],[Blockly.Msg.ELEMENT_TEXTAREA,"textarea"],[Blockly.Msg.ELEMENT_NUMBER,"number"],[Blockly.Msg.ELEMENT_DATE,"date"],[Blockly.Msg.ELEMENT_TIME,"time"],[Blockly.Msg.ELEMENT_DATETIME,"datetime"],[Blockly.Msg.ELEMENT_PROGRESS,"progress"],[Blockly.Msg.ELEMENT_PASSWORD,"password"]]), "element");
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.ID); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.ELEMENT_EVENT)
      .appendField(new Blockly.FieldDropdown([
		["abort","abort"],
		["afterprint","afterprint"],
		["animationend","animationend"],
		["animationiteration","animationiteration"],
		["animationstart","animationstart"],
		["beforeprint","beforeprint"],
		["beforeunload","beforeunload"],
		["blur","blur"],
		["canplay","canplay"],
		["canplaythrough","canplaythrough"],
		["change","change"],
		["click","click"],
		["contextmenu","contextmenu"],
		["copy","copy"],
		["cut","cut"],
		["dblclick","dblclick"],
		["drag","drag"],
		["dragend","dragend"],
		["dragenter","dragenter"],
		["dragleave","dragleave"],
		["dragover","dragover"],
		["dragstart","dragstart"],
		["drop","drop"],
		["durationchange","durationchange"],
		["ended","ended"],
		["error","error"],
		["focus","focus"],
		["focusin","focusin"],
		["focusout","focusout"],
		["fullscreenchange","fullscreenchange"],
		["fullscreenerror","fullscreenerror"],
		["hashchange","hashchange"],
		["input","input"],
		["invalid","invalid"],
		["keydown","keydown"],
		["keypress","keypress"],
		["keyup","keyup"],
		["load","load"],
		["loadeddata","loadeddata"],
		["loadedmetadata","loadedmetadata"],
		["loadstart","loadstart"],
		["message","message"],
		["mousedown","mousedown"],
		["mouseenter","mouseenter"],
		["mouseleave","mouseleave"],
		["mousemove","mousemove"],
		["mouseover","mouseover"],
		["mouseout","mouseout"],
		["mouseup","mouseup"],
		["mousewheel","mousewheel"],
		["offline","offline"],
		["online","online"],
		["open","open"],
		["pagehide","pagehide"],
		["pageshow","pageshow"],
		["paste","paste"],
		["pause","pause"],
		["play","play"],
		["playing","playing"],
		["popstate","popstate"],
		["progress","progress"],
		["ratechange","ratechange"],
		["resize","resize"],
		["reset","reset"],
		["scroll","scroll"],
		["search","search"],
		["seeked","seeked"],
		["seeking","seeking"],
		["select","select"],
		["show","show"],
		["stalled","stalled"],
		["storage","storage"],
		["submit","submit"],
		["suspend","suspend"],
		["timeupdate","timeupdate"],
		["toggle","toggle"],
		["touchcancel","touchcancel"],
		["touchend","touchend"],
		["touchmove","touchmove"],
		["touchstart","touchstart"],
		["transitionend","transitionend"],
		["unload","unload"],
		["volumechange","volumechange"],
		["waiting","waiting"],
		["wheel","wheel"]
	  ]), "event");
  this.appendStatementInput("statement");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  this.setHelpUrl("https://fustyles.github.io/webduino/GameElements_20190131/HTML%20DOM%20EVENTS.txt");
  }
};

Blockly.Blocks['element_event_stop'] = {
  init: function () {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.ELEMENT)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ELEMENT_WINDOW,"window"],[Blockly.Msg.ELEMENT_DOCUMENT,"document"],[Blockly.Msg.ELEMENT_TABLE,"table"],[Blockly.Msg.ELEMENT_IMAGE,"image"],[Blockly.Msg.ELEMENT_CANVAS,"canvas"],[Blockly.Msg.ELEMENT_BUTTON,"button"],[Blockly.Msg.ELEMENT_COLOR,"color"],[Blockly.Msg.ELEMENT_SELECT,"select"],[Blockly.Msg.ELEMENT_RANGE,"range"],[Blockly.Msg.ELEMENT_TEXT,"text"],[Blockly.Msg.ELEMENT_DIV,"div"],[Blockly.Msg.ELEMENT_IFRAME,"iframe"],[Blockly.Msg.ELEMENT_A,"a"],[Blockly.Msg.ELEMENT_RADIO,"radio"],[Blockly.Msg.ELEMENT_CHECKBOX,"checkbox"],[Blockly.Msg.ELEMENT_TEXTAREA,"textarea"],[Blockly.Msg.ELEMENT_NUMBER,"number"],[Blockly.Msg.ELEMENT_DATE,"date"],[Blockly.Msg.ELEMENT_TIME,"time"],[Blockly.Msg.ELEMENT_DATETIME,"datetime"],[Blockly.Msg.ELEMENT_PROGRESS,"progress"],[Blockly.Msg.ELEMENT_PASSWORD,"password"]]), "element");
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.ID);    
  this.appendDummyInput()  
      .appendField(Blockly.Msg.ELEMENT_EVENT_STOP)
      .appendField(new Blockly.FieldDropdown([
		["abort","abort"],
		["afterprint","afterprint"],
		["animationend","animationend"],
		["animationiteration","animationiteration"],
		["animationstart","animationstart"],
		["beforeprint","beforeprint"],
		["beforeunload","beforeunload"],
		["blur","blur"],
		["canplay","canplay"],
		["canplaythrough","canplaythrough"],
		["change","change"],
		["click","click"],
		["contextmenu","contextmenu"],
		["copy","copy"],
		["cut","cut"],
		["dblclick","dblclick"],
		["drag","drag"],
		["dragend","dragend"],
		["dragenter","dragenter"],
		["dragleave","dragleave"],
		["dragover","dragover"],
		["dragstart","dragstart"],
		["drop","drop"],
		["durationchange","durationchange"],
		["ended","ended"],
		["error","error"],
		["focus","focus"],
		["focusin","focusin"],
		["focusout","focusout"],
		["fullscreenchange","fullscreenchange"],
		["fullscreenerror","fullscreenerror"],
		["hashchange","hashchange"],
		["input","input"],
		["invalid","invalid"],
		["keydown","keydown"],
		["keypress","keypress"],
		["keyup","keyup"],
		["load","load"],
		["loadeddata","loadeddata"],
		["loadedmetadata","loadedmetadata"],
		["loadstart","loadstart"],
		["message","message"],
		["mousedown","mousedown"],
		["mouseenter","mouseenter"],
		["mouseleave","mouseleave"],
		["mousemove","mousemove"],
		["mouseover","mouseover"],
		["mouseout","mouseout"],
		["mouseup","mouseup"],
		["mousewheel","mousewheel"],
		["offline","offline"],
		["online","online"],
		["open","open"],
		["pagehide","pagehide"],
		["pageshow","pageshow"],
		["paste","paste"],
		["pause","pause"],
		["play","play"],
		["playing","playing"],
		["popstate","popstate"],
		["progress","progress"],
		["ratechange","ratechange"],
		["resize","resize"],
		["reset","reset"],
		["scroll","scroll"],
		["search","search"],
		["seeked","seeked"],
		["seeking","seeking"],
		["select","select"],
		["show","show"],
		["stalled","stalled"],
		["storage","storage"],
		["submit","submit"],
		["suspend","suspend"],
		["timeupdate","timeupdate"],
		["toggle","toggle"],
		["touchcancel","touchcancel"],
		["touchend","touchend"],
		["touchmove","touchmove"],
		["touchstart","touchstart"],
		["transitionend","transitionend"],
		["unload","unload"],
		["volumechange","volumechange"],
		["waiting","waiting"],
		["wheel","wheel"]
	  ]), "event");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  this.setHelpUrl("https://fustyles.github.io/webduino/GameElements_20190131/HTML%20DOM%20EVENTS.txt");
  }
};

Blockly.Blocks['colorpicker_create'] = {
  init: function() {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.COLORPICKER_CREATE);
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ID);    
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP);   
  this.appendValueInput("width_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WIDTH);
  this.appendValueInput("height_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HEIGHT);
  this.appendValueInput("opacity_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);   
  this.appendValueInput("value_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.COLORPICKER_COLOR); 
  this.appendValueInput("zindex_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ZINDEX);   
  this.appendValueInput("display_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DISPLAY); 
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['colorpicker_set'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.COLORPICKER_ID);      
  this.appendDummyInput()  
      .appendField(Blockly.Msg.COLORPICKER_SET) 
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.WIDTH,"width"], [Blockly.Msg.HEIGHT,"height"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_VALUE,"value"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.PROPERTY_STYLE,"style"], [Blockly.Msg.PROPERTY_NAME,"name"]]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['colorpicker_get'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.COLORPICKER_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.COLORPICKER_GET)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.WIDTH,"width"], [Blockly.Msg.HEIGHT,"height"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_VALUE,"value"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.ID,"id"], [Blockly.Msg.PROPERTY_NAME,"name"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['colorpicker_delete'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.COLORPICKER_ID); 
  this.appendDummyInput()   
      .appendField(Blockly.Msg.COLORPICKER_DELETE);  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['colorpicker_onchange_do'] = {
  init: function () {
  this.appendValueInput("id_")
    .setCheck(null)
    .appendField(Blockly.Msg.COLORPICKER_ID);
  this.appendDummyInput()   
    .appendField(Blockly.Msg.COLORPICKER_ONCHANGE);
  this.setInputsInline(true);
  this.appendStatementInput("do_");
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(220);
  }
};

Blockly.Blocks['select_create'] = {
  init: function() {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.SELECT_CREATE);
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ID);    
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP);   
  this.appendValueInput("width_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WIDTH);
  this.appendValueInput("height_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HEIGHT);
  this.appendValueInput("background_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null)
      .appendField(Blockly.Msg.BACKCOLOR);
  this.appendValueInput("color_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null)
      .appendField(Blockly.Msg.FONTCOLOR);
  this.appendValueInput("fontsize_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck("Number")
      .appendField(Blockly.Msg.FONTSIZE);    
  this.appendValueInput("opacity_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);   
  this.appendValueInput("option_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.SELECT_OPTION); 
  this.appendValueInput("value_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.SELECT_VALUE);     
  this.appendValueInput("zindex_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ZINDEX);   
  this.appendValueInput("display_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DISPLAY); 
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['select_set'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.SELECT_ID);      
  this.appendDummyInput()  
      .appendField(Blockly.Msg.SELECT_SET) 
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.WIDTH,"width"], [Blockly.Msg.HEIGHT,"height"], [Blockly.Msg.PROPERTY_BACKGROUND,"background"], [Blockly.Msg.PROPERTY_COLOR,"color"], [Blockly.Msg.PROPERTY_FONTSIZE,"fontsize"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_OPTION,"option"], [Blockly.Msg.PROPERTY_VALUE,"value"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.PROPERTY_STYLE,"style"], [Blockly.Msg.PROPERTY_NAME,"name"]]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['select_get'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.SELECT_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.SELECT_GET)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.WIDTH,"width"], [Blockly.Msg.HEIGHT,"height"], [Blockly.Msg.PROPERTY_BACKGROUND,"background"], [Blockly.Msg.PROPERTY_COLOR,"color"], [Blockly.Msg.PROPERTY_FONTSIZE,"fontsize"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_SELECTEDVALUE,"selectedValue"], [Blockly.Msg.PROPERTY_SELECTEDTEXT,"selectedText"], [Blockly.Msg.PROPERTY_SELECTEDINDEX,"selectedIndex"], [Blockly.Msg.PROPERTY_LENGTH,"length"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.ID,"id"], [Blockly.Msg.PROPERTY_NAME,"name"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['select_delete'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.SELECT_ID); 
  this.appendDummyInput()   
      .appendField(Blockly.Msg.SELECT_DELETE);  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['select_onchange_do'] = {
  init: function () {
  this.appendValueInput("id_")
    .setCheck(null)
    .appendField(Blockly.Msg.SELECT_ID);
  this.appendDummyInput()   
    .appendField(Blockly.Msg.SELECT_ONCHANGE);
  this.setInputsInline(true);
  this.appendStatementInput("do_");
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(220);
  }
};

Blockly.Blocks['range_create'] = {
  init: function() {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.RANGE_CREATE);
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ID);    
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP);   
  this.appendValueInput("width_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WIDTH);
  this.appendValueInput("height_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HEIGHT);
  this.appendValueInput("min_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.MIN); 
  this.appendValueInput("max_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.MAX); 
  this.appendValueInput("step_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.STEP); 
  this.appendValueInput("value_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.VALUE); 
  this.appendValueInput("opacity_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);
  this.appendValueInput("zindex_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ZINDEX);   
  this.appendValueInput("display_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DISPLAY); 
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['range_set'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.RANGE_ID);      
  this.appendDummyInput()  
      .appendField(Blockly.Msg.RANGE_SET) 
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.WIDTH,"width"], [Blockly.Msg.HEIGHT,"height"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_MAX,"max"], [Blockly.Msg.PROPERTY_MIN,"min"], [Blockly.Msg.PROPERTY_STEP,"step"], [Blockly.Msg.PROPERTY_VALUE,"value"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.PROPERTY_STYLE,"style"], [Blockly.Msg.PROPERTY_NAME,"name"]]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['range_get'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.RANGE_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.RANGE_GET)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.WIDTH,"width"], [Blockly.Msg.HEIGHT,"height"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_MAX,"max"], [Blockly.Msg.PROPERTY_MIN,"min"], [Blockly.Msg.PROPERTY_STEP,"step"], [Blockly.Msg.PROPERTY_VALUE,"value"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.ID,"id"], [Blockly.Msg.PROPERTY_NAME,"name"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['range_delete'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.RANGE_ID); 
  this.appendDummyInput()   
      .appendField(Blockly.Msg.RANGE_DELETE);  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['range_onchange_do'] = {
  init: function () {
  this.appendValueInput("id_")
    .setCheck(null)
    .appendField(Blockly.Msg.RANGE_ID);
  this.appendDummyInput()   
    .appendField(Blockly.Msg.RANGE_ONCHANGE);
  this.setInputsInline(true);
  this.appendStatementInput("do_");
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(220);
  }
};

Blockly.Blocks['text_create'] = {
  init: function() {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.TEXT_CREATE);
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ID); 
  this.appendValueInput("width_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WIDTH);
  this.appendValueInput("height_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HEIGHT);  
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP);   
  this.appendValueInput("background_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null)
      .appendField(Blockly.Msg.BACKCOLOR);
  this.appendValueInput("color_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null)
      .appendField(Blockly.Msg.FONTCOLOR);
  this.appendValueInput("fontsize_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck("Number")
      .appendField(Blockly.Msg.FONTSIZE);
  this.appendValueInput("opacity_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);
  this.appendValueInput("value_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TEXT_VALUE); 
  this.appendValueInput("zindex_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ZINDEX);   
  this.appendValueInput("display_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DISPLAY); 
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['text_set'] = {
  init: function() {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.TEXT);
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.TEXT_ID);      
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TEXT_SET) 
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.WIDTH,"width"], [Blockly.Msg.HEIGHT,"height"], [Blockly.Msg.PROPERTY_BACKGROUND,"background"], [Blockly.Msg.PROPERTY_COLOR,"color"], [Blockly.Msg.PROPERTY_FONTSIZE,"fontsize"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_VALUE,"value"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.PROPERTY_STYLE,"style"], [Blockly.Msg.PROPERTY_NAME,"name"]]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['text_get'] = {
  init: function () {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.TEXT);
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.TEXT_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TEXT_GET)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.WIDTH,"width"], [Blockly.Msg.HEIGHT,"height"], [Blockly.Msg.PROPERTY_BACKGROUND,"background"], [Blockly.Msg.PROPERTY_COLOR,"color"], [Blockly.Msg.PROPERTY_FONTSIZE,"fontsize"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_VALUE,"value"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.ID,"id"], [Blockly.Msg.PROPERTY_NAME,"name"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['text_delete'] = {
  init: function () {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.TEXT);
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.TEXT_ID); 
  this.appendDummyInput()   
      .appendField(Blockly.Msg.TEXT_DELETE);  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['text_onchange_do'] = {
  init: function () {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.TEXT);
  this.appendValueInput("id_")
    .setCheck(null)
    .appendField(Blockly.Msg.TEXT_ID);
  this.appendDummyInput()   
    .appendField(Blockly.Msg.TEXT_ONCHANGE);
  this.setInputsInline(true);
  this.appendStatementInput("do_");
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(220);
  }
};

Blockly.Blocks['div_create'] = {
  init: function() {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.DIV_CREATE);
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ID);    
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP);   
  this.appendValueInput("width_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WIDTH);
  this.appendValueInput("height_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HEIGHT);
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TABLE_BORDERSTYLE)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_NONE,"none"], [Blockly.Msg.PROPERTY_SOLID,"solid"], [Blockly.Msg.PROPERTY_DASHED,"dashed"], [Blockly.Msg.PROPERTY_DOUBLE,"double"], [Blockly.Msg.PROPERTY_DOTTED,"dotted"], [Blockly.Msg.PROPERTY_GROOVE,"groove"], [Blockly.Msg.PROPERTY_RIDGE,"ridge"], [Blockly.Msg.PROPERTY_INSET,"inset"], [Blockly.Msg.PROPERTY_OUTSET,"outset"], [Blockly.Msg.PROPERTY_HIDDEN,"hidden"]]), "borderstyle_");  
  this.appendValueInput("borderwidth_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_BORDERWIDTH);       
  this.appendValueInput("bordercolor_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_BORDERCOLOR);         
  this.appendValueInput("background_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null)
      .appendField(Blockly.Msg.BACKCOLOR);
  this.appendValueInput("color_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null)
      .appendField(Blockly.Msg.FONTCOLOR);
  this.appendValueInput("fontsize_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck("Number")
      .appendField(Blockly.Msg.FONTSIZE);
  this.appendValueInput("opacity_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);
  this.appendValueInput("innerHTML_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DIV_VALUE); 
  this.appendValueInput("zindex_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ZINDEX);   
  this.appendValueInput("display_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DISPLAY); 
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['div_set'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.DIV_ID);      
  this.appendDummyInput()  
      .appendField(Blockly.Msg.DIV_SET) 
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.WIDTH,"width"], [Blockly.Msg.HEIGHT,"height"], [Blockly.Msg.PROPERTY_BORDERSTYLE,"borderstyle"], [Blockly.Msg.PROPERTY_BORDERWIDTH,"borderwidth"], [Blockly.Msg.PROPERTY_BORDERCOLOR,"bordercolor"], [Blockly.Msg.PROPERTY_BORDERRADIUS,"borderradius"], [Blockly.Msg.PROPERTY_BACKGROUND,"background"], [Blockly.Msg.PROPERTY_COLOR,"color"], [Blockly.Msg.PROPERTY_FONTSIZE,"fontsize"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_INNERHTML,"innerHTML"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.PROPERTY_STYLE,"style"]]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['div_get'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.DIV_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.DIV_GET)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.WIDTH,"width"], [Blockly.Msg.HEIGHT,"height"], [Blockly.Msg.PROPERTY_BORDERSTYLE,"borderstyle"], [Blockly.Msg.PROPERTY_BORDERWIDTH,"borderwidth"], [Blockly.Msg.PROPERTY_BORDERCOLOR,"bordercolor"], [Blockly.Msg.PROPERTY_BACKGROUND,"background"], [Blockly.Msg.PROPERTY_COLOR,"color"], [Blockly.Msg.PROPERTY_FONTSIZE,"fontsize"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_INNERHTML,"innerHTML"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.ID,"id"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['div_delete'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.DIV_ID); 
  this.appendDummyInput()   
      .appendField(Blockly.Msg.DIV_DELETE);  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['color_hextorgb'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.COLOR_HEXTORGB);
  this.appendValueInput("color_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null); 
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['time_delay'] = {
  init: function () {
    this.appendValueInput("seconds")
        .setCheck("Number")
        .appendField(Blockly.Msg.TIME_DELAY);   
    this.setInputsInline(true);    
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
  }
};

Blockly.Blocks['body_set'] = {
  init: function() {    
  this.appendDummyInput()  
      .appendField(Blockly.Msg.SETWINDOW)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_BACKGROUNDCOLOR,"backgroundColor"], [Blockly.Msg.PROPERTY_BACKGROUNDIMAGE,"backgroundImage"], [Blockly.Msg.PROPERTY_BACKGROUNDREPEAT,"backgroundRepeat"], [Blockly.Msg.PROPERTY_OVERFLOW,"overflow"], [Blockly.Msg.PROPERTY_FULLSCREEN,"fullscreen"], [Blockly.Msg.PROPERTY_STYLE,"style"], [Blockly.Msg.PROPERTY_DROPPABLE,"droppable"]]), "property_");
  this.appendValueInput("value_")
      .setCheck(null)
	  .appendField(Blockly.Msg.PROPERTY_VALUE);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};  

Blockly.Blocks['position_distance'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.POSITION_DISTANCE);
  this.appendValueInput("x0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)    
      .appendField(Blockly.Msg.X0);
  this.appendValueInput("y0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.Y0); 
  this.appendValueInput("x1_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)  
	  .appendField("  ")
      .appendField(Blockly.Msg.X1);
  this.appendValueInput("y1_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.Y1);     
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['position_angle'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.POSITION_ANGLE);
  this.appendValueInput("x0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)    
      .appendField(Blockly.Msg.X0);
  this.appendValueInput("y0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.Y0); 
  this.appendValueInput("x1_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
	  .appendField("  ")
      .appendField(Blockly.Msg.X1);
  this.appendValueInput("y1_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.Y1);     
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['iframe_create'] = {
  init: function() {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.IFRAME_CREATE);
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ID);    
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP);   
  this.appendValueInput("width_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WIDTH);
  this.appendValueInput("height_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HEIGHT);
  this.appendDummyInput()  
      .appendField(Blockly.Msg.IFRAME_FRAMEBORDER)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_NO,"0"], [Blockly.Msg.PROPERTY_YES,"1"]]), "frameborder_");  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.IFRAME_SCROLLING)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_YES,"yes"], [Blockly.Msg.PROPERTY_NO,"no"], [Blockly.Msg.PROPERTY_AUTO,"auto"]]), "scrolling_");     
  this.appendValueInput("src_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.IFRAME_SRC); 
  this.appendValueInput("srcdoc_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.IFRAME_SRCDOC); 
  this.appendValueInput("opacity_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);
  this.appendValueInput("zindex_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ZINDEX);   
  this.appendValueInput("display_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DISPLAY); 
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['iframe_set'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.IFRAME_ID);      
  this.appendDummyInput()  
      .appendField(Blockly.Msg.IFRAME_SET) 
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.WIDTH,"width"], [Blockly.Msg.HEIGHT,"height"], [Blockly.Msg.PROPERTY_FRAMEBORDER,"frameborder"], [Blockly.Msg.PROPERTY_SCROLLING,"scrolling"], [Blockly.Msg.PROPERTY_SRC,"src"], [Blockly.Msg.PROPERTY_SRCDOC,"srcdoc"], [Blockly.Msg.PROPERTY_SANDBOX,"sandbox"], [Blockly.Msg.PROPERTY_ALLOW,"allow"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.PROPERTY_STYLE,"style"]]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['iframe_get'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.IFRAME_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.IFRAME_GET)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.WIDTH,"width"], [Blockly.Msg.HEIGHT,"height"], [Blockly.Msg.PROPERTY_FRAMEBORDER,"frameborder"], [Blockly.Msg.PROPERTY_SCROLLING,"scrolling"], [Blockly.Msg.PROPERTY_SRC,"src"], [Blockly.Msg.PROPERTY_SRCDOC,"srcdoc"], [Blockly.Msg.PROPERTY_SANDBOX,"sandbox"], [Blockly.Msg.PROPERTY_ALLOW,"allow"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.ID,"id"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['iframe_delete'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.IFRAME_ID); 
  this.appendDummyInput()   
      .appendField(Blockly.Msg.IFRAME_DELETE);  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['ajax_get'] = {
  init: function () {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.AJAX);
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.AJAX_ID); 
  this.appendValueInput("url_")
      .setCheck(null)
      .appendField(Blockly.Msg.AJAX_URL); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.AJAX_TYPE)
      .appendField(new Blockly.FieldDropdown([["GET","GET"], ["POST","POST"], ["DELETE","DELETE"]]), "type_"); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.AJAX_DATATYPE)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_TEXT_SHOW,"text"],["html","html"], ["xml","xml"], ["script","script"], ["json","json"], ["jsonp","jsonp"]]), "datatype_"); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.AJAX_ASYNC)
      .appendField(new Blockly.FieldDropdown([["false","false"], ["true","true"]]), "async_"); 
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['ajax_getdata'] = {
  init: function () {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.AJAX);
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.AJAX_ID);
  this.appendDummyInput()   
      .appendField(Blockly.Msg.AJAX_GETDATA);
  this.appendDummyInput()  
      .appendField(Blockly.Msg.AJAX_FORMAT)
      .appendField(new Blockly.FieldDropdown([["　",""], ["JSON to String","JSON to String"], ["XML to String","XML to String"]]), "format_"); 
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['ajax_getdata_json'] = {
  init: function () {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.AJAX);
  this.appendValueInput("json_")
      .setCheck(null) 
      .appendField(Blockly.Msg.AJAX_DATA);
  this.appendValueInput("index_")
      .setCheck("Number") 
      .appendField(Blockly.Msg.AJAX_INDEX);	  
  this.appendValueInput("fieldname_")
      .setCheck("String") 
      .appendField(Blockly.Msg.AJAX_FIELDNAME);
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['ajax_getdata_json_count'] = {
  init: function () {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.AJAX);
  this.appendValueInput("json_")
      .setCheck(null) 
      .appendField(Blockly.Msg.AJAX_DATA);
  this.appendDummyInput()   	  
      .appendField(Blockly.Msg.AJAX_DATA_COUNT);	  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['ajax_cleardata'] = {
  init: function () {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.AJAX);
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.AJAX_ID);
  this.appendDummyInput()   
      .appendField(Blockly.Msg.AJAX_CLEARDATA);
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['a_create'] = {
  init: function() {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.A_CREATE);
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ID);    
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP);   
  this.appendValueInput("width_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WIDTH);
  this.appendValueInput("height_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HEIGHT);
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TABLE_BORDERSTYLE)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_SOLID,"solid"], [Blockly.Msg.PROPERTY_DASHED,"dashed"], [Blockly.Msg.PROPERTY_DOUBLE,"double"], [Blockly.Msg.PROPERTY_DOTTED,"dotted"], [Blockly.Msg.PROPERTY_GROOVE,"groove"], [Blockly.Msg.PROPERTY_RIDGE,"ridge"], [Blockly.Msg.PROPERTY_INSET,"inset"], [Blockly.Msg.PROPERTY_OUTSET,"outset"],  [Blockly.Msg.PROPERTY_NONE,"none"], [Blockly.Msg.PROPERTY_HIDDEN,"hidden"]]), "borderstyle_");  
  this.appendValueInput("borderwidth_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_BORDERWIDTH);       
  this.appendValueInput("bordercolor_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_BORDERCOLOR);         
  this.appendValueInput("background_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null)
      .appendField(Blockly.Msg.BACKCOLOR);
  this.appendValueInput("color_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null)
      .appendField(Blockly.Msg.FONTCOLOR);
  this.appendValueInput("fontsize_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck("Number")
      .appendField(Blockly.Msg.FONTSIZE);
  this.appendValueInput("opacity_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);
  this.appendValueInput("innerHTML_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DIV_VALUE); 
  this.appendValueInput("href_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.A_HREF); 
  this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.A_TARGET)
      .appendField(new Blockly.FieldDropdown([["_blank","_blank"], ["_parent","_parent"], ["_self","_self"], ["_top","_top"]]), "target_"); 
  this.appendValueInput("zindex_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ZINDEX);   
  this.appendValueInput("display_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DISPLAY); 
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['a_set'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.A_ID);      
  this.appendDummyInput()  
      .appendField(Blockly.Msg.A_SET) 
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.WIDTH,"width"], [Blockly.Msg.HEIGHT,"height"], [Blockly.Msg.PROPERTY_BORDERSTYLE,"borderstyle"], [Blockly.Msg.PROPERTY_BORDERWIDTH,"borderwidth"], [Blockly.Msg.PROPERTY_BORDERCOLOR,"bordercolor"], [Blockly.Msg.PROPERTY_BORDERRADIUS,"borderradius"], [Blockly.Msg.PROPERTY_BACKGROUND,"background"], [Blockly.Msg.PROPERTY_COLOR,"color"], [Blockly.Msg.PROPERTY_FONTSIZE,"fontsize"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_HREF,"href"], [Blockly.Msg.PROPERTY_TARGET,"target"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.PROPERTY_STYLE,"style"]]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['a_get'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.A_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.A_GET)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.WIDTH,"width"], [Blockly.Msg.HEIGHT,"height"], [Blockly.Msg.PROPERTY_BORDERSTYLE,"borderstyle"], [Blockly.Msg.PROPERTY_BORDERWIDTH,"borderwidth"], [Blockly.Msg.PROPERTY_BORDERCOLOR,"bordercolor"], [Blockly.Msg.PROPERTY_BACKGROUND,"background"], [Blockly.Msg.PROPERTY_COLOR,"color"], [Blockly.Msg.PROPERTY_FONTSIZE,"fontsize"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_HREF,"href"], [Blockly.Msg.PROPERTY_TARGET,"target"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.ID,"id"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['a_delete'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.A_ID); 
  this.appendDummyInput()   
      .appendField(Blockly.Msg.A_DELETE);  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['radio_create'] = {
  init: function() {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.RADIO_CREATE);
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ID);    
  this.appendValueInput("name_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.PROPERTY_NAME);  
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP);
  this.appendValueInput("size_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.SIZE);
  this.appendValueInput("value_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.PROPERTY_VALUE);
  this.appendValueInput("checked_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.PROPERTY_CHECKED);
  this.appendValueInput("opacity_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);
  this.appendValueInput("zindex_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ZINDEX);   
  this.appendValueInput("display_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DISPLAY); 
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['radio_set'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.RADIO_ID);      
  this.appendDummyInput()  
      .appendField(Blockly.Msg.RADIO_SET) 
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.SIZE,"size"], [Blockly.Msg.PROPERTY_VALUE,"value"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_CHECKED,"checked"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.PROPERTY_STYLE,"style"], [Blockly.Msg.PROPERTY_NAME,"name"]]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['radio_get'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.RADIO_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.RADIO_GET)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.SIZE,"size"], [Blockly.Msg.PROPERTY_VALUE,"value"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_CHECKED,"checked"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.ID,"id"], [Blockly.Msg.PROPERTY_NAME,"name"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['radio_name_get'] = {
  init: function () {
  this.appendValueInput("name_")
      .setCheck(null)
	  .appendField(Blockly.Msg.ELEMENT_RADIO)
	  .appendField(Blockly.Msg.PROPERTY_NAME_GET)
      .appendField(Blockly.Msg.PROPERTY_NAME);  
  this.appendDummyInput()   
      .appendField(Blockly.Msg.VALUE); 
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};


Blockly.Blocks['radio_delete'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.RADIO_ID); 
  this.appendDummyInput()   
      .appendField(Blockly.Msg.RADIO_DELETE);  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['radio_onclick_do'] = {
  init: function () {
  this.appendValueInput("id_")
    .setCheck(null)
    .appendField(Blockly.Msg.RADIO_ID);
  this.appendDummyInput()   
    .appendField(Blockly.Msg.RADIO_ONCLICK);
  this.setInputsInline(true);
  this.appendStatementInput("do_");
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(220);
  }
};


Blockly.Blocks['checkbox_create'] = {
  init: function() {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.CHECKBOX_CREATE);
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ID);
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP);
  this.appendValueInput("size_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.SIZE);
  this.appendValueInput("value_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.PROPERTY_VALUE);
  this.appendValueInput("checked_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.PROPERTY_CHECKED);
  this.appendValueInput("opacity_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);
  this.appendValueInput("zindex_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ZINDEX);   
  this.appendValueInput("display_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DISPLAY); 
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['checkbox_set'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.CHECKBOX_ID);      
  this.appendDummyInput()  
      .appendField(Blockly.Msg.CHECKBOX_SET) 
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.SIZE,"size"], [Blockly.Msg.PROPERTY_VALUE,"value"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_CHECKED,"checked"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.PROPERTY_STYLE,"style"], [Blockly.Msg.PROPERTY_NAME,"name"]]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['checkbox_get'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.CHECKBOX_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.CHECKBOX_GET)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.SIZE,"size"], [Blockly.Msg.PROPERTY_VALUE,"value"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_CHECKED,"checked"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.ID,"id"], [Blockly.Msg.PROPERTY_NAME,"name"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['checkbox_delete'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.CHECKBOX_ID); 
  this.appendDummyInput()   
      .appendField(Blockly.Msg.CHECKBOX_DELETE);  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['checkbox_onclick_do'] = {
  init: function () {
  this.appendValueInput("id_")
    .setCheck(null)
    .appendField(Blockly.Msg.CHECKBOX_ID);
  this.appendDummyInput()   
    .appendField(Blockly.Msg.CHECKBOX_ONCLICK);
  this.setInputsInline(true);
  this.appendStatementInput("do_");
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(220);
  }
};

Blockly.Blocks['textarea_create'] = {
  init: function() {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.TEXTAREA_CREATE);
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ID);
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP);
  this.appendValueInput("cols_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.PROPERTY_COLUMNS);
  this.appendValueInput("rows_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.PROPERTY_ROWS);
  this.appendValueInput("value_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.PROPERTY_VALUE);
  this.appendValueInput("opacity_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);
  this.appendValueInput("zindex_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ZINDEX);   
  this.appendValueInput("display_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DISPLAY); 
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['textarea_set'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.TEXTAREA_ID);      
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TEXTAREA_SET) 
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.PROPERTY_COLUMNS,"cols"], [Blockly.Msg.PROPERTY_ROWS,"rows"], [Blockly.Msg.PROPERTY_VALUE,"value"], [Blockly.Msg.PROPERTY_READONLY,"readonly"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.PROPERTY_STYLE,"style"], [Blockly.Msg.PROPERTY_NAME,"name"]]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['textarea_get'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.TEXTAREA_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TEXTAREA_GET)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.PROPERTY_COLUMNS,"cols"], [Blockly.Msg.PROPERTY_ROWS,"rows"], [Blockly.Msg.PROPERTY_VALUE,"value"], [Blockly.Msg.PROPERTY_READONLY,"readonly"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.ID,"id"], [Blockly.Msg.PROPERTY_NAME,"name"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['textarea_delete'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.TEXTAREA_ID); 
  this.appendDummyInput()   
      .appendField(Blockly.Msg.TEXTAREA_DELETE);  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['textarea_onchange_do'] = {
  init: function () {
  this.appendValueInput("id_")
    .setCheck(null)
    .appendField(Blockly.Msg.TEXTAREA_ID);
  this.appendDummyInput()   
    .appendField(Blockly.Msg.TEXTAREA_ONCHANGE);
  this.setInputsInline(true);
  this.appendStatementInput("do_");
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(220);
  }
};

Blockly.Blocks['number_create'] = {
  init: function() {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.NUMBER_CREATE);
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ID);    
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP);  
  this.appendValueInput("width_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WIDTH);
  this.appendValueInput("height_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HEIGHT);
  this.appendValueInput("fontsize_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck("Number")
      .appendField(Blockly.Msg.FONTSIZE);
  this.appendValueInput("min_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.MIN); 
  this.appendValueInput("max_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.MAX); 
  this.appendValueInput("step_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.STEP); 
  this.appendValueInput("value_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.VALUE);   
  this.appendValueInput("opacity_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);
  this.appendValueInput("zindex_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ZINDEX);   
  this.appendValueInput("display_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DISPLAY); 
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['number_set'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.NUMBER_ID);      
  this.appendDummyInput()  
      .appendField(Blockly.Msg.NUMBER_SET) 
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.WIDTH,"width"], [Blockly.Msg.HEIGHT,"height"], [Blockly.Msg.PROPERTY_BACKGROUND,"background"], [Blockly.Msg.PROPERTY_COLOR,"color"], [Blockly.Msg.PROPERTY_FONTSIZE,"fontsize"], [Blockly.Msg.PROPERTY_MAX,"max"], [Blockly.Msg.PROPERTY_MIN,"min"], [Blockly.Msg.PROPERTY_STEP,"step"], [Blockly.Msg.PROPERTY_VALUE,"value"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.PROPERTY_STYLE,"style"], [Blockly.Msg.PROPERTY_NAME,"name"]]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['number_get'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.NUMBER_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.NUMBER_GET)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.WIDTH,"width"], [Blockly.Msg.PROPERTY_MAX,"max"], [Blockly.Msg.PROPERTY_MIN,"min"], [Blockly.Msg.PROPERTY_STEP,"step"], [Blockly.Msg.PROPERTY_VALUE,"value"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.ID,"id"], [Blockly.Msg.PROPERTY_NAME,"name"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['number_delete'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.NUMBER_ID); 
  this.appendDummyInput()   
      .appendField(Blockly.Msg.NUMBER_DELETE);  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['number_onchange_do'] = {
  init: function () {
  this.appendValueInput("id_")
    .setCheck(null)
    .appendField(Blockly.Msg.NUMBER_ID);
  this.appendDummyInput()   
    .appendField(Blockly.Msg.NUMBER_ONCHANGE);
  this.setInputsInline(true);
  this.appendStatementInput("do_");
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(220);
  }
};

Blockly.Blocks['date_create'] = {
  init: function() {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.DATE_CREATE);
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ID);    
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP);
  this.appendValueInput("min_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.MIN+"(YYYY-MM-DD)"); 
  this.appendValueInput("max_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.MAX+"(YYYY-MM-DD)");
  this.appendValueInput("value_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.VALUE+"(YYYY-MM-DD)");   
  this.appendValueInput("opacity_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);
  this.appendValueInput("zindex_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ZINDEX);   
  this.appendValueInput("display_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DISPLAY); 
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['date_set'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.DATE_ID);      
  this.appendDummyInput()  
      .appendField(Blockly.Msg.DATE_SET) 
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.PROPERTY_MAX,"max"], [Blockly.Msg.PROPERTY_MIN,"min"], [Blockly.Msg.PROPERTY_VALUE,"value"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.PROPERTY_STYLE,"style"], [Blockly.Msg.PROPERTY_NAME,"name"]]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['date_get'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.DATE_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.DATE_GET)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.PROPERTY_MAX,"max"], [Blockly.Msg.PROPERTY_MIN,"min"], [Blockly.Msg.PROPERTY_VALUE,"value"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.ID,"id"], [Blockly.Msg.PROPERTY_NAME,"name"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['date_delete'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.DATE_ID); 
  this.appendDummyInput()   
      .appendField(Blockly.Msg.DATE_DELETE);  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['date_onchange_do'] = {
  init: function () {
  this.appendValueInput("id_")
    .setCheck(null)
    .appendField(Blockly.Msg.DATE_ID);
  this.appendDummyInput()   
    .appendField(Blockly.Msg.DATE_ONCHANGE);
  this.setInputsInline(true);
  this.appendStatementInput("do_");
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(220);
  }
};

Blockly.Blocks['time_create'] = {
  init: function() {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.TIME_CREATE);
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ID);    
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP);
  this.appendValueInput("value_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.VALUE+"(HH:mm:ss)");   
  this.appendValueInput("opacity_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);
  this.appendValueInput("zindex_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ZINDEX);   
  this.appendValueInput("display_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DISPLAY); 
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['time_set'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.TIME_ID);      
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TIME_SET) 
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.PROPERTY_VALUE,"value"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.PROPERTY_STYLE,"style"], [Blockly.Msg.PROPERTY_NAME,"name"]]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['time_get'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.TIME_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TIME_GET)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.PROPERTY_VALUE,"value"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.ID,"id"], [Blockly.Msg.PROPERTY_NAME,"name"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['time_delete'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.TIME_ID); 
  this.appendDummyInput()   
      .appendField(Blockly.Msg.TIME_DELETE);  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['time_onchange_do'] = {
  init: function () {
  this.appendValueInput("id_")
    .setCheck(null)
    .appendField(Blockly.Msg.TIME_ID);
  this.appendDummyInput()   
    .appendField(Blockly.Msg.TIME_ONCHANGE);
  this.setInputsInline(true);
  this.appendStatementInput("do_");
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(220);
  }
};

Blockly.Blocks['datetime_create'] = {
  init: function() {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.DATETIME_CREATE);
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ID);    
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP);
  this.appendValueInput("value_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.VALUE+"(yyyy-mm-dd HH:mm)");   
  this.appendValueInput("opacity_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);
  this.appendValueInput("zindex_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ZINDEX);   
  this.appendValueInput("display_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DISPLAY); 
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['datetime_set'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.DATETIME_ID);      
  this.appendDummyInput()  
      .appendField(Blockly.Msg.DATETIME_SET) 
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.PROPERTY_VALUE,"value"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.PROPERTY_STYLE,"style"], [Blockly.Msg.PROPERTY_NAME,"name"]]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['datetime_get'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.DATETIME_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.DATETIME_GET)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.PROPERTY_VALUE,"value"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.ID,"id"], [Blockly.Msg.PROPERTY_NAME,"name"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['datetime_delete'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.DATETIME_ID); 
  this.appendDummyInput()   
      .appendField(Blockly.Msg.DATETIME_DELETE);  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['datetime_onchange_do'] = {
  init: function () {
  this.appendValueInput("id_")
    .setCheck(null)
    .appendField(Blockly.Msg.DATETIME_ID);
  this.appendDummyInput()   
    .appendField(Blockly.Msg.DATETIME_ONCHANGE);
  this.setInputsInline(true);
  this.appendStatementInput("do_");
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(220);
  }
};

Blockly.Blocks['progress_create'] = {
  init: function() {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.PROGRESS_CREATE);
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ID);    
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP);
  this.appendValueInput("max_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.MAX); 
  this.appendValueInput("value_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.VALUE);   
  this.appendValueInput("opacity_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);
  this.appendValueInput("zindex_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ZINDEX);   
  this.appendValueInput("display_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DISPLAY); 
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['progress_set'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.PROGRESS_ID);      
  this.appendDummyInput()  
      .appendField(Blockly.Msg.PROGRESS_SET) 
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.PROPERTY_MAX,"max"], [Blockly.Msg.PROPERTY_VALUE,"value"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.PROPERTY_STYLE,"style"], [Blockly.Msg.PROPERTY_NAME,"name"]]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['progress_get'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.PROGRESS_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.PROGRESS_GET)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.PROPERTY_MAX,"max"], [Blockly.Msg.PROPERTY_VALUE,"value"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.ID,"id"], [Blockly.Msg.PROPERTY_NAME,"name"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['progress_delete'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.PROGRESS_ID); 
  this.appendDummyInput()   
      .appendField(Blockly.Msg.PROGRESS_DELETE);  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['password_create'] = {
  init: function() {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.PASSWORD_CREATE);
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ID); 
  this.appendValueInput("width_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WIDTH);
  this.appendValueInput("height_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HEIGHT);  
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP);   
  this.appendValueInput("maxlength_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.MAXLENGTH);
  this.appendValueInput("value_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.VALUE); 
  this.appendValueInput("background_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null)
      .appendField(Blockly.Msg.BACKCOLOR);
  this.appendValueInput("color_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null)
      .appendField(Blockly.Msg.FONTCOLOR);
  this.appendValueInput("fontsize_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck("Number")
      .appendField(Blockly.Msg.FONTSIZE);
  this.appendValueInput("opacity_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);
  this.appendValueInput("zindex_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ZINDEX);   
  this.appendValueInput("display_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DISPLAY); 
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['password_set'] = {
  init: function() {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.PASSWORD);
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.PASSWORD_ID);      
  this.appendDummyInput()  
      .appendField(Blockly.Msg.PASSWORD_SET) 
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.WIDTH,"width"], [Blockly.Msg.HEIGHT,"height"], [Blockly.Msg.PROPERTY_BACKGROUND,"background"], [Blockly.Msg.PROPERTY_COLOR,"color"], [Blockly.Msg.PROPERTY_FONTSIZE,"fontsize"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.MAXLENGTH,"maxlength"], [Blockly.Msg.VALUE,"value"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.PROPERTY_STYLE,"style"], [Blockly.Msg.PROPERTY_NAME,"name"]]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['password_get'] = {
  init: function () {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.PASSWORD);
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.PASSWORD_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.PASSWORD_GET)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.WIDTH,"width"], [Blockly.Msg.HEIGHT,"height"], [Blockly.Msg.PROPERTY_BACKGROUND,"background"], [Blockly.Msg.PROPERTY_COLOR,"color"], [Blockly.Msg.PROPERTY_FONTSIZE,"fontsize"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.MAXLENGTH,"maxlength"], [Blockly.Msg.VALUE,"value"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.ID,"id"], [Blockly.Msg.PROPERTY_NAME,"name"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['password_delete'] = {
  init: function () {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.PASSWORD);
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.PASSWORD_ID); 
  this.appendDummyInput()   
      .appendField(Blockly.Msg.PASSWORD_DELETE);  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};


Blockly.Blocks['form_create'] = {
  init: function() {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.FORM_CREATE);
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ID);
  this.appendValueInput("action_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.FORM_ACTION); 
  this.appendValueInput("target_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.FORM_TARGET);
  this.appendDummyInput()  
      .appendField(Blockly.Msg.FORM_METHOD)
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_GET,"get"], [Blockly.Msg.PROPERTY_POST,"post"]]), "method_");
  this.appendDummyInput()  
      .appendField(Blockly.Msg.FORM_ENCTYPE) 
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_APPLICATION,"application/x-www-form-urlencoded"], [Blockly.Msg.PROPERTY_MULTIPART,"multipart/form-data"], [Blockly.Msg.PROPERTY_TEXT_SHOW,"text/plain"]]), "enctype_");
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['form_set'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.FORM_ID);      
  this.appendDummyInput()  
      .appendField(Blockly.Msg.FORM_SET) 
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.FORM_ACTION,"action"], [Blockly.Msg.FORM_TARGET,"target"]]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['form_get'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.FORM_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.FORM_GET)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.FORM_ACTION,"action"], [Blockly.Msg.FORM_TARGET,"target"], [Blockly.Msg.ID,"id"], [Blockly.Msg.PROPERTY_NAME,"name"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['form_delete'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.FORM_ID); 
  this.appendDummyInput()   
      .appendField(Blockly.Msg.FORM_DELETE);  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['form_insert'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.FORM_ID);
  this.appendDummyInput()   
      .appendField(Blockly.Msg.FORM_INSERT);
 this.appendDummyInput()  
      .appendField(Blockly.Msg.ELEMENT)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ELEMENT_SELECT,"select"],[Blockly.Msg.ELEMENT_RANGE,"range"],[Blockly.Msg.ELEMENT_TEXT,"text"],[Blockly.Msg.ELEMENT_RADIO,"radio"],[Blockly.Msg.ELEMENT_CHECKBOX,"checkbox"],[Blockly.Msg.ELEMENT_TEXTAREA,"textarea"],[Blockly.Msg.ELEMENT_NUMBER,"number"],[Blockly.Msg.ELEMENT_DATE,"date"],[Blockly.Msg.ELEMENT_TIME,"time"],[Blockly.Msg.ELEMENT_DATETIME,"datetime"],[Blockly.Msg.ELEMENT_PROGRESS,"progress"],[Blockly.Msg.ELEMENT_PASSWORD,"password"],[Blockly.Msg.ELEMENT_COLOR,"color"]]), "element_");
  this.appendValueInput("elementid_")
      .setCheck(null)
      .appendField(Blockly.Msg.ELEMENT_ID);
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['form_submit'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.FORM_ID);
  this.appendDummyInput()   
      .appendField(Blockly.Msg.FORM_SUBMIT);
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['head_add_viewport'] = {
  init: function () {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.VIEWPORT);
  this.appendValueInput("initialscale_")
      .setCheck(null)
      .appendField(Blockly.Msg.INITIALSCALE);
  this.appendValueInput("minimumscale_")
      .setCheck(null)
      .appendField(Blockly.Msg.MINIMUMSCALE);
  this.appendValueInput("maximumscale_")
      .setCheck(null)
      .appendField(Blockly.Msg.MAXIMUMSCALE);
  this.appendDummyInput()  
      .appendField(Blockly.Msg.SCALABLE)
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_YES,"yes"], [Blockly.Msg.PROPERTY_NO,"no"]]), "scalable_");
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['video_create'] = {
  init: function() {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.VIDEO_CREATE);
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ID);    
  this.appendValueInput("width_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WIDTH);
  this.appendValueInput("height_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HEIGHT);  
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP);
  this.appendDummyInput()  
      .appendField(Blockly.Msg.PROPERTY_CAM)
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_YES,"true"], [Blockly.Msg.PROPERTY_NO,"false"]]), "cam_");  
  this.appendValueInput("src_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.PROPERTY_SRC); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.PROPERTY_AUTOPLAY)
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_NO,"false"], [Blockly.Msg.PROPERTY_YES,"true"]]), "autoplay_");
  this.appendDummyInput()  
      .appendField(Blockly.Msg.PROPERTY_LOOP)
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_NO,"false"], [Blockly.Msg.PROPERTY_YES,"true"]]), "loop_");
  this.appendDummyInput()  
      .appendField(Blockly.Msg.PROPERTY_MUTED)
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_NO,"false"], [Blockly.Msg.PROPERTY_YES,"true"]]), "muted_");
  this.appendDummyInput()  
      .appendField(Blockly.Msg.PROPERTY_CONTROLS)
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_YES,"true"], [Blockly.Msg.PROPERTY_NO,"false"]]), "controls_");
  this.appendDummyInput()  
      .appendField(Blockly.Msg.PROPERTY_PRELOAD)
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_YES,"true"], [Blockly.Msg.PROPERTY_NO,"false"]]), "preload_");
  this.appendValueInput("opacity_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);
  this.appendValueInput("zindex_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ZINDEX);   
  this.appendValueInput("display_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DISPLAY); 
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['video_set'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.VIDEO_ID);      
  this.appendDummyInput()  
      .appendField(Blockly.Msg.VIDEO_SET) 
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.WIDTH,"width"], [Blockly.Msg.HEIGHT,"height"], [Blockly.Msg.PROPERTY_SRC,"src"], [Blockly.Msg.PROPERTY_AUTOPLAY,"autoplay"], [Blockly.Msg.PROPERTY_LOOP,"loop"], [Blockly.Msg.PROPERTY_MUTED,"muted"], [Blockly.Msg.PROPERTY_CONTROLS,"controls"], [Blockly.Msg.PROPERTY_PRELOAD,"preload"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.PROPERTY_STYLE,"style"], [Blockly.Msg.PROPERTY_NAME,"name"]]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['video_get'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.VIDEO_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.VIDEO_GET)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.WIDTH,"width"], [Blockly.Msg.HEIGHT,"height"], [Blockly.Msg.PROPERTY_SRC,"src"], [Blockly.Msg.PROPERTY_AUTOPLAY,"autoplay"], [Blockly.Msg.PROPERTY_LOOP,"loop"], [Blockly.Msg.PROPERTY_MUTED,"muted"], [Blockly.Msg.PROPERTY_CONTROLS,"controls"], [Blockly.Msg.PROPERTY_PRELOAD,"preload"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.PROPERTY_STYLE,"style"], [Blockly.Msg.ID,"id"], [Blockly.Msg.PROPERTY_NAME,"name"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['video_delete'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.VIDEO_ID); 
  this.appendDummyInput()   
      .appendField(Blockly.Msg.VIDEO_DELETE);  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['video_base64'] = {
  init: function () {
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.VIDEO,"video"], [Blockly.Msg.CANVAS,"canvas"], [Blockly.Msg.IMAGE,"image"]]), "source_");
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.VIDEO_BASE64);
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['video_base64_spreadsheet'] = {
  init: function () {
  this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)		  
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.VIDEO,"video"], [Blockly.Msg.CANVAS,"canvas"], [Blockly.Msg.IMAGE,"image"]]), "source_");
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg.ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.VIDEO_BASE64_SPREADSHEET);
  this.appendValueInput("spreadsheeturl_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg.VIDEO_BASE64_SPREADSHEETURL);
  this.appendValueInput("spreadsheetname_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg.VIDEO_BASE64_SPREADSHEETNAME);
  this.appendValueInput("column_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg.VIDEO_BASE64_COLUMN);
  this.appendValueInput("row_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg.VIDEO_BASE64_ROW);
  this.appendValueInput("height_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg.TABLE_TD_HEIGHT);	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.VIDEO_BASE64_FORMAT)
	  .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(new Blockly.FieldDropdown([["image","image"], ["base64","string"]]), "format_");	  
  this.appendValueInput("spreadsheet_script_")
      .setCheck("String")	  
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.VIDEO_BASE64_SCRIPTURL); 	  
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['video_base64_drive'] = {
  init: function () {
  this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)		  
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.VIDEO,"video"], [Blockly.Msg.CANVAS,"canvas"], [Blockly.Msg.IMAGE,"image"]]), "source_");
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg.ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.VIDEO_BASE64_DRIVE);
  this.appendValueInput("foldername_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg.VIDEO_BASE64_FOLDERNAME);	  
  this.appendValueInput("filename_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg.VIDEO_BASE64_FILENAME);	  	  
  this.appendValueInput("drive_script_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.VIDEO_BASE64_SCRIPTURL);
  this.setHelpUrl("https://github.com/fustyles/webduino/blob/gs/WebduinoDrive.gs");
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['video_base64_email'] = {
  init: function () {
  this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)		  
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.VIDEO,"video"], [Blockly.Msg.CANVAS,"canvas"], [Blockly.Msg.IMAGE,"image"]]), "source_");
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg.ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.VIDEO_BASE64_EMAIL);
  this.appendValueInput("recipient_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg.VIDEO_BASE64_RECIPIENT);		  
  this.appendValueInput("subject_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg.VIDEO_BASE64_SUBJECT);		  
  this.appendValueInput("email_script_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)	
      .appendField(Blockly.Msg.VIDEO_BASE64_SCRIPTURL); 
  this.setHelpUrl("https://github.com/fustyles/webduino/blob/gs/SendCapturedImageByGmail_doPost.gs");
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['custom_comment'] = {
  init: function() {
  this.appendValueInput("text")
      .setCheck(null)
      .appendField(Blockly.Msg.CUSTOM_COMMENT_SHOW); 
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  }
};

Blockly.Blocks['variable_board'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.VARIABLE_BOARD);
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['servermodule_javascript'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_JAVASCRIPT_SHOW);
    this.appendStatementInput("js")
        .setCheck(null);
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['choice_color'] = {
  init: function() {	
	this.appendDummyInput()
		.appendField(new Blockly.FieldColour("#FF0000"),"RGB");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(110);  
  }
};

Blockly.Blocks['text_br'] = {
  init: function() {	
    this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_BR_SHOW);
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(110);  
  }
};

Blockly.Blocks['custom_style'] = {
  init: function() {	
  this.appendDummyInput()
	  .appendField(Blockly.Msg.CUSTOM_STYLE_SHOW);
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ELEMENT_WINDOW,"window"],[Blockly.Msg.ELEMENT_DOCUMENT,"document"],[Blockly.Msg.ELEMENT_TABLE,"table"],[Blockly.Msg.ELEMENT_IMAGE,"image"],[Blockly.Msg.ELEMENT_CANVAS,"canvas"],[Blockly.Msg.ELEMENT_BUTTON,"button"],[Blockly.Msg.ELEMENT_COLOR,"color"],[Blockly.Msg.ELEMENT_SELECT,"select"],[Blockly.Msg.ELEMENT_RANGE,"range"],[Blockly.Msg.ELEMENT_TEXT,"text"],[Blockly.Msg.ELEMENT_DIV,"div"],[Blockly.Msg.ELEMENT_IFRAME,"iframe"],[Blockly.Msg.ELEMENT_A,"a"],[Blockly.Msg.ELEMENT_RADIO,"radio"],[Blockly.Msg.ELEMENT_CHECKBOX,"checkbox"],[Blockly.Msg.ELEMENT_TEXTAREA,"textarea"],[Blockly.Msg.ELEMENT_NUMBER,"number"],[Blockly.Msg.ELEMENT_DATE,"date"],[Blockly.Msg.ELEMENT_TIME,"time"],[Blockly.Msg.ELEMENT_DATETIME,"datetime"],[Blockly.Msg.ELEMENT_PROGRESS,"progress"],[Blockly.Msg.ELEMENT_PASSWORD,"password"]]), "element");
  this.appendValueInput("id")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg.ID);   
  this.appendDummyInput()
	  .appendField(".")  
      .appendField(new Blockly.FieldDropdown([["style","style"],["　",""]]), "style");    
  this.appendValueInput("property")
      .setCheck("String")
	  .appendField(".");
  this.appendValueInput("val")
      .setCheck(null)
	  .appendField(" = ");	  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(110);   
  }
};

Blockly.Blocks['font_text'] = {
  init: function() {	
  this.appendDummyInput()
	  .appendField(Blockly.Msg.FONT_TEXT_SHOW);
  this.appendValueInput("size_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)	  
	  .appendField(Blockly.Msg.FONT_SIZE_SHOW);
  this.appendValueInput("color_")
      .setCheck(null)
	  .appendField(Blockly.Msg.PROPERTY_COLOR);
  this.appendValueInput("face_")
      .setCheck("String")
	  .appendField(Blockly.Msg.FONT_FACE_SHOW);	  
  this.appendValueInput("text_")
      .setCheck(null)
	  .appendField(Blockly.Msg.PROPERTY_TEXT_SHOW);	  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200); 
  }
};

Blockly.Blocks['font_b'] = {
  init: function() {	
  this.appendDummyInput()
	  .appendField(Blockly.Msg.FONT_B_SHOW);
  this.appendValueInput("text_")
      .setCheck(null);	  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);  
  }
};

Blockly.Blocks['font_i'] = {
  init: function() {	
  this.appendDummyInput()
	  .appendField(Blockly.Msg.FONT_I_SHOW);
  this.appendValueInput("text_")
      .setCheck(null); 
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200); 
  }
};

Blockly.Blocks['font_u'] = {
  init: function() {	
  this.appendDummyInput()
	  .appendField(Blockly.Msg.FONT_U_SHOW);
  this.appendValueInput("text_")
      .setCheck(null); 
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['font_sup'] = {
  init: function() {	
  this.appendDummyInput()
	  .appendField(Blockly.Msg.FONT_SPU_SHOW);
  this.appendValueInput("text_")
      .setCheck(null);  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200); 
  }
};

Blockly.Blocks['font_sub'] = {
  init: function() {	
  this.appendDummyInput()
	  .appendField(Blockly.Msg.FONT_SBU_SHOW);
  this.appendValueInput("text_")
      .setCheck(null);  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);  
  }
};

Blockly.Blocks['font_em'] = {
  init: function() {	
  this.appendDummyInput()
	  .appendField(Blockly.Msg.FONT_EM_SHOW);
  this.appendValueInput("text_")
      .setCheck(null);  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);  
  }
};

Blockly.Blocks['font_strong'] = {
  init: function() {	
  this.appendDummyInput()
	  .appendField(Blockly.Msg.FONT_STRONG_SHOW);
  this.appendValueInput("text_")
      .setCheck(null);  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);  
  }
};

Blockly.Blocks['font_code'] = {
  init: function() {	
  this.appendDummyInput()
	  .appendField(Blockly.Msg.FONT_CODE_SHOW);
  this.appendValueInput("text_")
      .setCheck(null);  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200); 
  }
};

Blockly.Blocks['location'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.LOCATION_SHOW)
        .appendField(new Blockly.FieldDropdown([
          [Blockly.Msg.LOCATION_HOSTURL_SHOW,"hosturl"],	
          [Blockly.Msg.LOCATION_HOST_SHOW,"host"],
          [Blockly.Msg.LOCATION_HOSTNAME_SHOW,"hostname"],    
          [Blockly.Msg.LOCATION_HREF_SHOW,"href"],
          [Blockly.Msg.LOCATION_PATHNAME_SHOW,"pathname"],    
          [Blockly.Msg.LOCATION_PORT_SHOW,"port"],
          [Blockly.Msg.LOCATION_PROTOCAL_SHOW,"protocol"],    
          [Blockly.Msg.LOCATION_SEARCH_SHOW,"search"],
          [Blockly.Msg.LOCATION_HASH_SHOW,"hash"]		  
        ]), "value_property");
	this.setInputsInline(true);
	this.setOutput(true, null); 
	this.setColour(200); 
  }  
};
Blockly.Blocks.esp32_button_pin={
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg.ESP32_BUTTON_PIN);
		this.appendValueInput("PINA")
			.setCheck("Number")
			.appendField(Blockly.Msg.ESP32_BUTTON_PIN_A);
		this.appendValueInput("PINB")
			.setCheck("Number")
			.appendField(Blockly.Msg.ESP32_BUTTON_PIN_B);
		this.setInputsInline(true);
		this.setPreviousStatement(true,null);
		this.setNextStatement(true,null);
		this.setColour(80);		
	}
};

Blockly.Blocks.esp32_button={
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg.ESP32_BUTTON)
			.appendField(new Blockly.FieldDropdown([["A","A"],["B","B"]]),"AB_BUTTON");
		this.appendDummyInput()
			.appendField(Blockly.Msg.ESP32_BUTTON_CHECK);
		this.setInputsInline(true);
		this.setOutput(true);
		this.setColour(80);			
	}
};

Blockly.Blocks.esp32_lum_pin={
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg.ESP32_LUM_PIN);
		this.appendValueInput("l")
			.setCheck("Number")
			.appendField(Blockly.Msg.ESP32_LUM_PIN_LEFT);
		this.appendValueInput("r")
			.setCheck("Number")
			.appendField(Blockly.Msg.ESP32_LUM_PIN_RIGHT);
		this.setInputsInline(true);
		this.setPreviousStatement(true,null);
		this.setNextStatement(true,null);
		this.setColour(140);			
	}
};

Blockly.Blocks.esp32_lum={
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg.ESP32_LUM)
			.appendField(new Blockly.FieldDropdown([[Blockly.Msg.ESP32_LUM_PIN_LEFT,"l"],[Blockly.Msg.ESP32_LUM_PIN_RIGHT,"r"]]),"side");
		this.setInputsInline(true);
		this.setOutput(true);
		this.setColour(140);			
	}
};

Blockly.Blocks.esp32_temperature_pin={
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg.ESP32_TEMPERATURE_PIN);
		this.appendValueInput("pin")
			.setCheck("Number");			
		this.setInputsInline(true);
		this.setPreviousStatement(true,null);
		this.setNextStatement(true,null);
		this.setColour(200);			
	}
};

Blockly.Blocks.esp32_temperature={
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg.ESP32_TEMPERATURE);
		this.setInputsInline(true);
		this.setOutput(true);
		this.setColour(200);			
	}
};

Blockly.Blocks.esp32_buzzer={
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg.ESP32_BUZZER_PIN);
		this.appendValueInput("pin")
			.setCheck("Number");
		this.appendDummyInput()
			.appendField(Blockly.Msg.ESP32_BUZZER_FREQUENCY)
			.appendField(new Blockly.FieldDropdown([
				["C 3 [131]","131"],
				["C# 3 [139]","139"],
				["D 3 [147]","147"],
				["D# 3 [156]","156"],
				["E 3 [165]","165"],
				["F 3 [175]","175"],
				["F# 3 [185]","185"],
				["G 3 [196]","196"],
				["G# 3 [208]","208"],
				["A 3 [220]","220"],
				["A# 3 [233]","233"],
				["B 3 [247]","247"],
				["C 4 [262]","262"],
				["C# 4 [277]","277"],
				["D 4 [294]","294"],
				["D# 4 [311]","311"],
				["E 4 [330]","330"],
				["F 4 [349]","349"],
				["F# 4 [370]","370"],
				["G 4 [392]","392"],
				["G# 4 [415]","415"],
				["A 4 [440]","440"],
				["A# 4 [466]","466"],
				["B 4 [494]","494"]
			]),"frequency");
		this.appendValueInput("delaytime")
			.setCheck("String")
			.appendField(Blockly.Msg.ESP32_BUZZER_DELAYTIME);			
		this.setInputsInline(true);
		this.setPreviousStatement(true,null);
		this.setNextStatement(true,null);
		this.setColour(260);			
	}
};

Blockly.Blocks.esp32_buzzer2={
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg.ESP32_BUZZER_PIN);
		this.appendValueInput("pin")
			.setCheck("Number");
		this.appendDummyInput()
			.appendField(Blockly.Msg.ESP32_BUZZER_FREQUENCY)
			.appendField(new Blockly.FieldDropdown([
				["C 5 [523]","523"],
				["C# 5 [554]","554"],
				["D 5 [587]","587"],
				["D# 5 [622]","622"],
				["E 5 [659]","659"],
				["F 5 [698]","698"],
				["F# 5 [740]","740"],
				["G 5 [784]","784"],
				["G# 5 [831]","831"],
				["A 5 [880]","880"],
				["A# 5 [932]","932"],
				["B 5 [988]","988"],			
				["C 6 [1047]","1047"],
				["C# 6 [1109]","1109"],
				["D 6 [1175]","1175"],
				["D# 6 [1245]","1245"],
				["E 6 [1319]","1319"],
				["F 6 [1397]","1397"],
				["F# 6 [1480]","1480"],
				["G 6 [1568]","1568"],
				["G# 6 [1661]","1661"],
				["A 6 [1760]","1760"],
				["A# 6 [1864]","1864"],
				["B 6 [1975]","1975"]
			]),"frequency");
		this.appendValueInput("delaytime")
			.setCheck("String")
			.appendField(Blockly.Msg.ESP32_BUZZER_DELAYTIME);			
		this.setInputsInline(true);
		this.setPreviousStatement(true,null);
		this.setNextStatement(true,null);
		this.setColour(260);			
	}
};

Blockly.Blocks.esp32_buzzer3={
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg.ESP32_BUZZER_PIN);
		this.appendValueInput("pin")
			.setCheck("Number");
		this.appendDummyInput()
			.appendField(Blockly.Msg.ESP32_BUZZER_FREQUENCY)
			.appendField(new Blockly.FieldDropdown([
				["C 7 [2093]","2093"],
				["C# 7 [2218]","2218"],
				["D 7 [2349]","2349"],
				["D# 7 [2489]","2489"],
				["E 7 [2637]","2637"],
				["F 7 [2794]","2794"],
				["F# 7 [2960]","2960"],
				["G 7 [3136]","3136"],
				["G# 7 [3322]","3322"],
				["A 7 [3520]","3520"],
				["A# 7 [3729]","3729"],
				["B 7 [3951]","3951"],
				["C 8 [4186]","4186"],
				["C# 8 [4435]","4435"],
				["D 8 [4699]","4699"],
				["D# 8 [4978]","4978"],
				["E 8 [5274]","5274"],
				["F 8 [5588]","5588"],
				["F# 8 [5920]","5920"],
				["G 8 [6272]","6272"],
				["G# 8 [6645]","6645"],
				["A 8 [7040]","7040"],
				["A# 8 [7459]","7459"],
				["B 8 [7902]","7902"]
			]),"frequency");
		this.appendValueInput("delaytime")
			.setCheck("String")
			.appendField(Blockly.Msg.ESP32_BUZZER_DELAYTIME);			
		this.setInputsInline(true);
		this.setPreviousStatement(true,null);
		this.setNextStatement(true,null);
		this.setColour(260);			
	}
};

Blockly.Blocks.esp32_buzzer1={
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg.ESP32_BUZZER_PIN);
		this.appendValueInput("pin")
			.setCheck("Number");
		this.appendValueInput("frequency")
			.setCheck(null)
			.appendField(Blockly.Msg.ESP32_BUZZER_FREQUENCY);
		this.appendValueInput("delaytime")
			.setCheck(null)
			.appendField(Blockly.Msg.ESP32_BUZZER_DELAYTIME);			
		this.setInputsInline(true);
		this.setPreviousStatement(true,null);
		this.setNextStatement(true,null);
		this.setHelpUrl("https://zh.wikipedia.org/wiki/%E9%9F%B3%E9%AB%98");
		this.setColour(260);			
	}
};

Blockly.Blocks.esp32_buzzer_tone1={
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg.ESP32_BUZZER_FREQUENCY)
			.appendField(new Blockly.FieldDropdown([
				["C 3 [131]","131"],
				["C# 3 [139]","139"],
				["D 3 [147]","147"],
				["D# 3 [156]","156"],
				["E 3 [165]","165"],
				["F 3 [175]","175"],
				["F# 3 [185]","185"],
				["G 3 [196]","196"],
				["G# 3 [208]","208"],
				["A 3 [220]","220"],
				["A# 3 [233]","233"],
				["B 3 [247]","247"],
				["C 4 [262]","262"],
				["C# 4 [277]","277"],
				["D 4 [294]","294"],
				["D# 4 [311]","311"],
				["E 4 [330]","330"],
				["F 4 [349]","349"],
				["F# 4 [370]","370"],
				["G 4 [392]","392"],
				["G# 4 [415]","415"],
				["A 4 [440]","440"],
				["A# 4 [466]","466"],
				["B 4 [494]","494"]
			]),"frequency");
		this.setInputsInline(true);
		this.setOutput(true);
		this.setColour(320);			
	}
};

Blockly.Blocks.esp32_buzzer_tone2={
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg.ESP32_BUZZER_FREQUENCY)
			.appendField(new Blockly.FieldDropdown([
				["C 5 [523]","523"],
				["C# 5 [554]","554"],
				["D 5 [587]","587"],
				["D# 5 [622]","622"],
				["E 5 [659]","659"],
				["F 5 [698]","698"],
				["F# 5 [740]","740"],
				["G 5 [784]","784"],
				["G# 5 [831]","831"],
				["A 5 [880]","880"],
				["A# 5 [932]","932"],
				["B 5 [988]","988"],			
				["C 6 [1047]","1047"],
				["C# 6 [1109]","1109"],
				["D 6 [1175]","1175"],
				["D# 6 [1245]","1245"],
				["E 6 [1319]","1319"],
				["F 6 [1397]","1397"],
				["F# 6 [1480]","1480"],
				["G 6 [1568]","1568"],
				["G# 6 [1661]","1661"],
				["A 6 [1760]","1760"],
				["A# 6 [1864]","1864"],
				["B 6 [1975]","1975"]
			]),"frequency");
		this.setInputsInline(true);
		this.setOutput(true);
		this.setColour(320);			
	}
};

Blockly.Blocks.esp32_buzzer_tone3={
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg.ESP32_BUZZER_FREQUENCY)
			.appendField(new Blockly.FieldDropdown([
				["C 7 [2093]","2093"],
				["C# 7 [2218]","2218"],
				["D 7 [2349]","2349"],
				["D# 7 [2489]","2489"],
				["E 7 [2637]","2637"],
				["F 7 [2794]","2794"],
				["F# 7 [2960]","2960"],
				["G 7 [3136]","3136"],
				["G# 7 [3322]","3322"],
				["A 7 [3520]","3520"],
				["A# 7 [3729]","3729"],
				["B 7 [3951]","3951"],
				["C 8 [4186]","4186"],
				["C# 8 [4435]","4435"],
				["D 8 [4699]","4699"],
				["D# 8 [4978]","4978"],
				["E 8 [5274]","5274"],
				["F 8 [5588]","5588"],
				["F# 8 [5920]","5920"],
				["G 8 [6272]","6272"],
				["G# 8 [6645]","6645"],
				["A 8 [7040]","7040"],
				["A# 8 [7459]","7459"],
				["B 8 [7902]","7902"]
			]),"frequency");			
		this.setInputsInline(true);
		this.setOutput(true);
		this.setColour(320);		
	}
};


Blockly.Blocks.esp32_mpu9250_pin={
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg.ESP32_MPU9250_PIN);
		this.appendValueInput("sda")
			.setCheck("Number")
			.appendField(Blockly.Msg.ESP32_MPU9250_SDA);			
		this.appendValueInput("scl")
			.setCheck("Number")
			.appendField(Blockly.Msg.ESP32_MPU9250_SCL);
		this.appendDummyInput()
			.appendField(Blockly.Msg.ESP32_MPU9250_ADDRESS)		
		  	.appendField(new Blockly.FieldDropdown([
			["　",""],
			["0x68","0x68"],
			["0x69","0x69"]			
			]), "address");		
		this.setInputsInline(true);
		this.setPreviousStatement(true,null);
		this.setNextStatement(true,null);
		this.setColour(320);			
	}
};

Blockly.Blocks.esp32_mpu9250={
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg.ESP32_MPU9250);
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown([
				[Blockly.Msg.ESP32_MPU9250_ACCELX,"accelX"],
				[Blockly.Msg.ESP32_MPU9250_ACCELY,"accelY"],
				[Blockly.Msg.ESP32_MPU9250_ACCELZ,"accelZ"],
				[Blockly.Msg.ESP32_MPU9250_ACCELSQRT,"accelSqrt"],
				[Blockly.Msg.ESP32_MPU9250_GYROX,"gyroX"],
				[Blockly.Msg.ESP32_MPU9250_GYROY,"gyroY"],
				[Blockly.Msg.ESP32_MPU9250_GYROZ,"gyroZ"],
				[Blockly.Msg.ESP32_MPU9250_MAGX,"magX"],
				[Blockly.Msg.ESP32_MPU9250_MAGY,"magY"],	
				[Blockly.Msg.ESP32_MPU9250_MAGZ,"magZ"],
				[Blockly.Msg.ESP32_MPU9250_MAGHORIZDIRECTION,"magHorizDirection"]
			]),"mpu");		
		this.setInputsInline(true);
		this.setOutput(true);
		this.setHelpUrl("https://bit.webduino.io/site/en/docs/mpu9250.html");
		this.setColour(320);			
	}
};

Blockly.Blocks['BitMatrixLed_matrix_pin'] = {
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg.ESP32_MATRIX_PIN);
		this.appendValueInput("pin")
			.setCheck("Number");			
		this.appendValueInput("leds")
			.setCheck("Number")
			.appendField(Blockly.Msg.ESP32_MATRIX_LEDS);
		this.setInputsInline(true);
		this.setPreviousStatement(true,null);
		this.setNextStatement(true,null);
		this.setColour(300);			
	}
};

Blockly.Blocks['BitMatrixLed_matrix_brightness'] = {
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg.ESP32_MATRIX_BRIGHTNESS);
		this.appendValueInput("brightness")
			.setCheck("Number");
		this.setInputsInline(true);
		this.setPreviousStatement(true,null);
		this.setNextStatement(true,null);
		this.setColour(300);			
	}
};

Blockly.Blocks['BitMatrixLed_matrix_clear'] = {
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg.ESP32_MATRIX_CLEAR);
		this.setInputsInline(true);
		this.setPreviousStatement(true,null);
		this.setNextStatement(true,null);
		this.setColour(300);			
	}
};

Blockly.Blocks['BitMatrixLed_matrix'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(Blockly.Msg.ESP32_MATRIX);
	this.appendValueInput("RGB")
		.setCheck("String")
		.appendField(Blockly.Msg.ESP32_MATRIX_CHOICECOLOR);
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L01")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L06")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L11")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L16")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L21");
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L02")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L07")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L12")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L17")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L22");
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L03")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L08")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L13")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L18")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L23");
    this.appendDummyInput()	
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L04")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L09")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L14")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L19")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L24");
    this.appendDummyInput()	
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L05")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L10")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L15")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L20")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L25");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);	
  }
};

Blockly.Blocks['BitMatrixLed_matrix_reverse'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(Blockly.Msg.ESP32_MATRIX_REVERE);
	this.appendValueInput("RGB")
		.appendField(Blockly.Msg.ESP32_MATRIX_CHOICECOLOR)
		.setCheck("String");
	this.setInputsInline(true);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);	
  }
};

Blockly.Blocks['BitMatrixLed_matrix_color'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(Blockly.Msg.ESP32_MATRIX_COLOR);
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#000000"), 'L01')
        .appendField(new Blockly.FieldColour("#000000"), 'L06')
        .appendField(new Blockly.FieldColour("#000000"), 'L11')
        .appendField(new Blockly.FieldColour("#000000"), 'L16')
        .appendField(new Blockly.FieldColour("#000000"), 'L21')
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#000000"), 'L02')
        .appendField(new Blockly.FieldColour("#000000"), 'L07')
        .appendField(new Blockly.FieldColour("#000000"), 'L12')
        .appendField(new Blockly.FieldColour("#000000"), 'L17')
        .appendField(new Blockly.FieldColour("#000000"), 'L22')
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#000000"), 'L03')
        .appendField(new Blockly.FieldColour("#000000"), 'L08')
        .appendField(new Blockly.FieldColour("#000000"), 'L13')
        .appendField(new Blockly.FieldColour("#000000"), 'L18')
        .appendField(new Blockly.FieldColour("#000000"), 'L23')
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#000000"), 'L04')
        .appendField(new Blockly.FieldColour("#000000"), 'L09')
        .appendField(new Blockly.FieldColour("#000000"), 'L14')
        .appendField(new Blockly.FieldColour("#000000"), 'L19')
        .appendField(new Blockly.FieldColour("#000000"), 'L24')
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#000000"), 'L05')
        .appendField(new Blockly.FieldColour("#000000"), 'L10')
        .appendField(new Blockly.FieldColour("#000000"), 'L15')
        .appendField(new Blockly.FieldColour("#000000"), 'L20')
        .appendField(new Blockly.FieldColour("#000000"), 'L25')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);	
  }
};

Blockly.Blocks['BitMatrixLed_matrix_color_reverse'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(Blockly.Msg.ESP32_MATRIX_COLOR_REVERE);
	this.setInputsInline(true);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);	
  }
};

Blockly.Blocks['BitMatrixLed_matrix_rotate'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ESP32_MATRIX_ROTATE);
	  this.appendDummyInput()    
		  .appendField(new Blockly.FieldDropdown([
			[Blockly.Msg.ESP32_MATRIX_ROTATE_CLOCKWISE,"0"],
			[Blockly.Msg.ESP32_MATRIX_ROTATE_COUNTERCLOCKWISE,"1"]		  
	  ]), "direction");		
	this.setInputsInline(true);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);	
  }
};

Blockly.Blocks['BitMatrixLed_matrix_flip'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ESP32_MATRIX_FLIP);
	  this.appendDummyInput()    
		  .appendField(new Blockly.FieldDropdown([
			[Blockly.Msg.ESP32_MATRIX_ROTATE_VERTICALFLIP,"0"],
			[Blockly.Msg.ESP32_MATRIX_ROTATE_HORIZONTALFLIP,"1"]		  
	  ]), "direction");		
	this.setInputsInline(true);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);	
  }
};

Blockly.Blocks['BitMatrixLed_sample1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ESP32_SAMPLE)
        .appendField(new Blockly.FieldDropdown([
			["♥","0110011110011111111001100"],
			["♡","0110010010010011001001100"],			
			["↑","0010001000111110100000100"],
			["↓","0010000010111110001000100"],
			["←","0010000100101010111000100"],
			["→","0010001110101010010000100"],
			["↖","0000110010101001100011110"],
			["↙","1000001001001010001101111"],
			["↗","1111011000101001001000001"],
			["↘","0111100011001010100110000"],
			["▲","0000100111111110011100001"],
			["▼","1000011100111111110010000"],
			["◄","1111101110011100010000100"],
			["►","0010000100011100111011111"],
			[",","0000000000000100000100000"],
			["?","0100010100100111000001000"],
			["!","0000000000111010000000000"],
			[";","0000000000010100000100000"],
			[":","0000000000010100000000000"],
			["'","0000000100110000000000000"],
			["\\","0000100010001000100010000"],
			["/","1000001000001000001000001"],
			["#","0101011111010101111101010"],		
			["", "0000000000000000000000000"]
		]), "value_sample_");
	this.appendDummyInput()
		.appendField(Blockly.Msg.ESP32_MATRIX_CHOICECOLOR);		
	this.appendValueInput("RGB")
		.setCheck("String");
	this.setInputsInline(true);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);	
  }
};

Blockly.Blocks['BitMatrixLed_sample2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ESP32_SAMPLE)
        .appendField(new Blockly.FieldDropdown([
			["0","0000011111100011111100000"],
			["1","0000000001111110100100000"],
			["2","0000011101101011011100000"],
			["3","0000011111101011010100000"],
			["4","0000011111001001110000000"],
			["5","0000010111101011110100000"],
			["6","0000010111101011111100000"],
			["7","0000011111100001100000000"],
			["8","0000011111101011111100000"],
			["9","0000011111101011110100000"],
			["(","0000000000100010111000000"],
			[")","0000001110100010000000000"],
			["[","0000000000100011111100000"],
			["]","0000011111100010000000000"],
			["{","0000010001111110010000000"],
			["}","0000000100111111000100000"],
			[".","0000000000000000000100000"],
			["+","0000000100011100010000000"],			
			["-","0000000100001000010000000"],			
			["", "0000000000000000000000000"]
		]), "value_sample_");  
	this.appendDummyInput()
		.appendField(Blockly.Msg.ESP32_MATRIX_CHOICECOLOR);		
	this.appendValueInput("RGB")
		.setCheck("String");	
	this.setInputsInline(true);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);	
  }
};

Blockly.Blocks['BitMatrixLed_sample3'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ESP32_SAMPLE)
        .appendField(new Blockly.FieldDropdown([		
			["A","0111110010100101001001111"],
			["B","0101010101101011010111111"],
			["C","1000110001100011000101110"],
			["D","0111010001100011000111111"],
			["E","1010110101101011010111111"],
			["F","1010010100101001010011111"],
			["G","1011110101101011000101110"],
			["H","1111100100001000010011111"],
			["I","1000110001111111000110001"],
			["J","1000010000111111000110011"],
			["K","1000101010001000001011111"],
			["L","0000100001000010000111111"],
			["M","1111101000001000100011111"],
			["N","1111100010001000100011111"],
			["O","0111010001100011000101110"],
			["P","0110010010100101001011111"],
			["Q","0110110010101011000101110"],
			["R","0101110100101001010011111"],
			["S","1001010101101011010101001"],
			["T","1000010000111111000010000"],
			["U","1111000001000010000111110"],
			["V","1110000010000010001011100"],
			["W","1111000001111100000111110"],
			["X","1000101010001000101010001"],
			["Y","1000001000001110100010000"],
			["Z","1000111001101011001110001"],
			["", "0000000000000000000000000"]
		]), "value_sample_");  
	this.appendDummyInput()
		.appendField(Blockly.Msg.ESP32_MATRIX_CHOICECOLOR);		
	this.appendValueInput("RGB")
		.setCheck("String");
	this.setInputsInline(true);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);	
  }
};

Blockly.Blocks['BitMatrixLed_sample4'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ESP32_SAMPLE)
        .appendField(new Blockly.FieldDropdown([
			["a","0000100110010010011000000"],
			["b","0000000010001011111100000"],
			["c","0000001001010010011000000"],
			["d","0000011111001010001000000"],
			["e","0000000101010110011000000"],
			["f","0000010100111110010000000"],
			["g","0000000110010110010100000"],
			["h","0000000011001001111100000"],
			["i","0000000000101110000000000"],
			["j","0000000000101110000100000"],
			["k","0000000101000101111100000"],
			["l","0000000000111110000000000"],
			["m","0001100100000110010000111"],
			["n","0000000011001000011100000"],
			["o","0000000010001010001000000"],
			["p","0000000100010100111100000"],
			["q","0000001111010100010000000"],
			["r","0000000100000100011100000"],
			["s","0000010010101010100100000"],
			["t","0000000101011110010000000"],
			["u","0000100110000010011000000"],
			["v","0000000110000010011000000"],
			["w","0011000001001100000100110"],
			["x","0000000101000100010100000"],
			["y","0000000100000100010100000"],
			["z","0000001000011010101100001"],
			["", "0000000000000000000000000"]
		]), "value_sample_");  
	this.appendDummyInput()
		.appendField(Blockly.Msg.ESP32_MATRIX_CHOICECOLOR);		
	this.appendValueInput("RGB")
		.setCheck("String");
	this.setInputsInline(true);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);	
  }
};

Blockly.Blocks['BitMatrixLed_sample5'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ESP32_SAMPLE);
	this.appendValueInput("sample")
		.setCheck(null); 
	this.appendDummyInput()
		.appendField(Blockly.Msg.ESP32_MATRIX_CHOICECOLOR);		
	this.appendValueInput("RGB")
		.setCheck("String");
	this.setInputsInline(true);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);	
  }
};

Blockly.Blocks['BitMatrixLed_matrix_color_one'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ESP32_MATRIX_COLOR);
	this.appendValueInput("X")
        .appendField("X[1~5]")	
		.setCheck("Number"); 
	this.appendValueInput("Y")
        .appendField("Y[1~5]")	
		.setCheck("Number"); 		
	this.appendDummyInput()
		.appendField(Blockly.Msg.ESP32_MATRIX_CHOICECOLOR);		
	this.appendValueInput("RGB")
		.setCheck("String");
	this.setInputsInline(true);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);	
  }
};

Blockly.Blocks['BitMatrixLed_matrix_color_one_n'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ESP32_MATRIX_COLOR);
	this.appendValueInput("N")
        .appendField(Blockly.Msg.ESP32_MATRIX_LEDS_N)	
		.setCheck("Number");		
	this.appendDummyInput()
		.appendField(Blockly.Msg.ESP32_MATRIX_CHOICECOLOR);		
	this.appendValueInput("RGB")
		.setCheck("String");
	this.setInputsInline(true);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);	
  }
};

Blockly.Blocks['BitMatrixLed_matrix_color_one_3'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ESP32_MATRIX_COLOR);	
	this.appendValueInput("L21")
		.setCheck("String")
        .appendField("1");
	this.appendValueInput("L22")
		.setCheck("String")
        .appendField("2");
	this.appendValueInput("L23")
		.setCheck("String")
        .appendField("3");		
	this.setInputsInline(true);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);	
  }
};

Blockly.Blocks['BitMatrixLed_matrix_color_one_8'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ESP32_MATRIX_COLOR);	
	this.appendValueInput("L21")
		.setCheck("String")
        .appendField("1");
	this.appendValueInput("L22")
		.setCheck("String")
        .appendField("2");
	this.appendValueInput("L23")
		.setCheck("String")
        .appendField("3");
	this.appendValueInput("L24")
		.setCheck("String")
        .appendField("4");
	this.appendValueInput("L25")
		.setCheck("String")
        .appendField("5");
	this.appendValueInput("L16")
		.setCheck("String")
        .appendField("6");
	this.appendValueInput("L17")
		.setCheck("String")
        .appendField("7");
	this.appendValueInput("L18")
		.setCheck("String")
        .appendField("8");	
	this.setInputsInline(true);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);	
  }
};

Blockly.Blocks['BitMatrixLed_matrix_color_one_12'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ESP32_MATRIX_COLOR);	
	this.appendValueInput("L21")
		.setCheck("String")
        .appendField("1");
	this.appendValueInput("L22")
		.setCheck("String")
        .appendField("2");
	this.appendValueInput("L23")
		.setCheck("String")
        .appendField("3");
	this.appendValueInput("L24")
		.setCheck("String")
        .appendField("4");
	this.appendValueInput("L25")
		.setCheck("String")
        .appendField("5");
	this.appendValueInput("L16")
		.setCheck("String")
        .appendField("6");
	this.appendValueInput("L17")
		.setCheck("String")
        .appendField("7");
	this.appendValueInput("L18")
		.setCheck("String")
        .appendField("8");	
	this.appendValueInput("L19")
		.setCheck("String")
        .appendField("9");
	this.appendValueInput("L20")
		.setCheck("String")
        .appendField("10");
	this.appendValueInput("L11")
		.setCheck("String")
        .appendField("11");
	this.appendValueInput("L12")
		.setCheck("String")
        .appendField("12");	
	this.setInputsInline(true);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);	
  }
};

Blockly.Blocks['BitMatrixLed_matrix_rgb_one_n'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ESP32_MATRIX_COLOR);
	this.appendValueInput("N")
        .appendField(Blockly.Msg.ESP32_MATRIX_LEDS_N)	
		.setCheck("Number");		
	this.appendDummyInput()
		.appendField(Blockly.Msg.ESP32_MATRIX_CHOICECOLOR+"[0~255]");		
	this.appendValueInput("R")
        .appendField("R")	
		.setCheck("Number");
	this.appendValueInput("G")
        .appendField("G")	
		.setCheck("Number");
	this.appendValueInput("B")
        .appendField("B")	
		.setCheck("Number");
	this.setInputsInline(true);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);	
  }
};

Blockly.Blocks['BitMatrixLed_matrix_getcolor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ESP32_MATRIX_GETCOLOR);
	this.appendValueInput("X")
        .appendField("X[1~5]")	
		.setCheck("Number"); 
	this.appendValueInput("Y")
        .appendField("Y[1~5]")	
		.setCheck("Number"); 
	this.setInputsInline(true);
	this.setOutput(true);
	this.setColour(300);
  }
};

Blockly.Blocks['BitMatrixLed_matrix_one_getcolor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ESP32_MATRIX_GETCOLOR);
	this.appendValueInput("N")
        .appendField(Blockly.Msg.ESP32_MATRIX_LEDS_N)	
		.setCheck("Number");	
	this.setInputsInline(true);
	this.setOutput(true);
	this.setColour(300);
  }
};

Blockly.Blocks['BitMatrixLed_color'] = {
  init: function() {	
	this.appendDummyInput()
		.appendField(new Blockly.FieldColour("#FF0000"),"RGB");
	this.setInputsInline(true);
	this.setOutput(true);
	this.setColour(5);	
  }
};

Blockly.Blocks['BitMatrixLed_color_random'] = {
  init: function() {	
    this.appendDummyInput()
        .appendField(Blockly.Msg.ESP32_MATRIX_COLOR_RANDOM);
	this.setInputsInline(true);
	this.setOutput(true);
	this.setColour(5);	
  }
};

Blockly.Blocks['BitMatrixLed_matrix_texttocode'] = {
  init: function() {
    this.appendValueInput("value_text_")
        .setCheck("String")
        .appendField(Blockly.Msg.MATRIXLED_TEXTTOCODE_SHOW);
    this.setOutput(true, null);  
    this.setColour(300);
  }  
};

Blockly.Blocks['BitMatrixLed_matrix_indentcode'] = {
  init: function() {
    this.appendValueInput("value_indentcode_")
        .setCheck("String")
        .appendField(Blockly.Msg.MATRIXLED_INDENTCODE_SHOW);
    this.setOutput(true, null);  
    this.setColour(300);
  }  
};

Blockly.Blocks['BitMatrixLed_matrix_marquee_time'] = {
  init: function() {
    this.appendValueInput("value_marquee_time_")
        .setCheck("Number")  
        .appendField(Blockly.Msg.MATRIXLED_MARQUEE_TIME_SHOW);  
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);    
  }
}; 

Blockly.Blocks['BitMatrixLed_matrix_marquee'] = {
  init: function() {
    this.appendValueInput("value_marquee_")
        .setCheck("String")   
        .appendField(Blockly.Msg.MATRIXLED_MARQUEE_SHOW);
	this.appendDummyInput()
		.appendField(Blockly.Msg.ESP32_MATRIX_CHOICECOLOR);		
	this.appendValueInput("RGB")
		.setCheck("String");
    this.setInputsInline(true);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);   
  }
};  

Blockly.Blocks['BitMatrixLed_matrix_marquee_times'] = {
  init: function() {
    this.appendValueInput("value_times_")
        .setCheck("Number")   
        .appendField(Blockly.Msg.MATRIXLED_MARQUEE_SHOW);		 
    this.appendValueInput("value_marquee_")
        .setCheck("String")
        .appendField(Blockly.Msg.MATRIXLED_MARQUEE_TIMES_SHOW); 		
	this.appendDummyInput()
		.appendField(Blockly.Msg.ESP32_MATRIX_CHOICECOLOR);		
	this.appendValueInput("RGB")
		.setCheck("String");		
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);   
  }
};

Blockly.Blocks['BitMatrixLed_matrix_marquee_degree'] = {
  init: function() {
    this.appendValueInput("value_marquee_degree_")
        .setCheck("Number")
        .appendField(Blockly.Msg.MATRIXLED_MARQUEE_DIRECTION_SHOW)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.MATRIXLED_MATRIXCODE_COLOR_LEFT_SHOW,"1"], [Blockly.Msg.MATRIXLED_MATRIXCODE_COLOR_RIGHT_SHOW,"2"]]), "value_marquee_direction_")
        .appendField(Blockly.Msg.MATRIXLED_MARQUEE_DEGREE_SHOW);
    this.setInputsInline(true);	
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
  }  
};

Blockly.Blocks['BitMatrixLed_matrix_marquee_color'] = {
  init: function() {
    this.appendValueInput("value_marquee_")
        .setCheck("String")   
        .appendField(Blockly.Msg.MATRIXLED_MARQUEE_COLOR_SHOW); 
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);    
  }
};  

Blockly.Blocks['BitMatrixLed_matrix_marquee_color_times'] = {
  init: function() {
	this.appendDummyInput()	  
	    .appendField(Blockly.Msg.MATRIXLED_MARQUEE_COLOR_SHOW);	
    this.appendValueInput("value_times_")
        .setCheck("Number")
 		.setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.MATRIXLED_MARQUEE_COLOR_TIMES_SHOW);  	  
    this.appendValueInput("value_marquee_")
        .setCheck("String");		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);   
  }
}; 

Blockly.Blocks['BitMatrixLed_matrix_marquee_color_degree'] = {
  init: function() {
    this.appendValueInput("value_marquee_degree_")
        .setCheck("Number")
        .appendField(Blockly.Msg.MATRIXLED_MARQUEE_DIRECTION_COLOR_SHOW)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.MATRIXLED_MATRIXCODE_COLOR_LEFT_SHOW,"1"], [Blockly.Msg.MATRIXLED_MATRIXCODE_COLOR_RIGHT_SHOW,"2"]]), "value_marquee_direction_")
        .appendField(Blockly.Msg.MATRIXLED_MARQUEE_DEGREE_SHOW);      
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
  }  
};

Blockly.Blocks['BitMatrixLed_matrix_matrixcode'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(Blockly.Msg.MATRIXLED_MATRIXCODE_SHOW);
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L01")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L06")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L11")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L16")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L21");
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L02")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L07")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L12")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L17")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L22");
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L03")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L08")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L13")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L18")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L23");
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L04")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L09")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L14")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L19")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L24");
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L05")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L10")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L15")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L20")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L25");
    this.setOutput(true, null);
    this.setColour(300);   
  }
};

Blockly.Blocks['BitMatrixLed_matrix_matrixcode_color'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(Blockly.Msg.MATRIXLED_MATRIXCODE_COLOR_SHOW);
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#000000"), 'L01')
        .appendField(new Blockly.FieldColour("#000000"), 'L06')
        .appendField(new Blockly.FieldColour("#000000"), 'L11')
        .appendField(new Blockly.FieldColour("#000000"), 'L16')
        .appendField(new Blockly.FieldColour("#000000"), 'L21')
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#000000"), 'L02')
        .appendField(new Blockly.FieldColour("#000000"), 'L07')
        .appendField(new Blockly.FieldColour("#000000"), 'L12')
        .appendField(new Blockly.FieldColour("#000000"), 'L17')
        .appendField(new Blockly.FieldColour("#000000"), 'L22')
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#000000"), 'L03')
        .appendField(new Blockly.FieldColour("#000000"), 'L08')
        .appendField(new Blockly.FieldColour("#000000"), 'L13')
        .appendField(new Blockly.FieldColour("#000000"), 'L18')
        .appendField(new Blockly.FieldColour("#000000"), 'L23')
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#000000"), 'L04')
        .appendField(new Blockly.FieldColour("#000000"), 'L09')
        .appendField(new Blockly.FieldColour("#000000"), 'L14')
        .appendField(new Blockly.FieldColour("#000000"), 'L19')
        .appendField(new Blockly.FieldColour("#000000"), 'L24')
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#000000"), 'L05')
        .appendField(new Blockly.FieldColour("#000000"), 'L10')
        .appendField(new Blockly.FieldColour("#000000"), 'L15')
        .appendField(new Blockly.FieldColour("#000000"), 'L20')
        .appendField(new Blockly.FieldColour("#000000"), 'L25')
    this.setOutput(true, null);
    this.setColour(300);
  }
};

Blockly.Blocks['BitMatrixLed_matrix_matrixcode_line_color'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(Blockly.Msg.MATRIXLED_MATRIXCODE_LINE_COLOR_SHOW);
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#000000"), 'L01')
        .appendField(new Blockly.FieldColour("#000000"), 'L02')
        .appendField(new Blockly.FieldColour("#000000"), 'L03')
        .appendField(new Blockly.FieldColour("#000000"), 'L04')
        .appendField(new Blockly.FieldColour("#000000"), 'L05');
    this.setOutput(true, null);
    this.setColour(300);
  }
};

Blockly.Blocks['BitMatrixLed_matrix_marquee_stop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.MATRIXLED_MARQUEE_STOP_SHOW);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);    
  }
}; 

Blockly.Blocks['BitMatrixLed_matrix_marquee_resume'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.MATRIXLED_MARQUEE_RESUME_SHOW);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);     
  }
}; 

Blockly.Blocks['BitMatrixLed_matrix_marquee_rotate'] = {
  init: function() {
    this.appendDummyInput() 
        .appendField(Blockly.Msg.MATRIXLED_MARQUEE_ROTATE_SHOW);
	this.appendDummyInput()    
		  .appendField(new Blockly.FieldDropdown([
			[Blockly.Msg.ESP32_MATRIX_ROTATE_NOCLOCKWISE,"0"],		  
			[Blockly.Msg.ESP32_MATRIX_ROTATE_CLOCKWISE,"2"],
			[Blockly.Msg.ESP32_MATRIX_ROTATE_COUNTERCLOCKWISE,"1"]		  
	  ]), "direction");	
    this.setInputsInline(true);	  
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);    
  }
};

Blockly.Blocks.webbit_mooncar_pin={init:function(){
  this.appendDummyInput()
      .appendField(Blockly.Msg.FRANCEFU_MOONCAR_PIN);
  this.appendValueInput("R1")
      .setCheck("Number")
	  .appendField(Blockly.Msg.FRANCEFU_MOONCAR_PIN_R1);
  this.appendValueInput("R2")
      .setCheck("Number")
	  .appendField(Blockly.Msg.FRANCEFU_MOONCAR_PIN_R2);
  this.appendValueInput("L1")
      .setCheck("Number")
	  .appendField(Blockly.Msg.FRANCEFU_MOONCAR_PIN_L1);
  this.appendValueInput("L2")
      .setCheck("Number")
	  .appendField(Blockly.Msg.FRANCEFU_MOONCAR_PIN_L2);
  this.setInputsInline(true);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
  this.setColour(90);  
}
};
Blockly.Blocks.webbit_mooncar_move_car={init:function(){
  this.appendDummyInput()
      .appendField(Blockly.Msg.FRANCEFU_MOVE_CAR)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.FRANCEFU_FORWARD,"FORWARD"],[Blockly.Msg.FRANCEFU_BACKWARD,"BACKWARD"],[Blockly.Msg.FRANCEFU_TURNLEFT,"LEFT"],[Blockly.Msg.FRANCEFU_TURNRIGHT,"RIGHT"]]),"STAT");
  this.appendDummyInput()
      .appendField(Blockly.Msg.FRANCEFU_MOVE_MOTOR_R);
  this.appendValueInput("RSPEED")
      .setCheck("Number");
  this.appendDummyInput()
      .appendField(Blockly.Msg.FRANCEFU_MOVE_MOTOR_L);
  this.appendValueInput("LSPEED")
      .setCheck("Number");	  
  this.setInputsInline(!0);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
  this.setColour(90);  
}
};
Blockly.Blocks.webbit_mooncar_move1_car={init:function(){
  this.appendDummyInput()
      .appendField(Blockly.Msg.FRANCEFU_MOVE_CAR)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.FRANCEFU_LEFTFRONT,"LEFTFRONT"],[Blockly.Msg.FRANCEFU_RIGHTFRONT,"RIGHTFRONT"],[Blockly.Msg.FRANCEFU_LEFTREAR,"LEFTREAR"],[Blockly.Msg.FRANCEFU_RIGHTREAR,"RIGHTREAR"]]),"STAT");
  this.appendDummyInput()
      .appendField(Blockly.Msg.FRANCEFU_MOVE_SPEED);
  this.appendValueInput("SPEED")
      .setCheck("Number");
  this.appendDummyInput()
      .appendField(Blockly.Msg.FRANCEFU_MOVE_MOTOR_RATIO);
  this.appendValueInput("RATIO")
      .setCheck("Number");
  this.setInputsInline(!0);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
  this.setColour(90);
}
};
Blockly.Blocks.webbit_mooncar_stop_car={init:function(){
  this.appendDummyInput()
      .appendField(Blockly.Msg.FRANCEFU_MOVE_CAR + " " +Blockly.Msg.FRANCEFU_STOP);
  this.setInputsInline(!0);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
  this.setColour(90);
}
};
Blockly.Blocks.webbit_mooncar_tracker_pin={init:function(){
  this.appendDummyInput()
      .appendField(Blockly.Msg.FRANCEFU_MOONCAR_TRACKER_PIN);
  this.appendValueInput("PINR")
      .setCheck("Number")
	  .appendField(Blockly.Msg.FRANCEFU_MOONCAR_TRACKER_PIN_R);
  this.appendValueInput("PINL")
      .setCheck("Number")
	  .appendField(Blockly.Msg.FRANCEFU_MOONCAR_TRACKER_PIN_L);
  this.setInputsInline(!0);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
  this.setColour(300);  
}
};
Blockly.Blocks.webbit_mooncar_tracker={init:function(){
  this.appendDummyInput()
      .appendField(Blockly.Msg.FRANCEFU_TRACKER);
  this.setInputsInline(!0);
  this.setOutput(!0,null);
  this.setColour(300);
}
};
Blockly.Blocks.webbit_mooncar_sonar_pin={init:function(){
  this.appendDummyInput()
      .appendField(Blockly.Msg.FRANCEFU_MOONCAR_SONAR_PIN);
  this.appendValueInput("TRIG")
      .setCheck("Number")
	  .appendField(Blockly.Msg.FRANCEFU_MOONCAR_SONAR_PIN_TRIG);
  this.appendValueInput("ECHO")
      .setCheck("Number")
	  .appendField(Blockly.Msg.FRANCEFU_MOONCAR_SONAR_PIN_ECHO);
  this.setInputsInline(!0);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
  this.setColour(240);  
}
};
Blockly.Blocks.webbit_mooncar_sonar={init:function(){
  this.appendDummyInput()
      .appendField(Blockly.Msg.FRANCEFU_SONAR);
  this.setInputsInline(!0);
  this.setOutput(!0,null);
  this.setColour(240);  
}
};
Blockly.Blocks.webbit_mooncar_tcs_init={init:function(){
  this.appendDummyInput()
      .appendField(Blockly.Msg.FRANCEFU_TCS_INIT);
  this.setInputsInline(!0);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
  this.setColour(180);  
}
};
Blockly.Blocks.webbit_mooncar_tcs_read={init:function(){
  this.appendDummyInput()
      .appendField(Blockly.Msg.FRANCEFU_TCS_READ)
      .appendField(new Blockly.FieldDropdown([
		  [Blockly.Msg.FRANCEFU_RED,"r"],
		  [Blockly.Msg.FRANCEFU_GREEN,"g"],
		  [Blockly.Msg.FRANCEFU_BLUE,"b"],
		  [Blockly.Msg.FRANCEFU_LUX,"l"]
	  ]),"color");
  this.appendDummyInput()
      .appendField(Blockly.Msg.FRANCEFU_READ_VALUE);
  this.setInputsInline(!0);
  this.setOutput(!0,null);
  this.setColour(180);   
}
};
Blockly.Blocks.webbit_mooncar_tcs_set={init:function(){
  this.appendDummyInput()
      .appendField(Blockly.Msg.FRANCEFU_TCS_SET)
      .appendField(new Blockly.FieldDropdown([
		  [Blockly.Msg.FRANCEFU_RED,"0"],
		  [Blockly.Msg.FRANCEFU_GREEN,"1"],
		  [Blockly.Msg.FRANCEFU_BLUE,"2"],		  
		  [Blockly.Msg.FRANCEFU_YELLO,"3"],
		  [Blockly.Msg.FRANCEFU_CYAN,"4"],
		  [Blockly.Msg.FRANCEFU_MAGENTA,"5"],
		  [Blockly.Msg.FRANCEFU_CUSTOM1,"6"],
		  [Blockly.Msg.FRANCEFU_CUSTOM2,"7"],
		  [Blockly.Msg.FRANCEFU_CUSTOM3,"8"]	  
	  ]),"color");
  this.appendValueInput("R")
      .setCheck("Number")
	  .appendField("R");
  this.appendValueInput("G")
      .setCheck("Number")
	  .appendField("G");
	    this.appendValueInput("B")
      .setCheck("Number")
	  .appendField("B");
  this.setInputsInline(!0);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
  this.setColour(180);   
}
};
Blockly.Blocks.webbit_mooncar_tcs_detect={init:function(){
  this.appendDummyInput()
      .appendField(Blockly.Msg.FRANCEFU_TCS_DETECT)
      .appendField(new Blockly.FieldDropdown([
		  [Blockly.Msg.FRANCEFU_RED,"0"],
		  [Blockly.Msg.FRANCEFU_GREEN,"1"],
		  [Blockly.Msg.FRANCEFU_BLUE,"2"],		  
		  [Blockly.Msg.FRANCEFU_YELLO,"3"],
		  [Blockly.Msg.FRANCEFU_CYAN,"4"],
		  [Blockly.Msg.FRANCEFU_MAGENTA,"5"],
		  [Blockly.Msg.FRANCEFU_CUSTOM1,"6"],
		  [Blockly.Msg.FRANCEFU_CUSTOM2,"7"],
		  [Blockly.Msg.FRANCEFU_CUSTOM3,"8"]
	  ]),"color");
  this.setInputsInline(!0);
  this.setOutput(!0,null);
  this.setColour(180);   
}
};
Blockly.Blocks.webbit_mooncar_tcs_range={init:function(){
  this.appendDummyInput()
      .appendField(Blockly.Msg.FRANCEFU_TCS_RANGE);
  this.appendValueInput("range")
      .setCheck("Number");
  this.setInputsInline(!0);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
  this.setColour(180);   
}
};
Blockly.Blocks.webbit_mooncar_flash_light={init:function(){
  this.appendValueInput("pin")
      .setCheck("Number")
      .appendField(Blockly.Msg.FRANCEFU_FLASH_LIGHT);
  this.appendDummyInput()
      .appendField(Blockly.Msg.FRANCEFU_SET) 
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.FRANCEFU_ON,"LOW"],[Blockly.Msg.FRANCEFU_OFF,"HIGH"]]),"state");
  this.setInputsInline(!0);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
  this.setColour(180);   
}
};

Blockly.Blocks['webbit_mooncar_ws2812_pin'] = {
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg.FRANCEFU_WS2812_PIN);
		this.appendValueInput("pin")
			.setCheck("Number");			
		this.appendValueInput("leds")
			.setCheck("Number")
			.appendField(Blockly.Msg.FRANCEFU_WS2812_LEDS);
		this.setInputsInline(!0);
		this.setPreviousStatement(!0,null);
		this.setNextStatement(!0,null);
		this.setColour(210);			
	}
};

Blockly.Blocks['webbit_mooncar_ws2812_brightness'] = {
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg.FRANCEFU_WS2812_BRIGHTNESS);
		this.appendValueInput("brightness")
			.setCheck("Number");
		this.setInputsInline(!0);
		this.setPreviousStatement(!0,null);
		this.setNextStatement(!0,null);
		this.setColour(210);			
	}
};

Blockly.Blocks['webbit_mooncar_ws2812_clear'] = {
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg.FRANCEFU_WS2812_CLEAR);
		this.setInputsInline(!0);
		this.setPreviousStatement(!0,null);
		this.setNextStatement(!0,null);
		this.setColour(210);			
	}
};

Blockly.Blocks['webbit_mooncar_ws2812_color'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(Blockly.Msg.FRANCEFU_WS2812_COLOR_SHOW);
    this.appendDummyInput()
        .appendField('   ')
        .appendField(new Blockly.FieldColour("#000000"), 'L06')
        .appendField('   ')
        .appendField(new Blockly.FieldColour("#000000"), 'L16')
        .appendField('   ');
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#000000"), 'L02')
        .appendField('   ')
        .appendField('   ')
        .appendField('   ')
        .appendField(new Blockly.FieldColour("#000000"), 'L22');
    this.appendDummyInput()
        .appendField('   ')
        .appendField('   ')
        .appendField('   ')
        .appendField('   ')
        .appendField('   ');
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#000000"), 'L04')
        .appendField('   ')
        .appendField('   ')
        .appendField('   ')
        .appendField(new Blockly.FieldColour("#000000"), 'L24');
    this.appendDummyInput()
        .appendField('   ')
        .appendField(new Blockly.FieldColour("#000000"), 'L10')
        .appendField('   ')
        .appendField(new Blockly.FieldColour("#000000"), 'L20')
        .appendField('   ');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);	
  }
};

Blockly.Blocks['webbit_mooncar_ws2812_color_one_n'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.FRANCEFU_WS2812_COLOR_SHOW);
	this.appendValueInput("N")
        .appendField(Blockly.Msg.FRANCEFU_WS2812_LEDS_N)	
		.setCheck("Number");		
	this.appendDummyInput()
		.appendField(Blockly.Msg.FRANCEFU_WS2812_CHOICECOLOR_SHOW);		
	this.appendValueInput("RGB")
		.setCheck("String");
	this.setInputsInline(!0);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);	
  }
};

Blockly.Blocks['webbit_mooncar_ws2812_rgb_one_n'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.FRANCEFU_WS2812_COLOR_SHOW);
	this.appendValueInput("N")
        .appendField(Blockly.Msg.FRANCEFU_WS2812_LEDS_N)	
		.setCheck("Number");		
	this.appendDummyInput()
		.appendField(Blockly.Msg.FRANCEFU_WS2812_CHOICECOLOR_SHOW+"[0~255]");		
	this.appendValueInput("R")
        .appendField("R")	
		.setCheck("Number");
	this.appendValueInput("G")
        .appendField("G")	
		.setCheck("Number");
	this.appendValueInput("B")
        .appendField("B")	
		.setCheck("Number");
	this.setInputsInline(!0);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);	
  }
};

Blockly.Blocks.webbit_mooncar_ir_remote_read_pin = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.FRANCEFU_IR_REMOTE_READ_PIN);
	this.appendValueInput("pin")	
		.setCheck("Number");
	this.setInputsInline(!0);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(10);  	
  }
};
Blockly.Blocks.webbit_mooncar_ir_remote_read={init:function(){
  this.appendDummyInput()
      .appendField(Blockly.Msg.FRANCEFU_IR_REMOTE_READ);
  this.setInputsInline(!0);
  this.appendStatementInput("IR_READ");
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setColour(10);    
}
};
Blockly.Blocks.webbit_mooncar_ir_remote_read_value={init:function(){
  this.appendDummyInput()
      .appendField(Blockly.Msg.FRANCEFU_IR_REMOTE_READ_VALUE);
  this.setInputsInline(!0);
  this.setOutput(!0,null);
  this.setColour(10);   
}
};
Blockly.Blocks.webbit_mooncar_ir_remote_read_type={init:function(){
  this.appendDummyInput()
      .appendField(Blockly.Msg.FRANCEFU_IR_REMOTE_READ_TYPE);
  this.setInputsInline(!0);
  this.setOutput(!0,null);
  this.setColour(10);   
	}
};
Blockly.Blocks.webbit_mooncar_ir_remote_send_pin = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.FRANCEFU_IR_REMOTE_SEND_PIN);
	this.appendValueInput("pin")	
		.setCheck("Number");
	this.setInputsInline(!0);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(10);  	
  }
};
Blockly.Blocks.webbit_mooncar_ir_remote_send={init:function(){
  this.appendDummyInput()
      .appendField(Blockly.Msg.FRANCEFU_IR_REMOTE_TYPE)
      .appendField(new Blockly.FieldDropdown([["NEC","NEC"],["Sony","SONY"],["RC5","RC5"],["RC6","RC6"]]),"IR_TYPE");
  this.appendDummyInput()
      .appendField(Blockly.Msg.FRANCEFU_IR_REMOTE_SEND);
  this.appendValueInput("IR_SEND")
      .setCheck("String");
  this.setInputsInline(!0);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
  this.setColour(10);  
}
};

Blockly.Blocks['esp32_cam_tfjs_cocossd'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ESP32_CAM_TFJS_COCOSSD_SHOW);
	this.appendDummyInput()
      .appendField(Blockly.Msg.ESP32_CAM_TFJS_COCOSSD_OBJECT_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["person","person"],	  
		["airplane","airplane"],
		["apple","apple"],
		["backpack","backpack"],
		["banana","banana"],
		["baseball bat","baseball bat"],
		["baseball glove","baseball glove"],
		["bear","bear"],
		["bed","bed"],
		["bench","bench"],
		["bicycle","bicycle"],
		["bird","bird"],
		["boat","boat"],
		["book","book"],
		["bottle","bottle"],
		["bowl","bowl"],
		["broccoli","broccoli"],
		["bus","bus"],
		["cake","cake"],
		["car","car"],
		["carrot","carrot"],
		["cat","cat"],
		["cell phone","cell phone"],
		["chair","chair"],
		["clock","clock"],
		["couch","couch"],
		["cow","cow"],
		["cup","cup"],
		["dining table","dining table"],
		["dog","dog"],
		["donut","donut"],
		["elephant","elephant"],
		["fire hydrant","fire hydrant"],
		["fork","fork"],
		["frisbee","frisbee"],
		["giraffe","giraffe"],
		["hair drier","hair drier"],
		["handbag","handbag"],
		["horse","horse"],
		["hot dog","hot dog"],
		["keyboard","keyboard"],
		["kite","kite"],
		["knife","knife"],
		["laptop","laptop"],
		["microwave","microwave"],
		["motorcycle","motorcycle"],
		["mouse","mouse"],
		["orange","orange"],
		["oven","oven"],
		["parking meter","parking meter"],
		["pizza","pizza"],
		["potted plant","potted plant"],
		["refrigerator","refrigerator"],
		["remote","remote"],
		["sandwich","sandwich"],
		["scissors","scissors"],
		["sheep","sheep"],
		["sink","sink"],
		["skateboard","skateboard"],
		["skis","skis"],
		["snowboard","snowboard"],
		["spoon","spoon"],
		["sports ball","sports ball"],
		["stop sign","stop sign"],
		["suitcase","suitcase"],
		["surfboard","surfboard"],
		["teddy bear","teddy bear"],
		["tennis racket","tennis racket"],
		["tie","tie"],
		["toaster","toaster"],
		["toilet","toilet"],
		["toothbrush","toothbrush"],
		["traffic light","traffic light"],
		["train","train"],
		["truck","truck"],
		["tv","tv"],
		["umbrella","umbrella"],
		["vase","vase"],
		["wine glass","wine glass"],
		["zebra","zebra"]
		]), "object"); 
	this.appendDummyInput()
      .appendField(Blockly.Msg.ESP32_CAM_TFJS_COCOSSD_SCORE_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["0","0"],
		["0.1","0.1"],
		["0.2","0.2"],
		["0.3","0.3"],
		["0.4","0.4"],
		["0.5","0.5"],
		["0.6","0.6"],
		["0.7","0.7"],
		["0.8","0.8"],
		["0.9","0.9"],		
		["1","0.999"]
	]), "score");
    this.appendDummyInput()
		.appendField(Blockly.Msg.SERVERMODULE_JAVASCRIPT_SHOW);
    this.appendStatementInput("javascript")
        .setCheck(null);
	this.setInputsInline(false);
    this.setOutput(true, null);
	this.setTooltip("?result=object;score;x;y;width;height;count");
    this.setColour(20)
	}
};



Blockly.Blocks['servermodule_parameter_set_address3'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_PARAMETER_SET_ADDRESS_SHOW);
	this.appendDummyInput()
      .appendField("cmd")
      .appendField(new Blockly.FieldDropdown([
		["ip(","ip"],
		["mac","mac"],
		["restart","restart"],
		["digitalwrite(pin,value)","digitalwrite"],
		["digitalread(pin)","digitalread"],
		["analogwrite(pin,value)","analogwrite"],
		["analogread(pin)","analogread"],
		["touchread(pin)","touchread"],
		["servo(pin,angle)","servo"],		
		["relay(pin,value)","relay"],
		["getstill","getstill"],		
		["flash(value)","flash"],		
		["framesize(value)","framesize"],
		["quality(value)","quality"],
		["contrast(value)","contrast"],
		["brightness(value)","brightness"],
		["saturation(value)","saturation"],
		["special_effect(value)","special_effect"],
		["hmirror(value)","hmirror"],
		["vflip(value)","vflip"],
		["result","result"]			
		]), "cmd"); 
    this.appendValueInput("P1")
        .appendField("P1")	
        .setCheck(null); 
    this.appendValueInput("P2")
        .appendField("P2")	
        .setCheck(null);
    this.appendValueInput("P3")
        .appendField("P3")	
        .setCheck(null);		
	this.setInputsInline(true);
    this.setOutput(true, null);  
    this.setColour(20);
	this.setHelpUrl("https://github.com/fustyles/Arduino/blob/master/ESP32-CAM_CameraWebServer_FakeStream/ESP32-CAM_CameraWebServer_FakeStream.ino");	
  }
};

//SERIAL
Blockly.Blocks['fu_serial_begin'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["FU_SERIAL"]);
    this.appendValueInput("baudrate")
        .setCheck("Number")
        .appendField(Blockly.Msg["FU_SERIAL_BAUDRATE"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["FU_SERIAL_HUE"]);
 this.setTooltip("serial");
 this.setHelpUrl("https://www.arduino.cc/reference/en/language/functions/communication/serial/begin/");
  }
};

Blockly.Blocks['fu_serial_begin_config'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["FU_SERIAL"]);
    this.appendValueInput("baudrate")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["FU_SERIAL_BAUDRATE"]);
    this.appendDummyInput()
        .appendField(Blockly.Msg["FU_SERIAL_CONFIG"])
        .appendField(new Blockly.FieldDropdown([
			["SERIAL_5N1", "SERIAL_5N1"],
			["SERIAL_6N1", "SERIAL_6N1"],
			["SERIAL_7N1", "SERIAL_7N1"],
			["SERIAL_8N1", "SERIAL_8N1"],
			["SERIAL_5N2", "SERIAL_5N2"],
			["SERIAL_6N2", "SERIAL_6N2"],
			["SERIAL_7N2", "SERIAL_7N2"],
			["SERIAL_8N2", "SERIAL_8N2"],
			["SERIAL_5E1", "SERIAL_5E1"],
			["SERIAL_6E1", "SERIAL_6E1"],
			["SERIAL_7E1", "SERIAL_7E1"],
			["SERIAL_8E1", "SERIAL_8E1"],
			["SERIAL_5E2", "SERIAL_5E2"],
			["SERIAL_6E2", "SERIAL_6E2"],
			["SERIAL_7E2", "SERIAL_7E2"],
			["SERIAL_8E2", "SERIAL_8E2"],
			["SERIAL_5O1", "SERIAL_5O1"],
			["SERIAL_6O1", "SERIAL_6O1"],
			["SERIAL_7O1", "SERIAL_7O1"],
			["SERIAL_8O1", "SERIAL_8O1"],
			["SERIAL_5O2", "SERIAL_5O2"],
			["SERIAL_6O2", "SERIAL_6O2"],
			["SERIAL_7O2", "SERIAL_7O2"],
			["SERIAL_8O2", "SERIAL_8O2"]	
		]), "config");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["FU_SERIAL_HUE"]);
 this.setTooltip("serial");
 this.setHelpUrl("https://www.arduino.cc/reference/en/language/functions/communication/serial/begin/");
  }
};

Blockly.Blocks['fu_serial_ready'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["FU_SERIAL"]);
    this.appendDummyInput()
        .appendField(Blockly.Msg["FU_SERIAL_READY"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["FU_SERIAL_HUE"]);
 this.setTooltip("serial");
 this.setHelpUrl("https://www.arduino.cc/reference/en/language/functions/communication/serial/ifserial/");
  }
};

Blockly.Blocks['fu_serial_end'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["FU_SERIAL"]);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["FU_SERIAL_END"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["FU_SERIAL_HUE"]);
 this.setTooltip("serial");
 this.setHelpUrl("https://www.arduino.cc/reference/en/language/functions/communication/serial/end/");
  }
};

Blockly.Blocks['fu_serial_print'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["FU_SERIAL"]);
    this.appendValueInput("data")
        .setCheck(null)
        .appendField(Blockly.Msg["FU_SERIAL_PRINT"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["FU_SERIAL_HUE"]);
 this.setTooltip("serial");
 this.setHelpUrl("https://www.arduino.cc/reference/en/language/functions/communication/serial/print/");
  }
};

Blockly.Blocks['fu_serial_print_format'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["FU_SERIAL"]);
    this.appendValueInput("data")
        .setCheck("Number")
        .appendField(Blockly.Msg["FU_SERIAL_PRINT"]);
    this.appendDummyInput()
        .appendField(Blockly.Msg["FU_SERIAL_FORMAT"])
        .appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["FU_SERIAL_PRINT_BIN"],"BIN"], 
			[Blockly.Msg["FU_SERIAL_PRINT_OCT"],"OCT"], 
			[Blockly.Msg["FU_SERIAL_PRINT_DEC"],"DEC"], 
			[Blockly.Msg["FU_SERIAL_PRINT_HEX"],"HEX"]
		]), "format");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["FU_SERIAL_HUE"]);
 this.setTooltip("serial");
 this.setHelpUrl("https://www.arduino.cc/reference/en/language/functions/communication/serial/print/");
  }
};

Blockly.Blocks['fu_serial_println'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["FU_SERIAL"]);
    this.appendValueInput("data")
        .setCheck(null)
        .appendField(Blockly.Msg["FU_SERIAL_PRINTLN"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["FU_SERIAL_HUE"]);
 this.setTooltip("serial");
 this.setHelpUrl("https://www.arduino.cc/reference/en/language/functions/communication/serial/println/");
  }
};

Blockly.Blocks['fu_serial_println_format'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["FU_SERIAL"]);
    this.appendValueInput("data")
        .setCheck("Number")
        .appendField(Blockly.Msg["FU_SERIAL_PRINTLN"]);
    this.appendDummyInput()
        .appendField(Blockly.Msg["FU_SERIAL_FORMAT"])
        .appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["FU_SERIAL_PRINT_BIN"],"BIN"], 
			[Blockly.Msg["FU_SERIAL_PRINT_OCT"],"OCT"], 
			[Blockly.Msg["FU_SERIAL_PRINT_DEC"],"DEC"], 
			[Blockly.Msg["FU_SERIAL_PRINT_HEX"],"HEX"]
		]), "format");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["FU_SERIAL_HUE"]);
 this.setTooltip("serial");
 this.setHelpUrl("https://www.arduino.cc/reference/en/language/functions/communication/serial/println/");
  }
};

Blockly.Blocks['fu_serial_write'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["FU_SERIAL"]);
    this.appendValueInput("data")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["FU_SERIAL_WRITE"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["FU_SERIAL_HUE"]);
 this.setTooltip("serial");
 this.setHelpUrl("https://www.arduino.cc/reference/en/language/functions/communication/serial/write/");
  }
};

Blockly.Blocks['fu_serial_write_format'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["FU_SERIAL"]);
    this.appendValueInput("data")
        .setCheck("Number")
        .appendField(Blockly.Msg["FU_SERIAL_WRITE"]);
    this.appendDummyInput()
        .appendField(Blockly.Msg["FU_SERIAL_FORMAT"])
        .appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["FU_SERIAL_PRINT_BIN"],"BIN"], 
			[Blockly.Msg["FU_SERIAL_PRINT_OCT"],"OCT"], 
			[Blockly.Msg["FU_SERIAL_PRINT_DEC"],"DEC"], 
			[Blockly.Msg["FU_SERIAL_PRINT_HEX"],"HEX"]
		]), "format");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["FU_SERIAL_HUE"]);
 this.setTooltip("serial");
 this.setHelpUrl("https://www.arduino.cc/reference/en/language/functions/communication/serial/print/");
  }
};