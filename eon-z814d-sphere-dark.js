/* ******************************************
   *    @eonZ814dSphereDark
   *
   */
  (function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports)
      : typeof define === 'function' && define.amd ? define(['exports'], factory)
        : (factory((global.eonZ814dSphereDark = global.eonZ814dSphereDark || {})))
  }(this, function (exports) {
    'use strict'
  
    async function anitem (__eo) {
  // .................. eons
  let [
    d3Geo,
    d3Geoprojection,
    topojson,
    ctlVersor,
    ctlWen,
    datWorldTopo110m,
    eohalScene,
    eohalMars,
    muonGeom,
    muonGraticule,
    muonNatform,
    renderSvg,
  ] = await Promise.all([
    __eo('xs').b('d3-geo'),
    __eo('xs').b('d3-geo-projection'),
    __eo('xs').b('topojson'),
    __eo('xs').c('versor'),
    __eo('xs').c('wen'),
    __eo('xs').d('worldTopo110m'),
    __eo('xs').e('scene'),
    __eo('xs').e('mars'),
    __eo('xs').m('geom'),
    __eo('xs').m('graticule'),
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

    let pi = Math.PI,
      radians = Math.PI / 180, degrees = 180 / Math.PI,
      sin = Math.sin, cos = Math.cos, sqrt = Math.sqrt,
      sinh = Math.sinh, cosh = Math.cosh, tanh = Math.tanh,
      exp = Math.exp,
      epsilon = 1e-5

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

    let cost = [infact0, 0, -infact2, 0, infact4, 0, -infact6, 0, infact8]
    let sint = [0, infact1, 0, -infact3, 0, infact5, 0, -infact7, 0, infact9]
    let cosht = [infact0, 0, +infact2, 0, infact4, 0, +infact6, 0, infact8]
    let sinht = [0, infact1, 0, +infact3, 0, infact5, 0, +infact7, 0, infact9]
    let expt = [infact0, infact1, infact2, infact3, infact4, infact5, infact6, infact7, infact8, infact9]

    // ............................. pics
    let eotim = {'td': 18600, 't0': 0, 't1': 1, 't2': 1, 't3': 1, nostop: 1, tf: t => t}

    let conformSphere = {
      'x': {
        'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 1, 'b': 1, // circ
        'ra2': 160, 'v0': 0, 'v1': 1, 'w4': 0, 'seg5': [[[60, 60]]], 'pa6': 0, 'pb7': -1,
        'dom3': [ -180, 180 ],
        c: [ 1, 1, 1, 1],
        'fn0': (e, c, d) => cos(e[0]) * cos(e[2]),
      },
      'y': {
        'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 1, 'b': 1, // circ
        'ra2': 160, 'v0': 0, 'v1': 1, 'w4': 0, 'seg5': [[[60, 60]]], 'pa6': 0, 'pb7': -1,
        'dom3': [ -180, 180 ],
        c: [ 1, 1, 1, 1],
        'fn0': (e, c, d) => sin(e[0]) * cos(e[2]),
      },
      'z': {
        'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 1, 'b': 1, // circ
        'ra2': 160, 'v0': 0, 'v1': 1, 'w4': 0, 'seg5': [[[60, 60]]], 'pa6': 0, 'pb7': -1,
        'dom3': [-90, 90],
        c: [ 1, 1, 1, 1],
        'fn0': (e, c, d) => sin(e[2]),
      },
      'w': {
        'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 1, 'b': 1, // circ
        'dom3': [ -180, 180 ],
        'fn0': (e, c, d) => d.c[3] * sin(e[2] * (1 + epsilon * sin(e[0]))),
      },

    }

    let conformLight = {
      'x': {
        'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 1, 'b': 1, // circ
        'ra2': 160, 'v0': 0, 'v1': 1, 'w4': 0, 'seg5': [[[360, 360]]], 'pa6': 0, 'pb7': -1,
        'dom3': [ [[[-180, 180]]], [[[-180, 180 + 360]]] ], // [ -180, 180 ],
        c: [ [[[6, 3, 6]]], 1, 1, 1],
        fn0: (e, c, d) => cos(e[0]) * cos(e[2] + (pi / (3 * d.c[0])) * cos(d.c[0] * e[0])),
        // fn0: (e, c, d) => cos(e[0]) * cos(e[2]),
        // fn0: (e, c, d) => e[0],
      },
      'y': {
        'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 1, 'b': 1, // circ
        'ra2': 160, 'v0': 0, 'v1': 1, 'w4': 0, 'seg5': [[[360, 360]]], 'pa6': 0, 'pb7': -1,
        'dom3': [ [[[-180, 180]]], [[[-180, 180 + 360]]] ], // [ -180, 180 ],
        c: [ [[[6, 3, 6]]], 1, 1, 1],
        fn0: (e, c, d) => sin(e[0]) * cos(e[2] + (pi / (3 * d.c[0])) * cos(d.c[0] * e[0])),
        // fn0: (e, c, d) => sin(e[0]) * cos(e[2]),
        // fn0: (e, c, d) => e[1],
      },
      'z': {
        'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 1, 'b': 1, // circ
        'ra2': 160, 'v0': 0, 'v1': 1, 'w4': 0, 'seg5': [[[12, 12]]], 'pa6': 0, 'pb7': -1,
        'dom3': [-90, 90], // [ [[[-90,90]]], [[[-80,80]]] ],
        c: [ [[[6, 3, 6]]], 1, 1, 1],
        fn0: (e, c, d) => sin(e[2] + (pi / (3 * d.c[0])) * cos(d.c[0] * e[0])),
        // fn0: (e, c, d) => sin(e[2]),
        // fn0: (e, c, d) => e[2],
      },
      'w': {
        'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 1, 'b': 1, // circ
        'dom3': [ -90, 90 ],
        fn0: (e, c, d) => d.c[3] * sin(e[2] * (1 + epsilon * sin(e[0]))),
      },

    }

    // .................. geoearthDark  DARK
    let pDark = function () {
      let forward = (x, y) => d3Geo.geoOrthographicRaw(-x, -y)
      forward.invert = (x, y) => d3Geo.geoOrthographicRaw.invert(-x, -y)
      return forward
    }
    let darkProjection = d3Geo.geoProjection(pDark())
      .clipAngle(90)
      .translate([0, 0, 0])
      .scale(100)

    let proformDark = {
      projection: darkProjection,
      prerotate: [[[ t => {
        let rot = ctlVersor
          .projection({projection: darkProjection}) // versor projection
          .rotation()
        return [180 + rot[0], -rot[1], -rot[2]]
      }]]],
      rotate: [ 0, 0, 0 ],

    }
    // ............................. lightAniDark
    let lightAniDark = {

      eohal: eohalMars,
      eofold: p => muonNatform.natMultiLineString({eoform: p.eoform}, {ghv: 1}),
      eotim,
      eoric: {gid: 'q', cid: 'q', fid: 'q1'},
      eomot: {
        proform: proformDark,
      },
      eocrom: { 'csx': 0, 'cf': [[[ 666, 333, 666]]], 'co': [[[0.069, 0.06, 0.069]]],
        'cs': [[[444, 444, 444]]], 'cw': [[[0.99, 0.99, 0.99]]], 'cp': [[[0.49, 0.49]]]},
      eoform: conformLight,
      eoload: {
      },
    }

    // .................. geoearthFront FRONT

    let pFront = function (x, y) {
      let forward = (x, y) => d3Geo.geoOrthographicRaw(x, -y)
      forward.invert = (x, y) => d3Geo.geoOrthographicRaw.invert(x, -y)
      return forward
    }

    let frontProjection = d3Geo.geoProjection(pFront())
      .clipAngle(90)
      .translate([0, 0, 0])
      .rotate([0, 0, 0])

    let proformFront = {

      projection: frontProjection,
      prerotate: [[[ function (t) {
        let rot = ctlVersor
          .projection({projection: frontProjection}) // versor projection
          .rotation()
        return rot
      } ]]],

      translate: [0, 0, 0],
      scale: 100,
      // rotate:  [ 0, 0, 0 ], // [ 0, 9, [[[0, 3 * 360, 18 * 360, 0]]] ],
      rotate: [[[ t => [0, 9, t * (1 - t) * 900 / (0.1 + (t - 0.7)) ] ]]],

    }
    // ............................. lightAniFront
    let lightAniFront = {

      eohal: eohalMars,
      eofold: p => muonNatform.natMultiLineString({eoform: p.eoform}, {ghv: 1}),
      eotim,
      eoric: {gid: 'q', cid: 'q', fid: 'q2'},
      eomot: {
        proform: proformFront,
        // proform: {
        // projection: 'uniwen',
        // scale: [ 1, 1 ],
        // prerotate: [[[ ctl.rotation ]]],
        // translate: [ [0, 0, 0] ],
        // rotate: [ 0,0,0 ], // rotate: [ [[[90, 92, 87]]], [[[9, 6, 9]]], [[[0, 360]]] ],
        // lens: [0, 1, Infinity ],
        // },
      },
      eocrom: { 'csx': 0, 'cf': [[[ 666, 333, 666]]], 'co': [[[0.069, 0.06, 0.069]]],
        'cs': [[[555, 555, 555]]], 'cw': [[[2.99, 2.99, 2.99]]], 'cp': [[[0.99, 0.99]]]},
      eoform: conformLight,
      eoload: {
      },
    }
    // ............................. sphereAni
    let sphereAni = {

      eohal: eohalMars,

      eofold: ani => muonNatform.natMultiLineString({eoform: ani.eoform}),
      eotim: eotim,
      eoric: {gid: 'q', cid: 'q', fid: 'q0'},
      eomot: {

        proform: {
          projection: 'uniwen',
          scale: [ 1, 1 ],
          prerotate: [[[ ctl.rotation ]]],
          translate: [ [0, 0, 0] ],
          rotate: [ [[[90, 92, 87]]], [[[9, 6, 9]]], [[[0, 360]]] ], // rotate: [ 90, 0, 0 ],
          lens: [0, 1, Infinity ],
        },
      },
      eocrom: { 'csx': 0, 'cf': [[[ 666, 333, 666]]], 'co': [[[0.069, 0.06, 0.069]]],
        'cs': [[[666, 666, 666]]], 'cw': [[[0.79, 0.79, 0.79]]], 'cp': [[[0.99, 0.99]]]},
      eoform: conformSphere,
      eoload: {
      },
    }

    // ............................. mazeAni
    let mazeAni = {

      eohal: eohalMars,
      eofold: p => {
        let res = muonNatform.natMultiLineString({eoform: p.eoform})
        console.log('res', res)
        return res
      },
      eotim: eotim,
      eoric: {gid: 'q', cid: 'q', fid: 'q3'},
      eomot: {
        proform: proformFront,
      },
      eocrom: { 'csx': 0, 'cf': [[[ 666, 333, 666]]], 'co': [[[0.069, 0.06, 0.069]]],
        'cs': [[[666, 666, 666]]], 'cw': [[[0.79, 0.79, 0.79]]], 'cp': [[[0.99, 0.99]]]},
      eoform: conformSphere,
      eoload: {
      },
    }

    // ............................. topoAni
    let topoAni = {

      eohal: eohalMars,
      eofold: p => {
        let res = Object.assign({},
          topojson.feature(
            datWorldTopo110m.data(),
            datWorldTopo110m.data().objects.land
          )
        )
        console.log('res', res)
        return res
      },
      eotim: eotim,
      eoric: {gid: 'q', cid: 'q', fid: 'q4'},
      eomot: {
        proform: proformFront,
      },
      eocrom: { 'csx': 0, 'cf': [[[ 666, 333, 666]]], 'co': [[[0.069, 0.06, 0.069]]],
        'cs': [[[666, 666, 666]]], 'cw': [[[0.79, 0.79, 0.79]]], 'cp': [[[0.99, 0.99]]]},
      eoform: conformSphere,
      eoload: {
      },
    }

    // .................. sceneAni
    let sceneAni = {

      eohal: 'scene',
      eotim: eotim,
      eoric: {gid: 'scene', cid: 'scene', fid: 'scene'},

      eofold: null,
      eoload: {
        context: {svg: 1, versor: 1, wen: 0, webgl: 0, bck: 1},
      },

    }

    // ............................. animas
    let animas = [

      sceneAni, // h.scene
      topoAni, // h.mars
      mazeAni, // h.mars
      sphereAni, // h.mars
      lightAniDark, // h.mars
      lightAniFront, // h.mars

    ]

    return animas
  }

  let enty = () => {}
  enty.z = z
  return enty
}
  exports.eonZ814dSphereDark = anitem
}))