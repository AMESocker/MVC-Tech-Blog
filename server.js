//Criteria
//Homepage-existing blog posts
//Homepage-navigation links
//Homepage-option to log in
//Homepage link links to Homepage
//other links promoted to sign-in
//sign-up button-user credentials are saved and logged into the site
//revisit the site at a later time and choose to sign in user prompted to enter username and password
//after signed in-links for the homepage, the dashboard, and the option to log out are visible
//existing blog posts that include the post title and the date created
//click on an existing blog post-presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
// enter a comment and click on the submit button while signed in THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
// click on the dashboard option in the navigation THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
//new blog button area to enter title and contents
//new blog button-title and contents saved then back to dashboard
//dashboard post update or delete then back to dashboard
//navigation-logout
//idle time sign out

const expHbars = require('express-handlebars');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const express = require('express');


const app = express();
const PORT = process.env.PORT || 3001;