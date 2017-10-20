/* globals getElementByXPath $ */

var postParams = window.postParams
var xpath = postParams.xpath
var audioURL = postParams.audioURL

var audio = document.createElement('audio')
audio.setAttribute('id', 'audio')
audio.setAttribute('preload', true)
audio.setAttribute('src', audioURL)
var audioPlayer = document.createElement('div')
audioPlayer.setAttribute('id', 'audioPlayer')
var playerButton = document.createElement('button')
playerButton.setAttribute('id', 'playerButton')
playerButton.setAttribute('class', 'play')
audioPlayer.appendChild(playerButton)

playerButton.addEventListener('click', play)

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

var targetElement = $(getElementByXPath(xpath))
targetElement.append(audioPlayer)

$('html, body').animate({
  scrollTop: targetElement.offset().top - 100
}, 1000)

$('#audioPlayer').draggable()
