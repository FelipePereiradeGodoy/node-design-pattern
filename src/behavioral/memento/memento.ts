class Memento {
    constructor(public state: string) {}
}

class Originator {
    private state = "";

    setState(state: string) {
        this.state = state;
        console.log(`Estado atual: ${state}`);
    }

    save(): Memento {
        return new Memento(this.state);
    }

    restore(memento: Memento) {
        this.state = memento.state;
        console.log(`Estado restaurado: ${this.state}`);
    }
}

console.log('=============== Memento Pattern ===============');

const originator = new Originator();
originator.setState("A");
const snapshot = originator.save();

originator.setState("B");
originator.restore(snapshot);

console.log('===============================================');