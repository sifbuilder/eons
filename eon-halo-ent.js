/**********************
 *    @haloEnt
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports)
    : typeof define === 'function' && define.amd ? define(['exports'], factory)
      : (factory((global.haloEnt = global.haloEnt || {})))
}(this, function (exports) {
  'use strict'


  async function haloEnt (__mapper = {}) {
    let [
      manitem,
      mgeoj,
      mprofier,
      mproj3ct,
      hformed,
      mprops
    ] = await Promise.all([
      __mapper('xs').m('anitem'),
      __mapper('xs').m('geoj'),
      __mapper('xs').m('profier'),
      __mapper('xs').m('proj3ct'),
      __mapper('xs').h('formed'),
      __mapper('xs').m('props')

    ])

    // ............................. conform
    const c = (f, x) => {
      let feature
      feature = x(f) // CONFORM
      feature.properties.formConformed = mgeoj.deprop(feature) // store conform
      feature.properties.nodeConformed = feature.properties.geonode
      return feature
    }

    // ............................. ereform
    const e = (f, x) => {
      let feature = f
      if (x) { // EREFORM
        feature = mproj3ct(feature, x)
        feature.properties.formEreformed = mgeoj.deprop(feature) // store ereform
        feature.properties.nodeEreformed = mproj3ct(feature.properties.nodeConformed, x) //
        nodeConformed => nodeEreformed
      } else {
        feature.properties.formEreformed = feature.properties.formConformed
        feature.properties.nodeEreformed = feature.properties.nodeConformed
      }
      return feature
    }

    // ............................. proform
    const p = (f, x) => {
      let feature = f
      if (x) { // PROFORM
        feature = mproj3ct(feature, x)
        feature.properties.formProformed = mgeoj.deprop(feature) // store proform
        feature.properties.nodeProformed = mproj3ct(feature.properties.nodeEreformed, x)
      } else {
        feature.properties.formProformed = feature.properties.formEreformed
        feature.properties.nodeProformed = feature.properties.nodeEreformed
      }
      return feature
    }

    // ............................. gramm
    function gramm (anima, newAnigrams = []) {
      let anigram = manitem(anima).anigram()

      let conformion = mprofier.conformer_(anigram),
        ereformion = mprofier.ereformion_(anigram),
        proformion = mprofier.proformion_(anigram)

      const t = f => p(e(c(f, conformion), ereformion), proformion)

      let gj
      gj = mprops.v(anigram.geofold, anigram) // get geofold
      gj.properties = gj.properties || {} // recall genode
      gj.properties.geonode = gj.properties.geonode || {} // recall genode properties
      gj.properties.formGeoformed = mgeoj.deprop(gj) // store geoform
      gj.properties.nodeGeoformed = gj.properties.geonode // nodeGeoformed : geonode

      let gjcollection = mgeoj.featurecollect(gj) // FEATURE COLLECT

      gjcollection.features = gjcollection.features.map(t)
      anigram.geofold = gjcollection
      return hformed.gramm(anigram) // _
    }

    // ............................. enty
    let haloGeofold_ween = anima => (anima.payload.inited !== 1) ? (anima.payload.inited = anima.payload.gelded = 1, [anima]) : []
    let haloGeofold_gramm = anima => gramm(anima)

    let haloEnt = {}
    haloEnt.ween = anima => haloGeofold_ween(anima)
    haloEnt.gramm = anima => haloGeofold_gramm(anima)

    let enty = haloEnt
    return enty
  }

  exports.haloEnt = haloEnt
}))
