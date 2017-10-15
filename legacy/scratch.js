/* globals alert, savePostscript */

var turnItGreen = "(function() {" +
  "function addStyleString(str) {" +
    "var node = document.createElement('style'); " +
    "node.innerHTML = str;" +
    "document.body.appendChild(node);" +
  "}" +
  "addStyleString('body {background: green}');" +
"})()"
function addStyleString (str) {
  var node = document.createElement('style')
  node.innerHTML = str
  document.body.appendChild(node)
}
addStyleString('body {background: green}')
alert('Check your widgets!')
savePostscript(turnItGreen)


var makeItJay = 'imgs = document.getElementsByTagName("img");for(var i=0, l=imgs.length;i<l;i++){imgs[i].src = "https://image.ibb.co/id0KZv/jquery2.png";}'
imgs = document.getElementsByTagName("img");for(var i=0, l=imgs.length;i<l;i++){imgs[i].src = "https://image.ibb.co/id0KZv/jquery2.png";}
alert('code, chicken, sleep')
savePostscript(makeItJay)

var pageEditor = "(function(){document.body.contentEditable = 'true'; document.designMode='on'; void 0})()"
alert('Check your widgets and start editing the page now!')
savePostscript(pageEditor)


// change background color

var color = prompt('Please enter a color')
var changeColor = "(function() {" +
  "function addStyleString(str) {" +
    "var node = document.createElement('style');" +
    "node.innerHTML = str;" +
    "document.body.appendChild(node);" +
  "}" +
  "addStyleString('body {background: " + color + "}');" +
"})()"
function addStyleString (str) {
  var node = document.createElement('style')
  node.innerHTML = str
  document.body.appendChild(node)
}
addStyleString('body {background: ' + color + '}')
savePost(changeColor)



// https://image.ibb.co/id0KZv/jquery2.png
// https://image.ibb.co/eeStcF/kitten.jpg
// inject image
var image = prompt('Please enter an image URL')
var injectImages = 'imgs = document.getElementsByTagName("img");for(var i=0, l=imgs.length;i<l;i++){imgs[i].src = "' + image + '";}'
imgs = document.getElementsByTagName("img");for(var i=0, l=imgs.length;i<l;i++){imgs[i].src = image;}
alert('code, chicken, sleep')
savePost(injectImages)



// allows user to edit the image
// var pageEditor = "(function(){document.body.contentEditable = 'true'; document.designMode='on'; void 0})()"
// window.addEventListener("keypress", myScript
// alert('Check your widgets and start editing the page!')
// savePostscript(pageEditor)
