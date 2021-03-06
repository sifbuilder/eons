/* ******************************************
   *    @eonZ741iTraceNat
   *
   */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports)
    : typeof define === 'function' && define.amd ? define(['exports'], factory)
      : (factory((global.eonZ741iTraceNat = global.eonZ741iTraceNat || {})))
}(this, function (exports) {
  'use strict'

  async function anitem (__eo) {
  // .................. eons
    let [
      eonEohalMars,
      eonEohalNatform,
      eonEohalPacer,
      eonMuonStace,
      eonMuonNatform,
      eonMuonEoric,
      eonRenderSvg,
    ] = await Promise.all([
      __eo('xs').b('eon-eohal-mars'),
      __eo('xs').b('eon-eohal-natform'),
      __eo('xs').b('eon-eohal-pacer'),
      __eo('xs').b('eon-muon-stace'),
      __eo('xs').b('eon-muon-natform'),
      __eo('xs').b('eon-muon-eoric'),
      __eo('xs').b('eon-render-svg'),
    ])

    let eonMuonStore = __eo('eonMuonStore')

    // .................. animas
    let z = function () {
    // .................. pics

      let eotim = {'td': 16800, 't0': 0, 't1': 1, 't2': 1, 't3': 1}
      let traceForm = {
        'x': {
          'm1': 5, 'm2': 5, 'n1': 30, 'n2': 100, 'n3': 100, 'a': 1, 'b': 1,
          'ra2': 6, 'v0': 0, 'v1': 1, 'seg5': [[[360, 360]]], 'w4': 0, 'pa6': 0, 'pb7': 360,
        },
        'y': {
          'm1': 5, 'm2': 5, 'n1': 30, 'n2': 100, 'n3': 100, 'a': 1, 'b': 1,
          'ra2': 6, 'v0': 0, 'v1': 1, 'seg5': [[[360, 360]]], 'w4': 0, 'pa6': 0, 'pb7': 360,
        },
      }

      let natForm = {
        'x': {
          'm1': 3, 'm2': 3, 'n1': 1, 'n2': 1.2, 'n3': 1.2, 'a': 1, 'b': 1, // reaulau
          'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 1, 'b': 1, // cyrcle
          'ra2': 20, 'v0': 0, 'v1': 1, 'seg5': 6, 'w4': 0, 'pa6': 0, 'pb7': 360,
        },
        'y': {
          'm1': 3, 'm2': 3, 'n1': 1, 'n2': 1.2, 'n3': 1.2, 'a': 1, 'b': 1, // reaulau
          'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 1, 'b': 1, // cyrcle
          'ra2': 20, 'v0': 0, 'v1': 1, 'seg5': 6, 'w4': 0, 'pa6': 0, 'pb7': 360,
        },
      }

      let natStace = {
        'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 4, 'b': 2, // ellipse
        'ra2': 90, 'v0': 0, 'v1': 1, 'w4': 0, 'seg5': 360, 'pa6': 0, 'pb7': -1,
      }

      let natGeochrom = { 'csx': 0, 'cf': [[[500, 888, 650]]], 'co': [[[0.029, 0.29]]], 'cs': [[[555, 666]]], 'cw': [[[0.9, 0.9]]], 'cp': [[[0.7, 0.9]]]}

      let traceGeochrom = { 'csx': 0, 'cf': [[[777, 777]]], 'co': [[[0.09, 0.09]]], 'cs': [[[777, 777]]], 'cw': [[[0.7, 0.7]]], 'cp': [[[0.99, 0.99]]]}

      // ............................. pointerAni
      let pointerAni = {

        eohal: eonEohalPacer,
        eotim: eotim,
        eoric: {gid: 'pacer', cid: 'pacer', fid: 'pacer'},

        eofold: null,

        eocrom: { 'csx': 0, 'cf': [[[444, 999]]], 'co': [[[0.9, 0.9]]], 'cs': [[[555, 999]]], 'cw': [[[2.7, 2.7]]], 'cp': [[[0.9, 0.9]]]},

        eomot: {
          proform: {
            projection: 'uniwen',
            translate: [ 0, 0, 0],
            scale: 1,
            rotate: [0, 0, 0],
            lens: [0, 1, Infinity],
          },
        },

        eonode: {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [0, 0, 0],
          },
          properties: {
            orgen: [0, 0, 0], velin: [0, 0, 0], velang: [0, 0, 0], prevous: [0, 0, 0], geodelta: [0, 0, 0],
          },
        },

        eoload: {
          pacer: {
            initN: 10, eventN: 1, autoN: 0, autoP: 0.1, outtimed: 0, maxN: 60, geospan: 15 / 1400,

            stacer: {
              initSitus: d => ({x: width / 2, y: height / 2, z: 0 }),
              eventSitus: d => ({x: eonCtlRayder.mouse().x, y: eonCtlRayder.mouse().y, z: 0 }),
              autoSitus: d => eonMuonStace.getLocus(d),
            },

            riccer: function (ani) { return ani.eoric },

            geofolder: () => ({
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: null},
              properties: {},
            }),
          },
        },
      }

      // ............................. animas
      let animas = [

        pointerAni, // h.natform

      ]

      return animas
    }

    let enty = () => {}
    enty.z = z
    return enty
  }
  exports.eonZ741iTraceNat = anitem
}))
