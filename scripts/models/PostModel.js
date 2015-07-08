var parseSettings = require('../../config/parse.js');
var Backbone = require('backparse')(parseSettings);

module.exports = Backbone.Model.extend({
    defaults: {
        image: '',
        userId: '',
        caption: '',
        suggestionId: '',
        createdAt: ''
    },
    parseClassName: 'Post',
    idAttribute: 'objectId'
});
