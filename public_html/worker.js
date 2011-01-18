addEventListener('message', function (e) {
  var r = 'nu';
  if (EventSource) { 
    r = 'da'; 
  } 
  postMessage(r);
}, true);
