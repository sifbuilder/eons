/* ******************************************
   *    @eonZ812uTorus
   *
   */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports)
    : typeof define === 'function' && define.amd ? define(['exports'], factory)
      : (factory((global.eonZ812uTorus = global.eonZ812uTorus || {})))
}(this, function (exports) {
  'use strict'

  async function anitem (__eo) {
  // .................. eons
    let [
      eonCtlWen,
      eonEohalMars,
      eonMuonNatform,
      eonMuonProps,
      eonRenderSvg,
    ] = await Promise.all([
      __eo('xs').b('eon-ctl-wen'),
      __eo('xs').b('eon-eohal-mars'),
      __eo('xs').b('eon-muon-natform'),
      __eo('xs').b('eon-muon-props'),
      __eo('xs').b('eon-render-svg'),
    ])
    try { eonRenderSvg.scenecolor('black') } catch (e) {}
    // .................. animas
    let z = function () {
    // .................. pics
      let ctl
      try {
        ctl = eonCtlWen().control(eonRenderSvg.svg())
      } catch (e) {
        ctl = () => [0, 0, 0]
      }

      let radians = Math.PI / 180, degrees = 180 / Math.PI,
        sin = Math.sin, cos = Math.cos, sqrt = Math.sqrt,
        sinh = Math.sinh, cosh = Math.cosh, tanh = Math.tanh,
        exp = Math.exp

      // ............................. pics
      let eotim = {'td': 9800, 't0': 0, 't1': 1, 't2': 1, 't3': 1, nostop: 1, tf: t => t}

      let conformTorus2 = { // yellow
        x: {
          'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 1, 'b': 1,
          'ra2': 10, 'v0': 0, 'v1': 1, 'w4': 0, 'seg5': [[[64, 360, 360]]], 'pa6': 0, 'pb7': -1,
          'dom3': [ 0, 6 * 180 ],
          c: [ [[[0, 2 * 1.61803398875, 4 * 1.61803398875, 6 * 1.61803398875]]], 1, [[[10, 10]]], [[[5, 5]]]],
          'fn0': (e, c, d) => c[0] * (d.c[2] + d.c[3] * cos(e[0])) * c[2] * cos(e[2] + d.c[0] * e[1]),
        },
        y: {
          'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 1, 'b': 1,
          'ra2': 10, 'v0': 0, 'v1': 1, 'w4': 0, 'seg5': [[[64, 360, 360]]], 'pa6': 0, 'pb7': -1,
          'dom3': [ 0, 6 * 180 ],
          c: [ [[[0, 2 * 1.61803398875, 4 * 1.61803398875, 6 * 1.61803398875]]], 1, [[[10, 10]]], [[[5, 5]]]],
          'fn0': (e, c, d) => c[1] * (d.c[2] + d.c[3] * cos(e[1])) * c[2] * sin(e[2] + d.c[0] * e[1]),
        },
        z: {
          'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 1, 'b': 1,
          'ra2': 10, 'v0': 0, 'v1': 1, 'w4': 0, 'seg5': [[[64, 360, 360]]], 'pa6': 0, 'pb7': -1,
          'dom3': [ 0, 0 ],
          c: [ 1, 1, 1, [[[6, 6]]] ],
          'fn0': (e, c, d) => d.c[3] * c[3] * sin(e[0]),
        },
        w: {
          'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 1, 'b': 1,
          'ra2': 10, 'v0': 0, 'v1': 1, 'w4': 0, 'seg5': 64, 'pa6': 0, 'pb7': -1,
          'dom3': [ -180, 180 ],
          'fn0': (e, c) => c[3] * cos(e[2]),
        },

      }

      // ............................. torusAni2 yellow
      let torusAni2 = {

        eohal: eonEohalMars,
        eofold: ani => eonMuonNatform.natMultiLineString({eoform: ani.eoform}),
        eotim,
        eoric: {gid: 'q', cid: 'q', fid: 'q2'},
        eomot: {
          proform: {
            projection: 'uniwen',
            scale: [ 1, 1, 1 ],
            prerotate: [[[ ctl.rotation ]]],
            translate: [ [0, 0, 0] ],
            rotate: [ [[[0, 0, 90, 90, 60 + 90, 60 + 90]]], 0, 0 ],
            lens: [ 0, 1, Infinity ],
          },
        },
        eocrom: { 'csx': 0, 'cf': [[[ 666, 333, 666]]], 'co': [[[0.069, 0.06, 0.069]]],
          'cs': [[[888, 888, 888]]], 'cw': [[[1.3, 1.3]]], 'cp': [[[0.99, 0.99]]]},
        eoform: conformTorus2,
        eoload: {
        },
      }

      // ............................. animas
      let animas = [

        torusAni2, // h.mars

      ]

      return animas
    }

    let enty = () => {}
    enty.z = z
    return enty
  }
  exports.eonZ812uTorus = anitem
}))
