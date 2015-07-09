var React = require('react');
var suggList = [];

module.exports = React.createClass({
	// getInitialState: function() {
	// 	return {
	// 		suggArray: []
	// 	}
	// },
	// componentDidMount: function() {
	// 	$.get(
	// 		'https://no-bummer-summer-2015.herokuapp.com/activities',
	// 		function(suggList) {
	// 			if(this.isMounted()) {
	// 				this.setState({
	// 					suggArray: (suggList)
	// 				});
	// 			}
	// 		}.bind(this)
	// 	);
	// },
	render: function() 	{
		// listItems = this.state.suggArray.map(function(listModel) {
		// 	console.log(listModel);
		// 	console.log(listModel.id);

		// 	for(var i=0; i<listModel.id; i++) {
		// 		listModelId = listModel.id[i];
		// 	}
		// 	return (
		// 		<div key={listModel.cid}>
		// 			<input type="checkbox" name="checkbox" onClick={this.checkboxClick} />
		// 			<label for="checkbox_id">{listModel.name}</label>
		// 		</div>
		// 	)
		// });
		return (
			<div>
				<div className="bg-img">
					<div className="hello">Get to Know Austin with Your Mouth</div>
				</div>

				<div className="sugg-pic"></div>
				<div className="sugg-pic"></div>
				<div className="sugg-pic"></div>
				<div className="sugg-pic"></div>
				<div className="sugg-pic"></div>
			</div>
		)
	}
});