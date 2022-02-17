const appendChild = (tagName) => {
  const tag = document.createElement(tagName)
  tag.innerHTML = '<h1>Hello Gulp</h1>'
  document.body.appendChild(tag)
}

appendChild()
