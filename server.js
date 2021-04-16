const http = require('http');
const app = require('./app');
const config = require('./config/config');

const server = http.createServer(app);

const port = process.env.PORT || config.PORT;

server.listen(port, () => {
  console.log(`APP started on port ${port}`);
});
