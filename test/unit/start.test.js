const code = require('../../lib/start');

const expect = require('chai').expect;

describe('Unit Coverage', () => {
  it('Should exist', () => {
    expect(code()).to.be.true;
  });
});
