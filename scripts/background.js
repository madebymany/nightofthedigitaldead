chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action == "getConfig") {
    sendResponse({
      name: localStorage["name"]
    });
  }
});
