chrome.extension.sendMessage({action: "getConfig"}, function(config) {

  if (/google/i.test(document.location.hostname)) {
    Google(config);
  }

});
