import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | storage', function(hooks) {
  setupTest(hooks);

  hooks.beforeEach(function() {
    this.service = this.owner.lookup('service:storage');
  });

  test('backend is initialized', function(assert) {
    assert.ok(!!this.service.backend);
  });

  test('backend cannot be written to', function(assert) {
    assert.throws(() => {
      this.service.set('backend', 'foo');
    });
  });

  test('backend can be written to', function(assert) {
    let backend = this.service.backend;

    try {
      this.service.write('foo', 'bar');

      assert.equal(
        backend.getItem('foo'),
        'bar'
      );
    } finally {
      backend.clear();
    }
  });

  test('backend can be read from', function(assert) {
    let backend = this.service.backend;

    try {
      this.service.write('foo', 'bar');

      let value = this.service.read('foo');

      assert.equal(
        value,
        'bar'
      );
    } finally {
      backend.clear();
    }
  });

  test('backend can be wiped clean', function(assert) {
    let backend = this.service.backend;

    try {
      this.service.write('foo', 'bar');

      this.service.clear();

      let value = this.service.read('foo');

      assert.equal(
        value,
        null
      );
    } finally {
      backend.clear();
    }
  });

  test('backend can delete key', function(assert) {
    let backend = this.service.backend;

    try {
      this.service.write('foo', 'bar');

      this.service.del('foo');

      let value = this.service.read('foo');

      assert.equal(
        value,
        null
      );
    } finally {
      backend.clear();
    }
  });
});
