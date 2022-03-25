let a = 2;
let b = 4;


// one param
let multi = number => number * 3;
console.log(multi(b));

//two param 
let sum = (firstNumber,secondNumber) => {
    firstNumber *= 2 ;
    return firstNumber + secondNumber ;
}
console.log(sum(a,b));

// 1 param with multi statement 
let multipliedBy3 = number => {
    let multi = 3;
    return multi * number;
}
console.log(multipliedBy3(4));

//default value 

let hello = (name, age = 1) => {
    return "Hello" + name + age + " Tuổi";
}
console.log(hello('Hưng'));