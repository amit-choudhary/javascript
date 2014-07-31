function PromptForName() {
}

PromptForName.prototype.inputName = function(nameType) {
  var name;
  while(!(name)) {
    name = prompt('Please Enter your ' + nameType + ' name ').trim();
    this.checkForEmpty(name);
    completeName += name + ' ';
  }
}

PromptForName.prototype.alertAndWrite = function(completeName) {
  alert('Hello ' + completeName);
  document.write(completeName);
}

PromptForName.prototype.checkForEmpty = function(name) {
  if (name == null || name.length == 0) {
    alert('Name Field cant be empty');
  }
}

window.onload = function() {
  var promptForName = new PromptForName();
  completeName = '';
  promptForName.inputName('first');
  promptForName.inputName('second');
  promptForName.alertAndWrite(completeName);
}
