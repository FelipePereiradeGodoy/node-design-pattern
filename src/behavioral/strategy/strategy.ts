interface Strategy {
    execute(a: number, b: number): number;
}

class Add implements Strategy {
    execute(a: number, b: number): number {
        return a + b;
    }
}

class Multiply implements Strategy {
    execute(a: number, b: number): number {
        return a * b;
    }
}

class Calculator {
    constructor(private strategy: Strategy) {}

    calculate(a: number, b: number): number {
        return this.strategy.execute(a, b);
    }
}

console.log('============= Strategy Pattern =============');

let calc = new Calculator(new Add());
console.log('Calculo[Soma]: '+ calc.calculate(3, 4));

calc = new Calculator(new Multiply());
console.log('Calculo[Multiplica]: '+ calc.calculate(3, 4));

console.log('===========================================');
