define([
  'underscore',
  'backbone'
], function(_, Backbone) {

  'use strict';

  var AccountView = Backbone.View.extend({

    show: function() {
      this.$el.removeClass('hide');
    },

    hide: function() {
      this.$el.addClass('hide');
    }

  });

  return AccountView;

});
