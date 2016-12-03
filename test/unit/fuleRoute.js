
const Request = require('supertest');
const config = require('config');

const port = config.get('express.port');

const request = Request('http://localhost:' + port);

require('../../lib/server');


describe('/api/fuel', () => {
  describe('Post Requests', () => {
    it('Should accept post requests', (done) => {
      request.post('/api/fuel')
          .send({
            price: 2.00,
            gallons: 8.43,
            mileage: 72200
          })
          .expect(201, done);
    });

    it('Should fail if missing price', (done) => {
      request.post('/api/fuel')
        .send({
          gallons: 8.43,
          mileage: 72200
        })
        .expect(400, done);
    });

    it('Should fail if missing gallons', (done) => {
      request.post('/api/fuel')
        .send({
          price: 2.00,
          mileage: 72200
        })
        .expect(400, done);
    });

    it('Should fail if missing price', (done) => {
      request.post('/api/fuel')
        .send({
          price: 2.00,
          gallons: 8.43
        })
        .expect(400, done);
    });
  });

  describe('Get Requests', () => {
    it('Should return details by id', (done) => {
      request.get('/api/fuel/1')
        .expect(200, done);
    });
  });

});
