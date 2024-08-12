/*
TODO:
1. Ask this question to the ChatGPT and continue to make examples:
  - Can you give examples about the well-known symbols in JS?

2. Continue to work on TS summary.
3. Delete the `main.ts` file.
4. Rename the `main-1.ts` file as `main.ts`.
*/

// #-S: Public Parameters In Class Constructor
console.log("\n# Public Parameters In Class Constructor");

class Person {
    constructor(public name: string, public surname: string) {
        console.log("Name: ", name);
        console.log("Surname: ", surname);
    }
}

new Person("John", "Doe");
// #-E

// #-S: Well-Known Symbols
console.log("\n# Well-Known Symbols");

// `Symbol.iterator`: Defines an iterator for an object.
console.log("## Symbol.iterator");

class MyIterator {
    [Symbol.iterator]() {
        let count = 0;
        console.log("The count is: ", count);

        return {
            // `next` method is default.
            next() {
                count++;
                // `value` and `done` properties in return object are default.
                return { value: count, done: count > 3 };
            },
            throw(error: any) {
                console.log("Error thrown: ", error);
                return { value: count, done: true }
            }
        }
    }
}

const myIterator = new MyIterator();
for (const value of myIterator) {
    console.log(value);
}

// `Symbol.asyncIterator`: Used to define an asynchronous iterator for an object.
// It is used in conjunction with `for await...of` loops to iterate over asynchronous data sources.
console.log("## Symbol.asyncIterator");

class AsyncIter {
    // `*` denotes that the function is a "generator function".
    async *[Symbol.asyncIterator]() {
        let count = 0;
        while(count < 3) {
            count++;
            await new Promise(resolve => setTimeout(resolve, 500));
            // When the generator function encounters `yield count;`, it pauses and returns the value count to the caller.
            yield count;
        }
    }
}

(async () => {
    const asyncIterator = new AsyncIter();
    for await(const value of asyncIterator) {
        console.log(value);
    }
})()
// #-E