function Yahoo(config) {

  killElements({
    regexp: new RegExp(config.name, "i"),
    elements: document.querySelectorAll("#web .res")
  });

}
