var React = require('react');
var _ = require('../../node_modules/underscore/underscore-min.js');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			errors:{}
		}
	},
	render: function() {
		return (
			<form className="regForm" type="submit" ref="regForm" onSubmit={this.register}>
				<label>First Name</label><br />
				<input type="text" ref="name" /><br />
				<div className="errorText">{this.state.errors.name}</div>

				<label>Email</label><br />
				<input type="text" ref="email" /><br />
				<div className="errorText">{this.state.errors.email}</div>

				<label>Username</label><br />
				<input type="text" ref="username" /><br />
				<div className="errorText">{this.state.errors.username}</div>

				<label>Password</label><br />
				<input type="password" ref="password" /><br />
				<div className="errorText">{this.state.errors.password}</div>

				<label>Verify Password</label><br />
				<input type="password" ref="verifyPass" /><br />
				<div className="errorText">{this.state.errors.verifyPass}</div>
				<div className="errorText">{this.state.errors.isPass}</div>
				<div className="errorText" ref="serverError"></div>

				<button type="submit">Register</button><br />
			</form>
		);
	},
	register: function(e) {
		e.preventDefault();

		var that = this;
		var errors = {};

			this.props.user.set("name", that.refs.name.getDOMNode().value);
			this.props.user.set("username", that.refs.username.getDOMNode().value);
			this.props.user.set("email", that.refs.email.getDOMNode().value);
			this.props.user.set("password", that.refs.password.getDOMNode().value);

		if (!this.props.user.get('name')) {
			errors.name = 'please enter your first name';
		}
		if (!this.props.user.get('email')) {
			errors.email = 'please enter an email address';
		}
		if (!this.props.user.get('username')) {
			errors.username = 'please enter a username';
		}
		if (!this.props.user.get('password')) {
			errors.password = 'please enter a password';
		}
		if (this.props.user.get('password') !== that.refs.verifyPass.getDOMNode().value) {
			errors.isPass = 'please make sure your passwords match';
		}
		console.log(errors);
		if(_.isEmpty(errors)) {

			this.props.user.save(
				null, 
				{
			    success: function(userModel) {
			    	that.props.myApp.navigate('home', {trigger: true});
			        console.log('user was registered');
			    },
			    error: function(userModel, response) {
			    	that.refs.serverError.getDOMNode().innerHTML = response.responseJSON.error;
			        console.log('user was not registered', response.responseJSON);
			    }
			});
		}

		else {
			that.setState({errors: errors});
		}
	}
});