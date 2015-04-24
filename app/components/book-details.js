import Ember from 'ember';

function upper(value) {
  return value ? value.toUpperCase() : '';
}

export default Ember.Component.extend({
  tagName: '',

  authorFullName: Ember.computed(function() {
    return upper(this.get('book.author.lastName')) + ', ' + this.get('book.author.firstName');
  })
});
