import getAndInitializeBackend from 'dummy/utils/get-and-initialize-backend';
import BrowserBackend from 'dummy/backends/browser';
import InMemoryBackend from 'dummy/backends/in-memory';
import sinon from 'sinon';
import { module, test } from 'qunit';

module('Unit | Utility | get and initialize backend');

test('when setting to local storage works', function(assert) {
  let backend = getAndInitializeBackend();

  assert.ok(
    backend instanceof BrowserBackend,
    'is the browser backend proxy'
  );
});

test('when setting to local storage throws', function(assert) {
  try {
    sinon.stub(window.localStorage, 'setItem').callsFake(function () {
      throw 'quota exceeded, like in Private Safari';
    });

    let backend = getAndInitializeBackend();

    assert.ok(
      backend instanceof InMemoryBackend,
      'uses in-memory backend'
    );
  } catch (err) {
    assert.ok(
      false,
      'something bad happened'
    );

    throw err;
  } finally {
    window.localStorage.setItem.restore();
  }
});
