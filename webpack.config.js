const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const tsImportPluginFactory = require('ts-import-plugin');

console.log('webpack.config.js');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    library: 'mTools',
    libraryTarget: 'umd',
    globalObject: 'this',
    filename: 'index.js',
    path: path.resolve(__dirname, './dist'),
  },
  resolve: {
    extensions: ['.ts', '.js', 'json'],
  },
  optimization: {
    minimizer: [
      // 压缩 js
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
        uglifyOptions: {
          warnings: false,
        },
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.(jsx|tsx|js|ts)$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [
              tsImportPluginFactory({
                libraryName: 'mTools',
                libraryDirectory: 'src',
              }),
            ],
          }),
          compilerOptions: {
            module: 'es2015',
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
};
