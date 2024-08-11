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
class UserAccount {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

interface User {
    id: number;
    name: string;
}

const user: User = {
    id: 0,
    name: "Hayes",
};

const userAccount: User = new UserAccount(0, "John");
// #-E

// #-S: Generics
console.log("\n# Generics");
type StringArr = Array<string>;
type NumberArr = Array<number>;
type ObjectWithNameArr = Array<{ name: string }>;

function genericFunc<Type>(arg: Type): Type {
    return arg;
}
const compGenericFunc: <Type>(arg: Type) => Type = genericFunc;
console.log(compGenericFunc("hello"));
// #-E

// #-S: Structural Type System
console.log("\n# Structural Type System");
interface Coordinates {
    x: number;
    y: number;
}

function logCoordinates(coordinates: Coordinates) {
    console.log("x: ", coordinates.x, "y: ", coordinates.y);
}

let coordinates = {
    x: 0,
    y: 0,
}

let coordinates_1 = {
    x: 0,
    y: 0,
    z: 0,
}

logCoordinates(coordinates);
logCoordinates(coordinates_1);
// #-E

// #-S: Function Type
let add: (num_1: number, num_2: number) => number = (num_1, num_2) => num_1 + num_2;
let strConcat: <T, U>(str_1: T, str_2: U) => T = (str_1, str_2) => str_1;
// #-E

// #-S: Union Types
let weight: "kg" | "lbs" | number | string | string[] | 1;
// #-E

// #-S: Discriminated Union
console.log("\n# Discriminated Union");
type Animal = { type: "lion", sound: "roar" } | { type: "bird", mouthType: "beak" }

function printAnimal(animal: Animal) {
    if (animal.type === "lion") {
        console.log(animal.sound)
    } else if (animal.type === "bird") {
        console.log(animal.mouthType);
    }
}

printAnimal({ type: "lion", sound: "roar" });
printAnimal({ type: "bird", mouthType: "beak" });
// #-E

// #-S: Intersections
interface A { a: string; };
interface B { b: string; };
type C = A & B;
// #-E

// #-S: Unit Type
console.log("\n# Unit Type");
function employee(name: string, age: number, gender: "man" | "woman") {
    console.log("Name: ", name, "Age: ", age, "Gender: ", gender);
}

// If you would use just `gender = "man"` it would throw error.
let gender: "man" | "woman" = "man";
employee("Josh", 30, gender);
// #-E

// #-S: Passing Object As A Parameter
console.log("\n# Passing Object as a Parameter");

function printCoord(pt: { x: number, y: number }) {
    console.log("X: ", pt.x, "Y:", pt.y);
}
printCoord({ x: 10, y: 15 });
// #-E

// #-S: Exhaustiveness Checking
console.log("\n# Exhaustiveness Checking");

interface Circle {
    kind: "circle";
    circleMethod: "Circle method.";
}

interface Square {
    kind: "square";
    squareMethod: "Square method.";
}

interface Triangle {
    kind: "triangle";
    triangleMethod: "Triangle method.";
}

type Shape = Circle | Square;

function exhaustiveness(shape: Shape) {
    switch (shape.kind) {
        case "circle":
            return shape.circleMethod;
        case "square":
            return shape.squareMethod;
        default:
            const _exhaustivenessCheck: never = shape;
            return _exhaustivenessCheck;
    }
}

const triangle: Triangle = { kind: "triangle", triangleMethod: "Triangle method." };
console.log(exhaustiveness(triangle as unknown as Shape));
// #-E

// #-S: Function Property
console.log("\n# Function Property");

interface FunctionWithProperties {
    (): void;
    description: string;
}

const myFunction: FunctionWithProperties = function () {
    console.log("Function called");
};

myFunction.description = "This is a function with a description property.";
console.log(myFunction.description);
myFunction();
// #-E

// #-S: Function With Constructor
console.log("\n# Function With Constructor");

type Car = {
    brand: string;
    doorNumber: number;
};

type CarConstructor = {
    new(brand: string): Car;
};

const CarFactory: CarConstructor = class implements Car {
    brand: string;
    doorNumber: number;

    constructor(brand: string) {
        this.brand = brand;
        this.doorNumber = 4;
    }
};

function printCar(car: CarConstructor) {
    const newCar = new car("Audi");
    return newCar;
}

const myCar = printCar(CarFactory);
console.log(myCar);
// #-E

// #-S: Generic Functions
console.log("\n# Generic Functions");

function identity<Type>(arg: Type): Type {
    return arg;
}

console.log(identity(16));
console.log(identity("hello"));
// #-E

// #-S: Function Constraints
console.log("\n# Function Constraints");

function getLength <T extends {length: number}>(arg: T): number {
    return arg.length;
}

console.log(getLength("hello"));
// #-E