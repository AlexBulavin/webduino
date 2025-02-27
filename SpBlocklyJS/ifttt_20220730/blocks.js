Blockly.Blocks['ifttt'] = {
  init: function() {
	this.appendDummyInput() 
		.appendField(Blockly.Msg.IFTTT_SHOW);
	this.appendValueInput("eventname")
		.setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.IFTTT_EVENTNAME_SHOW);  	  	  
    this.appendValueInput("key")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.IFTTT_KEY_SHOW);
    this.appendValueInput("value1")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.IFTTT_VALUE1_SHOW);
    this.appendValueInput("value2")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.IFTTT_VALUE2_SHOW);
    this.appendValueInput("value3")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.IFTTT_VALUE3_SHOW);
	this.setInputsInline(false);	  
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(110);
  } 
};