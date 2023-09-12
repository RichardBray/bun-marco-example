// https://bun.sh/docs/bundler
Bun.build({
  entrypoints: ['./index.ts'],
  outdir: './dist',
  minify: true,
});