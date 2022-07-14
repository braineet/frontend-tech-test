const esbuild = require('esbuild');
const packagejson = require('./package.json');
const { globPlugin } = require('esbuild-plugin-glob');

const sharedConfig = {
    loader: {
      '.jsx': 'jsx',
      '.js': 'jsx',
    },
    bundle: true,
    outbase: './src',
    minify: true,
    target: ['esnext'],
    logLevel: 'info',
    external: [...Object.keys(packagejson.peerDependencies || {})],
};

esbuild
  .build({
    ...sharedConfig,
    entryPoints: ['src/index.js'],
    outdir: 'dist/cjs',
    format: 'cjs',
  })
  .catch(() => process.exit(1));

esbuild
  .build({
    ...sharedConfig,
    entryPoints: [
      'src/index.js',
      'src/components/**/index.js'
    ],
    outdir: 'dist/esm',
    splitting: true,
    format: 'esm',
    plugins: [globPlugin()],
  })
  .catch(() => process.exit(1));