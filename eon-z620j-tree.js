/* ******************************************
   *    @eonZ620jTree
   *
   */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports)
    : typeof define === 'function' && define.amd ? define(['exports'], factory)
      : (factory((global.eonZ620jTree = global.eonZ620jTree || {})))
}(this, function (exports) {
  'use strict'

  async function anitem (__eo) {
  // .................. eons
    let [

      eonMuonProps,
      eonMuonSoma,
      eonRenderSvg,
    ] = await Promise.all([

      __eo('xs').b('eon-muon-props'),
      __eo('xs').b('eon-muon-soma'),
      __eo('xs').b('eon-render-svg'),
    ])
    try { eonRenderSvg.scenecolor('black') } catch (e) {}

    // .................. animas
    let z = function () {
      let p = {
        eocrom: {csx: 2, cf: 555, cs: 111, cw: 6.9, co: 0.0072, cp: 0.69},
        x0: 0, y0: -160,
        growthDir: Math.PI / 2,

        depth: [[[0, 10]]], // [[[0, 12]]], // depth iter

        growunit: 2, // rate of feature growth in tick
        maxSpreadAngle: 1 * Math.PI / 2, // max abs ang delta
        mitoDirections: [ -1.1, 0, 0.9 ], // [ -1.1, 0.9 ], // number of deviations

        shrinkage: 0.8, // 0.9, // size shrink
        colordelta: 100, // 100, // color delta between gens

        subgrow: 1, // inside growth
        subgrowunit: [1, 0.1, 1], // rate of feature growth in tick
        subSpreadAngle: Math.PI / 12, // width of secondary deviation
        subMitoDirs: [0.1], // direction in stems
        subShrinkage: 0.9, // size shrink
        subgrowrate: (i, q) => 1,
      }

      // .................. animas
      let q = 1
      let animas = []
      for (let i = 0; i < q; i++) {
        let pi = eonMuonProps.clone(p)
        animas[i] = eonMuonSoma.soma(i, pi)
      }

      return animas
    }

    let enty = () => {}
    enty.z = z
    return enty
  }
  exports.eonZ620jTree = anitem
}))
