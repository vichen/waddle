![](https://dl.dropboxusercontent.com/s/5utw16rifv9cmqe/banner-128.png?dl=0) 
---

# waddle ![Build Status](https://travis-ci.org/savory-penguin/savory-penguin.svg?branch=master)

Waddle is like a platonic version of Coffee Meets Bagel. The focus of Waddle is on helping people meet new people who share common interests through a shared experience like lunch. 

Supported operating systems are >= iOS 7.0

- [Technology Stack](#technology-stack)
- [Client Framework](#client-framework)
- [Server Setup](#server-setup)
- [Database](#database)
- [Testing](#testing)
- [Continuous Integration](#continuous-integration)
- [Legacy Project Ideas](#legacy-project-ideas)
- [Tips](#tips)
  
## Technology Stack, APIs, and Third-party tools

- [React Native](https://facebook.github.io/react-native/)
- Node.js & [Express](http://expressjs.com/)
- [MongoDB](https://www.mongodb.org/) and [Mongoose](http://mongoosejs.com/)
- [Jasmine](http://jasmine.github.io/) & [Jest](https://facebook.github.io/jest/)
- [Travis CI](https://travis-ci.org/)
- [Digital Ocean](https://www.digitalocean.com/)
- [Foursquare API](https://developer.foursquare.com/)
- [react-native-video](https://github.com/brentvatne/react-native-video)
- [react-native-camera](https://github.com/lwansbrough/react-native-camera)


## Client Framework: React Native

To get started, follow these steps as needed.

 1. Install [brew](http://brew.sh/)
 2. [Install Node.js](https://nodejs.org/en/) 4.0 or newer
 3. Run `brew install watchman`
 4. Run `brew install flow`
 5. Install [Xcode](https://developer.apple.com/xcode/download/)
 5. Install the React native command line tools

 ```
 $ npm install -g react-native-cli
 ```  
 6. Run `npm install` to install all dependencies


## Server Setup: Node & Express

All files for the server can be found in the server folder. The server also makes use of the database helper functions in db/db.js.
  - server/sever.js: Configures the server and listens on port 8000.
  - server/config/requestHandler.js: Majority of server processes are handled by this file. It contains handler functions for all requests that come into the server.
  - server/config/routes.js: Defines the routes for the various types of requests.
  - server/config/foursquare.js: Makes requests to the foursquare API. Used in the request handlers.
  - server/config/foursquarekeys.example.js: An example file that you will need to update with your Foursquare API keys to. It goes without saying that you should not push your API keys to github or anywhere else that may compromise their security.

The uploads folder is used to store users' profile images.


## Database: MongoDB & Mongoose

The Mongodb database has 3 tables: users, matchrequests, and successfulmatches (schema can be found in db/config.js). 
  - The users table has 5 columns: username, firstname, email, funfact, profileimage) which are set at the time of user signup.
  - The matchrequests table has 5 columns: username, latitude, longitude, isActive, and timestamp.
      > isActive is a boolean that flags whether the given matchRequest has been fulfilled.
      > Timestamp is set automatically. The server uses the timestamp to determine whether or not a given match is valid. Currently, any matchrequest older than 45s is considered to be invalid.
  - db/config.js contains the database schema and mongoose models for User, MatchRequest, and SuccessfulMatch

Database helper functions can be found in db/db.js. These helper functions are used by the request handlers in server/config/requestHandler.js
  - getUsers will return a list of userts matching the passed-in arguments.
  - checkIfUserExists will return a boolean value based on whether a given user exists in the database.
  - addUser will add a new user to the database.
  - getAllUsers will return a full list of users in the database. This function is not currently used, but may come in handy in the future.
  - removeUser will remove the specified user from the database. This function is not currently used, but may come in handy in the future.
  - getMatchRequests will return a list of matchRequests that meet the time cutoff (requestTimeCutoff)
  - getSuccessfulMatchForUser will return the successful match (if any) for a given user. Any match that is older than 1min will not be returned. This time cutoff has been included to prevent the system from accidentally returning old matches.
  - updateUser will update a user's database entry with the new values provided


## Testing: Jest & Jasmine

Jest/Jasmine are used as the unit testing suite for this app. All tests can be found in __tests__/server_db_tests.js. Run the tests with the command 'npm test'.


## Continuous Integration: Travis CI

![](https://dl.dropboxusercontent.com/s/0jc7f5kpegy6rsg/travisSignUp.gif?dl=0)

Travis CI runs your test suite every time new code is pushed or a pull request is made, offering a sanity check before integrating any new code.

It's easy to set up:

  1. Go to [travis-ci.org](http://travis-ci.org) and have the admin for your organization sign in through Github
  2. Once signed in, enable your target repo
  3. Add a travis.yml file and specify your language and environment
  4. Add tests
  5. Push code or start making pull requests. Green builds are passing
  6. To add a build status indicator on your repo, paste in
  the following:
  

  `![](https://travis-ci.org/path/to/repo.svg?branch=master)`

  ** Your repo path if your github url is 
  https://github.com/savory-penguin/savory-penguin
  will be savory-penguin/savory-penguin



## Legacy Project Ideas

- Integrate Facebook login / authentication
- Geofencing | Disable / Hide 'I'm here' button until user is within a certain radius
- Refactor app using Redux architecture
- Write end to end tests
- Add a user preferences / account settings / delete account / sign out section
- Incorporate a user rating system
- Expand service to coffee, dinner, workouts and more
- Refine matching algorithm
- Add push notifications (e.g. when match arrives)
- Integrate other apis (e.g uber, twilio)
- Make layout more responsive to handle different size screens
- Port waddle to Android

## Tips & Tricks

- Install Xcode ASAP if you don't already have it installed.
- 
