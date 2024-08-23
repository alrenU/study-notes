export default function WellKnownSymbols() {
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
                throw(error) {
                    console.log("Error thrown: ", error);
                    return { value: count, done: true };
                }
            };
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
    // *****
    // ## `Symbol.toStringTag`: Allows customization of the string representation of an object when using `Object.protptype.toString()`.
    console.log("## Symbol.toStringTag");
    class CustomObject {
        get [Symbol.toStringTag]() {
            return "ChangingCustomObjectName";
        }
    }
    const obj = new CustomObject();
    console.log(Object.prototype.toString.call(obj));
    // *****
    // ## `Symbol.hasInstance`: Customizes the behavior of the `instanceof` operator.
    // By defining this symbol, you can control whether an object should be considered an instance of a class.
    console.log("## Symbol.hasInstance");
    class MyClass {
        static [Symbol.hasInstance](instance) {
            return instance.customCheck === true;
        }
    }
    const myClass = { customCheck: true };
    console.log(myClass instanceof MyClass);
    // *****
    // ## `Symbol.toPrimitive`: Allows you to define how an object should be converted to a primitive value.
    console.log("## Symbol.toPrimitive");
    class MyClass1 {
        [Symbol.toPrimitive](hint) {
            if (hint === "string") {
                return "MyClass1 is a string.";
            }
            else if (hint === "number") {
                return 42;
            }
        }
    }
    const myClass1 = new MyClass1();
    console.log(String(myClass1));
    console.log(Number(myClass1));
    // *****
    // ## `Symbol.for` and `Symbol.keyFor`: These methods are used to create or access global symbols and to get the key for a given symbol.
    console.log("## Symbol.for and Symbol.keyFor");
    const symbol1 = Symbol.for("mySymbol");
    const symbol2 = Symbol.for("mySymbol");
    console.log(symbol1 === symbol2);
    const symbol1Key = Symbol.keyFor(symbol1);
    console.log(symbol1Key);
    // *****
    // ## `Symbol.match`: Checks whether a string matches a regular expression.
    console.log("## Symbol.match");
    class MyRegExp extends RegExp {
        constructor(pattern) {
            super(pattern);
        }
        [Symbol.match](string) {
            const match = super[Symbol.match](string);
            if (match) {
                return match;
            }
            return null;
        }
    }
    const myRegExp = new MyRegExp("test");
    console.log("hello, this is test".match(myRegExp));
    // *****
    // ## `Symbol.replace`: Replaces a substring with a new value.
    console.log("## Symbol.replace");
    class MyReplaceRegExp {
        [Symbol.replace](string, replacement) {
            return `Replaced ${string} with ${replacement}`;
        }
    }
    const myReplaceRegExp = new MyReplaceRegExp();
    // `replace` method encounters an object with a `[Symbol.replace]` method and it invokes that method instead of performing a regular expression-based replacement.
    console.log("test".replace(myReplaceRegExp, "example"));
    // *****
    // ## `Symbol.search`: Checks for if a string has a substring.
    console.log("## Symbol.search");
    class MySearchRegexp {
        [Symbol.search](string) {
            return string.indexOf("custom");
        }
    }
    const mySearchRegExp = new MySearchRegexp();
    console.log("This is a custom search".search(mySearchRegExp));
    // ## `Symbol.split`: Determines how to split a string into an array of substrings.
    console.log("## Symbol.split");
    class MySplitRegExp {
        [Symbol.split](string) {
            return string.split("custom").map(s => `Segment: ${s}`);
        }
    }
    const mySplitRegExp = new MySplitRegExp();
    console.log("This is a custom split example".split(mySplitRegExp));
    // *****
    // ## `Symbol.unscopables`: Defines properties that should not be included in with statements.
    console.log("## Symbol.unscopables");
    const unscopableObj = {
        [Symbol.unscopables]: {
            customProperty: true
        },
        customProperty: "value"
    };
    // The following code works in JS. In TS the `with` statement is not supported.
    // with (unscopableObj) {
    //     console.log(customProperty);
    // }
    // *****
    // ## `Symbol.species`: Allows subclasses to override the constructor used for instances created in methods like `Array.prototype.slice`.
    console.log("## Symbol.species");
    class MyArray extends Array {
        constructor(...args) {
            super(...args);
        }
        static get [Symbol.species]() {
            return Array;
        }
    }
    const myArr = new MyArray(1, 2, 3);
    const newArray = myArr.slice(0);
    console.log(newArray instanceof MyArray);
    console.log(newArray instanceof Array);
    // *****
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
