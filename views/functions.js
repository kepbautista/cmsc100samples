function foo1(a){
	a = 100;
	console.log("Inside the function a is: " + a);	// 100
}

function foo2(myObject){
	myObject.name = "John";
}

function foo3(myObject){
	myObject = {fname:"Jane", lname:"Dizon", age:25};
}

// Object Initializer
var person = {
	fname: "Juan",
	lname: "Dela Cruz",
	age: 50
}

// Constructor Function
function student(fname, lname, age){
	this.fname = fname;
	this.lname = lname;
	this.age = age;
	
	this.changeName=changeName;
	this.updateAge=updateAge;
}

function changeName(newFirstName, newLastName){
	this.fname = newFirstName;
	this.lname = newLastName;
}

function updateAge(newAge){
	this.age = newAge;
}

