import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var index = Number(params.id);

    return this.modelFor('books')[index];
  }
});
