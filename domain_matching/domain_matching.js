function MatchDomain(domainBox, form) {
  this.domainBox = domainBox;
  this.form = form;
}

MatchDomain.prototype.bindEvents = function() {
  var _this = this;
  _this.form.addEventListener('submit', function(event) {
    var urlFormatChecker = _this.checkUrlFormat(_this.domainBox);
    if (urlFormatChecker) {
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
    alert('Url cant be blank');
    return false;
  }
  else if (!(UrlFormatRegex.test(domainTextbox.value))) {
    alert('Enter url in correct format ');
    return false;
  }
  else {
    return true;
  }
}

MatchDomain.prototype.extractDomain = function(textbox) {
  var domainRegex = /(([w]+.)?((([a-zA-Z0-9])+(\.([a-zA-Z0-9]){2,4})+)+))(\/?)?/,
      MatchedRegexGroups = domainRegex.exec(textbox.value),
      extractedDomain = MatchedRegexGroups[3];
      extractedDomain = extractedDomain.split('.');
  if (extractedDomain.length == 2) {
    alert('Domain: ' + extractedDomain[0] + '.com');
  }
  else {
    alert('Subdomain: ' + extractedDomain[0] + '    Domain: ' + extractedDomain[1] + '.com');
  }
}

window.onload = function() {
  var domainBox = document.getElementById('domain-textbox'),
      form = document.forms[0],
      matchdomain = new MatchDomain(domainBox, form);
  matchdomain.bindEvents();
}
