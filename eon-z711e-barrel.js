/* ******************************************
   *    @eonZ711eBarrel
   *
   */
  (function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports)
      : typeof define === 'function' && define.amd ? define(['exports'], factory)
        : (factory((global.eonZ711eBarrel = global.eonZ711eBarrel || {})))
  }(this, function (exports) {
    'use strict'
  
    async function anitem (__eo) {
  // .................. eons
  let [
    muonNatform,
    muonProps,
    ctlWen,
    eohalMars,
    eohalNatform,
    renderSvg,
  ] = await Promise.all([
    __eo('xs').m('natform'),
    __eo('xs').m('props'),
    __eo('xs').c('wen'),
    __eo('xs').e('mars'),
    __eo('xs').e('natform'),
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

    let fact = n => n - 1 > 0 ? n * fact(n - 1) : n
    let fact1 = 1,
      fact2 = 2,
      fact3 = 6,
      fact4 = 24,
      fact5 = 120,
      fact6 = 720,
      fact7 = 5040,
      fact8 = 40320,
      fact9 = 362880
    let infact1 = 1 / fact1,
      infact2 = 1 / fact2,
      infact3 = 1 / fact3,
      infact4 = 1 / fact4,
      infact5 = 1 / fact5,
      infact6 = 1 / fact6,
      infact7 = 1 / fact7,
      infact8 = 1 / fact8,
      infact9 = 1 / fact9

    let sinp = [1, 0, -infact2, 0, +infact4, 0, -infact6, 0, infact8]
    let cosp = [0, +1, 0, -infact3, 0, +infact5, 0, -infact7, 0, infact9]

    let conform = {

      'x': {
        'm1': [[[-8, -4, -2, -7.66]]],
        'm2': [[[-3.5, -3.3, -3, -3.73 ]]],
        'n1': [[[16.24, 16.24, 16.24, 16.24]]],
        'n2': [[[6, 6, 6, 5.98]]],
        'n3': [[[13, 15, 17, 17]]],
        'a': [[[9, 9, 9, 8.98]]],
        'b': [[[0.2, 0.2, 0.2, 0.19]]],

        'm1': 6, 'm2': 6, 'n1': 60, 'n2': 100, 'n3': 30, 'a': 1, 'b': 1,

        'ra2': 120, 'v0': 0, 'v1': 1, 'w4': 0, 'seg5': 36, 'pa6': 0, 'pb7': -1,
        'dom3': [-180, 180], // r.form.circ [-1.57, 1.57]

        // form
        c0: [1, 1], e0: [1, 0, -infact2, 0, infact4, 0, -infact6, 0, infact8], // a * cos(q)
      // c3:[1, 0], e3:[1, 0, 0, 0, 0, 0, 0, 0, 0, 0],  // 1 * id(v)

      },

      'y': {
        'm1': [[[-8, -4, -2, -7.66]]],
        'm2': [[[-3.5, -3.3, -3, -3.73 ]]],
        'n1': [[[16.24, 16.24, 16.24, 16.24]]],
        'n2': [[[6, 6, 6, 5.98]]],
        'n3': [[[13, 15, 17, 17]]],
        'a': [[[9, 9, 9, 8.98]]],
        'b': [[[0.2, 0.2, 0.2, 0.19]]],

        'm1': 2, 'm2': 2, 'n1': 1, 'n2': 1, 'n3': 1, 'a': 1, 'b': 1,

        'ra2': 120, 'v0': 0, 'v1': 1, 'w4': 0, 'seg5': 36, 'pa6': 0, 'pb7': -1,
        'dom3': [-180, 180],

        // form
        c0: [1, 0], e0: [0, 1, 0, -infact3, 0, infact5, 0, -infact7, 0, infact9], // 1 * sin(q)
        c3: [1, 0], e3: [1, 0, -infact2, 0, infact4, 0, -infact6, 0, infact8], // 1 * cos(v)

      },

      'z': {
        'm1': [[[-8, -4, -2, -7.66]]],
        'm2': [[[-3.5, -3.3, -3, -3.73 ]]],
        'n1': [[[16.24, 16.24, 16.24, 16.24]]],
        'n2': [[[6, 6, 6, 5.98]]],
        'n3': [[[13, 15, 17, 17]]],
        'a': [[[9, 9, 9, 8.98]]],
        'b': [[[0.2, 0.2, 0.2, 0.19]]],

        'm1': 2, 'm2': 2, 'n1': 1, 'n2': 1, 'n3': 1, 'a': 1, 'b': 1,

        'ra2': 120, 'v0': 0, 'v1': 1, 'w4': 0, 'seg5': 36, 'pa6': 0, 'pb7': -1,

        'dom3': [-180, 180],

        // form
        c0: [1, 0], e0: [0, 1, 0, -infact3, 0, infact5, 0, -infact7, 0, infact9], // 1 * sin(q)
        c3: [1, 0], e3: [0, 1, 0, -infact3, 0, infact5, 0, -infact7, 0, infact9], // 1 * sin(v)

      },

      w: {
        'm1': [[[-8, -4, -2, -7.66]]],
        'm2': [[[-3.5, -3.3, -3, -3.73 ]]],
        'n1': [[[16.24, 16.24, 16.24, 16.24]]],
        'n2': [[[6, 6, 6, 5.98]]],
        'n3': [[[13, 15, 17, 17]]],
        'a': [[[9, 9, 9, 8.98]]],
        'b': [[[0.2, 0.2, 0.2, 0.19]]],

        'm1': 6, 'm2': 6, 'n1': 60, 'n2': 100, 'n3': 30, 'a': 1, 'b': 1,

        // 'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 1, 'b': 1,  // circ
        'ra2': 120, 'v0': 0, 'v1': 1, 'w4': 0, 'seg5': 36, 'pa6': 0, 'pb7': -1,

        'dom3': [-180, 180],

        // 'fn0': (q,s, u=0,v=0, a,b, c=1,d=1) => c * cos(u),
        // 'fn0': (q,s, u=0,v=0, a,b, c=1,d=1) => d,
        'fn0': (q, s, u = 0, v = 0, a, b, c = 1, d = 1) => v,
      },

    }

    let proform = {

      projection: 'uniwen',
      // scale: [1, 1],
      scale: [0.5, 0.5],
      scale: [ [[[0.2, 1]]], [[[0.2, 1]]] ],

      // projection:  d3.geoOrthographic(),
      // scale: 100,

      prerotate: [[[ ctl.rotation ]]],
      translate: [ [0, 0, 0] ],
      rotate: [ [[[90 + 0, 90 + 0, 90 + 1 * 360, 90 + 1 * 360]]], 0, 0 ],
      // rotate: [ 0, 0, 0 ],
      lens: [0, 1, Infinity],
    }

    // .................. natAni
    let natAni = {

      eohal: eohalNatform,

      eofold: ani => muonNatform.natMultiLineString({eoform: ani.eoform}),
      eotim,

      eoric: {gid: 'nat', cid: 'nat', fid: 'nat'},
      eomot: {
        proform: proform,
      },
      eocrom: { 'csx': 0, 'cf': [[[111, 111, 111]]], 'co': [[[0.09, 0.09]]], 'cs': [[[888, 888]]], 'cw': [[[1.9, 1.9]]], 'cp': [[[0.7, 0.9]]]},

      eoform: conform,
      eoload: {

      },

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
  exports.eonZ711eBarrel = anitem
}))