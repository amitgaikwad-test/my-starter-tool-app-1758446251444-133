const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

router.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

module.exports = router;
