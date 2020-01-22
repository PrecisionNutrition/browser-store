import Controller from '@ember/controller';

import { inject as service } from '@ember/service';

export default class ApplicationController extends Controller {
  @service storage;

  get storedValue() {
    return this.storage.read('test');
  }
}
