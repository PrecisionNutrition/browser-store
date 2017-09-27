import { moduleFor, test } from 'ember-qunit';

moduleFor('service:storage', 'Unit | Service | storage', {
});

test('backend is initialized', function(assert) {
  let service = this.subject();

  assert.ok(
    !!service.get('backend'),
  );
});

test('backend cannot be written to', function(assert) {
  let service = this.subject();

  assert.throws(function() {
    service.set('backend', 'foo');
  });
});

test('backend can be written to', function(assert) {
  let service = this.subject();
  let backend = service.get('backend');

  try {
    service.write('foo', 'bar');

    assert.equal(
      backend.getItem('foo'),
      'bar'
    );
  } finally {
    backend.clear();
  }
});

test('backend can be read from', function(assert) {
  let service = this.subject();
  let backend = service.get('backend');

  try {
    service.write('foo', 'bar');

    let value = service.read('foo');

    assert.equal(
      value,
      'bar'
    );
  } finally {
    backend.clear();
  }
});

test('backend can be wiped clean', function(assert) {
  let service = this.subject();
  let backend = service.get('backend');

  try {
    service.write('foo', 'bar');

    service.clear();

    let value = service.read('foo');

    assert.equal(
      value,
      null
    );
  } finally {
    backend.clear();
  }
});

test('backend can delete key', function(assert) {
  let service = this.subject();
  let backend = service.get('backend');

  try {
    service.write('foo', 'bar');

    service.del('foo');

    let value = service.read('foo');

    assert.equal(
      value,
      null
    );
  } finally {
    backend.clear();
  }
});
