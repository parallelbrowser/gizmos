/* globals prompt savePostParams */

var color = prompt('Please enter a color.')
function addStyleString (str) {
  var node = document.createElement('style')
  node.innerHTML = str
  document.body.appendChild(node)
}
var postParams = {color: color}
addStyleString('body {background: ' + color + '}')
savePostParams(postParams)
