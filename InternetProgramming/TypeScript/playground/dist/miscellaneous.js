export default function Miscellaneous() {
    // # Miscellaneous
    console.log("\n# Miscellaneous");
    // ## Public Parameters In Class Constructor
    console.log("## Public Parameters In Class Constructor");
    class Person {
        constructor(name, surname) {
            this.name = name;
            this.surname = surname;
        }
        getName() { return this.name; }
        getSurname() { return this.surname; }
    }
    const person = new Person("John", "Doe");
    console.log("Name: ", person.getName());
    console.log("Surname: ", person.getSurname());
    // ***
    // ## Call By Value
    console.log("## Call By Value");
    function callByValue(x) {
        x = 20;
    }
    let x = 10;
    callByValue(x);
    console.log("(call by value) Previous was 10 and now: ", x);
    function callByReference(obj) {
        obj.x = 20;
    }
    const obj = { x: 10 };
    callByReference(obj);
    console.log("(call by reference) Previous was 10 and now: ", obj.x);
    // ***
    // ## `unknown` Usage
    console.log("## `unknown` Usage");
    function receiveValue(value) {
        if (typeof value === "number") {
            console.log("Value is a number: ", value);
        }
        else if (typeof value === "string") {
            console.log("Value is a string: ", value);
        }
    }
    receiveValue(10);
    receiveValue("Hello World");
    // ***
    // ## Intersections
    console.log("## Intersections");
    class Coordinates {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
    }
    class Shapes {
        constructor(width, height) {
            this.width = width;
            this.height = height;
        }
    }
    const coordinatesAndShapes = {
        x: 10,
        y: 20,
        width: 30,
        height: 40,
    };
    // ***
    // ## Point-Free Programming
    console.log("## Point-Free Programming");
    // ### Non-Point-Free Approach
    console.log("### Non-Point-Free Approach");
    function double(x) {
        return x * 2;
    }
    function addOne(x) {
        return x + 1;
    }
    function transform(x) {
        return x.map(num => addOne(double(num)));
    }
    const numbers = [1, 2, 3];
    console.log(transform(numbers));
    // ### Point-Free Approach
    // TODO: Make more examples on your own by using point-free programming.
    console.log("### Point-Free Approach");
    // Function to compose two functions.
    const compose = (f, g) => (x) => f(g(x));
    // `T` is the type of the input to the second function (g).
    // `U` is the type of the output from `g` and input to `f`.
    // `V` is the type of the output from `f`.
    // Simplifying the above function:
    // const compose = <T, U, V>(f: (arg: U) => V, g: (arg: T) => U) => (x: T) => f(g(x));
    // const compose = (f: (arg: number) => number, g: (arg: number) => number) => (x: number) => f(g(x));
    // Create a point-free transformation function.
    const transform1 = compose((arr) => arr.map(addOne), (arr) => arr.map(double));
    console.log(transform1(numbers));
    // ***
    // ## Mapped Types
    // ### `Partial<T>`
    console.log("### `Partial<T>`");
    // If we do not want to use the salary property, we can use `Partial<T>`.
    const user = {
        name: "John",
        surname: "Doe",
    };
    // ***
    // ## `Promise` Return Type
    console.log("## `Promise` Return Type");
    function fetchData(url) {
        return new Promise((resolve, reject) => {
            if (typeof url === "string") {
                resolve("The API endpoint received.");
            }
            else if (typeof url === null) {
                reject("The API endpoint did not receive.");
            }
        });
    }
    fetchData("https://example.com")
        .then((data) => { console.log(data); })
        .catch((error) => { console.log(error); });
}
