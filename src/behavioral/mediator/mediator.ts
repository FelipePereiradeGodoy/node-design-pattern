interface Mediator {
    send(message: string, sender: Colleague): void;
}
  
class Colleague {
    constructor(public name: string, protected mediator: Mediator) {}

    send(message: string) {
        this.mediator.send(message, this);
    }

    receive(message: string) {
        console.log(`${this.name} recebeu: ${message}`);
    }
}
  
class ChatMediator implements Mediator {
    private colleagues: Colleague[] = [];

    addColleague(colleague: Colleague) {
        this.colleagues.push(colleague);
    }

    send(message: string, sender: Colleague) {
        this.colleagues.forEach(colleague => {
            if (colleague !== sender) {
                colleague.receive(message);
            }
        });
    }
}
  
const chat = new ChatMediator();
const user1 = new Colleague("Alice", chat);
const user2 = new Colleague("Bob", chat);

console.log('============== Mediator Pattern ==============');

chat.addColleague(user1);
chat.addColleague(user2);

user1.send("Olá!");
user2.send("Oi, tudo bem?");

user1.send("Sim, e você?");
user2.send("Estou bem, obrigado!");

console.log('=============================================');
  