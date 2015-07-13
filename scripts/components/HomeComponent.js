var React = require('react');
var $ = require('jquery');
var Masonry = require('../../node_modules/masonry-layout/masonry.js');

// var suggestionModel = require('../models/SuggestionModel.js');

var suggestionList = [];

module.exports = React.createClass({
	getInitialState: function() {
		return {
			suggArray: []
		}
	},
	componentDidMount: function() {
			var that = this;
			setTimeout(function() {
				var grid = document.querySelector('.grid');
				
				var msnry = new Masonry( grid, {
				 	 // options...
				 	itemSelector: '.grid-item',
				 	columnWidth: 0,
				  	isFitWidth: true
				})
			}, 500);
	},
	render: function() 	{
		this.props.suggestions.models.reverse(); 

		var restEls = this.props.suggestions.map(function(suggestionModel) {
			return (
			  <div className="grid-item">
			  	<img src={suggestionModel.get('photo')}/>
			  	<div className="categoryDiv"><a href={'#category/'+suggestionModel.get('category')} className="postCat">{suggestionModel.get('category')}</a></div>
			  </div>
					
			)
		});

		return (
			<div>
				<div className="homeContainer">
					<div className="bg-img">
						<div className="hello">Put Your City Where Your Mouth Is</div>
						<div className="hello2">Scroll for noms \/</div>
					</div>

					<div className="grid" ref="grid">
					  {restEls}
					</div>
				</div>
			</div>
		);
		
	}
});