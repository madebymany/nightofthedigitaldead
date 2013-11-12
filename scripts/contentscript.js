chrome.extension.sendMessage({action: "getConfig"}, function(config) {

  if (/twitter/.test(document.location.hostname)) {
    Twitter(config);
  }

  if (/google/.test(document.location.hostname)) {
    Google(config);
  }

  if (/yahoo/.test(document.location.hostname) &&
      /^\/search/.test(document.location.pathname)) {
    Yahoo(config);
  }

  if (/bing/.test(document.location.hostname) &&
      /^\/search/.test(document.location.pathname)) {
    Bing(config);
  }

});
