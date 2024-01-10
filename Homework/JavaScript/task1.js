
separator();

// �������� ��������� ������� ������ ��� ����� � �������� �������
// ������� ��������� � �������
const nums1 = [5, 6, 92, 47, 12, -18, 33, 8];

let sum=0;
nums1.forEach(val => sum += val);
console.log(sum);


separator();

// �������� ��������� ������� ������� � ������ namesObject �������
// � ����� ������ { name: "��� � ������� �����", nameLength: "����� �����"}
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

// �������� ��������� ������� � ������ numsRes ������� �������
// � ����� ������ { number: "���� �����", square: "����� � ���������", cube: "����� � ����"}
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

// ����������� forEach ����� � ������ 'reversedNumberRow'
// �������� �� �� �����, �� � �������� �������.
const numberRow = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const reversedNumberRow = [];


numberRow.forEach(val => {

    reversedNumberRow.unshift(val);
});


console.log(reversedNumberRow);

separator();

// ��� ������ ������ � ������� ����������� "forEach"
// ���-�� ������� � ������� ������ ����:
// This is green Jaguar. It costs 7000�.

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

    //console.log("This is " + val.color + " " + val.make + ". It costs " + val.price +"�.");
    console.log(`This is ${ val.color } ${ val.make } . It costs ${ val.price }�.`);
});

separator();

function separator() {

    console.log("\r\n"+"*".repeat(50)+"\r\n");
}