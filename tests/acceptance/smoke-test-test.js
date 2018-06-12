import { module, test } from 'qunit';
import { find, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | smoke test', function(hooks) {
  setupApplicationTest(hooks);

  test('it works', async function(assert) {
    await visit('/');

    let element = find('[data-test-selector="smoke-test"]');

    assert.equal(element.textContent.trim(), 'it works');
  });
});
