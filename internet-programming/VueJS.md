
# VueJS Notes
> ***NOTE**: I am taking notes about the VueJS while studying and I need you to make these notes organized, concise, easy to read and understand. Can you also fix if there are any wrong information?*
> ***NOTE**: Can you summarize this VueJS document? I need you to make these notes organized, concise, easy to read and understand.*

# Bookmark

# Official VueJS Documentation Notes
+ The notes are mainly shaped aroud *Compsition API*, *Single-File Component* and `<script setup>` for this document.

## Getting Started
+ It is a JavaScript UI framework.
+ It enhances HTML, CSS, and JavaScript with:
  - **Declarative Rendering**: Define how the UI should look based on data.
  - **Reactivity**: Automatically updates the UI when data changes.
  - **Reactive State**: State variables that update the UI automatically.

+ VueJS can be used in:
  - Enhance static HTML
  - Embed as Web Components
  - Single-Page Application (SPA)
  - Fullstack / Server-Side Rendering (SSR)
  - JAMstack / Static Site Generation (SSG)
    + **JAMstack**: Stands for JavaScript, APIs, and Markup (static content of your site)
  - Desktop, Mobile, WebGL, and Terminal Applications

+ **Single-File Components (SFC)**: An SFC combines JavaScript (logic), HTML (template), and CSS (style) in one file.
+ Vue components can be authored in two different API styles: Options API and Composition API.
  - **Options API**: Traditional method using data, methods, and lifecycle hooks. It's structure looks like classes in OOP. Also it is implemented on top of the Composition API.
  - **Composition API**: Modern method using functions and `<script setup>` for more flexibility.
    + **`<script setup>`**:
      - The script block is implicitly treated as the setup function's body.
      - Variables and functions declared in it are automatically exposed to the template.
      - You can import and use Composition API functions like `ref`, `reactive` etc.
        + **`reactive`**
          - It only takes object and array values.
          - Cannot be reassigned.
        + **`ref`**
          - Can take both primitive and object values.
          - It calls `reactive` behind the scenes.
          - It has a `.value` property for reassigning.

+ Taken app builds are saved under the *./dist* directory.
+ **Global Build**: It has several meanings depending on the context but in the context of Vue.js and HTML, it refers to importing the global build of Vue.js into your HTML file using a link.

> ***NOTE**: If you want to use global build in an HTML file, you cannot use the Composition API. So you should use Options API.*

+ **Import Maps**: Controls how JS modules are resolved and imported in the browser. It enables you to map module specifiers (like module names) to specific URLs.
+ **ES Modules (ECMAScript Modules)**: A standardized module system in JS that allows you to import and export code.
  - **VueJS Usage In HTML**: Due to security reasons, ES modules can only work over the `http://` protocol. In order for ES modules to work on your local machine, you need to serve the index.html over the `http://` protocol, with a local HTTP server. For example you can use `npx serve` from *node.js*.

## Essentials
+ Every Vue application starts by creating a new application instance with the `createApp` function.
+ Every app requires a "root component" that can contain other components as its children.
+ An application instance won't render anything until its `.mount()` method is called. It expects a container argument (DOM element). It should always be called after all app configurations and asset registrations are done. Its return value is the root component instance.
  - **Asset Registration**: Process of defining and making resources available for use within your application. It's return value is the application instance.
    1. **Global Registration**: Makes components and assets available throughout the app.
    2. **Local Registration**

+ **In-DOM Template**: Defining templates directly in HTML.
+ The application instance exposes a `.config` object that allows us to configure app-level options and methods.
  - **Application Instance APIs**: Set of methods and properties available on the Vue instance created by `Vue.createApp()`.

+ The `createApp` API allows multiple Vue applications to co-exist on the same page.

## Template Syntax
+ It has an HTML based syntax and declaratively describes the structure of your UI.
+ Vue compiles the templates into JavaScript code.
+ **Render Functions**: A lower-level alternative to the template syntax. They are written as JavaScript functions that returns a virtual DOM node.
+ **Mustache Syntax (`{{}}`)**: It is in the form of double curly braces and can be used in text interpolation. Simply returns a plain text. Cannot be used in HTML attributes.
+ **Data Binding**: Synchronizes the data between the model (data) and the view (UI).
+ **Directives**: Special attributes provided by Vue. Reactively applies updates to the DOM. Prefixed with `v-`.
  - **Arguments**: Denoted by a colon after the directive name: `v-bind:href`.
  - **Dynamic Arguments**: Wrapped in square brackets: `v-bind:[attributeName]` and `v-on:[eventName]`.
    + **Value Constraints**: Dynamic arguments are expected to be string or null. The value of null can be used in removing the binding.
    + **Syntax Constraints**: Certain characters, such as spaces and quotes, are invalid. For complex dynamic arguments, use computed property.

  - **`v-html`**: Outputs as HTML. Data bindings are ignored. Its usage can lead to XSS vulnerabilities. You cannot use template partials (Vue components) in it.
  - **`v-bind`**: Connects a data value to an HTML attribute and synchronizes it. If the bound value is `null` or `undefined`, then the attribute will be removed from the rendered element.
    + **Shorthand Syntax**:
    ```
    <div v-bind:id="dynamicId"></div>

    <!-- Shorthand usage. -->
    <div :id="dynamicId"></div>
    ```
    + **Same Name Shorthand**: If the attribute has the same name with the JavaScript value being bound, the syntax can be further shortened:
    ```
    <!-- Same as :id="id" -->
    <div :id></div>
    ```
    + If you have an object, you can bind them without an argument: `v-bind="objectOfAttrs"`.

  - **`v-on`**: Listens the DOM events.
    + **Shorthand**:
    ```
    <a v-on:click="doSomething"> ... </a>

    <!-- Shorthand usage. -->
    <a @click="doSomething"> ... </a>
    ```

  > ***NOTE**: When using in-DOM templates you should not use uppercase characters since browsers will coerce attribute names into lowercase.*

  - **Modifiers**: Special postfixes denoted by a dot, which alter the behavior of the directive.
  - **Full Directive Syntax**:
  ```
  v-on:submit.prevent="onSubmit"

  v-on: Name
  submit: Argument
  .prevent: Modifiers
  onSubmit: Value
  ```
+ Each binding can only contain one JS expression.
+ You can define globals for all Vue expressions by adding them to `app.config.globalProperties`.

## Reactivity Fundementals
+ **Reactive State**: Declare with `ref()`, which returns an object. Access or modify data with `.value` in `<script>`. Direct access in `<template>` is possible.
+ **Reactive Declaration**: Use `<script setup>` to automatically expose variables and functions. Without `<script setup>`, use the `setup()` function for manual exposure.
+ **Dependency Tracking**: Vue tracks dependencies of reactive properties to trigger re-renders. This is managed via getters and setters (tracking in its getter, triggering in its setter).
+ **Ref Types**: `ref` and `reactive` are deeply reactive, tracking nested values. Use `shallowRef` or `shallowReactive` for performance optimization with large objects.
+ **DOM Updates**: DOM updates are not applied synchonously. Updates are batched and applied in the next tick. Use `nextTick()` to wait for DOM updates to complete.
+ **Reactive Objects**: Use `reactive()` for objects, arrays, Maps, and Sets. It returns a Proxy, not the original object.
  - **Example**:
  ```
  const raw = {}
  const proxy = reactive(raw)
  console.log(proxy === raw) // false
  console.log(reactive(raw) === proxy) // true
  ```
+ **Ref Unwrapping**: Automatically extracts the value from a ref object in templates.

## Computed Properties
+ **In-Template Expressions**: Direct JavaScript expressions used in templates for dynamic content.
+ **Computed Properties**
  - Complex in-template expressions can be hard to read. Use the `computed` function to simplify this.
  - `computed()` takes a getter function and returns a computed *ref*, which is automatically updated and cached based on its reactive dependencies. Access computed values with `.value`.
+ **Writable Computed Properties**: By default, computed properties are read-only. To make them writable, provide both a getter and a setter in `computed()`.

## Class and Style Bindings
### Class Bindings
+ Use `v-bind` with class to dynamically bind classes: `v-bind:class` or `:class`.
+ Classes can be conditionally applied using:
  - **Object Syntax**: `{ className: condition }`
  - **Array Syntax**: `[className, { className2: condition }]`
  - **Computed Properties**: `:class="computedClass"`

+ Child elements inherit class names from parent attributes.
+ For components with multiple root elements, specify the target element using `$attrs:` `:class="$attrs.class"`.

### Style Bindings
+ You can bind objects, arrays, or computed properties to the `:style` attribute.
+ Use camelCase for CSS property names, though kebab-case is also supported.
+ **Auto Prefixing**: Vue automatically adds vendor prefixes where necessary. Multiple prefixed values can be provided.
+ **Vendor Prefixes**: They allow developers to use features that might not be fully standardized or supported across all browsers.

### Binding Concepts
+ **Binding**: Connects data and the DOM reactively.
+ **Two-Way Binding**: Syncs a data property with a form input, reflecting changes both ways (from data to input and vice versa).