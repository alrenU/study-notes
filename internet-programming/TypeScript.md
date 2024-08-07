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
      class Student {
        fullName: string;
        constructor(
          public firstName: string,
          public lastName: string
        ) {
          this.fullName = firstName + " " + lastName;
        }
      }
      ```

+ **Type Inference**: TS automatically determines the type of a variable based on the assigned value.
+ *Visual Studio Code* uses TS under the hood to enhance JS development.
+ **Well-Known Symbols**: Special symbols built into the language for internal and meta-programming purposes.
+ **Composing Types**:
  - **Unions (`|`)**: A value can be one of several types: `let value: number | string;`.
  - **Generics**: Create functions and classes that work with any type while maintaining type information.
    + **Example**:
      ```
      function getItem<Type>(item: Type): Type {
        return item;
      }
      ```

+ **Duck Typing (Structural Typing)**: TS uses structural typing. If two objects have the same shape, they are considered the same type. The term comes from the saying: "If it looks like a duck, swims like a duck, and quacks like a duck, then it probably is a duck.".
  - **Example**:
    ```
    interface Point {
      x: number;
      y: number;
    }

    function logPoint(p: Point) {
      console.log(`${p.x}, ${p.y}`);
    }

    const point = { x: 12, y: 26 };
    logPoint(point); // Works

    const point1 = { x: 12, y: 26, z: 89 };
    logPoint(point1); // Works, extra property is allowed
    ```

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
+ **Union Types**
  - **Untagged Unions**: No runtime information for distinguishing types.
    + **Example**:
      ```
      function process(value: string | number) {
        if (typeof value === "string") {
          console.log("String value:", value);
        } else {
          console.log("Number value:", value);
        }
      }
      ```
  - **Discriminated Unions (Tagged Unions)**: Each type in the union has a common property.
    + **Example**:
      ```
      type Animal = { type: 'cat'; meow: boolean } | { type: 'dog'; bark: boolean };

      function handleAnimal(animal: Animal) {
        switch (animal.type) {
          case 'cat':
            console.log("It's a cat, meow:", animal.meow);
            break;
          case 'dog':
            console.log("It's a dog, bark:", animal.bark);
            break;
        }
      }
      ```

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

+ **Point-Free Programming**: Define and compose functions without specifying the arguments.
  - **Example**:
    ```
    const double = (x: number) => x * 2;
    const square = (x: number) => x * x;

    const doubleThenSquare = (x: number) => square(double(x));

    const compose = <A, B, C>(f: (b: B) => C, g: (a: A) => B) => (a: A) => f(g(a));
    const doubleThenSquare = compose(square, double);
    ```

+ **Modifiers**
  - **`readonly` Modifier**: Makes properties immutable.
  - **Example**: `readonly x: number;`
  - **Example**: `Readonly<T>` that makes all properties readonly.
    ```
    interface X {
      x: number;
    }
    let rx: Readonly<X> = { x: 1 };
    ```
  - **Example**:
    ```
    let a: ReadonlyArray<number> = [1, 2, 3];
    let b: readonly number[] = [1, 2, 3];
    ```

+ **`const`**
  - In `const` variables *reference* is immutable but the *referent* is still mutable.
  - You can also use a *const-assertion*, which operates on arrays and object literals: `let a = [1, 2, 3] as const;`.

+ **Type Assertions**: Explicitly tell the TS compiler the type of a value. You can use it when type inference is insufficient or when working with specific DOM elements.
  - **Angle-Bracket Syntax**: `let strLength: number = (<string>someValue).length;`
  - **`as` Syntax**: `let strLength number = (someValue as string).length;`
  - **Example**: Using it on DOM elements.
    ```
    let inputElement = document.querySelector('input') as HTMLInputElement;
    ```

+ **Type Guards**: Ensure values conform to specific types at runtime.
  - **Types of Type Guards**: `typeof`, `instanceof`, `in` operator, user-defined checks.
  - **Type Narrowing**: Type guards help narrow down the type of a value from a broader type (like `any`, `unknown`, or a *union type*) to a more specific type within a certain scope.

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
+ **`any`**: you can use whenever you don’t want a particular value to cause typechecking errors. When you don’t specify a type, and TypeScript can’t infer it from context, the compiler will typically default to any. You usually want to avoid this, though, because any isn’t type-checked. Use sparingly as it negates TypeScript’s type safety.
+ **Type Annotations**: Explicitly specify types for variables, parameters, and return values.
+ **Functions**
  - You can determine the return type of a parameter by using *return type annotation*.
  - If you want to annotate the return type of a function which returns a promise, you should use the `Promise` type.
  - **Anonymous Functions**: Functions that does not have a name. For example the functions delared as a parameter in another function's arguments.
  - **Contextual Typing**: Refers to determinining the type of a variable or function parameter by analyzing how and where it is used, even if the type is not explicitly specified.