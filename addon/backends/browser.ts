import { Backend } from './backend';

export default class Browser implements Backend {
  _store = window.localStorage;

  setItem(key: string, value: string): void {
    this._store.setItem(key, value);
  }

  getItem(key: string): string | null {
    return this._store.getItem(key);
  }

  removeItem(key: string): void {
    this._store.removeItem(key);
  }

  clear(): void {
    this._store.clear();
  }

  get length(): number {
    return this._store.length;
  }
}
