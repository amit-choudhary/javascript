function InputUrl() {
}

InputUrl.prototype.init = function() {
  var url = '';
  while (!(url)) {
    var url = prompt('Enter the url ').trim();
    }
  this.openUrl(url);
}

InputUrl.prototype.openUrl = function(url) {
  window.open(url, "_blank", "width=400, height=450, menubar=no, scrollbars=no, titlebar=no");
}

window.onload = function() {
  var inputUrl = new InputUrl();
  inputUrl.init();
}
