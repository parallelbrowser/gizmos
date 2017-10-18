function addStyleString (str) {
  var node = document.createElement('style')
  node.innerHTML = str
  document.body.appendChild(node)
}
addStyleString('.insertedImage{z-index:999}')
addStyleString('.imageContainer{z-index:999}')
  
