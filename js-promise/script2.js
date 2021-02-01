"use strict";

const test=time=>{
    return new Promise(resolve=>{
        setTimeout(() => resolve(), time)
    });
};

