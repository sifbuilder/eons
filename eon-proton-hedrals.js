/***************************
 *        @eonProtonHedrals
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports)
    : typeof define === 'function' && define.amd ? define(['exports'], factory)
      : (factory((global.eonProtonHedrals = global.eonProtonHedrals || {})))
}(this, function (exports) {
  'use strict'

  async function eonitem (__eo = {}) {
    let [
      eonMuonProps,
      mpolyhedral,
      d3,
    ] = await Promise.all([
      __eo('xs').b('eon-muon-props'),
      __eo('xs').b('eon-muon-polyhedral'),
      __eo('xs').b('d3'),
    ])

    const pi = Math.PI, degrees = 180 / pi, radians = pi / 180

    let enty = function (p = {}) {
      if (!p.faciaRotation) p.faciaRotation = Math.PI / 4 // faciaRotation

      if (!p.geoRotation) p.geoRotation = c => [-c[0], -c[1], 0] // geoRotation

      if (!p.prtRaw) p.prtRaw = d3.geoGnomonicRaw // prtRaw

      p.tree = eonMuonProps.objxx('tree', 'trees', 'treeidx', p) // tree

      if (!p.tree) p.tree = [-1]									// root

      let {vertices, faces} = p				// vertices and faces in geo data

      if (vertices !== undefined) { // assume faces from degreed spherical verties
        vertices = d3.merge([ vertices]) // spher degrees eg. [-45, 35.2643]
        faces = faces.map(function (face) { // faces : points => vertices
          return face.map(function (p) { // eg. [1, 0, 3, 2, 1]
            return vertices[p]
          }) // eg. [-45, 35], [-135, 35], [135, 35], [45, 354], [-45, 35]
        })
      } else { // assume faces as degreed spherical polygons
        faces = eonMuonProps.v(faces)
      }

      p.faces = faces

      return mpolyhedral(p) // get polyhedral projection
    }

    return enty
  }

  exports.eonProtonHedrals = eonitem
}))
