
# VueJS Notes
# Bookmark

# Official VueJS Documentation Notes
## Getting Started
+ Vue.js is a JavaScript framework for building user interfaces.
+ It enhances HTML, CSS, and JavaScript with:
  - **Declarative Rendering**: Define how the UI should look based on data.
  - **Reactivity**: Automatically updates the UI when data changes.
  - **Reactive State**: State variables that update the UI automatically.

+ VueJS can be used in:
  - Enhance static HTML
  - Embed as Web Components
  - Single-Page Application (SPA)
  - Fullstack / Server-Side Rendering (SSR)
  - Jamstack / Static Site Generation (SSG)
  - Desktop, Mobile, WebGL, and Terminal Applications

+ **Single-File Components (SFC)**: An SFC combines JavaScript (logic), HTML (template), and CSS (style) in one file.

+ Vue components can be authored in two different API styles: Options API and Composition API.
  - **Options API**: Traditional method using data, methods, and lifecycle hooks. It's structure looks like classes in OOP. Also it is implemented on top of the Composition API.
  - **Composition API**: Modern method using functions and `<script setup>` for more flexibility.
    + **`<script setup>`**:
      - The script block is implicitly treated as the setup function's body.
      - Variables and functions declared in it are automatically exposed to the template.
      - You can directly import and use Vue’s Composition API functions like `ref`, `reactive` etc.
        + **`ref`**
          - Can take both primitive and object values.
          - It calls `reactive` behind the scenes.
          - It has a `.value` property for reassigning.
        + **`reactive`**
          - It only takes object and array values.
          - Cannot be reassigned.

+ Taken app builds are saved under the "./dist" directory.
+ **Global Build**: It has several meanings depending on the context but in the context of Vue.js and HTML, it refers to importing the global build of Vue.js into your HTML file using a link.

***NOTE**: If you want to use global build in an HTML file you cannot use the Composition API. So you should use Options API.*

+ **Import Maps**: Allows you to control how JavaScript modules are resolved and imported in the browser. Import maps enable you to map module specifiers (like module names) to specific URLs.
+ **ES Modules**: ES Modules (ECMAScript Modules) are a standardized module system in JavaScript that allows you to import and export code.
  - **VueJS Usage In HTML**: Due to security reasons, ES modules can only work over the `http://` protocol. In order for ES modules to work on your local machine, you need to serve the index.html over the `http://` protocol, with a local HTTP server. To do that you can use `npx serve` (node.js).

## Essentials
+ Every Vue application starts by creating a new application instance with the `createApp` function.
+ Every app requires a "root component" that can contain other components as its children.
+ An application instance won't render anything until its `.mount()` method is called. It expects a container argument (DOM element).

+ The `.mount()` method should always be called after all app configurations and asset registrations are done. Its return value, unlike the asset registration methods, is the root component instance instead of the application instance.
  - **Asset Registration**: Techniques or mechanisms used to register and manage various assets within a Vue application.
    1. **Global Registration**: Makes components and assets available throughout the app.
    2. **Local Registration**

+ **In-DOM Template**: Defining templates directly in HTML.
+ The application instance exposes a `.config` object that allows us to configure a few app-level options and methods for registering app-scoped assets.
  - **Application Instance APIs**: Refers to the set of methods and properties available on the Vue instance created by `Vue.createApp()`.

+ The `createApp` API allows multiple Vue applications to co-exist on the same page, each with its own scope for configuration and global assets.

## Template Syntax
+ It has an HTML based template syntax and declaratively describes the structure of your UI.
+ Binds the rendered DOM to the underlying component instance's data.
+ Vue compiles the templates into JavaScript code with the reactivity system.
+ It is also possible to directly write render functions instead of templates.
  - **Render Functions**: A lower-level alternative to the template syntax (JavaScript function that returns a virtual DOM node) for creating and rendering Vue components.

+ **Mustache Syntax**: It syntax is in the form of double curly braces and can be used in text interpolation. It simply returns a plain text. Cannot be used in HTML attributes.
+ **Data Binding**: Synchronizes the data between the model (data) and the view (UI).
+ **Directives**: They are special attributes provided by Vue. It's job is to reactively apply updates to the DOM. Prefixed with `v-`.
  - **Arguments**: Denoted by a colon after the directive name: `v-bind:href`.
  - **Dynamic Arguments**: Dynamic arguments are wrapped in square brackets: `v-bind:[attributeName]` and `v-on:[eventName]`.
    + **Value Constraints**: The value of the dynamic arguments are expected to be string or null. The value of null can be used in removing the binding.
    + **Syntax Constraints**: Certain characters, such as spaces and quotes, are invalid. For complex dynamic arguments, use computed property.
  - **`v-html`**: Outputs as HTML. Data bindings are ignored. This directive can be dangerous because it can lead to XSS vulnerabilities. Also you cannot use template partials (Vue components) in it.
  - **`v-bind`**: Connects a data value to an HTML attribute and synchronizes it. If the bound value is `null` or `undefined`, then the attribute will be removed from the rendered element.
    + **Shorthand Syntax**:
    ```
    <!-- Normal usage. -->
    <div v-bind:id="dynamicId"></div>

    <!-- Shorthand usage. -->
    <div :id="dynamicId"></div>
    ```
    + **Same Name Shorthand**: If the attribute has the same name with the JavaScript value being bound, the syntax can be further shortened:
    ```
    <!-- Same as :id="id" -->
    <div :id></div>
    ```
    + If you have an object you can bind them without an argument: `<div v-bind="objectOfAttrs"></div>`.
  - **`v-on`**: Listens the DOM events.
    + **Shorthand**:
    ```
    <a v-on:click="doSomething"> ... </a>

    <!-- Shorthand. -->
    <a @click="doSomething"> ... </a>
    ```
  - When using in-DOM templates you should not use uppercase characters since browsers will coerce attribute names into lowercase.
  - **Modifiers**: Special postfixes denoted by a dot, which alter the behavior of the directive.
  - **Full Directive Syntax**:
  ```
  v-on:submit.prevent="onSubmit"

  v-on: Name
  submit: Argument
  .prevent: Modifiers
  onSubmit: Value
  ```

+ Each binding can only contain one single JS expression.
+ You can define globals for all Vue expressions by adding them to `app.config.globalProperties`.

## Reactivity Fundementals