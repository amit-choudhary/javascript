function InputUrl() {
}

InputUrl.prototype.bindEvents = function() {
  var url = '';
  while (!(url)) {
    var url = prompt('Enter the url ').trim();
    this.openUrl(url);
  }
}

InputUrl.prototype.openUrl = function(url) {
  if (url == null || url.length == 0) {
      alert('Url cant be empty');
    }
    else {
      window.open(url, "_blank", "width=400, height=450, menubar=no, scrollbars=no, titlebar=no");
    }
}

window.onload = function() {
  var inputUrl = new InputUrl();
  inputUrl.bindEvents();
}