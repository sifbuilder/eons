/* ******************************************
   *    @eonZ421cD3earthTorus
   *
   */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports)
    : typeof define === 'function' && define.amd ? define(['exports'], factory)
      : (factory((global.eonZ421cD3earthTorus = global.eonZ421cD3earthTorus || {})))
}(this, function (exports) {
  'use strict'

  async function anitem (__eo) {
  // .................. eons
    let [

      topojson,

      eonDatWorldTopo110m,
      eonEohalMars,
      eonEohalSol,

      eonMuonGraticule,

      eonRenderPortview,
      eonRenderWebgl, // eslint-disable-line no-unused-vars
    ] = await Promise.all([

      __eo('xs').b('topojson'),

      __eo('xs').b('eon-dat-world-topo110m'),
      __eo('xs').b('eon-eohal-mars'),
      __eo('xs').b('eon-eohal-sol'),

      __eo('xs').b('eon-muon-graticule'),

      __eo('xs').b('eon-render-portview'),
      __eo('xs').b('eon-render-webgl'),
    ])
    // .................. animas
    let z = function () {
    // .................. pics
      let sin = Math.sin, cos = Math.cos

      let eotim = {'td': 10800, 't0': 0, 't1': 1, 't2': 1, 't3': 1, nostop: 1}

      // ..................

      let eoform = {

        x: {
          'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 1, 'b': 1, // circle
          'v0': 0, 'v1': 1,
          'ra2': 6,
          'w4': 0, // [[[180,360,180]]], // [[[0,-360,0]]],
          'seg5': 360, 'pa6': 0, 'pb7': -1,
          'dom3': [-180, 180],
          c: [ 2, 1, [[[0, 0, 10, 10]]], 5], // [ 1, 1, 10, 5]
          fn0: (e, c, d) => {
            let c0 = d.c[0]
            let R = d.c[2]
            let r = d.c[3]

            let x = e[0]

            let z = e[2]
            let res = (R + r * cos(x)) * cos(c0 * z)
            return res
          },
        },
        y: {
          'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 1, 'b': 1, // circle
          'v0': 0, 'v1': 1,
          'ra2': 7,
          'w4': 90, // [[[60, 60 + 1 * 360]]], // [[[0,-360,0]]],
          'seg5': 360, 'pa6': 0, 'pb7': -1,
          'dom3': [-180, 180],
          c: [ 2, 1, [[[0, 0, 10, 10]]], 5], // [ 1, 1, 10, 5]
          fn0: (e, c, d) => {
            let c0 = d.c[0]
            let R = d.c[2]
            let r = d.c[3]
            let x = e[0]

            let z = e[2]
            let res = (R + r * cos(x)) * sin(c0 * z)
            // let res = (R + r * sin(x)) * cos(z)
            return res
          },
        },
        z: {
        // 'm1': [[[2, 2]]], 'm2': [[[2, 2]]], 'n1': 2, 'n2': 2, 'n3': 2, 'a': 1, 'b': 1, // circle
          'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 1, 'b': 1, // circle
          'v0': 0, 'v1': 1,
          'ra2': 7,
          'w4': 0, // [[[180,360,180]]], // [[[0,-360,0]]],
          'seg5': 360, 'pa6': 0, 'pb7': -1,
          'dom3': [-90, 90],
          c: [ 1, 1, [[[0, 0, 10, 10]]], 5], // [ 1, 1, 10, 5]
          fn0: (e, c, d) => {
            let r = d.c[3]
            let x = e[0]

            let res = r * sin(x) // r * sin(z)
            return res
          },
        },
        w: {
        // 'm1': [[[2, 2]]], 'm2': [[[2, 2]]], 'n1': 2, 'n2': 2, 'n3': 2, 'a': 1, 'b': 1, // circle
          'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 1, 'b': 1, // circle
          'v0': 0, 'v1': 1,
          'ra2': 7,
          'w4': 0, // [[[180,360,180]]], // [[[0,-360,0]]],
          'seg5': 360, 'pa6': 0, 'pb7': -1,
          'dom3': [-90, 90],
          fn0: (e, c, d) => {
            let y = e[1]

            let res = cos(y)
            return res
          },
        },
      }

      let proformTorus = {

        projection: 'uniwen',
        translate: [ 0, 30, 0],
        scale: [ [[[2, 2, 1, 1]]], [[[2, 2, 1, 1]]], [[[2, 2, 1, 1]]]],
        rotate: [ [[[145, 145, 135, 135]]], -12, 0 ],
        lens: [0, 1, Infinity],

      }

      let eoframe = {

        multiframe: [ [-180, 180, 20, 20], [-90, 90, 15, 15] ],

      }
      // ............................. geoearth
      let geoearth = {

        eohal: eonEohalMars,
        eotim: eotim,
        eoric: {'gid': 'geoearth', 'cid': 'geoearth', 'fid': 'geoearth'},

        eofold: p => {
          let gjMultiLineString = Object.assign({},
            topojson.mesh(
              eonDatWorldTopo110m.data(),
              eonDatWorldTopo110m.data().objects.land
            )
          )
          let res = {
            type: 'Feature',
            geometry: gjMultiLineString,
            properties: {},
          }
          return res
        },
        eomot: {
          ereform: {

            projection: 'uniwen',
            translate: [ 0, 0, 0],
            scale: [1, -0.5, 1],
            rotate: [0, 0, 90 ],
            lens: [0, 1, Infinity],

          },
          conform: {
            projection: 'natform',
            eoform: eoform,
          },
          proform: proformTorus,
        },
        eocrom: { 'csx': 0, 'cf': 999, 'cs': 999, 'cw': 0.9, 'co': 0.21, 'cp': 0.9},
        eoload: {},

      }
      // ............................. geosphere
      let geosphere = {

        eohal: eonEohalMars,
        eotim: eotim,
        eoric: {gid: 'geosphere', cid: 'geosphere', fid: 'geosphere'},

        eofold: ani => {
          let res
          res = eonMuonGraticule.gjfMultiPolygon(ani.eoload.eoframe)
          res.properties.pointRadius = 0.1 // 3 multiPointToScene
          res.properties.pointColor = 0x88ff88 // 3 multiPointToScene

          return res
        },

        eomot: {
          conform: {
            projection: 'natform',
            eoform: eoform,
          },
          proform: proformTorus,
        },

        eocrom: { 'csx': 0, 'cf': [[[222, 222]]], 'cs': 666, 'cw': [[[0.3, 2.3]]], 'co': [[[0.05, 0.05]]], 'cp': [[[0.9, 0.9]]]},

        eoload: {
          eoframe: eoframe,
        },

      }
      // ............................. geograt
      let geograt = {

        eohal: eonEohalMars,
        eotim: eotim,
        eoric: {'gid': 'geograt', 'cid': 'geograt', 'fid': 'geograt'},

        eofold: ani => {
          let res
          res = eonMuonGraticule.gjfMultiLineString(ani.eoload.eoframe)
          return res
        },

        eomot: {
          conform: {
            projection: 'natform',
            eoform: eoform,
          },
          proform: proformTorus,
        },

        eocrom: { 'csx': 0, 'cf': 555, 'cs': 222, 'cw': 0.01, 'co': 0.05, 'cp': 0.9},

        eoload: {
          eoframe: eoframe,
        },

      }

      // .................. cameraOrthoAni anima
      let lightHemisphereAni = {

        eotim: eotim,
        eoric: {gid: 'camera', cid: 'camera', fid: 'lightHemisphereAni'},
        eohal: eonEohalSol,

        eofold: anitem => {
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

      let animas = [
        geoearth, //
        geosphere, //
        geograt, //
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
  exports.eonZ421cD3earthTorus = anitem
}))
