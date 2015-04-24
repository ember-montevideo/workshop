import Ember from 'ember';

var ApplicationRoute = Ember.Route.extend({
  model: function() {
    return { title: 'El proceso', author: 'Kafka' };
  }
});

export default ApplicationRoute;
