var Google = function(config) {

  var nameRegex = new RegExp(config.name, "i");

  this.killResultsCount = function() {
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
  };

  this.killResults = function() {
    var elements = document.querySelectorAll("#rso li.g");
    var results;
    var result;
    var i = 0;

    results = Array.apply(null, elements).filter(function(r) {
      return nameRegex.test(r.innerHTML);
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
    this.killResultsCount();
  };

  callAndRetry(this.killResults, 1000);

};
