"use strict";

// Asynchronous JavaScript and XML (AJAX);
// Асинхронно-без перезагрузки страницы
// Чтобы наша страница умела общаться с сервером, нам нужны HTTP запросы

const inputRub=document.querySelector('#rub'),
      inputUsd=document.querySelector('#usd');

    inputRub.addEventListener('input', ()=>{
        const request=new XMLHttpRequest();// Чтобы сделать запрос на сервер, используем встроенный объект XMLHttpRequest()
                                         // у него есть свои методы и свойства

                                                //  request.open(method ('GET'/'POST'), url, asynch, login, pass)
        request.open('GET', 'js/current.json'); // это метод не открывает соединение между фронтендом и бэкендом,
                                                // а собирает настройки которые помогают делать запрос

        request.setRequestHeader('Content-type', 'application/json', 'charset=utf-8'); // HTTP-Заголовки помогают понять серверу,
                      //что именно отправляется (json файл/ изображение/ итд ).
    
        request.send(); // отправляем запрос на сервер
        // если мы бы испол-ли метод  POST, то в качестве аргумента после send(body) нужно прописать body 
    
    // дальше события после того как получим ответ от сервера при помощи двух обработчика событий readystatechange/ load

    
    request.addEventListener('load', ()=>{      //'readystatechange', ()=>{
        if(request.status===200) {               //&& request.readyState===4){
            console.log(request.response);
            const data=JSON.parse(request.response);
            inputUsd.value=(+inputRub.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value="Something gone wrong";
        }
    });

    //status - (200, 404, etc)
    // statusText (ok, created, done)
    //response (response from server)
    //readyState ( starts from 0 to 4 )

    });