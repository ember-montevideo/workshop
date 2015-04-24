import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    create: function() {
      var book = {
        title: this.get('title'),
        author: {
          firstName: this.get('authorFirstName'),
          lastName: this.get('authorLastName')
        }
      };

      this.setProperties({
        title: '',
        authorFirstName: '',
        authorLastName: ''
      });

      this.sendAction('create', book);
    }
  }
});
