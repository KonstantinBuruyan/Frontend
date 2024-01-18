// class Rectangle {
//     constructor(width, height, color) {
//         this._width = width;
//         this._height = height;
//         this._color = color;

//     }

//     getArea() {
// return this._width * this._height;
//     }

//     printDescription(){
//         console.log(`I am ${this._color} rectangle.`);
//     }
// }

// // console.log(Rectangle);

// const box = new Rectangle(30, 50, "red");
// const box2 = new Rectangle(20, 30, "green");

// box._color = "blue";

// console.log(box._height);
// console.log(box._width);
// console.log(box._color);
// console.log(box.getArea());
// console.log(box.printDescription());

// console.log(box2._height);
// console.log(box2._width);
// console.log(box2._color);
// console.log(box2.getArea());
// console.log(box2.printDescription());

class Employee {
    #name;
    #surname;
    #salary;

    constructor(name, surname, salary) {
        this.#name = name;
        this.#surname = surname;
        this.#salary = salary;
        //this.fullname = this.#name + " " + this.#surname;
    }


    get fullname() {
        return this.#name + " " + this.#surname;
    }

    set fullname(name){
    [this.#name, this.#surname] = name.split(" ");

    }

    get name() {
        return this.#name;
    }

    get surname() {
        return this.#surname;
    }

    get salary() {
        return this.#salary;
    }

    static date_now(){
        return new Date().getDate();
    }

    work() {
        console.log(`I am working!`);
    }
}

const emp1 = new Employee("Jack", "Smith", 2000);

console.log(emp1.fullname);
console.log(emp1.name);
console.log(emp1.surname);
console.log(emp1.salary);
console.log(Employee.date_now());

class Developer extends Employee{

    #progLangs;

    constructor(name, surname, salary, progLangs=[]){
        super(name, surname, salary);
        this.#progLangs = progLangs;
    }

    get progLangs(){
        return this.#progLangs;
    }

    work(){
        console.log("Developing software.");
    }
}

const dev1 = new Developer("Jane", "Gold", 4000, ["html","css","js"]);

console.log(dev1.progLangs);
dev1.fullname = "Bob Dylan";
console.log(dev1.name);
console.log(dev1.fullname);
console.log(dev1.work());
