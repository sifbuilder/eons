/* ******************************************
   *    @eonZ701bAce2
   *
   */
  (function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports)
      : typeof define === 'function' && define.amd ? define(['exports'], factory)
        : (factory((global.eonZ701bAce2 = global.eonZ701bAce2 || {})))
  }(this, function (exports) {
    'use strict'
  
    async function anitem (__eo) {
  let [
    muonGraticule,
    ctlWen,
    muonNatform,
    prjUnwen,
    protonNatform,
    eohalMars,
    renderSvg,
  ] = await Promise.all([
    __eo('xs').m('graticule'),
    __eo('xs').c('wen'),
    __eo('xs').m('natform'),
    __eo('xs').p('uniwen'),
    __eo('xs').p('natform'),
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

    let eotim = {'td': 9800, 't0': 0, 't1': 1, 't2': 1, 't3': 1}

    let form = {
      'x': {
        'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 1, 'b': 1,
        'm1': -8, // [[[-8, -4, -2, -7.66]]],
        'm2': -3.5, // [[[-3.5, -3.3, -3, -3.73 ]]],
        'n1': 16.24, // [[[16.24, 16.24, 16.24, 16.24]]],
        'n2': 6, // [[[6, 6, 6, 5.98]]],
        'n3': 13, // [[[13, 15, 17, 17]]],
        'a': 9, // [[[9, 9, 9, 8.98]]],
        'b': 0.2, // [[[0.2, 0.2, 0.2, 0.19]]],
        'ra2': 100, 'v0': 0, 'v1': 1, 'w4': 0, 'seg5': 72, 'pa6': 0, 'pb7': -1,
        'dom3': [-180, 180],
        'pr8': Math.cos,
      },
      'y': {
        'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 1, 'b': 1,
        'm1': -8, // [[[-8, -4, -2, -7.66]]],
        'm2': -3.5, // [[[-3.5, -3.3, -3, -3.73 ]]],
        'n1': 16.24, // [[[16.24, 16.24, 16.24, 16.24]]],
        'n2': 6, // [[[6, 6, 6, 5.98]]],
        'n3': 13, // [[[13, 15, 17, 17]]],
        'a': 9, // [[[9, 9, 9, 8.98]]],
        'b': 0.2, // [[[0.2, 0.2, 0.2, 0.19]]],
        'ra2': 100, 'v0': 0, 'v1': 1, 'w4': 0, 'seg5': 72, 'pa6': 0, 'pb7': -1,
        'dom3': [-180, 180],
        'pr8': Math.sin,
      },
      'z': {
        'm1': 4, 'm2': 4, 'n1': 100, 'n2': 100, 'n3': 100, 'a': 1, 'b': 1,
        'm1': -8, // [[[-8, -4, -2, -7.66]]],
        'm2': -3.5, // [[[-3.5, -3.3, -3, -3.73 ]]],
        'n1': 16.24, // [[[16.24, 16.24, 16.24, 16.24]]],
        'n2': 6, // [[[6, 6, 6, 5.98]]],
        'n3': 13, // [[[13, 15, 17, 17]]],
        'a': 9, // [[[9, 9, 9, 8.98]]],
        'b': 0.2, // [[[0.2, 0.2, 0.2, 0.19]]],
        'ra2': 100, 'v0': 0, 'v1': 1, 'w4': 0, 'seg5': 72, 'pa6': 0, 'pb7': -1,
        'dom3': [-180, 180 ],
        'pr8': Math.cos,
      },
    }

    // .................. natform
    let natform = {

      eohal: eohalMars,

      eofold: ani => muonNatform.natMultiLineString({eoform: ani.eoform}),

      eotim: eotim,
      eoric: {'gid': 'nat', 'cid': 'nat', 'fid': 'natform'},
      eocrom: { 'csx': 0, 'cf': [[[444, 777]]], 'co': [[[0.09, 0.09]]], 'cs': [[[555, 777]]], 'cw': [[[0.7, 0.7]]], 'cp': [[[0.9, 0.9]]]},

      eomot: {
        proform: {
          'projection': 'uniwen',
          'prerotate': [[[ ctl.rotation ]]],
          'translate': [0, 0],
          'scale': 3,
          'rotate': [ 0, 0, 0],
          'lens': [ 0, 1, Infinity ],
        },
      },

      eoform: form,
      eoload: {
      },

    }

    // .................. gratform
    let gratform = {

      eohal: eohalMars,

      eofold: p => muonGraticule.gjfMultiLineString(p.eoframe),

      eotim: eotim,
      eoric: {'gid': 'grat', 'cid': 'grat', 'fid': 'gratform'},
      eocrom: { 'csx': 0, 'cf': 666, 'cs': 666, 'cw': 0.9, 'co': 0.3, 'cp': 0.9 },

      eomot: {
        conform: {
          projection: 'natform',
          eoform: form,
        },

        proform: {
          projection: 'uniwen',
          prerotate: [[[ ctl.rotation ]]],
          translate: [0, 0],
          scale: 3,
          rotate: [ 0, 0, 0],
          lens: [ 0, 1, Infinity ],
        },
      },

      eoframe: {

        geoframe: [ [ [ [[[-1, -1, -180]]], [[[18, 18, 180]]], [[[15, 15]]], 15], // x
          [ [[[0, -90, -180]]], [[[0, 90, 180]]], [[[15, 15]]], 15] ] ], // y

      },

      eoload: {
      },

    }

    // .................. animaApi
    let animas = [

      natform, // h.mars
      gratform, // h.scene

    ]

    return animas
  }

  let enty = () => {}
  enty.z = z
  return enty
}
  exports.eonZ701bAce2 = anitem
}))