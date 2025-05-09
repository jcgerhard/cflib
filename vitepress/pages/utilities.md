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
    - The result will be padded to this length
  - `step` (number, default: 1)
    - The value to add to the `startNumber`
  - `character` (string, default: '0')
    - The character used for padding the beginning of the string

- `callback` (function, optional)
  - Called with two parameters after incrementing the number:
    - `incrementedNumber` - The raw number after incrementing
    - `formattedResult` - The formatted string with padding applied

### Return Value

- Returns a string representing the incremented number, formatted according to the specified options

### Exceptions

- Throws an error if the `startNumber` parameter is not provided (is undefined)
- Throws an error if the `startNumber` parameter is negative
- Throws an error if the options parameters are of incorrect types

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
