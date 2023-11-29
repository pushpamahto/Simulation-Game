
function Vehicle(brand, model, speed, fuelType) {
    this.brand = brand;
    this.model = model;
    this.speed = speed || 0;
    this.fuelType = fuelType;
  }
  
  
  Vehicle.prototype.accelerate = function (amount) {
    this.speed += amount || 5;
    console.log(`${this.brand} ${this.model} is accelerating. Current speed: ${this.speed} km/h`);
  };
  
  Vehicle.prototype.brake = function (amount) {
    this.speed = Math.max(0, this.speed - (amount || 5));
    console.log(`${this.brand} ${this.model} is braking. Current speed: ${this.speed} km/h`);
  };
  
  Vehicle.prototype.refuel = function () {
    console.log(`${this.brand} ${this.model} is refueling.`);
  };
  
  
  function Car(brand, model, speed, fuelType, numberOfWheels) {
    Vehicle.call(this, brand, model, speed, fuelType);
    this.numberOfWheels = numberOfWheels;
  }
  
  
  Car.prototype = Object.create(Vehicle.prototype);
  Car.prototype.constructor = Car;
  

  Car.prototype.honk = function () {
    console.log(`${this.brand} ${this.model} is honking!`);
  };
  
  
  function Airplane(brand, model, speed, fuelType, numberOfEngines, hasLandingGear) {
    Vehicle.call(this, brand, model, speed, fuelType);
    this.numberOfEngines = numberOfEngines;
    this.hasLandingGear = hasLandingGear;
  }
  
  
  Airplane.prototype = Object.create(Vehicle.prototype);
  Airplane.prototype.constructor = Airplane;
  
  
  Airplane.prototype.takeOff = function () {
    console.log(`${this.brand} ${this.model} is taking off!`);
  };
  
  
  const myCar = new Car("Toyota", "Camry", 0, "Gasoline", 4);
  const myAirplane = new Airplane("Boeing", "747", 0, "Jet Fuel", 4, true);
  

  myCar.accelerate(30);
  myCar.honk();
  myCar.brake(10);
  myCar.refuel();
  
  myAirplane.accelerate(200);
  myAirplane.takeOff();
  myAirplane.brake(50);
  myAirplane.refuel();
  