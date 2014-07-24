function CheckForm(formElement, numberTextField, resultTextField) {
this.formElement = formElement;
this.numberTextField = numberTextField;
this.resultTextField = resultTextField;
}

CheckForm.prototype.bindEvents = function() {
  var flag = '';
  var _this = this;
  this.formElement.addEventListener('submit', function(event) {
    flag = _this.checkNumber(_this.numberTextField.value);
    _this.writeResult(flag);
    flag ? '' : event.preventDefault();
  } );  
}

CheckForm.prototype.checkNumber = function(number) {
  if (number == null || number == '') {
    return false;
  }
  else {
  return !(isNaN(number));
  }
}

CheckForm.prototype.writeResult = function(flag) {
  this.resultTextField.value = flag;
}

window.onload = function() {
  var formElement = document.forms[0];
  var numberTextField = document.getElementById('number');
  var resultTextField = document.getElementById('result');
  var checkform = new CheckForm(formElement, numberTextField, resultTextField);
  checkform.bindEvents();
}
