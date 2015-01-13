define([
  'underscore',
  'backbone',
  'd3',
  'nvd3',
  'uri/URI',
  'collections/data'
], function(_, Backbone, d3, nv, URI, DataCollection) {

  'use strict';

  var ChartView = Backbone.View.extend({

    initialize: function(options) {
      _.bindAll(this, 'parseData');
      this.params = options.params;
      this.draw();
    },

    draw: function() {
      var chart = nv.models.scatterChart()
        .showDistX(true)
        .showDistY(true)
        .transitionDuration(350)
        .color(d3.scale.category10().range());

      chart.scatter.onlyCircles(true);

      this.getData()
        .done(_.bind(function(collection) {
          var data = this.parseData(collection.toJSON());
          d3.select('#chartView')
            .append('svg')
            .attr('width', this.$el.width())
            .attr('height', 500)
            .datum(data)
            .call(chart);
        }, this));
    },

    getData: function() {
      var deferred = new $.Deferred();
      var query = window.location.search;
      var urlParams = URI.parseQuery(query);
      var data = new DataCollection({
        username: urlParams.username
      });
      var template = _.template('SELECT <%= columns %> FROM <%= table %>');
      data.fetch({
        data: {
          q: this.params.query || template({
            table: this.params.table,
            columns: [this.params.xcolumn, this.params.ycolumn].join(',')
          }),
          apikey: urlParams.apikey
        },
        success: deferred.resolve
      });
      return deferred.promise();
    },

    parseData: function(data) {
      var result = [{
        values: _.map(data, function(d) {
          var x = Number(d[this.params.xcolumn]);
          var y = Number(d[this.params.ycolumn]);
          return {
            x: x,
            y: y,
            size: y / x
          };
        }, this)
      }];
      return result;
    }

  });

  return ChartView;

});
