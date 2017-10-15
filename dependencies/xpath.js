function getXPathForElement (element) {
  var idx = function idx (sib, name) {
    return sib ? idx(sib.previousElementSibling, name || sib.localName) + (sib.localName == name) : 1
  }
  var segs = function segs (elm) {
      return !elm || elm.nodeType !== 1 ? [''] : elm.id && document.querySelector('#' + elm.id) === elm ? ['id("' + elm.id + '")'] : [].concat(_toConsumableArray(segs(elm.parentNode)), [elm.localName.toLowerCase() + '[' + idx(elm) + ']'])
  }
  return segs(element).join('/')
}

function _toConsumableArray (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i]
    }
    return arr2
  } else {
    return Array.from(arr)
  }
}

function getElementByXPath (xpath) {
  return new XPathEvaluator().evaluate(xpath, document.documentElement, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
}
