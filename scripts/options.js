var optionsForm = document.forms.options;
var name;

optionsForm.addEventListener("submit", function(e) {
  localStorage["name"] = optionsForm.name.value;
  e.preventDefault();
}, false);

optionsForm.name.value = "Jack the Ripper";

if (name = localStorage["name"]) {
  optionsForm.name.value = name;
}
