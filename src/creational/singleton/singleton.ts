class Logger {
    private static instanceId: number;
    private static instance: Logger;
  
    private constructor() {}
  
    static getInstance(): Logger {
      if (!Logger.instance) {
        Logger.instance = new Logger();
        Logger.instanceId = Math.random();
      }
      return Logger.instance;
    }
  
    log(message: string) {
      console.log(`[LOG] ${message}`);
    }

    getInstanceId(): number {
      return Logger.instanceId;
    }
  }
  
  const logger1 = Logger.getInstance();
  const logger2 = Logger.getInstance();
  
  console.log('--------- Singleton Pattern ---------');
  logger1.log("Primeiro log");
  logger2.log("Segundo log");
  console.log(`Instancias iguais: ${logger1.getInstanceId === logger2.getInstanceId}`);
  console.log('-------------------------------------');