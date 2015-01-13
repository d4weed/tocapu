define([
  'backbone',
  'views/account',
  'views/sandbox'
], function(Backbone, AccountView, SandBoxView) {

  'use strict';

  var Router = Backbone.Router.extend({

    routes: {
      '(/)': 'account',
      'sandbox(/)': 'sandbox'
    },

    initialize: function() {
      this.account = new AccountView({el: '#accountView'});
      this.sandbox = new SandBoxView({el: '#sandBoxView'});
      this.setListeners();
    },

    setListeners: function() {
      this.sandbox.listenTo(this, 'route:sandbox', this.sandbox.showTables);
    },

    account: function() {
      this.sandbox.hide();
      this.account.show();
    },

    sandbox: function() {
      this.account.hide();
      this.sandbox.show();
    }

  });

  return Router;

});
