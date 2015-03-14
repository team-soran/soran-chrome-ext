$(document).ready(function(){

  function onPageDetailsReceived() {
    console.log(arguments)
  }

  var getName = function(callback) {
    chrome.runtime.onMessage.addListener(function() {
      console.log('--- received');
      console.log(arguments);
    })
  }

  $('body').on('click', 'a', function(e){
    chrome.tabs.create({url: $(this).attr('href')});
    return false;
  });

  getName(function(elem) {
    console.log(elem);
  });

});
