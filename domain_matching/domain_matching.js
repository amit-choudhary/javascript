function MatchDomain(domainBox, form) {
  this.domainBox = domainBox;
  this.form = form;
}

MatchDomain.prototype.bindEvents = function() {
  var _this = this;
  _this.form.addEventListener('submit', function(event) {
    if (_this.checkUrlFormat(_this.domainBox)) {
      _this.extractDomain(_this.domainBox);
    }
    else {
      event.preventDefault();
    }
  } );
}

MatchDomain.prototype.checkUrlFormat = function(domainTextbox) {
  var UrlFormatRegex = /^((http(s)?:\/\/)?(([a-zA-Z0-9])+(\.([a-zA-Z0-9]){2,4})+)+)$/;
  if (domainTextbox.value == null || domainTextbox.value == '') {
    this.showError('Url Cant be blank');
    return false;
  }
  else if (!(UrlFormatRegex.test(domainTextbox.value))) {
    this.showError('Enter Url in correct format');
    return false;
  }
  else {
    return true;
  }
}

MatchDomain.prototype.showError = function(errorMessage) {
  alert(errorMessage);
}

MatchDomain.prototype.extractDomain = function(textbox) {
  var domainRegex = /(([w]+.)?((([a-zA-Z0-9])+(\.([a-zA-Z0-9]){2,4})+)+))(\/?)?/,
      MatchedRegexGroups = domainRegex.exec(textbox.value),
      domains = MatchedRegexGroups[3].split('.'); //Because it contains an array of domains.
  if (domains.length == 2) {
    alert('Domain: ' + domains[0] + '.com');
  }
  else {
    alert('Subdomain: ' + domains[0] + '    Domain: ' + domains[1] + '.com');
  }
}

window.onload = function() {
  var domainBox = document.getElementById('domain-textbox'),
      form = document.getElementById('domain_form'),
      matchdomain = new MatchDomain(domainBox, form);
  matchdomain.bindEvents();
}
