/* globals alert $ getXPathForElement prompt savePostParams */

var xpath
var clickedElement
var newImageURL
var postParams = {newImageURL: null, xpath: null}
alert('Click the image you want to change!')

$(window).click(function (e) {
  e.preventDefault()
  var x = e.clientX
  var y = e.clientY
  clickedElement = document.elementFromPoint(x, y)
  var elementType = clickedElement.prev().prop('nodeName')
  if (elementType === 'img') {
    xpath = getXPathForElement(clickedElement)
    newImageURL = prompt('Enter the image URL.')
    if (newImageURL) {
      clickedElement.src = newImageURL
      postParams.newImageURL = newImageURL
      postParams.xpath = xpath
      savePostParams(postParams)
    }
  }
})
