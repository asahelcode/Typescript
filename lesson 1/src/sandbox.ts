//Function

let greet: Function;

greet = (user: string, location?: string) => {
  //Adding ?: makes the parameter undefined
  console.log(`Hello, ${user}`);
};

greet('henry');

let multiply: Function;

multiply = (num1: number, num2: number): number => {
  return num1 * num2;
};

let result = multiply(10, 18);

console.log(result);
