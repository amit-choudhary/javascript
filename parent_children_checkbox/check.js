function Item(catalogue, itemList) {
  this.catalogue = catalogue;
  this.itemList = itemList;
}

Item.prototype.bindEvents = function() {
  var _this = this;
  _this.catalogue.addEventListener('click', function(event) {
  _this.performOnSubItems(event.target);
  } );
}

Item.prototype.performOnSubItems = function(list) {
  var subItemList = document.getElementsByName(list.className);
  var subItem = document.getElementById(list.className);
  if (list.checked == true) {
    this.markSubItemList(subItemList, true);
    subItem.style.display = "block";
    list.scrollIntoView();
  }
  else {
    this.markSubItemList(subItemList, false);
    subItem.style.display = "none";
  }
}

Item.prototype.markSubItemList = function(subItemList, mark) {
  for (var i in subItemList) {
    subItemList[i].checked = mark;
  }
}

window.onload = function() {
  var catalogue = document.getElementById('main-list'),
      ItemList = document.getElementsByName('parent-list'),
      item = new Item(catalogue, ItemList);
  item.bindEvents();
}