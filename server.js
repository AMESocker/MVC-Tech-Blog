// Dependencies
//Express
const express = require('express');
//Express-handlebars
const exphbs = require('express-handlebars');
//ExpressHandlebars instances
const path = require('path');
//Node.js module Create a session middleware
const hbs = exphbs.create({});

//node.js-provides utilities for working with file and directory paths
const session = require('express-session');
//a SQL session store using Sequelize.js
const SequelizeStore = require('connect-session-sequelize')(session.Store);


//Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

//Sets up Handlebars as the default template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Sets up the routes
app.use(require('./controllers/routes'));

//Starts the server to begin listening
app.listen(PORT, () => {
    console.log('Server listening on: http://localhost:' + PORT);
  });