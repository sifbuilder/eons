/* ******************************************
   *    @eonZ423aGeopols
   *
   */
  (function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports)
      : typeof define === 'function' && define.amd ? define(['exports'], factory)
        : (factory((global.eonZ423aGeopols = global.eonZ423aGeopols || {})))
  }(this, function (exports) {
    'use strict'
  
    async function anitem (__eo) {
  // .................. eons
  let [
    d3Geo,
    d3GeoProjection,
    topojson,
    ctlVersor,
    ctlWen,
    datWorldTopo110m,
    eohalMars,
    muonGeom,
    muonGraticule,
    protonNatform,
    protonBase,
    renderSvg,
  ] = await Promise.all([
    __eo('xs').b('d3-geo'),
    __eo('xs').b('d3-geo-projection'),
    __eo('xs').b('topojson'),
    __eo('xs').c('versor'),
    __eo('xs').c('wen'),
    __eo('xs').d('worldTopo110m'),
    __eo('xs').e('mars'),
    __eo('xs').m('geom'),
    __eo('xs').m('graticule'),
    __eo('xs').p('natform'),
    __eo('xs').p('base'),
    __eo('xs').r('svg'),
  ])

  // .................. animas
  let z = function () {
    // .................. pics
    let ctl
    try {
      ctl = ctlWen().control(renderSvg.svg())
    } catch (e) {
      ctl = () => [0, 0, 0]
    }

    let eotim = {'td': 16800, 't0': 0, 't1': 1, 't2': 1, 't3': 1}

    let formSphere = {

      'x': {
        'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 1, 'b': 1, // circle
        'ra2': 120, 'v0': 0, 'v1': 1, 'w4': 0, 'seg5': 360, 'pa6': 0, 'pb7': -1,
      },
      'y': {
        'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 1, 'b': 1, // circle
        'ra2': 120, 'v0': 0, 'v1': 1, 'w4': 0, 'seg5': 360, 'pa6': 0, 'pb7': -1,
      },
      'z': {
        'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 1, 'b': 1, // circle
        'ra2': 120, 'v0': 0, 'v1': 1, 'w4': 0, 'seg5': 360, 'pa6': 0, 'pb7': -1,
      },

    }

    // ............................. geoPol1
    let geoPol1 = {

      eohal: eohalMars,

      eofold: () => {
        let gj = {
          type: 'Feature',
          geometry: {
            type: 'Polygon',
            coordinates:
                [[
                  [ 90, 0 ],
                  [ 0, 0 ],
                  [ 0, 90 ],
                  [ 90, 90 ],
                  [ 90, 0 ],
                ]],
          },
        }
        return gj
      },

      eotim: eotim,
      eoric: {gid: 'geoPol1', cid: 'geoPol1', fid: 'geoPol1'},
      eocrom: { 'csx': 0, 'cf': 444, 'cs': 444, 'cw': 0.1, 'co': 0.9, 'cp': 0.9},
      eomot: {
        proform: {
          projection: protonBase
            .projection(d3Geo.geoOrthographic())
            .transform(function (x, y) {
              this.stream.point(x / 1, y / 4)
            }),
          prerotate: [[[ ctl.rotation ]]],
          translate: [0, 0, 0],
          scale: 100,
          rotate: [ 0, 0, -180 ],

        },
      },

    }
    let geoGraticule = {

      eohal: eohalMars,
      eotim: eotim,
      eoric: {gid: 'g', cid: 'g', fid: 'g2' },
      eocrom: {'csx': 0, 'cf': 555, 'cs': 888, 'cw': 0.7, 'co': 0.005, 'cp': 0.9},

      eofold: p => muonGraticule.gjfMultiLineString(p.eoframe),
      eomot: {
        proform: {
          projection: protonBase
            .projection(d3Geo.geoOrthographic())
            .transform(function (x, y) {
              this.stream.point(x / 1, y / 4)
            }),
          prerotate: [[[ ctl.rotation ]]],
          translate: [0, 0, 0],
          scale: 100,
          rotate: [ 0, 0, -180 ],

        },
      },
      eoframe: {
        geoframe: [ [ [ -180, 180, 15, 15], [ -90, 90, 15, 15] ] ],
      },
      eoform: null,
      eoload: {},
    }

    // ............................. animas
    let animas = [
      geoPol1,
      geoGraticule,

    ]

    return animas
  }

  let enty = () => {}
  enty.z = z
  return enty
}
  exports.eonZ423aGeopols = anitem
}))