/* ******************************************
   *    @eonZ707gDodecahedro
   *
   */
  (function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports)
      : typeof define === 'function' && define.amd ? define(['exports'], factory)
        : (factory((global.eonZ707gDodecahedro = global.eonZ707gDodecahedro || {})))
  }(this, function (exports) {
    'use strict'
  
    async function anitem (__eo) {
  let [
    d3,
    d3Geo,
    ctlWen,
    eohalMars,
    muonGeom,
    muonProps,
    renderSvg,
  ] = await Promise.all([
    __eo('xs').b('d3'),
    __eo('xs').b('d3-geo'),
    __eo('xs').c('wen'),
    __eo('xs').e('mars'),
    __eo('xs').m('geom'),
    __eo('xs').m('props'),
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

    let epsilon = 1e-6, epsilon2 = epsilon * epsilon, asin = Math.asin
    let atan = Math.atan, abs = Math.abs
    let pi = Math.PI, degrees = 180 / pi, asin1_3 = Math.asin(1 / 3)
    let theta = atan(0.5) * degrees

    const eotim = {'td': 23800, 't0': 0, 't1': 1, 't2': 1, 't3': 1, nostop: 1}

    // .................. facesAni anima
    let facesAni = {

      eohal: eohalMars,

      eofold: anitem => {
        let eoload = anitem.eoload,
          eoric = anitem.eoric,
          faces = eoload.faces(eoload.polyhedron) // eoload.faces

        let json = {type: 'FeatureCollection', features: []}

        for (let i = 0, l = faces.length; i < l; i++) {
          let face = faces[i] // face cornersx position

          let geometry = {type: 'Polygon', coordinates: []}
          geometry.coordinates = Array.of(face) // eg [-1, 1, 1]

          let _ric = {}
          _ric.gid = eoric.gid
          _ric.cid = eoric.cid
          _ric.fid = eoric.cid + i

          let feature = {type: 'Feature', geometry: {}, properties: {}}

          feature.geometry = geometry

          feature.properties.eoric = _ric
          feature.properties.sort = 'form'
          feature.properties.eocrom = face.eocrom

          json.features.push(feature)
        }

        return json
      },

      eotim: eotim,
      eoric: {gid: 'facesAni', cid: 'facesAni', fid: 'facesAni'},
      eocrom: {'csx': 0, 'cf': [[[222, 333, 222, 333, 222, 333, 222]]], 'cs': 777, 'cw': 0.6, 'co': 0.999, 'cp': 0.999},

      eomot: {
        proform: {

          projection: 'uniwen',
          prerotate: [[[ ctl.rotation ]]],
          translate: [ 0, 0, 0 ],
          scale: 100,
          rotate: [0, [[[0, 0 * 360]]], 0],
          lens: [0, 1, 2000 ],

        },
      },
      eoload: {
        // dihedral angunit: 116.56°
        polyhedron: {
          C0: 0.809016994374947424102293417183, // = (1 + sqrt(5)) / 4
          C1: 1.30901699437494742410229341718, // = (3 + sqrt(5)) / 4

        },

        faces: function (polyhedron = {C0: 0.8, C1: 1.3}) { // {5,3}, V5.5.5
          let C0 = polyhedron.C0
          let C1 = polyhedron.C1

          let vertices = [

            [ 0.0, 0.5, C1],
            [ 0.0, 0.5, -C1],
            [ 0.0, -0.5, C1],
            [ 0.0, -0.5, -C1],

            [ C1, 0.0, 0.5],
            [ C1, 0.0, -0.5],
            [ -C1, 0.0, 0.5],
            [ -C1, 0.0, -0.5],

            [ 0.5, C1, 0.0],
            [ 0.5, -C1, 0.0],
            [-0.5, C1, 0.0],
            [-0.5, -C1, 0.0],

            [ C0, C0, C0],
            [ C0, C0, -C0],
            [ C0, -C0, C0],
            [ C0, -C0, -C0],

            [ -C0, C0, C0],
            [ -C0, C0, -C0],
            [ -C0, -C0, C0],
            [ -C0, -C0, -C0],

          ]

          let faces = [

            [ 0, 2, 14, 4, 12 ],
            [ 0, 12, 8, 10, 16 ],
            [ 0, 16, 6, 18, 2 ],
            [ 7, 6, 16, 10, 17 ],
            [ 7, 17, 1, 3, 19 ],
            [ 7, 19, 11, 18, 6 ],
            [ 9, 11, 19, 3, 15 ],
            [ 9, 15, 5, 4, 14 ],
            [ 9, 14, 2, 18, 11 ],
            [ 13, 1, 17, 10, 8 ],
            [ 13, 8, 12, 4, 5 ],
            [ 13, 5, 15, 3, 1 ],

          ]

          return faces
            .map(face => face.map(v => vertices[v]))
            // .map(face => face.map(muonProps.cartesian))
            .map(face => [ ...face, face[0] ])
        },
      },
    }

    // .................. animas
    let animas = [

      facesAni, // h.mars

    ]
    return animas
  }

  let enty = () => {}
  enty.z = z
  return enty
}
  exports.eonZ707gDodecahedro = anitem
}))