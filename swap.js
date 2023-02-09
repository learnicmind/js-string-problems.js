let first = 4;
let second = 5;

console.log(first, second);
// first = second;
// second = first;
const temp = first;
first = second;
second = temp;
console.log(first, second);