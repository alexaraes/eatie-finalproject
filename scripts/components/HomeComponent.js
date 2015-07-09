var React = require('react');
var Masonry = require('../../node_modules/masonry-layout/masonry.js');

var suggList = [];

module.exports = React.createClass({
	getInitialState: function() {
		return {
			suggArray: []
		}
	},
	componentDidMount: function() {

		document.on('ready', setTimeout(function() {
				var grid = document.querySelector('.grid');
				var msnry = new Masonry( grid, {
				 	 // options...
				 	itemSelector: '.grid-item',
				 	columnWidth: 0,
				  	isFitWidth: true
				})
			}, 500)
		);
	},
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
					<div className="hello2">Scroll for noms \/</div>
				</div>

				<div className="grid">
				  <div className="grid-item"></div>
				  <div className="grid-item grid-item--height2"></div>
				  <div className="grid-item grid-item--height3"></div>
				  <div className="grid-item grid-item--height2"></div>
				  <div className="grid-item"></div>
				  <div className="grid-item"></div>
				  <div className="grid-item"></div>
				  <div className="grid-item grid-item--height2"></div>
				  <div className="grid-item grid-item--height3"></div>
				  <div className="grid-item"></div>
				  <div className="grid-item grid-item--height2"></div>
				  <div className="grid-item"></div>
				  <div className="grid-item grid-item--height2"></div>
				  <div className="grid-item"></div>
				  <div className="grid-item"></div>
				  <div className="grid-item grid-item--height2"></div>
				  <div className="grid-item"></div>
				  <div className="grid-item"></div>
				  <div className="grid-item grid-item--height3"></div>
				  <div className="grid-item grid-item--height2"></div>
				  <div className="grid-item"></div>
				  <div className="grid-item"></div>
				  <div className="grid-item grid-item--height2"></div>
				  <div className="grid-item"></div>
				  <div className="grid-item grid-item--height2"></div>
				  <div className="grid-item grid-item--height3"></div>
				  <div className="grid-item grid-item--height2"></div>
				  <div className="grid-item"></div>
				  <div className="grid-item"></div>
				  <div className="grid-item"></div>
				  <div className="grid-item grid-item--height2"></div>
				  <div className="grid-item grid-item--height3"></div>
				  <div className="grid-item"></div>
				  <div className="grid-item grid-item--height2"></div>
				  <div className="grid-item"></div>
				  <div className="grid-item grid-item--height2"></div>
				  <div className="grid-item"></div>
				  <div className="grid-item"></div>
				  <div className="grid-item grid-item--height2"></div>
				  <div className="grid-item"></div>
				  <div className="grid-item"></div>
				  <div className="grid-item grid-item--height3"></div>
				  <div className="grid-item grid-item--height2"></div>
				  <div className="grid-item"></div>
				  <div className="grid-item"></div>
				  <div className="grid-item grid-item--height2"></div>
				</div>
			</div>
		)
	}
});