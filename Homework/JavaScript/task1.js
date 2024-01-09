
separator();
<<<<<<< HEAD

=======
>>>>>>> 4fcbb982b6974adfe07b75485a07bd3f94048105
// Напишите программу которая сложит все числа в заданном массиве
// выведет результат в консоль
const nums1 = [5, 6, 92, 47, 12, -18, 33, 8];

let sum=0;
nums1.forEach(val => sum += val);
console.log(sum);


separator();

// Напишите программу которая добавит в массив namesObject объекты
// с двумя парами { name: "имя с большой буквы", nameLength: "длина имени"}
const names = ['jack', 'sarah', 'mary', 'joey', 'chris', 'samantha'];
const namesObject = [];

names.forEach(val => {
    let nm = val.charAt(0).toUpperCase() + val.slice(1);
    const nObject = {
        name: nm,
        nameLength:nm.length,
    }
    namesObject.push(nObject);
});

console.log(namesObject);

separator();
<<<<<<< HEAD

=======
>>>>>>> 4fcbb982b6974adfe07b75485a07bd3f94048105
// Напишите программу которая в массив numsRes добавит объекты
// с тремя парами { number: "само число", square: "число в квадрпате", cube: "число в кубе"}
const nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numsRes = [];

nums2.forEach(val => {
   
    const nObject = {
        number: val,
        square: val ** 2,
        cube: val ** 3,
    }
    numsRes.push(nObject);
});


console.log(numsRes);

separator();

// Используйте forEach чтобы в массив 'reversedNumberRow'
// добавить те же числа, но в обратном порядке.
const numberRow = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const reversedNumberRow = [];


numberRow.forEach(val => {

    reversedNumberRow.unshift(val);
});


console.log(reversedNumberRow);

separator();

// Для каждой машины в массиве используйте "forEach"
// что-бы вывести в консоль строку типа:
// This is green Jaguar. It costs 7000€.

const cars = [
    {
        make: 'BMW',
        color: 'grey',
        price: 10000
    },
    {
        make: 'Mercedes-Benz',
        color: 'black',
        price: 15000
    },
    {
        make: 'Honda',
        color: 'blue',
        price: 8000
    },
    {
        make: 'Ferrari',
        color: 'red',
        price: 50000
    }
];


cars.forEach(val => {

    console.log("This is " + val.color + " " + val.make + ". It costs " + val.price +"€.");
});

separator();

function separator() {

    console.log("\r\n"+"*".repeat(50)+"\r\n");
}