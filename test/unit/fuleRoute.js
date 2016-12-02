
const request = require('supertest');
const config = require('config');

const port = config.get('express.port');

require('../../lib/server');


describe('/api/fuel', () => {
  it('Should accept post requests', (done) => {
    request('http://localhost:' + port)
    .post('/api/fuel')
        .send({
          price: 2.00,
          galons: 8.43,
          mileage: 72200
        })
        .expect(201, done);
  });
});
