# TypeScript
# Bookmarks
# Notes From Offical Documents
+ TypeScript code translated to the JS code after it is being compiled.
+ **Optional Chaining (?.)**: If any reference in the chain is `null` or `undefined`, the expression short-circuits and returns `undefined` instead of throwing an error. Some of its use-cases:
  - Accessing Nested Properties: `let userName = user?.profile?.name;`
  - Calling Methods: `let userName = user.profile?.getName?.();`
  - Accessing Array Elements: `let firstUserName = users[0]?.name;`
  - Working with Function Parameters: `console.log(`Hello, ${user?.name ?? "Guest"}!`);`
  - Combining with Nullish Coalescing: `let userName = user?.profile?.name ?? "Guest";`

+ **Nullish Coalescing (??)**: Allows developers to handle `null` and `undefined` values more conveniently. It uses the `??` operator to provide a default value when the left-hand side operand is `null` or `undefined`. Some of its use-cases:
  - Providing Default Values: `let displayName = name ?? "Guest";`
  - Difference from Logical OR (||):
  ```
  {
    let count = 0;
    let result = count || 10;
    console.log(result); // 10 (because 0 is falsy)

    result = count ?? 10;
    console.log(result); // 0 (because 0 is not null or undefined)
  }
  ```
  - Handling Missing Properties: `let age = user.profile.age ?? 30;`
  - Combining with Optional Chaining: `let city = user.profile?.address?.city ?? "Unknown City";`

+ **Type Definition Files (.d.ts)**: Type definition files provide type information for JavaScript libraries. These files are essential for using JavaScript libraries in TypeScript projects
+ **Source Maps**: Source maps help in debugging TypeScript code by mapping the transpiled JavaScript back to the original TypeScript source.
+ **JSDoc Annotations**: You can annotate your JavaScript code with JSDoc comments to provide type information that TypeScript can understand.
+ **ts-migrate**: It is a tool developed by Facebook to help migrate JavaScript projects to TypeScript.

+ TypeScript Types
  1. Primitive Types in Typescript
    1.1. boolean
    1.2. number
    1.3. string
    1.4. bigint
      + Represents numbers larger than the maximum value that the number type can safely represent.
      + You can create a `bigint` by appending an `n` to the end of an integer literal: `let a: bigint = 100n;`
      + You can also use the `BigInt` constructor to convert a `number` or `string` to a bigint.
      + `bigint` cannot be used with methods of the `Math` object (like `Math.max()`).
      + You cannot mix `number` and `bigint` types in operations directly.

    1.5. symbol
      + It is a unique and immutable data type. often used to create unique property keys for objects that do not conflict with other keys. Each time you create a symbol, even if it has the same description as another symbol, it is guaranteed to be unique.
      + You can create and access symbols in a global symbol registry using `Symbol.for` and `Symbol.keyFor`.
      + Well-Known Symbols: Built-in symbols in TypeScript (and JavaScript) that represent specific internal behaviors or hooks in the language. They can be used to customize how objects behave in certain operations. Some well-known symbols and some of their use-cases:
        1. Symbol.iterator: Custom iterable objects.
        2. Symbol.asyncIterator: Custom asynchronous iterable objects.
        3. Symbol.hasInstance: Custom instanceof behavior.
        4. Symbol.isConcatSpreadable: Deciding whether an object should be flattened (the elements of the object are inserted into the resulting array individually, rather than the object being inserted as a single element) when using `Array.prototype.concat`.
        5. Symbol.match: Custom string matching behavior.
        6. Symbol.replace: Custom string replacement behavior.
        7. Symbol.search: Custom string search behavior.
        8. Symbol.split: Custom string splitting behavior.
        9. Symbol.toPrimitive: Custom object-to-primitive conversion.
        10. Symbol.toStringTag: Customizing the string description of an object.
        11. Symbol.unscopables: Preventing certain properties from being used in a `with` block.

    1.6. undefined
      + Represents a value that has not been assigned.
      + If a function does not explicitly return a value, it implicitly returns `undefined`.
      + Accessing a non-existent property of an object or an array element returns `undefined`.
      + Functions with a void return type returns `undefined`.

    1.7. null
      + Represents the intentional absence of any object value.
      + Despite being a primitive value, `typeof null` returns `object`.
      + TypeScript provides optional chaining (?.) and nullish coalescing (??) operators to handle null values more gracefully.

    ***NOTE**: `undefined == null` evaluates to true because loose equality considers them equivalent. `undefined === null` evaluates to false because they are of different types.*

  2. Special Types
    2.1. any: Represent any value, regardless of its type and allows developers to bypass the static type system of TypeScript. Using `any` allows interoperability with JavaScript libraries that are not typed.
    2.2. unknown: It is a type-safe counterpart to any. It represents any value but requires type checking before you can perform operations on it. This makes `unknown` a safer choice than `any`.
    2.3. void: It signifies the absence of a return value.
      + Example:
      `
        function doSomething(): void {
          return; // OK, implicitly returns undefined
        }
      `
    2.4. never: Represents values that never occur. It is used to indicate that a function or expression will never complete normally or will never return a value. This can be due to the function throwing an error, entering an infinite loop, or otherwise terminating in a way that does not return a result.

  3. **Object Types**: `object`
  4. TypeScript-Specific Types
    4.1. Arrays: `number[]` or `Array<number>`
    4.2. Tuples: `[string, number]`
    4.3. Enums: `enum`
    4.4. Function Types: `let myFunc: (x: number, y: number) => number;`
    4.5. Union Types: `let value: string | number;`
      + Allow a variable to hold one of several possible types.
      + To safely work with union types, you often need to use type guards to narrow down the type before performing operations.
    4.6. Intersection Types
      + Example:
      ```
        type A = { a: number };
        type B = { b: string };
        type C = A & B; // C has both properties from A and B
      ```
      + Allow you to combine multiple types into one that includes all the properties and methods of the combined types.

  5. Type Aliases and Interfaces
    5.1. **Type Aliases `type`**: Provides a way to give a new name to a type. This can make complex types easier to work with.
      + You define a type alias using the type keyword followed by the alias name and the type it represents: `type Point = { x: number; y: number };`
      + Type aliases can be used with union, intersection, tuple, function and more complex types.

    5.2. **Interface `interface`**: Defines the shape of an object or class
      + Interface syntax:
      `
        interface Person {
          name: string;
          age: number;
        }
      `
      + Interfaces can extend other interfaces, allowing you to create more complex structures: `interface Employee extends Person, Address{}`
      + Interfaces can define method signatures, function and hybrit (for example both functions and objects) types.

  6. Literal Types
    + Specific values that a variable or property can take. They are used to create types that represent exact values rather than general types.
    + Should be used with type guards and type narrowing.
    + Some primary literal types are:
      - **String Literal Types**: `let direction: "up" | "down";`
      - **Numeric Literal Types**: `let diceRoll: 1 | 2 | 3 | 4 | 5 | 6;`
      - **Boolean Literal Types**: `let isOn: true | false;`
  
  7. Mapped Types: Allows you to create new types by transforming properties of an existing type.
    + Example: `type Readonly<T> = { readonly [P in keyof T]: T[P]; };`
    + Example:
    `
      type Person = {
        name: string;
        age: number;
        address: string;
      };

      // A mapped type to make all properties optional
      type PartialPerson = {
        [K in keyof Person]?: Person[K];
      };

      // Now PartialPerson has all properties of Person, but they are all optional
      const person1: PartialPerson = { name: "Alice" }; // Valid
    `
  8. Conditional Types: Allow you to create types that depends on a condition.
    + Example: `type NonNullable<T> = T extends null | undefined ? never : T;`

+ The Basics
  - Static Type-Checking: Ensures the correctness of the types in your code at compile time, rather than at runtime.
  - Type Inference: TypeScript can often infer the types of variables and expressions, reducing the need for explicit type annotations.
  - Tooling: Refers to the various tools and features that assist developers in writing, managing, and maintaining their TypeScript code. These tools includes TS IDE support, TS compiler (tsc), linters etc.
  - Explicit Types: Refer to the practice of explicitly specifying the types of variables and other elements in your code, rather than relying on TypeScript's type inference.
  - Erased Types: Refer to the types that are used during the compile-time type checking but are removed from the emitted JavaScript code during the compilation process.
  - Downleveling: Process of compiling TypeScript code (or modern JavaScript code) to an older version of JavaScript that is compatible with older JavaScript environments, such as older browsers or older versions of Node.js. When you compile TypeScript code, you can specify the target version of JavaScript using the target option in the `tsconfig.json` file.
  - Strictness: TypeScript provides a strict mode that enforces a stricter subset of type-checking rules. This mode can be enabled in the tsconfig.json file. Strict mode includes several important options:
    > noImplicitAny: TypeScript will raise an error if it cannot infer the type of a variable and implicitly assigns it the `any` type.
    > strictNullChecks: TypeScript will not allow `null` and `undefined` to be assigned to variables unless they are explicitly declared with these types.

+ Everyday Types
  - Type Annotations: It is a way to explicitly specify the type of a variable or any other element in your code.
    > Parameter Type Annotations: Refers to specifying the type of a function parameter explicitly.
    > Return Type Annotations: Refer to specifying the type of the value that a function is expected to return. 

  - Anonymous Functions (Lambda Function): Anonymous functions are often used as short-lived functions where naming them is unnecessary
  - Optional Properties: Object properties that are not required when creating an instance of an object.
    > Example: `age?: number;`

  - Union Types: Allows you to specify that a value can be one of several types. When using with union types it is imoportant to narrow down the type using type guards (e.g. `typeof`, `instanceof`).
    > Example: `type StringOrNumber = string | number;`

  - Type Aliases: A type alias is a way to create a new name for a type. This can be useful for simplifying complex type definitions.
    > Example: `type ID = string | number;`
    > Intersections can be used to combine interfaces: `type ContactInfo = Contact & Address;`

  - Interfaces: Interfaces are a way to define the structure of an object or class. They describe the shape of an object, including the names and types of properties and methods it should have.
    > Example:
    `
      interface Person {
        name: string;
        age: number;
      }
    `
    > Interfaces can be extended: `interface Person extends Address {}`
    > Merging: You can declare the same interface multiple times and TypeScript will combine the declarations:
    `
      interface User {
          name: string;
      }

      interface User {
          age: number;
      }

      const user: User = {
          name: "Alice",
          age: 30
      };
    `

  - Type Assertions: It is a way to tell the TypeScript compiler to treat a value as a specific type, overriding the compiler's inferred type. It is essentially a way to manually specify a type for a value when you have more information about the type than the compiler does. They are purely a compile-time feature. There are two ways of using type assertions:
    1. `as` Syntax:
    `
      let value: any = "Hello, world!";
      let length: number = (value as string).length;
    `
    2. Angle-Bracket Syntax:
    `
      let value: any = "Hello, world!";
      let length: number = (<string>value).length;
    `

+ Narrowing: It is a technique used to refine the type of a variable within a specific scope, often using control flow statements. It allows you to tell TypeScript that a variable, which could be of multiple types, is now more specific within a certain block of code.
  - Type Guards: Type guards are expressions or functions used to narrow down the type of a variable within a specific block of code. They help TypeScript understand what type a variable is.
    1. `typeof` Type Guard: `if (typeof value === 'string') {}`
    2. `instanceof` Type Guard: `if (animal instanceof Dog) {}`
    3. `in` Operator Type Guard: `if ('meow' in animal) {}`
    4. User-Defined Type Guards

  - Truthiness Narrowing: It is a technique of refining the type of a variable based on its truthiness or falsiness.
    > The `in` and `instanceof` opertors can be listed under the truthiness narrowing.
    > Equality Narrowing: Refers to the process of refining the type of a variable based on comparisons using equality operators (==, ===, !=, !==).
    > Assignments (narrowing with using assignments): Refers to the process of refining the type of a variable by assigning it to another variable with a more specific type. This typically involves using type assertions or more specific type annotations to help TypeScript's type system understand that the variable has a narrower type.
    > Control Flow Analysis: It benefits from the `if`, `else` and `switch` statements in narrowing.
    > Using Type Predicates: It is a way for a function to specify what type a value is if certain conditions are met.
      +> Example:
      `
        function isString(value: any): value is string {
          return typeof value === 'string';
        }
      `
        -> In this example the `value is string` is the type predicate. It tells TypeScript, "If this function returns true, then value should be considered a string.".

    > Assertion Functions: These are functions that assert or guarantee the type of a variable. It informs TypeScript’s type system about the expected type of a variable at runtime.
      +> TypeScript `asserts` Functions: You can use asserts functions to perform runtime checks and ensure type correctness.
      +> Example: `function assertIsString(value: any): asserts value is string {}`
        -> In this example, `asserts value is string` is the type predicate.

  - Discriminated Narrowing: It is used to narrow down types in a union of object types based on a common, discriminating property. This property, known as a "discriminant" or "tag", is used to distinguish between different types within a union.
    > Discriminated Unions: A union type where each type in the union has a common property that acts as a discriminant.
    > Discriminant Property: The common property in the union types used to narrow down the types of objects.
    > Example:
    `
      interface Cat {
        type: 'cat';
        meow(): void;
      }

      interface Dog {
        type: 'dog';
        bark(): void;
      }

      type Animal = Cat | Dog;

      function handleAnimal(animal: Animal) {
        switch (animal.type) {
          case 'cat':
            animal.meow(); // TypeScript knows 'animal' is a Cat here
            break;
          case 'dog':
            animal.bark(); // TypeScript knows 'animal' is a Dog here
            break;
        }
      }
    `
  - Exhaustiveness Checking: It ensures all possible cases are handled in a control flow statement when working with union types. Exhaustiveness checking is often used in conjunction with discriminated unions.

+ More On Functions
  - Function Type Expressions: It is a way to describe the type of a function. This includes specifying the function's parameters and return type.
  - Call Signature: Specifies the types of arguments a function accepts and its return type.
    > Example:
    `
      // Define a call signature for a function type
      type Adder = (x: number, y: number) => number;

      // Interface example
      interface GreetingFunction {
        (name: string, age: number): string;
      }
    `
  - Construct Signatures: Defines the type of a constructor function, which allows you to specify what kind of object will be created when a class or constructor function is instantiated.
    > Example:
    `
      interface PersonConstructor {
        new (name: string, age: number): Person;
      }

      class Person {
        constructor(public name: string, public age: number) {}
      }

      const createPerson: PersonConstructor = Person;
      const personInstance = new createPerson("Alice", 30);
    `
  - Generic Functions: Allows you to write functions that can handle a variety of types in a flexible and type-safe way.
    > Example: `function name<Type>(parameter: Type): Type {}`
    > You can also use multiple type parameters in a single generic function.
      +> Example: `function pair<T, U>(first: T, second: U): [T, U] {}`
    > You can constrain the type parameter and provide default types for generics.
    > Inference: type inference is the process where the compiler automatically deduces the type of a value or expression based on the context, without explicit type annotations.
    > Constraints: Constraints are used with generics to restrict the types that can be used with a generic type parameter. They ensure that the generic type meets certain criteria or has specific properties or methods. To add a constraint to a generic type parameter, you use the extends keyword. The constraint defines the requirements that the generic type must satisfy:
      +> Example:
      `
        function functionName<T extends Constraint>(param: T): ReturnType {}
      `
  - Optional Parameters: Parameters that a function or method can accept, but they're not required to be provided by the caller.
  - Function Overloads: Allow you to define multiple signatures for a single function. This is useful when a function can be called in different ways, and you want to specify different types for the arguments and return values depending on how the function is used.
    > Example:
    `
      // Overload signatures
      function functionName(param: Type1): ReturnType1;
      function functionName(param: Type2): ReturnType2;

      // Function implementation
      function functionName(param: Type1 | Type2): ReturnType1 | ReturnType2 {}
    `
  - Overload Signatures and the Implementation Signature
    > Overload Signatures: These are the different ways the function can be called, specified before the implementation. Each overload signature declares a different set of parameter types or return types.
    > Implementation Signature: This is the single function definition that contains the logic for all the overload signatures. The implementation must be able to handle all the cases defined by the overload signatures.
  - Rest Paramers and Rest Arguments:
    > Rest Parameters: Rest parameters are used in function definitions to allow a function to accept any number of arguments. They are represented by three dots `...` followed by a parameter name. This parameter name is treated as an array containing all the additional arguments passed to the function.
      +> Example:
      `function functionName(...paramName: Type[]): ReturnType {}`
    > Rest Arguments: Rest arguments refer to the arguments passed to a function that are captured by the rest parameter. They are accessed in the function body as an array. Rest parameters must be the last parameter in the function definition and you can only have one rest parameter in a function.

  - Parameter Destructing: Allows you to unpack values from arrays or properties from objects directly in the function parameter list.
    > Example:
    `function functionName([element1, element2]: [Type1, Type2]): ReturnType {}`
    > Example: Array Destructuring with Default Values
    `function getValues([a = 10, b = 20]: [number?, number?]): string {}`
    > Example: Object Destructing
    `function functionName({ prop1, prop2 }: { prop1: Type1; prop2: Type2 }): ReturnType {}`

+ Object Types
  - Property Modifiers: Specifying the property type, whether the property is optional, and whether the property can be written to.
    > Optional Properties: `age?: number;`
    > `readonly` Properties: `readonly id: number;`
    > Index Signatures: They allow you to specify the types for keys and corresponding values in an object, making it possible to work with objects that have unknown or variable property names.
      +> Example:
      `
        interface InterfaceName {
          [key: KeyType]: ValueType;
        }
      `
  - Excess Property Checks: Helps catch potential errors when you pass an object with properties that are not expected by the type being assigned to.
    > Example:
    `
      interface User {
          name: string;
          age: number;
      }

      const user: User = {
          name: "Alice",
          age: 25,
          // extra property
          email: "alice@example.com" // Error: Object literal may only specify known properties, and 'email' does not exist in type 'User'
      };
    `
    > Bypassing Excess Property Checks
      1. Type Assertion:
      `
        const user = {
            name: "Alice",
            age: 25,
            email: "alice@example.com"
        } as User;
      `
      2. Assign to a Variable First:
      `
        const tempUser = {
            name: "Alice",
            age: 25,
            email: "alice@example.com"
        };

        const user: User = tempUser; // No error
      `
      3. Index Signatures:
      `
        interface User {
          name: string;
          age: number;
          [key: string]: any; // Allows any additional properties
        }
      `
  - Extending Types: It is a way to create new types based on existing ones. This can be done using interfaces or type aliases.
    > Extending Interfaces:
    `
      // Single Interface Extension
      interface Employee extends Person {}

      // Multiple Interface Extension
      interface Employee extends Person, Address {}
    `
    > Extending Type Aliases (Intersection):
    `
      // Single Type Alias Extension
      type Employee = Person & {};

      // Multiple Type Alias Extensions
      type Employee = Person & Address & {};
    `
    > Extending Classes: `class Employee extends Person {}`

  - Intersection Types: Allows you to combine multiple types into one. The resulting type has all the properties of the combined types.
    > Example:
    `
      // Single Intersection
      type EmployeePerson = Person & Employee;

      // Multiple Intersection
      type DetailedEmployee = Person & Employee & Address;
    `
    > You can also use intersection with interfaces and classes:
    `
      // Intersection Types with Interfaces
      interface Person {}
      interface Employee {}
      type EmployeePerson = Person & Employee;

      // Intersection Types with Classes
      class Person {}
      class Employee {}
      type EmployeePerson = Person & Employee;
    `
    > Intersection types are flexible than interfaces.

  - Generic Object Types
    > The Array Type
    > The `ReadonlyArray` Type
    > Tupple Types
    > `readonly` Tupple Types

+ Type Manipulation
  - Generics
    > Generic Types
    > Generic Classes
    > Generic Constraints
    > Using Type Parameters in Generic Constraints
    > Using Class Types in Generics
    > Generic Parameter Defaults

  - Keyof Type Operator
  - Typeof Type Operator
  - Indexed Access Types
  - Conditional Types
    > Conditional Type Constraints
    > Inferring Within Conditional Types
    > Distributive Conditional Types