separator();

// ��� �������� ������� �������� � ������� ����� ���� ��� ������
// ��� ������ ���� ����� �� 23 ��������� ����
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

// ��� ��������� ������� �������� ���� ������� ������� � �������
// ��� html �������� ����� �������
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

// �������� ������� ������� ����� ��������� ��� ��������� (start, end)
// ��� ������� ����� � ��������� �� start �� end ����� �������� �����
// � ������ ��� ��� ��������

function printRange(start, end) {

    for (var i = start; i < end + 1; i++) {

        i % 2 === 0
            ? console.log(`${i} is even`)
            : console.log(`${i} is odd`);
    }
}


printRange(1, 10);

separator();
// �������� ������� ������� ��������� ��� ����� � �������� ���������
// ������� ���������� �� ���

function getMax(first, middle, last) {
    return Math.max(first, middle, last);
}

console.log(getMax(5, 7, 3));



separator();


// Fizz Buzz
// ��� ��������� ����� �� 1 �� 100
// �������� ��������� ������� ������� � ������� ����� � FIZZ ���� ����� ������� �� 3 ��� �������
// ������� � ������� ����� � BUZZ ���� ����� ������� �� 5 ��� �������
// ������� � ������� ����� � FIZZ BUZZ ���� ����� ������� �� 3 � �� 5 ��� �������

for (var i = 0; i < 101; i++) {

    if (i === 0) // �� ���� ������ ������
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
