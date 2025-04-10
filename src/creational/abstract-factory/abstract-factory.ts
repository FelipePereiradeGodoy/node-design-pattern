interface Button {
    render(): string;
}

interface Checkbox {
    render(): string;
}

class MacButton implements Button {
    render(): string {
        return "Botão estilo Mac";
    }
}

class WindowsButton implements Button {
    render(): string {
        return "Botão estilo Windows";
    }
}

class MacCheckbox implements Checkbox {
    render(): string {
        return "Checkbox estilo Mac";
    }
}

class WindowsCheckbox implements Checkbox {
    render(): string {
        return "Checkbox estilo Windows";
    }
}

interface GUIFactory {
    createButton(): Button;
    createCheckbox(): Checkbox;
}

class MacFactory implements GUIFactory {
    createButton(): Button {
        return new MacButton();
    }
    createCheckbox(): Checkbox {
        return new MacCheckbox();
    }
}

class WindowsFactory implements GUIFactory {
    createButton(): Button {
        return new WindowsButton();
    }
    createCheckbox(): Checkbox {
        return new WindowsCheckbox();
    }
}

function renderUI(factory: GUIFactory) {
    const button = factory.createButton();
    const checkbox = factory.createCheckbox();

    console.log(button.render());
    console.log(checkbox.render());
}

console.log('------------ Abstract Factory Pattern ------------');

const factory = new MacFactory();
renderUI(factory);

console.log();

const factory2 = new WindowsFactory();
renderUI(factory2);

console.log('--------------------------------------------------');