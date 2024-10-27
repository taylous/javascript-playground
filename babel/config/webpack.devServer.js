'use strict';

module.exports = {
  host: '0.0.0.0',
  port: 5073,
  allowedHosts: 'auto',
  client: {
    overlay: {
      errors: true,
      warnings: false,
      runtimeErrors: false,
    },
    progress: true,
    logging: 'info',
  },
  open: false,
  compress: true,
  historyApiFallback: true,
  hot: true,
};
