interface Transport {
    deliver(): string;
}
  
class Truck implements Transport {
    deliver(): string {
      return "Entrega feita por caminhão";
    }
}
  
class Ship implements Transport {
    deliver(): string {
      return "Entrega feita por navio";
    }
}
  
abstract class Logistics {
    abstract createTransport(): Transport;
  
    planDelivery(): string {
      const transport = this.createTransport();
      return transport.deliver();
    }
}
  
class RoadLogistics extends Logistics {
    createTransport(): Transport {
      return new Truck();
    }
}
  
class SeaLogistics extends Logistics {
    createTransport(): Transport {
      return new Ship();
    }
}

console.log('--------- Factory Method Pattern ---------');

const logistics = new RoadLogistics();
console.log(logistics.planDelivery());

const logistics2 = new SeaLogistics();
console.log(logistics2.planDelivery());

console.log('------------------------------------------');  