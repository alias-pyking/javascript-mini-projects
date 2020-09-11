// const Signleton = (function () {
// 	let instance;
// 	function createInstance() {
// 		const object = new Object({name:"Shubham"});
// 		return object;
// 	}
// 	return {
// 		getInstance: function () {
// 			if (!instance) {
// 				instance = createInstance();
// 			}
// 			return instance;
// 		}
// 	}
// })();

// const instanceA = Signleton.getInstance();
// console.log(instanceA);


// Factory pattern

// function MemberFactory() {
// 	this.createMember = function (name, type) {
// 		let member;
// 		if (type === 'simple') {
// 			member = new SimpleMembership(name);
// 		} else if (type === 'standard') {
// 			member = new StandardMembership(name);
// 		} else if (type === 'super') {
// 			member = new SuperMembership(name);
// 		}
// 		member.type = type;

// 		member.define = function () {
// 			console.log(`${this.name} ${this.type} ${this.cost}`);
// 		}
// 		return member;
// 	}
// }

// class SimpleMembership{
// 	constructor(name, type) {
// 		this.name = name;
// 		this.type = type;
// 		this.cost = '$5';
// 	}
// }

// class StandardMembership{
// 	constructor(name, type) {
// 		this.name = name;
// 		this.type = type;
// 		this.cost = '$15';
// 	}
// }

// class SuperMembership{
// 	constructor(name, type) {
// 		this.name = name;
// 		this.type = type;
// 		this.cost = '$20';
// 	}
// }
// const member = [];
// const factory = new MemberFactory();
// member.push(factory.createMember('john doe', 'simple'));
// member.push(factory.createMember('shubham', 'super'));

// console.log(member);
// console.log(member[0].define())