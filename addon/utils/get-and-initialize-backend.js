import InMemoryBackend from '../backends/in-memory';
import BrowserBackend from '../backends/browser';

export default function getAndInitializeBackend() {
  try {
    const tempKey = '$$$test$$$';

    localStorage.setItem(tempKey, 'bar');
    localStorage.removeItem(tempKey);

    return new BrowserBackend();
  } catch (_) {
    return new InMemoryBackend();
  }
}
