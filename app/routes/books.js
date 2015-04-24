import Ember from 'ember';

var books = [
  { title: 'El proceso', author: { firstName: 'Franz', lastName: 'Kafka' }},
  { title: 'Rebelión en la granja', author: { firstName: 'George', lastName: 'Orwell' }},
  { title: '1984', author: { firstName: 'George', lastName: 'Orwell' }}
];

export default Ember.Route.extend({
  model: function() {
    return books;
  }
});
