/* ******************************************
   *    @eonZ420aGeoproj
   *
   */
  (function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports)
      : typeof define === 'function' && define.amd ? define(['exports'], factory)
        : (factory((global.eonZ420aGeoproj = global.eonZ420aGeoproj || {})))
  }(this, function (exports) {
    'use strict'
  
    async function anitem (__eo) {
  // .................. eons
  let [
    d3Geo,
    d3GeoProjection,
    topojson,
    eonCtlVersor,
    eonCtlWen,
    eonDatWorldTopo110m,
    eonEohalMars,
    eonMuonGeom,
    eonMuonGraticule,
    eonMuonNatform,
    eonProtonNatform,
    eonProtonBase,
    eonProtonOrthographic,
    eonRenderSvg,
  ] = await Promise.all([
    __eo('xs').b('d3-geo'),
    __eo('xs').b('d3-geo-projection'),
    __eo('xs').b('topojson'),
    __eo('xs').b('eon-ctl-versor'),
    __eo('xs').b('eon-ctl-wen'),
    __eo('xs').b('eon-dat-world-topo110m'),
    __eo('xs').b('eon-eohal-mars'),
    __eo('xs').b('eon-muon-geom'),
    __eo('xs').b('eon-muon-graticule'),
    __eo('xs').b('eon-muon-natform'),
    __eo('xs').b('eon-proton-natform'),
    __eo('xs').b('eon-proton-base'),
    __eo('xs').b('eon-proton-orthographic'),
    __eo('xs').b('eon-render-svg'),
  ])
  try { eonRenderSvg.scenecolor('black') } catch (e) {}
  // .................. animas
  let z = function () {
    // .................. pics
    let ctl
    try {
      ctl = eonCtlWen().control(eonRenderSvg.svg())
    } catch (e) {
      ctl = () => [0, 0, 0]
    }

    let eotim = {'td': 10800, 't0': 0, 't1': 1, 't2': 1, 't3': 1, nostop: 1}

    // ..................
    let proformEarth = {

      projection: eonProtonOrthographic,
      prerotate: [[[ eonProtonOrthographic.rotation ]]],
      prerotate: [[[ eonCtlVersor
        .projection({projection: eonProtonOrthographic })
        .rotation,
      ]]],
      translate: [0, 0, 0],
      scale: 100,
      rotate: [ [[[0, 360]]], 0, 0 ],

    }

    let eoform1 = {
      'x': {
        'm1': 4, 'm2': 4, 'n1': [[[1, 100, 1]]], 'n2': [[[100, 100]]], 'n3': [[[100, 100]]], 'a': 1, 'b': 1,
        'ra2': 40,
        'v0': 0, 'v1': 1,
        'w4': 0,
        'seg5': 360, 'pa6': 0, 'pb7': -1,
      },
      'y': {
        'm1': 4, 'm2': 4, 'n1': [[[1, 100, 1]]], 'n2': [[[100, 100]]], 'n3': [[[100, 100]]], 'a': 1, 'b': 1, 		// star
        'ra2': 40,
        'v0': 0, 'v1': 1,
        'w4': 0,
        'seg5': 360, 'pa6': 0, 'pb7': -1,
      },
    }
    let eoform2 = {
      'x': {
        'm1': 4, 'm2': 4, 'n1': 1, 'n2': 1, 'n3': 1, 'a': 1, 'b': 1, 		// circle
        'ra2': 40,
        'v0': 0, 'v1': 1,
        'w4': 0,
        'seg5': 360, 'pa6': 0, 'pb7': -1,
      },
      'y': {
        'm1': 4, 'm2': 4, 'n1': 1, 'n2': 1, 'n3': 1, 'a': 1, 'b': 1, 		// circle
        'ra2': 40,
        'v0': 0, 'v1': 1,
        'w4': 0,
        'seg5': 360, 'pa6': 0, 'pb7': -1,
      },
    }
    let eoform3 = {
      'x': {
        'm1': 5, 'm2': 5, 'n1': 2, 'n2': 7, 'n3': 7, 'a': 1, 'b': 1, // round star
        'ra2': 40,
        'v0': 0, 'v1': 1,
        'w4': 0,
        'seg5': 360, 'pa6': 0, 'pb7': -1,
      },
      'y': {
        'm1': 5, 'm2': 5, 'n1': 2, 'n2': 7, 'n3': 7, 'a': 1, 'b': 1, // round star
        'ra2': 40,
        'v0': 0, 'v1': 1,
        'w4': 0,
        'seg5': 360, 'pa6': 0, 'pb7': -1,
      },
    }
    let eoforms = [eoform1, eoform2, eoform3]

    let eoframe = {

      geoframe: [ [ [-180, 180, 45, 45], [-90, 90, 22.5, 22.5] ] ],

    }

    // ............................. geograt
    let geograt = i => ({

      eohal: eonEohalMars,
      eotim: eotim,
      eoric: {gid: 'geograt', cid: 'geograt', fid: 'geograt' + '_' + i},

      eofold: ani => eonMuonNatform.natMultiLineString({eoform: ani.eoform}),

      eomot: {
        ereform: {

          projection: 'uniwen',
          prerotate: [[[ ctl.rotation ]]],
          scale: 0.01 + 0.5 * Math.random(),
          translate: [ 0 + 30 * i, 0 + 30 * i ],
          rotate: [ 0, 0, [[[0, -(2 + Math.random()) * 360]]] ],

        },
        proform: {

          projection: d3Geo.geoOrthographic(),
          prerotate: [[[ ctl.rotation ]]],
          scale: [180],
          translate: [ 0, 0 ],
          rotate: [ [[[0, -2 * 360]]], 0, 0 ],

        },
      },

      eocrom: { 'csx': 0, 'cf': 666 + 100 * i, 'cs': 666 + 100 * i, 'cw': 0.9, 'co': 0.2 * Math.random(), 'cp': [[[0.9, 0.9]]]},

      eoform: eoforms[Math.floor(i % 3)],
      eoframe: eoframe,
      eoload: {},

    })

    let geograts = Array.from([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]).map(i => geograt(i))

    let animas = [
      ...geograts,

    ]

    return animas
  }

  let enty = () => {}
  enty.z = z
  return enty
}
  exports.eonZ420aGeoproj = anitem
}))