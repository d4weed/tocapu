define([
  'underscore',
  'backbone'
], function(_, Backbone) {

  'use strict';

  var TablesCollection = Backbone.Collection.extend({

    comparator: 'cdb_usertables',

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

  return TablesCollection;

});
