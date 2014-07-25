function PromptBox() {
}

PromptBox.prototype.bindEvents = function() {
  var firstName = prompt('Please Enter your first name ').trim(),
      lastName = prompt('Please Enter your last name ').trim();
  firstNameCheck = this.checkForNull(firstName);
  lastNameCheck = this.checkForNull(lastName);
  if (firstNameCheck) {
    alert('Firstname cannot be blank');
  }
  if (lastNameCheck) {
    alert('Lastname cannot be blank');
  }
  if (!(firstNameCheck)) {
    if (!(lastNameCheck)){
      alert('Hello ' + firstName + ' ' + lastName);
      document.write(firstName + ' ' + lastName);
    }
  }
}

PromptBox.prototype.checkForNull = function(name) {
  return (name == null || name == '');
}

window.onload = function() {
  var promptbox = new PromptBox();
  promptbox.bindEvents();
}