import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',

  authorFullName: Ember.computed(function() {
    return this.get('book.author.lastName').toUpperCase() + ', ' + this.get('book.author.firstName');
  })
});
