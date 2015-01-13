define([
  'underscore',
  'backbone'
], function(_, Backbone) {

  'use strict';

  var DataModel = Backbone.Collection.extend({

    template: _.template('http://<%= username %>.cartodb.com/api/v2/sql'),

    url: function() {
      return this.template({username: this.username});
    },

    initialize: function(options) {
      this.username = options.username || '';
    },

    parse: function(data) {
      return data.rows;
    }

  });

  return DataModel;

});
