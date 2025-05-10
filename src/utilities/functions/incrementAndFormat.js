/**
 * Increments a given positive number by a specified step and returns the result
 * as a fixed-width string with leading characters.
 *
 * @param {number} startNumber - The positive number to increment from
 * @param {object} [options={}] - Configuration options
 * @param {number} [options.length=8] - The desired output string length (must be positive and greater than the length of the incremented number)
 * @param {number} [options.step=1] - Value to add to startNumber
 * @param {string} [options.character='0'] - Character for padding (must be exactly 1 character)
 * @param {function} [callback] - Optional callback with results
 * @param {number} callback.incrementedNumber - The raw incremented number
 * @param {string} callback.formattedResult - The formatted string result
 *
 * @returns {string} The incremented number as a formatted string
 * @throws {Error} When parameters don't meet requirements
 */
export default function incrementAndFormat(startNumber, options = {}, callback) {
    // Validate startNumber
    if (startNumber === undefined || typeof startNumber !== 'number' || startNumber < 0) {
        throw new Error('The startNumber must be a defined, positive number.');
    }

    // Validate callback if provided
    if (callback !== undefined && typeof callback !== 'function') {
        throw new Error('The callback must be a function if provided.');
    }

    // Extract options with defaults
    const { length = 8, step = 1, character = '0' } = options;

    // Validate option types and values
    const validationErrors = [];
    if (typeof length !== 'number') validationErrors.push('length must be a number');
    if (typeof step !== 'number') validationErrors.push('step must be a number');
    if (typeof character !== 'string') validationErrors.push('character must be a string');

    // Additional validations for option values
    if (length <= 0) validationErrors.push('length must be a positive number');
    if (character.length !== 1) validationErrors.push('character must be exactly 1 character');

    // Pre-calculate the incremented value for validation
    const newValue = startNumber + step;
    const incrementedValueLength = String(newValue).length;

    // Check if length is greater than the incremented number's string length
    if (length < incrementedValueLength) {
        validationErrors.push(
            `length (${length}) must be greater than or equal to the length of the incremented number (${incrementedValueLength})`
        );
    }

    if (validationErrors.length > 0) {
        throw new Error(`CFLIB Error - Invalid option(s): ${validationErrors.join(', ')}`);
    }

    // Process formatting
    const formattedResult = String(newValue).padStart(length, character);

    // Execute callback if provided
    if (typeof callback === 'function') {
        callback(newValue, formattedResult);
    }

    return formattedResult;
}

const testCases = incrementAndFormat(1234, { character: 's', length: 3, step: 2 }); //?
