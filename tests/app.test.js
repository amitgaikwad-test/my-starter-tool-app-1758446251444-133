const request = require('supertest');
const assert = require('assert');
const app = require('../src/app');

describe('Express App', function () {
  it('GET / should return Hello, world!', async function () {
    const res = await request(app).get('/');
    assert.strictEqual(res.status, 200);
    assert.deepStrictEqual(res.body, { message: 'Hello, world!' });
  });

  it('GET /health should return ok', async function () {
    const res = await request(app).get('/health');
    assert.strictEqual(res.status, 200);
    assert.strictEqual(res.body.status, 'ok');
  });

  it('GET /unknown should return 404 with error message', async function () {
    const res = await request(app).get('/unknown');
    assert.strictEqual(res.status, 404);
    assert.ok(res.body && res.body.error);
    assert.strictEqual(res.body.error.message, 'Not Found');
  });
});
