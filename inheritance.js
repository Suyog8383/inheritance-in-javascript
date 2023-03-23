class Car {
  constructor(name, model) {
    this.name = name;
    this.model = model;
  }
  start() {
    console.log("@SN ", this.name);
  }
}
class ElectricCar extends Car {
  end() {
    console.log("@SN ");
  }
  start() {
    console.log("@SN ");
    super.start();
    this.end();
  }
}

let Mycar = new ElectricCar("tesla", "x");
Mycar.start();
