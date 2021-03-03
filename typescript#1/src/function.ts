// Tipe data balikan function

function getName(): string {
	return "Hai Aku Sam";
}

function calculate(params: number): number {
	return params * 2;
}

function print(message: string): void {
	console.log(message);
}

// Function as Type
type Age = number;
let age: Age = 20;

type Tambah = (val1: number, val2: number) => number;
const Add: Tambah = (val1: number, val2: number) => {
	return val1 + val2;
};

// Default Parameter
const fullname = (first: string, last: string = "Pratama"): string => {
	return first + last;
}

// Optional Parameter
const getUmur = (first: string, last?: string): string => {
	return first + last;
}