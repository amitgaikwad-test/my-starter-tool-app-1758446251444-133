require('dotenv').config();
const http = require('http');
const app = require('./src/app');

const PORT = parseInt(process.env.PORT, 10) || 3000;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = server;
