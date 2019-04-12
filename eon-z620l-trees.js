/* ******************************************
   *    @eonZ620lTrees
   *
   */
  (function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports)
      : typeof define === 'function' && define.amd ? define(['exports'], factory)
        : (factory((global.eonZ620lTrees = global.eonZ620lTrees || {})))
  }(this, function (exports) {
    'use strict'
  
    async function anitem (__eo) {
  // .................. eons
  let [
    ctlWen,
    eohalMars,
    eohalSol,
    muonProps,
    muonSoma,
    muonGeoj,
    muonLacer,
    muonLindenmayer,
    muonSnap,
    protonUniwen,

    renderPortview,
    renderSvg,

  ] = await Promise.all([
    __eo('xs').c('wen'),
    __eo('xs').e('mars'),
    __eo('xs').e('sol'),
    __eo('xs').m('props'),
    __eo('xs').m('soma'),
    __eo('xs').m('geoj'),
    __eo('xs').m('lacer'),
    __eo('xs').m('lindenmayer'),
    __eo('xs').m('snap'),
    __eo('xs').p('uniwen'),

    __eo('xs').r('portview'),
    __eo('xs').r('svg'),

  ])
  try { renderSvg.scenecolor('black') } catch (e) {}
  let muonStore = __eo('muonStore')

  // .................. animas
  let z = function () {
    let animas = []

    let width = renderPortview.width(), height = renderPortview.height()

    let eocrom = [
      {csx: 2, cf: 555, cs: 111, cw: 4.9, co: 0.0072, cp: 0.99},
      {csx: 3, cf: 555, cs: 111, cw: 4.9, co: 0.0072, cp: 0.99},
    ]

    // .................. somaAni
    let somaAni = {

      eohal: eohalMars,
      eotim: {'td': 9800, 't0': 0, 't1': 1, 't2': 1, 't3': 1},
      eoric: { gid: 'ani', cid: 'ani', fid: 'ani2'},

      eofold: null,

      eocrom: {csx: 3, cf: 555, cs: 111, cw: 6.9, co: 0.0072, cp: 0.69},
      eoload: {},
    }

    let soma = {
      x0: 0, y0: -160,
      growthDir: Math.PI / 2,

      depth: [[[0, 6]]], // [[[0, 12]]], // depth iter

      growunit: 8, // rate of feature growth in tick
      maxSpreadAngle: 1 * Math.PI / 2, // max abs ang delta
      mitoDirections: [ -1.1, 0, 0.9 ], // [ -1.1, 0.9 ], // number of deviations

      shrinkage: 0.8, // 0.9, // size shrink
      colordelta: 200, // 100, // color delta between gens

      subgrow: 1, // inside growth
      subgrowunit: [1, 0.1, 1], // rate of feature growth in tick
      subSpreadAngle: Math.PI / 12, // width of secondary deviation
      subMitoDirs: [0.1], // direction in stems
      subShrinkage: 0.9, // size shrink
      subgrowrate: (i, q) => 1,

    }

    let qh = 10
    let qv = 4
    let treeanis = new Array(qh * qv)
    let tidx = muonProps.tidx(qh, qv, 1, 1)

    let hvar = 10
    let hsep = 40
    let vmar = 0
    let vsep = 50

    for (let iv = 0; iv < qv; iv++) {
      for (let ih = 0; ih < qh; ih++) {
        let idx = tidx(ih, iv)

        let anii = muonProps.clone(somaAni)
        anii.eoric.fid = 'ani' + idx

        let dist = (0.5 - ih % 2)
        let htol = (0.5 - Math.random())
        let crom = Math.floor(0.5 + Math.random())

        anii.eoload.soma = muonProps.clone(soma)
        anii.eoload.soma.x0 = (hvar * htol) + dist * (hsep * ih)
        anii.eoload.soma.y0 = vmar - (vsep * iv)

        anii.eofold = muonSoma.somafold
        anii.eocrom = eocrom[crom]

        treeanis[idx] = anii
      }
    }

    // .................. animas

    animas = animas.concat(treeanis)

    return animas
  }

  let enty = () => {}
  enty.z = z
  return enty
}
  exports.eonZ620lTrees = anitem
}))

