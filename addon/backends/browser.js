export default class Browser {
  constructor() {
    this._store = window.localStorage;
  }

  setItem(key, value) {
    this._store.setItem(key, value);
  }

  getItem(key) {
    let oldAmplifyItemKey = `__amplify__${key}`;
    let item = this._store.getItem(oldAmplifyItemKey);

    if (item) {
      this.removeItem(oldAmplifyItemKey);
      this.setItem(key, item);

      return item;
    } else {
      return this._store.getItem(key);
    }
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
