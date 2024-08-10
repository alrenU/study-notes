// NOTE: Make an example about the below things:
// symbol type
// funktors
// point-free programming
// importing and exporting
// readonly modifier
// type assertions
// type guards
// type narrowing
// SECTION - START
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
// The `any` Statement
var num_1 = "5";
// Structural Type System
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
// Function Type
var add = function (num_1, num_2) { return num_1 + num_2; };
var strConcat = function (str_1, str_2) { return str_1; };
// Union Types
var weight;
// Discriminated Union
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
// Unit Type
console.log("\n# Unit Type");
function employee(name, age, gender) {
    console.log("Name: ", name, "Age: ", age, "Gender: ", gender);
}
// If you would use just `gender = "man"` it would throw error.
var gender = "man";
employee("Josh", 30, gender);
// Passing Object as a Parameter
console.log("\n# Passing Object as a Parameter");
function printCoord(pt) {
    console.log("X: ", pt.x, "Y.", pt.y);
}
printCoord({ x: 10, y: 15 });
// SECTION - END
