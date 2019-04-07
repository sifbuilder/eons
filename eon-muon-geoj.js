/***********
 *    @muonGeoj
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports)
    : typeof define === 'function' && define.amd ? define(['exports'], factory)
      : (factory((global.muonGeoj = global.muonGeoj || {})))
}(this, function (exports) {
  'use strict'

  // ... **process geojson streams**
  // ... ## references
  // ... [Maarten’s Block geo to square tiles](https://bl.ocks.org/maartenzam/ec11de22bc8e5608a98f207f1c09bdb6)
  // ... [geojson-normalize](https://github.com/mapbox/geojson-normalize/blob/master/index.js)
  // ... ## functions
  // ... ## methods
  // ... * ### trim
  // ... **flatten gj**
  // ... ref: https://bl.ocks.org/maartenzam/ec11de22bc8e5608a98f207f1c09bdb6
  // ... * ### tclip
  // ... * ### complexify
  // ... turns strings of coordinates into arrays of comples numbers
  // ... @gj
  // ... * ### deprop
  // ... reomove properties from gj object
  // ... * ### snip
  // ... return function to get dots within form range [pa6,pb7]
  // ... @form
  // ... * ### largestPoly
  // ... return the lagest polity on gj
  // ... @gj: MultiPolygon
  // ... * ### lineStringFromStream
  // ... * ### polygonFromStream
  // ... * ### multLineStringFromStreamArray
  // ... * ### featurecollect
  // ... transform to FeatureCollection
  // ... @gj  {gj.FeatureCollection, gj.Feature, gj.GeometryCollection}
  // ... called by eohal to carry eoric, sort as properties
  // ... * ### featurize
  // ... transform to array of gj.Features
  // ... @gj  {gj.FeatureCollection, gj.Feature, gj.GeometryCollection}
  // ... * ### ntime
  // ... convert geometry to feature and add interval to properties
  // ... @gj
  // ... @interval
  // ... * ### zorder
  // ... @gj FeatureCollection
  // ... * ### centroid
  // ... get ring's centroid
  // ... @ring
  // ... called by zorder
  // ... * ### getCoords
  // ... get array of coordinates from gj (eg. parent anigram)
  // ... * ### getCoordsLength
  // ... get number of coordinates in gj
  // ... * ### getCoordsInRange
  // ... get first nb coordinates
  // ... * ### isValid
  // ... check if gj is valid geojson type
  // ... @gj
  // ... @type
  // ... # license
  // ... MIT

  async function muonGeoj (__eo = {}) {
    let [
      d3polygon,
      muonProps,
      Complex,
    ] = await Promise.all([
      __eo('xs').b('d3-polygon'),
      __eo('xs').m('props'),
      __eo('xs').l('complex'),
    ])

    let types = {
      Point: 'geometry',
      MultiPoint: 'geometry',
      LineString: 'geometry',
      MultiLineString: 'geometry',
      Polygon: 'geometry',
      MultiPolygon: 'geometry',
      GeometryCollection: 'geometry',
      Feature: 'feature',
      FeatureCollection: 'featurecollection',
    }

    // ...................... complexifyObjectType
    var complexifyObjectType = {
      Feature: function (object) {
        return complexifyGeometry(object.geometry)
      },
      FeatureCollection: function (object) {
        var features = object.features, i = -1, addedCoords = features.length
        let ret = object
        ret.features = features.map(feature => complexifyGeometry(feature.geometry))
        return ret
      },
    }

    var complexifyGeometryType = {
      Sphere: function () {
        // return true;
      },
      Point: function (object) {
        return complexifyPoint(object.coordinates)
      },
      MultiPoint: function (object) {
        var coordinates = object.coordinates.map(coords => complexifyPoint(coords))
        let ret = object
        ret.coordinates = coordinates
        return ret
      },
      LineString: function (object) {
        let ret = object
        ret.coordinates = complexifyLine(object.coordinates)
        return ret
      },
      MultiLineString: function (object) {
        var coordinates = object.coordinates

        let ret = object
        ret.coordinates = coordinates.map(line => complexifyLine(line))
        return ret
      },
      Polygon: function (object) {
        var coordinates = object.coordinates

        let ret = object
        ret.coordinates = coordinates.map(line => complexifyLine(line))
        return ret
      },
      MultiPolygon: function (object) {
        var polygons = object.coordinates.map(
          polygon => polygon.map(
            ring => complexifyLine(ring)))

        let ret = object
        ret.coordinates = polygons
        return ret
      },
      GeometryCollection: function (object) {
        var geometries = object.geometries.map(
          geometry => complexifyGeometry(geometry))
        return geometries
      },
    }

    function complexifyGeometry (geometry) {
      return geometry && complexifyGeometryType.hasOwnProperty(geometry.type)
        ? complexifyGeometryType[geometry.type](geometry)
        : false
    }

    function complexify (object) {
      return (object && complexifyObjectType.hasOwnProperty(object.type)
        ? complexifyObjectType[object.type]
        : complexifyGeometry)(object)
    }

    function complexifyPoint (coordinates) {
      return Complex(coordinates[0], coordinates[1])
    }

    function complexifyLine (coordinates) {
      let ret = coordinates.map(coords => complexifyPoint(coords))
      return ret
    }

    // ...................... trim
    let trim = function (gj) {
      let ret = {}

      if (gj.type === 'FeatureCollection') {
        ret.type = 'FeatureCollection'
        ret.features = []

        for (let i = 0; i < gj.features.length; i++) {
          let newFeature = {}
          let feature = gj.features[i]

          newFeature.type = 'Feature'
          newFeature.properties = feature.properties
          newFeature.geometry = {}
          newFeature.geometry.coordinates = []

          for (let j = 0; j < feature.geometry.coordinates.length; j++) {
            let coords = largestPoly(feature.geometry.coordinates[j])
            newFeature.geometry.type = 'Polygon'
            newFeature.geometry.coordinates[j] = coords[0]
          }

          ret.features[i] = Object.assign({}, newFeature)
        }
      } else if (gj.type === 'MultiLineString') {
        ret = gj
      } else {
        ret = gj
      }

      return ret
    }

    // ...................... snip
    let snip = function (form) {
      let dims = __eo('xs').m('anitem').dims()
      let braids = []
      return function (gj) {
        let c = gj.coordinates
        for (let i = 0; i < c.length; i++) {
          let braid = muonProps.unslide(c[i])

          for (let j = 0; j < braid.length; j++) {
            let pa6 = (form[dims[j]] || {}).pa6
            let pb7 = (form[dims[j]] || {}).pb7

            braids[j] = muonProps.streamRange(braid[j], pa6, pb7)
          }
          let coordinates = muonProps.slide(braids) // join dim threads
          gj.coordinates = Array.of(coordinates)
        }

        return gj
      }
    }

    // ...................... largestPoly
    let largestPoly = function largestPoly (gj) {
      let size = -Number.MAX_VALUE,
        poly = null

      for (let c = 0; c < gj.length; c++) {
        let tsize = (gj.type === 'MultiPolygon') ? d3polygon.polygonArea(gj[c][0]) : d3polygon.polygonArea(gj[c])

        if (tsize > size) {
          size = tsize
          poly = c
        }
      }

      return [gj.type === 'MultiPolygon' ? gj[poly][0] : gj[poly]]
    }

    let lineStringFromStream = function (coords, reverse = false, props = {}) {
      let geo = {}
      geo.type = 'LineString'
      geo.coordinates = coords
      geo.properties = props

      return geo
    }

    let polygonFromStream = function (coords, reverse = false, props = {}) {
      if (reverse === true) coords = coords.slice().reverse()

      let geo = {}
      geo.type = 'Polygon'
      geo.coordinates = [coords]
      geo.properties = props

      return geo
    }

    let multLineStringFromStreamArray = function (coords, reverse = false, props = {}) {
      if (reverse === true) coords = coords.slice().reverse()

      let geo = {}
      geo.type = 'MultiLineString'
      geo.coordinates = coords
      geo.properties = props

      return geo
    }

    // ...................... ntime
    let ntime = function (gj, interval = [0, 1]) {
      let tfeatures = []
      if (gj.type == 'Feature') {
        let geometry = gj.geometry
        if (geometry !== null) coords = [...coords, ...getCoords(geometry)]
      } else if (gj.type == 'FeatureCollection') {
        for (let feature_num = 0; feature_num < gj.features.length; feature_num++) {
          let feature = gj.features[feature_num]
          getCoords(feature, coords)
        }
      } else if (gj.type == 'GeometryCollection') {
        for (let geom_num = 0; geom_num < gj.coords.length; geom_num++) {
          let geometry = gj.coords[geom_num]
          coords.push(geometry)
        }
      } else if (gj.type === 'Point') {
        let geometry = gj
        coords = [...coords, geometry.coordinates] // if Point, return array
      } else if (gj.type === 'LineString') {
        let tfeature = {
          type: 'Feature',
          geometry: {type: 'LineString', coordinates: gj.coordinates},
          properties: {interval: interval},
        }
        tfeatures.push(tfeature)
      } else if (gj.type === 'MultiPoint') {
        let geometry = gj
        coords.push(geometry)
      } else if (gj.type === 'Polygon') {
        let rings = gj.coordinates
        for (let i = 0; i < rings.length; i++) {
          let line = rings[i]

          let tfeature = {
            type: 'Feature',
            geometry: {type: 'LineString', coordinates: line},
            properties: {interval: interval},
          }
          tfeatures.push(tfeature)
        }
      } else if (gj.type === 'MultiLineString') {
        let lines = gj.coordinates
        for (let i = 0; i < lines.length; i++) {
          let line = lines[i]

          let tfeature = {
            type: 'Feature',
            geometry: {type: 'LineString', coordinates: line},
            properties: {interval: interval},
          }
          tfeatures.push(tfeature)
        }
      } else if (gj.type === 'MultiPolygon') {
        let polygons = gj.coordinates
        for (let i = 0; i < polygons.length; i++) {
          let polygon = polygons[i]

          let tfeature = {
            type: 'Feature',
            geometry: {type: 'LineString', coordinates: polygon[0]}, // [0]
            properties: {interval: interval},
          }
          tfeatures.push(tfeature)
        }
      } else if (gj.type === 'Sphere') {
        let geometry = gj
        coords.push(geometry)
      } else {
        throw new Error('gj type not identified.')
      }

      return tfeatures
    }

    // ...................... featurecollect
    function featurecollect (gj) {
      let res = {type: 'FeatureCollection', features: []}
      if (0 && 1) console.assert(gj && gj.type, `geojson not defined`)

      if (gj && gj.type) {
        let type = gj.type

        if (type === 'FeatureCollection') {
          res = gj
        } else if (type === 'Feature') {
          res.features = Array.of(gj)
        } else if (type === 'GeometryCollection') {
          let features = gj.map(d => ({
            type: 'Feature',
            geometry: {
              type: d.type,
              coordinates: d.coordinates},
            properties: {}}))
          res.features = features
        } else {
          let features = Array.of({
            type: 'Feature',
            geometry: {
              type: gj.type,
              coordinates: gj.coordinates},
            properties: {},
          })
          res.features = features
        }
      }
      return res
    }

    // ...................... deprop
    let deprop = function (gj) {
      let gj2 = Object.assign({}, gj)

      if (gj2 && gj2.properties) {
        delete gj2.properties
        return gj2
      } else {
        return gj2
      }
    }

    // ...................... zorder
    let zorder = function (features) {
      let zordered = features
        .map(d => {
          console.assert(isValid(d), `m.geoj.zorder:gj not valid  ${d}`)
          d.properties = d.properties || {}
          if (d.properties.zorder === undefined) { // if zorder undefined
            if (d.geometry && d.geometry.coordinates && d.geometry.coordinates.length > 0) {
              if (d.geometry.type === 'Polygon') {
                let outring = d.geometry.coordinates[0] // for out ring
                let zorder = centroid(outring)
                if (zorder) d.properties.zorder = zorder // try centroid.z
                else d.properties.zorder = -Infinity // feature unformed
              } else if (d.geometry.type === 'LineString') {
                let outring = d.geometry.coordinates // string
                let zorder = centroid(outring)
                if (zorder) d.properties.zorder = zorder // try centroid.z
                else d.properties.zorder = -Infinity // feature unformed
              }
            } else {
              d.properties.zorder = -Infinity // feature unformed
            }
          }
          return d
        })
        .sort((a, b) => a.properties.zorder - b.properties.zorder) // z order
        // .map((d, i) => { d.properties.eoric.nid = i; return d }) // sequential ordinal

      return zordered
    }

    // ...................... centroid
    let centroid = function (outring) {
      let z = 0
      let dotsinring = outring.length

      for (let k = 0; k < dotsinring; k++) {
        let ck = outring[k][2] || 0 // z camera view
        z += ck
      }
      return z / dotsinring
    }

    // ...................... getCoords
    let getCoords = function (gj, coords = []) {
      if (gj === undefined) {
      } else {
        if (gj.type == 'Feature') {
          let geometry = gj.geometry
          if (geometry !== null) coords = [...coords, ...getCoords(geometry)]
        } else if (gj.type == 'FeatureCollection') {
          for (let feature_num = 0; feature_num < gj.features.length; feature_num++) {
            let feature = gj.features[feature_num]
            coords = getCoords(feature, coords)
          }
        } else if (gj.type == 'GeometryCollection') {
          for (let geom_num = 0; geom_num < gj.coords.length; geom_num++) {
            let geometry = gj.coords[geom_num]
            coords.push(geometry)
          }
        } else if (gj.type === 'Point') {
          let geometry = gj
          coords = [...coords, geometry.coordinates] // if Point, return array
        } else if (gj.type === 'LineString') {
          let line = gj.coordinates
          let _coords = line
          coords = [...coords, ..._coords]
        } else if (gj.type === 'MultiPoint') {
          let geometry = gj
          coords.push(geometry)
        } else if (gj.type === 'Polygon') {
          let rings = gj.coordinates
          let _coords = rings.reduce((p, q) => [...p, ...q], [])
          coords = [...coords, ..._coords]
        } else if (gj.type === 'MultiLineString') {
          let lines = gj.coordinates
          let _coords = lines.reduce((p, q) => [...p, ...q], [])
          coords = [...coords, ..._coords]
        } else if (gj.type === 'MultiPolygon') {
          let geometry = gj
          coords.push(geometry)
        } else if (gj.type === 'Sphere') {
          let geometry = gj
          coords.push(geometry)
        } else {
          throw new Error('gj type not identified.')
        }
      }

      return coords
    }

    // ...................... getPolygon
    let getPolygon = function (gj, coords = []) {
      if (gj === undefined) {
      } else {
        if (gj.type == 'Feature') {
          let geometry = gj.geometry
          if (geometry !== null) coords = getPolygon(geometry, coords)
        } else if (gj.type == 'FeatureCollection') {
          // get first feature
          let feature = gj.features[0]
          coords = getCoords(feature, coords)
        } else if (gj.type == 'GeometryCollection') {
          let geometry = gj.geometries[0]
          coords = getPolygon(geometry, coords)
        } else if (gj.type === 'Point') {
          coords = null
        } else if (gj.type === 'LineString') {
          let points = gj.coordinates
          let qpoints = points.length
          if (linpoints[0] !== points[qpoints - 1]) points.push(line[0])
          coords = points
        } else if (gj.type === 'MultiPoint') {
          let points = gj.coordinates
          let qpoints = points.length
          if (linpoints[0] !== points[qpoints - 1]) points.push(line[0])
          coords = points
        } else if (gj.type === 'Polygon') {
          coords = gj.coordinates
        } else if (gj.type === 'MultiLineString') {
          let points = gj.coordinates[0]
          let qpoints = points.length
          if (linpoints[0] !== points[qpoints - 1]) points.push(line[0])
          coords = points
        } else if (gj.type === 'MultiPolygon') {
          coords = gj.coordinates[0][0]
        } else {
          throw new Error('gj type not identified.')
        }
      }

      return coords
    }
    // ...................... getCoordsLength
    let getCoordsLength = gj => getCoords(gj).length

    // ...................... getCoordsInRange
    //  nb: number of coords, firstCoord: start coord
    //  ngj: is expected geometry - tbd Feature, FeatureCollection
    let getCoordsInRange = function (gj, toaddCoords, firstCoord = 0, ngj = {type: null, coordinates: [] }) {
      let pointerInCoords = 0 // pointer to current coord at beginning of line
      let addedCoords = 0 // added coords
      let startInLine = 0 // start coord of line i
      let firstCoordInLine = 0

      ngj.type = gj.type

      if (gj.type === 'Polygon') {
        for (let i = 0; i < gj.coordinates.length; i++) { // rings
          let ring = gj.coordinates[i]
          let ringLength = ring.length

          if (addedCoords + ringLength < toaddCoords) { // if ring in scope
            ngj.coordinates.push(ring)
            addedCoords += ringLength
          } else {
            let tmpring = ring.slice(0, toaddCoords - addedCoords)
            ngj.coordinates.push(tmpring)
            addedCoords += (toaddCoords - addedCoords)

            break
          }
        }
      } else if ((gj.type === 'MultiLineString')) {
        let lines = gj.coordinates
        let numboflinesingj = lines.length

        for (let i = 0; i < numboflinesingj; i++) { // for each line
          let line = lines[i]
          let linelength = line.length // number of coords in line

          // md: toaddCoords: coords to add
          // md: firstCoord: first coord to start adding in gj coords system
          // md: remainingCoords: coords to be added when processing line i
          // md: firstCoordInLine: first coordinate of line i in abs gj coords system
          // md: addedCoords: number of coords added before line i
          // md: tmpstart: first coord in line coords system
          // md: tmpend: last coord in line coords system

          let remainingCoords = toaddCoords - addedCoords
          let tmpstart = (firstCoord + addedCoords) - firstCoordInLine
          let tmpend = tmpstart + remainingCoords

          let tmpLine = []
          if (tmpstart >= 0 && tmpend >= 0) {
            tmpLine = line.slice(tmpstart, tmpend)

            if (tmpLine.length > 0) {
              ngj.coordinates.push(tmpLine)

              addedCoords += tmpLine.length
            }
          }
          pointerInCoords += tmpLine.length
          firstCoordInLine = firstCoordInLine + linelength
        }
      } else if ((gj.type === 'MultiPoint')) {
        ngj.coordinates = gj.coordinates.slice(0, toaddCoords)
      } else if ((gj.type === 'LineString')) {
        let line = gj.coordinates // coords in line
        let linelength = line.length // number of coords in line
        let remainingCoords = toaddCoords - addedCoords

        let startInLine = firstCoord - pointerInCoords

        let tmpLine = line.slice(startInLine, startInLine + remainingCoords)
        ngj.coordinates = tmpLine
        addedCoords += tmpLine.length
      } else if ((gj.type === 'Feature')) {
        ngj.geometry = getCoordsInRange(gj.geometry, toaddCoords, firstCoord)
      }

      return ngj
    }

    // ............................. gjAppend
    let gjAppend = function (gj1, gj2) {
      let gj = Object.assign(gj1)

      let coords
      let coords1 = gj1.geometry.coordinates
      let coords2 = gj2.geometry.coordinates

      // assume gj1 is LineString, coords1 is null or array of coords arrays
      // assume gj2 is Point, coords2 is coords array

      if (coords1 && coords1.length > 0) {
        coords = [ ...coords1, coords2 ]
      } else {
        coords = Array.of([coords2])
      }

      gj.geometry.coordinates = coords
      return gj
    }

    // ............................. isValid
    let isValid = function (gj, type) {
      let valid = true
      if (gj === undefined) {
        valid = false
      } else {
        if (gj.type == 'Feature') {
          if (gj.geometry) {
            valid = isValid(gj.geometry)
          }
        } else if (gj.type == 'FeatureCollection') {
          for (let i = 0; i < gj.features.length; i++) {
            valid = valid && isValid(gj.features[i])
          }
        } else if (gj.type == 'GeometryCollection') {
          if (gj.geometries !== undefined) {
            for (let j = 0; j < gj.geometries.length; j++) {
              valid = valid && isValid(gj.geometries[j])
            }
          }
        } else if (gj.type === 'Point') {
          let point = gj.coordinates
          valid = valid &&
              Array.isArray(point) &&
                point.reduce((p, q) => p && typeof (q === 'number' || q === undefined), true)
        } else if (gj.type === 'LineString') {
          let line = gj.coordinates

          valid = valid &&
              Array.isArray(line) &&
              Array.isArray(line[0]) && // exclude point
              line.reduce((p, q) => p &&
                 q.reduce((p2, q2) => p2 && typeof (q2 === 'number' || q2 === undefined), true),
              true)
        } else if (gj.type === 'MultiPoint') {
          let points = gj.coordinates
          points = valid &&
              points.reduce((p, q) => p &&
                  q.reduce((p2, q2) => p2 && typeof (q2 === 'number' || q2 === undefined), true),
              true)
        } else if (gj.type === 'Polygon') {
          let rings = gj.coordinates
          valid = valid &&
                rings.reduce((p, q) => p &&
                  q.reduce((p2, q2) => p2 && // ring
                    Array.isArray(q2) && q2.reduce((p3, q3) => p3 && // point
                      typeof (q3 === 'number' || q3 === undefined) // coord
                    ,
                  true),
                  true),
                true)
        } else if (gj.type === 'MultiLineString') {
          let lines = gj.coordinates
          valid = valid &&
                lines.reduce((p, q) => p &&
                  Array.isArray(q) && q.reduce((p2, q2) => p2 && // line
                    Array.isArray(q2) && q2.reduce((p3, q3) => p3 && // point
                      typeof (q3 === 'number' || q3 === undefined), // coord
                true),
                true),
                true)
        } else if (gj.type === 'MultiPolygon') {
          let polygons = gj.coordinates
          valid = valid &&
                polygons.reduce((p, q) => p &&
                  Array.isArray(q) && q.reduce((p2, q2) => p2 && // polygon
                    Array.isArray(q2) && q2.reduce((p3, q3) => p3 && // ring
                      Array.isArray(q3) && q3.reduce((p4, q4) => p4 && // point
                        typeof (q4 === 'number' || q4 === undefined), // coord
                true),
                true),
                true),
                true)
        } else if (gj.type == 'Sphere') {
          valid = true
        } else {
          valid = false
          console.error('gj type not identified', gj)
          // throw new Error('gj type not identified.', gj)
        }
      }

      return valid
    }

    // ............................. tclip
    let tclip = function (gj, t = 1, interval = [0, 1]) {
      let ret = gj

      let t0 = interval[0],
        t1 = interval[1],
        period = t1 - t0,
        tInPeriod = (t - t0) / period

      if (t < interval[0] || t > interval[1]) {
        ret = [] // return empty set
      } else if (tInPeriod === 1) { // return geojson
      } else if (gj.type && gj.type === 'Point') {
        ret = gj // in period
      } else if (gj.type && gj.type === 'MultiPoint') {
      } else if (gj.type && gj.type === 'LineString') {
      } else if (gj.type && gj.type === 'MultiLineString') {
      } else if (gj.type && gj.type === 'Polygon') {
        let ngj = { type: 'Polygon', coordinates: [] } // return polygon

        let rings = gj.coordinates // coords is rings array
        let tnb = rings.reduce((p, q) => p += q.length, 0)
        let nb = Math.floor(tnb * tInPeriod)

        let outrings = []
        let addedCoords = 0
        for (let i = 0; i < rings.length; i++) {
          let ring = rings[i]
          let ringLength = ring.length

          if (addedCoords + ringLength < nb) { // if ring in scope
            ngj.coordinates.push(ring)
            addedCoords += ringLength
          } else { // complement with part of next ring
            let tmpring = ring.slice(0, nb - addedCoords)
            ngj.coordinates.push(tmpring)
            addedCoords += (nb - addedCoords)
            break
          }
        }

        ret = ngj
      } else if (gj.type && gj.type === 'MultiPolygon') {
      } else if (gj.type && gj.type === 'GeometryCollection') {
      } else if (gj.type && gj.type === 'Feature') {

      } else if (gj.type && gj.type === 'FeatureCollection') {
      }

      return ret
    }

    let extrapol = function (gj1, gj2) {
      console.assert(isValid(gj1))
      // isFeature, isLineString
      console.assert(isValid(gj2))
      // isFeature, isPoint

      let linedots = gj1.geometry.coordinates
      let delta = gj2.geometry.coordinates
      let linecoords = linedots.map(
        p => p.map((d, i) => d + delta[i]))

      let eofold = {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: linecoords,
        },
      }

      return eofold
    }

    let geotrim = function (coord = []) {
      console.assert(Array.isArray(coord))
      let res = coord.reduce((p, q) => (!isNaN(q)) ? [...p, q] : p, [])
      return res
    }

    let isValidCoord = function (coord = []) {
      console.assert(Array.isArray(coord))
      let res = coord.reduce((p, q) => p && isNaN(q), true)
      return res
    }

    // ............................. timeSeg
    let _timeSeg = function (gj, ut, tf = d => d, firstcoord = 0) {
      let ngj
      if (gj === undefined) {

      } else {
        if (gj.type == 'Feature') {
          let geometry = gj.geometry
          if (geometry !== null) coords = getPolygon(geometry, coords)
        } else if (gj.type == 'FeatureCollection') {
          let feature = gj.features[0] // get first feature
          coords = getCoords(feature, coords)
        } else if (gj.type == 'GeometryCollection') {
          let geometry = gj.geometries[0]
          coords = getPolygon(geometry, coords)
        } else if (gj.type === 'Point') {
          coords = null
        } else if (gj.type === 'LineString') {
          let points = gj.coordinates
          let qpoints = points.length
          if (linpoints[0] !== points[qpoints - 1]) points.push(line[0])
          coords = points
        } else if (gj.type === 'MultiPoint') {
          let points = gj.coordinates
          let qpoints = points.length
          if (linpoints[0] !== points[qpoints - 1]) points.push(line[0])
          coords = points
        } else if (gj.type === 'Polygon') {
          coords = gj.coordinates
        } else if (gj.type === 'MultiLineString') {
          let points = gj.coordinates[0]
          let qpoints = points.length
          if (linpoints[0] !== points[qpoints - 1]) points.push(line[0])
          coords = points
        } else if (gj.type === 'MultiPolygon') {
          coords = gj.coordinates[0][0]
        } else {
          throw new Error('gj type not identified.')
        }
      }

      return ngj
    }

    let timeSeg = function (geoData, ut, tf = d => d, firstcoord = 0) {
      let coords = getCoords(geoData)
      let nb = coords.length
      let unElapsed = ut
      let t = tf(unElapsed)

      let nbt = Math.ceil(nb * t)
      let ngj = getCoordsInRange(geoData, nbt, firstcoord)
      return ngj
    }

    let segtime = function (geoData, tim) {
      console.assert(geoData.geometry.type === 'MultiLineString')

      let coords = getCoords(geoData)
      let nb = coords.length
      let unElapsed = tim.unElapsed // unit time elapsed
      let tf = d => d
      let t = tf(unElapsed)

      let nbt = Math.ceil(nb * t)
      let csi = t => getCoordsInRange(geoData, nbt)
      coords = csi(t).geometry.coordinates

      let ngj = {
        type: 'Feature',
        geometry: { type: 'MultiLineString', coordinates: [] },
        properties: {},
      }

      ngj.geometry.coordinates = coords

      return ngj
    }

    // ............................. enty
    let enty = function () {}

    enty.getPolygon = getPolygon
    enty.isValidCoord = isValidCoord
    enty.geotrim = geotrim
    enty.trim = trim
    enty.tclip = tclip
    enty.complexify = complexify
    enty.deprop = deprop
    enty.snip = snip
    enty.largestPoly = largestPoly
    enty.lineStringFromStream = lineStringFromStream
    enty.polygonFromStream = polygonFromStream
    enty.multLineStringFromStreamArray = multLineStringFromStreamArray
    enty.featurecollect = featurecollect
    enty.ntime = ntime
    enty.zorder = zorder
    enty.centroid = centroid
    enty.getCoords = getCoords
    enty.getCoordsLength = getCoordsLength
    enty.getCoordsInRange = getCoordsInRange
    enty.isValid = isValid
    enty.gjAppend = gjAppend
    enty.extrapol = extrapol
    enty.timeSeg = timeSeg
    enty.segtime = segtime

    return enty
  }

  exports.muonGeoj = muonGeoj
}))
