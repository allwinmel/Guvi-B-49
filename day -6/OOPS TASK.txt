//ts-1

class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }

  static getPG(movies) {
    return movies.filter((movie) => movie.rating === "PG");
  }
}

const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG13");

console.log(new Movie());

//ts-2 -Write a “person” class to hold all the details.

function person(name, age, gender) {
    this.name = name;
    this.age = age; 
    this.gender = gender;
    this.greet = function () {
    console.log(`Hello, My Name Is ${this.name} and I am ${this.age} years old. `);

    }
}
    let personOne = new person("Andrew", 35, "male");
    let personTwo = new person("Sarah", 28, "female");

    (personOne.greet());
    (personTwo.greet());

//write a class to calculate the uber price.

class UberPriceCalculator {
    constructor(baseFare, costPerKilometer, surgeMultiplier) {
      this.baseFare = baseFare;
      this.costPerKilometer = costPerKilometer;
      this.surgeMultiplier = surgeMultiplier;
    }
  
    calculatePrice(distanceInKm) {
      const totalFare = this.baseFare + (this.costPerKilometer * distanceInKm);
      const finalFare = totalFare * this.surgeMultiplier;
      return finalFare;
    }
  }

const calculator = new UberPriceCalculator(5, 2, 1.2);


const distance = 10;
const fare = calculator.calculatePrice(distance);

console.log(`The fare for a ${distance} km ride is $${fare}`);

//Convert the UML diagram to Typescript class. - use number for double

class Shape {
  constructor(color = "black") {
    this.color = color;
  }

  getColor() {
    return this.color;
  }

  setColor(color) {
    this.color = color;
  }

  getArea() {
    
  }
}

class Circle extends Shape {
  constructor(radius, color) {
    super(color);
    this.radius = radius;
  }

  getRadius() {
    return this.radius;
  }

  setRadius(radius) {
    this.radius = radius;
  }

  getArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

class Rectangle extends Shape {
  constructor(width, height, color) {
    super(color);
    this.width = width;
    this.height = height;
  }

  getWidth() {
    return this.width;
  }

  setWidth(width) {
    this.width = width;
  }

  getHeight() {
    return this.height;
  }

  setHeight(height) {
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}




  


