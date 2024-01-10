
separator();

// ���� ������� ������ 'bobsCar'
// �������� ����������� if ����� �������
// ���� �������� 'mileage' ����� 0 �� ��������� ������ 'Bob owns Subaru Impreza and it is brand new!'
// ���� �������� 'mileage' ������ 1000 �� ��������� ������ 'Bob owns Subaru Impreza and it is almost new!'
// � ��������� ������� ��������� ������ 'Bob owns Subaru Impreza and it is old!'

const bobsCar = {
    make: 'Subaru',
    model: 'Impreza',
    info: {
        color: 'blue',
        mileage: 0
    }
}

if (bobsCar.info.mileage === 0) {
    console.log("Bob owns Subaru Impreza and it is brand new!");
}
else if (bobsCar.info.mileage < 1000) {
    console.log("Bob owns Subaru Impreza and it is almost new!");
}
else {
    console.log("Bob owns Subaru Impreza and it is old!");
}

separator();




// �������� �������, ������� ����� ��������� ��� ��������� - 'x, y'
// �������� ������ �� ���
// ���� �����-�� �� ��� �������������, ������� ��� �� ������������� � ������ ��
// x = -2 y = -3 ��������� 5

function sum(x, y) {

    if (x < 0) {
        x *= -1;
    }
    if (y < 0) {
        y *= -1;
    }

    //return Math.abs(x) + Math.abs(y);
    return x + y;
}

console.log(sum(-2, -3));

separator();


// ���� ������� ������ 'registry' - ������ � �������� �������������
// ���������� ������ � �������� ������ ���������
// ������ ������ ��������� ��������� � ������� 'newOwner'
const registry = {
    owner: {
        name: 'Mary Gold',
        age: 45
    },
    property: {
        type: 'House',
        bedrooms: 4,
        address: {
            country: 'England',
            city: 'London',
            street: 'Fulton rd.',
            houseNumber: 30

        }
    }
}

const newOwner = {
    name: 'Jack Smith',
    age: 50
}

const copyRegistry = JSON.parse(JSON.stringify(registry));

copyRegistry.owner.name = newOwner.name;
copyRegistry.owner.age = newOwner.age;

console.log(copyRegistry);

separator();

// �������� ��������� ������� ������� � ������� ����� ����
// ������ ����� � �������

const numsArray = [1, 12, 34, 71, 14, 12, 33, 70, 82, 81, 9, 19, 90];

let evenSum = 0;
numsArray.forEach(num => {

    if (num % 2 === 0) {
        evenSum += num;
        // console.log(num);
    }

});

console.log(evenSum);

separator();

// �������� ��������� ������� �������������� ������ ������ � ���������
// � ������� � ����� ������ ������ ����� ��� ����� ���� 18 � ������

const people = [
    {
        name: 'Jack',
        age: 15
    },
    {
        name: 'Sarah',
        age: 21
    },
    {
        name: 'Bob',
        age: 54
    },
    {
        name: 'Mary',
        age: 12
    },
    {
        name: 'Simon',
        age: 18
    },
    {
        name: 'Jonhatan',
        age: 17
    }
]

const adultPeoples = []

people.forEach(person => {
    if (person.age >= 18) {
        adultPeoples.push(person);
    }
});

console.log(adultPeoples);

separator();


// �������� ��������� ������� �������������� ������ ������ � ������� � ������� ����� ������� ������

const strings = ['Star', 'Planet', 'Comet', 'Interstellar', 'Space'];
const maxWord = {
    word: "",
    length: 0,

};
strings.forEach(word => {

    if (word.length > maxWord.length) {
        maxWord.word = word;
        maxWord.length = word.length;
    }

});

console.log(maxWord.word);

separator();

// �������� ��������� ������� �������������� ������ ������ � ����� � ��� ���������� ����� ������� ���

const numbers = [3, 15, 23, 56, 66, 71, 12, 90];

let maxNumber = 0;

numbers.forEach(num => {

    if (maxNumber < num && num % 3 === 0) {
        maxNumber = num;
    }
});

console.log(maxNumber);

separator();

function separator() {

    console.log("\r\n" + "*".repeat(50) + "\r\n");
}