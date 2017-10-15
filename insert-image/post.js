/* globals $ getElementByXPath  */

var postParams = window.postParams
var xpath = postParams.xpath
console.log('xpath', xpath)
var targetElement = $(getElementByXPath(xpath))
console.log('target', targetElement)
var container = document.createElement('div')
container.setAttribute('class', 'imageContainer')
var image = document.createElement('img')
image.setAttribute('class', 'insertedImage')
image.setAttribute('src', postParams.imageURL)
container.appendChild(image)
console.log('container', container)
targetElement.append(container)
$('.imageContainer').draggable()
$('.imageContainer').resizable()
if (targetElement.offset()) {
  $('html, body').animate({
    scrollTop: targetElement.offset().top - 100
  }, 1000)
}
