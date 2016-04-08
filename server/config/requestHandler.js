module.exports = {
  getHome: function (req, res) { 
    res.redirect('/signin'); 
  },

  getSignin: function (req, res) { 
    res.send('signing in...'); 
  },

  getMatch: function (req, res) { 
    res.send('Matching...'); 
  } 
};