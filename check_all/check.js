function CheckBox(checkall, none) {
  this.checkall = checkall;
  this.none = none;
}

CheckBox.prototype.bindEvents = function() {
  this.checkall.onclick = function() {
    CheckBox.prototype.mark(true);
  }
  this.none.onclick = function() {
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
  var checkall = document.getElementById('check');
  var none = document.getElementById('none');
  var checkbox = new CheckBox(checkall, none);
  checkbox.bindEvents();
}
