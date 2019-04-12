/* ******************************************
   *    @eonZ031f
   *
   */
  (function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports)
      : typeof define === 'function' && define.amd ? define(['exports'], factory)
        : (factory((global.eonZ031f = global.eonZ031f || {})))
  }(this, function (exports) {
    'use strict'
  
    async function anitem (__eo) {
  // .................. animas
  let [
    eohalTextform,
    renderSvg,
  ] = await Promise.all([
    __eo('xs').e('textform'),
    __eo('xs').r('svg'),
  ])

  let z = function () {
    // .................. pics
    let eotim = {'td': 9800, 't0': 0, 't1': 1, 't2': 1, 't3': 1, nostop: 1, tp: t => Math.sin((Math.PI / 2) * t)}

    // .................. textAni
    let textAni = {

      eohal: eohalTextform,

      eofold: ani => {
        let res = {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [0, 0],
          },
        }

        return res
      },

      eotim: eotim,
      eoric: {'gid': 'text', 'cid': 'text', 'fid': 'text'},
      eocrom: { 'csx': 0, 'cf': [[[888, 777]]], 'cs': 111, 'cw': [[[0.1, 0.7]]], 'co': [[[0.6, 0.99]]], 'cp': [[[0.5, 0.5]]]},

      eomot: {
        proform: {
          projection: 'uniwen',
          translate: [ -175, 0 ],
        },
      },

      eoload: {
        textform: {
          string: 'eon-z-031f',
          style: {
            rotate: [[[ 0, -1 ]]],
            'font-size': [[[60, 60]]],
            'font-family': 'BankFuturistic',
            'text-anchor': 'center',

          },
        },

      },
    }

    // .................. animas
    let animas = [

      textAni, // h.text

    ]

    return animas
  }

  let enty = () => {}
  enty.z = z
  return enty
}
  exports.eonZ031f = anitem
}))