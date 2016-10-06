var app = require('./server');
var request = require('supertest');
var expect = require('chai').expect

describe ('Lions', function() {
  it('should get all lions', function(done) {
    request(app)
      .get('/lions')
      .set('Accept', 'application/json')
      .expect('Content-type', /json/)
      .expect(200)
      .end(function(err, resp) {
        expect(resp.body).to.be.an('array');
        done();
      });
  });
});
