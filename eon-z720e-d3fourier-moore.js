/* ******************************************
   *    @eonZ720eD3fourierMoore
   *
   */
  (function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports)
      : typeof define === 'function' && define.amd ? define(['exports'], factory)
        : (factory((global.eonZ720eD3fourierMoore = global.eonZ720eD3fourierMoore || {})))
  }(this, function (exports) {
    'use strict'
  
    async function anitem (__eo) {
  let [
    d3,
    d3Geo,
    THREE,
    ctlWen,
    eohalMars,
    eohalPacer,
    eohalFourier,
    muonFourier,
    muonGeoj,
    muonGeom,
    muonProps,
    muonGeovoro,
    muonLindenmayer,
    muonProfier,
    muonProj3ct,
    muonStace,
    muonCastel,
    renderPortview,
    renderWebgl,
  ] = await Promise.all([
    __eo('xs').b('d3'),
    __eo('xs').b('d3-geo'),
    __eo('xs').b('three'),
    __eo('xs').c('wen'),
    __eo('xs').e('mars'),
    __eo('xs').e('pacer'),
    __eo('xs').e('fourier'),
    __eo('xs').m('fourier'),
    __eo('xs').m('geoj'),
    __eo('xs').m('geom'),
    __eo('xs').m('props'),
    __eo('xs').m('geovoro'),
    __eo('xs').m('lindenmayer'),
    __eo('xs').m('profier'),
    __eo('xs').m('proj3ct'),
    __eo('xs').m('stace'),
    __eo('xs').m('castel'),
    __eo('xs').r('portview'),
    __eo('xs').r('webgl'),
  ])
  try { renderSvg.scenecolor('black') } catch (e) { }
  let muonStore = __eo('muonStore')

  let z = function () {
  // .................. pics

    let epsilon = 1e-6, epsilon2 = epsilon * epsilon, asin = Math.asin
    let atan = Math.atan, abs = Math.abs
    let pi = Math.PI, degrees = 180 / pi, asin1_3 = Math.asin(1 / 3)
    let theta = atan(0.5) * degrees

    const eotim = {'td': 23800, 't0': 0, 't1': 1, 't2': 1, 't3': 1, nostop: 1}

    // ...     data is svg MCZ...MCZ
    let svgdata = {
      width: '2.77778in', height: '3.45833in',
      viewBox: '0 0 300 300',
      path: {
        id: 'mbn',
        fill: 'none', stroke: 'black', 'strokeWidth': '1',
        d: `M 0.00,0.00
           C 100.00,0.00 200.00,0.00 300.00,0.00 Z`, // LineString
      }, // path
    }
    let data = muonCastel.castels(svgdata, {start: 0, stop: 0.9, step: 1 / 3}) // MultiLineString

    let moore = muonLindenmayer.fractalize({
      axiom: 'AFA+F+AFA',
      loopq: 5,
      rules: {
        A: '-BF+AFA+FB-',
        B: '+AF-BFB-FA+',
      },
    })

    let points = muonLindenmayer.curve({
      fractal: moore,
      side: 16,
      angunit: Math.PI / 2,
    })

    data.geometry.coordinates = Array.of(points) // MultiLineString

    let proform = {
      projection: 'uniwen',
      translate: [ -50, 0 ],
      scale: [1, -1],
      rotate: [ 0, 0 ],
      lens: [0, 1, Infinity],
    }

    // ...  get geoData from uniwen projection with inverse y-scale
    // ...  the get the data features (transforms)
    // ...  span data along [0, 1] interval
    // ...  and create FeatureCollection with trasform features

    let geoData = muonProj3ct(data, muonProfier.formion(proform, z))
    let transforms = muonFourier.transformedCoefs(geoData)
    transforms = muonGeoj.ntime(transforms, [0, 1])

    // ... cycloid LineString

    let cycloid = {
      eohal: eohalMars,
      eofold: ani => muonNatform.natMultiLineString({eoform: ani.eoform}),
      eotim: eotim,
      eoric: {gid: 'g', cid: 'c', fid: 'f1'},
      eocrom: {'csx': 0, 'cf': 999, 'cs': 333, 'cw': [[[0.6, 0.3]]], 'co': 0.0099, 'cp': [[[0.999, 0.3]]]},

      eoform: {
        'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 1, 'b': 1, // circle
        'ra2': 30, 'v0': 0, 'v1': 1, 'w4': 0, 'seg5': 360, 'pa6': 0, 'pb7': -1,
        'dom3': [ -180, 180 ],
      },
      eoload: {},
    }

    // ... rayline LineString

    let rayline = {

      eohal: eohalMars,
      eotim: eotim,
      eoric: { gid: 'pol', cid: 'pol', fid: 'pol'},

      eofold: {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: []},
        properties: {},
      },

      eocrom: { 'csx': 0, 'cf': 555, 'cs': 777, 'cw': 0.99, 'co': 1, 'cp': 1},
      eoload: {},

    }

    // ... traceline LineString trace

    let traceline = {

      eohal: eohalPacer,
      eotim: eotim,
      eoric: {gid: 'ava', cid: 'ava', fid: 'traceline'},

      eofold: {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: null,
        },
        properties: {},
      },

      eonode: {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [0, 0, 0],
        },
        properties: {},
      },

      eocrom: {'csx': 0, 'cf': 444, 'cs': 666, 'cw': 0.99, 'co': 0.4, 'cp': 0.99},

      eoload: {
        pacer: { // addItemToPacer for trace

          initN: 0, eventN: 0, autoN: 1, autoP: 0, autoT: 0, outtimed: 0, maxN: 60,

          addItemToPacer: 1,
          geospan: 0,

          pacedAnisort: 'anigram',
          basePaceOnAniView: 'viewform',

          eohal: eohalMars,

          eofold: function (ani, props) {
            let coords
            if (props.key === 'init') { // INIT
              coords = ani.eonode.geometry.coordinates
            } else if (props.key === 'auto') { // AUTO
              let point = muonStace.getLocus([null, null, null], ani)

              point = muonGeoj.geotrim(point) // ... geotrim to fix [num, num, NaN]

              let preani = muonStore.findAnigramFromUid(ani.eoric.uid)
              if (preani) {
                if (preani.eofold.type === 'FeatureCollection') {
                  let feature = preani.eofold.features[0]
                  coords = (feature.geometry.coordinates)
                    ? [...feature.geometry.coordinates, point ]
                    : Array.of(point)
                } else if (preani.eofold.type === 'Feature') {
                  let feature = preani.eofold
                  coords = (feature.geometry.coordinates)
                    ? [...feature.geometry.coordinates, point ]
                    : Array.of(point)
                }
              }
            } else if (props.key === 'event') { // EVENT
              coords = ani.eonode.geometry.coordinates
            }

            console.assert(coords !== undefined && coords !== null, `coords ${coords} undefined `)
            let geometry = {
              type: 'LineString',
              coordinates: coords,
            }
            return {
              type: 'Feature',
              geometry: geometry,
              properties: {},
            }
          },

          eonode: function (ani, props) {
            let stace = [0, 0, 0]
            if (props.key === 'init') { // INIT
              stace = muonStace.getLocus([null, null, null], ani)
            } else if (props.key === 'auto') { // AUTO
            } else if (props.key === 'event') { // EVENT
              if (ctlRayder.grabbed() !== undefined) {
                let grabbed = ctlRayder.grabbed()
                let x = grabbed[0]
                let y = grabbed[1]
                let z = 0
                stace = {x, y, z }
              }
            }

            let coordinates = stace
            let res = {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: coordinates,
              },
              properties: {orgen: null, velin: [0, 0, 0], velang: [0, 0, 0], prevous: null, geodelta: null},
            }
            return res
          },

        },
      },
    }

    // ... fourierAni carries the transforms in the eofold
    // ...  h.fourier
    // ...  bears traceline and rayline avatars
    // ...  the rayline is a LineString between each two transforms
    // ...  the traceline is a paced LineString on the last transform

    let fourierAni = {

      eohal: 'fourier',
      eotim: eotim,
      eoric: { gid: 'fourier', cid: 'fourier', fid: 'fourier'},

      eofold: p => ({
        type: 'FeatureCollection',
        features: transforms,
      }),

      eocrom: {'csx': 0, 'cf': 555, 'cs': 999, 'cw': 0.095, 'co': 0.092, 'cp': 0.99},

      eoload: {
        fourier: {

          pacedAnisort: 'anigram',

          transforms: transforms,
          interval: [0.0, 0.99],
          tolerance: 0.1,

          doteocrom: {'csx': 0, 'cf': 888, 'cs': 999, 'cw': 0.9, 'co': 0.01, 'cp': 0.7},

          // ... fourierAni.eoload.fourier avatars are defined by name: traceline, rayline

          avatars: {

            traceline: traceline,
            rayline: rayline,
            cycloid: cycloid,

          },
        },
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
          intensity: 0.2,
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

            vellin: [0, 0, 0 ],
            velang: [1, 1, 1 ],

            distance2nodesFactor: 100,
            lookAt: [0, 0, 0],
          },
        }
        return json
      },
    }
    // .................. cameraPersHelper anima
    let cameraPersHelper = {

      eotim: eotim,
      eoric: {gid: 'camera', cid: 'camera', fid: 'cameraPersHelper'},
      eohal: eohalSol,

      eofold: anitem => {
        let eoload = anitem.eoload
        let json = { // Feature
          type: 'Feature',
          geometry: { type: 'Point', coordinates: [0, 0, 0] },
          properties: anitem.eoload.camera,
        }
        return json
      },
      eoload: {
        camera: {
          sort: 'cameraHelper',
          type: 'PerspectiveCamera',
          name: 'cameraPersHelper',

          fov: 20, // field of view
          aspect: renderPortview.width() / renderPortview.height(),
          near: 0.001,
          far: 600,

          position: [0, 0, 100],
          rotation: [0, 0, 0],
          // distance2nodesFactor: 300,
          // lookAt: [0,0,0],
        },
      },
    }
    // .................. gridHelper anima
    let gridHelper = {

      eotim: eotim,
      eoric: {gid: 'camera', cid: 'camera', fid: 'gridHelper'},
      eohal: eohalSol,

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

            position: [0, 0, 0 ],
          },
        }

        return json
      },

    }

    // .................. animas
    let animas = [
      fourierAni, // h.mars
      cameraPersAni, // h.sol
      // cameraPersHelper, // h.sol
      // gridHelper, // h.sol
      lightHemisphereAni, // h.sol
      spotLight, // h.sol

    ]
    return animas
  }

  let enty = () => {}
  enty.z = z
  return enty
}
  exports.eonZ720eD3fourierMoore = anitem
}))