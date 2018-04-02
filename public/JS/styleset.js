(function flexible (window, document) {
  var docEl = document.documentElement
  var dpr = window.devicePixelRatio || 1
  console.log(dpr, 'dpr')

  // adjust body font size
  function setBodyFontSize () {
    if (document.body) {
      // document.body.style.fontSize = (12 * dpr) + 'px'
      // document.body.style.fontSize = (12 * dpr) + 'px'
    }
    else {
      document.addEventListener('DOMContentLoaded', setBodyFontSize)
    }
  }
  setBodyFontSize();
  var meta = document.createElement('meta')
  meta.setAttribute('content', 'initial-scale=' + 1/dpr + ', maximum-scale=' + 1/dpr + ', minimum-scale=' + 1/dpr + ', user-scalable=no');
  document.getElementsByTagName('head')[0].appendChild(meta)
  // set 1rem = viewWidth / 10
  function setRemUnit () {
    // if (docEl.clientWidth <= 750) {
    //   var rem = docEl.clientWidth / 10
    //   console.log(rem, 'rem')
    //   docEl.style.fontSize = rem + 'px'
    // }
  }

  setRemUnit()

  // reset rem unit on page resize
  window.addEventListener('resize', setRemUnit)
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      setRemUnit()
    }
  })
}(window, document))