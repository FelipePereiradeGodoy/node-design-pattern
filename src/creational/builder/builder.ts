class Burger {
    hasCheese: boolean = false;
    hasBacon: boolean = false;
    hasLettuce: boolean = false;

    describe(): string {
        return `Burger com: ${this.hasCheese ? "queijo " : ""}${this.hasBacon ? "bacon " : ""}${this.hasLettuce ? "alface" : ""}`;
    }
}

class BurgerBuilder {
    private burger = new Burger();

    addCheese() {
        this.burger.hasCheese = true;
        return this;
    }

    addBacon() {
        this.burger.hasBacon = true;
        return this;
    }

    addLettuce() {
        this.burger.hasLettuce = true;
        return this;
    }

    build(): Burger {
        return this.burger;
    }
}

const burger = new BurgerBuilder()
    .addCheese()
    .addBacon()
    .build();

console.log('------------- Builder Pattern -------------');
console.log(burger.describe());
console.log('-------------------------------------------');