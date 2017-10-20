/* globals alert $ getXPathForElement prompt savePostParams */

var xpath
var targetElement
var postParams = {imageURL: null, xpath: null}
alert('Click the area where you want to insert a gif or other image.')
$(window).one('click', function (e) {
  var x = e.clientX
  var y = e.clientY
  targetElement = document.elementFromPoint(x, y)
  xpath = getXPathForElement(targetElement)
  postParams.xpath = xpath
  var imageURL = prompt('Enter the URL of the image.')
  if (imageURL) {
    postParams.imageURL = imageURL
    var container = document.createElement('div')
    container.setAttribute('class', 'imageContainer')
    var image = document.createElement('img')
    image.setAttribute('class', 'insertedImage')
    image.setAttribute('src', postParams.imageURL)
    container.appendChild(image)
    targetElement.appendChild(container)
    $('.imageContainer').draggable()
    $('.imageContainer').resizable()
    if (xpath && imageURL) {
      savePostParams(postParams)
    }
  }
})
