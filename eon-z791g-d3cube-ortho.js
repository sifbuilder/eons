/* ******************************************
   *    @eonZ791gD3cubeOrtho
   *
   */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports)
    : typeof define === 'function' && define.amd ? define(['exports'], factory)
      : (factory((global.eonZ791gD3cubeOrtho = global.eonZ791gD3cubeOrtho || {})))
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
      eonMuonGeovoro,
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
      __eo('xs').b('eon-muon-geovoro'),
      __eo('xs').b('eon-render-portview'),
      __eo('xs').b('eon-render-webgl'),
    ])
    try { eonRenderSvg.scenecolor('black') } catch (e) {}
    let z = function () {
      // .................. pics

      let epsilon = 1e-6, epsilon2 = epsilon * epsilon, asin = Math.asin
      let atan = Math.atan, abs = Math.abs
      let pi = Math.PI, degrees = 180 / pi, asin1_3 = Math.asin(1 / 3)
      let theta = atan(0.5) * degrees

      const eotim = {'td': 23800, 't0': 0, 't1': 1, 't2': 1, 't3': 1, nostop: 1}

      // .................. facesAni anima
      let facesAni = {

        eotim: eotim,
        eoric: {gid: 'facesAni', cid: 'facesAni', fid: 'facesAni'},
        eohal: eonEohalMars,

        eofold: anitem => {
          let eoload = anitem.eoload
          let json = {
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

        eocrom: {'csx': 0, 'cf': 999, 'cs': 777, 'cw': 0.6, 'co': 0.999, 'cp': 0.999},

        eomot: {
          proform: {

            projection: 'uniwen',
            translate: [
              0,
              0,
              0,
            ],

            scale: [
              100,
              100,
              100,
            ],

            rotate: [ 0, 0, 0 ],
            lens: [0, 1, Infinity ],

          },
        },
        eoload: {
        /*
            Dave McCooey
            dmccooey@mac.com

            Cube
          */
          pars: {

          },

          vertices: pars =>

            [[0.5, 0.5, 0.5],
              [0.5, 0.5, -0.5],
              [0.5, -0.5, 0.5],
              [0.5, -0.5, -0.5],
              [-0.5, 0.5, 0.5],
              [-0.5, 0.5, -0.5],
              [-0.5, -0.5, 0.5],
              [-0.5, -0.5, -0.5]],

          faces: pars =>
            [[0, 1, 5, 4],
              [0, 4, 6, 2],
              [0, 2, 3, 1],
              [7, 3, 2, 6],
              [7, 6, 4, 5],
              [7, 5, 1, 3]],

          lights: pars =>
            [
              // {
            // type: 'AmbientLight',
            // name: 'AmbientLight',
            // color: 0xeeeeee,
            // intensity: 0.9,
            // position: [110, 110, 110],
              // },
              // {
            // type: 'DirectionalLight',
            // name: 'DirectionalLight',
            // color: 0xe4eef9,
            // intensity: 0.7,
            // position: [0, 0, 120],
            // normalize: 1,
            // castShadow: 1,
              // },
              // {
            // type: 'PointLight',
            // color: 0xe4eef9,
            // intensity: 0.7,
            // position: [0, 0, 120],
            // normalize: 1,
            // castShadow: 1,
              // },
              // {
            // type: 'SpotLight',
            // color: 0xe4eef9,
            // intensity: 0.7,
            // position: [0, 0, 120],
            // normalize: 1,
            // castShadow: 1,
              // },

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
            skyColor: [[[222, 999]]],
            groundColor: 111,
            intensity: 0.01,
            position: [0, 0, 200],
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
            intensity: 0.9,
            position: [-200, 200, 200],
            normalize: 1,
            castShadow: 1,
          },
        },

      }
      // .................. cameraOrthoAni anima
      let cameraOrthoAni = {

        eotim: eotim,
        eoric: {gid: 'camera', cid: 'camera', fid: 'cameraOrthoAni'},
        eohal: eonEohalSol,

        eofold: anitem => {
          let eoload = anitem.eoload
          let json = { // Feature
            type: 'Feature',
            geometry: { type: 'Point', coordinates: [0, 0, 0] },
            properties: {
              sort: 'camera',
              type: 'OrthographicCamera',
              name: 'Orthographic',
              left: -eonRenderPortview.width() / 2,
              right: eonRenderPortview.width() / 2,
              top: eonRenderPortview.height() / 2,
              bottom: -eonRenderPortview.height() / 2,
              near: -200,
              far: 200,

              position: [0, 0, 20],
              rotation: [0, 0, 0],
              distance2nodesFactor: 300,
              lookAt: [0, 0, 0],
            },
          }

          return json
        },

      }

      // .................. cameraOrthoAni anima
      let cameraOrthoHelper = {

        eotim: eotim,
        eoric: {gid: 'camera', cid: 'camera', fid: 'cameraOrthoHelper'},
        eohal: eonEohalSol,

        eofold: anitem => {
          let eoload = anitem.eoload
          let json = { // Feature
            type: 'Feature',
            geometry: { type: 'Point', coordinates: [0, 0, 0] },
            properties: {
              sort: 'cameraHelper',
              type: 'OrthographicCamera',
              name: 'Orthographic',
              left: -eonRenderPortview.width() / 2,
              right: eonRenderPortview.width() / 2,
              top: eonRenderPortview.height() / 2,
              bottom: -eonRenderPortview.height() / 2,
              near: -200,
              far: 200,

              position: [-200, 0, 200],
              rotation: [0, 0, 0],
              distance2nodesFactor: 300,
              lookAt: [0, 0, 0],
            },
          }

          return json
        },

      }

      // .................. gridHelper anima
      let gridHelper = {

        eotim: eotim,
        eoric: {gid: 'camera', cid: 'camera', fid: 'gridHelper'},
        eohal: eonEohalSol,

        eofold: anitem => {
          let eoload = anitem.eoload
          let json = { // Feature
            type: 'Feature',
            geometry: { type: 'Point', coordinates: [0, 0, 0] },
            properties: {
              sort: 'gridHelper',
              type: 'GridHelper',
              name: 'gridHelper',
              isToUpdate: 0,

              size: 200, // field of view
              divisions: 5,

              position: [0, -100, 0 ],
            },
          }

          return json
        },

      }
      // .................. animas
      let animas = [

        facesAni, // h.mars
        cameraOrthoAni, // h.sol
        cameraOrthoHelper, // h.sol
        gridHelper, // h.sol
        lightHemisphereAni, // h.sol
        spotLight, // h.sol

      ]
      return animas
    }

    let enty = () => {}
    enty.z = z
    return enty
  }
  exports.eonZ791gD3cubeOrtho = anitem
}))
