const path = require('path');
const { env } = require('process');

module.exports = {
  PORT: 3000,
  STATIC_PATH: env.STATIC_PATH || path.resolve(__dirname, '../Public'),
  DB_CONFIG: path.resolve(__dirname, 'db.json'),
};
