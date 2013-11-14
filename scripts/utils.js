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
      result.classList.add("falling");
      window.setTimeout(findNextResult,
                        Math.floor(Math.random() * 2200) + 400);
      i++;
    }
  }

  findNextResult();
}

function killCount(element) {
  var text = element.textContent;
  var count = parseInt(text.match(/[0-9,]+/)[0].replace(/,/g, ""));

  function setCount() {
    if (count >= 0) {
      element.textContent = text.replace(/[0-9,]+/, count.toLocaleString());
      window.setTimeout(setCount, 100);
      count = Math.floor(count - count / 20);
    }
  }

  setCount();
}

function lineThrough(element) {
  span = document.createElement("span");
  span.innerHTML = element.innerHTML;
  span.style.textDecoration = "line-through";
  element.innerHTML = "";
  element.appendChild(span);
}

function walk(node, fn) {
  var child, next;

  switch (node.nodeType) {
    case 1:  // Element
    case 9:  // Document
    case 11: // Document fragment
      child = node.firstChild;
      while (child) {
        next = child.nextSibling;
        walk(child, fn);
        child = next;
      }
      break;
    case 3: // Text node
      fn(node);
      break;
  }
}
