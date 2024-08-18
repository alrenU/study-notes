# TypeScript
+ (Suggested Book In Official Docs) JavaScript: The Good Parts

# Notes From Offical Documents
<!-- TODO: Put "Call By Value And Call By Reference" into JS notes. -->
+ In JS primitives acts as *call by value* whereas objects and arrays acts as *call by reference*.
<!-- TODO: Put "Well-Known Symbols" into JS notes. -->
+ **Well-Known Symbols**: Predefined symbols that allow you to customize and extend the behavior of built-in objects and methods, such as iterators, string operations, and instance checks.
<!-- TODO: Put "Generator Functions" into JS notes. -->
+ **Generator Functions (`*`)**: Special type of functions that produce values one at a time. They are useful for handling sequences or streams of data that may be too large to fit into memory all at once.
  - **Example**: `function* myGenerator() { yield 1; yield 2; }`
    Each `yield` statement produces a value and pauses the function until the next value is requested.

+ TS is a statically-typed *superset* of JS that adds type annotations to the language. Any valid JS code is also a valid TS code.
+ TS preserves the runtime behavior of JS. For instance, dividing by zero in JS results in `Infinity` rather than throwing an exception. TS does not alter this behavior, so existing JS code will run the same way when converted to TS.
+ **Type Erasure**: The TS compiler converts TS code into JS code for execution. Because of that type annotations and other TS-specific types are removed during compilation.
+ You can install TS via *npm* or *Visual Studio* plugins.
+ **Type Inference**: Determining the type of a variable based on the assigned value.
+ **Type Safety**: Ensures values are used consistently with their types.
+ In TS, a *type* refers to a way of describing the shape, structure, or nature of data. Types can be.
<!-- TODO: In the "Types" section: update newly writed types, delete redundant types notes. -->
+ **Types**
  - **Basic Types**: `boolean`, `bigint`, `number`, `string`, `symbol`, `undefined`, `null`
    + **`undefined` vs. `null`**:
      - Both `undefined` and `null` are their own type in TS. In JS the `null` is considered as object because of historical reasons.
      - `null == undefined` is `true` in *loose equality*.
      - `null === undefined` is `false` in *strict equality*.
  - **Special Types**
    + **`any`:** Represents any type, but lacks type safety.
    + **`unknown`**: It is a safer alternative to `any`, representing a value that could be of any type, but requires type checking before being used.
    + **`never`**: Represents values that never occur, typically used for functions that never return or throw an error.
    + **`void`**: Represents the absence of any type, typically used for functions that do not return a value.
  - **Object Types**
    + **`object`**
    + **`{}`**
  - **Array Types**
    + **`number[]`**
    + **`Array<number>`**
  - **Tupple Types**
  - **Function Types**
  - **Union Types**
  - **Intersection Types**
  - **Literal Types**
  - **Type Aliases**
  - **Interfaces**
  - **Enums**
  - **Generics**
  - **Mapped Types**
  - **Conditional Types**
  - **Indexed Access Types**
  - **Keyof Type Operator**
  - **Readonly Types**
  - **Partial Types**
  - **Required Types**
  - **Utility Types**

  - **Composite Types**
    + **Object Literal**: `{ property: Type }`
    + **Arrays**: `T[]` or `Array<T>`
    + **Tuples**: `[T, T]` (fixed length but mutable)
    + **Functions**: `(t: T) => U`
    + **`enum`**: A way to define a set of named constants.
    + **Union Types**: A type that can be one of several types (e.g., `number | string`).
    + **Intersection Types**: Combines multiple types into one (e.g., `TypeA & TypeB`).
    + **Type Aliases**: Custom names for types, (e.g., `type ID = string | number`).
    + **Interfaces**: Used to define the shape of an object.
  - **Constructs As Types**
    + **Literal Types**: Specific values (e.g., `let status: "success" | "failure" = "success";`).
    + **Mapped Types**: Creates new types by transforming existing ones.
    + **Template Literal Types**: `type Greeting = Hello, ${string}`
    + **Utility Types**: Types provided by TS to help with common type manipulations (e.g., `Partial<T>`, `Required<T>`).
    + **Conditional Types**: `T extends U ? X : Y`.
    + **Type Assertions**: A way to tell the compiler to treat a value as a specific type.
    + **Literal Inference**: Infers the most specific type possible.
        
<!-- TODO: Put the following section to its related section (probably classes). -->
+ Using `public` in `constructor` parameters creates properties automatically.
  - **Example**: `constructor(public firstName: string) {}`

+ **Generics**: Enables the creation of reusable components that can work with any data type, ensuring type safety and flexibility.
  - **Example**: `function getItem<Type>(item: Type): Type {}`

<!-- TODO: Put "Boxed Types" into JS notes. -->
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
    Here, `s` is of type string (because `right` gets widened to string when assigned to `s`). Since string is not the same as the union type `"left" | "right"`, TS gives an error. To fix this, you can explicitly declare `s` with the union type:
    ```typescript
    let s: "left" | "right" = "right";
    pad("hi", 10, s); // works
    ```
    + `declare` keyword is used to tell the TS compiler about the existence of an entity (such as a function, variable, class, or module) without providing an implementation.

+ **Type Parameters**: Placeholders for types in functions, classes, or interfaces.
  - **Example**:
    ```typescript
    function identity<T>(value: T): T { return value; }
    class Box<T>{}
    new Box<number>();
    ```
  - Type parameters are conventionally single uppercase letters.
  - Type parameters should only be used to propagate type information, such as constraining parameters to be the same type.

<!-- TODO: The higher-kinded types and funktors are functional programming concept. Put them into their related section later. -->
+ **Higher-Kinded Types**: Abstract types that take other types as parameters. Functors are an example of higher-kinded types. Both HKT and funktors comes from functional programming and does not represented in TS.
  - **Funktor**: In functional programming, a functor is a container type that supports a map operation.
  - Functors are an example of higher-kinded types. They are a specific use case of HKTs where the type constructor. HKTs are a broader concept that encompasses various type patterns and abstractions, including functors.

<!-- TODO: The point-free programming is a functional programming concept. Put it into its related section later. -->
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
<!-- TODO: Put below matter to the JS section. -->
+ JS uses ***dynamic typing***, where types are determined at runtime.
+ **Non-Exception Failures**: In TS, this refers to issues detected during type checking that don't cause the compiler to crash. Common types include: *type errors*, *syntax errors*, *semantic errors*.
+ **`tsc`**: The TS compiler. It compiles TS code into JS.
+ **`--noEmitOnError`**: By default, TS will emit (generate) JS code even if there are errors. Using this flag prevents the emission of JS files if there are any compilation errors.
+ **Downleveling**: TS can convert code written in newer ECMAScript versions to older versions. This process is known as downleveling.
+ You can add strictness level to your TS program by adding extra configurations in `tsconfig.json` file. The two most important ones are `noImplicitAny` and `strictNullChecks`.
  - **`noImplicitAny`**: Ensures that all variables must have explicit types. Without this flag, TS will default to `any` type when it cannot infer the type. Enabling it helps catch unintentional uses of `any`.
  - **`strictNullChecks`**: Enforces explicit handling of `null` and `undefined`. By default, these values can be assigned to any type. This flag makes it necessary to explicitly handle or check for `null` and `undefined` values, improving code safety.

## Everyday Types
+ **`any` Type**: Represents any value and bypasses TS’s type checking.
  - Use sparingly as it negates type safety.
  - When TS cannot infer a type, it defaults to `any`.

+ **Type Annotations**: Explicitly specify types for variables, function parameters, and return values.
  - **Example**: `let num: number = 42;`

+ **Functions**
  - ***Return type annotation*** specifies the return type of a function.
  - Annotate functions returning promises with the `Promise` type.
  - **Anonymous Functions**: Functions without names, often used as arguments in other functions.
  - **Contextual Typing**: Infers the type of a value based on how and where it’s used.

+ **Optional Properties (`?`)**: Checks for `undefined` of an object's property.
  - **Example**: `interface User { email?: string; }`

+ **Non-null Assertion Operator (`!`)**: Asserts that a value is not `null` or `undefined`.
  - **Example**: `value!.length`

+ **Double-Boolean Negation (`!!`)**: Converts a value to a boolean.
  - **Example**: `const isTruthy = !!value;`

+ **Union Types (`|`)**: Represents a value that can be one of several types.
  - **Untagged Unions**: No runtime information for distinguishing types.
  - **Discriminated Unions (Tagged Unions)**: Each type in the union has a common property.

+ **Type Aliases**: Creates a new name for a type.
+ **Interfaces**: Defines the shape of an object.
  - **Structural Typing (Duck Typing)**: Objects with the same shape are considered the same type.

+ **Type Aliases vs. Interfaces**
  - Interfaces can be extended with new properties; type aliases cannot.
  - Interfaces may be more performant for the compiler when extending types.

+ **Type Assertions**: Explicitly specify a value’s type when TS cannot infer it.
  - **Syntax**:
    + **Angle-Bracket Syntax**: `<string>someValue`
    + **`as` Syntax**: `document.querySelector('input') as HTMLInputElement;`
  - **Complex Coercion**: Sometimes *type assertions* can be too conservative and will disallow more complex coercions that might be valid. If this happens, you can use two assertions, first to `any` or `unknown`, then to the desired type. You are casting to `any` or `unknown` first because of it allows you to bypass TS’s strict type checking temporarily.

+ **Literal Types**: Exact values of a type, typically from `const` variables. For example `const constantString = "Hello World";` has the literal type *"Hello World"*.
  - **Example**:
    Usage with Functions
    ```typescript
    declare function handleRequest(url: string, method: "GET" | "POST"): void;

    const req = { url: "https://example.com", method: "GET" };
    handleRequest(req.url, req.method); // Will not work because TS thinks of the `method` property is a `string` type.

    const req1 = { url: "https://example.com", method: "GET" as "GET" };
    handleRequest(req1.url, req1.method); // Works

    const req2 = { url: "https://example.com", method: "GET" };
    handleRequest(req2.url, req2.method as "GET"); // Alternative

    const req3 = { url: "https://example.com", method: "GET" } as const;
    handleRequest(req3.url, req3.method); // Works
    ```

+ **Enums (Enumeration)**: TS supports enums.

## Narrowing
+ **Narrowing**: Narrowing is the process of refining a variable's type to a more specific type based on the program's control flow. Methods to achieve narrowing include:
  - **Truthiness Narrowing**
  - **Equality Narrowing**
  - **`in` Operator Narrowing**
  - **`instanceof` Narrowing**
  - **Control Flow Analysis**
  - **Assignments**: TypeScript narrows the left side based on the right side of the assignment.
    + **Example**:
      ```typescript
      let value: string | number;
      value = 42;
      ```
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
    + Ensures all possible cases of a union type are handled. The `never` type is used to catch any unhandled cases, ensuring your code is complete and error-free.
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
      By assigning shape to `_exhaustiveCheck`, TS checks if shape can be assigned to `never`. If shape is of any type other than never, TS will throw a compile-time error.

+ In JavaScript, `typeof null` returns `"object"` (historical quirk).
+ In JS, constructs like `if` first *coerce* their conditions to booleans to make sense of them. Here is the truthy and falsy values:
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
  - **Implementation Signature**: The actual implementation of the function must match one of the overload signatures.

  > ***NOTE**: Prefer union types for parameters over overloads when possible.*

+ In JS, a function’s return type is `undefined`. In TS, it’s `void`.
+ **Untyped Function Call**: Refers to function calls where TS lacks enough information to infer the types of the function’s parameters or return value.
+ **Parameter Destructuring**
  - Type annotation for destructured objects should be placed after the destructuring syntax.
    + **Example**: `function sum({ a, b, c }: { a: number; b: number; c: number }) {}`

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

+ **Option Bags (Options Objects)**: A pattern where a single object with optional properties is passed as a function argument.
  - **Example**: `function createUser({ name, age }: { name: string; age?: number; }) {}`

+ **Extending Types**: Create a superset of an interface by using the `extends` keyword.
+ **Declaration Merging**: TS merges properties from multiple interfaces with the same name into a single interface. Only interfaces and namespaces (or modules) support merging in TS.
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
+ **`typeof`**: is used to get the type of a variable or a property. It can be used with both types and values.
+ **`ReturnType<FunctionName>`**: Extracts the return type of a function type. It is used with types only.

### Indexed Access Types
+ Indexed Access Types in TS allow you to access the type of a property in an object type using an index. This feature is particularly useful for dynamically retrieving the type of a property from a given type.
  - **Example**:
    ```typescript
    interface Person { name: string; }
    type NameType = Person['name'];
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
  type Age = typeof MyArray[number]["age"];
  ```

> ***NOTE**: Indexed Access Types work with types, not values. You cannot use a constant value in place of a type when indexing.*

### Conditional Types
+ Conditional types enable you to define types based on conditions, similar to how conditional statements work in programming.
  - **Syntax**: `SomeType extends OtherType ? TrueType : FalseType`

+ **Using Conditional Types With Generics**
  - **Example**:
    Instead of defining multiple overloads, use conditional types to simplify.
    ```typescript
    interface IdLabel { id: number; }
    interface NameLabel { name: string; }
    type Label<T> = T extends number ? IdLabel : NameLabel;

    function createLabel<T extends number | string>(input: T): Label<T> {
        if (typeof input === "number") {
            return { id: input } as Label<T>;
        } else {
            return { name: input } as Label<T>;
        }
    }
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