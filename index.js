/* eslint-env node */
'use strict';

module.exports = {
  name: 'browser-store',

  afterInstall: function() {
    return this.addBowerPackagesToProject([
      { name: 'amplify', target: '~1.1.2' },
    ]);
  },

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/amplify/lib/amplify.store.min.js');
  }
};
