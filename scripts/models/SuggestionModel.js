var parseSettings = require('../../config/parse.js');
var Backbone = require('backparse')(parseSettings);

module.exports = Backbone.Model.extend({
	defaults: {
		restaurant: null,
		product: null,
		createdAt: null,
		address: null,
		category: null,
		lat: null,
		lng: null
	},
	parseClassName: 'Post',
    idAttribute: 'objectId'
});