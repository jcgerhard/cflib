---
prev: false
next: false
---
# Utilities

## incrementNumber

Increments a given positive number by a specified step and returns the result as a string, padded to a specified length
with a given character.

### Function Signature

```javascript
incrementNumber(startNumber, options = {}, callback)
```

### Parameters

- `startNumber` (number, required)
  - The positive number to start incrementing from
  - Must be a non-negative number

- `options` (object, optional)
  - `padLength` (number, default: 8)
    - The desired total length of the output string
    - The result will be padded to this length
  - `incrementStep` (number, default: 1)
    - The value to add to the `startNumber`
  - `padCharacter` (string, default: '0')
    - The character used for padding the beginning of the string

- `callback` (function, optional)
  - Called with two parameters after incrementing the number:
    - `incrementedNumber` - The raw number after incrementing (before padding)
    - `paddedResult` - The formatted string with padding applied

### Return Value

- Returns a string representing the incremented number, padded according to the specified options

### Exceptions

- Throws an error if the `startNumber` parameter is not provided (is undefined)
- Throws an error if the `startNumber` parameter is negative
- Throws an error if the options parameters are of incorrect types

### Examples

#### Basic Usage

```javascript
import cflib from 'cflib';

// Basic usage - increment by 1 with default padding
const result = cflib.utils.incrementNumber(42);
console.log(result); // "00000043"

// Customize padding length and character
const customPadded = cflib.utils.incrementNumber(99, { 
  padLength: 5, 
  padCharacter: '*' 
});
console.log(customPadded); // "**100"

// Specify a different increment step
const biggerStep = cflib.utils.incrementNumber(50, { 
  incrementStep: 10 
});
console.log(biggerStep); // "00000060"
```

#### Using the Callback

```javascript
// Using callback to access both raw number and padded result
cflib.utils.incrementNumber(42, { padLength: 5 }, (number, paddedString) => {
  console.log(`Raw incremented number: ${number}`);      // Raw incremented number: 43
  console.log(`Formatted padded string: ${paddedString}`); // Formatted padded string: 00043
});

// Using callback for side effects without using the parameters
const counterElement = document.getElementById('counter');
cflib.utils.incrementNumber(counterElement.dataset.count, {}, () => {
  // Perform actions after incrementing
  notifyUserOfIncrement();
});
```
