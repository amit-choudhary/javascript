function CheckForNumber(formElement, numberTextField, resultTextField) {
this.formElement = formElement;
this.numberTextField = numberTextField;
this.resultTextField = resultTextField;
}

CheckForNumber.prototype.bindEvents = function() {
   var  _this = this;
  _this.formElement.addEventListener('submit', function(event) {
    _this.checkValidity(_this.numberTextField.value, event);
  } );
}

CheckForNumber.prototype.checkValidity = function(number, event) {
  if (number == null || number.trim() == '' || isNaN(number)) {
    this.writeResult(false);
    event.preventDefault();
  }
  else {
    this.writeResult(true);
  }
}

CheckForNumber.prototype.writeResult = function(flag) {
  this.resultTextField.value = flag;
}

window.onload = function() {
  var formElement = document.forms[0],
      numberTextField = document.getElementById('number'),
      resultTextField = document.getElementById('result'),
      checkForNumberObject = new CheckForNumber(formElement, numberTextField, resultTextField);
  checkForNumberObject.bindEvents();
}
