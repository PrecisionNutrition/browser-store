import Ember from 'ember';
import getAndInitializeBackend from '../utils/get-and-initialize-backend';

const {
  computed,
  Service,
} = Ember;

export default Service.extend({
  backend: computed(function() {
    return getAndInitializeBackend();
  }).readOnly(),

  write(key, value) {
    this.get('backend').setItem(key, value);
  },

  read(key) {
    return this.get('backend').getItem(key);
  },

  del(key) {
    return this.get('backend').removeItem(key);
  },

  clear() {
    this.get('backend').clear();
  },
});
