/* ******************************************
   *    @eonZ718cRotateNat
   *
   */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports)
    : typeof define === 'function' && define.amd ? define(['exports'], factory)
      : (factory((global.eonZ718cRotateNat = global.eonZ718cRotateNat || {})))
}(this, function (exports) {
  'use strict'

  async function anitem (__eo) {
  // .................. eons
    let [
      eonMuonProps,
      eonCtlWen,
      eonEohalMars,
      eonEohalNatform,
      eonRenderSvg,
    ] = await Promise.all([
      __eo('xs').b('eon-muon-props'),
      __eo('xs').b('eon-ctl-wen'),
      __eo('xs').b('eon-eohal-mars'),
      __eo('xs').b('eon-eohal-natform'),
      __eo('xs').b('eon-render-svg'),
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

      let eotim = {td: 36800, t0: 0, t1: 1, t2: 1, t3: 1}

      let formCirc = {
        x: {
          'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 2, 'b': 1, // circ
          'ra2': 60, 'v0': 0, 'v1': 1, 'seg5': 360, 'w4': 0, 'pa6': 0, 'pb7': -1,
        },
        y: {
          'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 2, 'b': 1, // circ
          'ra2': 60, 'v0': 0, 'v1': 1, 'seg5': 360, 'w4': 0, 'pa6': 0, 'pb7': -1,
        },
      }

      let formNat = {
        x: {
          'm1': 2, 'm2': 2, 'n1': 0.3, 'n2': -3, 'n3': 8, 'a': 8, 'b': 8, // egg
          'ra2': 60, 'v0': 0, 'v1': 1, 'seg5': [[[360, 360]]], 'w4': 0, 'pa6': 0, 'pb7': 360,
        },
        y: {
          'm1': 2, 'm2': 2, 'n1': 0.3, 'n2': -3, 'n3': 8, 'a': 8, 'b': 8, // egg
          'ra2': 60, 'v0': 0, 'v1': 1, 'seg5': [[[360, 360]]], 'w4': 0, 'pa6': 0, 'pb7': 360,
        },
      }

      let stace = {
        'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 4, 'b': 2, // circle
        'ra2': 30, 'v0': 0, 'v1': 1, 'w4': 0, 'seg5': 360, 'pa6': 0, 'pb7': -1,
      }

      let eocromNat = { 'csx': 0, 'cf': [[[500, 888, 650]]], 'co': [[[0.9, 0.9]]], 'cs': [[[111, 666]]], 'cw': [[[0.3, 0.9]]], 'cp': [[[0.7, 0.9]]]}

      let eocromCirc = { 'csx': 0, 'cf': [[[500, 888, 650]]], 'co': [[[0.39, 0.39]]], 'cs': [[[111, 666]]], 'cw': [[[0.3, 0.9]]], 'cp': [[[0.7, 0.9]]]}

      let proform = {

        projection: 'uniwen',
        prerotate: [[[ ctl.rotation ]]],
        translate: [ [0, 0, 0], [[[ stace ]]] ],
        scale: 1,
        rotate: [ 0, 0, 60 ],
        lens: [0, 1, 12],

      }

      // .................. natAni
      let natAni = {
        eohal: eonEohalNatform,
        eotim,
        eoric: {gid: 'nat', cid: 'nat', fid: 'nat'},

        eofold: null,
        eocrom: eocromNat,
        eomot: {
          proform: proform,
        },
        eoform: formNat,
        eoload: {
        },
      }
      // .................. circAni
      let circAni = {
        eohal: eonEohalNatform,
        eotim,
        eoric: {gid: 'nat', cid: 'nat', fid: 'circ'},

        eofold: null,
        eocrom: eocromCirc,
        eomot: {
          proform: proform,
        },
        eoform: formCirc,
        eoload: {
        },

      }

      // .................. animas
      let animas = [
        natAni, // h.natform
        circAni, // h.natform

      ]

      return animas
    }

    let enty = () => {}
    enty.z = z
    return enty
  }
  exports.eonZ718cRotateNat = anitem
}))
