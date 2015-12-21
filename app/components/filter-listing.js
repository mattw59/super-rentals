import Ember from 'ember';

export default Ember.Component.extend({
  filter: null,
  actions: {
    filterListing() {
      console.log('hello');
      console.log(this.get('filter'));
    }
  }
});
