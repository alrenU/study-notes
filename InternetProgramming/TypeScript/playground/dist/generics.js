export default function Generics() {
    // # Generics
    console.log("\n# Generics");
    // ## Basic Exaple
    console.log("## Basic Example");
    function printValueType(value) {
        return value;
    }
    console.log(typeof printValueType(5));
    console.log(typeof printValueType("Hello"));
}
