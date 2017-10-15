/* globals getElementByXPath $ */

var xpath = window.postParams.xpath
var newInnerHTML = window.postParams.newInnerHTML
var targetElement = $(getElementByXPath(xpath))
targetElement.html(newInnerHTML)
targetElement.css('background-color', 'yellow')
$('html, body').animate({
  scrollTop: targetElement.offset().top - 100
}, 1000)
