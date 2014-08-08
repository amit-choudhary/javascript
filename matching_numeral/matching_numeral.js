var regex = {
  number : /^-?\d+\.?\d*$/
}

function CheckForNumber(elements) {
  this.formElement = elements.formElement;
  this.numberTextField = elements.numberTextField;
  this.resultTextField = elements.resultTextField;
}

CheckForNumber.prototype.bindEvents = function() {
   var _this = this;
  _this.formElement.addEventListener('submit', function(event) {
    _this.checkValidity(_this.numberTextField.value, event);
  } );
}

CheckForNumber.prototype.checkValidity = function(number, event) {
  if (this.valid(number)) {
    this.writeResult(true);
  }
  else {
    this.writeResult(false);
    event.preventDefault();
  }
}

CheckForNumber.prototype.valid = function(number) {
  if (number == null || number.trim() == '' || !(regex.number.test(number.trim()))) {
    return false;
  }
  else {
    return true;
  }
}

CheckForNumber.prototype.writeResult = function(flag) {
  this.resultTextField.value = flag;
}

window.onload = function() {
  var elements = {
    formElement : document.getElementById('numeral_checking_form'),
    numberTextField : document.getElementById('number'),
    resultTextField : document.getElementById('result')
  };
  var checkForNumberObject = new CheckForNumber(elements);
  checkForNumberObject.bindEvents();
}
