const nodeResolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const isProduction = process.env.NODE_ENV === 'production'

export default {
    input: 'build.tmp/index.js',
    output: {
        file: 'www/index.js',
        format: 'cjs',
        compact: isProduction,
    },
    plugins: [
        commonjs({
            include: 'node_modules/**',
        }),
        nodeResolve({
            mainFields: ['module', 'browser', 'main'],
        }),
    ],
}
