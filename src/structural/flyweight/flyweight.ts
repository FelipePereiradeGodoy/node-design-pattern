class TreeType {
    constructor(private readonly name: string, private readonly color: string) {}

    draw(x: number, y: number) {
        console.log(`Desenhando ${this.name} de cor ${this.color} em (${x}, ${y})`);
    }
}

class TreeFactory {
    private static types: Record<string, TreeType> = {};

    static getTreeType(name: string, color: string): TreeType {
        const key = `${name}_${color}`;

        if (!this.types[key]) {
            this.types[key] = new TreeType(name, color);
        }

        return this.types[key];
    }
}

console.log('-------------- Fkyweight --------------');

const tree1 = TreeFactory.getTreeType("Pinheiro", "Verde");
tree1.draw(10, 20);

const tree2 = TreeFactory.getTreeType("Pinheiro", "Verde");
tree2.draw(30, 40);

console.log();

console.log('Arvore1 é igual Arvore2: ' + (tree1 === tree2));

console.log('---------------------------------------');
