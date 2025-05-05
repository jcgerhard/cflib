import export_metadata from '../../dev/color/export_metadata.js';

/**
 * Finds the darkest color from a given array of color objects based on the 'L' property.
 * It assumes the darkest color is represented by an 'L' property value of -100.
 *
 * @param {Array<Object>} colors - An array of color objects. Each object should have an 'L' property representing its lightness.
 * @returns {Object | undefined} The first color object found with an 'L' property equal to -100, or undefined if no such color is found.
 */
export function getDarkestColor(colors) {
    return colors.find(color => color.L === -100);
}
