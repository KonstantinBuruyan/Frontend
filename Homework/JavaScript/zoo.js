class Animal {

    #name;
    #species;

    constructor(name, species) {
        this.#name = name;
        this.#species = species;
    }

    get name() {
        return this.#name;
    }

    get species() {
        return this.#species;
    }

    print() {
        //console.log(`Name ${animal.name} species ${animal.species}`);
        return `${this.#name} ${this.#species}`;
    }
}

class Mammal extends Animal {

    #furColor;

    constructor(name, furColor) {
        super(name, "Mammal");
        this.#furColor = furColor;
    }

    get furColor() {
        return this.#furColor;
    }

    print() {
        let a = super.print();
        a += ` ${this.#furColor}`;
        console.log(a);
    }
}

class Bird extends Animal {

    #wingSpan;

    constructor(name, wingSpan) {
        super(name, "Bird");
        this.#wingSpan = wingSpan;
    }

    get wingSpan() {
        return this.#wingSpan;
    }

    print() {
        let a = super.print();
        a += ` ${this.#wingSpan}`;
        console.log(a);
    }
}

class Reptile extends Animal {

    #scaleType;

    constructor(name, scaleType) {
        super(name, "Reptile");
        this.#scaleType = scaleType;
    }

    get scaleType() {
        return this.#scaleType;
    }

    print() {
        let a = super.print();
        a += ` ${this.#scaleType}`;
        console.log(a);
    }
}

class Zoo {

    #animals;

    constructor()
    {
        this.#animals = [];
    }

    addAnimal(animal) {
        this.#animals.push(animal);
    }

    listAnimals() {
        this.#animals.forEach(a =>this.printAnimal(a) );
    }

    printAnimal(animal) {
        console.log("\n" +animal.print());
    }

    getAnimalsBySpecies(species) {

        this.#animals.filter(a => a.species === species).forEach(a=>  this.printAnimal(a));
    }

    removeAnimal(name) {

        this.#animals.splice(this.#animals.findIndex(a => a.name === name), 1);
    }

    countAnimals() {
        return this.#animals.length;
    }

}

const z1 = new Zoo();


const m1 = new Mammal("Squirrel", "brown");
z1.addAnimal(m1);

const m2 = new Mammal("Polar bear", "white");
z1.addAnimal(m2);

const m3 = new Mammal("Wolf", "dark grey");
z1.addAnimal(m3);

const m4 = new Mammal("Fox", "red");
z1.addAnimal(m4);


const b1 = new Bird("Sparrow", "brown");
z1.addAnimal(b1);

const b2 = new Bird("Pigeon", "blue grey");
z1.addAnimal(b2);

const b3 = new Bird("Crow", "black");
z1.addAnimal(b3);

const r1 = new Reptile("Lizard", "platelike");
z1.addAnimal(r1);

const r2 = new Reptile("Snake", "smooth");
z1.addAnimal(r2);

const r3 = new Reptile("Turtle", "scutes");
z1.addAnimal(r3);

z1.listAnimals();
console.log(z1.countAnimals());
z1.removeAnimal("Sparrow");
console.log(z1.countAnimals());
console.log("\n");
z1.getAnimalsBySpecies("Bird");



