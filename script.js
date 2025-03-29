let a = 10;
let b = 5;
let c = 2;


let result2 = (a * b) / c;
console.log(result2);

console.log(a % b);

let result = a + b + c;
console.log(result);

console.log(b = a + c);

let x = 7;
let y = x++ + ++x;
let f = x-- - --x;
console.log(y);
console.log(f);

let num = 4;
let num1 = 5;
let sum = num + num1;
let first = "The result is: " + sum;
console.log(first);

let z = 10;
let s = 7;
let result4 = z > s && z > 0 && s > 0;
console.log(result4);

let m = 2;
let result5 = m < 10 || m === 2;
console.log(result5);

let result6 = z / m !== 5;
console.log(result6);

let sum1 = "10";
let sum2 = 10;
let result7 = sum1 == sum2 || sum1 === sum2;
console.log(result7);
// sum1==sum2 проверяет снаружи не полностью и думает что они равны и выводит true а sum1===sum2 проверяет внутри и тип данных здесь строчный и числовой они не не равны и поэтому выводит false

let x1 = 6;
let result8 = x1 % 2 === 0 || x1 % 3 === 0 && x1 % 6 !== 0;
console.log(result8)

let y1 = 8
let result9 = y1 > 10 || y1 < 5;
console.log(result9);
ы

// let y1 = рандом цифра
// let result9=!(y1>10|| y1 < 5);
// console.log(result9);

//это в том случае когда вы в будущем задаете любую цифру и одно их цифр будет больше 10 это дасть true а будет больше 5 дасть false тогда (true || false) это даст true как так у нас !(true) будет false   
