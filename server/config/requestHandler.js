module.exports = {
  getHome: function(req, res) {
    // TODO:
    // if user is aleady connected with FB
      // redirect to /welcome
    // else
    res.redirect('/signin'); 
  },

  getSignin: function(req, res) { 
    // TODO:
    // if signin successful: check user in database
      // redirect to welcome page
    // else if user doesn't exist
      // sign user up: store user info in database
    res.send('signing in...'); 
  },

  getMatch: function(req, res) { 
    // TODO: implement web sockets    
    res.send('Matching...');
  },

  getWelcome: function(req, res) {

  }
};