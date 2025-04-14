interface State {
    handle(): void;
}

class OnState implements State {
    handle() {
        console.log("Luz está LIGADA");
    }
}

class OffState implements State {
    handle() {
        console.log("Luz está DESLIGADA");
    }
}

class LightContext {
    constructor(private state: State) {}

    setState(state: State) {
        this.state = state;
    }

    pressButton() {
        this.state.handle();
    }
}

console.log('============ State Pattern ============');

const lightState = new LightContext(new OffState());
lightState.pressButton();

lightState.setState(new OnState());
lightState.pressButton();

console.log('======================================');
