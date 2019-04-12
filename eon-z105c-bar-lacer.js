/* ******************************************
   *    @eonZ105cBarLacer
   *
   */
  (function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports)
      : typeof define === 'function' && define.amd ? define(['exports'], factory)
        : (factory((global.eonZ105cBarLacer = global.eonZ105cBarLacer || {})))
  }(this, function (exports) {
    'use strict'
  
    async function anitem (__eo) {
  // .................. eons
  let [
    ctlWen,
    eohalNatform,
    eohalMars,
    muonAnimas,
    muonNatform,
    renderSvg,
  ] = await Promise.all([
    __eo('xs').c('wen'),
    __eo('xs').e('natform'),
    __eo('xs').e('mars'),
    __eo('xs').m('animas'),
    __eo('xs').m('natform'),
    __eo('xs').r('svg'),
  ])
  try { renderSvg.scenecolor('black') } catch (e) {}
  // .................. animas
  let z = function () {
    // .................. pics
    let ctl
    try {
      ctl = ctlWen().control(renderSvg.svg())
    } catch (e) {
      ctl = () => [0, 0, 0]
    }

    let eotim = {td: 16800, t0: 0, t1: 1, t2: 1, t3: 1}

    let eocrom = { 'csx': 0, 'cf': 888, 'co': 0.19, 'cs': 777, 'cw': 0.99, 'cp': 0.9}

    // ............................. natAni
    let natAni = {
      eohal: eohalMars,
      eotim,
      eoric: {gid: 'nat', cid: 'nat', fid: 'nat2'},

      eofold: ani => {
        let coors = ani.eoload.coors

        let res = {
          type: 'Feature',
          geometry: {
            type: 'LineString',
            coordinates: coors,
          },
          properties: {},
        }
        return res
      },

      eomot: {
        proform: {
          projection: 'uniwen',
          translate: [ 0, 0, 0], // mot
          scale: 1,
          rotate: [ 0, 0, 0 ],
          prerotate: [[[ ctl.rotation ]]],
          lens: [0, 1, Infinity],
          addNodeToTranslate: 1, // eonode
        },
      },

      eoload: {
        eocrom: eocrom,

        coors: [[[
          [
            [ [0, 0, 0], [100, 100, 100] ],

            [ [20, 20, 20], [300, 300, 300] ],
          ],
        ]]],

      },
    }
    // ............................. scene
    let scene = {

      natAni, // h.mars

    }

    return scene
  }

  let enty = () => {}
  enty.z = z
  return enty
}
  exports.eonZ105cBarLacer = anitem
}))