import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var index = Number(params.id) - 1;

    return this.modelFor('books')[index];
  }
});
