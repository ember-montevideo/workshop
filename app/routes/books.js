import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('book');
  },

  actions: {
    createBook: function(book) {
      // books.addObject(book);
    }
  }
});
