var Backbone = require('backbone');
var SuggestionModel = require('../models/SuggestionModel');

module.exports = Backbone.Collection.extend({
    model: PostModel,
    parseClassName: 'Suggestion'
});