import getAndInitializeBackend from 'dummy/utils/get-and-initialize-backend';
import BrowserBackend from 'dummy/backends/browser';
import InMemoryBackend from 'dummy/backends/in-memory';
import { module, test } from 'qunit';

class FakeStorage {
  setItem() {
    throw 'quota exceeded, like in old Private Safari';
  }

  removeItem() {
  }
}

module('Unit | Utility | get and initialize backend', function() {
  test('when setting to local storage works', function(assert) {
    const backend = getAndInitializeBackend();

    assert.ok(
      backend instanceof BrowserBackend,
      'is the browser backend proxy'
    );
  });

  test('when setting to local storage throws', function(assert) {
    const storage = new FakeStorage();

    const backend = getAndInitializeBackend(storage);

    assert.ok(
      backend instanceof InMemoryBackend,
      'uses in-memory backend'
    );
  });
});
