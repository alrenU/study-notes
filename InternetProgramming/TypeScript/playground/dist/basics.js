export default function basics() {
    // #-S: Public Parameters In Class Constructor
    console.log("\n# Public Parameters In Class Constructor");
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
    // #-E
}
