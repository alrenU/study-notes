# TypeScript
+ (Suggested Book In Official Docs) JavaScript: The Good Parts

# Notes From Offical Documents
<!-- TS For New Programmer -->
<!-- TS For JS Programmer -->
<!-- TS For Functional Programmers -->
<!-- TS Tooling In 5 Minutes -->
+ **TypeScript (TS)**: A statically-typed *superset* of JavaScript (JS) that adds type annotations to the language. Since it is a superset of JS, any valid JS code is also valid TS code.
  - **Superset (In Programming)**: A language that extends another language by adding new features while maintaining full compatibility with the original language.

+ **Runtime Behavior**: TS preserves the runtime behavior of JS. For instance, dividing by zero in JS results in `Infinity` rather than throwing an exception. TS does not alter this behavior, so existing JS code will run the same way when converted to TS.
+ The TS compiler converts TS code into JS code for execution.
+ **Type Erasure**: Type annotations and other TS-specific types are removed during compilation. The resulting JS code does not include TS types.
+ **Libraries and Frameworks**: TS does not include additional runtime libraries. It uses the same standard library and external libraries as JS. There are no TS-specific frameworks to learn.

+ **Tooling and Usage**
  - **Installing TypeScript**: Via *npm* or *Visual Studio* plugins.
  - **Class Constructors**: Using `public` in `constructor` parameters creates properties automatically.
    + **Example**:
      ```
        constructor(
          public firstName: string,
          public lastName: string
        ) {}
      ```

+ **Type Inference**: TS automatically determines the type of a variable based on the assigned value.
+ *Visual Studio Code* uses TS under the hood to enhance JS development.
+ **Well-Known Symbols**: Special symbols built into the language for internal and meta-programming purposes.
+ **Composing Types**:
  - **Unions (`|`)**: A value can be one of several types: `let value: number | string;`.
  - **Generics**: Create functions and classes that work with any type while maintaining type information.
    + **Example**: `function getItem<Type>(item: Type): Type {}`

+ **Call By Value**: Functions receive a copy of the value.
  - **Primitives**: Changes do not affect the original value.
  - **References (Objects and Arrays)**: Changes to object properties affect the original object.

+ **Primitive Types**
  - **JavaScript Types**: `boolean`, `bigint`, `number`, `string`, `symbol`, `undefined`, `null`
    + **`undefined` vs. `null`**:
      - `undefined` is a type on its own.
      - `null` is historically an object type but treated as its own type in TS.
      - `null == undefined` is `true` (*loose equality*).
      - `null === undefined` is `false` (*strict equality*).
  - **TypeScript Additions**:
    + **`unknown`**: Represents any value but requires type checking before use.
    + **`never`**: Represents values that do not exist (e.g., functions that throw errors).
    + **`void`**: Indicates functions that do not return a value.
    + **Object Literal**: `{ property: Type }`
    + **Arrays**: `T[]` or `Array<T>`
    + **Tuples**: `[T, T]` (fixed length but mutable)
    + **Functions**: `(t: T) => U`
      - **Example**:
        ```
        let fst: (a: any, b: any) => any = (a, b) => a;
        let fst1: <T, U>(a: T, b: U) => T = (a, b) => a;
        ```

+ **Boxed Types**: JS has boxed versions of primitives with methods. For example, `(1).toExponential()` is equivalent to `Number.prototype.toExponential.call(1)`.
+ **Intersections**: Combine multiple types into one, including properties and methods from all types.
  - **Example**:
    ```
    interface InterfaceA { a: string; }
    interface InterfaceB { b: number; }
    type Combined = InterfaceA & InterfaceB;
    ```
  
+ **Unit Types**: Represent exactly one value. Useful for simulating enums.
  - **Example**:
    ```
    declare function pad(s: string, n: number, direction: "left" | "right"): string;
    pad("hi", 10, "left");
    ```

    In this function, `direction` is a union type of `left` and `right`, meaning it can only be one of these two string literals. The issue arises when you try to use a variable instead of a literal:
    
    ```
    let s = "right";
    pad("hi", 10, s); // error
    ```

    Here, `s` is of type string (because `"right"` gets widened to string when assigned to `s`). Since string is not the same as the union type `"left" | "right"`, TS gives an error. To fix this, you can explicitly declare `s` with the union type:

    ```
    let s: "left" | "right" = "right";
    pad("hi", 10, s); // works
    ```

+ **Type Parameters**: Placeholders for types in functions, classes, or interfaces.
  - **Example**:
    ```
    function identity<T>(value: T): T { return value; }
    class Box<T>{}
    new Box<number>();
    ```
  - Type parameters are conventionally single uppercase letters.
  - Type parameters should only be used to propagate type information, such as constraining parameters to be the same type.

+ **Higher-Kinded Types**: Abstract types that take other types as parameters. Functors are an example of higher-kinded types.
  - **Funktor**: A functor is a type that can be mapped over.
  - **Relationship Between HKTs and Functors**: Functors are an example of higher-kinded types. They are a specific use case of HKTs where the type constructor. HKTs are a broader concept that encompasses various type patterns and abstractions, including functors.

+ **Point-Free Programming (Tacit Programming)**: It is a style of programming where you write functions without explicitly mentioning the arguments they operate on. Instead, you define functions by composing other functions.
+ **`readonly` Modifier**: Makes properties immutable.
  - `readonly`, `Readonly<T>` (makes all properties readonly), `ReadonlyArray<T>`

+ **`const`**
  - In `const` variables *reference* is immutable but the *referent* is still mutable.
  - You can also use a *const-assertion*, which operates on arrays and object literals: `let a = [1, 2, 3] as const;`.

+ **Type Guards**: Ensure values conform to specific types at runtime.
  - **Types of Type Guards**: `typeof`, `instanceof`, `in` operator, user-defined checks.

> ***NOTE**: If possible, use *type guards* or conditional checks to narrow down types instead of using assertions, as they provide better type safety.*

+ **Mapped Types**
  - Built-in mapped types:
    + **`Partial<T>`**: Makes all properties *optional*.
    + **`Required<T>`**: Makes all properties *required*.
    + **`Readonly<T>`**: Makes all properties *read-only*.

<!-- The Basics -->
+ JavaScript uses dynamic typing, where types are determined at runtime.
+ **Non-Exception Failures**: In TS, this refers to issues detected during type checking that don't cause the compiler to crash. Common types include: *type errors*, *syntax errors*, *semantic errors*.
+ **`tsc`**: The TS compiler. It compiles TS code into JS.
+ **`--noEmitOnError`**: By default, TS will emit (generate) JS code even if there are errors. Using this flag prevents the emission of JS files if there are any compilation errors.
+ **Downleveling**: TS can convert code written in newer ECMAScript versions to older versions. This process is known as downleveling.
+ You can add strictness level to your TS program by adding extra configurations in `tsconfig.json` file. The two most important ones are `noImplicitAny` and `strictNullChecks`.
  - **`noImplicitAny`**: Ensures that all variables must have explicit types. Without this flag, TS will default to `any` type when it cannot infer the type. Enabling it helps catch unintentional uses of `any`.
  - **`strictNullChecks`**: Enforces explicit handling of `null` and `undefined`. By default, these values can be assigned to any type. This flag makes it necessary to explicitly handle or check for `null` and `undefined` values, improving code safety.

<!-- Everyday Types -->
+ **`any` Type**: Represents any value and bypasses TypeScript’s type checking.
  - Use sparingly as it negates type safety.
  - When TypeScript cannot infer a type, it defaults to `any`.

+ **Type Annotations**: Explicitly specify types for variables, function parameters, and return values.
  - **Example**: `let num: number = 42;`

+ **Functions**
  - *Return type annotation* specifies the return type of a function.
  - Annotate functions returning promises with the `Promise` type.
  - **Anonymous Functions**: Functions without names, often used as arguments in other functions.
  - **Contextual Typing**: Infers the type of a value based on how and where it’s used.

+ **Optional Properties (`?`)**: Properties that may or may not be present in an object (checks for `undefined`).
+ **Non-null Assertion Operator (`!`)**: Asserts that a value is not `null` or `undefined`.
+ **Union Types (`|`)**: Represents a value that can be one of several types.
  - **Narrowing**: Use *type guards* to narrow down the type in conditional statements.
  - **Untagged Unions**: No runtime information for distinguishing types.
  - **Discriminated Unions (Tagged Unions)**: Each type in the union has a common property.

+ **Type Aliases**: Create a new name for a type.
+ **Interfaces**: Define the shape of an object.
  - **Structural Typing (Duck Typing)**: Objects with the same shape are considered the same type.

+ **Type Aliases vs Interfaces**
  - Interfaces can be extended with new properties; type aliases cannot.
  - Interfaces may be more performant for the compiler when extending types.

+ **Type Assertions**: Explicitly specify a value’s type when TS cannot infer it.
  - **Syntaxes**:
    + **Angle-Bracket Syntax**: `<string>someValue`
    + **`as` Syntax**: `document.querySelector('input') as HTMLInputElement;`
  - **Complex Coercion**: Sometimes *type assertions* can be too conservative and will disallow more complex coercions that might be valid. If this happens, you can use two assertions, first to `any` or `unknown`, then to the desired type.
    + **Example**: `const a = expr as any as T;`

+ **Literal Types**: Exact values of a type, typically from `const` variables.
  - `const constantString = "Hello World";` has the literal type *"Hello World"*.
  - **Example**: Usage with Functions
    ```
    declare function handleRequest(url: string, method: "GET" | "POST"): void;
    
    const req = { url: "https://example.com", method: "GET" };
    handleRequest(req.url, req.method); // Will not work

    const req1 = { url: "https://example.com", method: "GET" as "GET" };
    handleRequest(req1.url, req1.method); // Works

    const req2 = { url: "https://example.com", method: "GET" };
    handleRequest(req2.url, req2.method as "GET"); // Alternative

    const req3 = { url: "https://example.com", method: "GET" } as const;
    handleRequest(req3.url, req3.method); // Works
    ```

    In the above code the first example fails because TS thinks of the `method` property is a `string` type.

+ **Enums**: Define a set of named constants.
  - Use to describe values that can be one of a set of named constants, but consider carefully if they add value over other solutions.