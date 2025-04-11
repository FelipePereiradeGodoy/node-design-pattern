class CPU {
  start() { console.log("CPU iniciada"); }
}

class Memory {
  load() { console.log("Memória carregada"); }
}

class HardDrive {
  read() { console.log("Lendo dados do HD"); }
}

class ComputerFacade {
  private cpu = new CPU();
  private memory = new Memory();
  private hd = new HardDrive();

  start() {
    this.cpu.start();
    this.memory.load();
    this.hd.read();
  }
}

const computer = new ComputerFacade();

console.log('--------------- Facade Pattern ---------------');

computer.start();

console.log('----------------------------------------------');
