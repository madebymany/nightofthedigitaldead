chrome.extension.sendMessage({action: "getConfig"}, function(config) {

  if (/twitter/.test(document.location.hostname)) {
    Twitter(config);
    return;
  }

  if (/google/.test(document.location.hostname)) {
    Google(config);
    return;
  }

  if (/yahoo/.test(document.location.hostname) &&
      /^\/search/.test(document.location.pathname)) {
    Yahoo(config);
    return;
  }

  if (/bing/.test(document.location.hostname) &&
      /^\/search/.test(document.location.pathname)) {
    Bing(config);
    return;
  }

  walk(document.body, function(node) {
    var regexp =  new RegExp(config.name, "gi");
    var parent = node.parentNode;

    var nameNode = document.createElement("div");
    nameNode.innerHTML = config.name;
    lineThrough(nameNode);

    parent.innerHTML = parent.innerHTML.replace(regexp, nameNode.innerHTML);
  });

});
