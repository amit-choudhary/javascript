function CheckBox(days, none) {
  this.days = days;
  this.none = none;
  this.count = 0;
}

CheckBox.prototype.bindEvents = function() {
  var _this = this;
  for(var i = 0; i < _this.days.length; i++) {
    _this.days[i].onclick = function() {
      _this.countCheck(this);
      _this.none.checked = false;
    }
  }
  _this.none.onclick = function() {
    _this.mark(false);
    _this.count = 0;
  }
}

CheckBox.prototype.countCheck = function(day) {
  if (day.checked == true) {
    ++this.count;
    if (this.count > 3) {
      day.checked = false;
      alert('Only 3 days can be selected. You have already selected' + this.showSelected()); 
    }
  }
}

CheckBox.prototype.mark = function(flag) {
  for (var i = 0; i < this.days.length; i++) {
    this.days[i].checked = flag;
  }
}

CheckBox.prototype.showSelected = function() {
  var str = ' '
  console.log(this);
  for (var j = 0;j < this.days.length; j++) {
    if (this.days[j].checked == true) {
      str += ' ' + this.days[j].value;
    }
  }
  return str;
}

window.onload = function() {
  var days = document.getElementsByName('days');
  var none = document.getElementById('none');
  var checkbox = new CheckBox(days, none);
  checkbox.bindEvents();
}
