chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action == "getName") {
    sendResponse({name: localStorage["name"]});
  }
});
