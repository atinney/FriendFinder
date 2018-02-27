var path = require('path');
var friends = require('../data/friends.js');

// Routes
// =============================================================
module.exports = function(app) {

	//Default path to get homepage
	app.get("/", function(req, res) {
	  res.sendFile(path.join(__dirname, "../public/home.html"));
	});


	//Additional path to take the user to the survey page
	app.get("/survey", function(req, res) {
	  res.sendFile(path.join(__dirname, "../public/survey.html"));
	});


	//Additional path to take the user to the test modal page
	app.get("/modal", function(req, res) {
	  res.sendFile(path.join(__dirname, "../public/modal.html"));
	});

};






