"use strict";
// TODO: Make an example about the below things:
// symbol type
// funktors
// point-free programming
// importing and exporting
// readonly modifier
// type assertions
// type guards
// type narrowing
// type manipulation
// template literal types
// #-S
class UserAccount {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
const user = {
    id: 0,
    name: "Hayes",
};
const userAccount = new UserAccount(0, "John");
// #-E
// #-S: Generics
console.log("\n# Generics");
function genericFunc(arg) {
    return arg;
}
const compGenericFunc = genericFunc;
console.log(compGenericFunc("hello"));
// #-E
// #-S: Structural Type System
console.log("\n# Structural Type System");
function logCoordinates(coordinates) {
    console.log("x: ", coordinates.x, "y: ", coordinates.y);
}
let coordinates = {
    x: 0,
    y: 0,
};
let coordinates_1 = {
    x: 0,
    y: 0,
    z: 0,
};
logCoordinates(coordinates);
logCoordinates(coordinates_1);
// #-E
// #-S: Function Type
let add = (num_1, num_2) => num_1 + num_2;
let strConcat = (str_1, str_2) => str_1;
// #-E
// #-S: Union Types
let weight;
// #-E
// #-S: Discriminated Union
console.log("\n# Discriminated Union");
function printAnimal(animal) {
    if (animal.type === "lion") {
        console.log(animal.sound);
    }
    else if (animal.type === "bird") {
        console.log(animal.mouthType);
    }
}
printAnimal({ type: "lion", sound: "roar" });
printAnimal({ type: "bird", mouthType: "beak" });
;
;
// #-E
// #-S: Unit Type
console.log("\n# Unit Type");
function employee(name, age, gender) {
    console.log("Name: ", name, "Age: ", age, "Gender: ", gender);
}
// If you would use just `gender = "man"` it would throw error.
let gender = "man";
employee("Josh", 30, gender);
// #-E
// #-S: Passing Object As A Parameter
console.log("\n# Passing Object as a Parameter");
function printCoord(pt) {
    console.log("X: ", pt.x, "Y:", pt.y);
}
printCoord({ x: 10, y: 15 });
// #-E
// #-S: Exhaustiveness Checking
console.log("\n# Exhaustiveness Checking");
function exhaustiveness(shape) {
    switch (shape.kind) {
        case "circle":
            return shape.circleMethod;
        case "square":
            return shape.squareMethod;
        default:
            const _exhaustivenessCheck = shape;
            return _exhaustivenessCheck;
    }
}
const triangle = { kind: "triangle", triangleMethod: "Triangle method." };
console.log(exhaustiveness(triangle));
// #-E
// #-S: Function Property
console.log("\n# Function Property");
const myFunction = function () {
    console.log("Function called");
};
myFunction.description = "This is a function with a description property.";
console.log(myFunction.description);
myFunction();
// #-E
// #-S: Function With Constructor
console.log("\n# Function With Constructor");
const CarFactory = class {
    constructor(brand) {
        this.brand = brand;
        this.doorNumber = 4;
    }
};
function printCar(car) {
    const newCar = new car("Audi");
    return newCar;
}
const myCar = printCar(CarFactory);
console.log(myCar);
// #-E
// #-S: Generic Functions
console.log("\n# Generic Functions");
function identity(arg) {
    return arg;
}
console.log(identity(16));
console.log(identity("hello"));
// #-E
// #-S: Function Constraints
console.log("\n# Function Constraints");
function getLength(arg) {
    return arg.length;
}
console.log(getLength("hello"));
// #-E
