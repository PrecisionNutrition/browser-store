export default class Browser {
  constructor() {
    this._store = window.localStorage;
  }

  setItem(key, value) {
    this._store.setItem(key, value);
  }

  getItem(key) {
    return this._store.getItem(key);
  }

  removeItem(key) {
    this._store.removeItem(key);
  }

  clear() {
    this._store.clear();
  }

  get length() {
    return this._store.length;
  }
}
