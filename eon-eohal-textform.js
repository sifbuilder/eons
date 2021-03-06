/***********
 *    @eonEohalTextform
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports)
    : typeof define === 'function' && define.amd ? define(['exports'], factory)
      : (factory((global.eonEohalTextform = global.eonEohalTextform || {})))
}(this, function (exports) {
  'use strict'

  // ... process text anitems
  // ... ## functions
  // ... * [_geofold](#_geofold) - uploads eoload text form to eofold properties
  // ...
  // ...
  // ... ## methods
  // ... * [anify](#anify) - process anima
  // ... * [gramify](#gramify) - process anigram
  // ...  buils the newitem eoform and pass it to h.mars
  // ...
  // ... # license
  // ... MIT

  async function eonitem (__eo = {}) {
    let [
      eonMuonProps,
      eonEohalMars,
    ] = await Promise.all([
      __eo('xs').b('eon-muon-props'),
      __eo('xs').b('eon-eohal-mars'),
    ])

    // .................. _geofold
    let _geofold = function (ani) { // eofold
      let textform = ani.eoload.textform // needs text

      let eofold = ani.eofold

      let res
      if (eofold == null ||
        (eofold.type === 'Feature' && eofold.geometry.type === 'Point') ||
        eofold.type === 'Point'
      ) {
        let string = (typeof textform.string === 'function') ? textform.string() : textform.string

        res = {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [0, 0],
          },
          properties: {
            sort: 'text',
            string: string,
            style: textform.style,
            attr: textform.attr,
          },
        }
      } else if (eofold.type === 'Feature' &&
          (eofold.geometry.type === 'LineString')
      ) {
        res = eofold

        res.properties = Object.assign({}, res.properties, {
          sort: 'text',
          string: textform.string || '',
          style: textform.style,
          attr: textform.attr,

        })
      } else if (eofold.type === 'Feature' &&
          (eofold.geometry.type === 'MultiLineString')
      ) {
        res = {
          type: 'Feature',
          geometry: {
            type: 'LineString',
            coordinates: [ [0, 0], [100, 0] ],
          },
          properties: eofold.properties,
        }

        res.properties = Object.assign({}, res.properties, {
          sort: 'text',
          string: textform.string || '',
          style: textform.style,
          attr: textform.attr,

        })
      } else {
        console.log('text support not supported')
      }

      return res
    }

    // .................. gramify
    function gramify (anitem) {
      let newitem = eonMuonProps.clone(anitem)

      newitem.eofold = _geofold(anitem)
      newitem.eonode = _geofold(anitem)

      return eonEohalMars.gramify(newitem)
    }

    // .................. anify
    let anify = anitem => {
      let newitems = []
      if (anitem.eoinited !== 1) {
        anitem.eoinited = 1
        anitem.eogelded = 1
        newitems = Array.of(anitem)
      }
      return newitems
    }

    // .................. eohal
    let eohal = {
      anify: anitem => anify(anitem),
      gramify: anitem => gramify(anitem),
    }

    // .................. enty
    let enty = eohal
    return enty
  }

  exports.eonEohalTextform = eonitem
}))
