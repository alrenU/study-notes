# TypeScript
+ (Suggested Book In Official Docs) JavaScript: The Good Parts

# Notes From Offical Documents
+ **TypeScript (TS)**: A statically-typed *superset* of JavaScript (JS) that adds type annotations to the language.
  - **Superset (In Programming)**: A language that extends another language by adding new features while maintaining full compatibility with the original language.
+ Since TS is a superset of JS, any valid JS code is also valid TS code.

+ **Runtime Behavior**: TS preserves the runtime behavior of JS. For instance, dividing by zero in JS results in `Infinity` rather than throwing an exception. TS does not alter this behavior, so existing JS code will run the same way when converted to TS.
+ **Compilation**: The TS compiler converts TS code into JS code for execution.
+ **Type Erasure**: Type annotations and other TS-specific types are removed during compilation. The resulting JS code does not include TS types.
+ **Libraries and Frameworks**: TS does not include additional runtime libraries. It uses the same standard library and external libraries as JS. There are no TS-specific frameworks to learn.

<!-- TS for JS Programmers -->
+ **Types by Inference**: TypeScript can automatically figure out the type of a variable based on the value you assign to it.
+ *Visual Studio Code* uses TypeScript behind the scenes to make working with JavaScript easier.
+ **Well-Known Symbols**: These are special symbols built into the language for internal and meta-programming purposes.
+ **Composing Types**: In TS you can combine simple types to create complex types. You can do this by using *unions* or *generics*.
  - **Unions (`|`)**: Allows a value to be one of several types. For example, `number | string` means the value can be either a `number` or a `string`.
  - **Generics**: Let you create functions and classes that work with any type while keeping track of that type.
    + A generic function example:
      ```
      function getItem<Type>(item: Type): Type {
        return item;
      }
      ```

+ **Structural Type System**: TypeScript checks if objects have the right shape. This is sometimes called *duck typing* or *structural typing*. In a structural type system, if two objects have the same shape, they are considered to be of the same type.
  - + **Duck Typing**: If an object has the right properties and methods, it’s considered correct for a particular use, no matter its actual type or class. The term comes from the saying: "If it looks like a duck, swims like a duck, and quacks like a duck, then it probably is a duck.".
  - **Example**: The `point` variable is never declared to be a `Point` type. However, TypeScript compares the shape of point to the shape of Point in the type-check. They have the same shape. The shape-matching only requires a subset of the object’s fields to match.
    ```
    interface Point {
      x: number;
      y: number;
    }

    function logPoint(p: Point) {
      console.log(`${p.x}, ${p.y}`);
    }

    const point = { x: 12, y: 26 };
    logPoint(point); // Works fine

    const point1 = { x: 12, y: 26, z: 89 };
    logPoint(point1); // Also works, even with extra property
    ```

<!-- TS For Functional Programmers -->
+ **Call By Value**: A copy of the actual argument’s value is passed to the function. The function works with this copy, not the original value.
  - **Primitive Values**: The function gets a copy of the value, so changes inside the function do not affect the original.
  - **References (Objects or Arrays)**: The function gets a copy of the reference, so changes to the object's properties affect the original object.

+ **Primitive Types**: TypeScript adds a few extra primitive types to JavaScript's built-in types.
  - **JavaScript Types**: `boolean`, `bigint`, `number`, `string`, `symbol`, `undefined`, `null`
  - **TypeScript Adds**:
    + **`unknown`**: Represents any value but needs type checking before use.
    + **`never`**: Represents values that don’t exist, like functions that throw errors or never return.
    + **`void`**: Used for functions that don’t return a value.
    + **Object Literal**: `{ property: Type }`
    + **Mutable Arrays**: `T[]` also written as `Array<T>`
    + **Tuples**: `[T, T]` fixed length but mutable
    + **Functions**: `(t: T) => U`
      - Function syntax includes parameter names:
        ```
        let fst: (a: any, b: any) => any = (a, b) => a;
        let fst1: <T, U>(a: T, b: U) => T = (a, b) => a;
        ```
    
  - `undefined` is its own type, while `null` is an object type due to a historical reason but is treated as its own type in TS.
  - `null` and `undefined` are both falsy but behave differently:
    + `null == undefined` is true (loose equality)
    + `null === undefined` is false (strict equality)

+ **Boxed Types**: JS has boxed equivalents of primitive types that contain the methods that programmers associate with those types. For example `(1).toExponential();` is equivalent to `Number.prototype.toExponential.call(1);`.

+ **`any`**: TypeScript uses the type `any` whenever it can’t tell what the type of an expression should be. Compared to Dynamic, calling `any` a type is an overstatement. It just turns off the type checker wherever it appears. `any` is contagious, too — if you initialize a variable with an expression of type any, the variable has type any too.

+ **Untagged Unions**: Being *untagged* means TS does not insert any runtime information to distinguish between these types.
  - **Example**:
    ```
    function process(value: string | number) {
      if (typeof value === "string") {
          console.log("String value:", value);
      } else {
          console.log("Number value:", value);
      }
    }
    ```
+ **Discriminated Unions (Tagged Unions)**: Each type in the union has a common property (tag) that helps differentiate between them at runtime.
  - **Example**:
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

+ **Intersections**: Way to combine multiple types into one. The resulting type will have all the properties and methods of the intersected types. You can combine *types*, *intersections*, *classes* and *functions*.
  - **Example**:
    ```
    interface InterfaceA { a: string; }
    interface InterfaceB { b: number; }
    type Combined = InterfaceA & InterfaceB;
    ```

+ **Unit Types**: Unit types are a special kind of type that contains exactly one specific value. TS often uses unions of these unit types (like `"left" | "right"`) to simulate *enums* in JS.
  - Example:
    ```
    declare function pad(s: string, n: number, direction: "left" | "right"): string;
    pad("hi", 10, "left");
    ```
    In this function, direction is a union type of "left" and "right", meaning it can only be one of these two string literals. The issue arises when you try to use a variable instead of a literal:
    ```
    let s = "right";
    pad("hi", 10, s); // error
    ```
    Here, `s` is of type string (because `"right"` gets widened to string when assigned to `s`). Since string is not the same as the union type `"left" | "right"`, TS gives an error. To fix this, you can explicitly declare s with the union type:
    ```
    let s: "left" | "right" = "right";
    pad("hi", 10, s); // works
    ```

+ TypeScript can automatically figure out the types of variables and functions in several ways. For example:
  - When you use a function like map, TypeScript can infer the types of its inputs and outputs even if you don’t specify them. For instance, if map is used with an array of numbers and a function that converts numbers to strings, TypeScript figures out that the result is an array of strings.
  - TypeScript can also figure out types from the context of functions and objects. For example, if you have a function that modifies an object, TypeScript will determine the type of that object based on the function’s usage.

  > ***NOTE**: Inference will work in any order, but intellisense will only work left-to-right.*

+ **Type Aliases**: Allow you to create a new name for an existing type.
  - Type aliases can represent complex types like unions, intersections, and tuples.
  - **Type Aliases vs. Interfaces**: Type aliases are more flexible and can also represent *union* and *intersection* types. Interfaces are generally preferred for object shapes, especially when you need to extend or implement them.

+ **Tagged Intersection**: Tagged intersections are a way to combine different types of data in TypeScript, where each type has a special tag (a label) to help identify what kind of data it is.
  - **How Does It Work?**
    1. **Tagged Types**: First, you create types that have a common property to distinguish between different kinds of data. For example, you might have a type for different shapes, each with a tag to indicate whether it’s a circle, rectangle, or triangle.
    2. **Adding Extra Properties**: Adding Extra Properties: Then, you can create new types by combining these tagged types with extra properties. For example, you might want a type for shapes that also have a color or a label.

+ **Type Parameters**: Type parameters are like placeholders for types. When you define a function, class, or interface with type parameters, you can use those placeholders to represent any type.
  - Type parameters are conventionally single uppercase letters.
  - Type parameters should only be used to propagate type information, such as constraining parameters to be the same type.
  - **Example**:
    ```
    function identity<T>(value: T): T { return value; }
    ```
    T is a type parameter. It’s a placeholder for a type that you will specify later. You can use type parameters in classes too:
    ```
    class Box<T>{}
    new Box<number>()
    ```

+ **Higher-kinded Types**: Abstract types that can take other types as parameters.
  - **Funktor**: A functor is a type that can be mapped over.
  - **Relationship Between HKTs and Functors**: Functors are an example of higher-kinded types. They are a specific use case of HKTs where the type constructor. HKTs are a broader concept that encompasses various type patterns and abstractions, including functors.

+ **Point-Free Programming**