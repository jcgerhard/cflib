/**
 * Increments a given positive number by a specified step and returns the result
 * as a fixed-width string with leading characters.
 *
 * @param {number} startNumber - The positive number to increment from
 * @param {object} [options={}] - Configuration options
 * @param {number} [options.length=8] - The desired output string length
 * @param {number} [options.step=1] - Value to add to startNumber
 * @param {string} [options.character='0'] - Character for padding
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

    // Extract options with defaults
    const { length = 8, step = 1, character = '0' } = options;

    // Validate option types
    const validationErrors = [];
    if (typeof length !== 'number') validationErrors.push('length must be a number');
    if (typeof step !== 'number') validationErrors.push('step must be a number');
    if (typeof character !== 'string') validationErrors.push('character must be a string');

    if (validationErrors.length > 0) {
        throw new Error(`Invalid options: ${validationErrors.join(', ')}`);
    }

    // Process incrementation and formatting
    const newValue = startNumber + step;
    const formattedResult = String(newValue).padStart(length, character);

    // Execute callback if provided
    if (typeof callback === 'function') {
        callback(newValue, formattedResult);
    }

    return formattedResult;
}
