interface Laptop {
	name: string;
	on(): void;
	off(): void;
}

class Asus implements Laptop {
	name: string;

	constructor(name: string, protected isGaming: boolean) {
		this.name = name;
		this.isGaming = isGaming;
	}

	on(): void {
		console.log("On");
	}
	off(): void {
		console.log("Off");
	}
}

class Msi implements Laptop {
	name: string;
	keyboardLight: boolean;

	constructor(name: string, keyboardLight: boolean) {
		this.name = name;
		this.keyboardLight = keyboardLight;
	}

	on(): void {
		console.log("On");
	}
	off(): void {
		console.log("Off");
	}
}

let asus = new Asus("ROG", true);
console.log(asus.name);
console.log(asus.on());
console.log(asus.off());
