"use strict";
// let character = 'maria';
// let isMale = true;
// character = 'henry';
// isMale = false;
// const circumference = (diameter: number) => {
//   return diameter * Math.PI;
// };
// console.log(circumference(10));
// const greetUser = (user: string) => {
//   console.log('Welcome to Asahel community', user);
// };
// greetUser('henry');
//ARRAYS AND OBJECTS
// const person = {
//   name: 'henry',
//   location: 'Nsukka',
//   age: 20,
//   religion: 'christianity',
// };
// person.name = 'Isaac';
// person.location = 'Badagry';
// const locations = ['Nsukka', 'Ado', 'Kwara', 'Madalla'];
// locations[2] = 'ikeja';
//EXPLICIT TYPE
// let country: string;
let age;
let isEligible;
isEligible = false;
let country = [];
country.push('New york');
//UNION type
let mixed = [];
mixed.push('henry');
mixed.push(45);
mixed.push('Grace');
console.log(mixed);
//UNION type for primitive variable
let phoneNumber;
phoneNumber = '+2347052899465';
phoneNumber = 2347052899465;
//OBJECT
let person;
person = { name: 'henry', age: 10, isEligible: false, location: 'Nsukka' };
let henry = Object.assign(Object.assign({}, person), { hobby: 'football', name: 'hellen' });
// console.log(henry);
//DYNAMIC TYPES => Be careful using this
let userAge;
userAge = 30;
userAge = false;
userAge = 'henry';
console.log(userAge);
