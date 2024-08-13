# TypeScript
+ (Suggested Book In Official Docs) JavaScript: The Good Parts

# Notes From Offical Documents
<!-- TS For New Programmer -->
<!-- TS For JS Programmer -->
<!-- TS For Functional Programmers -->
<!-- TS Tooling In 5 Minutes -->
+ **TypeScript (TS)**: A statically-typed *superset* of JavaScript (JS) that adds type annotations to the language. Because of that any valid JS code is also a valid TS code.
+ **Runtime Behavior**: TS preserves the runtime behavior of JS. For instance, dividing by zero in JS results in `Infinity` rather than throwing an exception. TS does not alter this behavior, so existing JS code will run the same way when converted to TS.
+ The TS compiler converts TS code into JS code for execution.
+ **Type Erasure**: Type annotations and other TS-specific types are removed during compilation. The resulting JS code does not include TS types.
+ **Libraries and Frameworks**: TS uses the same standard library and external libraries as JS. There are no TS-specific frameworks to learn.
+ **Tooling and Usage**
  - **Installing TypeScript**: Via *npm* or *Visual Studio* plugins.
  - **Class Constructors**: Using `public` in `constructor` parameters creates properties automatically.
    + **Example**: `constructor(public firstName: string) {}`

+ **Type Inference**: TS automatically determines the type of a variable based on the assigned value.
+ *Visual Studio Code* uses TS under the hood to enhance JS development.
+ **Well-Known Symbols**: Special symbols built into the language for internal and meta-programming purposes. For example `Symbol.iterator`, `Symbol.hasInstance` etc.
+ **Generator Functions**
  - **Generator Function Syntax (`*`)**: The `*` is used in the function definition to indicate that it is a generator function. A generator function can pause its execution and later resume, allowing it to produce a series of values over time. You can use asynchronous functions with it.
    + **Example**:
      ```typescript
      function* myGenerator() {
        yield 1;
        yield 2;
        yield 3;
      }
      ```
      Each `yield` statement produces a value and pauses the function until the next value is requested.

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
    + **`never`**: Represents values which are never observed. In a return type, this means that the function throws an exception or terminates execution of the program.
    + **`void`**: Indicates functions that do not return a value.
    + **Object Literal**: `{ property: Type }`
    + **Arrays**: `T[]` or `Array<T>`
    + **Tuples**: `[T, T]` (fixed length but mutable)
    + **Functions**: `(t: T) => U`
      - **Example**:
        ```typescript
        let fst: (a: any, b: any) => any = (a, b) => a;
        let fst1: <T, U>(a: T, b: U) => T = (a, b) => a;
        ```

+ **Boxed Types**: JS has boxed versions of primitives with methods. For example, `(1).toExponential()` is equivalent to `Number.prototype.toExponential.call(1)`.
+ **Intersections**: Combine multiple types into one, including properties and methods from all types.
  - **Example**:
    ```typescript
    interface InterfaceA { a: string; }
    interface InterfaceB { b: number; }
    type Combined = InterfaceA & InterfaceB;
    ```
  
+ **Unit Types**: Represent exactly one value. Useful for simulating enums.
  - **Example**:
    ```typescript
    declare function pad(s: string, n: number, direction: "left" | "right"): string;
    pad("hi", 10, "left");
    ```
    In this function, `direction` is a union type of `left` and `right`, meaning it can only be one of these two string literals. The issue arises when you try to use a variable instead of a literal:
    ```typescript
    let s = "right";
    pad("hi", 10, s); // error
    ```
    Here, `s` is of type string (because `"right"` gets widened to string when assigned to `s`). Since string is not the same as the union type `"left" | "right"`, TS gives an error. To fix this, you can explicitly declare `s` with the union type:
    ```typescript
    let s: "left" | "right" = "right";
    pad("hi", 10, s); // works
    ```

+ **Type Parameters**: Placeholders for types in functions, classes, or interfaces.
  - **Example**:
    ```typescript
    function identity<T>(value: T): T { return value; }
    class Box<T>{}
    new Box<number>();
    ```
  - Type parameters are conventionally single uppercase letters.
  - Type parameters should only be used to propagate type information, such as constraining parameters to be the same type.

+ **Higher-Kinded Types**: Abstract types that take other types as parameters. Functors are an example of higher-kinded types.
  <!-- Give an example about funktor. -->
  - **Funktor**: A functor is a type that can be mapped over.
  - **Relationship Between HKTs and Functors**: Functors are an example of higher-kinded types. They are a specific use case of HKTs where the type constructor. HKTs are a broader concept that encompasses various type patterns and abstractions, including functors.

+ **Point-Free Programming (Tacit Programming)**: It is a style of programming where you write functions without explicitly mentioning the arguments they operate on. Instead, you define functions by composing other functions.
+ **`readonly` Modifier**: Makes properties immutable.
  - `readonly`, `Readonly<T>` (makes all properties readonly), `ReadonlyArray<T>`
  - It does not mean its internal contents can’t be changed. It means the property itself can’t be re-written to.

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

## The Basics
+ JavaScript uses dynamic typing, where types are determined at runtime.
+ **Non-Exception Failures**: In TS, this refers to issues detected during type checking that don't cause the compiler to crash. Common types include: *type errors*, *syntax errors*, *semantic errors*.
+ **`tsc`**: The TS compiler. It compiles TS code into JS.
+ **`--noEmitOnError`**: By default, TS will emit (generate) JS code even if there are errors. Using this flag prevents the emission of JS files if there are any compilation errors.
+ **Downleveling**: TS can convert code written in newer ECMAScript versions to older versions. This process is known as downleveling.
+ You can add strictness level to your TS program by adding extra configurations in `tsconfig.json` file. The two most important ones are `noImplicitAny` and `strictNullChecks`.
  - **`noImplicitAny`**: Ensures that all variables must have explicit types. Without this flag, TS will default to `any` type when it cannot infer the type. Enabling it helps catch unintentional uses of `any`.
  - **`strictNullChecks`**: Enforces explicit handling of `null` and `undefined`. By default, these values can be assigned to any type. This flag makes it necessary to explicitly handle or check for `null` and `undefined` values, improving code safety.

## Everyday Types
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
  - **Example**: `interface User { email?: string; }`

+ **Non-null Assertion Operator (`!`)**: Asserts that a value is not `null` or `undefined`.
  - **Example**: `value!.length`

+ **Double-Boolean Negation (`!!`)**: Converts a value to a boolean.
  - **Example**: `const isTruthy = !!value;`

+ **Union Types (`|`)**: Represents a value that can be one of several types.
  - **Untagged Unions**: No runtime information for distinguishing types.
  - **Discriminated Unions (Tagged Unions)**: Each type in the union has a common property.

+ **Type Aliases**: Create a new name for a type.
+ **Interfaces**: Define the shape of an object.
  - **Structural Typing (Duck Typing)**: Objects with the same shape are considered the same type.

+ **Type Aliases vs. Interfaces**
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
    ```typescript
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

## Narrowing
+ **Narrowing**: Narrowing is the process of refining a variable's type to a more specific type based on the program's control flow. Methods to achieve narrowing include:
  - **Truthiness Narrowing**
  - **Equality Narrowing**
  - **`in` Operator Narrowing**
  - **`instanceof` Narrowing**
  - **Control Flow Analysis**
  - **Assignments**:  TypeScript narrows the left side based on the right side of the assignment.
  - **Assertion Functions**: Used to assert a variable's type at runtime.
   + **Example**: `function assertIsString(value: any): asserts value is string {}`
  - **Type Predicates**: Define user-defined type guards.
   + **Syntax**: `parameterName is Type`
   + **Example**:
     ```typescript
     function isFish(pet: Fish | Bird): pet is Fish {
       return (pet as Fish).swim !== undefined;
     }
     ```
  - **Discriminated Unions**
  - **Exhaustiveness Checking**
    + Ensures all cases of a union type are handled.
    + Uses the `never` type for checking.
    + **Example**:
      ```typescript
      type Shape = Circle | Square;

      function getArea(shape: Shape) {
        switch (shape.kind) {
          case "circle":
            return Math.PI * shape.radius ** 2;
          case "square":
            return shape.sideLength ** 2;
          default:
            const _exhaustiveCheck: never = shape;
            return _exhaustiveCheck;
        }
      }
      ```

+ In JavaScript, `typeof null` returns `"object"` (historical quirk).
+ In JS, constructs like `if` first *coerce* their conditions to booleans to make sense of them. Truthy and falsy values:
  - **Falsy**: `0`, `NaN`, `""` (empty string), `0n` (bigint zero), `null`, `undefined`
  - **Truthy**: All other values.

## More On Functions
+ **Function Type Expressions**: Specifies the types of a function’s parameters and return value without implementing the function.
  - **Example**: `type GreetFunction = (name: string) => string;`

+ If a parameter type isn’t specified, it defaults to `any`.
+ **Call Signature**: Defines the type of a function within an object type or interface.
  - **Example**: `interface MathOperation { (a: number, b: number): number; }`

+ You can add properties to functions.
+ You can use constructor and can call functions with the `new` operator.
+ **Generic Functions**: A generic function is a function that can operate on different types without being explicitly tied to one.
  - **Example**: `function identity<Type>(arg: Type): Type {}`
    + In this example the `Type` is called **type parameter**.
  - **Constraints**: It refers to restrictions placed on generic type parameters to ensure that they adhere to a specific structure or interface.
    + **Example**: `function logLength<T extends { length: number }>(arg: T): T {}`
  
  > ***NOTE**: When possible, use the *type parameter* itself rather than *constraining* it.*

+ In JS, if you call a function with more arguments than there are parameters, the extra arguments are simply ignored. TS behaves the same way.

+ **Function Overloads**: Allows you to define multiple versions of a function with the same name but different parameter types or numbers.
  - **Overload Signature**: You define multiple signatures for a function, each specifying a different set of parameters and return types.
  - **Implementation Signature**: The actual implementation of the function (the function body) must match one of the overload signatures.

  > ***NOTE**: Prefer union types for parameters over overloads when possible.*

+ **Type Safety**: Ensures values are used consistently with their types.
+ In JS, a function’s return type is `undefined`. In TS, it’s `void`.
+ **Untyped Function Call**: Refers to function calls where TS lacks enough information to infer the types of the function’s parameters or return value.

+ **Parameter Destructuring**
  - Type annotation for destructured objects should be placed after the destructuring syntax.
    + **Example**:
      ```typescript
      function sum({ a, b, c }: { a: number; b: number; c: number }) {}

      // Same as prior example
      type ABC = { a: number; b: number; c: number };
      function sum({ a, b, c }: ABC) {}
      ```

## Object Types
+ **Index Signatures**: Allow specifying the types of values that can be accessed using dynamic keys. Useful when the keys are not known ahead of time but you want to enforce type constraints on values.
  - **Example**:
    ```typescript
    interface StringNumberMap { [key: string]: number; }
    const example: StringNumberMap = { age: 25, year: 2024 };
    ```

+ **Excess Property Checking**: TS checks that object literals only contain properties defined in their type. Extra properties not part of the type will produce an error.
  - **Example**:
    ```typescript
    interface Person { name: string; age: number; }
    const person: Person = {
      name: "Alice",
      age: 30,
      // address: "123 Main St" // Error
    };
    ```
  
  > ***NOTE**: Excess property errors are usually bugs. Review your code before working around them.*

+ **Option Bags (Options Objects)**: A pattern where a single object with optional properties is passed as a function argument. This approach is also known as.
  - **Example**: `function createUser({ name, age }: { name: string; age?: number; }) {}`

+ **Extending Types**: Create a superset of an interface by using the `extends` keyword.
+ **Declaration Merging**: TS merges properties from multiple interfaces with the same name into a single interface. Only interfaces and namespaces (or modules) support merging in TypeScript.
  - **Example**:
    ```typescript
    interface Person { name: string; }
    interface Person { age: number; }

    // Merged result
    const person: Person = { name: "Alice", age: 30 };
    ```

+ **Generic Object Types**: Use generics when the type of an object may vary. This allows for flexible and reusable types.
  - **Example**: `interface Box<Type> { contents: Type; }`

> ***NOTE**: Use generic functions to avoid overloads.*

+ **Tuple Types**: A tuple is an array with a fixed number of elements where each element can have a different type.
  - **Example**:
  ```typescript
  let tuple: [string, number, boolean];
  tuple = ["hello", 42, true];
  ```
  - Fixed number of elements. Adding or removing elements will produce an error.
  - Optional elements can only be at the end and affect the tuple's length type.

  > ***NOTE**: Tuples are useful in convention-based APIs where each element's meaning is clear. Annotate tuples as readonly when possible to ensure immutability.*

  + **Convention-Based APIs**: Convention-based APIs use standard rules and patterns, ensuring that data and functions are structured consistently and predictably for developers.

## Type Manipulation
### Generics
+ Generics allow you to write flexible, reusable functions, classes, and interfaces while maintaining type safety.
+ **Generic Types**: Generic types use placeholders to represent types. They enable functions and classes to handle various data types without sacrificing type safety.
  - **Example**: `function identity<Type>(arg: Type): Type {}`
    + Use a placeholder (e.g., `T`, `Type`) that is replaced with an actual type during use.

> ***NOTE**: You can create generic interface and class but it is not possible to create generic enums and namespaces.*
+ You can use constructors to create instances of generic types.
  - **Example**: `function create<Type>(c: { new (): Type }): Type { return new c(); }`

+ You can provide default values for generic types, which makes them optional.
  - **Example**:
    ```typescript
    declare function create<T extends HTMLElement = HTMLDivElement, U extends HTMLElement[] = T[]>(
      element?: T,
      children?: U
    ): Container<T, U>;

    const div = create();
    const p = create(new HTMLParagraphElement());
    ```

### The `keyof` Type Operator
+ It is used to obtain a union type of the keys of a given object type. It generates a type representing all property names of an object type.
  - **Example**:
    ```typescript
    type Person = { name: string; age: number; };
    type PersonKeys = keyof Person; // 'name' | 'age'
    ```

### The `typeof` Type Operator
+ **`ReturnType<FunctionName>`**: Extracts the return type of a function type. It is used with types only.
+ **`typeof`**: is used to get the type of a variable or a property. It can be used with both types and values.

### Indexed Access Types
+ Indexed Access Types in TypeScript allow you to access the type of a property in an object type using an index. This feature is particularly useful for dynamically retrieving the type of a property from a given type.
  - **Example**:
    ```typescript
    interface Person { name: string; }
    type NameType = Person['name']; // NameType is inferred as string
    ```

+ Indexed Access Types can also be used with *index signatures*.
  - **Example**:
    ```typescript
    interface Dictionary { [key: string]: number; }
    type ValueType = Dictionary[string]; // ValueType is inferred as number
    ```

+ **Example**:
  Consider the following array:
  ```typescript
  const MyArray = [ { name: "Alice", age: 15 } ];
  type Person = typeof MyArray[number];
  ```
  Here, `Person` is inferred as:
  ```typescript
  type Person = {
      name: string;
      age: number;
  }
  ```
  Thus, you can access property types:
  ```typescript
  type Age = typeof MyArray[number]["age"]; // Age is inferred as number
  ```

> ***NOTE**: Indexed Access Types work with types, not values. You cannot use a constant value in place of a type when indexing.*

### Conditional Types
+ *Conditional types* enable you to define types based on conditions, similar to how conditional statements work in programming.
  - **Syntax**: `SomeType extends OtherType ? TrueType : FalseType`

+ **Using Conditional Types with Generics**
  - **Example**:  
    Instead of defining multiple overloads, use conditional types to simplify.
    ```typescript
    interface IdLabel { id: number; }
    interface NameLabel { name: string; }

    type Label<T> = T extends number ? IdLabel : NameLabel;
    function createLabel<T extends number | string>(input: T): Label<T> {}
    ```

+ **Inferring Within Conditional Types**
  - **Inferring Types**
    + You can use `infer` to deduce types within conditional types.
    + **Example**:
      ```typescript
      type Flatten<Type> = Type extends Array<infer Item> ? Item : Type;

      type Str = Flatten<string[]>; // string
      type Num = Flatten<number>; // number
      ```

+ **Distributive Conditional Types**
  - **Distributivity**:
    + Conditional types can be applied to each member of a union type separately.
    + **Example**:
      ```typescript
      type ToArray<Type> = Type extends any ? Type[] : never;
      type StrArrOrNumArr = ToArray<string | number>; // string[] | number[]
      ```
  - **Non-Distributive Conditional Types**
    + To avoid distributing across union types, wrap the type in square brackets.
    + **Example**:
      ```typescript
      type ToArrayNonDist<Type> = [Type] extends [any] ? Type[] : never;
      type ArrOfStrOrNum = ToArrayNonDist<string | number>; // (string | number)[]
      ```

<!-- TODO: Re-reaad mapped types section. -->
### Mapped Types
+ **Mapping Modifiers**
  - There are two additional modifiers which can be applied during mapping: `readonly` and `?`. You can remove or add these modifiers by prefixing with `-` or `+`. If you don’t add a prefix, then `+` is assumed.
  - **Example**:
    ```typescript
    // Removes 'readonly' attributes from a type's properties
    type CreateMutable<Type> = {
      -readonly [Property in keyof Type]: Type[Property];
    };
    
    type LockedAccount = {
      readonly id: string;
      readonly name: string;
    };
    
    type UnlockedAccount = CreateMutable<LockedAccount>;
    ```
  - **Example**:
    ```typescript
    // Removes 'optional' attributes from a type's properties
    type Concrete<Type> = {
      [Property in keyof Type]-?: Type[Property];
    };
    
    type MaybeUser = {
      id: string;
      name?: string;
      age?: number;
    };
    
    type User = Concrete<MaybeUser>;
    ```

+ **Key Remapping via `as`**: Use as to remap keys in mapped types.
  - **Example**:
    ```typescript
    type MappedTypeWithNewProperties<Type> = {
        [Properties in keyof Type as NewKeyType]: Type[Properties]
    }
    ```

### Template Literal Types
+ Template literal types extend string literal types.
+ **Union Expansion**: If a union type is used in a template literal, it creates a union of all possible strings.
  - **Example**:
    ```typescript
    type EmailLocaleIDs = "welcome_email" | "email_heading";
    type FooterLocaleIDs = "footer_title" | "footer_sendoff";
    type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;
    // "welcome_email_id" | "email_heading_id" | "footer_title_id" | "footer_sendoff_id"
    ```
  - **Cross Product of Unions**: Combining multiple unions results in a Cartesian product of the possible values.
    + **Example**:
      ```typescript
      type Lang = "en" | "ja" | "pt";
      type LocaleMessageIDs = `${Lang}_${AllLocaleIDs}`;
      // "en_welcome_email_id" | "en_email_heading_id" | ... | "pt_footer_title_id" | "pt_footer_sendoff_id"
      ```
  - **Application Example**:
  Define a function that listens for changes on object properties, ensuring type safety with template literal types.
  ```typescript
  type PropEventSource<Type> = {
    on<Key extends keyof Type>(eventName: `${Key}Changed`, callback: (newValue: Type[Key]) => void): void;
  };
  ```

> ***NOTE**: We generally recommend that people use ahead-of-time generation for large string unions, but this is useful in smaller cases.*

+ **Intrinsic String Manipulation Types**: TypeScript provides built-in types for manipulating strings at the type level. For example: `Uppercase<StringType>`, `Lowercase<StringType>` etc.

<!-- TODO - Summary -->
## Classes