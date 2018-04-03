import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import strip from 'rollup-plugin-strip';
import uglify from 'rollup-plugin-uglify';

const production = !process.env.ROLLUP_WATCH;

console.log('Rollup production', production);

const commonPlugins = [
  babel({
    exclude: 'node_modules/**'
  }),
  resolve()
];

const plugins = production ? [
  ...commonPlugins,
  strip({
    debugger: true,
    functions: ['console.log', 'assert.*', 'debug', 'alert'],
    sourceMap: true
  }),
  uglify()
] : [...commonPlugins];

export default {
  input: 'src/index.js',
  output: {
    file: 'lib/index.js',
    format: 'cjs',
    sourcemap: false
  },
  plugins,
};