import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/main.ts',
  output: {
    file: 'build/main.js',
    // format: 'iife'
    format: 'es'
  },
  plugins: [
    typescript(),
    nodeResolve(),
    commonjs()
  ]
};
