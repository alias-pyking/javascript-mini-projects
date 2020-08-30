// function Person(firstName, secondName) {
// 	this.firstName = firstName;
// 	this.lastName = secondName;
// }
// Person.prototype.greeting = function () {
// 	return 'Hello';
// }

// const person = new Person('John', 'doe');
// console.log(person.greeting());

// function Customer(firstName, lastName, phone, memberShip) {
// 	Person.call(this, firstName, lastName);
// 	this.phone = phone;
// 	this.memebership = memberShip;
// }
// Customer.prototype = Object.create(Person.prototype);

// Customer.prototype.constructor = Customer;

// const customer1 = new Customer('sks', 'k', '912', 'standard');

// console.log(customer1.greeting());
// const sks = new Person("Shubhma");
// console.log(sks.getName());
// sks.setName("newName");
// console.log(sks.name);

// const sks = new Person("Shubham");
// const brad = new Person("Brad");

// console.log(sks);
// console.log(brad);

// this.Person();
// name = "shubam";
// function some() {
//   	console.log(this);
// 	console.log(this.name);
// 	this.other = 'some other';
// 	console.log(this);

// }
// const obj = {
// 	name:'shubham'
// }
// obj.some = some;
// obj.some();


class Pet{
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}	
	greeting() {
		return `Hello there ${this.name}`
	}
}

class Dog extends Pet{
	constructor(name, age, color) {
		super(name, age);
		this.color = color;
	}
	greeting() {
		return 'Hello cute Dog';
	}
}

const goldy = new Pet('Goldy', 6);
console.log(goldy);
console.log(goldy.greeting());
const dog = new Dog('Tommy', 2, 'red');
console.log(dog);