
# VueJS Notes

# Official VueJS Documentation Notes

## Getting Started
+ **Declarative Rendering**: Define how the UI should look based on data.
+ **Reactivity**: Automatically updates the UI when data changes.
+ **Reactive State**: State variables that update the UI automatically.

+ VueJS can be used in:
  - Enhance static HTML
  - Embed as Web Components
  - Single-Page Application (SPA)
  - Fullstack / Server-Side Rendering (SSR)
  - JAMstack / Static Site Generation (SSG)
    + **JAMstack**: Stands for JavaScript, APIs, and Markup (static content of the website)
  - Desktop, Mobile, WebGL, and Terminal Applications

+ **Single-File Components (SFC)**: An SFC combines JavaScript (logic), HTML (template), and CSS (style) in one file.
+ Vue components can be authored in two different API styles: Options API and Composition API.
  - **Options API**: Traditional method using data, methods, and lifecycle hooks. It's structure looks like classes in OOP. Also it is implemented on top of the Composition API.
  - **Composition API**: Modern method using functions and `<script setup>` for more flexibility.

+ Taken app builds are saved under the *./dist* directory.
+ **VueJS Usage In HTML**
  - If you want to use VueJS global build (deployed version) in an HTML file, you cannot use the Composition API. So you should use Options API.
  - **Import Maps**: Controls how JS modules are resolved and imported in the browser. It enables you to map module specifiers (like module names) to specific URLs.
  - Due to security reasons, ES modules can only work over the `http://` protocol. In order for ES modules to work on your local machine, you need to serve the index.html over the `http://` protocol, with a local HTTP server. For example you can use `npx serve` from *node.js*.
    + **ES Modules (ECMAScript Modules)**: A standardized module system in JS that allows you to import and export code.

## Essentials
+ **Asset Registration**: Process of defining and making resources available for use within your application.
  1. **Global Registration**: Makes components and assets available throughout the app.
  2. **Local Registration**

+ **In-DOM Template**: Defining templates directly in HTML.
+ **Application Instance APIs**: Set of methods and properties available on the Vue instance created by `Vue.createApp()`.

### Template Syntax
+ Vue compiles the templates into JavaScript code.
+ **Render Functions**: A lower-level alternative to the template syntax. They are written as JavaScript functions that returns a virtual DOM node.
+ **Mustache Syntax (`{{}}`)**: It is in the form of double curly braces and can be used in text interpolation. Simply returns a plain text. Cannot be used in HTML attributes.
+ **Data Binding**: Synchronizes the data between the model (data) and the view (UI).
+ **Directives**: Special attributes provided by Vue. Reactively applies updates to the DOM. Prefixed with `v-`.
  - **Arguments**: Denoted by a colon after the directive name: `v-bind:href`.
  - **Dynamic Arguments**: Wrapped in square brackets: `v-bind:[attributeName]` and `v-on:[eventName]`.
    + Dynamic arguments are expected to be string or null. The value of null can be used in removing the binding.
    + For complex dynamic arguments, use *computed property*.

+ `v-html` usage can lead to XSS vulnerabilities. Also you cannot use template partials (Vue components) in it.
+ If the bound value of the `v-bind` is `null` or `undefined`, then the attribute will be removed from the rendered element.
+ **Same Name Shorthand**: If the attribute of the `v-bind` has the same name with the JavaScript value being bound, the syntax can be shortened like this:
  ```
  <!-- Same as :id="id" -->
  <div :id></div>
  ```

> ***NOTE**: When using In-DOM templates you should not use uppercase characters since browsers will coerce attribute names into lowercase.*
+ **Modifiers**: Special postfixes denoted by a dot, which alter the behavior of the directive. For example in the following example the `.prevent` is a modifier: `v-on:submit.prevent`.

### Reactivity Fundementals
+ **Reactive State**: Declare with `ref()`, which returns an object. Access or modify data with `.value` in `<script>`. Direct access in `<template>` is possible.
+ **Reactive Declaration**: Use `<script setup>` to automatically expose variables and functions. Without `<script setup>`, use the `setup()` function for manual exposure.
+ **Dependency Tracking**: Vue tracks dependencies of reactive properties to trigger re-renders. This is managed via getters and setters (*tracking* in its getter, *triggering* in its setter).
+ **DOM Updates**: DOM updates are not applied synchonously. Updates are batched and applied in the next tick.
+ **Ref Unwrapping**: Automatically extracts the value from a ref object in templates.

### Computed Properties
+ **In-Template Expressions**: Direct JavaScript expressions used in templates for dynamic content.
+ **Computed Properties**
  - Complex in-template expressions can be hard to read. Use the `computed` function to simplify this.
  - `computed()` property returns a computed *ref*, which is automatically updated and cached based on its reactive dependencies.

### Class and Style Bindings
+ **Two-Way Binding**: Syncs a data property with a form input, reflecting changes both ways (from data to input and vice versa).

### Conditional Rendering
+ **`v-if`, `v-else-if`, `v-else`**
  - Blocks are created and destroyed based on the condition.
  - More costly for toggling but more efficient for rarely changing conditions.

+ **`v-show`**:
  - The element is always rendered and present in the DOM.
  - Simpler but more costly for initial rendering; better for frequent toggling.

> ***NOTE (`v-if` with `v-for`)**: Avoid using `v-if` and `v-for` on the same element due to precedence issues. When used together, `v-if` is evaluated before `v-for`. That means the `v-if` condition will not have access to variables from the scope of the `v-for`. This can be fixed by moving `v-for` to a outer tag.*

### List Rendering
+ **In-Place Patch**: Updates specific parts of the DOM without re-rendering the entire component.
  1. **Virtual DOM**: Vue creates a new Virtual DOM tree when the state changes and compares it with the previous tree.
  2. **Diffing Algorithm**: Computes the minimal set of changes needed for the real DOM.
  3. **In-Place Patch**: Applies updates only where changes occur, preserving other parts of the DOM.

### Event Handling
+ **Handler Types**
  - **Method Handler**
  - **Inline Handler**

+ **Event Modifiers**
  - Event modifiers are directive postfixes.
  > ***NOTE**: Do not use `.passive` with `.prevent` because `.passive` already indicates to the browser that you do not intend to prevent the event's default behavior, and you will likely see a warning from the browser if you do so.*

+ **Key Modifiers** 
  - Listens keyboard events.
  - **System Modifier Keys**
    + These are the keys like: `.ctrl`, `.alt`, `.shift`, `.meta`
    + **`.exact` Modifier**: The `.exact` modifier allows control of the exact combination of system modifiers needed to trigger an event:

+ **Mouse Button Modifiers**

### Form Input Bindings
> ***NOTE**: For languages with *IME* (e.g., Chinese, Japanese, Korean), `v-model` might not update during composition. Use an input event listener and value binding instead.*

> ***NOTE**: Interpolation within `<textarea>` doesn't work. Use `v-model`.*

> ***NOTE**: If the initial value of your v-model expression does not match any of the options, the `<select>` element will render in an "unselected" state. On iOS this will cause the user not being able to select the first item because iOS does not fire a change event in this case. It is therefore recommended to provide a `disabled` option with an empty value.*j

+ You can use *modifiers* for *form input bindings*.