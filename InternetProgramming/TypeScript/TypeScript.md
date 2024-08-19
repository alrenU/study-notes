# TypeScript
+ (Suggested Book In Official Docs) JavaScript: The Good Parts

# Notes From Offical Documents
<!-- TODO: The higher-kinded types and funktors are functional programming concept. Put them into their related section later. -->
+ **Higher-Kinded Types**: Abstract types that take other types as parameters, originating from functional programming. TS does not directly support HKTs.
  - **Funktor**: A container type in functional programming that supports a map operation.
  - Functors are a specific instance of HKTs, representing a particular pattern where a type constructor is used.

<!-- TODO: The point-free programming is a functional programming concept. Put it into its related section later. -->
+ **Point-Free Programming (Tacit Programming)**: A style where functions are defined by composing other functions without explicitly mentioning their arguments.

<!-- TODO: Put "Call By Value And Call By Reference" into JS notes. -->
+ In JS primitives acts as *call by value* whereas objects and arrays acts as *call by reference*.
<!-- TODO: Put the following note to JS. -->
+ **`const`**: *Reference* is immutable but the *referent* is still mutable.
<!-- TODO: Put "Well-Known Symbols" into JS notes. -->
+ **Well-Known Symbols**: Predefined symbols that allow you to customize and extend the behavior of objects and methods.
<!-- TODO: Put "Generator Functions" into JS notes. -->
+ **Generator Functions (`*`)**: Special type of functions that produce values one at a time. They are useful for handling sequences or streams of data that may be too large to fit into memory all at once.
  - **Example**: `function* myGenerator() { yield 1; yield 2; }`

<!-- TODO: Put "Boxed Types" into JS notes. -->
+ **Boxed Types**: JS has boxed versions of primitives with methods. For example, `(1).toExponential()` is equivalent to `Number.prototype.toExponential.call(1)`.

+ TS is a statically-typed *superset* of JS that adds type annotations to the language. Any valid JS code is also a valid TS code.
+ TS preserves JS's runtime behavior. For example, dividing by zero in JS yields `Infinity`, not an exception. TS maintains this behavior, so existing JS code runs unchanged when converted to TS.
+ The TS compiler converts TS code into JS code for execution.
+ **Type Erasure**: Type annotations and other TS-specific types are removed during compilation to JS.
+ **Type Inference**: Determining the type of a variable based on the assigned value.
+ **Type Safety**: Ensures values are used consistently with their types.
+ In TS, a *type* refers to a way of describing the shape, structure, or nature of data.
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
  - **Object Types**: `object` or `{}`
  - **Array Types**: `number[]` or `Array<number>`
  - **Tupple Types**: Special kind of array that allows you to specify the types of its elements in a fixed-size array.
    + **Example**: `let tuple: [string, number] = ['hello', 42];`
  - **Function Types**: Defines the shape of functions, including their parameters and return type.
    + **Example**: `let add: (a: number, b: number) => number = (x, y) => x + y;`
  - **Union Types**: Allows you to specify multiple types for a value. A value can be of one type or another.
    + **Example**: `let value: string | number = 'hello'; value = 42;`
  - **Intersection Types**: Combines multiple types into one. A value of an intersection type will have all properties of the intersected types.
    + **Example**: `type Employee = Person & Worker;`
  - **Literal Types**: Specifies exact values a variable can hold, rather than a general type.
    + **Example**: `let status: 'success' | 'error' = 'success';`
  - **Type Aliases**: Creates a new name for a type.
    + **Example**: `type ID = string | number;`
  - **Interfaces**: Defines the shape of objects. They are similar to type aliases but are often used for defining object types and can be extended.
    + **Example**: `interface Person { name: string; age: number; }`
  - **Enums**: Defines a set of named constants.
    + **Example**: `enum Direction { Up, Down, Left, Right }`
  - **Generics**: Allows you to create reusable components that can work with any type. They provide a way to pass types as parameters.
    + **Example**: `function identity<T>(arg: T): T { return arg; }`
  - **Mapped Types**: Allows you to create new types by transforming properties of an existing type.
    + **Example**: `Readonly<T>`, `Partial<T>`, `Required<T>`
  - **Conditional Types**: Provides a way to create types based on conditions.
    + **Example**: `type TrueOrFalse<T> = T extends true ? 'yes' : 'no';`
  - **Indexed Access Types**: Allows you to get the type of a property of a type.
    + **Example**: `type NameType = Person['name'];`
  - **Keyof Type Operator**: Returns a union type of the property names of a type.
    + **Example**: `type PersonKeys = keyof Person; // 'name' | 'age'`
  - **Utility Types**: Built-in generic types that provide common type transformations.
    + **Example**: `Pick`, `Omit`, `Record`, `Exclude`, `Extract`, `ReturnType`
  - **Unit Types**: Represent exactly one value.
    + **Example**:
      ```typescript
      declare function pad(s: string, n: number, direction: "left" | "right"): string;
      pad("hi", 10, "left");
      ```
      Here, `direction` is a union type (`"left" | "right"`). Using a variable like this:
      ```typescript
      let s = "right";
      pad("hi", 10, s); // error
      ```
      results in an error because `s` is a string, not the specific union type. To fix this:
      ```typescript
      let s: "left" | "right" = "right";
      pad("hi", 10, s); // works
      ```

+ **`declare` Keyword**: It informs TS of an entity's existence (such as a function, variable, class, or module) without providing an implementation.
<!-- TODO: Put the following section to its related section (probably classes). -->
+ Using `public` in `constructor` parameters creates properties automatically.
  - **Example**: `constructor(public firstName: string) {}`

+ **Type Parameters**: Placeholders for types in functions, classes, or interfaces.
  - **Example**: `T` is a type parameter: `class Box<T>{}`.
  - Type parameters are conventionally single uppercase letters.

+ **Readonly Modifiers**: Makes properties immutable. Includes `readonly` for individual properties, `Readonly<T>` for all properties, and `ReadonlyArray<T>` for immutable arrays.
+ **`const` Assertion**: `let a = [1, 2, 3] as const;`
+ **Type Guards**: Allows you to narrow down the type of a variable within a conditional block. Here’s a list of common type guards: `typeof`, `instanceof`, `in`, `Array.isArray()`, `null`, `undefined`.

<!-- Bookmark -->
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