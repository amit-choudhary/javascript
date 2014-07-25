function CheckForm(formElement, numberTextField, resultTextField) {
this.formElement = formElement;
this.numberTextField = numberTextField;
this.resultTextField = resultTextField;
}

CheckForm.prototype.bindEvents = function() {
  var flag = '';
      _this = this;
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
      numberTextField = document.getElementById('number');
      resultTextField = document.getElementById('result');
      checkform = new CheckForm(formElement, numberTextField, resultTextField);
  checkform.bindEvents();
}
