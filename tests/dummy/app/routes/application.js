import Route from '@ember/routing/route';

import { inject as service } from '@ember/service';

export default Route.extend({
  storage: service(),

  setupController() {
    this._super(...arguments);

    this.get('storage').write('test', 'it works');
  },
});
