// let x = 5;

// if(x === 5){
//     console.log("X is equal to 5");
// }
// else if(x > 2){
//     console.log("X > 2");
// }
// else if(x > 0){
//     console.log("X > 0");
// }
// else{
//     console.log("X is less than 5");
// }

// const myCar = {
//     make: "Honda",
//     model: "Civic",
//     popular: true,
// }

// if (myCar.popular){

//     console.log(`This is my ${myCar.make} ${myCar.model}. It is popular.`);
// }
// else
// {
//     console.log(`This is my ${myCar.make} ${myCar.model}. It isn't popular.`);
// }

// const idCode = "12345678901";

// if(idCode.length ===11 ){
//     console.log(idCode);
// }
// else{

//     if(idCode.length > 11){

//         console.log("This is code is too long!");
//     }
//     else
//     {
//         console.log("This is code is too short!");
//     }

// }

const x = 5;

if (x === 5) {
    console.log("STRICT");
}

if (x == 5) {
    console.log("NOT STRICT");
}

if (x) {
    console.log("Hello");
}

console.log(!true);
console.log(!false);
console.log(!!true);

const age = 11;

// age < 12 - child
// 12 <= age < 18 - teenager
// age >=18 - adult

// if(age < 12){
//     console.log("Child");
// } else if (age < 18){
//     console.log("Teenager");
// }
// else{

//     console.log("Adult");
// }

// if(age < 12){
//     console.log("Child");
// }

// if(12 <= age < 18){
//     console.log("Teenager");
// }

// if(age => 12 && age < 18){
//     console.log("Teenager");
// }

// if(age => 12 || age < 18){
//     console.log("Teenager");
// }

// let a=1;

// a && console.log("Hello", a);


// function sumTwoNumbers(par1, par2) {
//     let result = par1 + par2;

//     return result;
// }

// console.log(sumTwoNumbers(5, 6));


// function sayHello(){
//     console.log("Hello");
// }

// sayHello();

// function triangleArea(a, b, c){
//     const p = (a+b+c)/2;
//     const area = (p*(p-a)* (p-b) * (p-c)) ** 0.5;
//     return area;
// }

// console.log(triangleArea(3,4,5));

function isEven(number) {
    if (number % 2 === 0) {
        return true;
    }

    return false;
}

console.log(isEven(5));