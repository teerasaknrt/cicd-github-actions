const request = require('supertest');
const app = require('./index');

describe('GET /', () => {
  it('should return status 200', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });

  it('should return correct message', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('Hello, DevOps!');
  });
});
