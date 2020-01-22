import InMemoryBackend from '../backends/in-memory';
import BrowserBackend from '../backends/browser';
import isStorageAvailable from './is-storage-available';

/**
 * @private
 *
 * @param {object=} storage - Used only for dependency injection. Do not use
 *   this parameter.
 */
export default function getAndInitializeBackend(storage = window.localStorage) {
  if (isStorageAvailable(storage)) {
    return new BrowserBackend();
  } else {
    return new InMemoryBackend();
  }
}
