
/**
 * image component
 */

module.exports = function (url) {
  var img = new Image()
  img.src = url
  return img
}
