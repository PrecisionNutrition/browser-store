import Service from '@ember/service';
import getAndInitializeBackend from '../utils/get-and-initialize-backend';
import type { Backend } from '../backends/backend';

export default class Storage extends Service {
  #backend: Backend = getAndInitializeBackend();

  get backend(): Backend {
    return this.#backend;
  }

  write(key: string, value: string): void {
    this.backend.setItem(key, value);
  }

  read(key: string): string | null {
    return this.backend.getItem(key);
  }

  del(key: string): void {
    return this.backend.removeItem(key);
  }

  clear(): void {
    this.backend.clear();
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your services.
declare module '@ember/service' {
  interface Registry {
    storage: Storage;
  }
}
