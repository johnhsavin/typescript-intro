"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let x = 'hey class'; // implicitly it always has a string
let a = 'Im a string'; // explicitly
let b = 'another string';
console.log(typeof (x));
b = 12345;
console.log(typeof (x));
b = false;
console.log(typeof b);

function testMyTypescript(num1, num2) {
    return num1 * num2;
}
console.log(testMyTypescript(23, 78));

// Arrays in TypeScript
function myArrayFunction(arr1) {
    console.log(arr1);
}
myArrayFunction(['test', 'hola', 'john']);
const bird1 = { wings: 2, beak: true, feathers: 2000 };
const bird2 = { wings: 5, beak: false, feathers: 2, color: 'blue' };
const bird3 = { wings: 30, beak: true, feathers: 'none', color: 'darkBlue' };
const owl = {
    wings: 2,
    nocturnal: true,
    family: ['joe', 'jane', 'jack'],
    flies: true
};
const eagle = {
    wings: 2,
    nocturnal: true,
    family: ['moe', 'bane', 'john'],
    flies: true,
    edible: true,
    hasKilled: [
        { type: 'racoon', weight: 12, color: 'darkbrown' },
        { type: 'rat', weight: 1, color: 'darkgray' },
        { type: 'Andys puppy', weight: .5, color: 'yellow' },
    ],
    phoneNumber: 9175761008
};
