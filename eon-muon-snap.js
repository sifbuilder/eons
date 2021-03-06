/***********
 *    @eonMuonSnap
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports)
    : typeof define === 'function' && define.amd ? define(['exports'], factory)
      : (factory((global.eonMuonSnap = global.eonMuonSnap || {})))
}(this, function (exports) {
  'use strict'

  async function eonitem (__eo = {}) {
    let [
      eonMuonLacer,
      eonMuonEotype,
    ] = await Promise.all([
      __eo('xs').b('eon-muon-lacer'),
      __eo('xs').b('eon-muon-eotype'),
    ])

    // .................. snap  value (anima), t (unit time), snap flag, parent
    let snap = function (v, t = 0, g = 0, p = undefined) {
      let res

      if (g === 0) { // __________________________ un-tagged
        if (v === null) {
          res = null // 00 _____ o
        } else if (typeof (v) === 'number') {
          res = v // 02 _____ num
        } else if (typeof (v) === 'string') {
          res = v // 03 _____ str
        } else if (eonMuonEotype.isArray(v) && v.length === 0) {
          res = v // 04 _____ []
        } else if (typeof (v) === 'function') {
          res = v // 01 _____ fn v(t)
        } else if (eonMuonEotype.isArray(v) && // 05 ____ [[ [ pure ] ]]  intra array interpolation
          eonMuonEotype.isDoubleSingleArray(v) && // double array with single elem
          eonMuonEotype.isPureArray(v[0][0]) // single elem in double array is pure

        ) {
          res = snap(v[0][0], t, 1)
        } else if (eonMuonEotype.isObject(v) // 06 ___ v :: {}
        ) {
          let r = {}
          for (let y of Reflect.ownKeys(v)) {
            r[y] = snap(v[y], t, g, v) // reenter object
          }
          res = r
        } else if (eonMuonEotype.isTripleArray(v) && // 07 [[ [ [], [] ] ]]   inter arrays interpolation
          eonMuonEotype.isQuasiPureArray(v[0][0]) && // double array with array of arrays elem
          v[0][0].length === 1

        ) {
          let na = []
          for (let i = 0; i < v[0][0].length; i++) {
            let comp = v[0][0][i]

            let intra = snap(comp, t, 1)
            na.push(intra)
          }
          res = snap(na, t, 1) // scales of internal array
        } else if (eonMuonEotype.isArray(v) && // 08a ____ [[[ fn() ]]]
          eonMuonEotype.isTripleArray(v) &&
           typeof v[0][0][0] === 'function'

        ) {
          let fn = v[0][0][0]
          if (typeof p === 'object') { // if method, call as object.method
            p.fn = fn
            res = snap(p.fn(t), t, 0)
          } else {
            res = snap(fn, t, 1) // snap function value
          }
        } else if (eonMuonEotype.isArray(v) && // 08 ____ [ [[ [ ], {} ]] ]
          eonMuonEotype.isTripleArray(v)

        ) {
          res = snap(v[0][0][0], t, 1) // scales of internal array
        } else if (eonMuonEotype.isArray(v) // 09 ____ [[[ ], {}]] // last chance for the array

        ) {
          res = v.map(d => snap(d, t, 0))
        }
      }

      if (g === 1) { // __________________________ tagged
        if (typeof (v) === 'function' // 01 _____ fn snappable time function
        ) {
          res = snap(v(t), t, 0)
        } else if (eonMuonEotype.isObject(v) && // 10 ___ v :: {b, c, d ...}*
          __eo('eonMuonNatform') &&
          __eo('eonMuonNatform').isNatform(v)
        ) { // assume nat on object
          let eonMuonNatform = __eo('eonMuonNatform')

          let feature = eonMuonNatform.natMultiLineString({eoform: v}) // eoform
          let geometry = feature.geometry
          let natRing
          if (geometry.type === 'LineString') {
            natRing = geometry.coordinates
          } else if (geometry.type === 'MultiLineString') {
            natRing = geometry.coordinates[0] // first line
          } else if (geometry.type === 'Polygon') {
            natRing = geometry.coordinates[0] // outer ring
          } else if (geometry.type === 'MultiPolygon') {
            natRing = geometry.coordinates[0][0] // outer ring of first polygon
          } else {
            console.log(`g type ${geometry.type} not supported`)
          }
          res = snap(natRing, t, 1) // (13) snap [[x1,y1,z1],...,[xn,yn,zn]]
        } else if (eonMuonEotype.isArray(v) && // 11_____ [v]*
          eonMuonEotype.isPureArray(v) &&
           v.length === 1
        ) {
          let d = [0, 1],
            r = [v[0], v[0]]

          let w = eonMuonLacer.linscal()
            .domain(d)
            .range(r)
          res = w(t)
        } else if (eonMuonEotype.isArray(v) && // 12 _____ [v1,v2,v3]*
          eonMuonEotype.isPureArray(v) &&
           v.length > 1
        ) {
          if (v.length === 3 && t > 0.6 && 1) {
          }
          let d = v.map((item, idx) => idx / (v.length - 1))
          let r = v
          let w = eonMuonLacer.linscal()
            .domain(d)
            .range(r)
          res = w(t)
          if (d.length === 3 && t > 0.6 && 1) {
          }
        } else if (eonMuonEotype.isArray(v) && // 13 _____ [[a1,a2,a3],[b1,b2]]*
           eonMuonEotype.isQuasiPureArray(v) // => [[a1,b1],[a2,b1'],[a3,b2]]
        ) { // [][] dosnap qualifier
          res = eonMuonLacer.unslide(v)
            .filter(d => d.length > 0)

          res = res
            .map(d => snap(d, t, 1)) // _e_
        } else {
          res = v
        }
      }

      return res
    }

    // .................. enty
    let enty = () => {}
    enty.snap = snap
    return enty
  }

  exports.eonMuonSnap = eonitem
}))
