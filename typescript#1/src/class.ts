// class User {
// 	public name: string;

// 	constructor(name: string) {
// 		this.name = name;
// 	}
// }

// OR

// class User {
// 	constructor(public name: string) {
// 		this.name = name;
// 	}
// }

// let user = new User("Sam");
// console.log(user);

// Inheritance
class User {
	constructor(public name: string, public age: number) {
		this.name = name;
		this.age = age;
	}

	setName(value: string): void {
		this.name = value;
	}

	getName = (): string => {
		return this.name;
	};
}

// public 		= bisa di akses disemua class / dari luar class
// protected	= hanya bisa di akses dari class tersebut dan class turunannya
// private		= hanya bisa di akses dari class itu sendiri

class Admin extends User {
	read: boolean = true;
	write: boolean = true;

	getRole(): { read: boolean; write: boolean } {
		return {
			read: this.read,
			write: this.write,
		};
	}
}

let admin = new Admin("sam", 25);
admin.getName();
admin.getRole();
admin.setName("samsudin");
