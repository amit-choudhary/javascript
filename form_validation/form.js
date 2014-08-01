function FormValidation(formElement, formElements, textareaElement, confirmCheckbox) {
  this.formElement = formElement;
  this.formElements = formElements;
  this.textareaElement = textareaElement;
  this.confirmCheckbox = confirmCheckbox;
}

FormValidation.prototype.checkFormOnSubmit = function(event) {
  var _this = this;
  _this.formElement.addEventListener('submit', function(event) {
    var checkforempty = _this.checkForEmpty(_this.formElements),
        checktextareaelement = _this.checkTextArea(),
        checknotifications = _this.confirmNotifications();
    (checkforempty && checktextareaelement && checknotifications) ? _this.alertSubmitMessage() : event.preventDefault();
  } );
}

FormValidation.prototype.checkForEmpty = function(elementsArray) {
  var count = 0;
  for (var i = 0; i < elementsArray.length; i++) {
    if (elementsArray[i].value == null || elementsArray[i].value == '') {
      var innertext = document.getElementsByClassName(elementsArray[i].id)[0].innerHTML;
      alert(innertext + ' cant be empty.');
    }
    else {
      ++count;
    }
  }
  if (count < elementsArray.length) {
    return false;
  }
  else {
    return true;
  }
}

FormValidation.prototype.checkTextArea = function() {
  var innertext = document.getElementsByClassName(this.textareaElement[0].id)[0].innerHTML;
  var checktextareaboolean = this.checkForEmpty(this.textareaElement);
  if (!checktextareaboolean) { 
    return false;
  }
  else if (this.textareaElement[0].value.length < 50) {
    alert(innertext + 'cant be less than 50 characters.');
    return false;
  }
  else {
    return true;
  }
}

FormValidation.prototype.confirmNotifications = function() {
  var confirmnotifications = confirm('Confirm Notifications');
  return confirmnotifications;
}

FormValidation.prototype.alertSubmitMessage = function() {
  alert('Your form is successfully submitted');
}

window.onload = function() {
  var formElement = document.forms[0],
      formElements = document.getElementsByClassName('textbox'),
      textareaElement = document.getElementsByClassName('textboxarea'),
      confirmCheckbox = document.getElementById('confirm'),
      form = new FormValidation(formElement, formElements, textareaElement, confirmCheckbox);
  form.checkFormOnSubmit();
}