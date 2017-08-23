import Cookies from 'js-cookie';

export default {
  sessionName: '_es_session',

  removeSessionToken() {
    Cookies.remove(this.sessionName);
  },

  setItem(name, value) {
    return amplify.store(name, value);
  },

  getItem(name) {
    return amplify.store(name);
  },

  removeItem(name) {
    return amplify.store(name, null);
  },

  clearStore() {
    let keys = Object.keys(amplify.store());

    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      amplify.store(key, null);
    }
  }
};
