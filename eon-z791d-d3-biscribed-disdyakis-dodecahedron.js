/* ******************************************
   *    @eonZ791dD3BiscribedDisdyakisDodecahedron
   *
   */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports)
    : typeof define === 'function' && define.amd ? define(['exports'], factory)
      : (factory((global.eonZ791dD3BiscribedDisdyakisDodecahedron = global.eonZ791dD3BiscribedDisdyakisDodecahedron || {})))
}(this, function (exports) {
  'use strict'

  async function anitem (__eo) {
    let [
      d3,
      d3Geo,
      THREE,
      eonCtlWen,
      eonEohalMars,
      eonEohalSol,
      eonMuonGeom,
      eonMuonProps,
      eonRenderPortview,
      eonRenderWebgl,
    ] = await Promise.all([
      __eo('xs').b('d3'),
      __eo('xs').b('d3-geo'),
      __eo('xs').b('three'),
      __eo('xs').b('eon-ctl-wen'),
      __eo('xs').b('eon-eohal-mars'),
      __eo('xs').b('eon-eohal-sol'),
      __eo('xs').b('eon-muon-geom'),
      __eo('xs').b('eon-muon-props'),
      __eo('xs').b('eon-render-portview'),
      __eo('xs').b('eon-render-webgl'),
    ])
    try { eonRenderSvg.scenecolor('black') } catch (e) {}
    let z = function () {
      // .................. pics

      let epsilon = 1e-6, epsilon2 = epsilon * epsilon, asin = Math.asin
      let atan = Math.atan, abs = Math.abs
      let pi = Math.PI, degrees = 180 / pi, asin1_3 = Math.asin(1 / 3)
      let sqrt = Math.sqrt
      let theta = atan(0.5) * degrees

      const eotim = {'td': 18800, 't0': 0, 't1': 1, 't2': 1, 't3': 1, nostop: 1, tf: t => t }

      // .................. facesAni anima
      let facesAni = {

        eohal: eonEohalMars,

        eofold: anitem => {
          let eoload = anitem.eoload
          let json = { // Feature
            type: 'Feature',
            geometry: {
              type: 'MultiPoint',
              coordinates: eoload.vertices(eoload.pars),
            },
            properties: {
              sort: 'form',
              eoMultiPolygon: 1,
              faces: eoload.faces(eoload.pars).reduce((p, q) => [...p, ...eonMuonGeom.convextriang(q)], []),
              lights: eoload.lights(eoload.pars),
            },
          }

          return json
        },

        eotim: eotim,
        eoric: {gid: 'facesAni', cid: 'facesAni', fid: 'facesAni'},
        eocrom: {'csx': 0, 'cf': 999, 'cs': 777, 'cw': 0.6, 'co': 0.999, 'cp': 0.999},

        eomot: {
          proform: {

            projection: 'uniwen',
            translate: [ 0, 0, 0 ],
            scale: [100, 100, 100],
            rotate: [[[[0, 6, 0]]], [[[0, 2 * 360]]], [[[0, 6, 0]]]],
            lens: [0, 1, Infinity ],

          },
        },
        eoload: {
        /*
            Dave McCooey
            dmccooey@mac.com

            Biscribed Disdyakis Dodecahedron with radius = 1

          */
          pars: {
            C0: [[[sqrt(3) / 3, sqrt(3) / 1, sqrt(3) / 3]]],
            C1: [[[sqrt(2) / 6, sqrt(2) / 2, sqrt(2) / 6]]],
          },

          vertices: pars =>

            [[0.0, 0.0, 1.0],
              [0.0, 0.0, -1.0],
              [1.0, 0.0, 0.0],
              [-1.0, 0.0, 0.0],
              [0.0, 1.0, 0.0],
              [0.0, -1.0, 0.0],
              [pars.C1, 0.0, pars.C1],
              [pars.C1, 0.0, -pars.C1],
              [-pars.C1, 0.0, pars.C1],
              [-pars.C1, 0.0, -pars.C1],
              [pars.C1, pars.C1, 0.0],
              [pars.C1, -pars.C1, 0.0],
              [-pars.C1, pars.C1, 0.0],
              [-pars.C1, -pars.C1, 0.0],
              [0.0, pars.C1, pars.C1],
              [0.0, pars.C1, -pars.C1],
              [0.0, -pars.C1, pars.C1],
              [0.0, -pars.C1, -pars.C1],
              [pars.C0, pars.C0, pars.C0],
              [pars.C0, pars.C0, -pars.C0],
              [pars.C0, -pars.C0, pars.C0],
              [pars.C0, -pars.C0, -pars.C0],
              [-pars.C0, pars.C0, pars.C0],
              [-pars.C0, pars.C0, -pars.C0],
              [-pars.C0, -pars.C0, pars.C0],
              [-pars.C0, -pars.C0, -pars.C0]],

          faces: pars =>

            [[0, 6, 18],
              [0, 18, 14],
              [0, 14, 22],
              [0, 22, 8],
              [0, 8, 24],
              [0, 24, 16],
              [0, 16, 20],
              [0, 20, 6],
              [1, 7, 21],
              [1, 21, 17],
              [1, 17, 25],
              [1, 25, 9],
              [1, 9, 23],
              [1, 23, 15],
              [1, 15, 19],
              [1, 19, 7],
              [2, 6, 20],
              [2, 20, 11],
              [2, 11, 21],
              [2, 21, 7],
              [2, 7, 19],
              [2, 19, 10],
              [2, 10, 18],
              [2, 18, 6],
              [3, 8, 22],
              [3, 22, 12],
              [3, 12, 23],
              [3, 23, 9],
              [3, 9, 25],
              [3, 25, 13],
              [3, 13, 24],
              [3, 24, 8],
              [4, 10, 19],
              [4, 19, 15],
              [4, 15, 23],
              [4, 23, 12],
              [4, 12, 22],
              [4, 22, 14],
              [4, 14, 18],
              [4, 18, 10],
              [5, 11, 20],
              [5, 20, 16],
              [5, 16, 24],
              [5, 24, 13],
              [5, 13, 25],
              [5, 25, 17],
              [5, 17, 21],
              [5, 21, 11]],

          lights: pars =>
            [
              {
                type: 'AmbientLight',
                color: 0xffffff,
                intensity: 0.9,
                position: [200, 200, 200],
              },
              {
                type: 'DirectionalLight',
                color: 0xe4eef9,
                intensity: 0.7,
                position: [200, 200, 200],
                normalize: 1,
              },
            ],
        },
      }
      // .................. cameraOrthoAni anima
      let lightHemisphereAni = {

        eotim: eotim,
        eoric: {gid: 'camera', cid: 'camera', fid: 'lightHemisphereAni'},
        eohal: eonEohalSol,

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
            intensity: 0.2,
            position: [0, 0, 0],
          },
        },

      }

      // .................. spotLight anima
      let spotLight = {

        eotim: eotim,
        eoric: {gid: 'camera', cid: 'camera', fid: 'spotLight'},
        eohal: eonEohalSol,

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
        eohal: eonEohalSol,

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
              aspect: eonRenderPortview.width() / eonRenderPortview.height(),
              near: 0.001,
              far: 600,

              position: [0, 0, 200 ],
              rotation: [0, 0, 0],
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
  exports.eonZ791dD3BiscribedDisdyakisDodecahedron = anitem
}))
