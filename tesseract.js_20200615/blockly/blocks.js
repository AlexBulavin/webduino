Blockly.Blocks['tesseract_recognition'] = {
  init: function() {
  this.appendDummyInput() 
      .appendField(Blockly.Msg.TESSERACT_RECOGNITION_SHOW);
  this.appendValueInput("showtime_")
      .setCheck("Number")
      .appendField(Blockly.Msg.TESSERACT_SHOWTIME_SHOW);  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['tesseract_get'] = {
  init: function() { 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TESSERACT_GET_SHOW); 	  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(65);
  }
};

Blockly.Blocks['tesseract_video'] = {
  init: function() {
  this.appendValueInput("width_")
      .setCheck("Number")
      .appendField(Blockly.Msg.TESSERACT_WIDTH_SHOW);  
  this.appendValueInput("height_")
      .setCheck("Number")
      .appendField(Blockly.Msg.TESSERACT_HEIGHT_SHOW);
      this.appendDummyInput()  
      .appendField(Blockly.Msg.TESSERACT_LANG_SHOW)
      .appendField(new Blockly.FieldDropdown([
        ["English","eng"],
        ["Chinese - Traditional","chi_tra"],	      
        ["Chinese - Simplified","chi_sim"],
        ["Afrikaans","afr"],
        ["Amharic","amh"],
        ["Arabic","ara"],
        ["Assamese","asm"],
        ["Azerbaijani","aze"],
        ["Azerbaijani - Cyrillic","aze_cyrl"],
        ["Belarusian","bel"],
        ["Bengali","ben"],
        ["Tibetan","bod"],
        ["Bosnian","bos"],
        ["Bulgarian","bul"],
        ["Catalan; Valencian","cat"],
        ["Cebuano","ceb"],
        ["Czech","ces"],
        ["Cherokee","chr"],
        ["Welsh","cym"],
        ["Danish","dan"],
        ["German","deu"],
        ["Dzongkha","dzo"],
        ["Greek, Modern (1453-)","ell"],
        ["English, Middle (1100-1500)","enm"],
        ["Esperanto","epo"],
        ["Estonian","est"],
        ["Basque","eus"],
        ["Persian","fas"],
        ["Finnish","fin"],
        ["French","fra"],
        ["German Fraktur","frk"],
        ["French, Middle (ca. 1400-1600)","frm"],
        ["Irish","gle"],
        ["Galician","glg"],
        ["Greek, Ancient (-1453)","grc"],
        ["Gujarati","guj"],
        ["Haitian; Haitian Creole","hat"],
        ["Hebrew","heb"],
        ["Hindi","hin"],
        ["Croatian","hrv"],
        ["Hungarian","hun"],
        ["Inuktitut","iku"],
        ["Indonesian","ind"],
        ["Icelandic","isl"],
        ["Italian","ita"],
        ["Italian - Old","ita_old"],
        ["Javanese","jav"],
        ["Japanese","jpn"],
        ["Kannada","kan"],
        ["Georgian","kat"],
        ["Georgian - Old","kat_old"],
        ["Kazakh","kaz"],
        ["Central Khmer","khm"],
        ["Kirghiz; Kyrgyz","kir"],
        ["Korean","kor"],
        ["Kurdish","kur"],
        ["Lao","lao"],
        ["Latin","lat"],
        ["Latvian","lav"],
        ["Lithuanian","lit"],
        ["Malayalam","mal"],
        ["Marathi","mar"],
        ["Macedonian","mkd"],
        ["Maltese","mlt"],
        ["Malay","msa"],
        ["Burmese","mya"],
        ["Nepali","nep"],
        ["Dutch; Flemish","nld"],
        ["Norwegian","nor"],
        ["Oriya","ori"],
        ["Panjabi; Punjabi","pan"],
        ["Polish","pol"],
        ["Portuguese","por"],
        ["Pushto; Pashto","pus"],
        ["Romanian; Moldavian; Moldovan","ron"],
        ["Russian","rus"],
        ["Sanskrit","san"],
        ["Sinhala; Sinhalese","sin"],
        ["Slovak","slk"],
        ["Slovenian","slv"],
        ["Spanish; Castilian","spa"],
        ["Spanish; Castilian - Old","spa_old"],
        ["Albanian","sqi"],
        ["Serbian","srp"],
        ["Serbian - Latin","srp_latn"],
        ["Swahili","swa"],
        ["Swedish","swe"],
        ["Syriac","syr"],
        ["Tamil","tam"],
        ["Telugu","tel"],
        ["Tajik","tgk"],
        ["Tagalog","tgl"],
        ["Thai","tha"],
        ["Tigrinya","tir"],
        ["Turkish","tur"],
        ["Uighur; Uyghur","uig"],
        ["Ukrainian","ukr"],
        ["Urdu","urd"],
        ["Uzbek","uzb"],
        ["Uzbek - Cyrillic","uzb_cyrl"],
        ["Vietnamese","vie"],
        ["Yiddish","yid"]	   
  ]), "lang_");        
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TESSERACT_RESULT_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["show","block"],
		["hide","none"]	  
  ]), "result_"); 	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TESSERACT_OPACITY_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["1","1"],
		["0.9","0.9"],
		["0.8","0.8"],
		["0.7","0.7"],
		["0.6","0.6"],	  
		["0.5","0.5"],
		["0.4","0.4"],
		["0.3","0.3"],
		["0.2","0.2"],
		["0.1","0.1"],	
		["0","0"]	   
  ]), "opacity_"); 	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['tesseract_clear'] = {
  init: function() { 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TESSERACT_CLEAR_SHOW); 	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};
