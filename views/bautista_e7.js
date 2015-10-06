// Constructor Function for the Car Object
function car(plateNo, model, color){
	this.plateNo = plateNo;
	this.model = model;
	this.color = color;
	this.speed = 0;
	
	// methods
	this.startCar=startCar;
	this.stopCar=stopCar;
	this.accelerate=accelerate;
	this.decelerate=decelerate;
	this.repaintCar=repaintCar;
}

// function for the startCar method
function startCar(){
	this.speed = 10; // initial car speed is 10
}

// function for the stopCar method
function stopCar(){
	this.speed = 0; // speed of car is 10 when car is stopped
}

// function for the accelerate method
function accelerate(speedup){
	this.speed += speedup; // add acceleration speed to current speed
}

// function for the decelerate method
function decelerate(speeddown){
	this.speed -= speeddown; // deduct deceleration speed to current speed
}

// function for the repaintCar method
function repaintCar(newColor){
	this.color = newColor; // change color of the car
}
