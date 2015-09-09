/* jshint node: true */
'use strict';

module.exports = {
  name: 'browser-store',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/js-cookie/src/js.cookie.js');
    app.import(app.bowerDirectory + '/amplify/lib/amplify.store.min.js');
  }
};
