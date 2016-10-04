import Ember from 'ember';
import BrowserStore from 'browser-store/lib/browser-store';

const {
  computed,
  Service,
} = Ember;

export default Service.extend({
  token: computed({
    get() {
      return BrowserStore.getAPIToken();
    },

    set(token) {
      return BrowserStore.setAPIToken(token);
    },
  }),
});
