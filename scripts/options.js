var optionsForm = document.forms.options;
var name;

function onNameChange(e) {
  localStorage["name"] = optionsForm.name.value;
  e.preventDefault();
}

optionsForm.addEventListener("submit", onNameChange, false);
optionsForm.name.addEventListener("input", onNameChange, false);

if (name = localStorage["name"]) {
  optionsForm.name.value = name;
}
