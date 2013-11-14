function Twitter(config) {

  var regexp = new RegExp(config.name, "i");
  var fullName = document.querySelector(".fullname .profile-field");

  if (regexp.test(fullName.innerHTML)) {

    document.querySelector(".profile-picture .avatar").classList.add("fadeout");

    window.setTimeout(function() {
      lineThrough(fullName);
    }, 600);

    window.setTimeout(function() {
      lineThrough(document.querySelector(".username .screen-name"));
    }, 800);

    window.setTimeout(function() {
      lineThrough(document.querySelector(".bio"));
    }, 1000);

    window.setTimeout(function() {
      lineThrough(document.querySelector(".location-and-url .location"));
    }, 1200);

    window.setTimeout(function() {
      lineThrough(document.querySelector(".location-and-url .url .profile-field"));
    }, 1400);

    killCount(document.querySelector(
      "[data-element-term=tweet_stats] strong"));
    killCount(document.querySelector(
      "[data-element-term=following_stats] strong"));
    killCount(document.querySelector(
      "[data-element-term=follower_stats] strong"));

  }

  killElements({
    regexp: regexp,
    elements: document.querySelectorAll(".js-navigable-stream .js-stream-item")
  });

}
