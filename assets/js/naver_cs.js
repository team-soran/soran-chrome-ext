window.soran = {
  appendSoranButton: function(service, name) {
    var $ = jQuery;

    var $soranLink = $('<a>login</a>')
      .attr('id', 'soran-button')
      .attr('target', '_blank');

    var qs = {
      'service': service,
      'name': name
    };
    var url = 'http://localhost:5000/users/authorize/?';

    $soranLink.attr('href', url + $.param(qs));
    $soranLink.appendTo('body');
  }
};

window.soran.appendNaverSoranButton = function(d) {
    if (d.result == "success") {
      window.soran.appendSoranButton('naver', d.returnValue.nickName);
    }
}

$.get(
  'http://profile.naver.com/api/common/getMyProfile.nhn?_callback=soran.appendNaverSoranButton',
  function(d) {
    eval(d);
  }
);
