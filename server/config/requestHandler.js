var fs = require('fs');
var util = require('util');
var formidable = require('formidable');
var request = require('request');

// TODO update this to foursquare.js for deploy
var foursquare = require('./foursquare.example.js');


// The below hard-coded examples are for testing purposes. Will be removed once Foursquare API is in place.
var restaurant = {"id":"513a4806c84c60d09153e2cc","name":"SQwers Izakaya & Sushi BAR","contact":{"phone":"4157029979","formattedPhone":"(415) 702-9979"},"location":{"address":"3015 Geary Blvd","crossStreet":"bwtn Cook St & Blake St","lat":37.781747440661505,"lng":-122.45133876800537,"distance":418,"postalCode":"94118","mayNotNeedAddress":false,"cc":"US","city":"San Francisco","state":"CA","country":"United States","formattedAddress":["3015 Geary Blvd (bwtn Cook St & Blake St)","San Francisco, CA 94118","United States"]},"categories":[{"id":"4bf58dd8d48988d1d2941735","name":"Sushi Restaurant","pluralName":"Sushi Restaurants","shortName":"Sushi","icon":{"prefix":"https://ss3.4sqi.net/img/categories_v2/food/sushi_","suffix":".png"},"primary":true}],"verified":false,"stats":{"checkinsCount":313,"usersCount":199,"tipCount":10},"url":"http://sqwers.eat24hour.com","delivery":{"id":"27042","url":"http://www.seamless.com/food-delivery/restaurant.27042.r?a=1026&utm_source=Foursquare&utm_medium=affiliate&utm_campaign=SeamlessOrderDeliveryLink","provider":{"name":"seamless"}},"allowMenuUrlEdit":true,"specials":{"count":0,"items":[]},"hereNow":{"count":0,"summary":"Nobody here","groups":[]},"referralId":"v-1460144909","venueChains":[]};
var matchedUser = {"username":"Nathaniel","email":"nedwards@gmail.com","funfact":"I can code all the things","profileimage":"https://avatars1.githubusercontent.com/u/5132757?v=3&s=400"};

// Mongoose models
var User = require('../../db/db').User;
var MatchRequest = require('../../db/db').MatchRequest;
var SuccessfulMatch = require('../../db/db').SuccessfulMatch;

// Bluebird promises used for interacting with database
var Promise = require('bluebird');
// temporary fake users table
var Users = {rahim: '', kevin: '', nathaniel: '', michelle: ''};

module.exports = {
  getHome: function(req, res) {
    // TODO:
    // if user is aleady connected with FB
      res.send('You are home!');
    // else
  },

  getSignin: function(req, res) {
    res.send('get signing in...');
  },

  postSignin: function(req, res) {
    // check user exist in the database
    var username = req.body.username;
    var password = req.body.password;
    // if user exist
    if (Users[username]) {
      // send ok response and send to welcome
      res.send('going to welcome page');
    } else {
    // else !exit
      // send user to signup page with username provided
      res.send('user doesn\'t exist');
    }
  },

  postSignup: function(req, rep) {
    // username, 
  },

  getMatch: function(req, res) {

    // Remove lines 59 through 64 when we deploy
    var responseJSON = {
      restaurant: restaurant,
      matchedUser: matchedUser
    };
    res.status(200).send(responseJSON);
    return;

    // Data will be sent as a JSON with the below keys
    var longitude = req.body.longitude;
    var latitude = req.body.latitude;
    var username = req.body.username;

    var maxResults = 50; // max # of results to return
    var searchRadius = 500; // # of meters from the specified longitude/latitude to search

    // This is the foursquare category id for 'food'. More categories can be found at https://developer.foursquare.com/categorytree. 
    // We may want to pick a more strict category in the future as 'food' also includes some bars. If passing in multiple IDs, they
    // should be comma separated.
    var categoryId = '4d4b7105d754a06374d81259';

    var requestOptions = {
      method: 'GET',
      uri: 'https://api.foursquare.com/v2/venues/search',
      qs: {
        client_id: foursquare.client_id,
        client_secret: foursquare.client_secret,
        v: 20160405,
        ll: '37.7835, -122.4089', // Hard-coding longitude for now. Should update with the above longitude/latitude variables once app can provide this data
        limit: maxResults,
        categoryId: categoryId,
        radius: searchRadius
      }
    };

    request(requestOptions, function(error, response, body) {
      if (error) {
        console.log('There was an error making a request to the Foursquare API', error);
      } else {
        var parsedBody = JSON.parse(body);
        var restaurantList = parsedBody.response.venues;
        // Picking a random restaurant from the list returned by Foursquare
        var randomRestaurantIndex = Math.floor(Math.random() * restaurantList.length);
        // JSON object that will be sent back to the client
        var responseJSON = {
          restaurant: restaurantList[randomRestaurantIndex],
          matchedUser: matchedUser
        };
        var stringifiedResponseJSON = JSON.stringify(responseJSON);
        res.send(responseJSON);
      }
    });
  },

  getProfilePhoto: function(req, res) {
    var username = req.params.username;
    var file = username + '_' + 'profile.jpg'; // profile image name

    var options = {
      'Content-Type': 'image/jpeg',
      'root': __dirname + '/../uploads/' // directory which houses images
    };

    res.sendFile(file, options, function(err) {
      if (err) {
        console.error(err);
        res.status(err.status).end();
      }
      else {
        console.log('Sent:', file);
      }
    });
  },

  upload: function(req, res) {
    var form = new formidable.IncomingForm();
    form.uploadDir = "./server/uploads";
    form.keepExtensions = true;

    form.on('file', function(field, file) {
        //rename the incoming file to the file's name
        console.log(file.path, form.uploadDir, file.name);
          fs.rename(file.path, form.uploadDir + "/" + file.name);
    });

    form.parse(req, function(err, fields, files) {
      // TODO:
      // Associate files.photo.path [location of img on FS] with the appropriate user in database
      // console.log(files.photo.path);
      res.writeHead(200, {'content-type': 'text/plain'});
      res.end(util.inspect({fields: fields, files: files})); // Like a console.dir
    });
  }  

};
