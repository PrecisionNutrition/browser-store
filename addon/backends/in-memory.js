export default class InMemory {
  constructor() {
    this._store = {};
  }

  setItem(key, value) {
    this._store[key] = value;
  }

  getItem(key) {
    return this._store[key];
  }

  removeItem(key) {
    delete this._store[key];
  }

  get length() {
    return Object.keys(this._store).length;
  }

  clear() {
    this._store = {};
  }
}
