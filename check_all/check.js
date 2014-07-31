function CheckBoxGroup(checkboxes, checkallLink, noneLink) {
  this.checkboxes = checkboxes;
  this.checkallLink = checkallLink;
  this.noneLink = noneLink;
}

CheckBoxGroup.prototype.bindEvents = function() {
  var _this = this
  _this.checkallLink.addEventListener('click', function() {
    _this.mark(true);
  } );
  _this.noneLink.addEventListener('click', function() {
    _this.mark(false);
  } );
}

CheckBoxGroup.prototype.mark = function(flag) {
  for (var i in this.checkboxes) {
    (this.checkboxes)[i].checked = flag;
  }
}

window.onload = function() {
  var checkallLink = document.getElementById('check'),
      checkboxes = document.getElementsByName('colors');
      noneLink = document.getElementById('none'),
      checkboxGroup = new CheckBoxGroup(checkboxes, checkallLink, noneLink);
  checkboxGroup.bindEvents();
}
