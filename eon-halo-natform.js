/****************************
 *      @haloNatform
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports)
    : typeof define === 'function' && define.amd ? define(['exports'], factory)
      : (factory((global.haloNatform = global.haloNatform || {})))
}(this, function (exports) {
  'use strict'

// md: # eon-halo-natform 
// md: **expose natform** 
// md: h.turnform with  anima.eofold : `muonNatform.natFeature(p.payload.form)` 
// md: 
// md: # license 
// md: MIT 
  
  
  async function haloNatform (__mapper = {}) {
    let [
      muonNatform,
      haloTurnform,
      muonEochrom,
      muonTim,
      muonRic,
      muonEonode,
      muonProfier,
      prtUniwen,
      muonProj3ct,      
    ] = await Promise.all([
      __mapper('xs').m('natform'),
      __mapper('xs').h('turnform'),
      __mapper('xs').m('eochrom'),
      __mapper('xs').m('tim'),
      __mapper('xs').m('ric'),
      __mapper('xs').m('eonode'),
      __mapper('xs').m('profier'),
      __mapper('xs').p('uniwen'),
      __mapper('xs').m('proj3ct'),      
    ])

    
    // tim definition
    
    let gettim = function( tim ) {
      
      let res = {}
      let ref = muonTim.getdefault()
      if (tim === undefined) {
        res = ref
      } else {
        res = Object.assign({ ...ref }, tim)
      }
      return res
      
    }    
    
    // ric definition
    
    let getric = function( ric ) {
      
      let res = {}
      let ref = muonRic.getdefault()
      if (ric === undefined) {
        res = ref
      } else {
        res = Object.assign({ ...ref }, ric)
      }
      return res
      
    }    
    
    // eochrom definition
    
    let getgeochrom = function( geoform ) {
      
      let res = {}
      let ref = muonEochrom.getdefault()
      
      if (geoform === undefined) {
        res = ref
      } else {
        
        let { ...ref } = geoform
        res = ref
        
      }
      return res
    }    
    
    // eonode definition
    
    let gettranslate = function( geoform ) {
      
      let res = {}
      let translate = []
      
        
        if (geoform.tx !== undefined ) {
          translate[0] = geoform.tx || 0
        }
        if (geoform.ty !== undefined ) {
          translate[1] = geoform.ty || 0
        }
        if (geoform.tz !== undefined ) {
          translate[2] = geoform.tz
        }

        return translate
    }   
    
    // .................... gramm
    let gramm = function (anitem) {
      
      console.assert(anitem.geoform !== undefined, 'geoform is undefined')

      anitem.halo = 'natform'


      let translate = gettranslate(anitem.geoform)
     
      let prt = {
        projection: 'uniwen',
        translate: translate,
        scale: 1,
        rotate: [ 0, 0 ],
        lens: [0, 1, Infinity],        
      }

      anitem.eofold = muonNatform.natFeature(anitem.geoform)
      anitem.eofold = muonProj3ct(anitem.eofold, muonProfier.formion(prt, anitem)) // eofold
   
      if (anitem.eochrom === undefined) anitem.eochrom = getgeochrom(anitem.geoform)        // geoform
     
      
      return haloTurnform.gramm(anitem)
    }

    // .................... ween
    let ween = anitem => (anitem.inited !== 1) ? (anitem.inited = anitem.gelded = 1, [anitem]) : []

    // .................... halo
    let haloNatform = {}
    haloNatform.ween = anitem => ween(anitem)
    haloNatform.gramm = anitem => gramm(anitem)

    // .................... enty
    let enty = haloNatform
    return enty
  }

  exports.haloNatform = haloNatform
}))
