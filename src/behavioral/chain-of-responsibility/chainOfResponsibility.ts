abstract class Handler {
    private nextHandler?: Handler;

    setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler;
    }

    handle(request: string): void {
        if (this.nextHandler) {
        this.nextHandler.handle(request);
        }
    }
}

class AuthHandler extends Handler {
    handle(request: string): void {
        if (request === "auth") {
        console.log("Autenticação realizada.");
        } else {
        super.handle(request);
        }
    }
}

class LogHandler extends Handler {
    handle(request: string): void {
        console.log("Log da requisição.");
        super.handle(request);
    }
}

const auth = new AuthHandler();
const logger = new LogHandler();

console.log('-------------- Chain of Responsibility Pattern --------------');

logger.setNext(auth);
logger.handle("auth");

console.log('-------------------------------------------------------------');
