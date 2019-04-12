/* ******************************************
   *    @eonZ100aAnima
   *
   */
  (function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports)
      : typeof define === 'function' && define.amd ? define(['exports'], factory)
        : (factory((global.eonZ100aAnima = global.eonZ100aAnima || {})))
  }(this, function (exports) {
    'use strict'
  
    async function anitem (__eo) {
  // .................. eons
  let [
    eohalNatform,
    muonAnimas,
    muonLacer,
    renderSvg,
  ] = await Promise.all([
    __eo('xs').e('natform'),
    __eo('xs').m('animas'),
    __eo('xs').m('lacer'),
    __eo('xs').r('svg'),
  ])
  try { renderSvg.scenecolor('black') } catch (e) {}
  // .................. animas
  let z = function () {
    // .................. pics
    let eotim = {td: 16800, t0: 0, t1: 1, t2: 1, t3: 1}

    let eocrom = { 'csx': 0, 'cf': [[[500, 888, 650]]], 'co': [[[0.9, 0.9]]], 'cs': [[[111, 666]]], 'cw': [[[0.3, 0.9]]], 'cp': [[[0.7, 0.9]]]}

    // ............................. natAni
    let natAni = {
      eohal: eohalNatform,
      eotim,
      eoric: {gid: 'nat', cid: 'nat', fid: 'nat'},

      eofold: ani => {
        let b = [10, 20, 21, 34, 24]
        let a = [3, 5]
        let r = muonLacer.slide([a, b])
        if (1 && 1) console.log('r', r)
      },

      eocrom: eocrom,
      eoform: {
        'm1': [[[1.5, 8]]], 'm2': [[[1.5, 8]]], 'n1': [[[0.5, 0.95]]], 'n2': [[[0.5, 0.5]]], 'n3': [[[0.5, 0.5]]], 'a': 1, 'b': 0.1,
        'w4': 0, 'ra2': [[[180, 80]]], 'seg5': 36,

      },
      eomot: {
        proform: {

          projection: 'uniwen',
          translate: [ 0, [[[0, 200]]], 0],
          scale: 1,
          rotate: [ 0, 0, -90 ],
          lens: [0, 1, Infinity],

        },
      },
      eoload: {},
    }

    // ............................. animas
    let animas = [
      natAni, // h.natform

    ]

    return animas
  }

  let enty = () => {}
  enty.z = z
  return enty
}
  exports.eonZ100aAnima = anitem
}))