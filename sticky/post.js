/* globals getElementByXPath $ */

var postParams = window.postParams
var xpath = postParams.xpath
var textContent = postParams.textContent

var postIt = document.createElement('div')
var postItID = 'postIt' + Date.now()
postIt.setAttribute('id', postItID)
var topBar = document.createElement('div')
topBar.setAttribute('class', 'topBar')
var form = document.createElement('form')
form.setAttribute('class', 'form')
var textArea = document.createElement('div')
textArea.setAttribute('class', 'textArea')
textArea.setAttribute('contenteditable', true)
postIt.appendChild(topBar)
topBar.appendChild(form)
form.appendChild(textArea)
textArea.innerHTML = (textContent)
var targetElement = $(getElementByXPath(xpath))
targetElement.append(postIt)

$('html, body').animate({
  scrollTop: targetElement.offset().top - 100
}, 1000)

$('#' + postItID).draggable()
.click(function () {
  $(this).draggable({ disabled: false })
}).dblclick(function () {
  $(this).draggable({ disabled: true })
})
