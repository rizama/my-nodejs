import LaptopInterface from "./LaptopInterface";
import { a, b } from "./Keyboard";

abstract class BaseLaptop<T> implements LaptopInterface<T> {
	name: string;
	type: T;
	withNumber: boolean;
	withTouchButton: boolean;

	constructor(
		name: string,
		type: T,
		withNumber: boolean,
		withTouchButton: boolean
	) {
		this.name = name;
		this.type = type;
		this.withTouchButton = withTouchButton;
		this.withNumber = withNumber;
	}

	pressA() {
		return a();
	}

    pressB() {
		return b();
	}
}

export default BaseLaptop;