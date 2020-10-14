Blockly.Blocks['faceapidetect_video'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.FACEAPIDETECT_SHOW);
  this.appendDummyInput()  
      .appendField(Blockly.Msg.FACEAPIDETECT_FRAME_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["Y","1"],
		["N","0"]	  
  ]), "frame_");    
  this.appendDummyInput()  
      .appendField(Blockly.Msg.FACEAPIDETECT_RESULT_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["Y","block"],
		["N","none"]	  
  ]), "result_");
  this.appendDummyInput()  
      .appendField(Blockly.Msg.FACEAPIDETECT_OPACITY_SHOW)
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

Blockly.Blocks['faceapidetect_face'] = {
  init: function() {
  this.appendValueInput("face_")
      .setCheck("Number")
      .appendField(Blockly.Msg.FACEAPIDETECT_INDEX_SHOW);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.FACEAPIDETECT_PROPERTY_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["age","age"],
		["gender","gender"],
		["genderProbability","genderProbability"],
		["emotion","emotion"],
		["neutral","neutral"],
		["happy","happy"],
		["sad","sad"],
		["angry","angry"],
		["fearful","fearful"],
		["disgusted","disgusted"],
		["surprised","surprised"],
		["boxX","boxX"],
		["boxY","boxY"],
		["boxWidth","boxWidth"],
		["boxHeight","boxHeight"]
  ]), "property_");  	  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(65);
  }
};

Blockly.Blocks['faceapidetect_state'] = {
  init: function() { 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.FACEAPIDETECT_STATE_SHOW)
      .appendField(new Blockly.FieldDropdown([
        ["Y","1"],
        ["N","0"]
  ]), "state_");   
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['faceapidetect_video_position'] = {
  init: function() {
  this.appendValueInput("left_")
      .setCheck("Number")
      .appendField(Blockly.Msg.FACEAPIDETECT_VIDEO_LEFT_SHOW);  
  this.appendValueInput("top_")
      .setCheck("Number")
      .appendField(Blockly.Msg.FACEAPIDETECT_VIDEO_TOP_SHOW);   	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['faceapidetect_startvideo_media'] = {
  init: function() { 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.FACEAPIDETECT_SHOW); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.FACEAPIDETECT_FACING_SHOW)
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.FACEAPIDETECT_FACING_FRONT_SHOW,"front"],
        [Blockly.Msg.FACEAPIDETECT_FACING_BACK_SHOW,"back"]
  ]), "facing_");  
  this.appendValueInput("index_")
      .setCheck("Number");  
  this.appendValueInput("width_")
      .setCheck("Number")
      .appendField(Blockly.Msg.FACEAPIDETECT_WIDTH_SHOW);  
  this.appendValueInput("height_")
      .setCheck("Number")
      .appendField(Blockly.Msg.FACEAPIDETECT_HEIGHT_SHOW);	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['faceapidetect_startvideo_stream'] = {
  init: function() { 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.FACEAPIDETECT_SHOW);    
  this.appendValueInput("src_")
      .setCheck("String")
      .appendField(Blockly.Msg.FACEAPIDETECT_SRC_SHOW);	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};