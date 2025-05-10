---
prev: false
next: false
---
# Utilities

## incrementAndFormat

Increments a given positive number by a specified step and returns the result as a fixed-width string with leading characters.

### Function Signature

```javascript
incrementAndFormat(startNumber, options = {}, callback)
```

### Parameters

- `startNumber` (number, required)
  - The positive number to start incrementing from
  - Must be a non-negative number

- `options` (object, optional)
  - `length` (number, default: 8)
    - The desired total length of the output string
    - Must be a positive number
    - Must be greater than or equal to the length of the incremented number
  - `step` (number, default: 1)
    - The value to add to the `startNumber`
  - `character` (string, default: '0')
    - The character used for padding the beginning of the string
    - Must be exactly 1 character

- `callback` (function, optional)
  - Called with two parameters after incrementing the number:
    - `incrementedNumber` - The raw number after incrementing
    - `formattedResult` - The formatted string with padding applied

### Return Value

- Returns a string representing the incremented number, formatted according to the specified options

### Exceptions

- Throws an error if the `startNumber` parameter is not provided (is undefined)
- Throws an error if the `startNumber` parameter is negative
- Throws an error if the `length` parameter is not a positive number
- Throws an error if the `character` parameter is not exactly 1 character
- Throws an error if the `length` parameter is less than the length of the incremented number
- Throws an error if the `callback` parameter is provided but is not a function

### Examples

#### Basic Usage

```javascript
// Basic usage - increment by 1 with default formatting
const result = cflib.utils.incrementAndFormat(42);
console.log(result); // "00000043"

// Customize output length and padding character
const customFormatted = cflib.utils.incrementAndFormat(99, { 
  length: 5, 
  character: '*' 
});
console.log(customFormatted); // "**100"

// Specify a different increment step
const biggerStep = cflib.utils.incrementAndFormat(50, { 
  step: 10 
});
console.log(biggerStep); // "00000060"

// Example of error when length is too small for the incremented number
try {
  cflib.utils.incrementAndFormat(99999, { length: 4 });
} catch (error) {
  console.error(error.message); // "CFLIB Error - Invalid option(s): length (4) must be greater than or equal to the length of the incremented number (6)"
}
```

#### Using the Callback

```javascript
// Using callback to access both raw number and formatted result
cflib.utils.incrementAndFormat(42, { length: 5 }, (number, formattedResult) => {
  console.log(`Incremented number: ${number}`);       // Incremented number: 43
  console.log(`Formatted result: ${formattedResult}`); // Formatted result: 00043
});

// Using callback for side effects without using the parameters
const counterElement = document.getElementById('counter');
cflib.utils.incrementAndFormat(counterElement.dataset.count, {}, () => {
  // Perform actions after incrementing
  notifyUserOfIncrement();
});
```

#### Parameter Validation Examples

```javascript
// This will throw an error because the character must be exactly 1 character
try {
  cflib.utils.incrementAndFormat(42, { character: 'ab' });
} catch (error) {
  // CFLIB Error - Invalid option(s): character must be exactly 1 character
  console.error(error.message);
}
```
