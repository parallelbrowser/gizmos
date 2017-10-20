/* globals prompt savePostParams */

var imageURL = prompt('Please enter an image URL')
if (imageURL) {
  var postParams = {imageURL: imageURL}
  var imgs = document.getElementsByTagName('img')
  for (var i = 0, l = imgs.length; i < l; i++) {
    imgs[i].src = imageURL
  }

  savePostParams(postParams)
}
