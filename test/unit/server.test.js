const chai = require('chai');
const request = require('supertest');
const config = require('config');

const port = config.get('express.port');

var server = require('../../lib/server');

describe('Express Server', () => {
  it('Should exist', (done) => {
    chai.expect(server);
    done();
  });

  it('Should be able to listen', (done) => {
    request('http://localhost:' + port)
    .get('/')
    .expect(200, done);
  });
});
