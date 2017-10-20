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
  if (audioURL) {
    var audioWrapper = document.createElement('div')
    var audioWrapperID = 'audioWrapper' + Date.now()
    audioWrapper.setAttribute('id', audioWrapperID)
    var audio = document.createElement('audio')
    audio.setAttribute('id', 'audio')
    audio.setAttribute('preload', true)
    audio.setAttribute('src', audioURL)
    var audioPlayer = document.createElement('div')
    audioPlayer.setAttribute('id', 'audioPlayer')
    var playerButton = document.createElement('button')
    playerButton.setAttribute('id', 'playerButton')
    playerButton.setAttribute('class', 'play')
    audioWrapper.appendChild(audio)
    audioWrapper.appendChild(audioPlayer)
    audioPlayer.appendChild(playerButton)

    playerButton.addEventListener('click', play)

    postParams.audioURL = audioURL
    targetElement.appendChild(audioWrapper)
    $('#' + audioWrapperID).draggable()
    savePostParams(postParams)
  }

  function play () {
    if (audio.paused) {
      audio.play()
      playerButton.className = ''
      playerButton.className = 'pause'
    } else {
      audio.pause()
      playerButton.className = ''
      playerButton.className = 'play'
    }
  }
})
