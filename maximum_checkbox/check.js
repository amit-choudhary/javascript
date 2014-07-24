function Days(daysElement, noneCheckbox) {
  this.daysElement = daysElement;
  this.noneCheckbox = noneCheckbox;
  this.count = 0;
  this.checkedDays = [];
}

Days.prototype.bindEvents = function() {
  var _this = this;
  for(var i = 0; i < _this.daysElement.length; i++) {
    _this.daysElement[i].addEventListener('click', function() {
      _this.countCheck(this);
      _this.noneCheckbox.checked = false;
    } );
  }
  _this.noneCheckbox.addEventListener('click', function() {
    _this.mark(false);
    _this.count = 0;
  } );
}

Days.prototype.countCheck = function(day) {
  if (day.checked == true) {
    ++this.count;
    this.checkedDays.push(day.value);
  }
  else {
    --this.count;
    var index = this.checkedDays.indexOf(day.value);
    this.checkedDays.splice(index, 1);
  }
    if (this.count > 3) {
      day.checked = false;
      index = this.checkedDays.indexOf(day.value);
      this.checkedDays.splice(index, 1);
      --this.count;
      alert('Only 3 days can be selected. You have already selected' + this.showSelected()); 
    }
}

Days.prototype.mark = function(flag) {
  for (var i = 0; i < this.daysElement.length; i++) {
    this.daysElement[i].checked = flag;
  }
  this.checkedDays = [];
}

Days.prototype.showSelected = function() {
  var str = ' ' + this.checkedDays[0];
  for (var j = 1;j < (this.checkedDays.length - 1); j++) {
      str += ' , ' + this.checkedDays[j];
  }
  str += ' and ' + this.checkedDays[(this.checkedDays.length - 1)];
  return str;
}

window.onload = function() {
  var daysElement = document.getElementsByName('days');
  var noneCheckbox = document.getElementById('none');
  var days = new Days(daysElement, noneCheckbox);
  days.bindEvents();
}
