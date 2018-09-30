/**********************
 *    @eohalSol
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports)
    : typeof define === 'function' && define.amd ? define(['exports'], factory)
      : (factory((global.eohalSol = global.eohalSol || {})))
}(this, function (exports) {
  'use strict'

  //... **process h.sol animas**
  //... transparent to animas, applies to anigrams
  //... eoform, conform, ereform and proform anigrams
  //... parse result through h.mars.gramm


  async function eohalSol (__mapper = {}) {
    let [
      eohalMars,
      muonGeoj,
      muonProfier,
      muonProj3ct,
      muonProps,
    ] = await Promise.all([
      __mapper('xs').e('mars'),
      __mapper('xs').m('geoj'),
      __mapper('xs').m('profier'),
      __mapper('xs').m('proj3ct'),
      __mapper('xs').m('props'),

    ])

    // ............................. eohale
    function eohale (anitem) {
      console.assert(typeof anitem === 'object')
      console.assert(Array.isArray(anitem) === false)


      let newAni = muonProps.clone(anitem)  // newAni

      
      
if (1 && 1) console.log(`${anitem.eoric.uid} eonode ${anitem.eonode.geometry.coordinates}`)
  
if (anitem.eoric.uid === 'nat_nat_tracenat') {
if (1 && 1) console.log(`${newAni.eoric.uid} eonode ${newAni.eonode.geometry.coordinates}`)

}

      let eonode = muonProps.v(anitem.eonode, anitem) // newAni.eonode
      if (eonode && anitem.eomot) {
        for (let [mot, prt] of Object.entries(anitem.eomot)) {
          let properties = eonode.properties || {}

          let prtion = muonProfier.formion(prt, anitem)
          let gjobj = muonGeoj.deprop(eonode)

          if (gjobj.geometry !== null) {
            console.assert(gjobj.geometry.coordinates !== null)
          }

          let node = muonProj3ct(gjobj, prtion)
          node.properties = properties
          node.properties[mot] = muonGeoj.deprop(node) // save [prt] pure node

          newAni.eonode = node
        }
      }

if (1 && 1) console.log(`${newAni.eoric.uid} eonode ${newAni.eonode.geometry.coordinates}`)


      let eofold = muonProps.v(anitem.eofold, anitem) // newAni.eofold
      let gjcollection = muonGeoj.featurecollect(eofold)

      if (eofold && anitem.eomot) {
        for (let [mot, prt] of Object.entries(anitem.eomot)) {
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
              node.properties[mot] = node

              return node
            }
          )
        }
      }
      newAni.eofold = gjcollection

if (1 && 1) console.log(`${newAni.eoric.uid} eonode ${newAni.eonode.geometry.coordinates}`)




      return newAni
    }

    // ............................. ween
    let ween = anitem => {

      let newitems = []

      newitems = muonProps.v(anitem)

      return newitems

    }

    // ............................. gramm
    let gramm = anitem => {

      let newItem = eohale(anitem)

      let newAnitems = eohalMars.gramm(newItem)

      return newAnitems

    }


    // ............................. eohal
    let eohalSol = {}
    eohalSol.ween = anitem => ween(anitem)
    eohalSol.gramm = anitem => gramm(anitem)

    // ............................. enty
    let enty = eohalSol
    return enty
  }

  exports.eohalSol = eohalSol
}))
