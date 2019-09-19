import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { eslint } from 'rollup-plugin-eslint';
import { terser } from 'rollup-plugin-terser';
import path from 'path';


const production = !process.env.ROLLUP_WATCH;

const onwarn = warning => {
    // Silence circular dependency warning for external packages
    if (
        warning.code === 'CIRCULAR_DEPENDENCY'
        && !warning.importer.indexOf(path.normalize('node_modules/'))
    ) {
    return
    }

    console.warn(`(!) ${warning.message}`)
}

export default {
    input: 'src/main.js',
    output: {
        sourcemap: true,
        format: 'iife',
        name: 'app',
        file: 'public/bundle.js'
    },
    plugins: [
        eslint({
            throwOnWarning: production
        }),
        svelte({
            dev: !production,
            css: css => {
            	css.write('public/bundle.css');
            }
        }),
        resolve({ browser: true }),
        commonjs(),
        !production && livereload('public'),
        production && terser()
    ],
    watch: {
    	clearScreen: false
    },
    onwarn
};
