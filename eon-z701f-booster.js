/* ******************************************
   *    @eonZ701fBooster
   *
   */
  (function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports)
      : typeof define === 'function' && define.amd ? define(['exports'], factory)
        : (factory((global.eonZ701fBooster = global.eonZ701fBooster || {})))
  }(this, function (exports) {
    'use strict'
  
    async function anitem (__eo) {
  // .................. eons
  let [
    muonProps,
    ctlWen,
    muonNatform,
    eohalMars,
    renderSvg,
  ] = await Promise.all([
    __eo('xs').m('props'),
    __eo('xs').c('wen'),
    __eo('xs').m('natform'),
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

    let radians = Math.PI / 180, degrees = 180 / Math.PI,
      sin = Math.sin, cos = Math.cos, sqrt = Math.sqrt

    let fact = n => n - 1 > 0 ? n * fact(n - 1) : n
    let fact0 = 1,
      fact1 = 1,
      fact2 = 2,
      fact3 = 6,
      fact4 = 24,
      fact5 = 120,
      fact6 = 720,
      fact7 = 5040,
      fact8 = 40320,
      fact9 = 362880
    let infact0 = 1 / fact0,
      infact1 = 1 / fact1,
      infact2 = 1 / fact2,
      infact3 = 1 / fact3,
      infact4 = 1 / fact4,
      infact5 = 1 / fact5,
      infact6 = 1 / fact6,
      infact7 = 1 / fact7,
      infact8 = 1 / fact8,
      infact9 = 1 / fact9

    let sinp = [infact0, 0, -infact2, 0, infact4, 0, -infact6, 0, infact8]
    let cosp = [0, infact1, 0, -infact3, 0, infact5, 0, -infact7, 0, infact9]
    let exp = [infact0, infact1, infact2, infact3, infact4, infact5, infact6, infact7, infact8, infact9]

    // ............................. pics
    let eotim = {'td': 12600, 't0': 0, 't1': 1, 't2': 1, 't3': 1, nostop: 1, tf: t => 1 - 4 * (t - 0.5) * (t - 0.5)}

    let conformLine = {
      'x': {
        'm1': -7.66, 'm2': -3.73, 'n1': 16.24, 'n2': 5.98, 'n3': 17, 'a': 8.98, 'b': 0.19,
        'ra2': 120, 'v0': 0, 'v1': 1, 'w4': 0, 'seg5': 6, 'pa6': 0, 'pb7': -1,
        'dom3': [-180, 180],
        'fn0': (e, c) => c[0] * cos(e[0]),
      },
      'y': {
        'm1': -7.66, 'm2': -3.73, 'n1': 16.24, 'n2': 5.98, 'n3': 17, 'a': 8.98, 'b': 0.19,
        'ra2': 120, 'v0': 0, 'v1': 1, 'w4': 0, 'seg5': 6, 'pa6': 0, 'pb7': -1,
        'dom3': [-180, 180],
        'fn0': (e, c) => c[1] * sin(e[0]) * cos(e[3]),
      },
      'z': {
        'm1': 4, 'm2': 4, 'n1': 100, 'n2': 100, 'n3': 100, 'a': 2, 'b': 1,
        'ra2': 120, 'v0': 0, 'v1': 1, 'w4': 0, 'seg5': 6, 'pa6': 0, 'pb7': -1,
        'dom3': [-90, 90],
        'fn0': (e, c) => c[1] * sin(e[0]) * sin(e[3]),
      },
      'w': {
        'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 1, 'b': 1, // circ
        'ra2': 120, 'v0': 0, 'v1': 1, 'w4': 0, 'seg5': 6, 'pa6': 0, 'pb7': -1,
      },
    }

    let conformTorus = {
      'x': {
        'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 1, 'b': 1, // circ
        'ra2': 120, 'v0': 0, 'v1': 1, 'w4': 0, 'seg5': [[[15, 15, 30]]], 'pa6': 0, 'pb7': -1,
        'dom3': [-180, 180],
        'fn0': (e, c) => c[0] * (10 + 5 * cos(e[0])) * c[2] * cos(e[3]),
      },
      'y': {
        'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 1, 'b': 1, // circ
        'ra2': 120, 'v0': 0, 'v1': 1, 'w4': 0, 'seg5': [[[15, 15, 30]]], 'pa6': 0, 'pb7': -1,
        'dom3': [-180, 180],
        c: [ 1, 1, [[[10, 10]]], [[[5, 5]]]],
        'fn0': (e, c, d) => c[1] * (d.c[2] + d.c[3] * cos(e[0])) * c[2] * sin(e[3]),
      },
      'z': {
        'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 1, 'b': 1, // circ
        'ra2': 120, 'v0': 0, 'v1': 1, 'w4': 0, 'seg5': [[[15, 15, 30]]], 'pa6': 0, 'pb7': -1,
        'dom3': [ -180, 180 ],
        c: [ 1, 1, 1, [[[5, 5]]] ],
        'fn0': (e, c, d) => d.c[3] * c[3] * sin(e[0]),
      },
      'w': {
        'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 1, 'b': 1, // circ
        'ra2': 120, 'v0': 0, 'v1': 1, 'w4': 0, 'seg5': [[[15, 15, 30]]], 'pa6': 0, 'pb7': -1,
        'dom3': [ -180, 180 ],
        'fn0': (e, c) => c[3] * cos(e[2]),
      },
    }

    let conformSphere = {
      'x': {
        'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 1, 'b': 1, // circ
        'ra2': 120, 'v0': 0, 'v1': 1, 'w4': 0, 'seg5': [[[15, 15, 15]]], 'pa6': 0, 'pb7': -1,
        'dom3': [-180, 180],
        'fn0': (e, c) => c[0] * cos(e[0]) * c[2] * cos(e[3]),
      },
      'y': {
        'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 1, 'b': 1, // circ
        'ra2': 120, 'v0': 0, 'v1': 1, 'w4': 0, 'seg5': [[[15, 15, 15]]], 'pa6': 0, 'pb7': -1,
        'dom3': [-180, 180],
        'fn0': (e, c, dax) => c[1] * sin(e[0]) * c[2] * cos(e[3]),
      },
      'z': {
        'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 1, 'b': 1, // circ
        'ra2': 120, 'v0': 0, 'v1': 1, 'w4': 0, 'seg5': [[[15, 15, 15]]], 'pa6': 0, 'pb7': -1,
        'dom3': [-90, 90],
        'fn0': (e, c) => c[2] * sin(e[3]),
      },
      'w': {
        'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 1, 'b': 1, // circ
        'ra2': 120, 'v0': 0, 'v1': 1, 'w4': 0, 'seg5': [[[15, 15, 15]]], 'pa6': 0, 'pb7': -1,
        'dom3': [-90, 90],
        'fn0': (e, c) => c[3] * cos(e[2]),
      },
    }

    let conformHyper = {
      'x': {
        'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 1, 'b': 1, // circ
        'ra2': 120, 'v0': 0, 'v1': 1, 'w4': 0, 'seg5': [[[15, 30, 30]]], 'pa6': 0, 'pb7': -1,
        'dom3': [-180, 180],
        'fn0': (e, c) => c[0] * cos(e[0]) * c[2] * Math.cosh(e[3]),
      },
      'y': {
        'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 1, 'b': 1, // circ
        'ra2': 120, 'v0': 0, 'v1': 1, 'w4': 0, 'seg5': [[[15, 30, 30]]], 'pa6': 0, 'pb7': -1,
        'dom3': [-180, 180],
        c: [ [[[18, 0, -18]]], 0, 0 ],
        'fn0': (e, c, dax) => c[1] * sin(e[0]) * c[2] * Math.cosh(e[3]),

      },

      'z': {
        'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 1, 'b': 1, // circ
        'ra2': 120, 'v0': 0, 'v1': 1, 'w4': 0, 'seg5': [[[15, 30, 30]]], 'pa6': 0, 'pb7': -1,
        'dom3': [-90, 90],
        'fn0': (e, c) => c[3] * Math.sinh(e[2]),
      },

      'w': {
        'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 1, 'b': 1, // circ
        'ra2': 120, 'v0': 0, 'v1': 1, 'w4': 0, 'seg5': [[[15, 30, 30]]], 'pa6': 0, 'pb7': -1,
        'dom3': [-90, 90],
      },

    }

    let eocromLine = { 'csx': 0, 'cf': [[[ 777, 777, 777]]], 'co': [[[0.02, 0.001, 0.001, 0.001]]],
      'cs': [[[888, 888, 888]]], 'cw': [[[1.99, 0.99, 0.99, 0.99]]], 'cp': [[[0.99, 0.2, 0.2, 0.9]]]}

    let eocromSphere = { 'csx': 0, 'cf': [[[ 777, 777, 777]]], 'co': [[[0.02, 0.001, 0.001, 0.001]]],
      'cs': [[[888, 888, 888]]], 'cw': [[[1.99, 0.99, 0.99, 0.99]]], 'cp': [[[0.99, 0.2, 0.2, 0.9]]]}

    let eocromHyper = { 'csx': 0, 'cf': [[[ 777, 777, 777]]], 'co': [[[0.001, 0.02, 0.001, 0.001]]],
      'cs': [[[222, 666, 666]]], 'cw': [[[0.99, 1.99, 0.99, 0.99]]], 'cp': [[[0.01, 0.99, 0.2, 0.9]]]}

    let eocromTorus = { 'csx': 0, 'cf': [[[ 777, 777, 777]]], 'co': [[[0.001, 0.001, 0.02, 0.001]]],
      'cs': [[[222, 444, 444]]], 'cw': [[[0.99, 0.99, 1.99, 0.99]]], 'cp': [[[0.01, 0.01, 0.99, 0.9]]]}

    // ............................. hyperAni
    let hyperAni = {
      eohal: eohalMars,
      eotim,
      eoric: {gid: 'q', cid: 'q', fid: 'q1'},
      eofold: ani => muonNatform.natMultiLineString({eoform: ani.eoform}),
      eomot: {
        proform: {
          projection: 'uniwen',
          scale: [ [[[0.5, 0.5]]], [[[0.5, 0.5]]] ],
          prerotate: [[[ ctl.rotation ]]],
          translate: [ 0, 0, 0 ],
          rotate: [ -75, 0, 0 ],
          lens: [0, 1, Infinity ],
        },
      },
      eocrom: eocromHyper,
      eoform: conformHyper,
      eoload: {},
    }

    // ............................. sphereAni
    let sphereAni = {
      eohal: eohalMars,
      eofold: ani => muonNatform.natMultiLineString({eoform: ani.eoform}),
      eotim,
      eoric: {gid: 'q', cid: 'q', fid: 'q2'},
      eomot: {
        proform: {
          projection: 'uniwen',
          scale: [ [[[0.5, 0.5]]], [[[0.5, 0.5]]] ],
          prerotate: [[[ ctl.rotation ]]],
          translate: [ 0, 0, 0 ],
          rotate: [ -75, 0, 0 ],
          lens: [0, 1, Infinity ],
        },
      },
      eocrom: eocromSphere,
      eoform: conformSphere,
      eoload: {
      },
    }

    // ............................. sphereAni
    let lineAni = {
      eohal: eohalMars,
      eotim,
      eoric: {gid: 'q', cid: 'q', fid: 'q4'},
      eofold: ani => muonNatform.natMultiLineString({eoform: ani.eoform}),
      eomot: {
        proform: {
          projection: 'uniwen',
          scale: [ 1, 1, 1 ],
          prerotate: [[[ ctl.rotation ]]],
          translate: [ 0, 0, 0 ],
          rotate: [ -75, 90, 0 ],
          lens: [0, 1, Infinity ],
        },
      },
      eocrom: eocromSphere,
      eoform: conformLine,
      eoload: {},
    }

    // ............................. torusAni
    let torusAni = {
      eohal: eohalMars,
      eotim,
      eoric: {gid: 'q', cid: 'q', fid: 'q3'},

      eofold: ani => muonNatform.natMultiLineString({eoform: ani.eoform}),
      eomot: {
        proform: {
          projection: 'uniwen',
          scale: [ [[[0.1, 0.1]]], [[[0.1, 0.1]]] ],
          prerotate: [[[ ctl.rotation ]]],
          translate: [ 0, 0, 0 ],
          rotate: [ -75, 0, 0 ],
          lens: [0, 1, Infinity ],
        },
      },
      eocrom: eocromTorus,
      eoform: conformTorus,
      eoload: {},
    }

    // ............................. animas
    let animas = [

      sphereAni, // h.natform
      hyperAni, // h.natform
      torusAni, // h.natform
      lineAni, // h.natform

    ]

    return animas
  }

  let enty = () => {}
  enty.z = z
  return enty
}
  exports.eonZ701fBooster = anitem
}))