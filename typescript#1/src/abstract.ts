abstract class Vehicle {
	abstract wheels: number;

	start(): void {
		console.log("Embruuumm");
	}
}

class Car extends Vehicle {
	wheels: number = 4;
}

class Motorcycle extends Vehicle {
	wheels: number = 2;
}

let car = new Car();
car.wheels;
car.start();
