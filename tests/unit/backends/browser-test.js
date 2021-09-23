import Browser from 'dummy/backends/browser';
import { module, test } from 'qunit';

module('Unit | Backends | Browser', function (hooks) {
  hooks.afterEach(function () {
    window.localStorage.clear();
  });

  test('setItem', function (assert) {
    let subject = new Browser();

    subject.setItem('foo', 'bar');

    let directValue = window.localStorage.getItem('foo');

    assert.equal(directValue, 'bar', 'writes to the local storage');
  });

  test('getItem', function (assert) {
    let subject = new Browser();

    subject.setItem('foo', 'bar');

    let value = subject.getItem('foo');

    assert.equal(value, 'bar', 'retrieves a value from the store');
  });

  test('removeItem', function (assert) {
    let subject = new Browser();

    subject.setItem('foo', 'bar');

    subject.removeItem('foo');

    let value = subject.getItem('foo');

    assert.equal(value, null, 'removes an item from storage');
  });

  test('clear', function (assert) {
    let subject = new Browser();

    subject.setItem('foo', 'bar');

    subject.clear();

    assert.equal(subject.length, 0, 'clears the storage');
  });
});
