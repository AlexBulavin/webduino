Blockly.JavaScript['webserial_button'] = function(block) {
  var value_id = block.getFieldValue('id_');  
  var value_show = block.getFieldValue('show_');
  var code = 'webserial_button("'+value_id+'","'+value_show+'");\n';
  return code;
};

Blockly.JavaScript['webserial_button_position'] = function(block) { 
  var value_id = block.getFieldValue('id_');   
  var value_left_ = Blockly.JavaScript.valueToCode(block, 'left_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_top_ = Blockly.JavaScript.valueToCode(block, 'top_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'webserial_button_position("'+value_id+'",' + value_left_ + ',' + value_top_ + ');\n';
  return code;
};

Blockly.JavaScript['webserial_sendtext'] = function(block) {
  var value_cmd = Blockly.JavaScript.valueToCode(block, 'cmd_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_end = block.getFieldValue('end_');
  var code = 'webserial_sendText('+value_cmd+',"'+value_end+'");\n';
  return code;
};

Blockly.JavaScript['webserial_senduint8'] = function(block) {
  var value_cmd = Blockly.JavaScript.valueToCode(block, 'cmd_', Blockly.JavaScript.ORDER_ATOMIC); 
  var code = 'webserial_sendUint8('+value_cmd+');\n';
  return code;
};

Blockly.JavaScript['webserial_get'] = function(block) {
  var code = 'webserial_get()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['webserial_getstate'] = function(block) {
  var code = 'webserial_getState()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['webserial_clear'] = function(block) { 
  var code = 'webserial_clear();\n';
  return code;
};

Blockly.JavaScript['webserial_baudrate'] = function(block) {
  var value_baudrate = block.getFieldValue('baudrate_');
  var code = 'webserial_baudrate('+value_baudrate+');\n';
  return code;
};
