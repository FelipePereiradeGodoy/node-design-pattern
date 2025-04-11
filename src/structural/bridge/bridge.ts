interface DrawingAPI {
    drawCircle(x: number, y: number, radius: number): void;
}

class DrawingAPI1 implements DrawingAPI {
    drawCircle(x: number, y: number, radius: number): void {
        console.log(`API1: Desenhando círculo em (${x}, ${y}) com raio ${radius}`);
    }
}

class DrawingAPI2 implements DrawingAPI {
    drawCircle(x: number, y: number, radius: number): void {
        console.log(`API2: Desenhando círculo em (${x}, ${y}) com raio ${radius}`);
    }
}

class Circle {
    constructor(
        private x: number,
        private y: number,
        private radius: number,
        private api: DrawingAPI
    ) {}

    draw() {
        this.api.drawCircle(this.x, this.y, this.radius);
    }
}

const circle1 = new Circle(1, 2, 3, new DrawingAPI1());
const circle2 = new Circle(4, 5, 6, new DrawingAPI2());

console.log('-------------- Bridge Pattern --------------');

circle1.draw();
circle2.draw();

console.log('--------------------------------------------');
