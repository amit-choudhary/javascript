function MatchDomain(domainBox, form) {
  this.domainBox = domainBox;
  this.form = form;
}

MatchDomain.prototype.bindEvents = function() {
  var _this = this;
  _this.form.addEventListener('submit', function(event) {
    var check = _this.checkFormat(_this.domainBox);
    if (check) {
      _this.extractDomain(_this.domainBox);
    }
    else {
      event.preventDefault();
    }
  } );
}

MatchDomain.prototype.checkFormat = function(textbox) {
  var regex = /^((http(s)?:\/\/)?(([a-zA-Z0-9])+(\.([a-zA-Z0-9]){2,3})+)+)$/;
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

MatchDomain.prototype.extractDomain = function(textbox) {
  var regex = /(\/?(([a-zA-Z0-9])+(\.([a-zA-Z0-9]){2,3})+)+)(\/?)?/;
      result = regex.exec(textbox.value);
  if (result[0].indexOf('/') != -1) { 
    result = result[0].split('/');
    result = result[1].split('.');
  }
  else {
    result = result[0].split('.');
  }
  if (result.length == 2) {
    alert('Domain: ' + result[0] + '.com');
  }
  else if (result.length > 2) {
    if (result[0] == "www") {
      if (result.length == 3) {
        alert('Domain: ' + result[1] + '.com');
      }
      if (result.length == 4) {
        alert('Subdomain: ' + result[1] + '  and Domain: ' + result[2] + '.com');
      }
    }
    else {
      alert('Subdomain: ' + result[0] + '  and Domain: ' + result[1] + '.com');
    }
  }
}

window.onload = function() {
  var domainBox = document.getElementById('domain-textbox');
      form = document.forms[0];
      matchdomain = new MatchDomain(domainBox, form);
  matchdomain.bindEvents();
}