function FormValidation(formElement, formElements, textareaElement, confirmCheckbox) {
  this.formElement = formElement;
  this.formElements = formElements;
  this.textareaElement = textareaElement;
  this.confirmCheckbox = confirmCheckbox;
}

FormValidation.prototype.bindEvents = function(event) {
  var _this = this;
  _this.formElement.addEventListener('submit', function(event) {
    var checkforempty = _this.checkForEmpty();
    var checktextarea = _this.checkTextArea();
    var checkfornotifications = _this.checkForNotifications(); 
    (checkforempty && checktextarea && checkfornotifications) ? '' : event.preventDefault();
  } );
}

FormValidation.prototype.checkForEmpty = function() {
  var count = 1;
  for (var i = 0; i < this.formElements.length; i++) {
    if (this.formElements[i].value == null || this.formElements[i].value == '') {
      var innertext = document.getElementsByClassName(this.formElements[i].id)[0].innerHTML;
      alert(innertext + ' cant be empty.');
    }
    else {
      ++count;
    }
  }
  if (count < this.formElements.length) {
    return false;
  }
  else {
    return true;
  }
}

FormValidation.prototype.checkTextArea = function() {
  var innertext = document.getElementsByClassName(this.textareaElement.id)[0].innerHTML;
  if (this.textareaElement.value == null || this.textareaElement.value == '') {
    alert(innertext + 'cant be empty.');
    return false;
  }
  else {
    return true;
  }
  if (this.textareaElement.value.length < 50) {
    alert(innertext + 'cant be less than 50 characters.');
    return false;
  }
  else {
    return true;
  }
}

FormValidation.prototype.checkForNotifications = function() {
  if (!(this.confirmCheckbox.checked)) {
    alert('Confirm Notifications');
    return false;
  }
  else {
    return true;
  }
}

window.onload = function() {
  var formElement = document.forms[0];
  var formElements = document.getElementsByClassName('textbox');
  var textareaElement = document.getElementById('aboutme');
  var confirmCheckbox = document.getElementById('confirm');
  var form = new FormValidation(formElement, formElements, textareaElement, confirmCheckbox);
  form.bindEvents();
}