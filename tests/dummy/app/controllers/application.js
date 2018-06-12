import Controller from '@ember/controller';

import { inject as service } from '@ember/service';

import { computed } from '@ember/object';

export default Controller.extend({
  storage: service(),

  storedValue: computed(function() {
    return this.get('storage').read('test');
  }),
});
