/*!
 * loadJS: load a JS file asynchronously
 *
 * [c]2014 @brianleroux
 * based on work by @scottjehl, Filament Group, Inc.
 * based on work by Paul Irish
 * Licensed MIT
 */
function loadJS(src, cb) {
  /*
   * didn't see much difference here..
  xhr(src, (err, res, body) => {
    eval(body)
    cb()
  })
    */
  let ref = window.document.getElementsByTagName('script')[0]
    , script = window.document.createElement('script')

  script.src = src
  script.async = true
  script.defer = true

  ref.parentNode.insertBefore(script, ref)
  script.onload = cb
  return script
}

export default loadJS