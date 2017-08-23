import BrowserStore from 'browser-store/lib/browser-store';
import { module, test } from 'qunit';
import Cookies from 'js-cookie';

module('BrowserStore');

test('#removeSessionToken', function(assert) {
  Cookies.set(BrowserStore.sessionName, 'hadfklasdjfkj');
  BrowserStore.removeSessionToken();

  assert.ok(!Cookies.get(BrowserStore.sessionName), 'should remove the session token');
});

test('#setItem', function(assert) {
  let key = 'myKey';
  let expectedValue = 'myValue';

  BrowserStore.setItem(key, expectedValue);

  let actualValue = amplify.store(key);

  assert.equal(actualValue, expectedValue, 'should set a value into the browser localStorage');
});

test('#getItem', function(assert) {
  let key = 'myKey';
  let expectedValue = 'myValue';

  amplify.store(key, expectedValue);

  let actualValue = BrowserStore.getItem(key);

  assert.equal(actualValue, expectedValue, 'should retrieve a set value');

  actualValue = BrowserStore.getItem('some-key-that-does-not-exist');

  assert.equal(actualValue, null, 'is null when the key has been set');
});

test('#removeItem', function(assert) {
  let key = 'myKey';
  let value = 'myValue';

  BrowserStore.setItem(key, value);
  BrowserStore.removeItem(key);

  assert.equal(BrowserStore.getItem(key), null, 'should null out a value at the provided key');
});

test('#clearStore', function(assert) {
  let key1 = 'myKey1';
  let key2 = 'myKey2';

  BrowserStore.setItem(key1, 'asdfjalsdjf');
  BrowserStore.setItem(key2, 'lakdjflajsdf');

  BrowserStore.clearStore();

  assert.equal(BrowserStore.getItem(key1), null);
  assert.equal(BrowserStore.getItem(key2), null);
});
