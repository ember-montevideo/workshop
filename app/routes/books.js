import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('book');
  },

  actions: {
    createBook: function(book) {
      book.author = this.store.createRecord('author', book.author);

      book.author.save().then(() => {
        book = this.store.createRecord('book', book);
        book.save();
      });
    }
  }
});
