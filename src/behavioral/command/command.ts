interface Command {
    execute(): void;
}
  
class Light {
    turnOn() {
        console.log("Luz ligada.");
    }

    turnOff() {
        console.log("Luz desligada.");
    }
}

class TurnOnCommand implements Command {
    constructor(private light: Light) {}

    execute(): void {
        this.light.turnOn();
    }
}

class TurnOffCommand implements Command {
    constructor(private light: Light) {}

    execute(): void {
        this.light.turnOff();
    }
}

class RemoteControl {
    private command?: Command;

    setCommand(command: Command) {
        this.command = command;
    }

    pressButton() {
        this.command?.execute();
    }
}
  
const light = new Light();
const remote = new RemoteControl();

console.log('============== Command Pattern ==============');
remote.setCommand(new TurnOnCommand(light));
remote.pressButton();

remote.setCommand(new TurnOffCommand(light));
remote.pressButton();

console.log('=============================================');
  