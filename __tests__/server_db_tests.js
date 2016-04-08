// Require depedencies needed for testing
jest.unmock('jquery');
var $ = require('jquery');
// Import server dependances jest.unmock('../server.js');
// var server = require('../server');
// Import database dependencies jest.unmock('../db/config.js');
// var db = require('../db/config');

console.log(jasmine.DEFAULT_TIMEOUT_INTERVAL);

describe('Basic server functionality', () => {
  it('Should accept and respond to GET requests at the /match endpoint', (done) => {
    $.get('http://127.0.0.1:3000/match', function(data, status) {
      expect(status).toEqual('success');
      done();
    });
  });
  it('Should accept and respond to GET requests at the /auth endpoint', (done) => {
    $.get('http://127.0.0.1:3000/auth', function(data, status) {
      expect(status).toEqual('success');
      done();
    });
  });
  it('Should not accept and respond to GET requests at the non-existant endpoints', (done) => {
    $.get('http://127.0.0.1:3000/asdfsdf', function(data, status) {
      expect(status).toEqual('error');
      done();
    })
    .fail(function(data, status) {
      expect(status).toEqual('error');
      done();
    });
  });
});