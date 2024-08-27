# TypeScript
- (Suggested Book In Official Docs) JavaScript: The Good Parts

# Bookmark
- Official Documentation: [https://www.typescriptlang.org/docs/handbook/2/mapped-types.html]

# Out Of Scope Notes
<!-- TODO-START: Put below notes to their related functional programming sections. -->
- **Higher-Kinded Types (HKTs)**: Abstract types that take other types as parameters, originating from functional programming.
  - **Funktor**: A container type in functional programming that supports a map operation. Functors are a specific instance of HKTs, representing a particular pattern where a type constructor is used.

- **Point-Free Programming (Tacit Programming)**: A style where functions are defined by composing other functions without explicitly mentioning their arguments.
<!-- TODO-END -->

<!-- TODO-START: Put below notes into JS notes. -->
- **Call By Reference and Call By Value**
  - *Primitives* act as *call by value*.
  - *Objects and arrays* act as *call by reference*.

- **`const`**
  - *Reference* is immutable
  - *Referent* is mutable.

- **Boxed Types**: JS primitives have boxed versions with methods.
  - **Example**: `(1).toExponential()` is equivalent to `Number.prototype.toExponential.call(1)`.

- **Well-Known Symbols**: Predefined symbols for customizing and extending object behavior
- **Dynamic Typing** Variables can hold values of any type and their type can change at runtime.
- **Anonymous Functions**: Functions without names, often used as arguments in other functions.

- Truthy and Falsy Values
  - **Falsy**: `0`, `NaN`, `""` (empty string), `0n` (bigint zero), `null`, `undefined`
  - **Truthy**: All other values.

- **Generator Functions (`*`)**: Produce values one at a time. Useful for handling sequences or large data streams.
  - **Example**: `function* myGenerator() { yield 1; yield 2; }`
<!-- TODO-END -->

# Notes From Offical Documentation
- **TypeScript (TS)**: A statically-typed *superset* of JavaScript (JS) that adds type annotations. Valid JS code is also valid TS code.
- **Runtime Behavior**: TS preserves JS's runtime behavior.
- **`tsc`**: TS compiler that converts TS code to JS code.
- **Type Erasure**: TS-specific types are removed during compilation to JS.
- **Type Inference**: Determines variable types based on assigned values.
- **Type Safety**: Ensures values are used consistently with their types.
- **Type**: Describes the shape, structure, or nature of data in TS.
- **Non-Exception Failures**: Errors or issues that do not trigger exceptions but cause incorrect or unexpected behavior.

<!-- TODO: Put the following section to its related section (probably classes). -->
- Using `public` in `constructor` parameters creates properties automatically.
  - **Example**: `constructor(public firstName: string) {}`

- **Types**
  - **Basic Types**
    - `boolean`, `bigint`, `number`, `string`, `symbol`, `undefined`, `null`
    - **`undefined` vs. `null`**
      - Both are their own types in TS. In JS, `null` is considered an object due to historical reasons.
      - `null == undefined` is `true` (loose equality).
      - `null === undefined` is `false` (strict equality).

  - **Special Types**
    - **`any`**: Represents any type without type safety. Defaults when TS can’t infer a type.
    - **`unknown`**: A safer alternative to `any`, requires type checking before use.
    - **`never`**: Represents values that never occur, used for functions that never return or throw errors.
    - **`void`**: Represents the absence of any type, used for functions that do not return a value.
    
  - **Object Types**: `object` or `{}`
  - **Array Types**: `number[]` or `Array<number>`

  - **Tuple Types**
    - Fixed-size arrays with specified element types.
    - Optional elements can only be at the end and affect the tuple's length type.
    - **Example**: `let tuple: [string, number] = ['hello', 42];`

  - **Function Types**: Defines function shapes, including parameters and return types.
    - **Example**: `let add: (a: number, b: number) => number = (x, y) => x - y;`

  - **Union Types (`|`)**: Allows a value to be one of several types.
    - **Example**: `let value: string | number = 'hello'; value = 42;`
    - **Untagged Unions**: No runtime information for distinguishing types.
    - **Discriminated Unions (Tagged Unions)**: Each type in the union has a common property.

  - **Intersection Types**: Combines multiple types into one, including all properties of intersected types.
    - **Example**: `type Employee = Person & Worker;`

  - **Literal Types**: Specifies exact values a variable can hold.
    - **Example**: `let status: 'success' | 'error' = 'success';`

  - **Enums**: Defines a set of named constants.
    - **Example**: `enum Direction { Up, Down, Left, Right }`

  - **Generics**: Allows creation of reusable components that work with any type.
    - **Example**: `function identity<T>(arg: T): T { return arg; }`
    - You can create generic interface and class but it is not possible to create generic enums and namespaces.
    - You can provide default values for generic types.
    - You can use constructors to create instances of generic types.
      - **Example**: `function create<Type>(c: { new (): Type }): Type { return new c(); }`
    - **Generic Functions**: A generic function is a function that can operate on different types without being explicitly tied to one.
      - **Example**: `function identity<Type>(arg: Type): Type {}`
      - **Type Parameter**: It is a placeholder for a type specified when defining a generic type or function (e.g., `Type` in `identity<Type>`).
      - **Constraints**
        - Restrictions on generic type parameters to ensure they adhere to a specific structure or interface.
        - **Example**: `function logLength<T extends { length: number }>(arg: T): T {}`

- **TypeScript Type Constructs or Features**
  - **Type Aliases**: Creates a new name for a type.
    - **Example**: `type ID = string | number;`

  - **Interfaces**: Defines the shape of objects, similar to type aliases but often used for object types and can be extended.
    - **Example**: `interface Person { name: string; age: number; }`
    - **`extends` Keyword**: Creates a superset of an interface.

  - **Mapped Types**: Creates new types by transforming properties of an existing type.
    - **Examples**: `Readonly<T>`, `Partial<T>`, `Required<T>`

  - **Conditional Types**: Creates types based on conditions.
    - **Example**: `type TrueOrFalse<T> = T extends true ? 'yes' : 'no';`

  - **Indexed Access Types**: Gets the type of a property of a type.
    - **Example**: `type NameType = Person['name'];`

  - **Keyof Type Operator**: Returns a union type of the property names of a type.
    - **Example**: `type PersonKeys = keyof Person; // 'name' | 'age'`

  - **Utility Types**: Built-in generic types for common type transformations.
    - **Examples**: `Pick`, `Omit`, `Record`, `Exclude`, `Extract`, `ReturnType`

  - **Unit Types**: Represent exactly one value.
    - **Example**:
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

- **`const` Assertion**: `let a = [1, 2, 3] as const;`
- **Type Guards**: Narrow down the type of a variable within a conditional block. Common type guards: `typeof`, `instanceof`, `in`, `Array.isArray()`, `null`, `undefined`.
- **Downleveling**: Converting modern ECMAScript features into older versions for compatibility with older JS environments.

- **Enhancing Strictness with `tsconfig.json`**
- **`noImplicitAny`**: Requires explicit types for all variables.
- **`strictNullChecks`**: Mandates explicit handling of `null` and `undefined` values.
- **`noEmitOnError`**: Prevents JS file generation if there are compilation errors.

- **Type Parameters**: Placeholders for types in functions, classes, or interfaces. Conventionally single uppercase letters.
  - **Example**: `class Box<T> {}` where `T` is a type parameter.

- **Readonly Modifiers**
  - **`readonly`**: Makes individual properties immutable.
  - **`Readonly<T>`**: Makes all properties of type `T` immutable.
  - **`ReadonlyArray<T>`**: Makes arrays immutable.

- **`declare` Keyword**: Informs TS of an entity's existence (function, variable, class, or module) without implementation.
  - **Example**: `declare function globalFunction(message: string): void;`

- **Contextual Typing**: Infers the type of a value based on how and where it’s used.
- **Type Aliases**: Creates a new name for a type.
- **Structural Typing (Duck Typing)**: Objects with the same shape are considered the same type.

- **Type Aliases vs. Interfaces**
  - Interfaces can be extended with new properties; type aliases cannot.
  - Interfaces may be more performant for the compiler when extending types.

- **Type Annotations**: Explicitly specify types for variables, function parameters, and return values.
  - **Example**: `let num: number = 42;`
  - **Return Type Annotation**: Specifies the return type of a function.

- **Optional Properties (`?`)**: Checks for `undefined` of an object's property.
  - **Example**: `interface User { email?: string; }`

- **Non-null Assertion Operator (`!`)**: Asserts that a value is not `null` or `undefined`.
  - **Example**: `value!.length`

- **Double-Boolean Negation (`!!`)**: Converts a value to a boolean.
  - **Example**: `const isTruthy = !!value;`

- **Type Assertions**: Explicitly specify a value’s type when TypeScript cannot infer it.
  - **Syntax**:
    - **Angle-Bracket Syntax**: `<string>someValue`
    - **`as` Syntax**: `document.querySelector('input') as HTMLInputElement;`
  - **Complex Coercion**: Use two assertions if needed: first to `any` or `unknown`, then to the desired type. This allows bypassing TS's strict type checking temporarily.

- **Type Predicates**: User-defined type guards.
  - **Syntax**: `parameterName is Type`
  - **Example**:
    ```typescript
    function isFish(pet: Fish | Bird): pet is Fish {
      return (pet as Fish).swim !== undefined;
    }
    ```

- **Exhaustiveness Checking**: Ensures all possible cases of a union type are handled. The `never` type is used to catch any unhandled cases, ensuring your code is complete and error-free.
  - **Example**:
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

- **Narrowing**: Narrowing is the process of refining a variable's type to a more specific type based on the program's control flow.

- **Function Type Expressions**: Specifies the types of a function’s parameters and return value without implementing the function.
  - **Example**: `type GreetFunction = (name: string) => string;`

- **Call Signature**: Defines the type of a function within an object type or interface.
  - **Example**: `interface MathOperation { (a: number, b: number): number; }`

- Functions can have properties since they are considered *objects*.
- You can use constructors and call functions with the `new` operator.

- **Function Overloads**: Allows defining multiple versions of a function with the same name but different parameter types or numbers.
  - **Overload Signature**: Multiple signatures for a function, each with a different set of parameters and return types.
  - **Implementation Signature**: The function's implementation must match one of the overload signatures.

> ***NOTE**: Prefer union types for parameters over overloads when possible.*

- In TS, a function’s return type is `void`.
- **Untyped Function Call**: Occurs when TS can't infer the types of a function’s parameters or return value.

- **Parameter Destructuring**: Type annotations for destructured objects should be placed after the destructuring syntax.
  - **Example**: `function sum({ a, b, c }: { a: number; b: number; c: number }) {}`

- **Index Signatures**: Define types for values accessed with dynamic keys. Useful for enforcing type constraints on values with unknown keys.
  - **Example**:
    ```typescript
    interface StringNumberMap { [key: string]: number; }
    const example: StringNumberMap = { age: 25, year: 2024 };
    ```

- **Excess Property Checking**: TS ensures object literals only have properties defined in their type. Extra properties produce an error.
  - **Example**:
    ```typescript
    interface Person { name: string; age: number; }
    const person: Person = {
      name: "Alice",
      age: 30,
      // address: "123 Main St" // Error
    };
    ```

- **Option Bags (Options Objects)**: Pass a single object with optional properties as a function argument.
  - **Example**: `function createUser({ name, age }: { name: string; age?: number; }) {}`

- **Declaration Merging**: TS merges properties from multiple interfaces with the same name into one. Applicable only for interfaces and namespaces.
  - **Example**:
    ```typescript
    interface Person { name: string; }
    interface Person { age: number; }
    const person: Person = { name: "Alice", age: 30 }; // Merged result
    ```

- **Convention-Based APIs**: Use standard rules and patterns for consistent and predictable data or function structure.

- **`keyof` Type Operator**
  - Gets a union type of the keys of an object type.
  - **Example**:
    ```typescript
    type Person = { name: string; age: number; };
    type PersonKeys = keyof Person; // 'name' | 'age'
    ```

- **`typeof` Type Operator**
  - Gets the type of a variable or property, useful with types and values.
  - **`ReturnType<FunctionName>`**: Extracts the return type of a function type.

<!-- Bookmark -->
### Indexed Access Types
- Indexed Access Types in TS allow you to access the type of a property in an object type using an index. This feature is particularly useful for dynamically retrieving the type of a property from a given type.
  - **Example**:
    ```typescript
    interface Person { name: string; }
    type NameType = Person['name'];
    ```

- Indexed Access Types can also be used with *index signatures*.
  - **Example**:
    ```typescript
    interface Dictionary { [key: string]: number; }
    type ValueType = Dictionary[string]; // ValueType is inferred as number
    ```

- **Example**:
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
- Conditional types enable you to define types based on conditions, similar to how conditional statements work in programming.
  - **Syntax**: `SomeType extends OtherType ? TrueType : FalseType`

- **Using Conditional Types With Generics**
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

- **Inferring Within Conditional Types**
  - **Inferring Types**
    - You can use `infer` to deduce types within conditional types.
    - **Example**:
      ```typescript
      type Flatten<Type> = Type extends Array<infer Item> ? Item : Type;

      type Str = Flatten<string[]>; // string
      type Num = Flatten<number>; // number
      ```

- **Distributive Conditional Types**
  - **Distributivity**:
    - Conditional types can be applied to each member of a union type separately.
    - **Example**:
      ```typescript
      type ToArray<Type> = Type extends any ? Type[] : never;
      type StrArrOrNumArr = ToArray<string | number>; // string[] | number[]
      ```
  - **Non-Distributive Conditional Types**
    - To avoid distributing across union types, wrap the type in square brackets.
    - **Example**:
      ```typescript
      type ToArrayNonDist<Type> = [Type] extends [any] ? Type[] : never;
      type ArrOfStrOrNum = ToArrayNonDist<string | number>; // (string | number)[]
      ```

# Unordered Notes From Official Documentation