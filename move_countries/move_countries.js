function MoveCountries(firstList, secondList, addButton, removeButton) {
  this.firstList = firstList;
  this.secondList = secondList;
  this.addButton = addButton;
  this.removeButton = removeButton;
  this.selectedOption = '';
}

MoveCountries.prototype.bindEvents = function() {
  var _this = this;
  _this.addButton.addEventListener('click', function() {
    _this.addToList(_this.firstList, _this.secondList);
  } );
  _this.removeButton.addEventListener('click', function() {
    _this.addToList(_this.secondList, _this.firstList);
  } );
}

MoveCountries.prototype.addToList = function(fromList, toList) {
 for (var count =0 ; count < fromList.options.length ;) {
    if(fromList.options[count].selected) {
      toList.appendChild(fromList.options[count]);
    }
    else {
      count++;
    }
  }
}

window.onload = function() {
  var firstList = document.getElementById('first-select'),
      secondList = document.getElementById('second-select'),
      addButton = document.getElementById('add'),
      removeButton = document.getElementById('remove'),
      moveCountries = new MoveCountries(firstList, secondList, addButton, removeButton);
  moveCountries.bindEvents();
}