/* ******************************************
   *    @eonZ791aD3icosahedro
   *
   */
  (function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports)
      : typeof define === 'function' && define.amd ? define(['exports'], factory)
        : (factory((global.eonZ791aD3icosahedro = global.eonZ791aD3icosahedro || {})))
  }(this, function (exports) {
    'use strict'
  
    async function anitem (__eo) {
  let [
    d3,
    d3Geo,
    ctlWen,
    eohalMars,
    eohalSol,
    muonGeom,
    muonProps,
    renderPortview,
    renderWebgl,
  ] = await Promise.all([
    __eo('xs').b('d3'),
    __eo('xs').b('d3-geo'),
    __eo('xs').c('wen'),
    __eo('xs').e('mars'),
    __eo('xs').e('sol'),
    __eo('xs').m('geom'),
    __eo('xs').m('props'),
    __eo('xs').r('portview'),
    __eo('xs').r('webgl'),
  ])
  try { renderSvg.scenecolor('black') } catch (e) {}
  let z = function () {
  // .................. pics

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
          C0 = eoload.C0,
          // vertices = eoload.vertices(C0).map(p => (p.map(c => c * 100))),
          vertices = eoload.vertices(eoload.pars),
          faces = eoload.faces(eoload.pars)

        let json = { // Feature
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

        return json
      },

      eotim: eotim,
      eoric: {gid: 'facesAni', cid: 'facesAni', fid: 'facesAni'},
      eocrom: {'csx': 0, 'cf': [[[777, 888, 777, 888, 777, 888, 777]]], 'cs': 777, 'cw': 0.6, 'co': 0.999, 'cp': 0.999},

      eomot: {
        proform: {

          projection: 'uniwen',
          translate: [ 0, 0, 0 ],
          scale: [100, 100, 100],
          rotate: [0, 0, 0],
          lens: [0, 1, Infinity ],

        },
      },
      eoload: {
        // dihedral angunit: 116.56°
        pars: {
          C0: 0.809016994374947424102293417183, // = (1 + sqrt(5)) / 4
        },

        vertices: pars => [

          [ 0.5, 0.0, pars.C0],
          [ 0.5, 0.0, -pars.C0],
          [-0.5, 0.0, pars.C0],
          [-0.5, 0.0, -pars.C0],
          [ pars.C0, 0.5, 0.0],
          [ pars.C0, -0.5, 0.0],
          [ -pars.C0, 0.5, 0.0],
          [ -pars.C0, -0.5, 0.0],
          [ 0.0, pars.C0, 0.5],
          [ 0.0, pars.C0, -0.5],
          [ 0.0, -pars.C0, 0.5],
          [ 0.0, -pars.C0, -0.5],

        ],

        faces: pars => [

          [ 0, 2, 10 ],
          [ 0, 10, 5 ],
          [ 0, 5, 4 ],
          [ 0, 4, 8 ],
          [ 0, 8, 2 ],
          [ 3, 1, 11 ],
          [ 3, 11, 7 ],
          [ 3, 7, 6 ],
          [ 3, 6, 9 ],
          [ 3, 9, 1 ],
          [ 2, 6, 7 ],
          [ 2, 7, 10 ],
          [ 10, 7, 11 ],
          [ 10, 11, 5 ],
          [ 5, 11, 1 ],
          [ 5, 1, 4 ],
          [ 4, 1, 9 ],
          [ 4, 9, 8 ],
          [ 8, 9, 6 ],
          [ 8, 6, 2 ],

        ],
      },
    }
    // .................. cameraOrthoAni anima
    let lightHemisphereAni = {

      eotim: eotim,
      eoric: {gid: 'camera', cid: 'camera', fid: 'lightHemisphereAni'},
      eohal: eohalSol,

      eofold: anitem => {
        let eoload = anitem.eoload
        let json = { // Feature
          type: 'Feature',
          geometry: { type: 'Point', coordinates: [0, 0, 0] },
          properties: anitem.eoload.light,
        }

        return json
      },
      eoload: {
        light: {
          sort: 'light',
          type: 'HemisphereLight',
          name: 'HemisphereLight',
          skyColor: [[[111, 999]]],
          groundColor: [[[999, 111]]],
          intensity: 0.5,
          position: [0, 0, 0],
        },
      },

    }

    // .................. spotLight anima
    let spotLight = {

      eotim: eotim,
      eoric: {gid: 'camera', cid: 'camera', fid: 'spotLight'},
      eohal: eohalSol,

      eofold: anitem => {
        let eoload = anitem.eoload
        let json = { // Feature
          type: 'Feature',
          geometry: { type: 'Point', coordinates: [0, 0, 0] },
          properties: anitem.eoload.light,
        }
        return json
      },
      eoload: {
        light: {
          sort: 'light',
          type: 'SpotLight',
          name: 'spotLight',
          color: [[[222, 777]]], // 0xe4eef9,
          intensity: 0.99,
          position: [-100, 100, 100],
          normalize: 1,
          castShadow: 1,
        },
      },

    }

    // .................. cameraPersAni anima
    let cameraPersAni = {

      eotim: eotim,
      eoric: {gid: 'camera', cid: 'camera', fid: 'cameraPersAni'},
      eohal: eohalSol,

      eofold: anitem => {
        let eoload = anitem.eoload
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
            far: 600,

            position: [0, 0, 200 ],
            rotation: [0, 0, 0 ],

            // vellin: [0.02, 0.02, 0 ],
            // velang: [0.01, 0.016, 0.01 ],

            distance2nodesFactor: 100,
            lookAt: [0, 0, 0],
          },
        }
        return json
      },
    }
    // .................. animas
    let animas = [

      facesAni, // h.mars
      cameraPersAni, // h.sol
      lightHemisphereAni, // h.sol
      spotLight, // h.sol
    ]
    return animas
  }

  let enty = () => {}
  enty.z = z
  return enty
}
  exports.eonZ791aD3icosahedro = anitem
}))