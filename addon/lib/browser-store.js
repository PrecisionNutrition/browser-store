import Storage from '../services/storage';

const storage = Storage.create();

export default {
  sessionName: '_es_session',

  setItem(name, value) {
    storage.write(name, value);

    return storage.read(name);
  },

  getItem(name) {
    return storage.read(name);
  },

  removeItem(name) {
    return storage.del(name);
  },

  clearStore() {
    storage.clear();
  },
};
