function Bing(config) {

  killElements({
    regexp: new RegExp(config.name, "i"),
    elements: document.querySelectorAll("#results ul > li")
  });

}
