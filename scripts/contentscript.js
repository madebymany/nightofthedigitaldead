function closest(node, condition) {
  if (condition(node)) {
    return node;
  } else {
    closest(node.parentNode, condition);
  }
}

function walk(node) {
  var child, next;

  switch (node.nodeType) {
    case 1:  // Element
    case 9:  // Document
    case 11: // Document fragment
      child = node.firstChild;
      while (child) {
        next = child.nextSibling;
        walk(child);
        child = next;
      }
      break;
    case 3: // Text node
      // Do something with node here
      break;
  }
}

chrome.extension.sendMessage({action: "getName"}, function(response) {
  var name = response.name;
  var googleSearchResults = document.querySelectorAll(".g");

  for (var i = 0; i < googleSearchResults.length; i++) {
    // Find nodes containing your name here
    // googleSearchResults[i]
  }
});
