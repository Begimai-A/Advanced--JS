 // По правилам Common js импортируемый файл должен строго находиться строго в index.js  в папке src

 const myModule=require('./main'); // Создаем новую переменную с функцией require(Тут мы прописываем путь откуда мы импортируем)

 const myModuleInstance=new myModule();

 myModuleInstance.hello();
 myModuleInstance.goodbye();

 // для работы с Webpack мы прописываем в терминал след.команду npx webpack

 //Webpack-сборщик модулей
 //Gulp-планоровщик задач