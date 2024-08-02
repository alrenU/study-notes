# TypeScript
# Notes From Offical Documents
+ **TypeScript (TS)**: A statically-typed *superset* of JavaScript (JS) that adds type annotations to the language.
+ TS is a superset of JS, meaning any valid JS code is also valid TS code.
  - **Superset (In Programming)**: A language that extends another language by adding new features while maintaining full compatibility with the original language

+ **Runtime Behavior**: TS preserves the runtime behavior of JS. For instance, dividing by zero in JS results in `Infinity` rather than throwing an exception. TS does not alter this behavior, so existing JS code will run the same way when converted to TS.
+ **Compilation**: TS compiles to plain JS. The TypeScript compiler converts TS code into JS code for execution.
+ **Type Erasure**: Type annotations and other TypeScript-specific types are removed during compilation. The resulting JS code does not include TypeScript types.
+ **Libraries and Frameworks**: TS does not include additional runtime libraries. It uses the same standard library and external libraries as JS. There are no TypeScript-specific frameworks to learn.