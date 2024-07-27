# Bookmark

# Official VueJS Documentation Notes
## Getting Started
+ Vue.js is a JavaScript framework for building user interfaces.
+ It enhances HTML, CSS, and JavaScript with:
+ **Declarative Rendering**: Define how the UI should look based on data.
+ **Reactivity**: Automatically updates the UI when data changes.
+ **Reactive State**: State variables that update the UI automatically.

+ VueJS Usage:
  - Enhance static HTML
  - Embed as Web Components
  - Single-Page Application (SPA)
  - Fullstack / Server-Side Rendering (SSR)
  - Jamstack / Static Site Generation (SSG)
  - Desktop, Mobile, WebGL, and Terminal Applications

+ **Single-File Components (SFC)**: Combine JavaScript, HTML, and CSS in one file. Structure of a SFC file consist of the logic (JavaScript), template (HTML) and styles (CSS).

+ Vue components can be authored in two different API styles: Options API and Composition API.
  - The Options API is implemented on top of the Composition API.
  - **Options API**: Traditional method using data, methods, and lifecycle hooks. It's structure looks like classes in OOP.
  - **Composition API**: Modern method using functions and `<script setup>` for more flexibility.
    + **`<script setup>`**:
      - The script block is implicitly treated as the setup function's body.
      - You can directly import and use Vue’s Composition API functions like `ref`, `reactive` etc.
      - Variables and functions declared in it are automatically exposed to the template.

+ Taken builds are saved under the "./dist" directory.
+ **Global Build**: A version of the software or application that is meant to be distributed. In the context of JavaScript libraries or frameworks, a version of the library that is designed to be included in web pages via a global variable.

***NOTE**: If you want to use global build in an HTML file you cannot use the Composition API. So you should use Options API.*

+ **Import Maps**: Allows you to control how JavaScript modules are resolved and imported in the browser. Import maps enable you to map module specifiers (like module names) to specific URLs.
+ **ES Modules**: ES Modules (ECMAScript Modules) are a standardized module system in JavaScript that allows you to import and export code.
  - (VueJS in HTML) Due to security reasons, ES modules can only work over the `http://` protocol. In order for ES modules to work on our local machine, we need to serve the index.html over the `http://` protocol, with a local HTTP server. To do that we can use `npx serve` (node.js).

## Essentials
+ Every Vue application starts by creating a new application instance with the `createApp` function.
+ Every app requires a "root component" that can contain other components as its children.
+ An application instance won't render anything until its `.mount()` method is called. It expects a "container" argument (DOM element or a selector string).

+ The `.mount()` method should always be called after all app configurations and asset registrations are done. Its return value, unlike the asset registration methods, is the root component instance instead of the application instance.
  - **Asset Registration**: Techniques or mechanisms used to register and manage various assets within a Vue application. These assets ensures that they are available where needed.
    1. **Global Registration**: Makes components and assets available throughout the app.
    2. **Local Registration**

+ **In-DOM Template**: Define templates directly in HTML.
+ The application instance exposes a `.config` object that allows us to configure a few app-level options and methods for registering app-scoped assets.
  - **Application Instansce APIs**: Refers to the set of methods and properties available on the Vue instance created by `Vue.createApp()`.

+ The `createApp` API allows multiple Vue applications to co-exist on the same page, each with its own scope for configuration and global assets.