
const Request = require('supertest');
const config = require('config');

const port = config.get('express.port');

const request = Request('http://localhost:' + port);

require('../../lib/server');

describe('/api/fuel', () => {
  let fillupId;
  describe('Post Requests', () => {
    it('Should accept post requests', (done) => {
      request.post('/api/fuel')
          .send({
            price: 2.00,
            gallons: 8.43,
            mileage: 72200
          })
          .expect(201)
          .end((err, fillup) => {
            if (err) done;
            console.dir(fillup.body);
            fillupId = fillup.body._id;
            done();
          });
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
      request.get('/api/fuel/' + fillupId)
        .expect(200, done);
    });

    it('Should return 404 on an invalid id', (done) => {
      request.get('/api/fuel/INVALIDID')
      .expect(500, done);
    });

    it('Should be able to return all fillups', (done) => {
      request.get('/api/fuel')
      .expect(200, done);
    });
  });

});
