function FormValidation(formElement, formElements, textareaElement, confirmCheckbox, emailbox, urlbox) {
  this.formElement = formElement;
  this.formElements = formElements;
  this.textareaElement = textareaElement;
  this.confirmCheckbox = confirmCheckbox;
  this.emailbox = emailbox;
  this.urlbox = urlbox;
}

FormValidation.prototype.checkFormOnSubmit = function() {
  var _this = this,
      emailRegex = /^(([(\w+)(\.){0,1}!#$%&'*+-\/=?^_`{|}~])+@(([a-zA-Z0-9])+(\.([a-zA-Z0-9]){2,3})+)+)$/,
      urlRegex = /^((http(s)?:\/\/)?(([a-zA-Z0-9])+(\.([a-zA-Z0-9]){2,3})+)+)$/;
  _this.formElement.addEventListener('submit', function(event) {
    var checkforempty = _this.checkForEmpty(_this.formElements),
        checktextareaelement = _this.checkTextArea(),
        checkemailbox = _this.checkFormat(_this.emailbox, emailRegex),
        checkurlbox = _this.checkFormat(_this.urlbox, urlRegex),
        checknotifications = _this.confirmNotifications();
    (checkforempty && checktextareaelement && checkemailbox && checkurlbox && checknotifications) ? _this.alertSubmitMessage() : event.preventDefault();
  } );
  
}

FormValidation.prototype.checkFormat = function(textbox, regex) {
  if (textbox.value.trim() != '') {
    if (!(regex.test(textbox.value.trim()))) {
      elementName = document.getElementsByClassName(textbox.id)[0].innerHTML;
      alert(elementName + ' format is wrong');
      return false;
    }
    else {
    return true;
    }
 }
}

FormValidation.prototype.checkForEmpty = function(elementsArray) {
  var count = 0;
  for (var i = 0; i < elementsArray.length; i++) {
    if (elementsArray[i].value == null || elementsArray[i].value.trim() == '') {
      var innertext = document.getElementsByClassName(elementsArray[i].id)[0].innerHTML;
      alert(innertext + ' cant be empty.');
    }
    else {
      ++count;
    }
  }
  return (count == elementsArray.length);
}

FormValidation.prototype.checkTextArea = function() {
  var innertext = document.getElementsByClassName(this.textareaElement[0].id)[0].innerHTML;
  if (!this.checkForEmpty(this.textareaElement)) { 
    return false;
  }
  else if (this.textareaElement[0].value.trim().length < 50) {
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
  var formElement = document.forms[0];
      formElements = document.getElementsByClassName('textbox'),
      textareaElement = document.getElementById('aboutme'),
      confirmCheckbox = document.getElementById('confirm'),
      emailbox = document.getElementById('email'),
      urlbox = document.getElementById('homepage'),
      form = new FormValidation(formElement, formElements, textareaElement, confirmCheckbox, emailbox, urlbox);
  form.checkFormOnSubmit();
}