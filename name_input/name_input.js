function PromptForName() {
}

PromptForName.prototype.inputName = function() {
  var firstName,
      lastName;
  while(!(firstName)) {
    var firstName = prompt('Please Enter your first name ').trim();
    this.checkForEmpty(firstName);
  }
  while(!(lastName)) {
      lastName = prompt('Please Enter your last name ').trim();
      this.checkForEmpty(lastName);
  }
  this.alertAndWrite(firstName, lastName);
}

PromptForName.prototype.alertAndWrite = function(firstName, lastName) {
  nameString = firstName + ' ' + lastName
  alert('Hello ' + nameString);
  document.write(nameString);
}

PromptForName.prototype.checkForEmpty = function(name) {
  if (name == null || name.length == 0) {
    alert('Name Field cant be empty');
  }
}

window.onload = function() {
  var promptForName = new PromptForName();
  promptForName.inputName();
}
