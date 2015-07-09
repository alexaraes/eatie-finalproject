var React = require('react');
var Backbone = require('backbone');
var UserModel = require('./models/UserModel.js');
var PostCollection = require('./collections/PostCollection.js');

var HomePage = require('./components/HomeComponent.js');
var NavBar = require('./components/NavbarComponent.js');

var containerEl = document.getElementById('container');

React.render(
	<NavBar myApp={myApp} />,
	document.getElementById('nav')
);

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
			<HomePage />,
			containerEl
		);
	},
	signup: function() {
		React.render(
			<SignUpPage />,
			containerEl
		);
	},
	login: function() {
		React.render(
			<LoginPage />,
			containerEl
		);
	},
	profile: function() {
		React.render(
			<ProfilePage />,
			containerEl
		);
	},
	feed: function() {
		React.render(
			<UserFeedPage />,
			containerEl
		);
	},
	restaurant: function() {
		React.render(
			<RestaurantPage />,
			containerEl
		);
	},
	category: function(category) {

		React.render(
			<CategoryPage />,
			containerEl
		);
	}
});

var myApp = new App();
Backbone.history.start();

console.log('application running');