interface Component {
    operation(): string;
}

class Leaf implements Component {
    constructor(private name: string) {}

    operation(): string {
        return this.name;
    }
}

class Composite implements Component {
    private children: Component[] = [];

    add(child: Component) {
        this.children.push(child);
    }

    operation(): string {
        return this.children.map(child => child.operation()).join(" + ");
    }
}

const leaf1 = new Leaf("Folha A");
const leaf2 = new Leaf("Folha B");

const tree = new Composite();
tree.add(leaf1);
tree.add(leaf2);

console.log('--------------- Composite Pattern ---------------');

console.log(tree.operation());

console.log('-------------------------------------------------');
