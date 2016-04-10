// Require depedencies needed for testing
jest.unmock('jquery');
var $ = require('jquery');
 
jest.unmock('bluebird');
var Promise = require('bluebird');

jest.unmock('mongoose');
var mongoose = require('mongoose');

jest.unmock('../server/server.js');
jest.unmock('express');
jest.unmock('../server/config/routes.js');
jest.unmock('../server/config/requestHandler.js');
jest.unmock('passport');
jest.unmock('fs');
jest.unmock('../db/db.js');
jest.unmock('../db/config.js');
var server = require('../server/server.js');

describe('Basic server functionality', () => {
  it('Should accept and respond to GET requests at the /match endpoint', (done) => {
    $.get('http://159.203.254.178:8000/match', function(data, status) {
      expect(status).toEqual('success');
      done();
    });
  });
  it('Should accept and respond to GET requests at the /signin endpoint', (done) => {
    $.get('http://159.203.254.178:8000/signin', function(data, status) {
      expect(status).toEqual('success');
      done();
    });
  });
  it('Should not accept and respond to GET requests at the non-existant endpoints', (done) => {
    $.get('http://159.203.254.178:8000/asdfsdf', function(data, status) {
      expect(status).toEqual('error');
      done();
    })
    .fail(function(data, status) {
      expect(status).toEqual('error');
      done();
    });
  });
});

// Tests for database sign-in
describe('Basic database functionality', () => {
  it('Should be able to add new user to database', (done) => {
    $.
  });
});

