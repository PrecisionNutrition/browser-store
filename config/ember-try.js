'use strict';

const getChannelURL = require('ember-source-channel-url');
const { embroiderSafe, embroiderOptimized } = require('@embroider/test-setup');

module.exports = async function () {
  return {
    useYarn: true,
    scenarios: [
      {
        name: 'ember-lts-3.28',
        npm: {
          devDependencies: {
            'ember-source': '~3.20.5',
          },
        },
      },
      {
        name: 'ember-release',
        npm: {
          devDependencies: {
            'ember-source': await getChannelURL('release'),
            'ember-auto-import': '^2.0.0',
            webpack: '^5.0.0',
          },
        },
        allowedToFail: true,
      },
      {
        name: 'ember-beta',
        npm: {
          devDependencies: {
            'ember-source': await getChannelURL('beta'),
            'ember-auto-import': '^2.0.0',
            webpack: '^5.0.0',
          },
        },
        allowedToFail: true,
      },
      {
        name: 'ember-canary',
        npm: {
          devDependencies: {
            'ember-source': await getChannelURL('canary'),
            'ember-auto-import': '^2.0.0',
            webpack: '^5.0.0',
          },
        },
      },
      {
        name: 'ember-default-with-jquery',
        env: {
          EMBER_OPTIONAL_FEATURES: JSON.stringify({
            'jquery-integration': true,
          }),
        },
        npm: {
          devDependencies: {
            '@ember/jquery': '^1.1.0',
          },
        },
      },
      {
        name: 'ember-classic',
        env: {
          EMBER_OPTIONAL_FEATURES: JSON.stringify({
            'application-template-wrapper': true,
            'default-async-observers': false,
            'template-only-glimmer-components': false,
          }),
        },
        npm: {
          ember: {
            edition: 'classic',
          },
        },
      },
      embroiderSafe({
        npm: {
          devDependencies: {
            'ember-auto-import': '^2.0.0',
            webpack: '^5.0.0',
          },
          allowedToFail: true,
        },
      }),
      embroiderOptimized({
        npm: {
          devDependencies: {
            'ember-auto-import': '^2.0.0',
            webpack: '^5.0.0',
          },
          allowedToFail: true,
        },
      }),
    ],
  };
};
