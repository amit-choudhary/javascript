function PromptForName() {
}

PromptForName.prototype.inputName = function(nameType) {
  var name;
  while(!(name)) {
    name = prompt('Please Enter your ' + nameType + ' name ').trim();
  }
  return name;
}

PromptForName.prototype.alertAndWrite = function(firstname, lastname) {
  var nameString = firstname + ' ' + lastname;
  alert('Hello ' + nameString);
  document.write(nameString);
}

window.onload = function() {
  var promptForName = new PromptForName();
  promptForName.alertAndWrite(promptForName.inputName('first'),promptForName.inputName('second'));
}
