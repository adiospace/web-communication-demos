addEventListener('message', function(e) {
  var n = parseInt(e.data, 10);
  postMessage(fact(n));
}, false);

//TIP: you still have to watch out for CPU intensive calculation

function fact(n) {
  return n ? n * fact(n-1) : 1;
}
