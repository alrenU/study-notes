# Bookmark



# Official VueJS Documentation Notes
## Getting Started
+ It is a JavaScript framework.
+ It builds on top of standard HTML, CSS, and JavaScript.
+ **Declarative Rendering:** Refers to a way of describing how the UI should look based on the state of the application. Instead of manually manipulating the DOM, you use Vue’s template syntax to declare what the UI should look like based on the underlying data.
+ **Reactivity:** The mechanism that allows the framework to detect when data used on the page is changed (mutated), and to update the page optimally to reflect these changes.
+ **Reactive State:** The concept of creating state variables that automatically update the user interface (UI) whenever their values change.

+ How you can use VueJS:
  - Enhancing static HTML
  - Embedding as Web Components
  - Single-Page Application (SPA)
  - Fullstack / Server-Side Rendering (SSR)
  - Jamstack / Static Site Generation (SSG)
  - Targeting desktop, mobile, WebGL and terminal.

+ **Single-File Components (SFC):** It encapsulates the structure, style, and behavior of a Vue component in a single file. Structure of a SFC file consist of the logic (JavaScript), template (HTML) and styles (CSS).

+ Vue components can be authored in two different API styles: Options API and Composition API.
  - The Options API is implemented on top of the Composition API.
  - **Options API:** It is a traditional way of defining Vue components and uses an object of options such as `data`, `methods`, and `mounted`. It looks like classes in OOP.
  - **Composition API:** It composes behavior using functions and typically used with `<script setup>` and more free-form compared to the Options API.
    + **`<script setup>`**:
      - The script block is implicitly treated as the setup function's body.
      - You can directly import and use Vue’s Composition API functions like `ref`, `reactive` etc.
      - Variables and functions declared in it are automatically exposed to the template.

+ Taken builds are saved under the "./dist" directory.
+ **Global Build:** A version of the software or application that is meant to be distributed. In the context of JavaScript libraries or frameworks a version of the library that is designed to be included in web pages via a global variable.

***NOTE:** If you want to use global build in an HTML file you cannot use the Composition API. So you should use Options API.*

+ **Import Maps:** Allows you to control how JavaScript modules are resolved and imported in the browser. Import maps enable you to map module specifiers (like module names) to specific URLs.
+ **ES Modules:** ES Modules (ECMAScript Modules) are a standardized module system in JavaScript that allows you to import and export code.
  - (Using VueJS in HTML Files) Due to security reasons, ES modules can only work over the `http://` protocol. In order for ES modules to work on our local machine, we need to serve the index.html over the `http://` protocol, with a local HTTP server. To do that we can use `npx serve` (node.js).

## Essentials
+ Every Vue application starts by creating a new application instance with the `createApp` function.
+ Every app requires a "root component" that can contain other components as its children.
+ An application instance won't render anything until its `.mount()` method is called. It expects a "container" argument (DOM element or a selector string).

+ The `.mount()` method should always be called after all app configurations and asset registrations are done. Its return value, unlike the asset registration methods, is the root component instance instead of the application instance.
  - **Asset Registration:** Techniques or mechanisms used to register and manage various assets within a Vue application. These assets ensures that they are available where needed.
    1. **Global Registration:** Makes components, directives, and other assets available throughout your entire Vue application.
    2. **Local Registration**

+ **In-DOM Template:** Refers to a way of defining and using templates directly within the HTML of your page.
+ The application instance exposes a `.config` object that allows us to configure a few app-level options and methods for registering app-scoped assets.
  - **Application Instansce APIs**: Refers to the set of methods and properties available on the Vue instance created by `Vue.createApp()`.