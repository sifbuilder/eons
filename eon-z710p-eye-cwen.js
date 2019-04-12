/* ******************************************
   *    @eonZ710pEyeCwen
   *
   */
  (function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports)
      : typeof define === 'function' && define.amd ? define(['exports'], factory)
        : (factory((global.eonZ710pEyeCwen = global.eonZ710pEyeCwen || {})))
  }(this, function (exports) {
    'use strict'
  
    async function anitem (__eo) {
  // .................. eons
  let [
    muonProps,
    ctlWen,
    eohalNatform,
    eohalMars,
    renderSvg,
  ] = await Promise.all([
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

    // -------------------------------  nat
    let nat = {

      eohal: eohalNatform,
      eotim,
      eoric: {'gid': 'nat', 'cid': 'nat', 'fid': 'nat'},

      eofold: null,

      eomot: {
        proform: {
          projection: 'uniwen',
          prerotate: [[[ ctl.rotation ]]],
          translate: [ [0, 0, 0] ],
          scale: 1,
          rotate: [ 0, 0, 0 ],
          lens: [0, 1, 24],
        },
      },

      eocrom: { 'csx': 0, 'cf': [[[888, 555, 111]]], 'co': [[[0.9, 0.9]]], 'cs': [[[555, 666]]], 'cw': [[[0.9, 0.9]]], 'cp': [[[0.7, 0.9]]]},

      eoform: {'m1': [[[3.93, 4, 4.5]]], 'm2': [[[3.93, 4, 4.5]]], 'n1': 2, 'n2': 2, 'n3': [[[1, 2, 2]]], 'a': [[[3, 2, 2]]], 'b': 1},

      eoload: {},

    }
    // -------------------------------  circ
    let circ = {

      eohal: eohalNatform,

      eofold: null,
      eotim,

      eoric: {'gid': 'nat', 'cid': 'nat', 'fid': 'circ'},
      eomot: {
        proform: {
          projection: 'uniwen',
          prerotate: [[[ ctl.rotation ]]],
          translate: [ [0, 0, 0] ],
          scale: 0.3,
          rotate: [ [[[0, 0, -4, 0]]], 0, 0 ],
          lens: [0, 1, 12],
        },
      },

      eocrom: { 'csx': 0, 'cf': [[[222, 222, 444]]], 'co': [[[0.9, 0.9]]], 'cs': [[[555, 666]]], 'cw': [[[0.9, 0.9]]], 'cp': [[[0.7, 0.9]]]},

      eoform: {'m1': [[[4, 4]]], 'm2': [[[4, 4]]], 'n1': 4, 'n2': 2, 'n3': 2, 'a': 1, 'b': 1},
      eoload: {

      },

    }

    // .................. animas
    let animas = [
      nat, // h.mars g.uniwen
      circ, // h.mars g.uniwen

    ]

    return animas
  }

  let enty = () => {}
  enty.z = z
  return enty
}
  exports.eonZ710pEyeCwen = anitem
}))
