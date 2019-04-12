/* ******************************************
   *    @eonZ419cPacerStringEoloadGramify
   *
   */
  (function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports)
      : typeof define === 'function' && define.amd ? define(['exports'], factory)
        : (factory((global.eonZ419cPacerStringEoloadGramify = global.eonZ419cPacerStringEoloadGramify || {})))
  }(this, function (exports) {
    'use strict'
  
    async function anitem (__eo) {
  // .................. eons
  let [
    muonNatform,
    muonStace,
    muonGeoj,
    ctlRayder,
    eohalMars,
    eohalNatform,
    eohalPacer,
    eohalTextform,
    protonUniwen,
    renderSvg,
  ] = await Promise.all([
    __eo('xs').m('natform'),
    __eo('xs').m('stace'),
    __eo('xs').m('geoj'),
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
    let eotim = {'td': 1800, 't0': 0, 't1': 1, 't2': 1, 't3': 1}

    // ... liner is ani h.pacer
    let liner = {

      eohal: eohalPacer,
      eotim: eotim,
      eoric: {gid: 'g', cid: 'c', fid: 'f'},

      eofold: {
        type: 'Feature',
        geometry: { type: 'LineString', coordinates: null},
        properties: {},
      },

      eonode: {
        type: 'Feature',
        geometry: {type: 'Point', coordinates: [0, 0, 0]},
        properties: {
          orgen: [0, 0, 0], velin: [0, 0, 0], prevous: [0, 0, 0], geodelta: [0, 0, 0],
        },
      },

      // ... the eofold changes form with eofom

      eoform: [ [[[-120, 120]]], 0, 0],
      eocrom: {'csx': 0, 'cf': 777, 'cs': 777, 'cw': 0.99, 'co': 0.4, 'cp': 0.99},

      eoload: {
        pacer: {

          initN: 0, eventN: 0, autoN: 1, autoP: 0, autoT: 0,
          outtimed: 0, maxN: 60, geospan: 0,

          pacedAnisort: 'anigram',
          basePaceOnAniView: 'viewform',
          addItemToPacer: 1, // addItemToPacer for trace
          eohal: eohalMars,
          geoaad: 1, // geoaad for trace

          eofold: function (ani, props) { // eofold from pacer
            let coords
            if (props.key === 'init') { // INIT
              coords = ani.eonode.geometry.coordinates // eonode
            } else if (props.key === 'auto') { // AUTO
              console.log('ani:', ani)
              let point = muonStace.getLocus([null, null, null], ani)

              // let point = [0,0,0]

              point = muonGeoj.geotrim(point) // ... geotrim to fix [num, num, NaN]

              let preani = muonStore.findAnigramFromUid(ani.eoric.uid)
              if (preani) { // if has parent
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
              } else {
                coords = Array.of(point) // if no parent
              }
            } else if (props.key === 'event') { // EVENT
              coords = ani.eonode.geometry.coordinates
            }

            let geometry = {
              type: 'LineString',
              coordinates: coords,
            }
            console.assert(muonGeoj.isValid(geometry), `gj coords not valid in ${geometry}`)

            return {
              type: 'Feature',
              geometry: geometry,
              properties: {},
            }
          },
          eonode: function (ani, props) {
            let stace = [0, 0, 0]
            if (props.key === 'init') { // INIT
              // stace is ani's transformed eonode
              stace = [0, 0, 0]
            } else if (props.key === 'auto') { // AUTO
              stace = [0, 0, 0]
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
              geometry: { type: 'Point', coordinates: coordinates },
              properties: {orgen: null, velin: [0, 0, 0], velang: [0, 0, 0], prevous: null, geodelta: null},
            }
            return res
          },

        },
      },
    }

    // .................. scene
    let scene = {
      liner, // h.pacer
    }

    return scene
  }

  let enty = () => {}
  enty.z = z
  return enty
}
  exports.eonZ419cPacerStringEoloadGramify = anitem
}))