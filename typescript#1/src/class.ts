// class User {
// 	public name: string;

// 	constructor(name: string) {
// 		this.name = name;
// 	}
// }

// OR

class User {
	constructor(public name: string) {
		this.name = name;
	}
}

let user = new User("Sam");
console.log(user);
