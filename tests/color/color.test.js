import { describe, it, expect } from 'vitest';
import { getDarkestColor } from '../../src/color/color.js';

describe('color', () => {
    it('should return darkest color from array', () => {
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

        const darkest = getDarkestColor(colors);
        expect(darkest).toBe('Airwaves_Blau');
    });
});
