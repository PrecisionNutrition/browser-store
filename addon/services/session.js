import Ember from 'ember';
import BrowserStore from 'browser-store/lib/browser-store';

const {
  computed,
  Service,
} = Ember;

export default Service.extend({
  csrfToken: computed({
    get() {
      return BrowserStore.getItem('csrf-token');
    },

    set(_, newCsrfToken) {
      BrowserStore.setItem('csrf-token', newCsrfToken);

      return newCsrfToken;
    },
  }),
});
