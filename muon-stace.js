/***********
 *    @muonStace
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports)
    : typeof define === 'function' && define.amd ? define(['exports'], factory)
      : (factory((global.muonStace = global.muonStace || {})))
}(this, function (exports) {
  'use strict'

  let muonStace = function (__mapper = {}) {
    let f = __mapper('props')(),
      mstore = __mapper('xs').m('store'),
      mlacer = __mapper('xs').m('lacer'),
      manitem = __mapper('xs').m('anitem')

    // SITUS is the position of the entity in the coordinates system
    //  situs is encapsulated in the geofold.properties.geonode.geometry
    //  situs may remain at origin while modifying location through translation
    //   there is one single situs associated to an anitem
    //   getSitus: get the position of the geonode (SITUATION)
    //      get the first position from geofold.properties.geonode.geometry
    //
    //
    // POS is the node (vertex) in the parent anitem
    //
    // TRANSPOT cartesian value of the translate property
    //        eg: [300,200,0],
    //            {x:300,y:100,z:0},
    //            [ [300,200,0], {x:300,y:100,z:0} ],
    //            [[[ {nat} ]]]
    //    getTranspots:(stace, anitem) get coordinates returned by translate
    //    getTranspot(stace, anitem): get first coordinate returned by translate
    //
    // SPOTS: locations of stace in anitem (POSITION)
    //    getSpots(stace, anitem)
    //
    //
    // LOCUS is the combination of the locus and the transpos
    //    getLoci:    qet array of locus (LOCATIONS)
    //    getLocus:   qet first locus (LOCATION)
    //
    // sim updates the geonode
    //
    // geoform creates the geoform
    // conform updates the geoform
    // ereform updates the geoform
    // proform updates the geoform


    /* ***************************************
 *        @getTranspots
 *         get val of d in dim
 *          called by m.profier.proform to get translate
 */

    let getTranspots = function (stace, payload, locations = []) {

        if (2 && 2 && payload.hasOwnProperty('payload')) console.log(` * error: mstace.getTranspots anitem passed instead of payload`)


      // stace taken from stace or from payload.stace
      if (payload !== undefined) stace = stace || payload.stace

      // if stace is defined and not null
      if (stace) {


        // ///
        //  stace is passed as array
        //
        if (Array.isArray(stace)) { // stace :: [x,y,z]
          let location = []
          let val = stace // single location from stace array

          if (f.isArray(val) && f.isPureArray(val)) { // [x,y,z]
            location = val.map((d, i) => val[i])  // one location
            locations.push(location)


          } if (f.isArray(val) && f.isQuasiPureArray(val)) { // sum by dim [[a1,a2,a3],[b1,b2]]*

            let poses = val.length // additive positions eg.2
            let mx = Math.max(...val.map(d => d.length)) // num of dims eg. 3

            for (let i = 0; i < mx; i++) { // for each dimension
              let loc = 0
              for (let j = 0; j < poses; j++) {
                loc = loc + val[j][i]
              }
              location[i] = loc
            }
            locations.push(location)

          } else {                        // [ 200, {y: { pos: 20 }} ]
            let newLocations = []
            let mx = val.length
            for (let i = 0; i < mx; i++) { // for each dimension

              if (typeof val[i] === 'number')   {

                newLocations[i] = val[i]

              } else if (typeof val[i] === 'object')   {

                let v = val[i]
                let locationsDax = []

                if (v.hasOwnProperty('pos')) {
                  let parentCoords = manitem.parentCoords(payload) // parentCoords
                  let parentLocationsDaxes = mlacer.unslide(parentCoords) // unslide
                  let parentLocationsDax = parentLocationsDaxes[i]   // dax stream

                  if (parentLocationsDax !== undefined) {
                    locationsDax = getLocsInDim(v, parentLocationsDax)
                  }
                }

                newLocations[i] = locationsDax

              }



            }

            // console.log(' location format not supported')
            locations = [...locations, ...f.interlink(newLocations)]



          }


        // ///
        //  stace is passed as object
        //  each entry (dimension axis: dax) returns an array of locations
        //  all arrays are interlaced and returned as locations array
        //
        } else if (typeof stace === 'object') {  // {'x':300, 'y':200}}

          let entries = Object.entries(stace)
          let locationsPerDax = []

          for (let i = 0; i < entries.length; i++) {  // for each stace object entry ...

            let entry = entries[i]                                      // ['x', 200]
if (0 && 1) console.log("entry", entry)

            let k1 = entry[0]
            let v1 = entry[1]

            if (typeof v1 === 'number') locationsPerDax[i] = Array.of(v1) // [200]

            else if (typeof v1 === 'object') {



              // if (v1.hasOwnProperty('pos')) {


                // let parentCoords = manitem.parentCoords(payload) // parentCoords
                // let parentLocationsDaxes = mlacer.unslide(parentCoords) // unslide
                // let parentLocationsDax = parentLocationsDaxes[i]
                // if (parentLocationsDax !== undefined) {
                  // locationsPerDax[i] = getLocsInDim(v1, parentLocationsDax)
                // }

                let parentuid = payload.parentuid

                if (2 && 2 && !parentuid) console.log(` * error: mstace.getTranspots:parentuid ${parentuid} in payload `, payload)

                let parentani = __mapper('xs').m('store').findAnigramFromUid(parentuid)

                if (2 && 2 && !parentani) console.log(` * error: mstace.getTranspots:parentani of ${parentuid}: ${parentani}`)

                let coords = __mapper('xs').m('anitem')(parentani).nodeSitus(parentani)

                let formGeoform = parentani.geofold.properties.formGeoform
                let formEreform = parentani.geofold.properties.formEreform
                let formProform = parentani.geofold.properties.formProform

                let nodeGeoformed = parentani.geofold.properties.nodeGeoformed || {geometry: {}}
                let nodeEreformed = parentani.geofold.properties.nodeEreformed || {geometry: {}}
                let nodeProformed = parentani.geofold.properties.nodeProformed || {geometry: {}}


                if (!v1.hasOwnProperty('pos')) {
                    if (v1.hasOwnProperty('geo')) {

                      // node coordinates geoformed
                      locationsPerDax[i] = Array.of(nodeGeoformed.geometry.coordinates[i])

                    } else if (v1.hasOwnProperty('ere')) {

                      // node coordinates ereformed
                       locationsPerDax[i] = Array.of(nodeEreformed.geometry.coordinates[i])

                    } else if (v1.hasOwnProperty('pro')) {

                        // node coordinates proformed
                        if (nodeProformed.geometry) {
                          locationsPerDax[i] = Array.of(nodeProformed.geometry.coordinates[i])
                        }

                    } else {  // if pos look into geometry

                       // if no pos and not state, default to node coordinates proformed
                       locationsPerDax[i] = Array.of(nodeProformed.geometry.coordinates[i])

                    }
                } else {

                       locationsPerDax[i] = Array.of(parentani.geofold.geometry.coordinates[i])
                }


              // }
            }
          }
          if (locationsPerDax.length > 0) {
            locations = mlacer.slide(locationsPerDax)                 // [300, 200]
          }
        }

        if (locations.length === 0) locations = []



       // ///
       //   stace not defined take situs from parent
       // //
      } else {  // stace not defined take situs from parent

if (0 && 1) console.log(" ____________ stace not defined")

        let parentuid = payload.parentuid
        let parentani = __mapper('xs').m('store').findAnigramFromUid(parentuid)

        let coords = __mapper('xs').m('anitem')(parentani).nodeSitus(parentani)

        let formGeoform = parentani.geofold.properties.formGeoform
        let formEreform = parentani.geofold.properties.formEreform
        let formProform = parentani.geofold.properties.formProform

        let nodeGeoformed = parentani.geofold.properties.nodeGeoformed
        let nodeEreformed = parentani.geofold.properties.nodeEreformed
        let nodeProformed = parentani.geofold.properties.nodeProformed || {geometry: {}}


 // if (0 && 1) console.log(" ____________ parentani", parentani)
 // if (0 && 1) console.log(" ------------ nodeGeoNode", nodeGeoformed.geometry.coordinates)
 // if (0 && 1) console.log(" ------------ nodeEreNode", nodeEreformed.geometry.coordinates)
 // if (0 && 1) console.log(" ------------ nodeProNode", nodeProformed.geometry.coordinates)
 // if (0 && 1) console.log(" ------------ geoForm", formGeoform.geometry.coordinates)
 // if (0 && 1) console.log(" ------------ ereForm", formEreform.geometry.coordinates)
 // if (0 && 1) console.log(" ------------ proForm", formProform.geometry.coordinates)
 // if (0 && 1) console.log(" ------------ parentSitus", coords)


        // nodeProformed may return geometry null
        if (nodeProformed.geometry) {

          // let parentSitus = nodeGeoformed.geometry.coordinates  // _e_
          // let parentSitus = nodeEreformed.geometry.coordinates  // _e_
          let parentSitus = nodeProformed.geometry.coordinates  // _e_
 if (0 && 1) console.log(" ------------ add trace", parentSitus)

          locations = Array.of(parentSitus)

        }

      }

      return locations
    }

    /* **************************************
 *        @getTranspot
 */
    let getTranspot = (stace, payload) => getTranspots(stace, payload)[0]


    // ........................ getSiti         situs: Arary.of(ani.x, .y, .z)
    let getSiti = function (anima, siti = []) {
      if (anima && anima.geofold && anima.geofold.properties.geonod) {
        siti = Array.of(anima.geofold.properties.geonode.geometry.coordinates)
      }

      return siti
    }

    // ........................ getSitus
    let getSitus = anima => getSiti(anima)[0]

    /* **********
 *             @getPosInDim
 */
    let getPosInDim = function (staceDim) {
     let poses = getPosesInDim(staceDim)
     return poses[0]
   }

    /* **********
 *             @getPosInDim
 */
    let getPosesInDim = function (staceDim) {
      let poses = null

      if (typeof staceDim === 'number') {
        //
      } else if (typeof staceDim === 'object' && staceDim.pos !== undefined) { // staceDim pos
        if (typeof staceDim.pos === 'number') { // number
          poses = Array.of(staceDim.pos)
        } else if (Array.isArray(staceDim.pos)) {
          let dist = staceDim.dist || 0 // distance to position
          let fas = staceDim.fas || 0 // phase in positions
          let c0 = staceDim.pos[0] // * staceDim.length / 100    // _e_
          let c1 = staceDim.pos[1] // * staceDim.length / 100    // _e_
          let step = 1

          let pos0 = Math.floor(c0) // first of positions array
          let pos1 = Math.floor(c1) // last of positions array

          if (pos0 <= pos1) {
            poses = d3.range(pos0, pos1, step) // d3 create positional array
          } else {
            poses = d3.range(pos1, pos0, step) // d3 create positional array
          }
        }
      }
      return poses
    }

    /* **********
 *             @getLocsInDim
 *             array of locations in stace dim
 */
    let getLocsInDim = function (staceDim, parentCoordsDim = []) {
      let locations

      if (typeof staceDim === 'number') {
        locations = []
        locations.push(staceDim)
      } else if (typeof staceDim === 'object' && staceDim.pos !== undefined) { // staceDim pos
        if (parentCoordsDim.length > 0) {
          locations = []
          if (typeof staceDim.pos === 'number') { // number
            let pos = f.posInStream(staceDim.pos, parentCoordsDim)

            let idx = Math.floor(pos)

            let v = parentCoordsDim[idx]
            locations = Array.of(v)
          } else if (Array.isArray(staceDim.pos)) {
            let dist = staceDim.dist || 0 // distance to position
            let fas = staceDim.fas || 0 // phase in positions
            let c0 = staceDim.pos[0] // * staceDim.length / 100    // _e_
            let c1 = staceDim.pos[1] // * staceDim.length / 100    // _e_

            let pos0 = Math.floor(c0) // first of positions array
            let pos1 = Math.floor(c1) // last of positions array

            let step = Math.round(staceDim.step) || 1 // step between positions

            if (pos0 <= pos1) {
              locations = d3.range(pos0, pos1, step) // d3 create positional array
                .map(d => d + fas) // displace positions by phase
                .map(d => d % parentCoordsDim.length) // mod (-1)
                .map(d => Math.floor(d)) // integer position
                .map(d => parentCoordsDim[d]) // location from parent coords
                .map(d => d + dist) // sum dist to dim location
            } else {
              locations = d3.range(pos1, pos0, step) // d3 create positional array
                .map(d => d + fas) // displace positions by phase
                .map(d => d % parentCoordsDim.length) // mod
                .map(d => Math.floor(d))
                .map(d => parentCoordsDim[d])
                .map(d => d + dist)
            }
          }
        }
      }

      return locations
    }

    /* **************************************
 *        @getLoci
 */
    let getLoci = function (stace, payload) {
      
      let locations = [] // default locations _e_

      let situs = getSitus(payload) // anima    .x,.y,.z - root and sim

      if (0 && 1) console.log('m.stace.getLoci:stace', stace)
      let spots = getTranspots(stace, payload) // payload  stace x || x.pos || x.ref

      if (situs && spots && spots.length > 0) { // if situs and spots
        locations = spots.map(spot => spot.map((d, i) => d + situs[i])) // transpose spots by situs
      } else if (situs) { // if situs
        locations = Array.of(situs) // siti
      } else if (spots && spots.length > 0) { // if spots
        locations = spots // locations
      }

      return locations
    }
    /* **************************************
 *        @getLocus
 */
    let getLocus = (stace, payload) => getLoci(stace, payload)[0]

    /* **************************************
 *        @getLocifion
 *        get the uniwen projection with translate to anigram location
 *        getLocus
 */
    let getLocifion = function (stace, payload) {
      let locus = getLocus(stace, payload)

      let projection = {
        'projection': 'uniwen',
        'translate': [ locus[0], locus[1], locus[2] ]
      }

      return __mapper('xs').m('profier').formion(projection)
    }

    /* **************************************
 *        @getLocifier
 *        locifier(p): [x, y, z] => [x+p[0], y+p[1], z+p[2]]
 */
    let getLocifier = function (stace, payload = {}) {
      let locifion = getLocifion(stace, payload)

      return g => __mapper('xs').m('proj3ct')(g, locifion)
    }

    /***********
  *         @enty
  */
    function enty () { return enty }

    enty.getPosInDim = getPosInDim //  getPosInDim

    enty.getSiti = getSiti //
    enty.getSitus = getSitus //

    enty.getLoci = getLoci //  locations
    enty.getLocus = getLocus //  location

    enty.getLocifion = getLocifion //  projection
    enty.getLocifier = getLocifier //  projector

    enty.getTranspot = getTranspot //  getTranspot
    enty.getTranspots = getTranspots //  getTranspots

    return enty
  }

  exports.muonStace = muonStace
}))
