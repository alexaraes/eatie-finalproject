var React = require('react');
var Backbone = require('backbone');
var UserModel = require('./models/UserModel.js');
var PostCollection = require('./collections/PostCollection.js');

var HomeComponent = require('./components/HomeComponent.js');
var SignUpComponent = require('./components/SignUpComponent.js');
var LoginComponent = require('./components/LoginComponent.js');
var 

var App = Backbone.Router.extend({
	routes: {
		'': 'home',
		'home': 'home',
		'signup': 'signup',
		'login': 'login',
		'profile': 'profile',
		'feed': 'feed',
		'restaurant': 'restaurant',
		'category/:category': 'category'
	},
	home: function() {
		React.render(
			<HomePage />
		);
	},
	signup: function() {
		React.render(
			<SignUpPage />
		);
	},
	login: function() {
		React.render(
			<LoginPage />
		);
	},
	profile: function() {
		React.render(
			<ProfilePage />
		);
	},
	feed: function() {
		React.render(
			<UserFeedPage />
		);
	},
	restaurant: function() {
		React.render(
			<RestaurantPage />
		);
	},
	category: function(category) {

		React.render(
			<CategoryPage />
		);
	}
});

var myApp = new App();
Backbone.history.start();

console.log('application running');