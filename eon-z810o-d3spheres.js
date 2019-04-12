/* ******************************************
   *    @eonZ810oD3spheres
   *
   */
  (function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports)
      : typeof define === 'function' && define.amd ? define(['exports'], factory)
        : (factory((global.eonZ810oD3spheres = global.eonZ810oD3spheres || {})))
  }(this, function (exports) {
    'use strict'
  
    async function anitem (__eo) {
  // .................. eons
  let [
    ctlWen,
    eohalMars,
    eohalSol,
    muonGeom,
    muonGraticule,
    muonNatform,
    protonNatform,
    renderPortview,
    renderWebgl,
    // renderSvg,
  ] = await Promise.all([
    __eo('xs').c('wen'),
    __eo('xs').e('mars'),
    __eo('xs').e('sol'),
    __eo('xs').m('geom'),
    __eo('xs').m('graticule'),
    __eo('xs').m('natform'),
    __eo('xs').p('natform'),
    __eo('xs').r('portview'),
    __eo('xs').r('webgl'),
    // __eo('xs').r('svg'),
  ])
  try { renderSvg.scenecolor('black') } catch (e) {}
  // .................. animas
  let z = function () {
    // let ctl = ctlWen().control(renderSvg.svg())

    // .................. pics
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

    let cost = [infact0, 0, -infact2, 0, infact4, 0, -infact6, 0, infact8]
    let sint = [0, infact1, 0, -infact3, 0, infact5, 0, -infact7, 0, infact9]
    let exp = [infact0, infact1, infact2, infact3, infact4, infact5, infact6, infact7, infact8, infact9]

    // ............................. pics
    let eotim = {'td': 12600, 't0': 0, 't1': 1, 't2': 1, 't3': 1, nostop: 1, tf: t => 1 - 4 * (t - 0.5) * (t - 0.5)}

    let conform1 = {
      'x': {
        'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 1, 'b': 1, // circ
        'ra2': 120, 'v0': 0, 'v1': 1, 'w4': 0, 'seg5': 12, 'pa6': 0, 'pb7': -1,
        'dom3': [-180, 180],
        c: [],
        e: [ cost, 1, 1, cost ],
      },
      'y': {
        'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 1, 'b': 1, // circ
        'ra2': 120, 'v0': 0, 'v1': 1, 'w4': 0, 'seg5': 12, 'pa6': 0, 'pb7': -1,
        'dom3': [-180, 180],
        c: [],
        e: [ 1, sint, 1, cost ],
      },
      'z': {
        'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 1, 'b': 1, // circ
        'ra2': 120, 'v0': 0, 'v1': 1, 'w4': 0, 'seg5': 12, 'pa6': 0, 'pb7': -1,
        'dom3': [-90, 90],
        c: [],
        e: [ 1, 1, 1, sint ],
      },
      'r': {
        'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 1, 'b': 1, // circ
        'ra2': 120, 'v0': 0, 'v1': 1, 'w4': 0, 'seg5': 12, 'pa6': 0, 'pb7': -1,
        'dom3': [-90, 90],
        c: [],
        e: [ 1, 1, 1, cost ],
      },

    }

    let conform2 = {
      'x': {
        'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 1, 'b': 1, // circ
        'ra2': 120, 'v0': 0, 'v1': 1, 'w4': 0, 'seg5': 36, 'pa6': 0, 'pb7': -1,
        'dom3': [-180, 180],
        'fn0': (e, c) => c[0] * cos(e[0]) * c[3] * cos(e[3]),
      },
      'y': {
        'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 1, 'b': 1, // circ
        'ra2': 120, 'v0': 0, 'v1': 1, 'w4': 0, 'seg5': 36, 'pa6': 0, 'pb7': -1,
        'dom3': [-180, 180],
        'fn0': (e, c) => c[1] * sin(e[1]) * c[3] * cos(e[3]),
      },
      'z': {
        'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 1, 'b': 1, // circ
        'ra2': 120, 'v0': 0, 'v1': 1, 'w4': 0, 'seg5': 36, 'pa6': 0, 'pb7': -1,
        'dom3': [-90, 90],
        'fn0': (e, c) => c[3] * sin(e[3]),
      },
      'r': {
        'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 1, 'b': 1, // circ
        'ra2': 120, 'v0': 0, 'v1': 1, 'w4': 0, 'seg5': 36, 'pa6': 0, 'pb7': -1,
        'dom3': [-90, 90],
        'fn0': (e, c) => c[3] * cos(e[3]),
      },

    }

    let eocrom = { 'csx': 0, 'cf': [[[ 666, 333, 666]]], 'co': [[[0.069, 0.06, 0.069]]],
      'cs': [[[666, 333, 666]]], 'cw': [[[0.7, 0.7, 0.7]]], 'cp': [[[0.9, 0.9]]]}

    // ............................. natAni
    let natAni1 = {

      eohal: eohalMars,

      eofold: ani => muonNatform.natMultiPolygon({eoform: ani.eoform}),
      eotim,

      eoric: {gid: 'q', cid: 'q', fid: 'q1'},
      eomot: {
        proform: {
          projection: 'uniwen',
          scale: [ 1, 1, 1],
          translate: [ -120, 0, 0 ],
          rotate: [ [[[90, 92, 87]]], [[[9, 6, 9]]], [[[0, 360]]] ],
          lens: [0, 1, Infinity ],
        },
      },
      eocrom: eocrom,

      eoform: conform1,
      eoload: {},
    }

    let natAni2 = {

      eohal: eohalMars,
      eoric: {gid: 'q', cid: 'q', fid: 'q2'},
      eotim,

      eofold: p => {
        let vertices = muonGraticule.gjfMultiPoint(p.eoframe).geometry.coordinates
        let quads = muonGraticule.qfaces(p.eoframe)
        let faces = quads.reduce((p, q) => [...p, ...muonGeom.convextriang(q)], [])

        let featureMultiPoint = {

          type: 'Feature',
          geometry: {
            type: 'MultiPoint',
            coordinates: vertices,
          },
          properties: {
            sort: 'form',
            eoMultiPolygon: 1,
            faces: faces,
          },
        }

        return featureMultiPoint
      },

      eomot: {
        conform: {
          projection: 'natform',
          eoform: conform2,
        },
        proform: {
          projection: 'uniwen',
          scale: [ 1, 1, 1],
          translate: [ 120, 0, 0 ],
          rotate: [ [[[90, 92, 87]]], [[[9, 6, 9]]], [[[0, 360]]] ],
          lens: [0, 1, Infinity ],
        },
      },
      eocrom: eocrom,

      eoframe: [ [ [ -180, 180, 30, 30], [ -90, 90, 30, 30] ] ],
      eoload: {},

    }

    // .................. cameraPersAni anima
    let cameraPersAni = {

      eotim: eotim,
      eoric: {gid: 'camera', cid: 'camera', fid: 'cameraPersAni'},
      eohal: eohalSol,

      eofold: ani => {
        let eoload = ani.eoload
        let json = { // Feature
          type: 'Feature',
          geometry: { type: 'Point', coordinates: [0, 0, 0] },
          properties: {
            sort: 'camera',
            type: 'PerspectiveCamera',
            name: 'Perspective',
            fov: 60, // field of view s the field of view. angle in degrees.
            aspect: renderPortview.width() / renderPortview.height(),
            near: 0.001,
            far: 1600,

            position: [0, 0, 400 ],
            rotation: [0, 0, 0 ],

            vellin: [0, 0, 0 ],
            velang: [0, 0, 0 ],

            distance2nodesFactor: 100,
            lookAt: [0, 0, 0],
          },
        }
        return json
      },
      eoload: {},

    }
    // ............................. animas
    let animas = [
      cameraPersAni, // h.sol
      natAni1, // h.natform
      natAni2, // h.natform

    ]

    return animas
  }

  let enty = () => {}
  enty.z = z
  return enty
}
  exports.eonZ810oD3spheres = anitem
}))