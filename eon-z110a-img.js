/* ******************************************
   *    @eonZ110aImg
   *
   */
  (function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports)
      : typeof define === 'function' && define.amd ? define(['exports'], factory)
        : (factory((global.eonZ110aImg = global.eonZ110aImg || {})))
  }(this, function (exports) {
    'use strict'
  
    async function anitem (__eo) {
  // .................. eons
  let [
    eohalImgform,
    eohalNatform,
    eohalMars,
    muonAnimas,
    muonProps,
    renderSvg,
  ] = await Promise.all([
    __eo('xs').e('imgform'),
    __eo('xs').e('natform'),
    __eo('xs').e('mars'),
    __eo('xs').m('animas'),
    __eo('xs').m('props'),
    __eo('xs').r('svg'),
  ])
  try { renderSvg.scenecolor('black') } catch (e) {}
  // .................. animas
  let z = function () {
    // .................. pics
    let eotim = {td: 16800, t0: 0, t1: 1, t2: 1, t3: 1}

    let width = 600
    let height = 400

    // width, height
    // m x n  rows, columns
    // {p: [xi,yi], v: [dx, dy]}
    // if q = 4 => m:2, n:2
    let tile = (i = 1, q = 1, extent = [ [-1, -1], [1, 1]]) => {
      let p = [], v = []
      let res = {
        p: [0, 0],
        v: [1, 1],
      }
      let w = extent[1][0] - extent[0][0]
      let h = extent[1][1] - extent[0][1]
      let dx = extent[0][0]
      let dy = extent[0][1]

      let m, n
      if (q === 1) {
        m = 1, n = 1
        let wi = w / m
        let hi = h / n

        let xy = muonProps.ridx(2, 2)(i)

        let p = [
          dx + xy[0] * wi,
          -(dy + xy[1] * hi), // invert y translate
        ]
        let v = [wi, hi]

        res = {p, v}
      } else if (q === 4) {
        m = 2, n = 2
        let wi = w / m
        let hi = h / n

        let xy = muonProps.ridx(2, 2)(i)

        let p = [
          dx + xy[0] * wi,
          -(dy + xy[1] * hi),
        ]
        let v = [wi, hi]

        res = {p, v}
      }

      return res
    }

    let quad = extent => (i, q) => tile(i, q, extent)

    let extent = [ [-300, -200], [300, 200] ]
    let c0 = quad(extent)(0, 4)

    // ............................. natAni
    let natAni = (i = 0, n = 1) => ({
      eohal: 'imgform',
      eofold: p => ({
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [ 0, 0 ],
        },
        properties: {
          sort: 'img',
          attr: {
            'width': p.eoload.img.style.width,
            'height': p.eoload.img.style.height,
            'rotate': p.eoload.img.style.rotate,
            'xlink:href': p.eoload.img.url,
          },
          'xlink:href': p.eoload.img.url,
          style: p.eoload.img.style,
        },
      }),

      eotim,
      eoric: {gid: 'nat', cid: 'nat', fid: 'nat'},
      eocrom: { 'csx': 0, 'cf': [[[500, 888, 650]]], 'co': [[[0.9, 0.9]]], 'cs': [[[111, 666]]], 'cw': [[[0.3, 0.9]]], 'cp': [[[0.7, 0.9]]]},

      eomot: {
        proform: {
          projection: 'uniwen',
          translate: quad(extent)(i, n).p, // [ -230, 140 ],
        },
      },
      eoload: {
        img: {
          url: 'eon-z-110a-img.jpg',
          style: {
            width: quad(extent)(i, n).v[0], // 400,
            height: quad(extent)(i, n).v[1], // 300,
            rotate: 0,
          },
        },
      },
    })

    // ............................. animas
    let animas = [
      natAni(), // h.natform

    ]

    return animas
  }

  let enty = () => {}
  enty.z = z
  return enty
}
  exports.eonZ110aImg = anitem
}))