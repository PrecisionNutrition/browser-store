import Service from '@ember/service';
import getAndInitializeBackend from '../utils/get-and-initialize-backend';

export default class Storage extends Service {
  get backend() {
    return getAndInitializeBackend();
  }

  write(key, value) {
    this.backend.setItem(key, value);
  }

  read(key) {
    return this.backend.getItem(key);
  }

  del(key) {
    return this.backend.removeItem(key);
  }

  clear() {
    this.backend.clear();
  }
}
