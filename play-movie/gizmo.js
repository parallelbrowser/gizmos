/* globals $ getXPathForElement savePostParams alert prompt */

var xpath
var targetElement

alert('Click the area of the page where you would like to place your audio player.')
var postParams = {videoURL: null, xpath: null}
$(window).one('click', function (e) {
  var x = e.clientX
  var y = e.clientY
  targetElement = document.elementFromPoint(x, y)
  xpath = getXPathForElement(targetElement)
  postParams.xpath = xpath
  var videoURL = prompt('Enter the URL of the video file.')
  postParams.videoURL = videoURL

  var $video = $('<video>').attr('src', videoURL)
  var video = $video[0]
  var loaded = false
  var $wrapper = $('<div>').attr('class', 'video')
  var $playbutton = $('<a>').attr('class', 'playbutton')
  $playbutton.appendTo($wrapper)
  $wrapper.appendTo($(targetElement))
  $wrapper.draggable()
  savePostParams(postParams)

  $('.playbutton').on('click', function (e) {
    e.preventDefault()

    var $button = $(this)
    var $holder = $(this).parent()
    var state = $button.hasClass('paused') ? 'paused'
          : $button.hasClass('playing') ? 'playing'
          : 'loading'

    if (state === 'loading') {
      $holder.prepend($video)

      $button.addClass('loading')

      if (loaded) {
        $button.addClass('playing')
        video.play()
      }

      video.load()

      $video.on('canplay', function () {
        loaded = true
        $button.addClass('playing')
        $button.removeClass('loading')
        video.play()
      })

      $video.on('ended', function () {
        $button.removeClass('playing')
      })

      return
    }

    if (state === 'playing') {
      video.pause()
      $button.addClass('paused')
      return
    }

    if (state === 'paused') {
      video.play()
      $button.removeClass('paused')
      return
    }
  })
})
