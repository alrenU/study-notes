export default function basics() {
    // #-S: Public Parameters In Class Constructor
    console.log("\n# Public Parameters In Class Constructor");

    class Person {
        constructor(public name: string, public surname: string) {}
        getName() { return this.name; }
        getSurname() { return this.surname; }
    }

    const person = new Person("John", "Doe");
    console.log("Name: ", person.getName());
    console.log("Surname: ", person.getSurname());
    // #-E
}