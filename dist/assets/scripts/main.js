"use strict";

var appendChild = function appendChild(tagName) {
  var tag = document.createElement(tagName);
  tag.innerHTML = '<h1>Hello Gulp</h1>';
  document.body.appendChild(tag);
};

appendChild();