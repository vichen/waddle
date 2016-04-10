var fs = require('fs');

// The below hard-coded examples are for testing purposes. Will be removed once Foursquare API is in place.
var restaurant = {"id":"513a4806c84c60d09153e2cc","name":"SQwers Izakaya & Sushi BAR","contact":{"phone":"4157029979","formattedPhone":"(415) 702-9979"},"location":{"address":"3015 Geary Blvd","crossStreet":"bwtn Cook St & Blake St","lat":37.781747440661505,"lng":-122.45133876800537,"distance":418,"postalCode":"94118","mayNotNeedAddress":false,"cc":"US","city":"San Francisco","state":"CA","country":"United States","formattedAddress":["3015 Geary Blvd (bwtn Cook St & Blake St)","San Francisco, CA 94118","United States"]},"categories":[{"id":"4bf58dd8d48988d1d2941735","name":"Sushi Restaurant","pluralName":"Sushi Restaurants","shortName":"Sushi","icon":{"prefix":"https://ss3.4sqi.net/img/categories_v2/food/sushi_","suffix":".png"},"primary":true}],"verified":false,"stats":{"checkinsCount":313,"usersCount":199,"tipCount":10},"url":"http://sqwers.eat24hour.com","delivery":{"id":"27042","url":"http://www.seamless.com/food-delivery/restaurant.27042.r?a=1026&utm_source=Foursquare&utm_medium=affiliate&utm_campaign=SeamlessOrderDeliveryLink","provider":{"name":"seamless"}},"allowMenuUrlEdit":true,"specials":{"count":0,"items":[]},"hereNow":{"count":0,"summary":"Nobody here","groups":[]},"referralId":"v-1460144909","venueChains":[]};
var matchedUser = {"username":"Nathaniel","email":"nedwards@gmail.com","funfact":"I can code all the things","profileimage":"https://avatars1.githubusercontent.com/u/5132757?v=3&s=400"};

var Photos = [{uri: matchedUser.profileimage}];
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
    var responseJSON = {
      restaurant: restaurant,
      matchedUser: matchedUser
    };

    var stringifiedResponseJSON = JSON.stringify(responseJSON);
    res.send(responseJSON);
  },

  getPhotos: function(req, res) {
    var responseJSON = {
      photos: Photos
    }

    res.send(responseJSON);
  },

  postPhotos: function(req, res) {
    var photo = req.body
    Photos.push(photo);

    res.json(photo);
  }
};
