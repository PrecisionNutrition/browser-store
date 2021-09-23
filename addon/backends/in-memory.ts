import { Backend } from './backend';

export default class InMemory implements Backend {
  _store: Record<string, string> = {};

  setItem(key: string, value: string): void {
    this._store[key] = value;
  }

  getItem(key: string): string | null {
    return this._store[key] ?? null;
  }

  removeItem(key: string): void {
    delete this._store[key];
  }

  get length(): number {
    return Object.keys(this._store).length;
  }

  clear(): void {
    this._store = {};
  }
}
