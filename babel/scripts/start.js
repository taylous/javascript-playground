const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const config = require('../config/webpack.config.js');
const devServerConfig = require('../config/webpack.devServer.js');

const compiler = Webpack(config);
const devServerOptions = { ...devServerConfig, open: true };
const server = new WebpackDevServer(devServerOptions, compiler);

const runServer = async () => {
  console.log('Starting server...');
  await server.start();
};

runServer();
