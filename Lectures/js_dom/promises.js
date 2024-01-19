// console.log("Hello");
// console.log("my");
// setTimeout(()=>console.log("name"), 4000);

// console.log("is");
// console.log("Kostja");
const stock = {
    meat: ["beef", "chicken", "vegan"],
    ingrediends: ["bun", "vegetables"],
    sauce: ["ketchup", "burger sauce"],
    package: ["paper", "bag"]
};

// const order = (meatType, callProduction) => {
//     setTimeout(() => {
//         console.log(`${stock.meat[meatType]} was selected`);
//         callProduction();
//     }, 2000);

// }

// const production = () => {
//     // setTimeout(() => console.log("production started"), 0);
//     // setTimeout(() => {
//     //     console.log("meat has been grilled");
//     //     setTimeout(() => {

//     //         console.log(`${stock.ingrediends[0]} and ${stock.ingrediends[1]} were added`);
//     //         setTimeout(() => {
//     //             console.log(`${stock.sauce[0]} and ${stock.sauce[1]} were added`);
//     //             setTimeout(() => {
//     //                 console.log(`Burger was wrapped in ${stock.package[0]}`);
//     //             }, 1000);
//     //             setTimeout(() => {
//     //                 console.log(`Burger was placed in ${stock.package[1]}`);
//     //                 setTimeout(() => {
//     //                     console.log(`Burger was served!`);
//     //                 }, 1000);
//     //             }, 1000);
//     //         }, 1000);
//     //     }, 1000);
//     // }, 2000);
// }

// order(0, production);

let restrauntIsOpen = true;
// const order = (time, work) => {
//     return new Promise((resolve, reject) => {
//         if (restrauntIsOpen) {
//             setTimeout(() => {
//                 resolve(work());
//             }, time);

//         } else {
//             reject(console.log("Restraunt is closed!"));
//         }
//     });
// }

// order(2000,()=> console.log(`${stock.meat[0]} was selected`))
// .then(()=> {
//     return order(0, ()=> console.log("production started"));
// })
// .then(()=> {
//     return order(2000, ()=> console.log("meat has been grilled"));
// })
// .then(()=> {
//     return order(1000, ()=> console.log(`${stock.ingrediends[0]} and ${stock.ingrediends[1]} were added`));
// })
// .then(()=> {
//     return order(1000, ()=> console.log(`${stock.sauce[0]} and ${stock.sauce[1]} were added`));
// })
// .then(()=> {
//     return order(1000, ()=> console.log(`Burger was wrapped in ${stock.package[0]}`));
// })
// .then(()=> {
//     return order(1000, ()=> console.log(`Burger was placed in ${stock.package[1]}`));
// })
// .then(()=> {
//     return order(1000, ()=> console.log(`Burger was served!`));
// }).catch(()=>{
//     console.log("Customer left.");
// })
// .finally(()=> {
//     console.log("day ended");
// });

// try {
//     //throw Error("Some error");
//     console.log("Hello world!");
// }
// catch (err) {
//     console.log(err.message);
// }

// finally {
// console.log("Good bye!");
// }

//async / await

// async function order(){

// }

// const order = async function(){

// }

// const chooseMeat = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(
//                 console.log("What type of meat would you like?")
//             )
//         }, 3000);

//     });
// }

// const order = async () => {
//     console.log(1);
//     console.log(2);
//     await chooseMeat();
//     console.log(3);
//     console.log(4);
//     console.log(5);
// }

// order();

// const time = (ms) => {
//     return new Promise((resolve, reject) => {
//         if (restrauntIsOpen) {
//             setTimeout(resolve, ms);
//         }
//         else {
//             reject(console.log("Shop is closed"));
//         }
//     })
// }

// const kitchen = async () => {
//     try {
//         await time(2000);
//         console.log("meat has been grilled");
//         await time(1000);
//         console.log(`${stock.ingrediends[0]} and ${stock.ingrediends[1]} were added`);
//     }
//     catch (err) {
//         console.log("CUSTOMER LEFT ");
//     }
//     finally {
//         console.log("Day ended, shop is closed!");
//     }
// }




// kitchen();

