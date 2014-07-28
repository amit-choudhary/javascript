function DaysCountValidator(daysList, weekDays, noneCheckbox) {
  this.daysList = daysList;
  this.weekDays = weekDays;
  this.noneCheckbox = noneCheckbox;
  this.checkedDays = [];
}

DaysCountValidator.prototype.bindEvents = function() {
  var _this = this;
    _this.daysList.addEventListener('click', function(event) {
      _this.LimitCheckedDays(event.target);
      _this.noneCheckbox.checked = false;
    } );
  _this.noneCheckbox.addEventListener('click', function() {
    _this.mark(false);
  } );
}

DaysCountValidator.prototype.LimitCheckedDays = function(day) {
  if (day.checked == true) {
    this.checkedDays.push(day.value);
  }
  else {
    var index = this.checkedDays.indexOf(day.value);
    this.checkedDays.splice(index, 1);
  }
  if (this.checkedDays.length > 3) {
    day.checked = false;
    index = this.checkedDays.indexOf(day.value);
    this.checkedDays.splice(index, 1);
    alert('Only 3 days can be selected. You have already selected' + this.showSelected()); 
  }
}

DaysCountValidator.prototype.mark = function(flag) {
  for (var i = 0; i < this.weekDays.length; i++) {
    this.weekDays[i].checked = flag;
  }
  this.checkedDays = [];
}

DaysCountValidator.prototype.showSelected = function() {
  return (' ' + this.checkedDays[0] + ', ' + this.checkedDays[1] + ' and ' + this.checkedDays[2]);
}

window.onload = function() {
  var daysList = document.getElementById('list'),
      weekDays = document.getElementsByName('days'),
      noneCheckbox = document.getElementById('none'),
      daysValidator = new DaysCountValidator(daysList, weekDays, noneCheckbox);
  daysValidator.bindEvents();
}
