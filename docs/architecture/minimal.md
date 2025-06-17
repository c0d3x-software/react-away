<style>@import url(minimal.css);</style> 

# MINIMALISM


## Design principles

### DRY: DON'T REPEAT ITSELF

DRY is in core web standard approach in React Away design. With web standards, vendor-lock in features and concept is avoided. So, decorators replaces React Hooks, because, even in its special adaptation to work with functions, it is yet a decorator semantics and syntax.

If there is a web standard way to do it, the React Way enforce and fix any challenge to make the solution more vanilla-like possible. Objects are stateful per definition, so stateful handling in React Away are just OOP. If there is decorators for metadata, React Away solves its lack of function support, instead of a broad convention overheads.

### KISS: Keep it simple, stupid!

KISS in one of major goals in a minimalist design. Web standard approach reduces learning curve, reactive object drops all stateful boilerplate code, props handlers solves with simple attributes problems what would need a new component. 

All design choices was driven to keep it low code, vanilla-like and technologically agnostic, following popular patterns and just adding new overhead when reduces the existing design. All React Away hookless approach turns React more web standard, but keeping React support to hookful world if need it. Its classless CSS design and its fixed modular CSS encourages SoC (separation of concerts) between scripting and styling, as we have in standard HTML.

### YAGNI: You Ain't Gonna Need It

YAGNI is followed with minimal componentization approach using CSS components and HTML containers. This avoid over-engineering of a component semantics that a just visual component does not need or a a page component that is just a wrapper of components.

This YAGNI componentization with page components breaks monolith component tree in multiple micro-component trees with reduced rendering time, bundle size and design cost.

## Clasless CSS design

Classless CSS is a CSS approach that avoid ou mitigate the use of CSS classes, mitigating the styling pollution in JSX code, it is a direct oposition to tailwind design, but following web standard approach, where style is separated from script.

Property handlers and CSS components are classless CSS resources that enforce low styling code in JSX using props transformations (property handlers) or just CSS design with function support.


working in progress...