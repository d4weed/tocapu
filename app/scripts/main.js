require.config({

  baseUrl: 'scripts',

  paths: {
    jquery: '../../bower_components/jquery/dist/jquery',
    foundation: '../../bower_components/foundation/js/foundation',
    underscore: '../../bower_components/underscore/underscore',
    backbone: '../../bower_components/backbone/backbone',
    handlebars: '../../bower_components/handlebars/handlebars',
    d3: '../../bower_components/d3/d3',
    nvd3: '../../bower_components/nvd3/nv.d3',
    moment: '../../bower_components/moment/moment',
    text: '../../bower_components/text/text',
    uri: '../../bower_components/uri.js/src'
  },

  shim: {
    jquery: {
      exports: '$'
    },
    foundation: {
      deps: ['jquery'],
      exports: '$'
    },
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    },
    handlebars: {
      exports: 'Handlebars'
    },
    nvd3: {
      exports: 'nv'
    }
  }

});


require([
  'foundation',
  'underscore',
  'backbone',
  'router'
], function($, _, Backbone, Router) {

  'use strict';

  /**
   * Application
   */
  var App = Backbone.View.extend({

    el: document.body,

    initialize: function() {
      $(document).foundation();
      this.router = new Router();
    },

    /**
     * Start Application
     */
    start: function() {
      Backbone.history.start({pushState: false});
    }

  });

  new App().start();

});
