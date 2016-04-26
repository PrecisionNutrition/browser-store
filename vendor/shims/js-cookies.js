(function() {
  function vendorModule() {
    'use strict';

    return { 'default': self['Cookies'] };
  }

  define('js-cookie', [], vendorModule);
})();
