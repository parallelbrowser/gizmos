/* globals getElementByXPath $ */

var xpath = window.postParams.xpath
var newImageURL = window.postParams.newImageURL
var targetElement = $(getElementByXPath(xpath))
targetElement.src = newImageURL
$('html, body').animate({
  scrollTop: targetElement.offset().top - 100
}, 1000)
