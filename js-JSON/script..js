"use strict";

const person ={
    name: 'Alex',
    tel: '+7409384'
}; // допустим, что этот объект нужно передать на сервер, на бекэнд. Напрямую объект невозможно передать на сервер.

console.log(JSON.stringify(person)); 

// {"name":"Alex","tel":"+7409384"} свойства и значения перезаписались в ковычки 
// теперь такой формат данных мы можем отправить на сервер

// РАССМОТРИМ ОБРАТНУЮ СИТУАЦИЮ, когда с сервера приходит к нам JSON и надо его превратить в обычный объект
// при помощи parse

const person1 ={
    name: 'Alex',
    tel: '+7409384'
};

console.log(JSON.parse(JSON.stringify(person))); 


// ГЛУБОКОЕ КОПИРОВАНИЕ- в отличии от поверхностного клонирования, глубокий клон не меняет свои значения при его изменений

const person2={
    name: 'Alex',
    age: 28,
    parents: {
            mom: 'Olga',
            dad: "Ivan"
    }
};
// Чтобы исполь-ть глубокое клонирование сначала превращаем объект в strıngıfy JSON, затем парсим

const clone=JSON.parse(JSON.stringify(person2));
    clone.parents.mom='Ann';

console.log(person2);
console.log(clone);

// { name: 'Alex', age: 28, parents: { mom: 'Olga', dad: 'Ivan' } }
//{ name: 'Alex', age: 28, parents: { mom: 'Ann', dad: 'Ivan' } } 
// Как видно в родительском объекте ничего не поменялось, поменялось только в клоннированном объекте






