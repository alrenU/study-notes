export default function GeneratorFunctions() {
    // # Generator Functions
    console.log("\n# Generator Functions");
    // ## Basic Example
    console.log("## Basic Example");
    function* myGenerator() {
        yield 1;
        yield 2;
    }
    const generator = myGenerator();
    console.log(generator.next().value);
    console.log(generator.next().value);
    console.log(generator.next().done);
    // ## Infinite Example
    console.log("## Infinite Example");
    function* infiniteNumbers() {
        let i = 0;
        while (true) {
            yield i++;
        }
    }
    const infNums = infiniteNumbers();
    console.log(infNums.next().value);
    console.log(infNums.next().value);
}
