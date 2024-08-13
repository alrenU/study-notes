export default function wellKnownSymbols() {
    // # Well-Known Symbols
    console.log("\n# Well-Known Symbols");

    // ## `Symbol.iterator`: Defines an iterator for an object.
    console.log("## Symbol.iterator");

    // Example-1:
    console.log("### Example-1:");

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

    // Example-2:
    console.log("### Example-2:");

    const myArray = [1, 2, 3];
    const iterator = myArray[Symbol.iterator]();
    console.log(iterator.next().value);
    console.log(iterator.next().value);

    // ## `Symbol.toStringTag`: Allows customization of the string representation of an object when using `Object.protptype.toString()`.
    console.log("## Symbol.toStringTag");

    class CustomObject {
        get [Symbol.toStringTag]() {
            return "ChangingCustomObjectName";
        }
    }

    const obj = new CustomObject();
    console.log(Object.prototype.toString.call(obj));

    // ## `Symbol.asyncIterator`: Used to define an asynchronous iterator for an object.
    // It is used in conjunction with `for await...of` loops to iterate over asynchronous data sources.
    console.log("## Symbol.asyncIterator");

    class AsyncIter {
        // `*` denotes that the function is a "generator function".
        async *[Symbol.asyncIterator]() {
            let count = 0;
            while (count < 3) {
                count++;
                await new Promise(resolve => setTimeout(resolve, 500));
                // When the generator function encounters `yield count;`, it pauses and returns the value count to the caller.
                yield count;
            }
        }
    }

    (async () => {
        const asyncIterator = new AsyncIter();
        for await (const value of asyncIterator) {
            console.log(value);
        }
    })();
}