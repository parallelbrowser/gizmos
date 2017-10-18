/* globals $ getXPathForElement savePostParams alert prompt */

var xpath
var targetElement

alert('Click the area of the page where you would like to place your audio player.')
var postParams = {audioURL: null, xpath: null}
$(window).one('click', function (e) {
  var x = e.clientX
  var y = e.clientY
  targetElement = document.elementFromPoint(x, y)
  xpath = getXPathForElement(targetElement)
  postParams.xpath = xpath
  var audioURL = prompt('Enter the URL of the audio file.')
  var audioWrapper = document.createElement('div')
  var audioWrapperID = 'audioWrapper' + Date.now()
  audioWrapper.setAttribute('id', audioWrapperID)
  var audio = document.createElement('audio')
  audio.setAttribute('id', 'audio')
  audio.setAttribute('src', audioURL)
  audio.setAttribute('preload', true)
  var audioPlayer = document.createElement('div')
  audioPlayer.setAttribute('id', 'audioPlayer')
  var playerButton = document.createElement('button')
  playerButton.setAttribute('id', 'playerButton')
  playerButton.setAttribute('class', 'play')
  var timeline = document.createElement('div')
  timeline.setAttribute('id', 'timeline')
  var playhead = document.createElement('div')
  playhead.setAttribute('id', 'playhead')
  audioWrapper.appendChild(audio)
  audioWrapper.appendChild(audioPlayer)
  audioPlayer.appendChild(playerButton)
  audioPlayer.appendChild(timeline)
  timeline.appendChild(playhead)

  var duration = audio.duration // Duration of audio clip, calculated here for embedding purposes

  // timeline width adjusted for playhead
  var timelineWidth = timeline.offsetWidth - playhead.offsetWidth

  var onplayhead = false
  // play button event listenter
  playerButton.addEventListener('click', play)

  // timeupdate event listener
  audio.addEventListener('timeupdate', timeUpdate, false)

  // makes timeline clickable
  timeline.addEventListener('click', function (event) {
    moveplayhead(event)
    audio.currentTime = duration * clickPercent(event)
  }, false)

  // returns click as decimal (.77) of the total timelineWidth
  function clickPercent (event) {
    return (event.clientX - getPosition(timeline)) / timelineWidth
  }

  // makes playhead draggable
  playhead.addEventListener('mousedown', mouseDown, false)
  window.addEventListener('mouseup', mouseUp, false)

  // Boolean value so that audio position is updated only when the playhead is released

  // mouseDown EventListener
  function mouseDown () {
    onplayhead = true
    window.addEventListener('mousemove', moveplayhead, true)
    audio.removeEventListener('timeupdate', timeUpdate, false)
  }

  // mouseUp EventListener
  // getting input from all mouse clicks
  function mouseUp (event) {
    if (onplayhead) {
      moveplayhead(event)
      window.removeEventListener('mousemove', moveplayhead, true)
      // change current time
      audio.currentTime = duration * clickPercent(event)
      audio.addEventListener('timeupdate', timeUpdate, false)
    }
    onplayhead = false
  }
  // mousemove EventListener
  // Moves playhead as user drags
  function moveplayhead (event) {
    var newMargLeft = event.clientX - getPosition(timeline)

    if (newMargLeft >= 0 && newMargLeft <= timelineWidth) {
      playhead.style.marginLeft = newMargLeft + 'px'
    }
    if (newMargLeft < 0) {
      playhead.style.marginLeft = '0px'
    }
    if (newMargLeft > timelineWidth) {
      playhead.style.marginLeft = timelineWidth + 'px'
    }
  }

  // timeUpdate
  // Synchronizes playhead position with current point in audio
  function timeUpdate () {
    var playPercent = timelineWidth * (audio.currentTime / duration)
    playhead.style.marginLeft = playPercent + 'px'
    if (audio.currentTime === duration) {
      playerButton.className = ''
      playerButton.className = 'play'
    }
  }

  // Play and Pause
  function play () {
    // start audio
    if (audio.paused) {
      audio.play()
      // remove play, add pause
      playerButton.className = ''
      playerButton.className = 'pause'
    } else { // pause audio
      audio.pause()
      // remove pause, add play
      playerButton.className = ''
      playerButton.className = 'play'
    }
  }

  // Gets audio file duration
  audio.addEventListener('canplaythrough', function () {
    duration = audio.duration
  }, false)

  // getPosition
  // Returns elements left position relative to top-left of viewport
  function getPosition (el) {
    return el.getBoundingClientRect().left
  }

  postParams.audioURL = audioURL
  targetElement.appendChild(audioWrapper)
  // $('#' + audioWrapperID).draggable()
  // .click(function () {
  //   $(this).draggable({ disabled: false })
  // }).dblclick(function () {
  //   $(this).draggable({ disabled: true })
  // })
  savePostParams(postParams)
})
