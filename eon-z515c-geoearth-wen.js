/* ******************************************
   *    @eonZ515cGeoearthWen
   *
   */
  (function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports)
      : typeof define === 'function' && define.amd ? define(['exports'], factory)
        : (factory((global.eonZ515cGeoearthWen = global.eonZ515cGeoearthWen || {})))
  }(this, function (exports) {
    'use strict'
  
    async function anitem (__eo) {
    // .................. eons
    let [
      topojson,
      d3Geo,
      d3Geoprojection,
      ctlWen,
      ctlVersor,
      datWorldTopo110m,
      eohalMars,
      muonGeom,
      muonGraticule,
      muonNatform,
      protonNatform,
      renderSvg,
    ] = await Promise.all([
      __eo('xs').b('topojson'),
      __eo('xs').b('d3-geo'),
      __eo('xs').b('d3-geo-projection'),
      __eo('xs').c('wen'),
      __eo('xs').c('versor'),
      __eo('xs').d('worldTopo110m'),
      __eo('xs').e('mars'),
      __eo('xs').m('geom'),
      __eo('xs').m('graticule'),
      __eo('xs').m('natform'),
      __eo('xs').p('natform'),
      __eo('xs').r('svg'),
    ])
    try { renderSvg.scenecolor('black') } catch (e) { }
    // .................. animas
    let z = function () {
      // .................. pics
      let ctl
      try {
        ctl = ctlWen().control(renderSvg.svg())
      } catch (e) {
        ctl = () => [0, 0, 0]
      }

      let eotim = { 'td': 18800, 't0': 0, 't1': 1, 't2': 1, 't3': 1, nostop: 1 }

      // .................. pics
      let pi = Math.PI,
        radians = Math.PI / 180, degrees = 180 / Math.PI,
        sin = Math.sin, cos = Math.cos, sqrt = Math.sqrt,
        sinh = Math.sinh, cosh = Math.cosh, tanh = Math.tanh,
        exp = Math.exp,
        epsilon = 1e-5

      let formCube = {

        'x': {
          'm1': 4, 'm2': 4, 'n1': 100, 'n2': 100, 'n3': 100, 'a': 1, 'b': 1, // square
          'ra2': 90, 'v0': 0, 'v1': 1, 'w4': 0, 'seg5': 360, 'pa6': 0, 'pb7': -1,
          'dom3': [-180, 180],

        },
        'y': {
          'm1': 4, 'm2': 4, 'n1': 100, 'n2': 100, 'n3': 100, 'a': 1, 'b': 1, // square
          'ra2': 90, 'v0': 0, 'v1': 1, 'w4': 0, 'seg5': 360, 'pa6': 0, 'pb7': -1,
          'dom3': [-180, 180],

        },
        'z': {
          'm1': 4, 'm2': 4, 'n1': 100, 'n2': 100, 'n3': 100, 'a': 1, 'b': 1, // square
          'ra2': 90, 'v0': 0, 'v1': 1, 'w4': 0, 'seg5': 360, 'pa6': 0, 'pb7': -1,
          'pr8': d => Math.cos(d),
          'dom3': [-180, 180],

        },
      }

      let conformTangerine = {
        x: {
          'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 1, 'b': 1, // circ
          'ra2': 160, 'v0': 0, 'v1': 1, 'w4': 0, 'seg5': 12, 'pa6': 0, 'pb7': -1,
          'dom3': [-180, 180],
          c: [1, 1, 1, 1],
          fn0: (e, c, d) => cos(e[0]) * cos(e[2]),
        },
        y: {
          'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 1, 'b': 1, // circ
          'ra2': 160, 'v0': 0, 'v1': 1, 'w4': 0, 'seg5': 12, 'pa6': 0, 'pb7': -1,
          'dom3': [-180, 180],
          c: [1, 1, 1, 1],
          fn0: (e, c, d) => sin(e[0]) * cos(e[2]),
        },
        z: {
          'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 1, 'b': 1, // circ
          'ra2': 160, 'v0': 0, 'v1': 1, 'w4': 0, 'seg5': 12, 'pa6': 0, 'pb7': -1,
          'dom3': [-90, 90],
          // c: [ [[[18, 18, 6, 6]]], [[[6, 6, 60, 60]]], 1, 1],
          c: [[[[18, 18, 18, 18]]], [[[12, 12, 12, 12]]], 1, 1],
          fn0: (e, c, d) => sin(e[2] + (pi / d.c[0]) * cos(d.c[1] * e[0])),
        },
        w: {
          'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 1, 'b': 1, // circ
          'dom3': [-90, 90],
          fn0: (e, c, d) => d.c[3] * sin(e[2] * (1 + epsilon * sin(e[0]))),
        },

      }

      let proform = {
        projection: 'uniwen',
        scale: [1, 1],
        prerotate: [[[ctl.rotation]]],
        translate: [[0, 0, 0]],
        rotate: [0, 0, 0],
        lens: [0, 1, Infinity],
      }

      // .................. geoearthDark  DARK
      let pDark = function () {
        let forward = (x, y) => d3Geo.geoOrthographicRaw(-x, -y)
        forward.invert = (x, y) => d3Geo.geoOrthographicRaw.invert(-x, -y)
        return forward
      }

      let darkProjection = d3Geo.geoProjection(pDark())
        .clipAngle(90)
        .translate([0, 0, 0])
        .scale(180)

      let proformDark = {

        projection: darkProjection,
        prerotate: [[[t => {
          let rot = ctlVersor
            .projection({ projection: darkProjection }) // versor projection
            .rotation()
          let res = [180 + rot[0], -rot[1], -rot[2]]
          return res
        }]]],

        // rotate: [ [[[0, 0 + 0 * 360]]], [[[0, 0 * 360]]], 0 ],
        // rotate: [ 90, 0, 0 ],
        rotate: [0, 0, 0],

      }

      let geoearthDark = {

        eohal: eohalMars,

        eofold: () => {
          return Object.assign({},
            topojson.feature(
              datWorldTopo110m.data(),
              datWorldTopo110m.data().objects.land
            )
          )
        },

        eotim,
        eomot: {
          proform: proformDark,
        },
        eoric: { gid: 'geo', cid: 'geo', fid: 'geoearthDark' },
        eocrom: { 'csx': 0, 'cf': 333, 'cs': 333, 'cw': 0.2, 'co': 0.4, 'cp': 0.9 },
        eoload: {
        },

      }

      // .................. geoearthFront FRONT
      let pFront = function (x, y) {
        let forward = (x, y) => d3Geo.geoOrthographicRaw(x, -y)
        forward.invert = (x, y) => d3Geo.geoOrthographicRaw.invert(x, -y)
        return forward
      }

      let frontProjection = d3Geo.geoProjection(pFront())
        .clipAngle(90)
        .translate([0, 0, 0])
        .rotate([0, 0, 0])

      let proformFront = {

        projection: frontProjection,
        prerotate: [[[function (t) {
          let rot = ctlVersor
            .projection({ projection: frontProjection }) // versor projection
            .rotation()
          return rot
        }]]],

        translate: [0, 0, 0],
        scale: 180,
        // rotate: [ [[[30, 0 * 360]]], [[[0, 0 * 360]]], 0 ],
        // rotate: [ 90, 0, 0 ],
        rotate: [0, 0, 0],

      }

      let geoearthFront = {

        eohal: eohalMars,
        eotim,
        eoric: { gid: 'geo', cid: 'geo', fid: 'geoearthFront' },

        eofold: () => {
          return Object.assign({},
            topojson.feature(
              datWorldTopo110m.data(),
              datWorldTopo110m.data().objects.land
            )
          )
        },

        eomot: {
          proform: proformFront,
        },

        eocrom: { 'csx': 0, 'cf': 555, 'cs': 333, 'cw': 0.2, 'co': 1, 'cp': 0.9 },
        eoload: {},

      }

      // .................. graticuleFront
      let graticuleFront = {

        eohal: eohalMars,
        eofold: p => muonGraticule.gjfMultiLineString(p.eoframe),
        eotim: eotim,
        eomot: {
          proform: proformFront,
        },
        eoric: { 'gid': 'geoearth', 'cid': 'geoearth', 'fid': 'graticuleFront' },
        eocrom: { 'csx': 0, 'cf': 555, 'cs': 333, 'cw': 0.4, 'co': 0.001, 'cp': 0.9 },

        eoframe: {

          geoframe: [[[-180, 180, 30, 30], // x
            [-180, 180, 15, 15]]], // y

        },
        eoload: {},

      }

      // ............................. tangerineAni
      let tangerineAni3 = {

        eohal: eohalMars,
        eotim,
        eoric: { gid: 'q', cid: 'q', fid: 'q3' },

        eofold: p => muonGraticule.gjfMultiLineString(p.eoform),

        eomot: {
          proform: proform,
        },

        eocrom: {
          'csx': 0, 'cf': [[[666, 333, 666]]], 'co': [[[0.069, 0.06, 0.069]]],
          'cs': [[[333, 333, 333]]], 'cw': [[[0.99, 0.9, 0.99]]], 'cp': [[[0.99, 0.99]]],
        },

        eoframe: {

          geoframe: [[[-180, 180, 45, 45],
            [-90, 90, 22.5, 22.5]],
          [[-180, 180, 45, 45],
            [-90, 90, 22.5, 22.5]]],

        },
        eoform: conformTangerine,
        eoload: {},
      }

      // ............................. tangerineAni
      let tangerineAni = {

        eohal: eohalMars,
        eotim,
        eoric: { gid: 'q', cid: 'q', fid: 'q2' },

        eofold: ani => muonNatform.natMultiLineString({ eoform: ani.eoform }),

        eomot: {
          proform: proform,
        },

        eocrom: {
          'csx': 0, 'cf': [[[666, 333, 666]]], 'co': [[[0.069, 0.06, 0.069]]],
          'cs': [[[333, 333, 333]]], 'cw': [[[0.99, 0.9, 0.99]]], 'cp': [[[0.99, 0.99]]],
        },

        eoform: conformTangerine,
        eoload: {},
      }
      // ............................. earthAni
      let earthAni = {

        eohal: eohalMars,
        eotim: eotim,
        eoric: { gid: 'earthAni', cid: 'earthAni', fid: 'earthAni' },

        eofold: ani => {
          let geometry = Object.assign({},
            topojson.mesh(
              datWorldTopo110m.data(),
              datWorldTopo110m.data().objects.land
            )
          )
          let gj = {
            type: 'Feature',
            geometry: geometry,
            properties: {},
          }
          return gj
        },

        eocrom: { 'csx': 0, 'cf': 444, 'cs': 444, 'cw': 0.69, 'co': 0.09, 'cp': 0.9 },

        eomot: {
          conform: {
            projection: 'natform',
            eoform: conformTangerine,
          },
          proform: proform,
        },

        eoload: {},

      }

      let animas = [
        tangerineAni, //
        earthAni, //

      ]

      return animas
    }

    let enty = () => { }
    enty.z = z
    return enty
  }
  exports.eonZ515cGeoearthWen = anitem
}))