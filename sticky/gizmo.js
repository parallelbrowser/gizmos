/* globals $ getXPathForElement savePostParams alert */

var xpath
var targetElement
var postParams = {textContent: null, xpath: null}
var postIt = document.createElement('div')
postIt.setAttribute('id', 'postIt')
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

alert('Click the area on the page where you would like to place your sticky note. ' +
      'When you are finished writing your note, press Enter to save.')

$('#postIt').draggable()

$(window).one('click', function (e) {
  var x = e.clientX
  var y = e.clientY
  targetElement = document.elementFromPoint(x, y)
  xpath = getXPathForElement(targetElement)
  postParams.xpath = xpath
  targetElement.appendChild(postIt)
})

$(document).keypress(function (e) {
  if (e.which === 13) {
    postParams.textContent = textArea.innerHTML
    textArea.setAttribute('contenteditable', false)
    savePostParams(postParams)
  }
})
