"use strict";

//  Encapsulation with Classes with the help of the methods doing the same function as getters and setters

class User2 {
    constructor (name, age) {
        this.name=name;
        this.UserAge=age;
    }
    say(){
        console.log(`User's name: ${this.name} , User's age ${this.userAge}` );
    }
     
    getAge(){
        return this.userAge;
    }

    setAge(age){
        if(typeof age === 'number' && age > 0 && age < 110) {
            this.userAge = age;
        } else {
            console.log('Недопустимое значение');
        }
    }
}

const ivan = new User2('Ivan', 27); // Создаем новый объект при помощи создания новых потомков
console.log(ivan.name); // обращаемся к объекту ivan и его свойству name
ivan.userAge=99;
console.log(ivan.getAge()); // обращаемся к объекту ivan и через геттер получаем возраст

ivan.name = 'Alex'; // также можно изменить его свойства напрямую
ivan.setAge(30); // через сеттер мы устанавливаем новое значение объекту
//ivan.setAge(300); // через сеттер мы устанавливаем недопустимое значение объекту, чтобы проверить условие
console.log(ivan.getAge());

ivan.say(); // вызов функции у метода ivan