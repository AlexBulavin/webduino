Blockly.JavaScript['thingspeak_update'] = function (block) {
  var key = Blockly.JavaScript.valueToCode(block, 'key', Blockly.JavaScript.ORDER_ATOMIC);
  var field1 = Blockly.JavaScript.valueToCode(block, 'field1', Blockly.JavaScript.ORDER_ATOMIC);
  var field2 = Blockly.JavaScript.valueToCode(block, 'field2', Blockly.JavaScript.ORDER_ATOMIC);
  var field3 = Blockly.JavaScript.valueToCode(block, 'field3', Blockly.JavaScript.ORDER_ATOMIC);
  var field4 = Blockly.JavaScript.valueToCode(block, 'field4', Blockly.JavaScript.ORDER_ATOMIC);
  var field5 = Blockly.JavaScript.valueToCode(block, 'field5', Blockly.JavaScript.ORDER_ATOMIC);
  var field6 = Blockly.JavaScript.valueToCode(block, 'field6', Blockly.JavaScript.ORDER_ATOMIC);
  var field7 = Blockly.JavaScript.valueToCode(block, 'field7', Blockly.JavaScript.ORDER_ATOMIC);
  var field8 = Blockly.JavaScript.valueToCode(block, 'field8', Blockly.JavaScript.ORDER_ATOMIC);
  
  if (!key) key="''";
  if (!field1) field1="''";
  if (!field2) field2="''";
  if (!field3) field3="''";
  if (!field4) field4="''";
  if (!field5) field5="''";
  if (!field6) field6="''";
  if (!field7) field7="''";
  if (!field8) field8="''";
  
  var code = 'ThingSpeak_update('+key+','+field1+','+field2+','+field3+','+field4+','+field5+','+field6+','+field7+','+field8+');\n';
  return code; 
};

Blockly.JavaScript['thingspeak_read1'] = function (block) {
  var key = Blockly.JavaScript.valueToCode(block, 'key', Blockly.JavaScript.ORDER_ATOMIC);
  var count = Blockly.JavaScript.valueToCode(block, 'count', Blockly.JavaScript.ORDER_ATOMIC);
  var api_key = Blockly.JavaScript.valueToCode(block, 'api_key', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'ThingSpeak_read(1,'+key+',"",'+count+','+api_key+');\n';
  return code; 
};

Blockly.JavaScript['thingspeak_read2'] = function (block) {
  var key = Blockly.JavaScript.valueToCode(block, 'key', Blockly.JavaScript.ORDER_ATOMIC);
  var field = Blockly.JavaScript.valueToCode(block, 'field', Blockly.JavaScript.ORDER_ATOMIC);
  var count = Blockly.JavaScript.valueToCode(block, 'count', Blockly.JavaScript.ORDER_ATOMIC); 
  var api_key = Blockly.JavaScript.valueToCode(block, 'api_key', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'ThingSpeak_read(2,'+key+','+field+','+count+','+api_key+');\n';
  return code; 
};

Blockly.JavaScript['thingspeak_read3'] = function (block) {
  var key = Blockly.JavaScript.valueToCode(block, 'key', Blockly.JavaScript.ORDER_ATOMIC);
  var api_key = Blockly.JavaScript.valueToCode(block, 'api_key', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'ThingSpeak_read(3,'+key+',"","",'+api_key+');\n';
  return code; 
};

Blockly.JavaScript['thingspeak_getresponse'] = function(block) {
  var code = "ThingSpeak_getResponse()";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['thingspeak_getresponsewait'] = function (block) {
  var timeout_ = Blockly.JavaScript.valueToCode(block, 'timeout', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'var startTime = new Date();\nvar timeout = ' +timeout_+ ';\nwhile ((ThingSpeak_getResponse()) == "") {\n  var endTime = new Date();\n  var interval = parseInt(endTime - startTime) / 1000;\n  if (interval>timeout) break;\n  await delay(0.1);\n}\n';
  return code;
};



Blockly.JavaScript['thingspeak_getresponsecount'] = function(block) {
  var code = "ThingSpeak_getResponseCount()";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['thingspeak_clearresponse'] = function(block) {
  var code = "ThingSpeak_clearResponse();\n";
  return code;
};
