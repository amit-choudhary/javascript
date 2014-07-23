function PromptBox() {
}

PromptBox.prototype.bindEvents = function() {
  var firstName = prompt('Please Enter your first name ').trim();
  var lastName = prompt('Please Enter your last name ').trim();
  firstNameCheck = (firstName == null || firstName == '');
  lastNameCheck = (lastName == null || lastName == '');
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

window.onload = function() {
  var promptbox = new PromptBox();
  promptbox.bindEvents();
}