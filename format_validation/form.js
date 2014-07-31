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
    var checkforempty = _this.checkForEmpty(),
        checktextarea = _this.checkTextArea(),
        checkemailbox = _this.checkFormat(_this.emailbox, emailRegex),
        checkurlbox = _this.checkFormat(_this.urlbox, urlRegex);
    (checkforempty && checktextarea && checkemailbox && checkurlbox) ? _this.confirmNotifications() : event.preventDefault();
  } );
  
}

FormValidation.prototype.checkFormat = function(textbox, regex) {
  if (textbox.value != '') {
    if (!(regex.test(textbox.value))) {
      elementName = document.getElementsByClassName(textbox.id)[0].innerHTML;
      alert(elementName + ' format is wrong');
      return false;
    }
    else {
    return true;
    }
 }
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
  else if (this.textareaElement.value.length < 50) {
    alert(innertext + 'cant be less than 50 characters.');
    return false;
  }
  else {
    return true;
  }
}

FormValidation.prototype.confirmNotifications = function() {
  this.confirmCheckbox.checked = confirm('Confirm Notifications');
  this.alertSubmitMessage();
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