import { describe, it, expect } from 'vitest';
import { getDarkestColor } from '../../src/color/color.js';

// Test color data
const colors = [
    {
        name: 'Airwaves_Blau',
        L: -100,
    },
    {
        name: 'P2955C',
        L: 20.709999,
    },
    {
        name: 'PANTONE 485 C',
        L: 49.880001,
    },
];

// Define the expected schema for a color object using vitest matchers
const COLOR_SCHEMA = expect.objectContaining({
    name: expect.any(String),
    L: expect.any(Number),
});

describe('color', () => {
    it('should return darkest color from array matching the schema', () => {
        expect(getDarkestColor(colors)).toEqual(COLOR_SCHEMA);
    });
});
