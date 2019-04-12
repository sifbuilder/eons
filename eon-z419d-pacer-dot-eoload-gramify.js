/* ******************************************
   *    @eonZ419dPacerDotEoloadGramify
   *
   */
  (function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports)
      : typeof define === 'function' && define.amd ? define(['exports'], factory)
        : (factory((global.eonZ419dPacerDotEoloadGramify = global.eonZ419dPacerDotEoloadGramify || {})))
  }(this, function (exports) {
    'use strict'
  
    async function anitem (__eo) {
  // .................. eons
  let [
    ctlWen,
    muonNatform,
    muonStace,
    ctlRayder,
    eohalMars,
    eohalNatform,
    eohalPacer,
    eohalTextform,
    protonUniwen,
    renderSvg,
  ] = await Promise.all([
    __eo('xs').c('wen'),
    __eo('xs').m('natform'),
    __eo('xs').m('stace'),
    __eo('xs').c('rayder'),
    __eo('xs').e('mars'),
    __eo('xs').e('natform'),
    __eo('xs').e('pacer'),
    __eo('xs').e('textform'),
    __eo('xs').p('uniwen'),
    __eo('xs').r('svg'),
  ])

  let muonStore = __eo('muonStore')
  try { renderSvg.scenecolor('black') } catch (e) {}
  // .................. animas
  let z = function () {
    // .................. pics
    let eotim = {'td': 16800, 't0': 0, 't1': 1, 't2': 1, 't3': 1}

    // .................. pointTrace
    let pointTrace = {

      eohal: eohalPacer,

      eofold: {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [0, 0, 0],
        },
        properties: {},
      },

      eonode: {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [0, 0, 0],
        },
        properties: {orgen: null, velin: [0, 0, 0], velang: [0, 0, 0], prevous: null, geodelta: null},
      },

      eotim: eotim,

      eoric: {
        gid: 'nat',
        cid: 'nat',
        fid: 'pointTrace',
      },

      eomot: {
        proform: {
          projection: 'uniwen',
          translate: [0, 0, 0],
          scale: 1,
          rotate: [0, 0, 0],
          lens: [0, 1, Infinity],
        },
      },

      eocrom: { 'csx': 0, 'cf': [[[444, 999]]], 'co': [[[0.9, 0.9]]], 'cs': [[[555, 999]]], 'cw': [[[2.7, 2.7]]], 'cp': [[[0.9, 0.9]]]},

      eoload: {
        pacer: {
          pacedAnisort: 'anigram',
          basePaceOnAniView: 'eoform',
          initN: 0, eventN: 1, autoN: 0, autoP: 0.1, outtimed: 0, maxN: 60, geospan: 0,
          addItemToPacer: 1,

          eohal: (ani, props) => 'mars',
          eoric: function (ani, props) {
            let counter = props.counter || 0

            let fidsuffix = ''
            if (props.key === 'event') {
              let hm = muonStore.anigramsInClassHowMany(ani)
              let pacecount = hm + 1
              fidsuffix = `_${hm}`
            }

            let eoric = {
              gid: 'nat',
              cid: 'nat',
              fid: `pointTrace${fidsuffix}`,
            }
            return eoric
          },

          eofold: function (ani, props) {
            let stace = [0, 0, 0]
            if (props.key === 'init') { // INIT
              stace = muonStace.getLocus([null, null, null], ani)
            } else if (props.key === 'auto') { // AUTO
              stace = muonStace.getLocus([null, null, null], ani)
            } else if (props.key === 'event') { // EVENT
              stace = props.count.grabbed

              if (1 && 1) console.log('dot', stace)
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

    // .................. animas
    let animas = [
      pointTrace, // h.pacer

    ]

    return animas
  }

  let enty = () => {}
  enty.z = z
  return enty
}
  exports.eonZ419dPacerDotEoloadGramify = anitem
}))