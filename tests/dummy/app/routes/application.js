import Route from '@ember/routing/route';

import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service storage;

  setupController() {
    super.setupController(...arguments);

    this.storage.write('test', 'it works');
  }
}
