"use strict";

// /pattern/flags

//Flags: i=> first matched element no matter whether it is capital or lowcase
// g => global , searches every matched element
// m => включает многострочный режим

// methods: search(), match(), replace()

//with method search()
//const ans=prompt("Enter your name"); dopustim my vveli slovo Ann
//console.log(ans.search(/n/));  // in the method search flag 'g' is not available
// 1

//with method match()
//const ans=prompt("Enter your name"); //dopustim my vveli slovo Ann
//console.log(ans.match(/n/g));
// (2) ["n", "n"] console vyvodit

//with method replace()

//const pass=prompt('Enter your password');  //dopustim my vveli slovo аоаоаю.....
//console.log(pass.replace(/\&/g, '*')); // точка отвечает за все элементы, флаг g-обеспечивает глобальность /\./ 
// в консоль выведется аоаоаю***** 
// /\./ за счет экранирования  /\./ спец.символы такие как (%,&,^,. etc)все элементы внутри паттерна заменятся знаком **

//console.log("16-17-78".replace(/-/g, ":")); // дефис не является спец символом, его можно обернуть в паттерн


// method test()

// const answer=prompt('What is your name?');

// const regExp=/b/ig;

// console.log(regExp.test(answer));// method test returns TRUE/ FALSE 

// Classes in regular expressions

// \d-digits
// \w-words
// s\-spaces 

//const search=prompt("Enter numbers");
//console.log(search.match(/\d/g));  // searching for digits

const search = prompt("Enter letters");
console.log(search.match(/\D/g)); // searching for letters

// const example="My name is D2R2";
// console.log(example.match(/\w\d\w\d/i));

//  ЧТОБЫ НАЙТИ НЕ ЧИСЛА, НЕБУКВЫ, НЕПРОБЕЛЫ ИСПОЛЬЗУЮТСЯ БОЛЬШИЕ БУКВЫ

// \D -НЕ ЧИСЛА
// \W -НЕБУКВЫ
// \S-НЕПРОБЕЛЫ

const search = prompt("Enter letters");
console.log(search.match(/\D/g)); // searching for letters