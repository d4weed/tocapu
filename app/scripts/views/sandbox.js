define([
  'underscore',
  'backbone',
  'handlebars',
  'uri/URI',
  'collections/tables',
  'views/chart',
  'text!templates/sandbox.handlebars',
  'text!templates/error.handlebars'
], function(_, Backbone, Handlebars, URI,
  TablesCollection, ChartView, TPL, ERROR_TPL) {

  'use strict';

  var SandBoxView = Backbone.View.extend({

    template: Handlebars.compile(TPL),

    errorTemplate: Handlebars.compile(ERROR_TPL),

    events: {
      'submit form': 'draw'
    },

    initialize: function(options) {
      _.bindAll(this, 'render', 'showError');
      this.options = options;
    },

    render: function(collection) {
      this.$el.html(this.template({
        tables: collection.toJSON()
      }));
    },

    show: function() {
      this.$el.removeClass('hide');
    },

    hide: function() {
      this.$el.addClass('hide');
    },

    showTables: function() {
      var query = window.location.search;
      var params = URI.parseQuery(query);
      var tables = new TablesCollection({username: params.username});
      tables.fetch({
        data:  {
          q: 'SELECT * FROM CDB_UserTables()',
          apikey: params.apikey
        },
        success: this.render,
        error: this.showError
      });
    },

    showError: function(collection, err) {
      var message = JSON.parse(err.responseText);
      this.$el.html(this.errorTemplate({error: message.error}));
    },

    draw: function(e) {
      var params = $(e.currentTarget).serializeArray();
      e.preventDefault();
      if (this.chart) {
        this.chart.$el.html('');
      }
      this.chart = new ChartView({
        el: '#chartView',
        params: _.object(_.pluck(params, 'name'), _.pluck(params, 'value'))
      });
    }

  });

  return SandBoxView;

});
