'use strict';

// localStorage- eto globalniy obyekt ili po drugomu eto svoystvo obyekta window
// ex: window.localStorage

// localStorage.setItem('number', 5);
// localStorage.getItem('number');
// //localStorage.removeItem('number');
// localStorage.clear();
// console.log(localStorage.getItem('number'));


const checkbox=document.querySelector('#checkbox'),
    form=document.querySelector('form'),
    change=document.querySelector('#color');

    
if(localStorage.getItem('isChecked')==='true'){
    checkbox.checked=true;
}

checkbox.addEventListener('change',()=>{
    localStorage.setItem('isChecked', true);
});

if (localStorage.getItem('bg')==='changed'){
    form.style.backgroundColor='red';
}

change.addEventListener('click', ()=>{
    if(localStorage.getItem('bg')==='changed'){
        localStorage.removeItem('bg');
        form.style.backgroundColor='#fff';
    } else{
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor='red';
    }
});

const person={
    name:"Alex",
    age: 23
};

const sterializedPerson=JSON.stringify(person);
localStorage.setItem('alex', sterializedPerson);

console.log(JSON.parse(localStorage.getItem('alex')));