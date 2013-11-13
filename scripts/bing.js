function Bing(config) {

  killResultsCount(document.querySelector("#count"));

  killElements({
    regexp: new RegExp(config.name, "i"),
    elements: document.querySelectorAll("#results ul > li")
  });

}
