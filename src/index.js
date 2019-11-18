/**
 * Check if an object is an image
 * @param {*} image 
 */
const isImage = image => image instanceof HTMLImageElement;

module.exports = isImage;