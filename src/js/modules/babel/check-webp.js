"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isWebp = isWebp;
function isWebp() {
  // Webp support check
  var testWebp = function testWebp(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
      return callback(webP.height === 2);
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  };
  // Добавление класса _webp или _no-webp для HTML
  testWebp(function (support) {
    var className = support ? 'webp' : 'no-webp';
    html.classList.add(className);
    FLS(support ? 'webp поддерживается' : 'webp не поддерживается');
  });
}