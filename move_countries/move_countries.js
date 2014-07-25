function SelectCountries(firstList, secondList, addButton, removeButton) {
this.firstList = firstList;
this.secondList = secondList;
this.addButton = addButton;
this.removeButton = removeButton;
this.selectedOption = '';
}

SelectCountries.prototype.bindEvents = function() {
  var _this = this;
  _this.addButton.addEventListener('click', function() {
    _this.removeFromList(_this.firstList);
    _this.addToList(_this.secondList);
  } );
  _this.removeButton.addEventListener('click', function() {
    _this.removeFromList(_this.secondList);
    _this.addToList(_this.firstList);
  } );
}

SelectCountries.prototype.removeFromList = function(list) {
  this.selectedOption = list.options[list.selectedIndex].text;
  list.remove(list.selectedIndex);
}

SelectCountries.prototype.addToList = function(list) {
  var option = document.createElement("option");
  option.text = this.selectedOption;
  list.add(option);
}

window.onload = function() {
  var firstList = document.getElementById('first-select'),
      secondList = document.getElementById('second-select'),
      addButton = document.getElementById('add'),
      removeButton = document.getElementById('remove'),
      moveCountries = new SelectCountries(firstList, secondList, addButton, removeButton);
  moveCountries.bindEvents();
}