var suggList = [];
var userActivities = new UserActivityCollection();

var HomePage = React.createClass({
	getInitialState: function() {
		return {
			suggArray: []
		}
	},
	componentDidMount: function() {
		$.get(
			'https://no-bummer-summer-2015.herokuapp.com/activities',
			function(suggList) {
				if(this.isMounted()) {
					this.setState({
						suggArray: (suggList)
					});
				}
			}.bind(this)
		);
	},
	render: function() 	{
		listItems = this.state.suggArray.map(function(listModel) {
			console.log(listModel);
			console.log(listModel.id);

			for(var i=0; i<listModel.id; i++) {
				listModelId = listModel.id[i];
			}
			return (
				<div key={listModel.cid}>
					<input type="checkbox" name="checkbox" onClick={this.checkboxClick} />
					<label for="checkbox_id">{listModel.name}</label>
				</div>
			)
		});
		return (
			<div className="content">
				<h1>Hello, User!</h1>
				<p>Summers in Texas can be long and way too hot. The heat alone can be a bummer. While we can&#39;t do anything about the heat, we can help you not be bored. </p>

				<p>Below is a list of activities that will hopefully shoot your fun level into the stratosphere, like fireworks! Tick off the ones you&#39;ve done and we&#39;ll keep track.</p>
				{listItems}
			</div>
		)
	}
});