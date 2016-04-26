/* jshint node: true */
'use strict';

module.exports = {
  name: 'browser-store',

  afterInstall: function() {
    return this.addBowerPackagesToProject([
      { name: 'js-cookie', target: '~2.1.1' },
      { name: 'amplify', target: '~1.1.2' }
    ]);
  },

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/js-cookie/src/js.cookie.js');
    app.import('vendor/shims/js-cookies.js');
    app.import(app.bowerDirectory + '/amplify/lib/amplify.store.min.js');
  }
};
