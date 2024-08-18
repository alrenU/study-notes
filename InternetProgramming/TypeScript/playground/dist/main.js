// # `unknown` Usage
console.log("\n# `unknown` Usage");
function receiveValue(value) {
    if (typeof value === "number") {
        console.log("It is number: ", value);
    }
    else if (typeof value === "string") {
        console.log("It is string: ", value);
    }
}
receiveValue(10);
receiveValue("Hello World");
// # Point-Free Programming
console.log("\n# Point-Free Programming");
// ## Non-Point-Free Approach
console.log("## Non-Point-Free Approach");
function double(x) { return x * 2; }
function addOne(x) { return x + 1; }
function transform(x) { return x.map(num => addOne(double(num))); }
console.log(transform([1, 2, 3]));
// ## Point-Free Approach
// TODO: Make more examples on your own by using point-free programming.
console.log("## Point-Free Approach");
const compose = (f, g) => (x) => f(g(x));
// `T` is the type of the input to the second function (g).
// `U` is the type of the output from `g` and input to `f`.
// `V` is the type of the output from `f`.
// Simplifying the above function:
// const compose = <T, U, V>(f: (arg: U) => V, g: (arg: T) => U) => (x: T) => f(g(x));
// const compose = (f: (arg: number) => number, g: (arg: number) => number) => (x: number) => f(g(x));
// Create a point-free transformation function.
const transform1 = compose((arr) => arr.map(addOne), (arr) => arr.map(double));
console.log(transform1([1, 2, 3]));
// # Conditional Types Wİth Generics
console.log("\n# Conditional Types Wİth Generics");
function createLabel(input) {
    if (typeof input === "number") {
        return { id: input };
    }
    else {
        return { name: input };
    }
}
console.log(createLabel(1));
console.log(createLabel("test"));
// ## Inferring Within Conditional Types
console.log("## Inferring Within Conditional Types");
const val = "hello";
console.log(val);
export {};
