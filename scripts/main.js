var React = require('react');
var Backbone = require('backbone');
var $ = require('jquery');

var UserModel = require('./models/UserModel.js');
var PostCollection = require('./collections/PostCollection.js');

var HomePage = require('./components/HomeComponent.js');
var NavBar = require('./components/NavbarComponent.js');
var LoginPage = require('./components/LoginComponent.js');
var SignUpPage = require('./components/SignupComponent.js');
var ProfilePage = require('./components/ProfileComponent.js');

var user = new UserModel();

var containerEl = document.getElementById('container');

React.render(
	<NavBar user={user} myApp={myApp} />,
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
			<HomePage user={user} myApp={myApp} />,
			containerEl
		);
	},
	signup: function() {
		React.render(
			<SignUpPage user={user} myApp={myApp} />,
			containerEl
		);
	},
	login: function() {
		React.render(
			<LoginPage user={user} myApp={myApp} />,
			containerEl
		);
	},
	profile: function() {
		React.render(
			<ProfilePage user={user} myApp={myApp} />,
			containerEl
		);
	},
	feed: function() {
		React.render(
			<UserFeedPage user={user} myApp={myApp} />,
			containerEl
		);
	},
	restaurant: function() {
		React.render(
			<RestaurantPage user={user} myApp={myApp} />,
			containerEl
		);
	},
	category: function(category) {

		React.render(
			<CategoryPage user={user} myApp={myApp} />,
			containerEl
		);
	}
});

var myApp = new App();
Backbone.history.start();

console.log('application running');

user.me();