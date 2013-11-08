function callAndRetry(fn, timeout) {
  if (!fn()) {
    window.setTimeout(function() {
      callAndRetry(fn, timeout);
    }, timeout);
  }
}
