/**
 * Increments a given positive number by a specified step and returns the result as a string, padded to a specified length with a given character.
 *
 * @param {number} startNumber - The positive number to start incrementing from. This parameter is required and must be non-negative.
 * @param {object} [options={}] - Optional configuration object.
 * @param {number} [options.padLength=8] - The desired total length of the output string. The result will be padded to this length.
 * @param {number} [options.incrementStep=1] - The value to add to the `startNumber`.
 * @param {string} [options.padCharacter='0'] - The character used for padding the beginning of the string if its length is less than `padLength`.
 *
 * @returns {string} The incremented number as a string, padded according to the specified options.
 *
 * @throws {Error} Throws an error if the `startNumber` parameter is not provided (is undefined).
 * @throws {Error} Throws an error if the `startNumber` parameter is negative.
 *
 * @example
 * // Basic usage
 * const nextId = getNextIncrement(123);
 * console.log(nextId); // Output: "00000124"
 *
 * @example
 * // Custom options with hashtag padding
 * const nextCode = getNextIncrement(99, { padLength: 5, incrementStep: 2, padCharacter: '#' });
 * console.log(nextCode); // Output: "##101"
 *
 * @example
 * // Handling potential errors (missing startNumber)
 * try {
 *   getNextIncrement();
 * } catch (error) {
 *   console.error(error.message); // Output: "The startNumber is required. Please provide a number to start incrementing from."
 * }
 *
 * @example
 * // Handling potential errors (negative startNumber)
 * try {
 *   getNextIncrement(-5);
 * } catch (error) {
 *   console.error(error.message); // Output: "The startNumber must be a positive number."
 * }
 */
export function getNextIncrement(startNumber, options = {}) {
    if (startNumber === undefined) {
        throw new Error('The startNumber is required. Please provide a number to start incrementing from.');
    }
    if (typeof startNumber !== 'number' || startNumber < 0) {
        throw new Error('The startNumber must be a positive number.');
    }
    const { padLength = 8, incrementStep = 1, padCharacter = '0' } = options;
    const newIncrement = startNumber + incrementStep;
    return String(newIncrement).padStart(padLength, padCharacter);
}
