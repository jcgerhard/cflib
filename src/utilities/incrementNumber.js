/**
 * Increments a given positive number by a specified step and returns the result as a string, padded to a specified length with a given character.
 *
 * @param {number} startNumber - The positive number to start incrementing from. This parameter is required and must be non-negative.
 * @param {object} [options={}] - Optional configuration object.
 * @param {number} [options.padLength=8] - The desired total length of the output string. The result will be padded to this length.
 * @param {number} [options.incrementStep=1] - The value to add to the `startNumber`.
 * @param {string} [options.padCharacter='0'] - The character used for padding the beginning of the string if its length is less than `padLength`.
 * @param {function} [callback] - Optional callback function that will be called before returning the result.
 * @param {number} callback.incrementedNumber - The raw number after incrementing (before padding).
 * @param {string} callback.paddedResult - The formatted string with padding applied.
 *
 * @returns {string} The incremented number as a string, padded according to the specified options.
 *
 * @throws {Error} Throws an error if the `startNumber` parameter is not provided (is undefined).
 * @throws {Error} Throws an error if the `startNumber` parameter is negative.
 * @throws {Error} Throws an error if the options parameters are of incorrect types.
 *
 * @example
 * // Basic usage without callback
 * const result = incrementNumber(42);  // "00000043"
 *
 * // Using options
 * const paddedResult = incrementNumber(99, { padLength: 4, incrementStep: 2 });  // "0101"
 *
 * // Using callback with both parameters
 * incrementNumber(50, { padCharacter: '*' }, (number, paddedString) => {
 *   console.log(`Raw number: ${number}`);         // Raw number: 51
 *   console.log(`Padded result: ${paddedString}`); // Padded result: *******51
 * });
 */
export function incrementNumber(startNumber, options = {}, callback) {
    // Validate required startNumber parameter
    if (startNumber === undefined) {
        throw new Error('The startNumber is required. Please provide a number to start incrementing from.');
    }
    if (typeof startNumber !== 'number' || startNumber < 0) {
        throw new Error('The startNumber must be a positive number.');
    }

    // Validate options types
    const { padLength = 8, incrementStep = 1, padCharacter = '0' } = options;
    if (padLength !== undefined && typeof padLength !== 'number') {
        throw new Error('The padLength option must be a number.');
    }
    if (incrementStep !== undefined && typeof incrementStep !== 'number') {
        throw new Error('The incrementStep option must be a number.');
    }
    if (padCharacter !== undefined && typeof padCharacter !== 'string') {
        throw new Error('The padCharacter option must be a string.');
    }

    // Process the incrementation
    const newIncrement = startNumber + incrementStep;
    const paddedResult = String(newIncrement).padStart(padLength, padCharacter);

    // Execute callback if provided
    if (callback && typeof callback === 'function') {
        callback(newIncrement, paddedResult);
    }

    return paddedResult;
}
