/* globals alert $ getXPathForElement savePostParams */

document.body.contentEditable = 'true'
document.designMode = 'on'
void 0
var xpath
var editedElement
var postParams = {newInnerHTML: null, xpath: null}

alert('Click on the paragraph you\'d like to edit.\n' +
      'You can make selections and deletions as with a normal text editor.\n' +
      'Press Enter to save.')

$(window).one('click', function (e) {
  var x = e.clientX
  var y = e.clientY
  editedElement = document.elementFromPoint(x, y)
  xpath = getXPathForElement(editedElement)
  postParams.xpath = xpath
})

$(document).keypress(function (e) {
  if (e.which === 13) {
    postParams.newInnerHTML = editedElement.innerHTML
    document.body.contentEditable = 'false'
    document.designMode = 'off'
    savePostParams(postParams)
  }
})
