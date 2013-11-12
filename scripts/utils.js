function callAndRetry(fn, timeout) {
  if (!fn()) {
    window.setTimeout(function() {
      callAndRetry(fn, timeout);
    }, timeout);
  }
}

function killElements(options) {
  var regexp = options.regexp;
  var elements = options.elements;
  var results;
  var result;
  var i = 0;

  results = Array.apply(null, elements).filter(function(r) {
    return regexp.test(r.innerHTML);
  });

  if (!results.length) {
    return false;
  }

  function findNextResult() {
    if (result = results[i]) {
      result.classList.add("hinge");
      window.setTimeout(findNextResult,
                        Math.floor(Math.random() * 2200) + 400);
      i++;
    }
  }

  findNextResult();
}
