
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }

// for (let i=0, j=10; i< 10 || j > 0; i++){

// }

const person = {
    name: "Jack",
    surname: "Smith",
    age: 20,
}
// iterate only keys, suit for objects as well
// for (let index in person) {
//     console.log(index);
// }

// iterate only values
// for (let index of numbers) {
//     console.log(index);
// }


// for (let i = 0; i < 10; i++) {
//     for (let j = 0; j < 10; j++) {
//         for (let k = 0; k < 10; k++) {
//             console.log(i, j, k);

//         }
//     }
// }

// while (true){
//     console.log("Please stop me");
//     break;
// }

// do {
//     console.log("Please stop me");
   
// } while(false)

for(let char of "I learn python"){
    if (char ===" "){
        continue;
    } else if (char === "p"){
        break;
    }
    console.log(char);

}