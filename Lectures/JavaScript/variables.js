// let a;
// a=10;

// let b=20;
// console.log(a);

// a=20;
// console.log(a);

// const c = 100;


// // simple comment
// // ! sdsdsds
// // ? sxax

// let num= 123.023;
// console.log(typeof num);

// console.log(0.1+0.2);


// console.log(120+40);

// console.log(120-40);

// console.log(120*40);

// console.log(120/40);

// console.log(120**40);

// console.log(9%4);

// let x=5;
// x+=5;

// console.log(x);

// let userName ="Jack Smith";

// let userName2 = userName;

// userName2 +=   "new ";

// console.log( userName2);

// console.log(typeof userName);
// console.log(userName+ " Hello word");


// console.log("My\t favourite\n book is \"Metro 2033\"");

// let text = "hello\n";

// console.log(text.length);

// let name = "Roman";
// let surname = "Kutselepa";

// console.log(`Name: ${name} Surname: ${surname}`);

// null
// undefined
// NaN

// let bool=true;

// let x = Boolean(-0); // false return only 0 or -0 , NaN
// console.log(x);

// let a = Boolean(NaN);
// console.log(a);

// let s = Boolean("Hello world"); // false return only empty string
// console.log(s);


// let fruits= "Apple, Banana, Pear";


// console.log(fruits[0]);

// console.log(fruits.length);
// console.log(fruits[fruits.length-1]);
// console.log(fruits.slice(0, 4));
// console.log(fruits.slice(0, fruits.length));

// let y ="hello people of planet Earth!";
// let words = y.split(" ");

// console.log(words);

// const myCar = {
//     make: "Honda",
//     "car model": "Civic",
//     popular: true,
//     info: {
//         year: 2000,
//         color: "red",
//     }
// }

// const myCar2 = {
//     make: "Honda",
//     "car model": "Civic",
//    // popular: true    
//     }
// console.log(myCar === myCar2);

// console.log(myCar.make);
// let status = "popular";
// console.log(myCar["car model"]);

// myCar.color = "red";

// console.log(myCar);

//delete myCar["car model"]; //delete car model attribute

// console.log(myCar.info.color);

// let myCarCopy= Object.assign({},myCar);
// myCarCopy.make ="VW";


// const myCarCopy ={...myCar};
// myCarCopy.info.year = 2024;

// const myCarCopy = JSON.parse( JSON.stringify(myCar));
// myCarCopy.info.color ="black";
// console.log(myCar);

// console.log(myCarCopy);console.log(myCarCopy);

// const userName = "Terminator";
// const friendsQty = 10000;
// const userProfile = {
//     // name: userName,
//     // friends: friendsQty,
//     userName,
//     friendsQty,
//     emailVerified: false,
// }
//console.log(userProfile);

// const btn = {
//     width:200,
//     text: "Buy",
//     color: "green",
// }

// const redButton = {
    
//     ...btn,
//     color: "red",

// }

// console.log(redButton);

// const numArr = [1,2,3];
// numArr.length = 10;
// const arr = new Array();

// console.log( numArr);

// const  nums = [1,2,3,4,5,6,7,8,9];

// nums.forEach(num => {
//     console.log(num**2);
// });

// nums.push(10);

// console.log(nums);

// let removed = nums.pop();

// console.log(nums);
// console.log(removed);

// nums.unshift(0);
// console.log(nums);

// nums.shift();
// console.log(nums);

const myCar ={
    make: "BMV",
    model: "325",
    color: "red"
}
console.log(Object.values(myCar));
console.log(Object.keys(myCar));
console.log(Object.entries(myCar));