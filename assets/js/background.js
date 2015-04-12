/*
var naver = {
  getName: function(next) {
    next('abc');
  }
};
var bugs = {
}

var routes = {
  'naver': naver,
  'bugs': bugs
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if(request['type'] == undefined) {
    return sendResponse({'error': "request['type'] is undefined"});
  }

  var args = request['type'].split('.');
  var service = args[0];
  var func = args[1];

  if(routes[service] == undefined || routes[service][func] == undefined) {
    return sendResponse({'error': request['type'] + ' is undefined'});
  }

  routes[service][func](sendResponse, sender);
});



chrome.runtime.onConnect.addListener(function(port) {
  console.log(port)
  console.log(port.name)

  port.onMessage.addListener(function(msg) {
    if (msg.joke == "Knock knock")
      port.postMessage({question: "Who's there?"});
    else if (msg.answer == "Madame")
      port.postMessage({question: "Madame who?"});
    else if (msg.answer == "Madame... Bovary")
      port.postMessage({question: "I don't get it."});
  });
});

*/
