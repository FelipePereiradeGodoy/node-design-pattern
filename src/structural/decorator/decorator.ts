interface Coffee {
    cost(): number;
    description(): string;
}

class SimpleCoffee implements Coffee {
    cost(): number {
        return 5;
    }

    description(): string {
        return "Café simples";
    }
}

class MilkDecorator implements Coffee {
    constructor(private coffee: Coffee) {}

    cost(): number {
        return this.coffee.cost() + 2;
    }

    description(): string {
        return `${this.coffee.description()}, com leite`;
    }
}

let coffee: Coffee = new SimpleCoffee();
coffee = new MilkDecorator(coffee);

console.log('------------- Decorator Pattern -------------');

console.log(coffee.description());
console.log(coffee.cost());

console.log('---------------------------------------------');
