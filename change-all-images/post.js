
var imgs = document.getElementsByTagName('img')
for (var i = 0, l = imgs.length; i < l; i++) {
  imgs[i].src = window.postParams.imageURL
}
