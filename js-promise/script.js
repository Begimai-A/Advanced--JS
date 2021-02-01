"use strict";

console.log("Loading data...");

const req=new Promise(function(resolve, reject) {
    setTimeout(()=>{
        console.log("Preparing data...");

        const product={
            name: 'TV',
            price: 2000
        };

        resolve(product);
    }, 2000);
});

req.then((product)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            product.status='ordered';
            
           resolve(product);
          // reject();// если будет использоваться этот аргумент, то код сразу переходит на метод catch(),
                   // который всегда должен прописываться в конце кода!!!
        }, 2000);
    });
}).then(data =>{
    data.modify=true;
    return data;
    
}).then(data=>{
    console.log(data);
//}).catch(()=>{
  //  console.error("Error");
}).finally(()=>{
    console.log('Finally done!');
});



