require('dotenv').config();

const app = require('./src/app');
const connectDB = require('./src/db/db');

const server = app.listen(5000, '127.0.0.1', () => {
  console.log('Server listening at http://127.0.0.1:5000');
});

server.on('error', (err) => {
  console.error('Server error:', err);
});

connectDB();

