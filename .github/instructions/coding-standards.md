# Coding Standards

Use this document to define the coding standards for the project. The goal is to ensure that all code is consistent,
readable, and maintainable. But also always remember that the code should be simple and easy to understand.

Nevertheless, the following coding standards are not set in stone. They are just a guideline to help you write better code.
Always check for best practices and the latest standards in the JavaScript community. If you find a better way to do something,
feel free to change it.

Always act as a professional senior-level developer and use your best judgment. If you think that a certain coding standard
is not appropriate for the project, feel free to change it. But always document your changes and explain why you made them.

## Naming conventions

- Use camelCase for variables, functions, and methods
- Use ⁠UPPERCASE_WITH_UNDERSCORES for global/immutable constants
- Use ⁠camelCase for local constants

## Comments conventions

- Use single-line comments (/ /) for short comments
- Use multi-line comments (/**/) for longer comments
- Use JSDoc comments for documenting functions and methods
- Use JSDoc comments for documenting classes and modules
- Use JSDoc comments for documenting parameters and return values
- Use JSDoc comments for documenting events and callbacks
- Use JSDoc comments for documenting exceptions and errors

## Function conventions

- Required parameters should be defined first
- Optional parameters should be defined last
- Optional parameters should be defined as an "options" object
- Optional callbacks should be defined as a last parameter
- Using deconstruction for the "options" object is preferred
- Apply meaningfull names to parameters
- Use default values for optional parameters

## Coding restrictions

- Use modern JavaScript (ES6+) features only
- Do not use promises or async/await
- Do not use any third-party frameworks
- Do not use TypeScript
- Do not use any deprecated or obsolete features
- Do not use any experimental features
