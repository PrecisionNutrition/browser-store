import Service from '@ember/service';
import getAndInitializeBackend from '../utils/get-and-initialize-backend';

export default class Storage extends Service {
  #backend = getAndInitializeBackend();

  get backend() {
    return this.#backend;
  }

  write(key: string, value: string): ReturnType<typeof this.backend.setItem> {
    this.backend.setItem(key, value);
  }

  read(key: string): ReturnType<typeof this.backend.getItem> {
    return this.backend.getItem(key);
  }

  del(key: string): ReturnType<typeof this.backend.removeItem> {
    return this.backend.removeItem(key);
  }

  clear(): ReturnType<typeof this.backend.clear> {
    this.backend.clear();
  }
}
