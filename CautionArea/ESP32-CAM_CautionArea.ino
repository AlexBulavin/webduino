/*
ESP32-CAM Caution area for Cellphone (tfjs coco-ssd)
Author : ChungYi Fu (Kaohsiung, Taiwan)  2021-7-31 00:00
https://www.facebook.com/francefu

Работает примерно так: при попазании заданного объекта в зону видимости (не в кадр вообще, а в обозначенную зону) происходит настроенное действие.


Необходимо изменить настройки браузера: разрешен доступ к небезопасному контенту.В противном случае незашифрованная ссылка http будет заблокирована и не сможет передаваться в потоковом режиме!Если вы загружаете веб-страницу на этот компьютер для выполнения, вам не нужно изменять настройки безопасности.
Выполнение URL-адреса браузера

Категория объекта
https://github.com/tensorflow/tfjs-models/blob/master/coco-ssd/src/classes.ts

http://192.168.xxx.xxx             //Интерфейс управления домашней страницей
http://192.168.xxx.xxx:81/stream   //Адрес потокового изображения       <img src="http://192.168.xxx.xxx:81/stream">
http://192.168.xxx.xxx/capture     //Получить статичное изображение          <img src="http://192.168.xxx.xxx/capture">
http://192.168.xxx.xxx/status      //Получение значений видеопараметров
http://192.168.xxx.xxx/wifi        //Установите пароль учетной записи Wi-Fi в локальной сети 
 
Пользовательский формат команды :  
http://APIP/control?cmd=P1;P2;P3;P4;P5;P6;P7;P8;P9
http://STAIP/control?cmd=P1;P2;P3;P4;P5;P6;P7;P8;P9

Предустановленный AP IP： 192.168.4.1
Пользовательский формат команды http://192.168.xxx.xxx/control?cmd=P1;P2;P3;P4;P5;P6;P7;P8;P9
http://192.168.xxx.xxx/control?ip                      //получить APIP, STAIP
http://192.168.xxx.xxx/control?mac                     //Получить MAC-адрес
http://192.168.xxx.xxx/control?restart                 //Перезапустить ESP32-CAM
http://192.168.xxx.xxx/control?digitalwrite=pin;value  //Цифровой выход
http://192.168.xxx.xxx/control?analogwrite=pin;value   //Аналоговый выход
http://192.168.xxx.xxx/control?digitalread=pin         //Цифровой вход
http://192.168.xxx.xxx/control?analogread=pin          //Аналоговый вход
http://192.168.xxx.xxx/control?touchread=pin           //Сенсор касания (тачсенсор)
http://192.168.xxx.xxx/control?flash=value             //Подсветка value= 0~255
http://192.168.xxx.xxx/control?buzzer                  //Пищалка(IO2)буззер

Формат адресов сервисов http://192.168.xxx.xxx/control?var=***&val=***
http://192.168.xxx.xxx/control?var=framesize&val=value    // value = 10->UXGA(1600x1200), 9->SXGA(1280x1024), 8->XGA(1024x768) ,7->SVGA(800x600), 6->VGA(640x480), 5 selected=selected->CIF(400x296), 4->QVGA(320x240), 3->HQVGA(240x176), 0->QQVGA(160x120)
http://192.168.xxx.xxx/control?var=quality&val=value      // value = 10 ~ 63
http://192.168.xxx.xxx/control?var=brightness&val=value   // value = -2 ~ 2
http://192.168.xxx.xxx/control?var=contrast&val=value     // value = -2 ~ 2
http://192.168.xxx.xxx/control?var=hmirror&val=value      // value = 0 or 1 
http://192.168.xxx.xxx/control?var=vflip&val=value        // value = 0 or 1 
http://192.168.xxx.xxx/control?var=flash&val=value        // value = 0 ~ 255 
      
Client IP：
ЗапросIP：http://192.168.4.1/?ip

Загрузка звука
https://taira-komori.jpn.org/freesoundtw.html

Онлайн-редактирование звука (увеличьте время редактирования звука до 0,2 секунды, а затем используйте его снова)
https://mp3cut.net/tw/
*/

//AP Пароль учетной записи для подключения (url домашней страницы http://192.168.4.1)
const char* apssid = "Classroom01";          //Разные станции могут/должны устанавливать разные apssid для различения между собой
const char* appassword = "12345678";         //AP Пароль должен содержать не менее 8 символов

String LineToken = "cGv0FDV01aGR9b2W0gH7zmdOnuOv8gusHATO1FGpyOW";  //Отправить уведомление с IP-адреса локальной сети на линию (вы не можете заполнить поле, если оно вам не нужно)

int Buzzer = 2;  //Пин зуммера： IO2

#include <WiFi.h>
#include <HTTPClient.h>
HTTPClient http;
#include "esp_camera.h"          //Функция видеосъемки
#include "soc/soc.h"             //Используется при нестабильной подаче питания без перезапуска 
#include "soc/rtc_cntl_reg.h"    //Используется при нестабильной подаче питания без перезапуска

//https://github.com/espressif/arduino-esp32/blob/master/libraries/Preferences/src/Preferences.h
#include <Preferences.h>
Preferences preferences;

String wifi_ssid ="";
String wifi_password ="";

//Официальная библиотека
#include "esp_http_server.h"
#include "esp_camera.h"
#include "img_converters.h"

String Feedback="";   //Пользовательские инструкции для возврата клиентских сообщений

//Значения пользовательских командных параметров
String Command="";
String cmd="";
String P1="";
String P2="";
String P3="";
String P4="";
String P5="";
String P6="";
String P7="";
String P8="";
String P9="";

//Настройте значение статуса разборки для команды
byte ReceiveState=0;
byte cmdState=1;
byte strState=1;
byte questionstate=0;
byte equalstate=0;
byte semicolonstate=0;

typedef struct {
        httpd_req_t *req;
        size_t len;
} jpg_chunking_t;

#define PART_BOUNDARY "123456789000000000000987654321"
static const char* _STREAM_CONTENT_TYPE = "multipart/x-mixed-replace;boundary=" PART_BOUNDARY;
static const char* _STREAM_BOUNDARY = "\r\n--" PART_BOUNDARY "\r\n";
static const char* _STREAM_PART = "Content-Type: image/jpeg\r\nContent-Length: %u\r\n\r\n";

httpd_handle_t stream_httpd = NULL;
httpd_handle_t camera_httpd = NULL;

//ESP32-CA MНастройка вывода модуля камеры (должны быть настройки для AI Thinker или иного используемого)
#define PWDN_GPIO_NUM     32
#define RESET_GPIO_NUM    -1
#define XCLK_GPIO_NUM      0
#define SIOD_GPIO_NUM     26
#define SIOC_GPIO_NUM     27

#define Y9_GPIO_NUM       35
#define Y8_GPIO_NUM       34
#define Y7_GPIO_NUM       39
#define Y6_GPIO_NUM       36
#define Y5_GPIO_NUM       21
#define Y4_GPIO_NUM       19
#define Y3_GPIO_NUM       18
#define Y2_GPIO_NUM        5
#define VSYNC_GPIO_NUM    25
#define HREF_GPIO_NUM     23
#define PCLK_GPIO_NUM     22

void setup() {
  WRITE_PERI_REG(RTC_CNTL_BROWN_OUT_REG, 0);  //Настройка для выключения питания и перезапуска при нестабильном питании
  
  Serial.begin(115200);
  Serial.setDebugOutput(true);  //Включение отладочного вывода
  Serial.println();

  //Настройки конфигурации видео  https://github.com/espressif/esp32-camera/blob/master/driver/include/esp_camera.h
  camera_config_t config;
  config.ledc_channel = LEDC_CHANNEL_0;
  config.ledc_timer = LEDC_TIMER_0;
  config.pin_d0 = Y2_GPIO_NUM;
  config.pin_d1 = Y3_GPIO_NUM;
  config.pin_d2 = Y4_GPIO_NUM;
  config.pin_d3 = Y5_GPIO_NUM;
  config.pin_d4 = Y6_GPIO_NUM;
  config.pin_d5 = Y7_GPIO_NUM;
  config.pin_d6 = Y8_GPIO_NUM;
  config.pin_d7 = Y9_GPIO_NUM;
  config.pin_xclk = XCLK_GPIO_NUM;
  config.pin_pclk = PCLK_GPIO_NUM;
  config.pin_vsync = VSYNC_GPIO_NUM;
  config.pin_href = HREF_GPIO_NUM;
  config.pin_sscb_sda = SIOD_GPIO_NUM;
  config.pin_sscb_scl = SIOC_GPIO_NUM;
  config.pin_pwdn = PWDN_GPIO_NUM;
  config.pin_reset = RESET_GPIO_NUM;
  config.xclk_freq_hz = 20000000;
  config.pixel_format = PIXFORMAT_JPEG;
  

  //
  // WARNING!!! PSRAM IC required for UXGA resolution and high JPEG quality
  //            Ensure ESP32 Wrover Module or other board with PSRAM is selected
  //            Partial images will be transmitted if image exceeds buffer size
  //   
  // if PSRAM IC present, init with UXGA resolution and higher JPEG quality
  //                      for larger pre-allocated frame buffer.
  if(psramFound()){  //Проверяем существует ли микросхема памяти PSRAM (Psuedo SRAM)?
    config.frame_size = FRAMESIZE_UXGA;
    config.jpeg_quality = 10;
    config.fb_count = 2;
  } else {
    config.frame_size = FRAMESIZE_SVGA;
    config.jpeg_quality = 12;
    config.fb_count = 1;
  }

  //Инициализация видео
  esp_err_t err = esp_camera_init(&config);
  if (err != ESP_OK) {
    Serial.printf("Camera init failed with error 0x%x", err);
    ESP.restart();
  }

  //Настраиваемый размер видеокадра по умолчанию (размер разрешения)
  sensor_t * s = esp_camera_sensor_get();
  // initial sensors are flipped vertically and colors are a bit saturated
  if (s->id.PID == OV3660_PID) {
    s->set_vflip(s, 1); // flip it back
    s->set_brightness(s, 1); // up the brightness just a bit
    s->set_saturation(s, -2); // lower the saturation
  }

  //drop down frame size for higher initial frame rate
  s->set_framesize(s, FRAMESIZE_QVGA);  //Установите разрешение изображения при инициализации
  s->set_hmirror(s, 1);  //Зеркальное отражение
  
  //Вспышка/подсветка
  ledcAttachPin(4, 4);  
  ledcSetup(4, 5000, 8);    
  
  WiFi.mode(WIFI_AP_STA);

  Serial.println();
  //Установите номер учетной записи Wi-Fi локальной сети по умолчанию и пароль или очистите настройки Wi-Fi
  //Preferences_write("wifi", "ssid", "");
  //Preferences_write("wifi", "password", "");
        
  wifi_ssid = Preferences_read("wifi", "ssid");
  wifi_password = Preferences_read("wifi", "password");

  if (wifi_ssid!="") {
    for (int i=0;i<2;i++) {
      WiFi.begin(wifi_ssid.c_str(), wifi_password.c_str());    //Выполните подключение к сети
    
      delay(1000);
      Serial.println("");
      Serial.print("Connecting to ");
      Serial.println(wifi_ssid);
      
      long int StartTime=millis();
      while (WiFi.status() != WL_CONNECTED) {
          delay(500);
          if ((StartTime+5000) < millis()) break;    //Подождите 10 секунд для подключения
      } 
    
      if (WiFi.status() == WL_CONNECTED) {    //Если соединение установлено успешно
        WiFi.softAP((WiFi.localIP().toString()+"_"+(String)apssid).c_str(), appassword);   //Установите SSID для отображения IP-адреса клиента         
        Serial.println("");
        Serial.println("STAIP address: ");
        Serial.println(WiFi.localIP());
        Serial.println("");
    
        for (int i=0;i<5;i++) {   //Если вспышка подключена к Wi-Fi, установите режим быстрой вспышки
          ledcWrite(4,10);
          delay(200);
          ledcWrite(4,0);
          delay(200);    
        }
    
        if (LineToken != "") 
          LineNotify_http_get(LineToken, WiFi.localIP().toString());
        break;
      }
    } 
  }

  if (WiFi.status() != WL_CONNECTED) {    //Если соединение не удается
    WiFi.softAP((WiFi.softAPIP().toString()+"_"+(String)apssid).c_str(), appassword);         

    for (int i=0;i<2;i++) {    //Если вы не можете подключиться к Wi-Fi, установите режим медленного мигания вспышки
      ledcWrite(4,10);
      delay(1000);
      ledcWrite(4,0);
      delay(1000);    
    }
  }  

  Serial.println();
  Serial.println("APIP address: ");
  Serial.println(WiFi.softAPIP()); 
  Serial.println();
  startCameraServer(); 

  //Установите вспышку на низкий потенциал
  pinMode(4, OUTPUT);
  digitalWrite(4, LOW);      
}

void loop() {

}

int transferAngle(int angle, String side) {     
  if (angle > 180)
     angle = 180;
  else if (angle < 0)
    angle = 0;
  if (side="right")
    angle = 180 - angle;     
  return angle*6300/180+1700;
}

static size_t jpg_encode_stream(void * arg, size_t index, const void* data, size_t len){
    jpg_chunking_t *j = (jpg_chunking_t *)arg;
    if(!index){
        j->len = 0;
    }
    if(httpd_resp_send_chunk(j->req, (const char *)data, len) != ESP_OK){
        return 0;
    }
    j->len += len;
    return len;
}
//********************************************************************************************
static const char PROGMEM index_html[] = R"rawliteral(
  <!doctype html>
  <html>
      <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width,initial-scale=1">
          <title>ESP32-CAM Caution Area</title>  
      </head>
      <body>
      <button onclick="location.href='/wifi';">Настройка Wi-Fi</button>
      <button onclick="location.href='/HorizontalLine';">Горизонтальная буферная зона</button>
      <button onclick="location.href='/VerticalLine';">Вертикальная буферная зона</button>
      <button onclick="location.href='/Rect';">Прямоугольная буферная зона</button>
      </body>
  </html>        
)rawliteral";

//Домашняя страница   http://192.168.xxx.xxx
static esp_err_t index_handler(httpd_req_t *req){
  httpd_resp_set_type(req, "text/html");  //Установите формат возвращаемых данных
  httpd_resp_set_hdr(req, "Access-Control-Allow-Origin", "*");  //Разрешить междоменное чтение
  return httpd_resp_send(req, (const char *)index_html, strlen(index_html));
}
//********************************************************************************************
static const char index_wifi_html[] PROGMEM = R"rawliteral(
  <!doctype html>
  <html>
      <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width,initial-scale=1">
          <title>ESP32-CAM Caution Area</title>  
      </head>
      <body>
      WIFI SSID: <input type="text" id="ssid"><br>
      WIFI  PWD: <input type="text" id="pwd"><br>
      <input type="button" value="Задайте настройки WiFi" onclick="location.href='/control?resetwifi='+document.getElementById('ssid').value+';'+document.getElementById('pwd').value;">
      </body>
  </html>        
)rawliteral";

static esp_err_t index_wifi_handler(httpd_req_t *req) {
  httpd_resp_set_type(req, "text/html");
  httpd_resp_set_hdr(req, "Access-Control-Allow-Origin", "*");
  httpd_resp_send(req, (const char *)index_wifi_html, strlen(index_wifi_html));
  return ESP_OK;
}
//********************************************************************************************
static const char selectOptions[] PROGMEM = R"rawliteral(
<select id="object" onchange="count.innerHTML='';">\
                              <option value="person" selected="selected">person</option>
                              <option value="bicycle">bicycle</option>
                              <option value="car">car</option>
                              <option value="motorcycle">motorcycle</option>
                              <option value="airplane">airplane</option>
                              <option value="bus">bus</option>
                              <option value="train">train</option>
                              <option value="truck">truck</option>
                              <option value="boat">boat</option>
                              <option value="traffic light">traffic light</option>
                              <option value="fire hydrant">fire hydrant</option>
                              <option value="stop sign">stop sign</option>
                              <option value="parking meter">parking meter</option>
                              <option value="bench">bench</option>
                              <option value="bird">bird</option>
                              <option value="cat">cat</option>
                              <option value="dog">dog</option>
                              <option value="horse">horse</option>
                              <option value="sheep">sheep</option>
                              <option value="cow">cow</option>
                              <option value="elephant">elephant</option>
                              <option value="bear">bear</option>
                              <option value="zebra">zebra</option>
                              <option value="giraffe">giraffe</option>
                              <option value="backpack">backpack</option>
                              <option value="umbrella">umbrella</option>
                              <option value="handbag">handbag</option>
                              <option value="tie">tie</option>
                              <option value="suitcase">suitcase</option>
                              <option value="frisbee">frisbee</option>
                              <option value="skis">skis</option>
                              <option value="snowboard">snowboard</option>
                              <option value="sports ball">sports ball</option>
                              <option value="kite">kite</option>
                              <option value="baseball bat">baseball bat</option>
                              <option value="baseball glove">baseball glove</option>
                              <option value="skateboard">skateboard</option>
                              <option value="surfboard">surfboard</option>
                              <option value="tennis racket">tennis racket</option>
                              <option value="bottle">bottle</option>
                              <option value="wine glass">wine glass</option>
                              <option value="cup">cup</option>
                              <option value="fork">fork</option>
                              <option value="knife">knife</option>
                              <option value="spoon">spoon</option>
                              <option value="bowl">bowl</option>
                              <option value="banana">banana</option>
                              <option value="apple">apple</option>
                              <option value="sandwich">sandwich</option>
                              <option value="orange">orange</option>
                              <option value="broccoli">broccoli</option>
                              <option value="carrot">carrot</option>
                              <option value="hot dog">hot dog</option>
                              <option value="pizza">pizza</option>
                              <option value="donut">donut</option>
                              <option value="cake">cake</option>
                              <option value="chair">chair</option>
                              <option value="couch">couch</option>
                              <option value="potted plant">potted plant</option>
                              <option value="bed">bed</option>
                              <option value="dining table">dining table</option>
                              <option value="toilet">toilet</option>
                              <option value="tv">tv</option>
                              <option value="laptop">laptop</option>
                              <option value="mouse">mouse</option>
                              <option value="remote">remote</option>
                              <option value="keyboard">keyboard</option>
                              <option value="cell phone">cell phone</option>
                              <option value="microwave">microwave</option>
                              <option value="oven">oven</option>
                              <option value="toaster">toaster</option>
                              <option value="sink">sink</option>
                              <option value="refrigerator">refrigerator</option>
                              <option value="book">book</option>
                              <option value="clock">clock</option>
                              <option value="vase">vase</option>
                              <option value="scissors">scissors</option>
                              <option value="teddy bear">teddy bear</option>
                              <option value="hair drier">hair drier</option>
                              <option value="toothbrush">toothbrush</option>
      </select>
)rawliteral";

//********************************************************************************************
static const char index_HorizontalLine_html[] PROGMEM = R"rawliteral(
<!DOCTYPE html>
<html>
  <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <title>ESP32-CAM Область предупреждения о распознавании объекта (горизонтальная область)</title>
        <style>
          body{font-family:Arial,Helvetica,sans-serif;background:#181818;color:#EFEFEF;font-size:16px}h2{font-size:18px}section.main{display:flex}#menu,section.main{flex-direction:column}#menu{display:none;flex-wrap:nowrap;min-width:340px;background:#363636;padding:8px;border-radius:4px;margin-top:-10px;margin-right:10px}#content{display:flex;flex-wrap:wrap;align-items:stretch}figure{padding:0;margin:0;-webkit-margin-before:0;margin-block-start:0;-webkit-margin-after:0;margin-block-end:0;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:0;margin-inline-end:0}figure img{display:block;width:100%;height:auto;border-radius:4px;margin-top:8px}@media (min-width: 800px) and (orientation:landscape){#content{display:flex;flex-wrap:nowrap;align-items:stretch}figure img{display:block;max-width:100%;max-height:calc(100vh - 40px);width:auto;height:auto}figure{padding:0;margin:0;-webkit-margin-before:0;margin-block-start:0;-webkit-margin-after:0;margin-block-end:0;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:0;margin-inline-end:0}}section#buttons{display:flex;flex-wrap:nowrap;justify-content:space-between}#nav-toggle{cursor:pointer;display:block}#nav-toggle-cb{outline:0;opacity:0;width:0;height:0}#nav-toggle-cb:checked+#menu{display:flex}.input-group{display:flex;flex-wrap:nowrap;line-height:22px;margin:5px 0}.input-group>label{display:inline-block;padding-right:10px;min-width:47%}.input-group input,.input-group select{flex-grow:1}.range-max,.range-min{display:inline-block;padding:0 5px}button{display:block;margin:5px;padding:0 12px;border:0;line-height:28px;cursor:pointer;color:#fff;background:#ff3034;border-radius:5px;font-size:16px;outline:0}button:hover{background:#ff494d}button:active{background:#f21c21}button.disabled{cursor:default;background:#a0a0a0}input[type=range]{-webkit-appearance:none;width:100%;height:22px;background:#363636;cursor:pointer;margin:0}input[type=range]:focus{outline:0}input[type=range]::-webkit-slider-runnable-track{width:100%;height:2px;cursor:pointer;background:#EFEFEF;border-radius:0;border:0 solid #EFEFEF}input[type=range]::-webkit-slider-thumb{border:1px solid rgba(0,0,30,0);height:22px;width:22px;border-radius:50px;background:#ff3034;cursor:pointer;-webkit-appearance:none;margin-top:-11.5px}input[type=range]:focus::-webkit-slider-runnable-track{background:#EFEFEF}input[type=range]::-moz-range-track{width:100%;height:2px;cursor:pointer;background:#EFEFEF;border-radius:0;border:0 solid #EFEFEF}input[type=range]::-moz-range-thumb{border:1px solid rgba(0,0,30,0);height:22px;width:22px;border-radius:50px;background:#ff3034;cursor:pointer}input[type=range]::-ms-track{width:100%;height:2px;cursor:pointer;background:0 0;border-color:transparent;color:transparent}input[type=range]::-ms-fill-lower{background:#EFEFEF;border:0 solid #EFEFEF;border-radius:0}input[type=range]::-ms-fill-upper{background:#EFEFEF;border:0 solid #EFEFEF;border-radius:0}input[type=range]::-ms-thumb{border:1px solid rgba(0,0,30,0);height:22px;width:22px;border-radius:50px;background:#ff3034;cursor:pointer;height:2px}input[type=range]:focus::-ms-fill-lower{background:#EFEFEF}input[type=range]:focus::-ms-fill-upper{background:#363636}.switch{display:block;position:relative;line-height:22px;font-size:16px;height:22px}.switch input{outline:0;opacity:0;width:0;height:0}.slider{width:50px;height:22px;border-radius:22px;cursor:pointer;background-color:grey}.slider,.slider:before{display:inline-block;transition:.4s}.slider:before{position:relative;content:"";border-radius:50%;height:16px;width:16px;left:4px;top:3px;background-color:#fff}input:checked+.slider{background-color:#ff3034}input:checked+.slider:before{-webkit-transform:translateX(26px);transform:translateX(26px)}select{border:1px solid #363636;font-size:14px;height:22px;outline:0;border-radius:5px}.image-container{position:relative;min-width:160px}.close{position:absolute;right:5px;top:5px;background:#ff3034;width:16px;height:16px;border-radius:100px;color:#fff;text-align:center;line-height:18px;cursor:pointer}.hidden{display:none}
        </style>
        <script src="https:\/\/ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js"></script>
        <script src="https:\/\/cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.3.1/dist/tf.min.js"> </script>
        <script src="https:\/\/cdn.jsdelivr.net/npm/@tensorflow-models/coco-ssd@2.1.0"> </script>       
    </head>
    <body>
    <figure>
    ESP32-CAM IP：<input type="text" id="ip" size="14" value="192.168.">&nbsp;&nbsp;<input type="button" value="ОК" onclick="start();">
      <div id="stream-container" class="image-container hidden">
        <div class="close" id="close-stream">×</div>
        <img id="stream" src="" crossorigin="anonymous" style="background-color:#000000;display:none;">
        <table>
          <tr>
          <td align="left"><input type="range" id="lefttop" min="0" max="100" value="25" step="1" required></td>
          <td align="right"><input type="range" id="righttop" min="0" max="100" value="25" step="1" required></td>
          </tr>
          <tr>
          <td colspan="2"><canvas id="canvas" width="320" height="240"></canvas></td>
          </tr>
          <tr>
          <td align="left"><input type="range" id="leftbottom" min="0" max="100" value="75" step="1" required></td>
          <td align="right"><input type="range" id="rightbottom" min="0" max="100" value="75" step="1" required></td>
          </tr>
        </table>
      </div>
    </figure>
        <section class="main">
            <section id="buttons">
                <table>
                <tr><td><button id="restartButton">Reset ESP</button></td><td><button id="toggle-stream" style="display:none">Start Stream</button></td><td align="right"><button id="face_enroll" style="display:none" class="disabled" disabled="disabled"></button><button id="get-still" style="display:none;">Начать видео </button></td></tr>
                <tr>
                  <td colspan="3">
                    <table>
                      <tbody>
                        <tr> 
                        <td colspan="2">
                          Позиционирование объекта
                          <select id="mark">
                          <option value="center">Центр</option>               
                          <option value="upper">Сверху</option>
                          <option value="lower" selected="selected">Снизу</option>
                          <option value="left">Слева</option>
                          <option value="right">Справа</option>
                          </select>
                            Отслеживание объектов
                          <div id="selectContainer"></div>

                            <span id="count" style="color:red">0</span>
                        </td>             
                      </tr>
                      <tr> 
                        <td>
                          Нижний предел оценки
                          <select id="score">
                          <option value="1.0">1</option>
                          <option value="0.9">0.9</option>
                          <option value="0.8">0.8</option>
                          <option value="0.7">0.7</option>
                          <option value="0.6">0.6</option>
                          <option value="0.5" selected="selected">0.5</option>
                          <option value="0.4">0.4</option>
                          <option value="0.3">0.3</option>
                          <option value="0.2">0.2</option>
                          <option value="0.1">0.1</option>
                          <option value="0">0</option>
                          </select>
                        </td>
                        <td>
                        <input id="complementary" type="checkbox">Обнаружение обратной зоны
                        </td>           
                      </tr>             
                      <tr><td><input type="checkbox" id="chkAud">Предупреждающий звук (mp3)</td><td><input type="text" id="aud" size="20" value="https:\/\/fustyles.github.io/webduino/paino_c.mp3"></td></tr> 
                      <tr><td><input type="checkbox" id="chkBuzzer">Зуммер(IO2)</td><td></td></tr>
                      <tr><td colspan="2"><input type="checkbox" id="chkLine">Линия захвата изображения<input type="text" id="token" size="10" value=""><input type="button" value="Передать изображение" onclick="SendCapturedImage();"></td></tr> 
                      <tr><td colspan="2"><span id="message" style="display:none"></span></td><td></td></tr> 
                    </tbody></table> 
                  </td>
                </tr>                
                </tbody></table>
            </section>         
            <div id="logo">
                <label for="nav-toggle-cb" id="nav-toggle">☰&nbsp;&nbsp;Видео Набор</label>
            </div>
            <div id="content">
                <div id="sidebar">
                    <input type="checkbox" id="nav-toggle-cb">
                    <nav id="menu">
                        <div class="input-group" id="flash-group">
                            <label for="flash">Вспышка</label>
                            <div class="range-min">0</div>
                            <input type="range" id="flash" min="0" max="255" value="0" class="default-action">
                            <div class="range-max">255</div>
                        </div>
                        <div class="input-group" id="framesize-group">
                            <label for="framesize">разрешение</label>
                            <select id="framesize" class="default-action">
                                <option value="10">UXGA(1600x1200)</option>
                                <option value="9">SXGA(1280x1024)</option>
                                <option value="8">XGA(1024x768)</option>
                                <option value="7">SVGA(800x600)</option>
                                <option value="6">VGA(640x480)</option>
                                <option value="5">CIF(400x296)</option>
                                <option value="4" selected="selected">QVGA(320x240)</option>
                                <option value="3">HQVGA(240x176)</option>
                                <option value="0">QQVGA(160x120)</option>
                            </select>
                        </div>
                        <div class="input-group" id="quality-group">
                            <label for="quality">Качество изображения</label>
                            <div class="range-min">10</div>
                            <input type="range" id="quality" min="10" max="63" value="10" class="default-action">
                            <div class="range-max">63</div>
                        </div>
                        <div class="input-group" id="brightness-group">
                            <label for="brightness">Яркость</label>
                            <div class="range-min">-2</div>
                            <input type="range" id="brightness" min="-2" max="2" value="0" class="default-action">
                            <div class="range-max">2</div>
                        </div>
                        <div class="input-group" id="contrast-group">
                            <label for="contrast">Контраст</label>
                            <div class="range-min">-2</div>
                            <input type="range" id="contrast" min="-2" max="2" value="0" class="default-action">
                            <div class="range-max">2</div>
                        </div>
                        <div class="input-group" id="hmirror-group">
                            <label for="hmirror">Зеркальное отражение</label>
                            <div class="switch">
                                <input id="hmirror" type="checkbox" class="default-action" checked>
                                <label class="slider" for="hmirror"></label>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </section>
        <iframe id="ifr" style="display:none;position:absolute" src=""></iframe>
        <div id="position" style="display:none;color:blue;font-size:40px"></div>
        <div id="result" style="color:red">Загрузка модели распознавания объектов...</div>   
        
        <div style="display:none">
        <form id="myForm" action="https:\/\/script.google.com/macros/s/AKfycbyp1xvWg-UCSrLsL8zt-ba_0n96uNTpAFyRry9ifCnRbtK-vgg/exec" method="post" target="sendcapturedimage">
        <input type="text" id="myFilename" name="myFilename" value="Caution Area" style="display:none">
        <input type="text" id="myToken" name="myToken" value="" style="display:none">
        <textarea id="myFile" name="myFile" rows="10" cols="50" style="display:none"></textarea><br>
        </form>
        <iframe id="sendcapturedimage" name="sendcapturedimage" style="display:none"></iframe>
        </div>
    
        <script>
        var baseHost = "";
        const selectOptions = FPSTR(selectOptions);

        function start() {
            baseHost = 'http:\/\/'+document.getElementById("ip").value;  //var baseHost = document.location.origin
            var streamUrl = baseHost + ':81';
            const hide = el => {
              el.classList.add('hidden')
            }
            const show = el => {
              el.classList.remove('hidden')
            }
            const disable = el => {
              el.classList.add('disabled')
              el.disabled = true
            }
            const enable = el => {
              el.classList.remove('disabled')
              el.disabled = false
            }
            const updateValue = (el, value, updateRemote) => {
              updateRemote = updateRemote == null ? true : updateRemote
              let initialValue
              if (el.type === 'checkbox') {
                initialValue = el.checked
                value = !!value
                el.checked = value
              } else {
                initialValue = el.value
                el.value = value
              }
              if (updateRemote && initialValue !== value) {
                updateConfig(el);
              } 
            // Найти элемент, в который вы хотите вставить select
            const selectContainer = document.getElementById("selectContainer");

            // Вставить selectOptions внутрь selectContainer
            selectContainer.innerHTML = selectOptions;

            }
            function updateConfig (el) {
              let value
              switch (el.type) {
                case 'checkbox':
                  value = el.checked ? 1 : 0
                  break
                case 'range':
                case 'select-one':
                  value = el.value
                  break
                case 'button':
                case 'submit':
                  value = '1'
                  break
                default:
                  return
              }
              const query = `${baseHost}/control?var=${el.id}&val=${value}`
              fetch(query)
                .then(response => {
                  console.log(`request to ${query} finished, status: ${response.status}`)
                })
            }
            document
              .querySelectorAll('.close')
              .forEach(el => {
                el.onclick = () => {
                  hide(el.parentNode)
                }
              })
            // read initial values
      
            fetch(`${baseHost}/status`)
              .then(function (response) {
                return response.json()
              })
              .then(function (state) {
                document
                  .querySelectorAll('.default-action')
                  .forEach(el => {
                    updateValue(el, state[el.id], false)
                  })
              })
      
            const view = document.getElementById('stream')
            const viewContainer = document.getElementById('stream-container')
            const restartButton = document.getElementById('restartButton')
            const stillButton = document.getElementById('get-still')
            const streamButton = document.getElementById('toggle-stream')
            const closeButton = document.getElementById('close-stream')

            const stopStream = () => {
              //window.stop();
              streamButton.innerHTML = 'Start Stream'
            }
            const startStream = () => {
              view.src = `${streamUrl}/stream`
              show(viewContainer)
              streamButton.innerHTML = 'Stop Stream'
            }
            
            //Добавь Сснова включите питание событие нажатия кнопки (Пользовательский формат команды：http://192.168.xxx.xxx/control?cmd=P1;P2;P3;P4;P5;P6;P7;P8;P9)
            restartButton.onclick = () => {
              fetch(baseHost+"/control?restart");
            } 
                        
            // Attach actions to buttons
            stillButton.onclick = () => {
              stopStream()
        
              baseHost = "http:\/\/"+ip.value;
              streamUrl = baseHost + ':81';
              result.innerHTML = "";
              canvas.style.display = "block"; 
        
              try{
                view.src = `${baseHost}/capture?_cb=${Date.now()}`
              }
              catch(e) {
                view.src = `${baseHost}/capture?_cb=${Date.now()}`  
              }
              show(viewContainer)
            }
            closeButton.onclick = () => {
              stopStream()
              hide(viewContainer)
            }
            streamButton.onclick = () => {
              const streamEnabled = streamButton.innerHTML === 'Stop Stream'
              if (streamEnabled) {
                stopStream()
              } else {
                startStream()
              }
            }
            // Attach default on change action
            document
              .querySelectorAll('.default-action')
              .forEach(el => {
                el.onchange = () => updateConfig(el)
              })
          }
        </script>
        <script>
          var ip = document.getElementById('ip');
          var link = document.getElementById('link');
          var canvas = document.getElementById('canvas');
          var context = canvas.getContext("2d"); 
          var ShowImage = document.getElementById('stream');
          var example = document.getElementById('example');
          var result = document.getElementById('result');
          var count = document.getElementById('count');
          var score = document.getElementById('score');
          var complementary = document.getElementById('complementary');
          var getStill = document.getElementById('get-still');
          var hmirror = document.getElementById('hmirror'); 
          var ifr = document.getElementById('ifr');
      
          var lefttop = document.getElementById('lefttop');
          var righttop = document.getElementById('righttop');
          var leftbuttom = document.getElementById('leftbottom');
          var rightbuttom = document.getElementById('rightbottom');
          var token = document.getElementById('token');         
          var aud = document.getElementById('aud');
          var chkAud = document.getElementById('chkAud');
          var chkLine = document.getElementById('chkLine');
          var chkBuzzer = document.getElementById('chkBuzzer');
          var alarm = new Audio(aud.value);
          var position = document.getElementById('position'); 
          var mark = document.getElementById('mark');
      
          var Model;
                    
          function loadModel() {
            cocoSsd.load().then(cocoSsd_Model => {
              Model = cocoSsd_Model;
              getStill.style.display = "block";
              result.innerHTML = "Пожалуйста, нажмите кнопку Начать видео ";
            }); 
          }
          
          ShowImage.onload = function (event) {
            if (Model) {
              try { 
                document.createEvent("TouchEvent");
                DetectImage();
              }
              catch(e) { 
                DetectImage();
              }   
            }     
          }
     
          function DetectImage() {
            canvas.setAttribute("width", ShowImage.width);
            canvas.setAttribute("height", ShowImage.height);
            context.drawImage(ShowImage,0,0,ShowImage.width,ShowImage.height); 
                       
            Model.detect(canvas).then(Predictions => {    
              var objectCount=0;  //Счётчик общего количества обнаруженных объектов
              context.strokeStyle = 'yellow';
              context.lineWidth = 5;    
              context.beginPath();
              context.moveTo(0, lefttop.value*ShowImage.height/100);
              context.lineTo(ShowImage.width, righttop.value*ShowImage.height/100);
              context.stroke();
              context.beginPath();
              context.moveTo(0, leftbottom.value*ShowImage.height/100);
              context.lineTo(ShowImage.width, rightbottom.value*ShowImage.height/100);
              context.stroke(); 
    
              //console.log('Predictions: ', Predictions);
              if (Predictions.length>0) {
                result.innerHTML = "";
                var s = (canvas.width>canvas.height)?canvas.width:canvas.height;
                for (var i=0;i<Predictions.length;i++) {
                  const x = Predictions[i].bbox[0];
                  const y = Predictions[i].bbox[1];         
                  const width = Predictions[i].bbox[2];
                  const height = Predictions[i].bbox[3];
                  var mark_x = 0;
                  var mark_y = 0;
                  if (mark.value=="upper") {
                  mark_x = x + width/2;
                  mark_y = y;
                  } 
                  else if (mark.value=="lower") {
                  mark_x = x + width/2;
                  mark_y = y + height;
                  }
                  else if (mark.value=="left") {
                  mark_x = x;
                  mark_y = y + height/2;
                  }
                  else if (mark.value=="right") {
                  mark_x = x + width;
                  mark_y = y + height/2;
                  }
                  else if (mark.value=="center") {
                  mark_x = x + width/2;
                  mark_y = y + height/2;
                  } 
          
                  result.innerHTML+= "[ "+i+" ] "+Predictions[i].class+", "+Math.round(Predictions[i].score*100)+"%, "+Math.round(x)+", "+Math.round(y)+", "+Math.round(width)+", "+Math.round(height)+"<br>";
                  if (Predictions[i].class==object.value&&Predictions[i].score>=score.value) {   
                    context.fillStyle="#00FFFF";        
                    context.beginPath();
                    context.arc(mark_x, mark_y, 5, 0, Math.PI*2, true);
                    context.fill();
                    context.closePath();
                    
                    var lt = Number(lefttop.value*ShowImage.height/100)+0.1;
                    var rt = Number(righttop.value*ShowImage.height/100);
                    var lb = Number(leftbottom.value*ShowImage.height/100)+0.1;
                    var rb = Number(rightbottom.value*ShowImage.height/100);
                    
                    var p1,p2;
                    var tx1 =  (0 - ShowImage.width) / (lt - rt) * (mark_y - rt) + ShowImage.width;
                    if (tx1>mark_x) {
                      p1 = 1;
                    }
                    else {
                      p1 = 0;
                    }
                    
                    var tx2 =  (0 - ShowImage.width) / (lb - rb) * (mark_y - rb) + ShowImage.width;
                    if (tx2>mark_x) {
                      p2 = 1;
                    }
                    else {
                      p2 = 0;
                    }   
            
                    if ((lt>rt)&&(lb>rb)) {
                      if (p1==1)
                        position.innerHTML = "1";
                      else if (p1==0&&p2==1)
                        position.innerHTML = "2";
                      else if (p2==0)
                        position.innerHTML = "3"; 
                    } else if ((lt<rt)&&(lb<rb)) {
                      if (p1==0)
                        position.innerHTML = "1";
                      else if (p1==1&&p2==0)
                        position.innerHTML = "2";
                      else if (p2==1)
                        position.innerHTML = "3";
                    }  else if ((lt>rt)&&(lb<rb)) {
                      if (p1==1)
                        position.innerHTML = "1";
                      else if (p1==0&&p2==0)
                        position.innerHTML = "2";
                      else if (p2==1)
                        position.innerHTML = "3";
                    }  else if ((lt<rt)&&(lb>rb)) {
                      if (p1==0)
                        position.innerHTML = "1";
                      else if (p1==1&&p2==1)
                        position.innerHTML = "2";
                      else if (p2==0)
                        position.innerHTML = "3";
                    }
                    
                    var state = false;
                    if (position.innerHTML == "2"&&!complementary.checked&&(alarm.paused||alarm.ended)) {       
                      state=true;
                    }
                    else if (position.innerHTML != "2"&&complementary.checked&&(alarm.paused||alarm.ended)) {       
                      state=true;
                    }
          
                    if (state==true) {
                      if (chkAud.checked) {
                        alarm.src = aud.value;
                        alarm.play();
                      }
                      if (chkLine.checked)
                        ifr.src = 'http:\/\/linenotify.com/notify.php?token='+token.value+'&message=В буферной зоне находится персонал';                      
                      if (chkBuzzer.checked)
                        $.ajax({url: baseHost+'/control?buzzer='+position.innerHTML, async: false}); 
                      }
                  }
                            
                  if (Predictions[i].class==object.value) {
                    objectCount++;
                  }  
                }
                count.innerHTML = objectCount;
              }
              else {
                position.innerHTML = "";                
                result.innerHTML = "Unrecognizable";
                count.innerHTML = "0";
              }
              
              try { 
                document.createEvent("TouchEvent");
                setTimeout(function(){getStill.click();},250);
              }
              catch(e) { 
                setTimeout(function(){getStill.click();},150);
              } 
            });
          }
      
        function SendCapturedImage() {
          //var date = new Date();
          //myFilename.value = date.getFullYear()+"_"+(date.getMonth()+1)+"_"+date.getDate()+"_"+date.getHours()+"_"+date.getMinutes()+"_"+date.getSeconds()+".png";
          myFile.value = canvas.toDataURL();
          myToken.value = token.value;
          myForm.submit();
        } 

        //  URL-адрес/?192.168.1.38  Может ли он быть введен автоматически?Значение IP-адреса после параметра
        var href=location.href;
        if (href.indexOf("?")!=-1) {
          ip.value = location.search.split("?")[1].replace(/http:\/\//g,"");
          start();
        }
        else if (href.indexOf("http")!=-1) {
          ip.value = location.host;
          start();
        }

        aud.value = aud.value.replace(/\\\//g,"/");
        loadModel();    
        </script>
    </body>
</html>  
)rawliteral";

static esp_err_t index_HorizontalLine_handler(httpd_req_t *req) {
  httpd_resp_set_type(req, "text/html");
  httpd_resp_set_hdr(req, "Access-Control-Allow-Origin", "*");
  httpd_resp_send(req, (const char *)index_HorizontalLine_html, strlen(index_HorizontalLine_html));
  return ESP_OK;
}
//********************************************************************************************
static const char index_VerticalLine_html[] PROGMEM = R"rawliteral(
<!DOCTYPE html>
<html>
    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <title>ESP32-CAM Область предупреждения о распознавании объекта (вертикальная область)</title>
        <style>
          body{font-family:Arial,Helvetica,sans-serif;background:#181818;color:#EFEFEF;font-size:16px}h2{font-size:18px}section.main{display:flex}#menu,section.main{flex-direction:column}#menu{display:none;flex-wrap:nowrap;min-width:340px;background:#363636;padding:8px;border-radius:4px;margin-top:-10px;margin-right:10px}#content{display:flex;flex-wrap:wrap;align-items:stretch}figure{padding:0;margin:0;-webkit-margin-before:0;margin-block-start:0;-webkit-margin-after:0;margin-block-end:0;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:0;margin-inline-end:0}figure img{display:block;width:100%;height:auto;border-radius:4px;margin-top:8px}@media (min-width: 800px) and (orientation:landscape){#content{display:flex;flex-wrap:nowrap;align-items:stretch}figure img{display:block;max-width:100%;max-height:calc(100vh - 40px);width:auto;height:auto}figure{padding:0;margin:0;-webkit-margin-before:0;margin-block-start:0;-webkit-margin-after:0;margin-block-end:0;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:0;margin-inline-end:0}}section#buttons{display:flex;flex-wrap:nowrap;justify-content:space-between}#nav-toggle{cursor:pointer;display:block}#nav-toggle-cb{outline:0;opacity:0;width:0;height:0}#nav-toggle-cb:checked+#menu{display:flex}.input-group{display:flex;flex-wrap:nowrap;line-height:22px;margin:5px 0}.input-group>label{display:inline-block;padding-right:10px;min-width:47%}.input-group input,.input-group select{flex-grow:1}.range-max,.range-min{display:inline-block;padding:0 5px}button{display:block;margin:5px;padding:0 12px;border:0;line-height:28px;cursor:pointer;color:#fff;background:#ff3034;border-radius:5px;font-size:16px;outline:0}button:hover{background:#ff494d}button:active{background:#f21c21}button.disabled{cursor:default;background:#a0a0a0}input[type=range]{-webkit-appearance:none;width:100%;height:22px;background:#363636;cursor:pointer;margin:0}input[type=range]:focus{outline:0}input[type=range]::-webkit-slider-runnable-track{width:100%;height:2px;cursor:pointer;background:#EFEFEF;border-radius:0;border:0 solid #EFEFEF}input[type=range]::-webkit-slider-thumb{border:1px solid rgba(0,0,30,0);height:22px;width:22px;border-radius:50px;background:#ff3034;cursor:pointer;-webkit-appearance:none;margin-top:-11.5px}input[type=range]:focus::-webkit-slider-runnable-track{background:#EFEFEF}input[type=range]::-moz-range-track{width:100%;height:2px;cursor:pointer;background:#EFEFEF;border-radius:0;border:0 solid #EFEFEF}input[type=range]::-moz-range-thumb{border:1px solid rgba(0,0,30,0);height:22px;width:22px;border-radius:50px;background:#ff3034;cursor:pointer}input[type=range]::-ms-track{width:100%;height:2px;cursor:pointer;background:0 0;border-color:transparent;color:transparent}input[type=range]::-ms-fill-lower{background:#EFEFEF;border:0 solid #EFEFEF;border-radius:0}input[type=range]::-ms-fill-upper{background:#EFEFEF;border:0 solid #EFEFEF;border-radius:0}input[type=range]::-ms-thumb{border:1px solid rgba(0,0,30,0);height:22px;width:22px;border-radius:50px;background:#ff3034;cursor:pointer;height:2px}input[type=range]:focus::-ms-fill-lower{background:#EFEFEF}input[type=range]:focus::-ms-fill-upper{background:#363636}.switch{display:block;position:relative;line-height:22px;font-size:16px;height:22px}.switch input{outline:0;opacity:0;width:0;height:0}.slider{width:50px;height:22px;border-radius:22px;cursor:pointer;background-color:grey}.slider,.slider:before{display:inline-block;transition:.4s}.slider:before{position:relative;content:"";border-radius:50%;height:16px;width:16px;left:4px;top:3px;background-color:#fff}input:checked+.slider{background-color:#ff3034}input:checked+.slider:before{-webkit-transform:translateX(26px);transform:translateX(26px)}select{border:1px solid #363636;font-size:14px;height:22px;outline:0;border-radius:5px}.image-container{position:relative;min-width:160px}.close{position:absolute;right:5px;top:5px;background:#ff3034;width:16px;height:16px;border-radius:100px;color:#fff;text-align:center;line-height:18px;cursor:pointer}.hidden{display:none}
        </style>
        <script src="https:\/\/ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js"></script>
        <script src="https:\/\/cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.3.1/dist/tf.min.js"> </script>
        <script src="https:\/\/cdn.jsdelivr.net/npm/@tensorflow-models/coco-ssd@2.1.0"> </script>       
    </head>
    <body>
    <figure>
    ESP32-CAM IP：<input type="text" id="ip" size="14" value="192.168.">&nbsp;&nbsp;<input type="button" value="Набор" onclick="start();">
      <div id="stream-container" class="image-container hidden">
        <div class="close" id="close-stream">×</div>
        <img id="stream" src="" crossorigin="anonymous" style="background-color:#000000;display:none;">
        <table>
          <tr>
          <td align="left"><input type="range" id="lefttop" min="0" max="100" value="25" step="1" required></td>
          <td align="right"><input type="range" id="righttop" min="0" max="100" value="75" step="1" required></td>
          </tr>
          <tr>
          <td colspan="2"><canvas id="canvas"></canvas></td>
          </tr>
          <tr>
          <td align="left"><input type="range" id="leftbottom" min="0" max="100" value="25" step="1" required></td>
          <td align="right"><input type="range" id="rightbottom" min="0" max="100" value="75" step="1" required></td>
          </tr>
        </table>
      </div>
      </figure>
        <section class="main">
            <section id="buttons">
                <table>
                <tr><td><button id="restartButton">Снова включите питание</button></td><td><button id="toggle-stream" style="display:none">Start Stream</button></td><td align="right"><button id="face_enroll" style="display:none" class="disabled" disabled="disabled"></button><button id="get-still" style="display:none;">Начать Видео </button></td></tr>
                <tr>
                  <td colspan="3">
                    <table>
                      <tbody>
                      <tr> 
                        <td colspan="2">
                          Позиционирование объекта
                          <select id="mark">
                          <option value="center">Центр</option>               
                          <option value="upper">Верхний</option>
                          <option value="lower" selected="selected">Нижний</option>
                          <option value="left">Левый</option>
                          <option value="right">Правый</option>
                          </select>
                            Отслеживание объектов
                            <select id="object" onchange="count.innerHTML='';">
                              <option value="person" selected="selected">person</option>
                              <option value="bicycle">bicycle</option>
                              <option value="car">car</option>
                              <option value="motorcycle">motorcycle</option>
                              <option value="airplane">airplane</option>
                              <option value="bus">bus</option>
                              <option value="train">train</option>
                              <option value="truck">truck</option>
                              <option value="boat">boat</option>
                              <option value="traffic light">traffic light</option>
                              <option value="fire hydrant">fire hydrant</option>
                              <option value="stop sign">stop sign</option>
                              <option value="parking meter">parking meter</option>
                              <option value="bench">bench</option>
                              <option value="bird">bird</option>
                              <option value="cat">cat</option>
                              <option value="dog">dog</option>
                              <option value="horse">horse</option>
                              <option value="sheep">sheep</option>
                              <option value="cow">cow</option>
                              <option value="elephant">elephant</option>
                              <option value="bear">bear</option>
                              <option value="zebra">zebra</option>
                              <option value="giraffe">giraffe</option>
                              <option value="backpack">backpack</option>
                              <option value="umbrella">umbrella</option>
                              <option value="handbag">handbag</option>
                              <option value="tie">tie</option>
                              <option value="suitcase">suitcase</option>
                              <option value="frisbee">frisbee</option>
                              <option value="skis">skis</option>
                              <option value="snowboard">snowboard</option>
                              <option value="sports ball">sports ball</option>
                              <option value="kite">kite</option>
                              <option value="baseball bat">baseball bat</option>
                              <option value="baseball glove">baseball glove</option>
                              <option value="skateboard">skateboard</option>
                              <option value="surfboard">surfboard</option>
                              <option value="tennis racket">tennis racket</option>
                              <option value="bottle">bottle</option>
                              <option value="wine glass">wine glass</option>
                              <option value="cup">cup</option>
                              <option value="fork">fork</option>
                              <option value="knife">knife</option>
                              <option value="spoon">spoon</option>
                              <option value="bowl">bowl</option>
                              <option value="banana">banana</option>
                              <option value="apple">apple</option>
                              <option value="sandwich">sandwich</option>
                              <option value="orange">orange</option>
                              <option value="broccoli">broccoli</option>
                              <option value="carrot">carrot</option>
                              <option value="hot dog">hot dog</option>
                              <option value="pizza">pizza</option>
                              <option value="donut">donut</option>
                              <option value="cake">cake</option>
                              <option value="chair">chair</option>
                              <option value="couch">couch</option>
                              <option value="potted plant">potted plant</option>
                              <option value="bed">bed</option>
                              <option value="dining table">dining table</option>
                              <option value="toilet">toilet</option>
                              <option value="tv">tv</option>
                              <option value="laptop">laptop</option>
                              <option value="mouse">mouse</option>
                              <option value="remote">remote</option>
                              <option value="keyboard">keyboard</option>
                              <option value="cell phone">cell phone</option>
                              <option value="microwave">microwave</option>
                              <option value="oven">oven</option>
                              <option value="toaster">toaster</option>
                              <option value="sink">sink</option>
                              <option value="refrigerator">refrigerator</option>
                              <option value="book">book</option>
                              <option value="clock">clock</option>
                              <option value="vase">vase</option>
                              <option value="scissors">scissors</option>
                              <option value="teddy bear">teddy bear</option>
                              <option value="hair drier">hair drier</option>
                              <option value="toothbrush">toothbrush</option>
                            </select>
                            <span id="count" style="color:red">0</span>
                        </td>             
                      </tr>
                      <tr> 
                        <td>
                          Нижний предел оценки
                          <select id="score">
                          <option value="1.0">1</option>
                          <option value="0.9">0.9</option>
                          <option value="0.8">0.8</option>
                          <option value="0.7">0.7</option>
                          <option value="0.6">0.6</option>
                          <option value="0.5" selected="selected">0.5</option>
                          <option value="0.4">0.4</option>
                          <option value="0.3">0.3</option>
                          <option value="0.2">0.2</option>
                          <option value="0.1">0.1</option>
                          <option value="0">0</option>
                          </select>
                        </td>
                        <td>
                        <input id="complementary" type="checkbox">Обнаружение обратной зоны
                        </td>           
                      </tr>          
                      <tr><td><input type="checkbox" id="chkAud">Предупреждающий звук (mp3)</td><td><input type="text" id="aud" size="20" value="https:\/\/fustyles.github.io/webduino/paino_c.mp3"></td></tr> 
                      <tr><td><input type="checkbox" id="chkBuzzer">Зуммер(IO2)</td><td></td></tr>
                      <tr><td colspan="2"><input type="checkbox" id="chkLine">Скипетр линейного уведомления<input type="text" id="token" size="10" value=""><input type="button" value="Передача изображения" onclick="SendCapturedImage();"></td></tr> 
                      <tr><td colspan="2"><span id="message" style="display:none"></span></td><td></td></tr> 
                    </tbody></table> 
                  </td>
                </tr>                
                </tbody></table>
            </section>         
            <div id="logo">
                <label for="nav-toggle-cb" id="nav-toggle">☰&nbsp;&nbsp;Видео Набор</label>
            </div>
            <div id="content">
                <div id="sidebar">
                    <input type="checkbox" id="nav-toggle-cb">
                    <nav id="menu">
                        <div class="input-group" id="flash-group">
                            <label for="flash">Вспышка</label>
                            <div class="range-min">0</div>
                            <input type="range" id="flash" min="0" max="255" value="0" class="default-action">
                            <div class="range-max">255</div>
                        </div>
                        <div class="input-group" id="framesize-group">
                            <label for="framesize">разрешение</label>
                            <select id="framesize" class="default-action">
                                <option value="10">UXGA(1600x1200)</option>
                                <option value="9">SXGA(1280x1024)</option>
                                <option value="8">XGA(1024x768)</option>
                                <option value="7">SVGA(800x600)</option>
                                <option value="6">VGA(640x480)</option>
                                <option value="5">CIF(400x296)</option>
                                <option value="4" selected="selected">QVGA(320x240)</option>
                                <option value="3">HQVGA(240x176)</option>
                                <option value="0">QQVGA(160x120)</option>
                            </select>
                        </div>
                        <div class="input-group" id="quality-group">
                            <label for="quality">Качество изображения</label>
                            <div class="range-min">10</div>
                            <input type="range" id="quality" min="10" max="63" value="10" class="default-action">
                            <div class="range-max">63</div>
                        </div>
                        <div class="input-group" id="brightness-group">
                            <label for="brightness">Яркость</label>
                            <div class="range-min">-2</div>
                            <input type="range" id="brightness" min="-2" max="2" value="0" class="default-action">
                            <div class="range-max">2</div>
                        </div>
                        <div class="input-group" id="contrast-group">
                            <label for="contrast">Контраст</label>
                            <div class="range-min">-2</div>
                            <input type="range" id="contrast" min="-2" max="2" value="0" class="default-action">
                            <div class="range-max">2</div>
                        </div>
                        <div class="input-group" id="hmirror-group">
                            <label for="hmirror">Зеркальное отражение</label>
                            <div class="switch">
                                <input id="hmirror" type="checkbox" class="default-action" checked>
                                <label class="slider" for="hmirror"></label>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </section>
        <iframe id="ifr" style="display:none;position:absolute" src=""></iframe>
        <div id="position" style="display:none;color:blue;font-size:40px"></div>
        <div id="result" style="color:red">Загрузка модели распознавания объектов...</div> 
    
        <div style="display:none">
        <form id="myForm" action="https:\/\/script.google.com/macros/s/AKfycbyp1xvWg-UCSrLsL8zt-ba_0n96uNTpAFyRry9ifCnRbtK-vgg/exec" method="post" target="sendcapturedimage">
        <input type="text" id="myFilename" name="myFilename" value="Caution Area" style="display:none">
        <input type="text" id="myToken" name="myToken" value="" style="display:none">
        <textarea id="myFile" name="myFile" rows="10" cols="50" style="display:none"></textarea><br>
        </form>
        <iframe id="sendcapturedimage" name="sendcapturedimage" style="display:none"></iframe>
        </div>
    
        <script>
        baseHost = "";
        function start() {
          var baseHost = 'http:\/\/'+document.getElementById("ip").value;  //var baseHost = document.location.origin
          var streamUrl = baseHost + ':81';
            const hide = el => {
              el.classList.add('hidden')
            }
            const show = el => {
              el.classList.remove('hidden')
            }
            const disable = el => {
              el.classList.add('disabled')
              el.disabled = true
            }
            const enable = el => {
              el.classList.remove('disabled')
              el.disabled = false
            }
            const updateValue = (el, value, updateRemote) => {
              updateRemote = updateRemote == null ? true : updateRemote
              let initialValue
              if (el.type === 'checkbox') {
                initialValue = el.checked
                value = !!value
                el.checked = value
              } else {
                initialValue = el.value
                el.value = value
              }
              if (updateRemote && initialValue !== value) {
                updateConfig(el);
              } 
            }
            function updateConfig (el) {
              let value
              switch (el.type) {
                case 'checkbox':
                  value = el.checked ? 1 : 0
                  break
                case 'range':
                case 'select-one':
                  value = el.value
                  break
                case 'button':
                case 'submit':
                  value = '1'
                  break
                default:
                  return
              }
              const query = `${baseHost}/control?var=${el.id}&val=${value}`
              fetch(query)
                .then(response => {
                  console.log(`request to ${query} finished, status: ${response.status}`)
                })
            }
            document
              .querySelectorAll('.close')
              .forEach(el => {
                el.onclick = () => {
                  hide(el.parentNode)
                }
              })
            // read initial values
      
            fetch(`${baseHost}/status`)
              .then(function (response) {
                return response.json()
              })
              .then(function (state) {
                document
                  .querySelectorAll('.default-action')
                  .forEach(el => {
                    updateValue(el, state[el.id], false)
                  })
              })
      
            const view = document.getElementById('stream')
            const viewContainer = document.getElementById('stream-container')
            const restartButton = document.getElementById('restartButton')
            const stillButton = document.getElementById('get-still')
            const streamButton = document.getElementById('toggle-stream')
            const closeButton = document.getElementById('close-stream')
            const stopStream = () => {
              //window.stop();
              streamButton.innerHTML = 'Start Stream'
            }
            const startStream = () => {
              view.src = `${streamUrl}/stream`
              show(viewContainer)
              streamButton.innerHTML = 'Stop Stream'
            }
            
            //Добавь Снова включите питание событие нажатия кнопки (Пользовательский формат команды：http://192.168.xxx.xxx/control?cmd=P1;P2;P3;P4;P5;P6;P7;P8;P9)
            restartButton.onclick = () => {
              fetch(baseHost+"/control?restart");
            } 
                        
            // Attach actions to buttons
            stillButton.onclick = () => {
              stopStream()
        
            baseHost = "http:\/\/"+ip.value;
            streamUrl = baseHost + ':81';
            result.innerHTML = "";
            canvas.style.display = "block"; 
        
              try{
                view.src = `${baseHost}/capture?_cb=${Date.now()}`
              }
              catch(e) {
                view.src = `${baseHost}/capture?_cb=${Date.now()}`  
              }
              show(viewContainer)
            }
            closeButton.onclick = () => {
              stopStream()
              hide(viewContainer)
            }
            streamButton.onclick = () => {
              const streamEnabled = streamButton.innerHTML === 'Stop Stream'
              if (streamEnabled) {
                stopStream()
              } else {
                startStream()
              }
            }
            // Attach default on change action
            document
              .querySelectorAll('.default-action')
              .forEach(el => {
                el.onchange = () => updateConfig(el)
              })
          }
        </script>
        <script>
          var ip = document.getElementById('ip');
          var link = document.getElementById('link');
          var canvas = document.getElementById('canvas');
          var context = canvas.getContext("2d"); 
          var ShowImage = document.getElementById('stream');
          var example = document.getElementById('example');
          var result = document.getElementById('result');
          var count = document.getElementById('count');
          var score = document.getElementById('score');
          var complementary = document.getElementById('complementary');
          var getStill = document.getElementById('get-still');
          var hmirror = document.getElementById('hmirror');
          var ifr = document.getElementById('ifr');
      
          var lefttop = document.getElementById('lefttop');
          var righttop = document.getElementById('righttop');
          var token = document.getElementById('token');         
          var aud = document.getElementById('aud');
          var chkAud = document.getElementById('chkAud');
          var chkLine = document.getElementById('chkLine');
          var chkBuzzer = document.getElementById('chkBuzzer');
          var alarm = new Audio(aud.value);
          var position = document.getElementById('position'); 
          var mark = document.getElementById('mark');
      
          var Model; 
         
          function loadModel() {
            cocoSsd.load().then(cocoSsd_Model => {
              Model = cocoSsd_Model;
              getStill.style.display = "block";
              result.innerHTML = "Пожалуйста, нажмите кнопку Начать видео ";
            }); 
          }
          
          ShowImage.onload = function (event) {
            if (Model) {
              try { 
                document.createEvent("TouchEvent");
                DetectImage();
              }
              catch(e) { 
                DetectImage();
              }   
            }     
          }
     
          function DetectImage() {
            canvas.setAttribute("width", ShowImage.width);
            canvas.setAttribute("height", ShowImage.height);
            context.drawImage(ShowImage,0,0,ShowImage.width,ShowImage.height); 
                       
            Model.detect(canvas).then(Predictions => {    
              var objectCount=0;  //Запишите общее количество обнаруженных объектов
              context.strokeStyle = 'yellow';
              context.lineWidth = 5;    
              context.beginPath();
              context.moveTo(lefttop.value*ShowImage.width/100, 0);
              context.lineTo(leftbottom.value*ShowImage.width/100, ShowImage.height);
              context.stroke();
              context.beginPath();
              context.moveTo(righttop.value*ShowImage.width/100, 0);
              context.lineTo(rightbottom.value*ShowImage.width/100, ShowImage.height);
              context.stroke(); 
    
              //console.log('Predictions: ', Predictions);
              if (Predictions.length>0) {
                result.innerHTML = "";
                var s = (canvas.width>canvas.height)?canvas.width:canvas.height;
                for (var i=0;i<Predictions.length;i++) {
                  const x = Predictions[i].bbox[0];
                  const y = Predictions[i].bbox[1];
                  const width = Predictions[i].bbox[2];
                  const height = Predictions[i].bbox[3];
                  var mark_x = 0;
                  var mark_y = 0;
                  if (mark.value=="upper") {
                  mark_x = x + width/2;
                  mark_y = y;
                  } 
                  else if (mark.value=="lower") {
                  mark_x = x + width/2;
                  mark_y = y + height;
                  }
                  else if (mark.value=="left") {
                  mark_x = x;
                  mark_y = y + height/2;
                  }
                  else if (mark.value=="right") {
                  mark_x = x + width;
                  mark_y = y + height/2;
                  }
                  else if (mark.value=="center") {
                  mark_x = x + width/2;
                  mark_y = y + height/2;
                  } 
          
                  result.innerHTML+= "[ "+i+" ] "+Predictions[i].class+", "+Math.round(Predictions[i].score*100)+"%, "+Math.round(x)+", "+Math.round(y)+", "+Math.round(width)+", "+Math.round(height)+"<br>";
                  if (Predictions[i].class==object.value&&Predictions[i].score>=score.value) {   
                    context.fillStyle="#00FFFF";        
                    context.beginPath();
                    context.arc(mark_x,mark_y,5,0,Math.PI*2,true);
                    context.fill();
                    context.closePath();
                    
                    var lt = Number(lefttop.value*ShowImage.width/100)+0.1;
                    var rt = Number(righttop.value*ShowImage.width/100)+0.1;
                    var lb = Number(leftbottom.value*ShowImage.width/100);
                    var rb = Number(rightbottom.value*ShowImage.width/100);
                    
                    var p1,p2;
                    var tx1 =  (lt - lb) / (0 - ShowImage.height) * (mark_y - ShowImage.height) + lb;
                    if (tx1>mark_x) {
                      p1 = 1;
                    }
                    else {
                      p1 = 0;
                    }
                    
                    var tx2 =  (rt - rb) / (0 - ShowImage.height) * (mark_y - ShowImage.height) + rb;
                    if (tx2>mark_x) {
                      p2 = 1;
                    }
                    else {
                      p2 = 0;
                    } 
                    
                    if (p1==1)
                      position.innerHTML = "1";
                    else if (p1==0&&p2==1)
                      position.innerHTML = "2";
                    else if (p2==0)
                      position.innerHTML = "3";
                    
                    var state = false;
                    if (position.innerHTML == "2"&&!complementary.checked&&(alarm.paused||alarm.ended)) {       
                      state=true;
                    }
                    else if (position.innerHTML != "2"&&complementary.checked&&(alarm.paused||alarm.ended)) {       
                      state=true;
                    }
          
                    if (state==true) {
                      if (chkAud.checked) {
                        alarm.src = aud.value;
                        alarm.play();
                      }
                      if (chkLine.checked)
                        ifr.src = 'http:\/\/linenotify.com/notify.php?token='+token.value+'&message=В буферной зоне находится персонал';                      
                      if (chkBuzzer.checked)
                        $.ajax({url: baseHost+'/control?buzzer='+position.innerHTML, async: false}); 
                      }
                  }
                            
                  if (Predictions[i].class==object.value) {
                    objectCount++;
                  }  
                }
                count.innerHTML = objectCount;
              }
              else {
                position.innerHTML = "";                
                result.innerHTML = "Unrecognizable";
                count.innerHTML = "0";
              }
              
              try { 
                document.createEvent("TouchEvent");
                setTimeout(function(){getStill.click();},250);
              }
              catch(e) { 
                setTimeout(function(){getStill.click();},150);
              } 
            });
          }

          function SendCapturedImage() {
            //var date = new Date();
            //myFilename.value = date.getFullYear()+"_"+(date.getMonth()+1)+"_"+date.getDate()+"_"+date.getHours()+"_"+date.getMinutes()+"_"+date.getSeconds()+".png";
            myFile.value = canvas.toDataURL();
            myToken.value = token.value;
            myForm.submit();
          } 
      
          //  URL-адрес/?192.168.1.38  Может ли он быть введен автоматически?Значение IP-адреса после параметра
          var href=location.href;
          if (href.indexOf("?")!=-1) {
            ip.value = location.search.split("?")[1].replace(/http:\/\//g,"");
            start();
          }
          else if (href.indexOf("http")!=-1) {
            ip.value = location.host;
            start();
          } 
  
          aud.value = aud.value.replace(/\\\//g,"/");
          loadModel();        
        </script>
    </body>
</html>
)rawliteral";

static esp_err_t index_VerticalLine_handler(httpd_req_t *req) {
  httpd_resp_set_type(req, "text/html");
  httpd_resp_set_hdr(req, "Access-Control-Allow-Origin", "*");
  httpd_resp_send(req, (const char *)index_VerticalLine_html, strlen(index_VerticalLine_html));
  return ESP_OK;
}
//********************************************************************************************
static const char index_Rect_html[] PROGMEM = R"rawliteral(
<!DOCTYPE html>
<html>
  <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <title>ESP32-CAM Зона предупреждения об идентификации объекта (Пользовательская область)</title>
        <style>
          body{font-family:Arial,Helvetica,sans-serif;background:#181818;color:#EFEFEF;font-size:16px}h2{font-size:18px}section.main{display:flex}#menu,section.main{flex-direction:column}#menu{display:none;flex-wrap:nowrap;min-width:340px;background:#363636;padding:8px;border-radius:4px;margin-top:-10px;margin-right:10px}#content{display:flex;flex-wrap:wrap;align-items:stretch}figure{padding:0;margin:0;-webkit-margin-before:0;margin-block-start:0;-webkit-margin-after:0;margin-block-end:0;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:0;margin-inline-end:0}figure img{display:block;width:100%;height:auto;border-radius:4px;margin-top:8px}@media (min-width: 800px) and (orientation:landscape){#content{display:flex;flex-wrap:nowrap;align-items:stretch}figure img{display:block;max-width:100%;max-height:calc(100vh - 40px);width:auto;height:auto}figure{padding:0;margin:0;-webkit-margin-before:0;margin-block-start:0;-webkit-margin-after:0;margin-block-end:0;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:0;margin-inline-end:0}}section#buttons{display:flex;flex-wrap:nowrap;justify-content:space-between}#nav-toggle{cursor:pointer;display:block}#nav-toggle-cb{outline:0;opacity:0;width:0;height:0}#nav-toggle-cb:checked+#menu{display:flex}.input-group{display:flex;flex-wrap:nowrap;line-height:22px;margin:5px 0}.input-group>label{display:inline-block;padding-right:10px;min-width:47%}.input-group input,.input-group select{flex-grow:1}.range-max,.range-min{display:inline-block;padding:0 5px}button{display:block;margin:5px;padding:0 12px;border:0;line-height:28px;cursor:pointer;color:#fff;background:#ff3034;border-radius:5px;font-size:16px;outline:0}button:hover{background:#ff494d}button:active{background:#f21c21}button.disabled{cursor:default;background:#a0a0a0}input[type=range]{-webkit-appearance:none;width:100%;height:22px;background:#363636;cursor:pointer;margin:0}input[type=range]:focus{outline:0}input[type=range]::-webkit-slider-runnable-track{width:100%;height:2px;cursor:pointer;background:#EFEFEF;border-radius:0;border:0 solid #EFEFEF}input[type=range]::-webkit-slider-thumb{border:1px solid rgba(0,0,30,0);height:22px;width:22px;border-radius:50px;background:#ff3034;cursor:pointer;-webkit-appearance:none;margin-top:-11.5px}input[type=range]:focus::-webkit-slider-runnable-track{background:#EFEFEF}input[type=range]::-moz-range-track{width:100%;height:2px;cursor:pointer;background:#EFEFEF;border-radius:0;border:0 solid #EFEFEF}input[type=range]::-moz-range-thumb{border:1px solid rgba(0,0,30,0);height:22px;width:22px;border-radius:50px;background:#ff3034;cursor:pointer}input[type=range]::-ms-track{width:100%;height:2px;cursor:pointer;background:0 0;border-color:transparent;color:transparent}input[type=range]::-ms-fill-lower{background:#EFEFEF;border:0 solid #EFEFEF;border-radius:0}input[type=range]::-ms-fill-upper{background:#EFEFEF;border:0 solid #EFEFEF;border-radius:0}input[type=range]::-ms-thumb{border:1px solid rgba(0,0,30,0);height:22px;width:22px;border-radius:50px;background:#ff3034;cursor:pointer;height:2px}input[type=range]:focus::-ms-fill-lower{background:#EFEFEF}input[type=range]:focus::-ms-fill-upper{background:#363636}.switch{display:block;position:relative;line-height:22px;font-size:16px;height:22px}.switch input{outline:0;opacity:0;width:0;height:0}.slider{width:50px;height:22px;border-radius:22px;cursor:pointer;background-color:grey}.slider,.slider:before{display:inline-block;transition:.4s}.slider:before{position:relative;content:"";border-radius:50%;height:16px;width:16px;left:4px;top:3px;background-color:#fff}input:checked+.slider{background-color:#ff3034}input:checked+.slider:before{-webkit-transform:translateX(26px);transform:translateX(26px)}select{border:1px solid #363636;font-size:14px;height:22px;outline:0;border-radius:5px}.image-container{position:relative;min-width:160px}.close{position:absolute;right:5px;top:5px;background:#ff3034;width:16px;height:16px;border-radius:100px;color:#fff;text-align:center;line-height:18px;cursor:pointer}.hidden{display:none}
        </style>
        <script src="https:\/\/ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js"></script>
        <script src="https:\/\/cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.3.1/dist/tf.min.js"> </script>
        <script src="https:\/\/cdn.jsdelivr.net/npm/@tensorflow-models/coco-ssd@2.1.0"> </script>       
    </head>
    <body>
    <figure>
    ESP32-CAM IP：<input type="text" id="ip" size="14" value="192.168.">&nbsp;&nbsp;<input type="button" value="Набор" onclick="start();">
      <div id="stream-container" class="image-container">
        <div class="close" id="close-stream">×</div>
        <img id="stream" src="" crossorigin="anonymous" style="background-color:#000000;display:none;">
        <canvas id="canvas" style="display:none;"></canvas>
      </div>
    </figure>
        <section class="main">
            <section id="buttons">
                <table>
                <tr><td><button id="restartButton">Снова включите питание</button></td><td><button id="toggle-stream" style="display:none">Start Stream</button></td><td align="right"><button id="face_enroll" style="display:none" class="disabled" disabled="disabled"></button><button id="get-still" style="display:none;">Начать Видео </button></td></tr>
                <tr>
                  <td colspan="3">
                    <table>
                      <tbody>
                      <tr> 
                        <td colspan="2">
                          Позиционирование объекта
                          <select id="mark">
                          <option value="center">Центр</option>               
                          <option value="upper">Верхний</option>
                          <option value="lower" selected="selected">Нижний</option>
                          <option value="left">Левый</option>
                          <option value="right">Правый</option>
                          </select>
                            Отслеживание объектов
                            <select id="object" onchange="count.innerHTML='';">
                              <option value="person" selected="selected">person</option>
                              <option value="bicycle">bicycle</option>
                              <option value="car">car</option>
                              <option value="motorcycle">motorcycle</option>
                              <option value="airplane">airplane</option>
                              <option value="bus">bus</option>
                              <option value="train">train</option>
                              <option value="truck">truck</option>
                              <option value="boat">boat</option>
                              <option value="traffic light">traffic light</option>
                              <option value="fire hydrant">fire hydrant</option>
                              <option value="stop sign">stop sign</option>
                              <option value="parking meter">parking meter</option>
                              <option value="bench">bench</option>
                              <option value="bird">bird</option>
                              <option value="cat">cat</option>
                              <option value="dog">dog</option>
                              <option value="horse">horse</option>
                              <option value="sheep">sheep</option>
                              <option value="cow">cow</option>
                              <option value="elephant">elephant</option>
                              <option value="bear">bear</option>
                              <option value="zebra">zebra</option>
                              <option value="giraffe">giraffe</option>
                              <option value="backpack">backpack</option>
                              <option value="umbrella">umbrella</option>
                              <option value="handbag">handbag</option>
                              <option value="tie">tie</option>
                              <option value="suitcase">suitcase</option>
                              <option value="frisbee">frisbee</option>
                              <option value="skis">skis</option>
                              <option value="snowboard">snowboard</option>
                              <option value="sports ball">sports ball</option>
                              <option value="kite">kite</option>
                              <option value="baseball bat">baseball bat</option>
                              <option value="baseball glove">baseball glove</option>
                              <option value="skateboard">skateboard</option>
                              <option value="surfboard">surfboard</option>
                              <option value="tennis racket">tennis racket</option>
                              <option value="bottle">bottle</option>
                              <option value="wine glass">wine glass</option>
                              <option value="cup">cup</option>
                              <option value="fork">fork</option>
                              <option value="knife">knife</option>
                              <option value="spoon">spoon</option>
                              <option value="bowl">bowl</option>
                              <option value="banana">banana</option>
                              <option value="apple">apple</option>
                              <option value="sandwich">sandwich</option>
                              <option value="orange">orange</option>
                              <option value="broccoli">broccoli</option>
                              <option value="carrot">carrot</option>
                              <option value="hot dog">hot dog</option>
                              <option value="pizza">pizza</option>
                              <option value="donut">donut</option>
                              <option value="cake">cake</option>
                              <option value="chair">chair</option>
                              <option value="couch">couch</option>
                              <option value="potted plant">potted plant</option>
                              <option value="bed">bed</option>
                              <option value="dining table">dining table</option>
                              <option value="toilet">toilet</option>
                              <option value="tv">tv</option>
                              <option value="laptop">laptop</option>
                              <option value="mouse">mouse</option>
                              <option value="remote">remote</option>
                              <option value="keyboard">keyboard</option>
                              <option value="cell phone">cell phone</option>
                              <option value="microwave">microwave</option>
                              <option value="oven">oven</option>
                              <option value="toaster">toaster</option>
                              <option value="sink">sink</option>
                              <option value="refrigerator">refrigerator</option>
                              <option value="book">book</option>
                              <option value="clock">clock</option>
                              <option value="vase">vase</option>
                              <option value="scissors">scissors</option>
                              <option value="teddy bear">teddy bear</option>
                              <option value="hair drier">hair drier</option>
                              <option value="toothbrush">toothbrush</option>
                            </select>
                            <span id="count" style="color:red">0</span>
                        </td>             
                      </tr>
                      <tr> 
                        <td>
                          Нижний предел оценки
                          <select id="score">
                          <option value="1.0">1</option>
                          <option value="0.9">0.9</option>
                          <option value="0.8">0.8</option>
                          <option value="0.7">0.7</option>
                          <option value="0.6">0.6</option>
                          <option value="0.5" selected="selected">0.5</option>
                          <option value="0.4">0.4</option>
                          <option value="0.3">0.3</option>
                          <option value="0.2">0.2</option>
                          <option value="0.1">0.1</option>
                          <option value="0">0</option>
                          </select>
                        </td>
                        <td>
                          <input id="complementary" type="checkbox">Обнаружение обратной зоны
                        </td>
                      </tr>         
                      <tr><td><input type="checkbox" id="chkAud">Предупреждающий звук (mp3)</td><td><input type="text" id="aud" size="20" value="https:\/\/fustyles.github.io/webduino/paino_c.mp3"></td></tr> 
                      <tr><td><input type="checkbox" id="chkBuzzer">Зуммер(IO2)</td><td></td></tr>
                      <tr><td colspan="2"><input type="checkbox" id="chkLine">Скипетр линейного уведомления<input type="text" id="token" size="10" value=""><input type="button" value="Передача изображения" onclick="SendCapturedImage();"></td></tr> 
                      <tr><td colspan="2"><span id="message" style="display:none"></span></td><td></td></tr> 
                    </tbody></table> 
                  </td>
                </tr>                
                </tbody></table>
            </section>         
            <div id="logo">
                <label for="nav-toggle-cb" id="nav-toggle">☰&nbsp;&nbsp;Видео Набор</label>
            </div>
            <div id="content">
                <div id="sidebar">
                    <input type="checkbox" id="nav-toggle-cb">
                    <nav id="menu">
                        <div class="input-group" id="flash-group">
                            <label for="flash">Вспышка</label>
                            <div class="range-min">0</div>
                            <input type="range" id="flash" min="0" max="255" value="0" class="default-action">
                            <div class="range-max">255</div>
                        </div>
                        <div class="input-group" id="framesize-group">
                            <label for="framesize">разрешение</label>
                            <select id="framesize" class="default-action">
                                <option value="10">UXGA(1600x1200)</option>
                                <option value="9">SXGA(1280x1024)</option>
                                <option value="8">XGA(1024x768)</option>
                                <option value="7">SVGA(800x600)</option>
                                <option value="6">VGA(640x480)</option>
                                <option value="5">CIF(400x296)</option>
                                <option value="4" selected="selected">QVGA(320x240)</option>
                                <option value="3">HQVGA(240x176)</option>
                                <option value="0">QQVGA(160x120)</option>
                            </select>
                        </div>
                        <div class="input-group" id="quality-group">
                            <label for="quality">Качество изображения</label>
                            <div class="range-min">10</div>
                            <input type="range" id="quality" min="10" max="63" value="10" class="default-action">
                            <div class="range-max">63</div>
                        </div>
                        <div class="input-group" id="brightness-group">
                            <label for="brightness">Яркость</label>
                            <div class="range-min">-2</div>
                            <input type="range" id="brightness" min="-2" max="2" value="0" class="default-action">
                            <div class="range-max">2</div>
                        </div>
                        <div class="input-group" id="contrast-group">
                            <label for="contrast">Контраст</label>
                            <div class="range-min">-2</div>
                            <input type="range" id="contrast" min="-2" max="2" value="0" class="default-action">
                            <div class="range-max">2</div>
                        </div>
                        <div class="input-group" id="hmirror-group">
                            <label for="hmirror">Зеркальное отражение</label>
                            <div class="switch">
                                <input id="hmirror" type="checkbox" class="default-action" checked>
                                <label class="slider" for="hmirror"></label>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </section>
        <iframe id="ifr" style="display:none;position:absolute" src=""></iframe>
        <div id="position" style="display:none;color:blue;font-size:40px"></div>
        <div id="result" style="color:red">Загрузка модели распознавания объектов...</div> 
    
        <div style="display:none">
        <form id="myForm" action="https:\/\/script.google.com/macros/s/AKfycbyp1xvWg-UCSrLsL8zt-ba_0n96uNTpAFyRry9ifCnRbtK-vgg/exec" method="post" target="sendcapturedimage">
        <input type="text" id="myFilename" name="myFilename" value="Caution Area" style="display:none">
        <input type="text" id="myToken" name="myToken" value="" style="display:none">
        <textarea id="myFile" name="myFile" rows="10" cols="50" style="display:none"></textarea><br>
        </form>
        <iframe id="sendcapturedimage" name="sendcapturedimage" style="display:none"></iframe>
        </div>
    
        <script>
        var baseHost = "";
        function start() {
            baseHost = 'http:\/\/'+document.getElementById("ip").value;  //var baseHost = document.location.origin
            var streamUrl = baseHost + ':81';     
            const hide = el => {
              el.classList.add('hidden')
            }
            const show = el => {
              el.classList.remove('hidden')
            }
            const disable = el => {
              el.classList.add('disabled')
              el.disabled = true
            }
            const enable = el => {
              el.classList.remove('disabled')
              el.disabled = false
            }
            const updateValue = (el, value, updateRemote) => {
              updateRemote = updateRemote == null ? true : updateRemote
              let initialValue
              if (el.type === 'checkbox') {
                initialValue = el.checked
                value = !!value
                el.checked = value
              } else {
                initialValue = el.value
                el.value = value
              }
              if (updateRemote && initialValue !== value) {
                updateConfig(el);
              } 
            }
            function updateConfig (el) {
              let value
              switch (el.type) {
                case 'checkbox':
                  value = el.checked ? 1 : 0
                  break
                case 'range':
                case 'select-one':
                  value = el.value
                  break
                case 'button':
                case 'submit':
                  value = '1'
                  break
                default:
                  return
              }
              const query = `${baseHost}/control?var=${el.id}&val=${value}`
              fetch(query)
                .then(response => {
                  console.log(`request to ${query} finished, status: ${response.status}`)
                })
            }
            document
              .querySelectorAll('.close')
              .forEach(el => {
                el.onclick = () => {
                  hide(el.parentNode)
                }
              })
            // read initial values
            fetch(`${baseHost}/status`)
              .then(function (response) {
                return response.json()
              })
              .then(function (state) {
                document
                  .querySelectorAll('.default-action')
                  .forEach(el => {
                    updateValue(el, state[el.id], false)
                  })
              })
      
            const view = document.getElementById('stream')
            const viewContainer = document.getElementById('stream-container')
            const restartButton = document.getElementById('restartButton')
            const stillButton = document.getElementById('get-still')
            const streamButton = document.getElementById('toggle-stream')
            const closeButton = document.getElementById('close-stream')
            const stopStream = () => {
              //window.stop();
              streamButton.innerHTML = 'Start Stream'
            }
            const startStream = () => {
              view.src = `${streamUrl}/stream`
              show(viewContainer)
              streamButton.innerHTML = 'Stop Stream'
            }

            //Добавь Снова включите питание событие нажатия кнопки (Пользовательский формат команды：http://192.168.xxx.xxx/control?cmd=P1;P2;P3;P4;P5;P6;P7;P8;P9)
            restartButton.onclick = () => {
              fetch(baseHost+"/control?restart");
            } 
                        
            // Attach actions to buttons
            stillButton.onclick = () => {
              stopStream()
        
            baseHost = "http:\/\/"+ip.value;
            streamUrl = baseHost + ':81';
            result.innerHTML = "";
            canvas.style.display = "block"; 
        
              try{
                view.src = `${baseHost}/capture?_cb=${Date.now()}`
              }
              catch(e) {
                view.src = `${baseHost}/capture?_cb=${Date.now()}`  
              }
              show(viewContainer)
            }
            closeButton.onclick = () => {
              stopStream()
              hide(viewContainer)
            }
            streamButton.onclick = () => {
              const streamEnabled = streamButton.innerHTML === 'Stop Stream'
              if (streamEnabled) {
                stopStream()
              } else {
                startStream()
              }
            }
            // Attach default on change action
            document
              .querySelectorAll('.default-action')
              .forEach(el => {
                el.onchange = () => updateConfig(el)
              })
          }
        </script>
        <script>
          var ip = document.getElementById('ip');
          var link = document.getElementById('link');
          var canvas = document.getElementById('canvas');
          var context = canvas.getContext("2d"); 
          var ShowImage = document.getElementById('stream');
          var example = document.getElementById('example');
          var result = document.getElementById('result');
          var count = document.getElementById('count');
          var score = document.getElementById('score');
          var complementary = document.getElementById('complementary'); 
          var getStill = document.getElementById('get-still');
          var hmirror = document.getElementById('hmirror'); 
          var ifr = document.getElementById('ifr');
          
          var token = document.getElementById('token');         
          var aud = document.getElementById('aud');
          var chkAud = document.getElementById('chkAud');
          var chkLine = document.getElementById('chkLine');
          var chkBuzzer = document.getElementById('chkBuzzer');
          var alarm = new Audio(aud.value);
          var position = document.getElementById('position'); 
          var mark = document.getElementById('mark');
      
          var Model; 

          var touch_x0=0, touch_y0=0, touch_x=0, touch_y=0;
          var touchState = false;
          canvas.addEventListener("touchstart", function (e) {
            touch_x0=0;touch_y0=0;touch_x=0;touch_y=0;
            touchState = true;    
            e.preventDefault();
            var rect = canvas.getBoundingClientRect();
            touch_x0 = e.touches[0].clientX-rect.left;
            touch_y0 = e.touches[0].clientY-rect.top;
            touch_x = touch_x0 ;
            touch_y = touch_y0;
          }, false);
          canvas.addEventListener("touchmove", function (e) { 
            e.preventDefault();
            var rect = canvas.getBoundingClientRect();
            touch_x = e.touches[0].clientX-rect.left;
            touch_y = e.touches[0].clientY-rect.top;
          }, false);  
          canvas.addEventListener("touchcancel", function (e) {
            e.preventDefault();
            touchState = false;
          }, false);
          canvas.addEventListener("touchend", function (e) {
            e.preventDefault();
            touchState = false; 
          }, false);
          canvas.addEventListener("mousedown", function (e) {
            touch_x0=0;touch_y0=0;touch_x=0;touch_y=0;
            touchState = true;    
            e.preventDefault();
            var rect = canvas.getBoundingClientRect();
            touch_x0 = e.clientX-rect.left;
            touch_y0 = e.clientY-rect.top;
            touch_x = touch_x0 ;
            touch_y = touch_y0;   
          }, false);
          canvas.addEventListener("mouseup", function (e) { 
            e.preventDefault();
            var rect = canvas.getBoundingClientRect();
            touch_x = e.clientX-rect.left;
            touch_y = e.clientY-rect.top;
            touchState = false; 
          }, false);  
        
          function loadModel() {
            cocoSsd.load().then(cocoSsd_Model => {
              Model = cocoSsd_Model;
              getStill.style.display = "block";
              result.innerHTML = "Пожалуйста, нажмите кнопку Начать видео ";
            }); 
          }
          
          ShowImage.onload = function (event) {
            if (Model) {
              try { 
                document.createEvent("TouchEvent");
                DetectImage();
              }
              catch(e) { 
                DetectImage();
              }   
            }     
          }
     
          function DetectImage() {
            canvas.setAttribute("width", ShowImage.width);
            canvas.setAttribute("height", ShowImage.height);
            context.drawImage(ShowImage,0,0,ShowImage.width,ShowImage.height); 
            
            if (touchState == false) {
              context.beginPath();
              context.lineWidth = "2";
              context.strokeStyle = "yellow";  
              context.rect(touch_x0, touch_y0, touch_x-touch_x0, touch_y-touch_y0);
              context.stroke();
            }  
          
            Model.detect(canvas).then(Predictions => {    
              var objectCount=0;  //Запишите общее количество обнаруженных объектов
    
              //console.log('Predictions: ', Predictions);
              if (Predictions.length>0) {
                result.innerHTML = "";
                var s = (canvas.width>canvas.height)?canvas.width:canvas.height;
                for (var i=0;i<Predictions.length;i++) {
                  const x = Predictions[i].bbox[0];
                  const y = Predictions[i].bbox[1];
                  const width = Predictions[i].bbox[2];
                  const height = Predictions[i].bbox[3];
                  var mark_x = 0;
                  var mark_y = 0;
                  if (mark.value=="upper") {
                  mark_x = x + width/2;
                  mark_y = y;
                  } 
                  else if (mark.value=="lower") {
                  mark_x = x + width/2;
                  mark_y = y + height;
                  }
                  else if (mark.value=="left") {
                  mark_x = x;
                  mark_y = y + height/2;
                  }
                  else if (mark.value=="right") {
                  mark_x = x + width;
                  mark_y = y + height/2;
                  }
                  else if (mark.value=="center") {
                  mark_x = x + width/2;
                  mark_y = y + height/2;
                  } 
          
                  result.innerHTML+= "[ "+i+" ] "+Predictions[i].class+", "+Math.round(Predictions[i].score*100)+"%, "+Math.round(x)+", "+Math.round(y)+", "+Math.round(width)+", "+Math.round(height)+"<br>";

                  if (Predictions[i].class==object.value&&Predictions[i].score>=score.value) {   
                    var bottom_x = mark_x;
                    var bottom_y = mark_y;
                    context.fillStyle="#00FFFF";        
                    context.beginPath();
                    context.arc(bottom_x,bottom_y,5,0,Math.PI*2,true);
                    context.fill();
                    context.closePath();
          
                    var state =false;
                    if (((bottom_x-touch_x0)*(bottom_x-touch_x)<=0)&&((bottom_y-touch_y0)*(bottom_y-touch_y)<=0)&&(!complementary.checked)&&(alarm.paused||alarm.ended)) {
                      state=true;
                    }
                    else if (!(((bottom_x-touch_x0)*(bottom_x-touch_x)<=0)&&((bottom_y-touch_y0)*(bottom_y-touch_y)<=0))&&(complementary.checked)&&(alarm.paused||alarm.ended)) {
                      state=true;
                    }
                    if (state==true) {
                      if (chkAud.checked) {
                        alarm.src = aud.value;
                        alarm.play();
                      }
                      if (chkLine.checked)
                        ifr.src = 'http:\/\/linenotify.com/notify.php?token='+token.value+'&message=В буферной зоне находится персонал';                        
                      if (chkBuzzer.checked)
                        $.ajax({url: baseHost+'/control?buzzer', async: false});  
                      }
                  }
                            
                  if (Predictions[i].class==object.value) {
                    objectCount++;
                  }  
                }
                count.innerHTML = objectCount;
              }
              else {
                position.innerHTML = "";                
                result.innerHTML = "Unrecognizable";
                count.innerHTML = "0";
              }
              
              try { 
                document.createEvent("TouchEvent");
                setTimeout(function(){getStill.click();},250);
              }
              catch(e) { 
                setTimeout(function(){getStill.click();},150);
              } 
            });
          }

          function SendCapturedImage() {
            //var date = new Date();
            //myFilename.value = date.getFullYear()+"_"+(date.getMonth()+1)+"_"+date.getDate()+"_"+date.getHours()+"_"+date.getMinutes()+"_"+date.getSeconds()+".png";
            myFile.value = canvas.toDataURL();
            myToken.value = token.value;
            myForm.submit();
          }

          //  URL-адрес/?192.168.1.38  Может ли он быть введен автоматически?Значение IP-адреса после параметра
          var href=location.href;
          if (href.indexOf("?")!=-1) {
            ip.value = location.search.split("?")[1].replace(/http:\/\//g,"");
            start();
          }
          else if (href.indexOf("http")!=-1) {
            ip.value = location.host;
            start();
          } 

          aud.value = aud.value.replace(/\\\//g,"/");
          loadModel();        
        </script>
  </body>
</html>
)rawliteral";

static esp_err_t index_Rect_handler(httpd_req_t *req) {
  httpd_resp_set_type(req, "text/html");
  httpd_resp_set_hdr(req, "Access-Control-Allow-Origin", "*");
  httpd_resp_send(req, (const char *)index_Rect_html, strlen(index_Rect_html));
  return ESP_OK;
}
//********************************************************************************************
//Снимок экрана изображения
static esp_err_t capture_handler(httpd_req_t *req){
    camera_fb_t * fb = NULL;
    esp_err_t res = ESP_OK;

    fb = esp_camera_fb_get();
    if (!fb) {
        Serial.println("Camera capture failed");
        httpd_resp_send_500(req);
        return ESP_FAIL;
    }

    httpd_resp_set_type(req, "image/jpeg");
    httpd_resp_set_hdr(req, "Content-Disposition", "inline; filename=capture.jpg");
    httpd_resp_set_hdr(req, "Access-Control-Allow-Origin", "*");

    size_t fb_len = 0;
    if(fb->format == PIXFORMAT_JPEG){
        fb_len = fb->len;
        res = httpd_resp_send(req, (const char *)fb->buf, fb->len);
    } else {
        jpg_chunking_t jchunk = {req, 0};
        res = frame2jpg_cb(fb, 80, jpg_encode_stream, &jchunk)?ESP_OK:ESP_FAIL;
        httpd_resp_send_chunk(req, NULL, 0);
        fb_len = jchunk.len;
    }
    esp_camera_fb_return(fb);
    return res;
}
//********************************************************************************************
//Потоковая передача изображений
static esp_err_t stream_handler(httpd_req_t *req){
    camera_fb_t * fb = NULL;
    esp_err_t res = ESP_OK;
    size_t _jpg_buf_len = 0;
    uint8_t * _jpg_buf = NULL;
    char * part_buf[64];

    res = httpd_resp_set_type(req, _STREAM_CONTENT_TYPE);
    if(res != ESP_OK){
        return res;
    }

    httpd_resp_set_hdr(req, "Access-Control-Allow-Origin", "*");

    while(true){
        fb = esp_camera_fb_get();
        if (!fb) {
            Serial.println("Camera capture failed");
            res = ESP_FAIL;
        } else {
          if(fb->format != PIXFORMAT_JPEG){
              bool jpeg_converted = frame2jpg(fb, 80, &_jpg_buf, &_jpg_buf_len);
              esp_camera_fb_return(fb);
              fb = NULL;
              if(!jpeg_converted){
                  Serial.println("JPEG compression failed");
                  res = ESP_FAIL;
              }
          } else {
              _jpg_buf_len = fb->len;
              _jpg_buf = fb->buf;
          }
        }

        if(res == ESP_OK){
            res = httpd_resp_send_chunk(req, (const char *)_jpg_buf, _jpg_buf_len);
        }
        if(res == ESP_OK){
            res = httpd_resp_send_chunk(req, _STREAM_BOUNDARY, strlen(_STREAM_BOUNDARY));
        }
        if(res == ESP_OK){
            size_t hlen = snprintf((char *)part_buf, 64, _STREAM_PART, _jpg_buf_len);
            res = httpd_resp_send_chunk(req, (const char *)part_buf, hlen);
        }                
        if(fb){
            esp_camera_fb_return(fb);
            fb = NULL;
            _jpg_buf = NULL;
        } else if(_jpg_buf){
            free(_jpg_buf);
            _jpg_buf = NULL;
        }
        if(res != ESP_OK){
            break;
        }
    }

    return res;
}
//********************************************************************************************
//Управление командными параметрами
static esp_err_t cmd_handler(httpd_req_t *req){
    char*  buf;    //доступ URL-адрес cтрока параметра, за которой следует
    size_t buf_len;
    char variable[128] = {0,};  //доступ  параметр var значение 
    char value[128] = {0,};     //доступ  параметр val значение 
    String myCmd = "";

    buf_len = httpd_req_get_url_query_len(req) + 1;
    if (buf_len > 1) {
        buf = (char*)malloc(buf_len);
        if(!buf){
            httpd_resp_send_500(req);
            return ESP_FAIL;
        }
        if (httpd_req_get_url_query_str(req, buf, buf_len) == ESP_OK) {
          if (httpd_query_key_value(buf, "var", variable, sizeof(variable)) == ESP_OK &&
            httpd_query_key_value(buf, "val", value, sizeof(value)) == ESP_OK) {
          } 
          else {
            myCmd = String(buf);   //Если неофициальный формат не содержит var, val，тогда это Пользовательский формат команды
          }
        }
        free(buf);
    } else {
        httpd_resp_send_404(req);
        return ESP_FAIL;
    }

    Feedback="";Command="";cmd="";P1="";P2="";P3="";P4="";P5="";P6="";P7="";P8="";P9="";
    ReceiveState=0,cmdState=1,strState=1,questionstate=0,equalstate=0,semicolonstate=0;     
    if (myCmd.length()>0) {
      myCmd = "?"+myCmd;  //URL-адрес cтрока параметра, за которой следует преобразовать в Пользовательский формат команды
      for (int i=0;i<myCmd.length();i++) {
        getCommand(char(myCmd.charAt(i)));  //разбирать пользовательские инструкции параметр строка
      }
    }

    if (cmd.length()>0) {
      Serial.println("");
      //Serial.println("Command: "+Command);
      Serial.println("cmd= "+cmd+" ,P1= "+P1+" ,P2= "+P2+" ,P3= "+P3+" ,P4= "+P4+" ,P5= "+P5+" ,P6= "+P6+" ,P7= "+P7+" ,P8= "+P8+" ,P9= "+P9);
      Serial.println(""); 

      //Пользовательский командный блок  http://192.168.xxx.xxx/control?cmd=P1;P2;P3;P4;P5;P6;P7;P8;P9
      if (cmd=="your cmd") {
        // You can do anything
        // Feedback="<font color=\"red\">Hello World</font>";   //Может быть общий текст или синтаксис HTML
      }
      else if (cmd=="ip") {  //запрос APIP, STAIP
        Feedback="AP IP: "+WiFi.softAPIP().toString();    
        Feedback+="<br>";
        Feedback+="STA IP: "+WiFi.localIP().toString();
      }  
      else if (cmd=="mac") {  //запрос MAC адрес 
        Feedback="STA MAC: "+WiFi.macAddress();
      }  
      else if (cmd=="restart") {  //сброс WIFI соединения 
        ESP.restart();
      }  
      else if (cmd=="digitalwrite") {
        ledcDetachPin(P1.toInt());
        pinMode(P1.toInt(), OUTPUT);
        digitalWrite(P1.toInt(), P2.toInt());
      }   
      else if (cmd=="digitalread") {
        Feedback=String(digitalRead(P1.toInt()));
      }
      else if (cmd=="analogwrite") {   
        if (P1=="4") {
          ledcAttachPin(4, 4);  
          ledcSetup(4, 5000, 8);
          ledcWrite(4,P2.toInt());     
        }
        else {
          ledcAttachPin(P1.toInt(), 9);
          ledcSetup(9, 5000, 8);
          ledcWrite(9,P2.toInt());
        }
      }       
      else if (cmd=="analogread") {
        Feedback=String(analogRead(P1.toInt()));
      }
      else if (cmd=="touchread") {
        Feedback=String(touchRead(P1.toInt()));
      }   
      else if (cmd=="flash") {  //встроенный пульт управления Вспышка
        ledcAttachPin(4, 4);  
        ledcSetup(4, 5000, 8);   
        int val = P1.toInt();
        ledcWrite(4,val);  
      }
      else if (cmd=="buzzer") { 
        pinMode(Buzzer,OUTPUT);
        tone(Buzzer, 262, 100);
      }
      else if (cmd=="resetwifi") {
        Preferences_write("wifi", "ssid", P1.c_str());
        Preferences_write("wifi", "password", P2.c_str());

        for (int i=0;i<2;i++) {
          WiFi.begin(P1.c_str(), P2.c_str());
          Serial.print("Connecting to ");
          Serial.println(P1);
          long int StartTime=millis();
          while (WiFi.status() != WL_CONNECTED) {
              delay(500);
              if ((StartTime+5000) < millis()) break;
          } 
          Serial.println("");
          Serial.println("STAIP: "+WiFi.localIP().toString());
          Feedback="STAIP: "+WiFi.localIP().toString();
  
          if (WiFi.status() == WL_CONNECTED) {
            WiFi.softAP((WiFi.localIP().toString()+"_"+P1).c_str(), P2.c_str());
            for (int i=0;i<2;i++) {    //Если вы не можете подключиться Верхний WIFI Набор Вспышка  медленное мигание
              ledcWrite(4,10);
              delay(300);
              ledcWrite(4,0);
              delay(300);    
            }
            LineNotify_http_get(LineToken, WiFi.localIP().toString());
            break;
          }
        }
      } 
      else if (cmd=="clearwifi") {  //Очистить флэш-память от данных Wi-Fi  
        Preferences_write("wifi", "ssid", "");
        Preferences_write("wifi", "password", "");
      }                      
      else {
        Feedback="Command is not defined";
      }

      if (cmd=="resetwifi") {
        httpd_resp_set_type(req, "text/html");  //Набор возвращаемых данных
        httpd_resp_set_hdr(req, "Access-Control-Allow-Origin", "*");  //Разрешить междоменное чтение
        if (WiFi.status() == WL_CONNECTED)
          return httpd_resp_send(req, (const char *)index_html, strlen(index_html));
        else
          return httpd_resp_send(req, (const char *)index_wifi_html, strlen(index_wifi_html)); 
      } else {
        const char *resp = Feedback.c_str();
        httpd_resp_set_type(req, "text/html");  //Набор возвращаемых данных
        httpd_resp_set_hdr(req, "Access-Control-Allow-Origin", "*");  //Разрешить междоменное чтение
        return httpd_resp_send(req, resp, strlen(resp));
      }
    } 
    else {
      //Блок официальных инструкций，вы также можете настроить инструкции здесь  http://192.168.xxx.xxx/control?var=xxx&val=xxx
      int val = atoi(value);
      sensor_t * s = esp_camera_sensor_get();
      int res = 0;

      if(!strcmp(variable, "framesize")) {
        if(s->pixformat == PIXFORMAT_JPEG) 
          res = s->set_framesize(s, (framesize_t)val);
      }
      else if(!strcmp(variable, "quality")) res = s->set_quality(s, val);
      else if(!strcmp(variable, "contrast")) res = s->set_contrast(s, val);
      else if(!strcmp(variable, "brightness")) res = s->set_brightness(s, val);
      else if(!strcmp(variable, "hmirror")) res = s->set_hmirror(s, val);
      else if(!strcmp(variable, "vflip")) res = s->set_vflip(s, val);
      else if(!strcmp(variable, "flash")) {  //Пользовательские настройки для вспышки
        ledcAttachPin(4, 4);  
        ledcSetup(4, 5000, 8);        
        ledcWrite(4,val);
      } 
      else {
          res = -1;
      }
  
      if(res){
          return httpd_resp_send_500(req);
      }

      if (buf) {
        Feedback = String(buf);
        const char *resp = Feedback.c_str();
        httpd_resp_set_type(req, "text/html");
        httpd_resp_set_hdr(req, "Access-Control-Allow-Origin", "*");
        return httpd_resp_send(req, resp, strlen(resp));  //Обратная передача параметр строка
      }
      else {
        httpd_resp_set_hdr(req, "Access-Control-Allow-Origin", "*");
        return httpd_resp_send(req, NULL, 0);
      }
    }
}

void tone(int pin, int frequency, int duration) {
  ledcSetup(9, 2000, 8);
  ledcAttachPin(pin, 9);
  ledcWriteTone(9, frequency);
  delay(duration);
  ledcWriteTone(9, 0);
}
//********************************************************************************************
//Отображение  Видео  параметр статус(должен Обратная передача json начальная загрузка формата Набор)
static esp_err_t status_handler(httpd_req_t *req){
    static char json_response[1024];

    sensor_t * s = esp_camera_sensor_get();
    char * p = json_response;
    *p++ = '{';
    p+=sprintf(p, "\"flash\":%d,", 0);
    p+=sprintf(p, "\"framesize\":%u,", s->status.framesize);
    p+=sprintf(p, "\"quality\":%u,", s->status.quality);
    p+=sprintf(p, "\"brightness\":%d,", s->status.brightness);
    p+=sprintf(p, "\"contrast\":%d,", s->status.contrast);
    p+=sprintf(p, "\"hmirror\":%u", s->status.hmirror); 
    *p++ = '}';
    *p++ = 0;
    httpd_resp_set_type(req, "application/json");
    httpd_resp_set_hdr(req, "Access-Control-Allow-Origin", "*");
    return httpd_resp_send(req, json_response, strlen(json_response));
}

//настроить URL-адрес Путь к функции, которая должна быть выполнена
void startCameraServer(){
  httpd_config_t config = HTTPD_DEFAULT_CONFIG();  //Доступно в HTTPD_DEFAULT_CONFIG()ЦентрНаборServer Port 

  //http://192.168.xxx.xxx/
  httpd_uri_t index_uri = {
      .uri       = "/",
      .method    = HTTP_GET,
      .handler   = index_handler,
      .user_ctx  = NULL
  };

  //http://192.168.xxx.xxx/status
  httpd_uri_t status_uri = {
      .uri       = "/status",
      .method    = HTTP_GET,
      .handler   = status_handler,
      .user_ctx  = NULL
  };

  //http://192.168.xxx.xxx/control
  httpd_uri_t cmd_uri = {
      .uri       = "/control",
      .method    = HTTP_GET,
      .handler   = cmd_handler,
      .user_ctx  = NULL
  }; 

  //http://192.168.xxx.xxx/capture
  httpd_uri_t capture_uri = {
      .uri       = "/capture",
      .method    = HTTP_GET,
      .handler   = capture_handler,
      .user_ctx  = NULL
  };

  //http://192.168.xxx.xxx:81/stream
  httpd_uri_t stream_uri = {
      .uri       = "/stream",
      .method    = HTTP_GET,
      .handler   = stream_handler,
      .user_ctx  = NULL
  };
  
  httpd_uri_t wifi_uri = {
    .uri       = "/wifi",
    .method    = HTTP_GET,
    .handler   = index_wifi_handler,
    .user_ctx  = NULL
  };   
  
  httpd_uri_t HorizontalLine_uri = {
    .uri       = "/HorizontalLine",
    .method    = HTTP_GET,
    .handler   = index_HorizontalLine_handler,
    .user_ctx  = NULL
  };
      
  httpd_uri_t VerticalLine_uri = {
    .uri       = "/VerticalLine",
    .method    = HTTP_GET,
    .handler   = index_VerticalLine_handler,
    .user_ctx  = NULL
  };
  
  httpd_uri_t Rect_uri = {
    .uri       = "/Rect",
    .method    = HTTP_GET,
    .handler   = index_Rect_handler,
    .user_ctx  = NULL
  };
    
  Serial.printf("Starting web server on port: '%d'\n", config.server_port);  //Server Port
  if (httpd_start(&camera_httpd, &config) == ESP_OK) {
      //зарегистрировать настроить URL-адрес Путь соответствует выполняемой функции
      httpd_register_uri_handler(camera_httpd, &index_uri);
      httpd_register_uri_handler(camera_httpd, &cmd_uri);
      httpd_register_uri_handler(camera_httpd, &status_uri);
      httpd_register_uri_handler(camera_httpd, &capture_uri);
      httpd_register_uri_handler(camera_httpd, &wifi_uri); 
      httpd_register_uri_handler(camera_httpd, &HorizontalLine_uri);
      httpd_register_uri_handler(camera_httpd, &VerticalLine_uri);
      httpd_register_uri_handler(camera_httpd, &Rect_uri);
  }
  
  config.server_port += 1;  //Stream Port
  config.ctrl_port += 1;    //UDP Port
  Serial.printf("Starting stream server on port: '%d'\n", config.server_port);
  if (httpd_start(&stream_httpd, &config) == ESP_OK) {
      httpd_register_uri_handler(stream_httpd, &stream_uri);
  }
}

//настроить Инструкция по разборке  параметр строка Переменная места
void getCommand(char c)
{
  if (c=='?') ReceiveState=1;
  if ((c==' ')||(c=='\r')||(c=='\n')) ReceiveState=0;
  
  if (ReceiveState==1)
  {
    Command=Command+String(c);
    
    if (c=='=') cmdState=0;
    if (c==';') strState++;
  
    if ((cmdState==1)&&((c!='?')||(questionstate==1))) cmd=cmd+String(c);
    if ((cmdState==0)&&(strState==1)&&((c!='=')||(equalstate==1))) P1=P1+String(c);
    if ((cmdState==0)&&(strState==2)&&(c!=';')) P2=P2+String(c);
    if ((cmdState==0)&&(strState==3)&&(c!=';')) P3=P3+String(c);
    if ((cmdState==0)&&(strState==4)&&(c!=';')) P4=P4+String(c);
    if ((cmdState==0)&&(strState==5)&&(c!=';')) P5=P5+String(c);
    if ((cmdState==0)&&(strState==6)&&(c!=';')) P6=P6+String(c);
    if ((cmdState==0)&&(strState==7)&&(c!=';')) P7=P7+String(c);
    if ((cmdState==0)&&(strState==8)&&(c!=';')) P8=P8+String(c);
    if ((cmdState==0)&&(strState>=9)&&((c!=';')||(semicolonstate==1))) P9=P9+String(c);
    
    if (c=='?') questionstate=1;
    if (c=='=') equalstate=1;
    if ((strState>=9)&&(c==';')) semicolonstate=1;
  }
}

void Preferences_write(const char * name, const char* key, const char* value) {
  preferences.clear();
  preferences.begin(name, false);
  Serial.printf("Put %s = %s\n", key, value);
  preferences.putString(key, value);
  preferences.end();
}

String Preferences_read(const char * name, const char* key) {
  preferences.begin(name, false);
  String myData = preferences.getString(key, "");
  Serial.printf("Get %s = %s\n", key, myData);
  preferences.end();
  return myData;
}

String LineNotify_http_get(String token, String message) {
  message.replace("%","%25");  
  message.replace(" ","%20");
  message.replace("&","%20");
  message.replace("#","%20");
  //message.replace("\'","%27");
  message.replace("\"","%22");
  message.replace("\n","%0D%0A");
  
  http.begin("http://linenotify.com/notify.php?token="+token+"&message="+message);
  int httpCode = http.GET();
  /*
  if(httpCode > 0) {
      if(httpCode == 200) 
        Serial.println(http.getString());
  } else 
      Serial.println("Connection Error!");
  */
}
