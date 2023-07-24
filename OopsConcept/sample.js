//Using an Object Literal.

// Defining object
let person = {
	first_name: 'Mukul',
	last_name: 'Latiyan',

	//method
	getFunction: function () {
		return (`The name of the person is
		${person.first_name} ${person.last_name}`)
	},
	//object within object
	phone_number: {
		mobile: '12345',
		landline: '6789'
	}
}
console.log(person.getFunction());
console.log(person.phone_number.landline);


//Example of :Using an Object Constructor.

// Using a constructor
function person(first_name, last_name) {
	this.first_name = first_name;
	this.last_name = last_name;
}
// Creating new instances of person object
let person1 = new person('Mukul', 'Latiyan');
let person2 = new person('Rahul', 'Avasthi');

console.log(person1.first_name);
console.log(`${person2.first_name} ${person2.last_name}`);

//Example: Let’s use ES6 classes then we will look at the traditional way of defining an Object and simulate them as classes.

// Defining class using es6
class Vehicle {
	constructor(name, maker, engine) {
		this.name = name;
		this.maker = maker;
		this.engine = engine;
	}
	getDetails() {
		return (`The name of the bike is ${this.name}.`)
	}
}
// Making object with the help of the constructor
let bike1 = new Vehicle('Hayabusa', 'Suzuki', '1340cc');
let bike2 = new Vehicle('Ninja', 'Kawasaki', '998cc');

console.log(bike1.name); // Hayabusa
console.log(bike2.maker); // Kawasaki
console.log(bike1.getDetails());
