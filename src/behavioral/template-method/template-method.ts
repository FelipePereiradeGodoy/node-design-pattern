abstract class DataProcessor {
    process(): void {
        this.readData();
        this.transformData();
        this.saveData();
    }

    abstract readData(): void;
    abstract transformData(): void;

    saveData(): void {
        console.log("Salvando dados...");
    }
}

class CSVProcessor extends DataProcessor {
    readData(): void {
        console.log("Lendo dados do CSV...");
    }

    transformData(): void {
        console.log("Transformando dados do CSV...");
    }
}

console.log('========== Template Method Pattern ==========');

const processor = new CSVProcessor();
processor.process();

console.log('=============================================');
