function Item(mainList, ItemList) {
  this.mainList = mainList;
  this.ItemList = ItemList;
}

Item.prototype.bindEvents = function() {
  var _this = this;
  _this.mainList.addEventListener('click', function(event) {
  _this.performOnSubItems(event.target);
  } );
}

Item.prototype.performOnSubItems = function(list) {
  var subItemList = document.getElementsByName(list.className);
  if (list.checked == true) {
    this.markSubItemList(subItemList, true);
    document.getElementById(list.className).style.display = "block";
    list.scrollIntoView();
  }
  else {
    this.markSubItemList(subItemList, false);
    document.getElementById(list.className).style.display = "none";
  }
}

Item.prototype.markSubItemList = function(subItemList, mark) {
  for (var i = 0; i < subItemList.length ; i++) {
    subItemList[i].checked = mark;
  }
}

window.onload = function() {
  var mainList = document.getElementById('main-list'),
      ItemList = document.getElementsByName('parent-list'),
      item = new Item(mainList, ItemList);
  item.bindEvents();
}