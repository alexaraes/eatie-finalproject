var React = require('react');

module.exports = React.createClass({
	componentWillMount: function () {
	    this.props.user.on('change', function() {
	    	
	    	this.forceUpdate();
	    	console.log('update check');

	    }, this);
	},
	render: function() {
		var loggedInNav = null;
		var links = [];
		
		if(!this.props.user.id) {
			links.push(<li className="linkDiv"><a href="#home">HOME</a></li>);
			links.push(<li className="linkDiv"><a href="#login">SIGN IN</a></li>);
			links.push(<li className="linkDiv"><a href="#signup">SIGN UP</a></li>);
		}
		if (this.props.user.id) {

			loggedInNav = (
				<div className="navbar">
					<ul>
						<li className="linkDiv"><a href="#home">HOME</a></li>
						<li className="linkDiv"><a href="#login">PROFILE</a></li>
						<li className="linkDiv" onClick={this.onLogOut}><a href="#home">LOG OUT</a></li>
					</ul>
				</div>
			);
		}
		return (
			<nav className="nav">
				<div>{links}</div>
				<div>{loggedInNav}</div>
			</nav>
		);
	},
	onLogOut: function() {
		this.props.user.logout();
	}
});