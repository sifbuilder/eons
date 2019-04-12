/* ******************************************
   *    @eonZ701aGratiAce
   *
   */
  (function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports)
      : typeof define === 'function' && define.amd ? define(['exports'], factory)
        : (factory((global.eonZ701aGratiAce = global.eonZ701aGratiAce || {})))
  }(this, function (exports) {
    'use strict'
  
    async function anitem (__eo) {
  let [
    ctlWen,
    eohalMars,
    muonGraticule,
    protonNatform,
    protonUniwen,
    renderSvg,
  ] = await Promise.all([
    __eo('xs').c('wen'),
    __eo('xs').e('mars'),
    __eo('xs').m('graticule'),
    __eo('xs').p('natform'),
    __eo('xs').p('uniwen'),
    __eo('xs').r('svg'),
  ])
  try { renderSvg.scenecolor('black') } catch (e) {}
  let ctl
  try {
    ctl = ctlWen().control(renderSvg.svg())
  } catch (e) {
    ctl = () => [0, 0, 0]
  }

  // .................. animas
  let z = function () {
    // .................. pics

    let eotim = {'td': 9800, 't0': 0, 't1': 1, 't2': 1, 't3': 1}

    let eoform = {
      'x': {
        'm1': -8, // [[[-8, -4, -2, -7.66]]],
        'm2': -3.5, // [[[-3.5, -3.3, -3, -3.73 ]]],
        'n1': 16.24, // [[[16.24, 16.24, 16.24, 16.24]]],
        'n2': 6, // [[[6, 6, 6, 5.98]]],
        'n3': 13, // [[[13, 15, 17, 17]]],
        'a': 9, // [[[9, 9, 9, 8.98]]],
        'b': 0.2, // [[[0.2, 0.2, 0.2, 0.19]]],
        'ra2': 100, 'v0': 0, 'v1': 1, 'w4': 0, 'seg5': 360, 'pa6': 0, 'pb7': -1,
        'dom3': [-180, 180],
      },
      'y': {
        'm1': -8, // [[[-8, -4, -2, -7.66]]],
        'm2': -3.5, // [[[-3.5, -3.3, -3, -3.73 ]]],
        'n1': 16.24, // [[[16.24, 16.24, 16.24, 16.24]]],
        'n2': 6, // [[[6, 6, 6, 5.98]]],
        'n3': 13, // [[[13, 15, 17, 17]]],
        'a': 9, // [[[9, 9, 9, 8.98]]],
        'b': 0.2, // [[[0.2, 0.2, 0.2, 0.19]]],
        'ra2': 100, 'v0': 0, 'v1': 1, 'w4': 0, 'seg5': 360, 'pa6': 0, 'pb7': -1,
        'dom3': [-180, 180],
      },
      'z': {
        'm1': -8, // [[[-8, -4, -2, -7.66]]],
        'm2': -3.5, // [[[-3.5, -3.3, -3, -3.73 ]]],
        'n1': 16.24, // [[[16.24, 16.24, 16.24, 16.24]]],
        'n2': 6, // [[[6, 6, 6, 5.98]]],
        'n3': 13, // [[[13, 15, 17, 17]]],
        'a': 9, // [[[9, 9, 9, 8.98]]],
        'b': 0.2, // [[[0.2, 0.2, 0.2, 0.19]]],
        'ra2': 100, 'v0': 0, 'v1': 1, 'w4': 0, 'seg5': 360, 'pa6': 0, 'pb7': -1,
        'dom3': [-180, 180 ],
      },
    }

    // .................. gratiform
    let gratiform = {

      eohal: eohalMars,
      eotim: eotim,
      eoric: {gid: 'grat', cid: 'grat', fid: 'gratiform'},

      eofold: ani => muonGraticule.gjfMultiLineString(ani.eoload.eoframe),

      eomot: {
        conform: {
          projection: 'natform',
          eoform: eoform,
        },
        ereform: {
          projection: 'uniwen',
          translate: [0, 0, 0],
          scale: 1,
          rotate: [0, 0, 0],
          lens: [ 0, 1, Infinity ],
        },
        proform: {
          projection: 'uniwen',
          rotate: [[[ ctl.rotation ]]],
          translate: [0, 0, 0],
          scale: 1,
          lens: [ 0, 1, Infinity ],
        },
      },

      eoload: {
        eocrom: { 'csx': 0, 'cf': 666, 'cs': 666, 'cw': 0.9, 'co': 0.3, 'cp': 0.9 },
        eoframe: {
          geoframe: [ [ [ [[[-1, -1, -180]]], [[[1, 1, 180]]], [[[30, 30]]], 1], // x
            [ [[[0, -90, -180]]], [[[0, 90, 180]]], [[[15, 15]]], 1] ] ], // y

        },
      },
    }

    // .................. scene
    let scene = {

      gratiform,

    }

    return scene
  }

  let enty = () => {}
  enty.z = z
  return enty
}
  exports.eonZ701aGratiAce = anitem
}))