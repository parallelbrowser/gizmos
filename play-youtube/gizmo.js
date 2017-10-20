/* globals $ getXPathForElement savePostParams alert prompt */

var xpath
var targetElement

alert('Click on the page element where you would like to place your video player.')
var postParams = {videoURL: null, xpath: null}
$(window).one('click', function (e) {
  var x = e.clientX
  var y = e.clientY
  targetElement = document.elementFromPoint(x, y)
  xpath = getXPathForElement(targetElement)
  postParams.xpath = xpath
  alert('1. On YouTube, click the "Share" button below the video. 2. Click the "Embed" button. 3. Click the "Copy" button. 4. Paste the information in the prompt that follows.')
  var videoURL = prompt('Enter the embed information of the YouTube video.')
  if (videoURL) {
    videoURL = videoURL.split('src="')[1].split('" frame')[0]
    postParams.videoURL = videoURL
    var $iframe = $('<iframe>').attr('src', videoURL).attr('type', 'text/html').attr('allowfullscreen', 'true')
    var $wrapper = $('<div>').attr('class', 'video')
    $iframe.appendTo($wrapper)
    $wrapper.appendTo($(targetElement))
    $wrapper.draggable()
    savePostParams(postParams)
  }
})
