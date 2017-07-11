import {Back} from './back';
export var BACKEND: Back[] = //'http://localhost/data.json
[
   {"id": 1, "question": "sgsdgsdgsdgsd dftighij ftdhkptohk thktphdk  othkspejaptnolihjolguiouyoyoyo "},

];

let xmlhttp = new XMLHttpRequest();// 1. Создаём новый объект XMLHttpRequest

xmlhttp.open("GET", "/data.json", true);// 2. Конфигурируем его: GET-запрос на URL 'phones.json'

xmlhttp.send( );// 3. Отсылаем запрос


xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let myArr = JSON.parse(this.responseText);
    console.log(myArr);
    document.getElementById("data").innerHTML = myArr[6];

    if (xmlhttp.readyState != 4) return;

    //button.innerHTML = 'Готово!';
    // 4. Если код ответа сервера не 200, то это ошибка
    if (xmlhttp.status != 200) { // 4. Если код ответа сервера не 200, то это ошибка
      // обработать ошибку
      alert( xmlhttp.status + ': ' + xmlhttp.statusText ); // пример вывода: 404: Not Found
    } else {
      // вывести результат
      alert( xmlhttp.responseText ); // responseText -- текст ответа.


    }
    // получить результат из this.responseText или this.responseXML

  }
}
//button.innerHTML = 'Загружаю...'; // (2)
//button.disabled = true;
