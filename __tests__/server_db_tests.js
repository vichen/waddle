// Require depedencies needed for testing
jest.unmock('jquery');
var $ = require('jquery');

describe('Basic server functionality', () => {
  it('Should accept and respond to GET requests at the /match endpoint', (done) => {
    $.get('http://127.0.0.1:8000/match', function(data, status) {
      expect(status).toEqual('success');
      done();
    });
  });
  it('Should accept and respond to GET requests at the /signin endpoint', (done) => {
    $.get('http://127.0.0.1:8000/signin', function(data, status) {
      expect(status).toEqual('success');
      done();
    });
  });

  it('Should not accept and respond to GET requests at the non-existant endpoints', (done) => {
    $.get('http://127.0.0.1:8000/asdfsdf', function(data, status) {
      expect(status).toEqual('error');
      done();
    })
    .fail(function(data, status) {
      expect(status).toEqual('error');
      done();
    });
  });
  xit('Should return a match object when GET request is made to /match endpoint', (done) => {
    $.get('http://127.0.0.1:8000/match', function(data, status) {
      expect(data.restaurant).toBeDefined();
      expect(data.matchedUser).toBeDefined();
      done();
    });
  });
});

// Tests for database sign-in
xdescribe('Basic database functionality', () => {
  it('Should be able to add new user to database and sign-in with that user', (done) => {
    var newUser = { username: 'test' };
    $.ajax({
      method: 'POST',
      url: '127.0.0.1:8000/signup',
      data: newUser,
      success: function(data) {
        $.post('127.0.0.1:8000/signin', newUser, function(data) {
          // TODO update the below based on your actual implementation of the sign-in request handler
          expect(data).toEqual('going to welcome page');
          done();
        })
        .fail(function() {
          // Automatically failing if the request does not go through
          expect(true).toEqual(false);
          done();
        });
      },
      error: function() {
        // Automatically failing if there is an error
        expect(true).toEqual(false);
        done();
      }
    });
  });
});
