"use strict";
//  Encapsulation with Classes with the help of the REAL getters and setters NOT FUNCTIONS or METHODS

class User2 {
    constructor(name, age) {
        this.name = name;
        this._age = age; //it is not a syntaksys of the JS, it is just the reminder for developers not to cahnge this variable
    }
    #surname = 'Petrychencko'; //makes it private BUT works with new version of BROWSERS
    say() {
        console.log(`User's name: ${this.name} , User's age ${this._age}`);
    }

    get age() { // it is a real GETTER with the name Age
        return this._age;
    }

    set age(age) { // it is a real SETTER with the name Age
        if (typeof age === 'number' && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log('Недопустимое значение');
        }
    }
}

const ivan = new User2('Ivan', 27); // Создаем новый объект при помощи создания новых потомков
console.log(ivan.name);
console.log(ivan.age); // we 're using GETTER
ivan.age = 99; // we're using here SETTER
console.log(ivan.age); // we  use again here GETTER to find out whether our SETTER above works or not

ivan.say(); // вызов функции у метода ivan