function CheckBox(checkall, none) {
  this.checkall = checkall;
  this.none = none;
}

CheckBox.prototype.bindEvents = function() {
  var _this = this
  this.checkall.onclick = function() {
    _this.mark(true);
  }
  this.none.onclick = function() {
    _this.mark(false);
  }
}

CheckBox.prototype.mark = function(flag) {
  var checkboxes = document.getElementsByName('colors');
    for (var i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = flag;
    }
  }

window.onload = function() {
  var checkall = document.getElementById('check');
  var none = document.getElementById('none');
  var checkbox = new CheckBox(checkall, none);
  checkbox.bindEvents();
}
