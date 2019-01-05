/***************************
 *        @forceVoid
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports)
    : typeof define === 'function' && define.amd ? define(['exports'], factory)
      : (factory((global.forceVoid = global.forceVoid || {})))
}(this, function (exports) {
  'use strict'

  var forceVoid = function (__eo = {}) {
    // .................. force
    let force = function (params) {
      let nodes = params.nodes

      let initialize = () => nodes !== undefined ? null : null

      function force () {}
      force.initialize = _ => _ !== undefined ? (nodes = _, initialize()) : nodes
      return force
    }

    // .................. enty
    var enty = function enty () {}
    enty.force = force
    return enty
  }

  exports.forceVoid = forceVoid
}))
