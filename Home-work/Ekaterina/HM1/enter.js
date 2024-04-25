var user;
var userName = "Jone"; // присвоено значение
let userAge = 25;
let firstName = "John";
userName = "John1"; // string
userAge = 15; // number
// let userName = `{}`
console.log(userName);
console.log(userAge);


const a = 11;
console.log(a%4) // округление

let num1 = 5;
console.log(++num1); // + один
console.log(--num1); // - один

let num2 = 5;
num2+=10;
console.log(num2); // 15

let num3 = 5;
num3-=10;
console.log(num3); // -5

let num4 = 5;
num4*=10;
console.log(num4); // 50

let num15 = 10;
let num16 = 20;
let n1 = num15 > num16;
console.log(n1); // false

let num5 = 10;
let num6 = 10 == 20; // просто =
let n = 10 === 20 ; //сравнивает значение и тип данных
let num7 = 10 != 20; // не =
console.log(num6); // false
console.log(n); // false
console.log(num7); // true

// логические операции
const name = 'John';
const age = 27;
//const age1 = const.age:
console.log(name==='John' && age===27); //  логическое И true
console.log(name==='Anton' && age===28); // false
console.log(name==='John' && age===28); // false

console.log(name==='John' || age===27); //  логическое или true
console.log(name==='Anton' || age===28); // false
console.log(name==='John' || age===28); // true

const age1 = "27";
const age2 = 27;

console.log(typeof age1);
console.log(typeof age2);