var app = require('./server');
var request = require('supertest');
var expect = require('chai').expect

describe('Lions', function() {
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

  it('should create a lion', function(done) {
    var lion = {
        name: 'Mufasa',
        age: 100,
        pride: 'Evil Lions',
        id: '1'
    };

    request(app)
      .post('/lions')
      .send({
        name: 'Mufasa',
        age: 100,
        pride: 'Evil Lions'
      })
      .set('Accept', 'application/json')
      .expect('Content-type', /json/)
      .expect(201)
      .end(function(err, resp) {
        var mufasa = resp.body;
        expect(mufasa).to.be.an('object');
        expect(mufasa).to.eql(lion);
        done();
      });
  });

  it('should delete a lion', function(done) {
    request(app)
      .post('/lions')
      .send({
        name: 'Mufasa',
        age: 100,
        pride: 'Evil Lions'
      })
      .set('Accept', 'application/json')
      .end(function(err, resp) {
        var lion = resp.body;
        request(app)
        .delete('/lions/' + lion.id)
        .end(function(err, resp) {
          expect(resp.body).to.eql(lion);
          done();
        });
      });
  });

  it('should update a lion', function(done) {
    request(app)
      .post('/lions')
      .send({
        name: 'Mufasa',
        age: 100,
        pride: 'Evil Lions'
      })
      .set('Accept', 'application/json')
      .end(function(err, resp) {
        var lion = resp.body;
        request(app)
          .put('/lions/' + lion.id)
          .send({
            name: 'new name'
          })
          .end(function(err, resp) {
            expect(resp.body.name).to.equal('new name');
            done()
          });
        });
  });
});
