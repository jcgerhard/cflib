import terser from '@rollup/plugin-terser';
import { readFileSync } from 'fs';

const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url)));

export default {
    input: 'src/main.js',
    output: {
        file: 'release/cflib.js',
        format: 'umd',
        name: 'cflib',
        extend: true,
        plugins: [
            terser({
                format: {
                    comments: 'some',
                    preamble: `/**
 * @license MIT
 * ${pkg.name} v${pkg.version}
 * Copyright (c) 2025 ${typeof pkg.author === 'string' ? pkg.author : pkg.author?.name || ''}
 */`,
                },
            }),
        ],
        globals: {
            window: 'window',
        },
        banner: `
            (function (global, factory) {
                typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
                typeof define === 'function' && define.amd ? define(factory) :
                (global = global || self, global.cflib = factory());
            }(this, (function () {`,
        footer: `    return cflib;
            })));`,
    },
};
