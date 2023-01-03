import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.ts'],
    outDir: './dist',
    dts: true,
    format: ['cjs', 'esm'],
    ignoreWatch: ['*.test.ts'],
    target: 'node16',
    clean: true
})
