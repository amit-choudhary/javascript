function CheckBox(checkall, none) {
  this.checkall = checkall;
  this.none = none;
}

CheckBox.prototype.bindEvents = function() {
  checkall.onclick = function() {
    CheckBox.prototype.mark(true);
  }
  none.onclick = function() {
    CheckBox.prototype.mark(false);
  }
}

CheckBox.prototype.mark = function(flag) {
  var checkboxes = document.getElementsByName('colors');
    for (var i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = flag;
    }
  }

window.onload = function() {
  checkall = document.getElementById('check');
  none = document.getElementById('none');
  var checkbox = new CheckBox(checkall, none);
  checkbox.bindEvents();
}
