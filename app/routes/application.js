import Ember from 'ember';

var books = [
  { title: 'El proceso', author: 'Kafka' },
  { title: 'Rebelión en la granja', author: 'Orwell' },
  { title: '1984', author: 'Orwell' }
];

var ApplicationRoute = Ember.Route.extend({
  model: function() {
    return books;
  }
});

export default ApplicationRoute;
