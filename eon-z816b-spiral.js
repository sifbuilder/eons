/* ******************************************
   *    @eonZ816bSpiral
   *
   */
  (function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports)
      : typeof define === 'function' && define.amd ? define(['exports'], factory)
        : (factory((global.eonZ816bSpiral = global.eonZ816bSpiral || {})))
  }(this, function (exports) {
    'use strict'
  
    async function anitem (__eo) {
  // .................. eons
  let [
    ctlWen,
    eohalMars,
    muonNatform,
    muonProps,
    muonGeoj,
    muonGeom,
    muonGraticule,
    muonProfier,
    muonProj3ct,
    renderSvg,
  ] = await Promise.all([
    __eo('xs').c('wen'),
    __eo('xs').e('mars'),
    __eo('xs').m('natform'),
    __eo('xs').m('props'),
    __eo('xs').m('geoj'),
    __eo('xs').m('geom'),
    __eo('xs').m('graticule'),
    __eo('xs').m('profier'),
    __eo('xs').m('proj3ct'),
    __eo('xs').r('svg'),
  ])
  try { renderSvg.scenecolor('black') } catch (e) {}
  let muonStore = __eo('muonStore')
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

    let conform = {
      x: {
        'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 1, 'b': 1, // circ
        'ra2': 120, 'v0': 0, 'v1': 1, 'w4': 0, 'seg5': 180, 'pa6': 0, 'pb7': -1,
        'dom3': [-180, 180],
        c: [ [[[1, 1]]], [[[1, 1]]], [[[0, 90]]], 1 ],
        'fn0': (e, c, dax) => {
          let a = 4 // a: frequency
          let h = 90 // h: height
          let r = 90 // r: radius
          let x = e[0]
          let y = e[1]
          let z = e[2]
          let w = e[3]
          let d = 0.157 // radians * 36 / 360 // 0.157  , z.seg5: 36, xy.dom: 360

          let levels = 3
          let m = 1
          if (z === 0) {
            let i = levels
            m = 1 / i
          } else {
            for (let i = 1; i < levels; i++) { // 1
              if (z === (Math.PI / 2) / i) {
                m = 1 / i
                break
              }
            }
          }

          let res = m * Math.sqrt((Math.PI + x)) * cos(x) * sin(x)

          return res
        },
      },
      y: {
        'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 1, 'b': 1, // circ
        'ra2': 120, 'v0': 0, 'v1': 1, 'w4': 0, 'seg5': 180, 'pa6': 0, 'pb7': -1,
        'dom3': [-180, 180],
        c: [ [[[1, 1]]], [[[1, 1]]], [[[0, 90]]], 1 ],
        'fn0': (e, c, dax) => {
          let a = 4 // a: frequency
          let h = 90 // h: height
          let r = 90 // r: radius
          let x = e[0]
          let y = e[1]
          let z = e[2]
          let w = e[3]
          let d = 0.157 // radians * 36 / 360 // 0.157  , z.seg5: 36, xy.dom: 360

          let levels = 3
          let m = 1
          if (z === 0) {
            let i = levels
            m = 1 / i
          } else {
            for (let i = 1; i < levels; i++) { // 1
              if (z === (Math.PI / 2) / i) {
                m = 1 / i
                // if (1 && 1) console.log('m', i, m)

                break
              }
            }
          }

          let res = m * Math.sqrt((Math.PI + y)) * sin(y) * sin(y)

          return res
        },

      },

      z: {
        'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 1, 'b': 1, // circ
        'ra2': 120, 'v0': 0, 'v1': 1, 'w4': 0, 'seg5': 3, 'pa6': 0, 'pb7': -1, // segs: double cycles
        'dom3': [0, 180],
        c: [ [[[1, 1]]], 1, 1, 1], // 37.5   radians * 225 / 6    2:2/3, 4:2/2,
        'fn0': (e, c, dax) => {
          let a = 4 // a: frequency   360/90
          let h = 90 // h: height
          let r = 90 // r: radius
          let x = e[0] // dom:[-180, 180] : [-1.57, 1.57]
          let y = e[1] // dom:[-180, 180] : [-1.57, 1.57]
          let z = e[2]
          let w = e[3] // [0, 3.14] : [0, 2 * 1.57]
          // let d = radians * 360 / 6 // 0.157  , z.seg5: 36, xy.dom: 360

          let levels = dax.seg5

          let res = z + 0.5 * (x + y) / levels
          return res
        },
      },

      w: {
        'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 1, 'b': 1, // circ
        'ra2': 120, 'v0': 0, 'v1': 1, 'w4': 0, 'seg5': 360, 'pa6': 0, 'pb7': -1,
        'dom3': [0, 360],
        c: [ 1, 1, 1, 1 ],
        'fn0': (e, c, dax) => {
          return e[3]
        },

      },

    }

    let eocrom = { 'csx': 1, 'cf': [[[ 666, 333, 666]]], 'co': [[[0.069, 0.06, 0.069]]],
    // let eocrom = { 'csx': 0, 'cf': [[[ 666, 333, 666]]], 'co': [[[0.069, 0.06, 0.069]]],
      'cs': [[[666, 333, 666]]], 'cw': [[[0.7, 0.7, 0.7]]], 'cp': [[[0.9, 0.9]]]}

    // ............................. natAni
    let natAni = {

      eohal: eohalMars,
      eotim,
      eoric: {gid: 'q', cid: 'q', fid: 'q'},

      eofold: ani => {
        let natipros = {
          eoform: ani.eoform,
          ghv: 1, // horizontal geodesics
          gsa: 0, // symetric distribution of geodesics around the origin
          gco: 0, // closed line
        }

        let gj = muonNatform.natMultiLineString(natipros)
        let coords = muonGeoj.getCoords(gj)
        let nb = coords.length
        let unElapsed = ani.eotim.unElapsed
        let t = unElapsed
        let nbt = Math.ceil(nb * t)

        let firstcoord = 0

        let newFeatures = [gj]

        let inc = 0
        let pars = 0

        if (inc === 1 || pars === 1) {
          let preani = muonStore.findAnigramFromUid(ani.eoric.uid)

          if (preani === undefined) {
            let tgj = gj
            tgj.geometry = muonGeoj.getCoordsInRange(gj.geometry, nbt, firstcoord)
            tgj.properties = tgj.properties === undefined ? {} : tgj.properties
            tgj.properties.eocrom = ani.eocrom
            tgj.properties.lastcoord = nbt

            newFeatures = [tgj]
          }
        }

        if (inc === 1) {
          let preani = muonStore.findAnigramFromUid(ani.eoric.uid)

          if (preani !== undefined) {
            let features = preani.eofold.features

            let lastFeature = features[features.length - 1]
            let lastFeatureProps = lastFeature.properties
            let lastcoord = lastFeatureProps.lastcoord
            let prefeatures = preani.eofold.features.map(muonGeoj.deprop) // _e_

            if (lastcoord !== undefined) {
              firstcoord = 0 // lastcoord
            }

            let tgj = gj
            tgj.geometry = muonGeoj.getCoordsInRange(gj.geometry, nbt, firstcoord)
            tgj.properties = tgj.properties === undefined ? {} : tgj.properties
            tgj.properties.eocrom = ani.eocrom
            tgj.properties.eocrom.cs = 300 + 700 * unElapsed
            tgj.properties.lastcoord = nbt

            newFeatures = [ tgj] // newFeatures = [...prefeatures, tgj]
          }
        }

        let gfeats = {
          type: 'FeatureCollection',
          features: newFeatures,
        }
        return gfeats
      },

      eomot: {
        proform: {
          projection: 'uniwen',
          scale: [ 0.5, 0.5 ],
          prerotate: [[[ ctl.rotation ]]],
          translate: [ [0, 60, 0] ],
          rotate: [ 90, 0, 0 ],
          lens: [0, 1, Infinity ],
        },
      },
      eocrom: eocrom,

      eoform: conform,
      eoload: {},

    }

    // ............................. animas
    let animas = [

      natAni, // h.natform

    ]

    return animas
  }

  let enty = () => {}
  enty.z = z
  return enty
}
  exports.eonZ816bSpiral = anitem
}))