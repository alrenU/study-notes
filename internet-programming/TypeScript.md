# TypeScript
# Notes From Offical Documents
+ **TypeScript (TS)**: A statically-typed *superset* of JavaScript (JS) that adds type annotations to the language.
  - **Superset (In Programming)**: A language that extends another language by adding new features while maintaining full compatibility with the original language.
+ Since TS is a superset of JS, any valid JS code is also valid TS code.

+ **Runtime Behavior**: TS preserves the runtime behavior of JS. For instance, dividing by zero in JS results in `Infinity` rather than throwing an exception. TS does not alter this behavior, so existing JS code will run the same way when converted to TS.
+ **Compilation**: The TS compiler converts TS code into JS code for execution.
+ **Type Erasure**: Type annotations and other TS-specific types are removed during compilation. The resulting JS code does not include TS types.
+ **Libraries and Frameworks**: TS does not include additional runtime libraries. It uses the same standard library and external libraries as JS. There are no TS-specific frameworks to learn.

+ **Types by Inference**: Since TS understands JS, it can infer the assigned value types.
+ *Visual Studio Code* uses TS under the hood to make it easier to work with JS.
+ **Primitive Types**: `boolean`, `bigint`, `null`, `number`, `string`, `symbol`, and `undefined` is already available in JS and TS adds a few more to these primitive types: `unknown`, `never` and `void`.
  - `undefined` is its own type, while `null` is considered an object type (though this is largely a historical quirk in JavaScript).
  - Both `null` and `undefined` are falsy values, but they are not the same: `null == undefined` is true in loose equality but `null === undefined` is false in strict equality.

+ **Well-Known Symbols**: Refer to a set of predefined symbols that are built into the language and are used for various internal operations and meta-programming tasks.

+ **Composing Types**
  - In TS you can combine simple types to create complex types. You can do this by using *unions* or *generics*.
  - **Unions**