// Require depedencies needed for testing
jest.unmock('request');
var request = require('request');

describe('Basic server functionality', () => {
  it('Should accept and respond to GET requests at the /match endpoint', (done) => {
    request
      .get('http://127.0.0.1:8000/match')
      .on('response', function(response) {
        expect(response.statusCode).toEqual(200);
        done();
      })
      .on('error', function(error) {
        expect(true).toEqual(false);
        console.log('Error sending GET request to /match');
        done();
      });
  });
  it('Should accept and respond to GET requests at the /signin endpoint', (done) => {
    request
      .get('http://127.0.0.1:8000/signin')
      .on('response', function(response) {
        expect(response.statusCode).toEqual(200);
        done();
      })
      .on('error', function(error) {
        expect(true).toEqual(false);
        console.log('Error sending GET request to /signin', error);
        done();
      });
  });

  it('Should not accept and respond to GET requests at the non-existant endpoints', (done) => {
    request
      .get('http://127.0.0.1:8000/arglebargle')
      .on('response', function(response) {
        expect(response.statusCode).toEqual(404);
        done();
      })
      .on('error', function(error) {
        expect(true).toEqual(false);
        console.log('Error sending GET request to /arglebargle', error);
        done();
      });
  });
  it('Should return a match object when GET request is made to /match endpoint', (done) => {
    request({
      url: 'http://127.0.0.1:8000/match',
      method: 'GET',
    }, function(error, response, body) {
      if(error) {
        expect(true).toEqual(false);
        console.log('Error sending GET request to /arglebargle', error);
        done();
      } else {
        body = JSON.parse(body);
        expect(body.restaurant).toBeDefined();
        expect(body.matchedUser).toBeDefined();
        done();
      }
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
