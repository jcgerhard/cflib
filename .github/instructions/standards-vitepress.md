# Vitepress Documentation Standards

Use clear and concise professional language

## Markdown Structure

- Name of the function as ## header
  - Description of the function
- Function signature as ### header
- Function parameters as ### header
  - Type of the parameter (e.g., number, object, function)
  - Name of the parameter
  - Is it optional or required
  - Type of the parameter
  - Description of the parameter
- Return value as ### header
  - Type of the return value
  - Description of the return value
- Exceptions as ### header
  - Description of the exception
- Examples as ### header
  - Example code snippet
    - Do not use import statements in examples!
    - Always start with 'cflib.' followed by the abbreviated module name taken from the main.js file
    - Use assignment expressions for calling functions, e.g., `const result = cflib.env.getCloudflowVersion();`
  - Limit is maximum 3 examples
  - If function has a callback, include an example with the callback
