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
