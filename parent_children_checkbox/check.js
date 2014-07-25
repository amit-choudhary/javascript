function MainList(listElement, mainlistElement) {
  this.listElement = listElement;
  this.mainlistElement = mainlistElement;
}

MainList.prototype.bindEvents = function() {
  var _this = this;
  _this.listElement.addEventListener('click', function(event) {
  _this.performOnChild(event.target);
  } );
}

MainList.prototype.performOnChild = function(list) {
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
  var listElement = document.getElementById('list');
      mainlistElement = document.getElementsByName('main-list');
      mainlist = new MainList(listElement, mainlistElement);
  mainlist.bindEvents()
}