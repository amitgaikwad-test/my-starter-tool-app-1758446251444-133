const express = require('express');
const routes = require('./routes');
const logger = require('./middleware/logger');

const app = express();

// Core middleware
app.use(express.json());
app.use(logger);

// Routes
app.use('/', routes);

// 404 handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';

  if (process.env.NODE_ENV !== 'test') {
    // Minimal error logging
    console.error(`[ERROR] ${status} - ${message}`);
    if (err.stack) {
      console.error(err.stack);
    }
  }

  res.status(status).json({
    error: { message }
  });
});

module.exports = app;
