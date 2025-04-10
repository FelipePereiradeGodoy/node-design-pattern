interface Clonable {
    clone(): Clonable;
}

class Person implements Clonable {
    constructor(public name: string, public age: number) {}

    clone(): Person {
        return new Person(this.name, this.age);
    }
}

const original = new Person("Alice", 30);
const clone = original.clone();

console.log('-------------- Prototype Pattern --------------');

console.log('Instancia original');
console.log(original);

console.log();

console.log('Instancia clone');
console.log(clone);

console.log();

console.log(`Instancia orignal é igual a clone: ${original === clone}`);

console.log('-----------------------------------------------');