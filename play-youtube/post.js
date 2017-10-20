/* globals getElementByXPath $ */

var postParams = window.postParams
var xpath = postParams.xpath
var videoURL = postParams.videoURL

var $iframe = $('<iframe>').attr('src', videoURL).attr('type', 'text/html').attr('allowfullscreen', 'true')
var $wrapper = $('<div>').attr('class', 'video')
$iframe.appendTo($wrapper)
var targetElement = $(getElementByXPath(xpath))
targetElement.append($wrapper)
$wrapper.draggable()
$('html, body').animate({
  scrollTop: targetElement.offset().top - 100
}, 1000)
