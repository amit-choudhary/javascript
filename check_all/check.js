function CheckBox(checkallLink, noneLink) {
  this.checkallLink = checkallLink;
  this.noneLink = none;
}

CheckBox.prototype.bindEvents = function() {
  var _this = this
  _this.checkallLink.addEventListener('click', function() {
    _this.mark(true);
  } );
  _this.noneLink.addEventListener('click', function() {
    _this.mark(false);
  } );
}

CheckBox.prototype.mark = function(flag) {
  var checkboxes = document.getElementsByName('colors');
    for (var i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = flag;
    }
  }

window.onload = function() {
  var checkallLink = document.getElementById('check'),
      noneLink = document.getElementById('none'),
      checkbox = new CheckBox(checkallLink, noneLink);
  checkbox.bindEvents();
}
