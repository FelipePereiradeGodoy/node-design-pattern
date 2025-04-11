interface Image {
    display(): void;
}

class RealImage implements Image {
    constructor(private filename: string) {
        this.loadFromDisk();
    }

    private loadFromDisk() {
        console.log(`Carregando ${this.filename}`);
    }

    display(): void {
        console.log(`Exibindo ${this.filename}`);
    }
}

class ProxyImage implements Image {
    private realImage?: RealImage;

    constructor(private filename: string) {}

    display(): void {
        if (!this.realImage) {
            this.realImage = new RealImage(this.filename);
        }

        this.realImage.display();
    }
}

const image = new ProxyImage("foto.png");

console.log('---------- Proxy Pattern ----------');

image.display();
image.display();

console.log('-----------------------------------');
