const path = require('path');
const fs = require('fs');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const appDirectory = fs.realpathSync(process.cwd());

console.log('[appDirectory]', appDirectory);

module.exports = {
  mode: 'development',
  entry: path.resolve(appDirectory, 'src/index.js'),
  stats: 'errors-warnings',
  devtool: 'cheap-module-source-map',
  output: {
    path: path.resolve(appDirectory, 'build'),
    pathinfo: true,
    filename: 'static/js/bundle.js',
    chunkFilename: 'static/js/[name].chunk.js',
    assetModuleFilename: 'static/media/[name].[hash][ext]',
    // publicPath: paths.publicUrlOrPath,
  },
  module: {
    rules: [
      {
        test: /\.(js|mjs|ts)$/,
        include: path.resolve(appDirectory, 'src'),
        loader: require.resolve('babel-loader'),
        options: {
          presets: [
            [
              require.resolve('@babel/preset-env'),
              {
                // targets: '> 0.25%, not dead',
                targets: 'ie 11',
              },
            ],
          ],
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(appDirectory, 'public/index.html'),
      inject: true,
    }),
  ],
};
