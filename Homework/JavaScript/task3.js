separator();

// Для задоного массива выводить в консоль число если оно чётное
// Как только цикл дойдёт до 23 разорвать цикл
const numbers = [4, 3, 10, 99, 23, 41, 5, 12, 23, 41, 12, 32];


for (var i = 0; i < numbers.length; i++) {


    if (numbers[i] === 23) {
        break;
    }

    if (numbers[i] % 2 === 0) {
        console.log(`${numbers[i]}`);
    }
}
separator();

// Для заданного массива написать цикл который выведет в консоль
// Код html элемента одной строкой
/*
<ul>
        <li><h1>Hello Jack Smith</h1></li>
        <li><h1>Hello Bob Summers</h1></li>
        <li><h1>Hello Sarah Gold</h1></li>
        <li><h1>Hello Susan Vega</h1></li>
        <li><h1>Hello Mary Roberts</h1></li>
</ul>
*/
const people = [{ name: 'Jack', surname: 'Smith' }, { name: 'Bob', surname: 'Summers' }, { name: 'Sarah', surname: 'Gold' }, { name: 'Susan', surname: 'Vega' }, { name: 'Mary', surname: 'Roberts' }];

let html = "<ul>\r\n";
for (var i = 0; i < people.length; i++) {


    html += " ".repeat(6) + `<li><h1>Hello ${people[i].name} ${people[i].surname}</h1></li>\r\n`;
}

html += "<ul>";

console.log(html);


separator();

// Напишите функцию которая будет принимать два аргумента (start, end)
// Для каждого числа в диапозоне от start до end будет выводить число
// И Четное оно Или нечетное

function printRange(start, end) {

    for (var i = start; i < end + 1; i++) {

        i % 2 === 0
            ? console.log(`${i} is even`)
            : console.log(`${i} is odd`);
    }
}


printRange(1, 10);

separator();
// Напишите функцию которая принимает три числа в качестве аргумента
// Находит наибольшее из трёх

function getMax(first, middle, last) {
    return Math.max(first, middle, last);
}

console.log(getMax(5, 7, 3));



separator();


// Fizz Buzz
// Для диапозона чисел от 1 до 100
// написать программу которая выведет в консоль число и FIZZ если число делится на 3 без остатка
// выведет в консоль число и BUZZ если число делится на 5 без остатка
// выведет в консоль число и FIZZ BUZZ если число делится на 3 и на 5 без остатка

for (var i = 0; i < 101; i++) {

    if (i === 0) // на ноль делить нельзя
        continue;

    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} FIZZ BUZZ`);
    }
    else if (i % 5 === 0) {
        console.log(`${i} BUZZ`);
    }
    else if (i % 3 === 0) {
        console.log(`${i} FIZZ`);
    }

}

function separator() {

    console.log("\r\n" + "*".repeat(50) + "\r\n");
}
