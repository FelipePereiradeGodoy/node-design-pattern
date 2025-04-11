class OldPrinter {
    printText(text: string) {
        console.log(`Texto impresso: ${text}`);
    }
}

interface NewPrinter {
    print(): void;
}

class PrinterAdapter implements NewPrinter {
    constructor(private oldPrinter: OldPrinter, private content: string) {}

    print(): void {
        this.oldPrinter.printText(this.content);
    }
}

const oldPrinter = new OldPrinter();
const adapter = new PrinterAdapter(oldPrinter, "Hello Adapter");

console.log('----------- Adapter Pattern -----------');

adapter.print();

console.log('---------------------------------------');
