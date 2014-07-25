function Match(domain, form) {
  this.domain = domain;
  this.form = form;
}

Match.prototype.bindEvents = function() {
  var _this = this;
  _this.form.addEventListener('submit', function(event) {
    var check = _this.checkFormat(_this.domain);
    if (check) {
      _this.extractDomain(_this.domain);
    }
    else {
      event.preventDefault();
    }
  } );
}

Match.prototype.checkFormat = function(textbox) {
  var regex = /((http(s)?:\/\/)?(([a-zA-Z0-9])+(\.([a-zA-Z0-9]){2,3})+)+)/;
  if (textbox.value == null || textbox.value == '') {
    alert('Url cant be blank');
    return false;
  }
  else if (!(regex.test(textbox.value))) {
    alert('Enter url in correct format ');
    return false;
  }
  else {
    return true;
  }
}

Match.prototype.extractDomain = function(textbox) {
  var regex = /(\/(([a-zA-Z0-9])+(\.([a-zA-Z0-9]){2,3})+)+)(\/)?/;
      result = regex.exec(textbox.value);
  result = result[0].split('/');
  result = result[1].split('.');
  if (result.length == 2) {
    alert('Domain: ' + result[0] + '.com');
  }
  else if (result.length == 3) {
    alert('Domain: ' + result[0] + '  and Subdomain: ' + result[1] + '.com');
  }
}

window.onload = function() {
  var domain = document.getElementById('domain');
      form = document.forms[0];
      match = new Match(domain, form);
  match.bindEvents();
}