function InputUrl() {
}

InputUrl.prototype.bindEvents = function() {
  var url = prompt('Enter the url ');
  window.open(url, "_blank", "width=400, height=450, menubar=no, scrollbars=no, titlebar=no");
}

window.onload = function() {
  var inputUrl = new InputUrl();
  inputUrl.bindEvents();
}