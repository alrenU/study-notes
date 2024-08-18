export default function Miscellaneous() {
    // # Miscellaneous
    console.log("\n# Miscellaneous");

    // ## Public Parameters In Class Constructor
    console.log("## Public Parameters In Class Constructor");

    class Person {
        constructor(public name: string, public surname: string) { }
        getName() { return this.name; }
        getSurname() { return this.surname; }
    }

    const person = new Person("John", "Doe");
    console.log("Name: ", person.getName());
    console.log("Surname: ", person.getSurname());

    // ***
    // ## Call By Value
    console.log("## Call By Value");

    function callByValue(x: number) {
        x = 20;
    }

    let x = 10;
    callByValue(x);
    console.log("(call by value) Previous was 10 and now: ", x);

    function callByReference(obj: { x: number }) {
        obj.x = 20;
    }

    const obj = { x: 10 };
    callByReference(obj);
    console.log("(call by reference) Previous was 10 and now: ", obj.x);

    // ***
    // ## `unknown` Usage
    console.log("## `unknown` Usage");

    function receiveValue(value: unknown) {
        if (typeof value === "number") {
            console.log("Value is a number: ", value);
        } else if (typeof value === "string") {
            console.log("Value is a string: ", value);
        }
    }

    receiveValue(10);
    receiveValue("Hello World");

    // ***
    // ## Intersections
    console.log("## Intersections");

    class Coordinates {
        constructor(public x: number, public y: number) { }
    }

    class Shapes {
        constructor(public width: number, public height: number) { }
    }

    type CoordinatesAndShapes = Coordinates & Shapes;
    const coordinatesAndShapes: CoordinatesAndShapes = {
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

    function double(x: number): number {
        return x * 2;
    }

    function addOne(x: number): number {
        return x + 1;
    }

    function transform(x: number[]): number[] {
        return x.map(num => addOne(double(num)));
    }

    const numbers = [1, 2, 3];
    console.log(transform(numbers));

    // ### Point-Free Approach
    // TODO: Make more examples on your own by using point-free programming.
    console.log("### Point-Free Approach");

    // Function to compose two functions.
    const compose = <T, U, V>(f: (arg: U) => V, g: (arg: T) => U): (arg: T) => V =>
        (x: T) => f(g(x));
    // `T` is the type of the input to the second function (g).
    // `U` is the type of the output from `g` and input to `f`.
    // `V` is the type of the output from `f`.

    // Simplifying the above function:
    // const compose = <T, U, V>(f: (arg: U) => V, g: (arg: T) => U) => (x: T) => f(g(x));
    // const compose = (f: (arg: number) => number, g: (arg: number) => number) => (x: number) => f(g(x));

    // Create a point-free transformation function.
    const transform1 = compose(
        (arr: number[]) => arr.map(addOne),
        (arr: number[]) => arr.map(double)
    );

    console.log(transform1(numbers));

    // ***
    // ## Mapped Types
    // ### `Partial<T>`
    console.log("### `Partial<T>`");

    interface User {
        name: string;
        surname: string;
        salary: number;
    }

    // If we do not want to use the salary property, we can use `Partial<T>`.
    const user: Partial<User> = {
        name: "John",
        surname: "Doe",
    };

    // ***
    // ## `Promise` Return Type
    console.log("## `Promise` Return Type");

    function fetchData(url: string | null): Promise<string> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (typeof url === "string") {
                    resolve("The API endpoint received.");
                } else if (typeof url === null) {
                    reject("The API endpoint did not receive.");
                }
            }, 1000);
        });
    }

    fetchData("https://example.com")
        .then((data) => { console.log(data) })
        .catch((error) => { console.log(error) });
}