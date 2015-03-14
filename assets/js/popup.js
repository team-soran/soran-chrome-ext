$(document).ready(function(){

  var background = {
    sendMessage: function(name, callback) {

      chrome.runtime.sendMessage({'type': name}, function(response) {
        callback(response)
      });

    }
  }

  function onPageDetailsReceived() {
    console.log(arguments)
  }

  var getName = function(callback) {
    background.sendMessage('naver.getName', callback);
  }


  $('body').on('click', 'a', function(e){
    chrome.tabs.create({url: $(this).attr('href')});
    return false;
  });

  getName(function(elem) {
    console.log(elem);
  });

});
