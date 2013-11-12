function Google(config) {

  function killResultsCount() {
    var element = document.querySelector("#resultStats");

    if (!element) {
      return false;
    }

    var text = element.firstChild.textContent;
    var count = parseInt(text.match(/[0-9,]+/)[0].replace(/,/g, ""));

    function setCount() {
      if (count >= 0) {
        element.textContent = text.replace(/[0-9,]+/, count.toLocaleString());
        window.setTimeout(setCount, 30);
        count = Math.floor(count - count / 10);
      }
    }

    setCount();
  }

  callAndRetry(function() {
    var hasResults = killElements({
      regexp: new RegExp(config.name, "i"),
      elements: document.querySelectorAll("#rso li.g")
    });

    if (hasResults != false) {
      killResultsCount();
    }

    return hasResults;
  }, 1000);

}
