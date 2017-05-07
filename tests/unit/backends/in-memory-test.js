import InMemory from 'dummy/backends/in-memory';
import { module, test } from 'qunit';

module('Unit | Backends | In Memory');

test('initialization', function(assert) {
  let subject = new InMemory();

  let store = subject._store;

  assert.equal(
    typeof store,
    'object'
  );

  assert.equal(
    Object.keys(store).length,
    0,
    'is an empty object'
  );
});

test('setItem', function(assert) {
  let subject = new InMemory();

  subject.setItem('foo', 'bar');

  let store = subject._store;

  assert.equal(
    store.foo,
    'bar',
    'writes the value to its storage'
  );
});

test('getItem', function(assert) {
  let subject = new InMemory();

  subject.setItem('foo', 'bar');

  let value = subject.getItem('foo');

  assert.equal(
    value,
    'bar',
    'retrieves a value from the store'
  );
});

test('removeItem', function(assert) {
  let subject = new InMemory();

  subject.setItem('foo', 'bar');

  subject.removeItem('foo');

  let value = subject.getItem('foo');

  assert.equal(
    value,
    null,
    'removes the value from the store'
  );
});

test('clear', function(assert) {
  let subject = new InMemory();

  subject.setItem('foo', 'bar');

  assert.equal(
    subject.length,
    1
  );

  subject.clear();

  assert.equal(
    subject.length,
    0,
    'removes all items from storage'
  );
});
