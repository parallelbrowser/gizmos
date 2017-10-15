
var postColor = window.postParams.color
function addStyleString (str) {
  var node = document.createElement('style')
  node.innerHTML = str
  document.body.appendChild(node)
}

addStyleString('body {background: ' + postColor + '}')
