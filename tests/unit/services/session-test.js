import { moduleFor, test } from 'ember-qunit';
import BrowserStore from 'browser-store/lib/browser-store';

moduleFor('service:session', 'Unit | Service | session', {
  afterEach() {
    BrowserStore.removeAPIToken();
  },
});

test('token can be retrieved', function(assert) {
  BrowserStore.setAPIToken('MY FAKE TOKEN');

  let service = this.subject();

  let token = service.get('token');

  assert.equal(token, 'MY FAKE TOKEN');
});

test('token can be set', function(assert) {
  let service = this.subject();

  service.set('token', 'MY FAKE TOKEN');

  let token = service.get('token');

  assert.equal(token, 'MY FAKE TOKEN', 'can set token');

  assert.equal(BrowserStore.getAPIToken(), 'MY FAKE TOKEN', 'setting trickles backward');
});
