/* ******************************************
   *    @eonZ528aUnimercator
   *
   */
  (function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports)
      : typeof define === 'function' && define.amd ? define(['exports'], factory)
        : (factory((global.eonZ528aUnimercator = global.eonZ528aUnimercator || {})))
  }(this, function (exports) {
    'use strict'
  
    async function anitem (__eo) {
    let [
      topojson,
      ctlWen,
      ctlVersor,
      datWorldTopo110m,
      muonGraticule,
      eohalMars,
      protonUnimercator,
      renderSvg,
    ] = await Promise.all([
      __eo('xs').b('topojson'),
      __eo('xs').c('wen'),
      __eo('xs').c('versor'),
      __eo('xs').d('worldTopo110m'),
      __eo('xs').m('graticule'),
      __eo('xs').e('mars'),
      __eo('xs').p('unimercator'),
      __eo('xs').r('svg'),
    ])
    try { renderSvg.scenecolor('black') } catch (e) { }
    let z = function () {
      // .................. pics
      let ctl
      try {
        ctl = ctlVersor().control(renderSvg.svg())
      } catch (e) {
        ctl = () => [0, 0, 0]
      }

      let eotim = { 'td': 32200, 't0': 0, 't1': 1, 't2': 1, 't3': 1 }

      let proform = {

        projection: protonUnimercator(),
        scale: 100,
        translate: [0, 0],
        rotate: [[[[0, -60]]], [[[0, -60]]], [[[0, -60]]]],
        prerotate: [[[ctlVersor.rotation]]],
      }

      // .................. geoearth
      let geoearth = {

        eohal: eohalMars,
        eotim: eotim,
        eoric: { 'gid': 'geoearth', 'cid': 'geoearth', 'fid': 'geoearth' },

        eofold: p => {
          let geometry = Object.assign({},
            topojson.mesh(
              datWorldTopo110m.data(),
              datWorldTopo110m.data().objects.land
            )
          )
          return { type: 'Feature', geometry: geometry, properties: {} }
        },
        eocrom: { 'csx': 0, 'cf': [[[111, 111]]], 'cs': 666, 'cw': 0.9, 'co': [[[0.05, 0.05]]], 'cp': [[[0.9, 0.9]]] },

        eomot: {
          proform: proform,
        },
        eoload: {},

      }

      // .................. animas
      let animas = [

        geoearth, // h.mars g.unimercator

      ]

      return animas
    }

    let enty = () => { }
    enty.z = z
    return enty
  }
  exports.eonZ528aUnimercator = anitem
}))