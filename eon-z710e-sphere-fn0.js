/* ******************************************
   *    @eonZ710eSphereFn0
   *
   */
  (function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports)
      : typeof define === 'function' && define.amd ? define(['exports'], factory)
        : (factory((global.eonZ710eSphereFn0 = global.eonZ710eSphereFn0 || {})))
  }(this, function (exports) {
    'use strict'
  
    async function anitem (__eo) {
  // .................. eons
  let [
    d3,
    muonNatform,
    muonProps,
    ctlWen,
    eohalNatform,
    eohalMars,
    renderSvg,
  ] = await Promise.all([
    __eo('xs').b('d3'),
    __eo('xs').m('natform'),
    __eo('xs').m('props'),
    __eo('xs').c('wen'),
    __eo('xs').e('natform'),
    __eo('xs').e('mars'),
    __eo('xs').r('svg'),
  ])
  try { renderSvg.scenecolor('black') } catch (e) { }
  // .................. animas
  let z = function () {
    // .................. pics
    let ctl
    try {
      ctl = ctlWen().control(renderSvg.svg())
    } catch (e) {
      ctl = () => [0, 0, 0]
    }

    let eotim = {'td': 16800, 't0': 0, 't1': 1, 't2': 1, 't3': 1}

    let radians = Math.PI / 180, degrees = 180 / Math.PI,
      sin = Math.sin, cos = Math.cos, sqrt = Math.sqrt

    let conform = {
      x: {
        'm1': 1, 'm2': 1, 'n1': 0.5, 'n2': 0.5, 'n3': 0.5, 'a': 1, 'b': 1, // drop
        'ra2': 120, 'v0': 0, 'v1': 1, 'w4': 0, 'seg5': 12, 'pa6': 0, 'pb7': -1,
        'dom3': [-180, 180], // r.form.circ [-1.57, 1.57]
        'fn0': (e, c, d) => c[0] * cos(e[0]) * c[2] * cos(e[3]),
      },

      y: {
        'm1': 1, 'm2': 1, 'n1': 0.5, 'n2': 0.5, 'n3': 0.5, 'a': 1, 'b': 1, // drop
        'ra2': 120, 'v0': 0, 'v1': 1, 'w4': 0, 'seg5': 12, 'pa6': 0, 'pb7': -1,
        'dom3': [-180, 180],
        'fn0': (e, c, d) => c[0] * sin(e[0]) * c[2] * cos(e[3]),
      },

      z: {
        'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 1, 'b': 1, // circ
        'ra2': 120, 'v0': 0, 'v1': 1, 'w4': 0, 'seg5': 12, 'pa6': 0, 'pb7': -1,
        'dom3': [-180, 180],
        'fn0': (e, c, d) => sin(e[3]),
      },

      w: {
        'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 1, 'b': 1, // circ
        'ra2': 120, 'v0': 0, 'v1': 1, 'w4': 0, 'seg5': 12, 'pa6': 0, 'pb7': -1,
        'dom3': [-180, 180],
        'fn0': (e, c, d) => (sin(e[0]) - 1),
      },

    }

    let proform = {

      projection: 'uniwen',
      scale: [1, 1],

      prerotate: [[[ ctl.rotation ]]],
      translate: [ [0, 0, 0] ],
      rotate: [ [[[90 + 0, 90 + 0, 90 + 1 * 360, 90 + 1 * 360]]], 0, 0 ],
      lens: [0, 1, Infinity],
    }

    // .................. natAni
    let natAni = {

      eohal: eohalNatform,
      eoric: {gid: 'nat', cid: 'nat', fid: 'nat'},
      eotim,

      eofold: ani => muonNatform.natMultiLineString({eoform: ani.eoform}),

      eomot: {
        proform: proform,
      },

      eocrom: { 'csx': 0, 'cf': [[[111, 111, 111]]], 'co': [[[0.09, 0.09]]], 'cs': [[[888, 888]]], 'cw': [[[1.9, 1.9]]], 'cp': [[[0.7, 0.9]]]},

      eoform: conform,
      eoload: {},

    }

    // .................. animas
    let animas = [

      natAni, // h.mars g.uniwen

    ]

    return animas
  }

  let enty = () => {}
  enty.z = z
  return enty
}
  exports.eonZ710eSphereFn0 = anitem
}))