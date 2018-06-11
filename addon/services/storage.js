import { computed } from '@ember/object';
import Service from '@ember/service';
import getAndInitializeBackend from '../utils/get-and-initialize-backend';

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
