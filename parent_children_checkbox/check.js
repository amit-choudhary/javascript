function CheckBox(mainlist) {
  this.mainlist = mainlist;
}

CheckBox.prototype.bindEvents = function() {
  var _this = this
  for (var i = 0; i < _this.mainlist.length; i++){
    _this.mainlist[i].onclick = function() {
      _this.performOnChild(this);
    }
  }
}

CheckBox.prototype.performOnChild = function(list) {
  var child = document.getElementsByName(list.className);
  if (list.checked == true) {
    for (var j = 0; j < child.length; j++) {
      child[j].checked = true
    }
    document.getElementById(list.className).style.display = "block";
    list.scrollIntoView();
  }
  else {
    for (var j = 0; j < child.length; j++) {
      child[j].checked = false;
    }
    document.getElementById(list.className).style.display = "none";
  }
}

window.onload = function() {
  var mainlist = document.getElementsByName('main-list');
  var checkbox = new CheckBox(mainlist);
  checkbox.bindEvents()
}