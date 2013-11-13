function Twitter(config) {

  document.querySelector(".profile-picture .avatar").classList.add("blurring");

  window.setTimeout(function() {
    lineThrough(document.querySelector(".fullname .profile-field"));
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

  killElements({
    regexp: new RegExp(config.name, "i"),
    elements: document.querySelectorAll(".js-navigable-stream .js-stream-item")
  });

}
