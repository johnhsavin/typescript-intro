let x = 'hey class'     // implicitly it always has a string
let a: string = 'Im a string' // explicitly
let b: string | number | false = 'another string'
console.log(typeof(x))

b = 12345
console.log(typeof(x))

b = false
console.log(typeof b)

function testMyTypescript(num1:number, num2:number) {
  return num1 * num2
}

console.log(testMyTypescript(23, 78))

// Arrays in TypeScript

function myArrayFunction(arr1: string[]) {
console.log(arr1) 
}
myArrayFunction(['test', 'hola', 'john'])

// Objects
// There are 2 ways to declare the shape of an object.
// 1. Type - Have limitations / restricted

type TBird = {
  wings: number
  beak: boolean
  feathers: number | string     // add a | pipe to add multiple options
  color?: string      // adding ? makes key optional
}
const bird1: TBird = {wings: 2, beak: true, feathers: 2000}
const bird2: TBird = {wings: 5, beak: false, feathers: 2, color: 'blue'}
const bird3: TBird = {wings: 30, beak: true, feathers: 'none', color: 'darkBlue'}

// 2. Interface - more flexible
// interface in TypeScript

import { IBird, IKillerBirds } from "./interfaces"

const owl: IBird = {
  wings: 2,
  nocturnal: true,
  family: ['joe', 'jane', 'jack'],
  flies: true
}

const eagle: IKillerBirds = {
  wings: 2,
  nocturnal: true,
  family: ['moe', 'bane', 'john'],
  flies: true,
  edible: true,
  hasKilled: [
    {type: 'racoon', weight: 12, color: 'darkbrown'},
    {type: 'rat', weight: 1, color: 'darkgray'},
    {type: 'Andys puppy', weight: .5, color: 'yellow'},
  ],
  phoneNumber: 9175761008
}


