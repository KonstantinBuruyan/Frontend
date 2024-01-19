const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map(num=> num ** 2);

const odds = numbers.filter(num=> num % 2 );

console.log(squares);

console.log(odds);