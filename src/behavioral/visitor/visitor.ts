interface Visitable {
    accept(visitor: Visitor): void;
}

interface Visitor {
    visitBook(book: Book): void;
    visitFruit(fruit: Fruit): void;
}

class Book implements Visitable {
    constructor(public title: string, public price: number) {}

    accept(visitor: Visitor): void {
        visitor.visitBook(this);
    }
}

class Fruit implements Visitable {
    constructor(public name: string, public weight: number, public pricePerKg: number) {}

    accept(visitor: Visitor): void {
        visitor.visitFruit(this);
    }
}

class PriceCalculatorVisitor implements Visitor {
    private total = 0;

    visitBook(book: Book): void {
        console.log(`Livro: ${book.title} custa R$${book.price}`);
        this.total += book.price;
    }

    visitFruit(fruit: Fruit): void {
        const price = fruit.weight * fruit.pricePerKg;
        console.log(`Fruta: ${fruit.name} custa R$${price.toFixed(2)}`);
        this.total += price;
    }

    getTotal(): number {
        return this.total;
    }
}

const items: Visitable[] = [
    new Book("Clean Code", 100),
    new Fruit("Banana", 2, 5),
    new Book("Design Patterns", 150),
];

const visitor = new PriceCalculatorVisitor();

console.log('============= Visitor Pattern ============');
for (const item of items) {
    item.accept(visitor);
}
console.log();
console.log(`Total da compra: R$${visitor.getTotal()}`);

console.log('=========================================');
