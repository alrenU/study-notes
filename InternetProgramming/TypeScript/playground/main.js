// NOTE: Make an example about the below things:
// symbol type
// funktors
// point-free programming
// importing and exporting
// readonly modifier
// type assertions
// type guards
// type narrowing
// #-S
var UserAccount = /** @class */ (function () {
    function UserAccount(id, name) {
        this.id = id;
        this.name = name;
    }
    return UserAccount;
}());
var user = {
    id: 0,
    name: "Hayes",
};
var userAccount = new UserAccount(0, "John");
// #-E
// #-S: Generics
console.log("\n# Generics");
function genericFunc(arg) {
    return arg;
}
var compGenericFunc = genericFunc;
console.log(compGenericFunc("hello"));
// #-E
// #-S: Structural Type System
console.log("\n# Structural Type System");
function logCoordinates(coordinates) {
    console.log("x: ", coordinates.x, "y: ", coordinates.y);
}
var coordinates = {
    x: 0,
    y: 0,
};
var coordinates_1 = {
    x: 0,
    y: 0,
    z: 0,
};
logCoordinates(coordinates);
logCoordinates(coordinates_1);
// #-E
// #-S: Function Type
var add = function (num_1, num_2) { return num_1 + num_2; };
var strConcat = function (str_1, str_2) { return str_1; };
// #-E
// #-S: Union Types
var weight;
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
var gender = "man";
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
            var _exhaustivenessCheck = shape;
            return _exhaustivenessCheck;
    }
}
var triangle = { kind: "triangle", triangleMethod: "Triangle method." };
console.log(exhaustiveness(triangle));
// #-E
// #-S: Function Property
console.log("\n# Function Property");
var myFunction = function () {
    console.log("Function called");
};
myFunction.description = "This is a function with a description property.";
console.log(myFunction.description);
myFunction();
// #-E
// #-S: Function With Constructor
console.log("\n# Function With Constructor");
var CarFactory = /** @class */ (function () {
    function class_1(brand) {
        this.brand = brand;
        this.doorNumber = 4;
    }
    return class_1;
}());
function printCar(car) {
    var newCar = new car("Audi");
    return newCar;
}
var myCar = printCar(CarFactory);
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
