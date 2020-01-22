import InMemoryBackend from '../backends/in-memory';
import BrowserBackend from '../backends/browser';

/**
 * @private
 *
 * @param {object=} storage - Used only for dependency injection. Do not use
 *   this parameter.
 */
export default function getAndInitializeBackend(storage = window.localStorage) {
  try {
    const tempKey = '$$$test$$$';

    storage.setItem(tempKey, 'bar');
    storage.removeItem(tempKey);

    return new BrowserBackend();
  } catch (_) {
    return new InMemoryBackend();
  }
}
