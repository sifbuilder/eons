/**********************
 *    @eohalTornasol
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports)
    : typeof define === 'function' && define.amd ? define(['exports'], factory)
      : (factory((global.eohalTornasol = global.eohalTornasol || {})))
}(this, function (exports) {
  'use strict'

  // md: # eon-eohal-natform
  // md: **process h.tornasol animas**
  // md: Feature Collect gj. for each feature
  // md: eoform, conform, ereform and proform anigrams
  // md: then pass the FeatureCollection to h.petiole
  // md: define `eonode` if undefined

  async function eohalTornasol (__mapper = {}) {
    let [
      muonGeoj,
      muonProfier,
      muonProj3ct,
      muonProps,
      eohalPetiole,
    ] = await Promise.all([
      __mapper('xs').m('geoj'),
      __mapper('xs').m('profier'),
      __mapper('xs').m('proj3ct'),
      __mapper('xs').m('props'),
      __mapper('xs').e('petiole'),

    ])

    // ............................. eohale
    function eohale (anitem) {
      console.assert(typeof anitem === 'object')
      console.assert(Array.isArray(anitem) === false)

      let newAni = muonProps.clone(anitem)

      // aninode

      let eonode = muonProps.v(anitem.eonode, anitem)

      if (eonode && anitem.eomot) {
        for (let [drift, prt] of Object.entries(anitem.eomot)) {
          let properties = eonode.properties || {}
          let node = muonProj3ct(muonGeoj.deprop(eonode), muonProfier.formion(prt, anitem))
          node.properties = properties
          node.properties[drift] = node
          newAni.eonode = node
        }
      }

      // anifold

      let eofold = muonProps.v(anitem.eofold, anitem)
      let gjcollection = muonGeoj.featurecollect(eofold)

      if (eofold && anitem.eomot) {
        for (let [drift, prt] of Object.entries(anitem.eomot)) {
          gjcollection.features = gjcollection.features.map(
            feature => {
              let properties = feature.properties || {}
              let prtion = muonProfier.formion(prt, anitem)
              let gjobj = muonGeoj.deprop(feature)

              if (gjobj.geometry !== null) {
                console.assert(gjobj.geometry.coordinates !== null)
              }

              let node = muonProj3ct(gjobj, prtion)
              node.properties = properties
              node.properties[drift] = node

              return node
            }
          )
        }
      }

      newAni.eofold = gjcollection
      return newAni
    }

    // ............................. gramm
    let gramm = anitem => {
      let newItem = eohale(anitem)
      let newAnitems = eohalPetiole.gramm(newItem)
      return newAnitems
    }

    // ............................. ween
    let ween = anitem => {
      if (anitem.eoinited === undefined) {
        return muonProps.v(anitem)
      } else {
        return []
      }
    }

    // ............................. eohal
    let eohalTornasol = {}
    eohalTornasol.ween = anitem => ween(anitem)
    eohalTornasol.gramm = anitem => gramm(anitem)

    // ............................. enty
    let enty = eohalTornasol
    return enty
  }

  exports.eohalTornasol = eohalTornasol
}))