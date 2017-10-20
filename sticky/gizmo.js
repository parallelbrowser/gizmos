/* globals $ getXPathForElement savePostParams alert */

var xpath
var targetElement
var postParams = {textContent: null, xpath: null}
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

alert('Click the area of the page where you would like to place your sticky note. ' +
      'Click on the note and start writing. When you are finished writing, press "Enter" to save.')

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
    $('#' + postItID).draggable()
    .click(function () {
      $(this).draggable({ disabled: false })
    }).dblclick(function () {
      $(this).draggable({ disabled: true })
    })
    savePostParams(postParams)
  }
})
