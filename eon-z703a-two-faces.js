/* ******************************************
   *    @eonZ703aTwoFaces
   *
   */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports)
    : typeof define === 'function' && define.amd ? define(['exports'], factory)
      : (factory((global.eonZ703aTwoFaces = global.eonZ703aTwoFaces || {})))
}(this, function (exports) {
  'use strict'

  async function anitem (__eo) {
  // .................. eons
    let [
      eonCtlEul,
      eonCtlWen,
      eonCtlVersor,
      eonEohalMars,
      eonEohalScene,
      eonMuonProps,
      eonRenderSvg,
    // eonRenderWebgl,
    ] = await Promise.all([
      __eo('xs').b('eon-ctl-eul'),
      __eo('xs').b('eon-ctl-wen'),
      __eo('xs').b('eon-ctl-versor'),
      __eo('xs').b('eon-eohal-mars'),
      __eo('xs').b('eon-eohal-scene'),
      __eo('xs').b('eon-muon-props'),
      __eo('xs').b('eon-render-svg'),
    // __eo('xs').b('eon-render-webgl'),
    ])
    try { eonRenderSvg.scenecolor('black') } catch (e) { }
    // .................. animas
    let z = function () {
    // .................. pics
      let ctl
      try {
        ctl = eonCtlWen().control(eonRenderSvg.svg())
      } catch (e) {
        ctl = () => [0, 0, 0]
      }

      let eotim = {'td': 9200, 't0': 0, 't1': 1, 't2': 1, 't3': 1}

      let proformFaces = {

        projection: 'uniwen',
        translate: [ 180 - 300, 200 - 200 ],
        prerotate: [[[ ctl.rotation ]]],
        scale: 90,
        rotate: [ 0, 0, 0 ],
        lens: [0, 1, 12],

      }

      let geoformFaces = ani => { // eofold creates featurecollection
        let eoload = ani.eoload, // eoload
          eocrom = ani.eocrom // eocrom

        let faces = eonMuonProps.v(eoload.faces) // eoload.faces

        let json = {type: 'FeatureCollection', features: []}

        for (let i = 0, l = faces.length; i < l; i++) {
          let face = faces[i] // face corners position

          let geometry = {type: 'Polygon', coordinates: []}
          geometry.coordinates = Array.of(face.vertices) // eg [-1, 1, 1]

          let properties = {}
          properties.eocrom = face.eocrom || eocrom
          properties.name = (i === 0) ? 'red' : 'orange'

          let feature = {type: 'Feature', geometry: {}, properties: {}}
          feature.geometry = geometry
          feature.properties = properties

          json.features.push(feature)
        }
        return json
      }

      // .................. aniTwoFaces
      let aniTwoFaces = {

        eohal: eonEohalMars,
        eofold: geoformFaces, // eofold,
        eotim: eotim,
        eoric: {'gid': 'faces', 'cid': 'face', 'fid': 'face'},
        eocrom: {'csx': 0, 'cf': [[[222, 333, 222, 333, 222, 333, 222]]], 'cs': 777, 'cw': 0.6, 'co': 0.999, 'cp': 0.999},

        eomot: {
          proform: proformFaces,
        },
        eoload: {
          faces: [
            {
              vertices: [
                [-1, -1, 1],
                [ 1, -1, 1],
                [ 1, 1, 1],
                [ -1, 1, 1],
                [-1, -1, 1],
              ],
              eocrom: {'csx': 0, 'cf': 333, 'cs': 688, 'cw': 0.7, 'co': [[[0.999, 0.999]]], 'cp': 0.999},
            },

            {
              vertices: [
                [-1, -1, -1],
                [ 1, -1, -1],
                [ 1, 1, -1],
                [-1, 1, -1],
                [-1, -1, -1],
              ],
              eocrom: {'csx': 0, 'cf': 777, 'cs': 833, 'cw': 0.7, 'co': [[[0.999, 0.999]]], 'cp': 0.999},
            },
          ],

        },
      }

      // .................. animas
      let animas = [
        aniTwoFaces, // h.mars g.uniwen

      ]

      return animas
    }

    let enty = () => {}
    enty.z = z
    return enty
  }
  exports.eonZ703aTwoFaces = anitem
}))
