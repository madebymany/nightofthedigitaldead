function Google(config) {

  callAndRetry(function() {
    var hasResults = killElements({
      regexp: new RegExp(config.name, "i"),
      elements: document.querySelectorAll("#rso li.g")
    });

    if (hasResults != false) {
      killCount(document.querySelector("#resultStats").firstChild);
    }

    return hasResults;
  }, 1000);

}
