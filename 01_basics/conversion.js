let score = "33abc"

console.log(typeof score);

let valueInNumber = Number(score)//this can be converted into Boolean or String

console.log(typeof valueInNumber);
console.log(valueInNumber);



console.log("1" + 2);
console.log(1 + "2");
console.log(1 + 2 + "1");

/* 

after conversion typeOf is always number

33 => 
typeOf is => number 
output is => 33

"33" => 
typeOf is => String 
output is => 33

"33abc" => 
typeOf is => String 
output is => NaN

"null" => 
typeOf is => Object 
output is => 0

"undefined" => 
typeOf is => undefined 
output is => NaN

"true" => 
typeOf is => boolean
output is => 1



*/