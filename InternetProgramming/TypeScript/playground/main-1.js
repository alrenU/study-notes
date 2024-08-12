// TODO:
// #-S: Public Parameters In Class Constructor
console.log("\n# Public Parameters In Class Constructor");
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
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
            next() {
                count++;
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
// `Symbol.asyncIterator`: Used to define an asynchronous iterator for an object.
// It is used in conjunction with 'for await...of' loops to iterate over asynchronous data sources.
console.log("## Symbol.asyncIterator");
class AsyncIter {
    async *[Symbol.asyncIterator]() {
        let count = 0;
        while (count < 3) {
            count++;
            await new Promise(resolve => setTimeout(resolve, 500));
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
// #-E
