var request = require('request');

exports.client_id = '';
exports.client_secret = '';

exports.getRestaurant = function(longitude, latitude) {
  var maxResults = 50; // max # of results to return
  var searchRadius = 500; // # of meters from the specified longitude/latitude to search

  /* This is the foursquare category id for 'food'. More categories can be found at https://developer.foursquare.com/categorytree. 
   * We may want to pick a more strict category in the future as 'food' also includes some bars. If passing in multiple IDs, they
   * should be comma separated.
   */
  var categoryId = '4d4b7105d754a06374d81259';

  var requestOptions = {
    method: 'GET',
    uri: 'https://api.foursquare.com/v2/venues/search',
    qs: {
      client_id: exports.client_id,
      client_secret: exports.client_secret,
      v: 20160405,
      ll: '37.7835, -122.4089', // Hard-coding longitude, latitude for now. Should update with the longitude/latitude arguments once app can provide this data
      limit: maxResults,
      categoryId: categoryId,
      radius: searchRadius
    }
  };

  return new Promise(function(resolve, reject) {
    request(requestOptions, function(error, response, body) {
      if (error) {
        console.log('There was an error making a request to the Foursquare API', error);
        reject(error);
      } else {
        var parsedBody = JSON.parse(body);
        var restaurantList = parsedBody.response.venues;
        // Picking a random restaurant from the list returned by Foursquare
        var randomRestaurantIndex = Math.floor(Math.random() * restaurantList.length);
        // JSON object that will be sent back to the client
        resolve(restaurantList[randomRestaurantIndex]);
      }
    });
  });

};