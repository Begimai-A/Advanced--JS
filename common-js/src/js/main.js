
// COMMON JS

function myModule() {
    this.hello = function () {
        console.log('Hello');
    };
    this.goodbye = function () {
        console.log('Goodbye');
    };
}

//Чтобы экспортировать данный код в index.js мы должны использовать объект 'module' и его свойство 'exports'
// и поместить туда в качестве значения что мы хотим, в данном случае нашу функцию myModule

module.exports=myModule;