/* globals prompt savePostParams */

var color = prompt('Please enter a color.')
if (color) {
  var postParams = {color: color}
  addStyleString('body {background: ' + color + '}')
  savePostParams(postParams)
}

function addStyleString (str) {
  var node = document.createElement('style')
  node.innerHTML = str
  document.body.appendChild(node)
}
