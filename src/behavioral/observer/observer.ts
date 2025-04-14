interface Observer {
    update(message: string): void;
}
  
class Subject {
    private observers: Observer[] = [];

    addObserver(observer: Observer) {
        this.observers.push(observer);
    }

    notify(message: string) {
        this.observers.forEach(observer => observer.update(message));
    }
}
  
class EmailSubscriber implements Observer {
    constructor(private name: string) {}

    update(message: string): void {
        console.log(`${this.name} recebeu: ${message}`);
    }
}
  
const subject = new Subject();
subject.addObserver(new EmailSubscriber("João"));
subject.addObserver(new EmailSubscriber("Maria"));

console.log('============== Observer Pattern ==============');

subject.notify("Nova promoção disponível!");

console.log('==============================================');
  