"use strict";

// method forEach(); этот метод просто перебирает массив,но не возвращает новый

//filter-возвращает новый метод
const names = ['Alex', 'Olga', 'Alexander', 'Vyacheslav', 'Anna', 'Konstantin'];

const shortNames = names.filter(function (name) { // it is anonymous function 
    return name.length < 5;

});

console.log(shortNames);

// arrow function

const salary = [1000, 200, 500, 800, 100, 1500];

const highSalary = salary.filter(num => num > 500); // arrow function.Принимает только параметр, саму стрелку и тело инструкций 
// return прописывается по умолчанию
console.log(highSalary);


// method map(); позволяет изменить каждый элемент в исходном массиве

const answers = ['AnnA', 'oleG', 'pETR', 'INNA'];
const result = answers.map(item => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase());

console.log(result);
console.log(answers);

// method slice()

let arr = ["t", "e", "s", "t"];
console.log(arr.slice(1, 3)); // Консоль выводит 'е' и 's'

// every/some - возвращает булиновое значение

const num = [2, 'dfgd', 4, 6, 8, 'gjfcjj'];
console.log(num.some(item => typeof (item) === 'number')); // method some() спрашивает есть ли в массиве хотя бы одно число

// const mix=[2, 5, 7, 'hello', 'bye'];
// const string=mix.some((function(item){
//     return typeof(item)==='string';
// }));
// console.log(string);

// the same code with arrow function
const mix = [2, 5, 7, 'hello', 'bye'];
const string = mix.some(item => typeof (item) === 'string'); // method some() спрашивает есть ли в массиве хотя бы одна строка

console.log(string);

//method every()

const numb = [2, 4, 6, 8];
console.log(numb.every(item => typeof (item) === 'number')); // method every() вернет true or false если все элементы массива 
// будут соответсвовать условию кода


// method reduce();

// const array=[20, 1, 2, 3, 4];
// const newArray=array.reduce((sum, current) => sum+current);
// console.log(newArray);

// Example with substraction

const array2 = [20, 1, 2, 3, 4];
const newArray2 = array2.reduce((value, current) => value + current);
console.log(newArray2);

//example with string
// const stringArray=['apple', 'pineapple', 'cherry'];
// const newStringArray=stringArray.reduce((sum, current) => `${sum}, ${current}`);
// console.log(newStringArray);

// number 3 задаст начальное значение, тоесть sum изначально станет 3

const array = [20, 1, 2, 3, 4];
const newArray = array.reduce((sum, current) => sum + current, 3);
console.log(newArray);

// watermelon передается как первое значение sum. Хотя изначально значение sum равна 0

const stringArray = ['apple', 'pineapple', 'cherry'];
const newStringArray = stringArray.reduce((sum, current) => `${sum}, ${current}`, 'watermelon');
console.log(newStringArray);

// method entries()

const testObj = {
    ivan: 'person',
    anna: 'person',
    dog: 'animal',
    cat: 'animal'
};

// methods filter and map use chaining=цепочку
// const newArr = Object.entries(testObj) // this method returns new array from testObj
//     .filter(item => item[1] === 'person') // только фильтрует
//     .map(item => item[0]); // method map() может трансформировать и создать новый массив
// console.log(newArr);

const newArr = Object.entries(testObj) // this method returns new array from testObj
    .filter((item, i) => i === 2 || i === 3); // только фильтрует
console.log(newArr);