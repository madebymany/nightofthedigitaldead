function Twitter(config) {

  killElements({
    regexp: new RegExp(config.name, "i"),
    elements: document.querySelectorAll(".js-navigable-stream .js-stream-item")
  });

}
