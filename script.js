//complete this code
class Rectangle {
	constructor(width, height){
		this.width = width;
		this.height = height;
		
	}
     get width(){
		 return this.width;
	 }
	 get height(){
		 return this.height;
	 }
	getArea(){
		return this.width * this.height;
	}
}
class Square extends Rectangle{
	constructor(side){
		super(side,side);
	}
	getPerimeter(){
		return 4*this.width;
	}
}

// class Square extends Animal {}

// Do not change the code below this line
const rectangle = new Rectangle(5, 10);
console.log(rectangle.width); // Output: 5
console.log(rectangle.height); // Output: 10
console.log(rectangle.getArea()); // Output: 50

window.Rectangle = Rectangle;
window.Square = Square;
