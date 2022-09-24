// let character = 'maria';
// let isMale = true;
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var age;
var isEligible;
isEligible = false;
var country = [];
country.push('New york');
//UNION type
var mixed = [];
mixed.push('henry');
mixed.push(45);
mixed.push('Grace');
console.log(mixed);
//UNION type for primitive variable
var phoneNumber;
phoneNumber = '+2347052899465';
phoneNumber = 2347052899465;
//OBJECT
var person;
person = { name: 'henry', age: 10, isEligible: false, location: 'Nsukka' };
var henry = __assign(__assign({}, person), { hobby: 'football', name: 'hellen' });
// console.log(henry);
//DYNAMIC TYPES => Be careful using this
var userAge;
userAge = 30;
userAge = false;
userAge = 'true';
