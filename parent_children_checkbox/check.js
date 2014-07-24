function MainList(mainlistElement) {
  this.mainlistElement = mainlistElement;
}

Mainlist.prototype.bindEvents = function() {
  var _this = this;
  for (var i = 0; i < _this.mainlistElement.length; i++) {
    _this.mainlistElement[i].addEventListener('click', function() {
      _this.performOnChild(this);
      console.log(_this);
    } );
  }
}

Mainlist.prototype.performOnChild = function(list) {
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
  var mainlistElement = document.getElementsByName('main-list');
  var mainlist = new MainList(mainlistElement);
  mainlist.bindEvents()
}