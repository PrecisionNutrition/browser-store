import Cookies from 'js-cookies';

export default {
  tokenStoreName: 'token',

  sessionName: '_es_session',

  setAPIToken(token) {
    Cookies.set(this.tokenStoreName, token, { path: '/' });
  },

  getAPIToken() {
    return Cookies.get(this.tokenStoreName);
  },

  removeAPIToken() {
    Cookies.remove(this.tokenStoreName);
  },

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
