import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import autoExternal from 'rollup-plugin-auto-external';
import livereload from 'rollup-plugin-livereload';
import { eslint } from 'rollup-plugin-eslint';
import { terser } from 'rollup-plugin-terser';
import { Server } from 'http';

const production = !process.env.ROLLUP_WATCH;

export default {
    input: 'src/main.js',
    output: {
        sourcemap: true,
        format: 'iife',
        name: 'app',
        file: 'public/bundle.js'
    },
    plugins: [
        autoExternal(),
        eslint({
            throwOnWarning: production
        }),
        svelte({
            dev: !production,
            css: css => {
            	css.write('public/bundle.css');
            }
        }),
        resolve({
            browser: true,
            dedupe: ['svelte'],
        }),
        commonjs(),
        !production && Server(),
        !production && livereload('public'),
        production && terser()
    ],
    watch: {
    	clearScreen: false
    },
};
