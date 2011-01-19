onmessage = function(e) {
  var n = parseInt(e.data, 10);
  postMessage(fact(n));
};

function fact(n) {
  return n ? n * fact(n-1) : 1;
}
