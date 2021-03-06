/* ******************************************
   *    @eonZ719aD2forms
   *
   */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports)
    : typeof define === 'function' && define.amd ? define(['exports'], factory)
      : (factory((global.eonZ719aD2forms = global.eonZ719aD2forms || {})))
}(this, function (exports) {
  'use strict'

  async function anitem (__eo) {
  // .................. eons
    let [
      eonMuonNatform,
      eonEohalMars,
      eonEohalNatform,
      eonRenderSvg,
    ] = await Promise.all([
      __eo('xs').b('eon-muon-natform'),
      __eo('xs').b('eon-eohal-mars'),
      __eo('xs').b('eon-eohal-natform'),
      __eo('xs').b('eon-render-svg'),
    ])
    try { eonRenderSvg.scenecolor('black') } catch (e) { }
    // .................. animas
    let z = function () {
    // .................. pics

      let eotim = {'td': 3800, 't0': 0, 't1': 1, 't2': 1, 't3': 1}
      let eocrom = { csx: 0, cf: 777, cs: 222, cw: 1.7, co: 0.7, cp: 0.5}
      let eofold = {type: 'Feature', geometry: { type: 'Point', coordinates: [0, 0]}, properties: {pointRadius: 6}}

      let translate = {
        'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 1, 'b': 1, // circle
        'ra2': 60, 'v0': 0, 'v1': 1, 'w4': 90, 'seg5': 360, 'pa6': 0, 'pb7': -1,
      }
      let proform = {projection: 'uniwen', scale: 1, translate: [ 0, 100 - 200 ], rotate: [ 0, 0 ],
        control: 'wen'}

      let f1 = {
        'm1': 4, 'm2': 4, 'n1': 100, 'n2': 100, 'n3': 100, 'a': 1, 'b': 1, // square
        'ra2': 60, 'v0': 0, 'v1': 1, 'seg5': 360, 'w4': 0, 'pa6': 0, 'pb7': 360,
      }
      let f2 = {
        'm1': 6, 'm2': 6, 'n1': 1000, 'n2': 400, 'n3': 400, 'a': 1, 'b': 1, // hexagon
        'ra2': 60, 'v0': 0, 'v1': 1, 'seg5': 360, 'w4': 0, 'pa6': 0, 'pb7': 360,
      }
      let f3 = {
        'm1': 6, 'm2': 6, 'n1': 2, 'n2': 7, 'n3': 7, 'a': 1, 'b': 1, // star
        'ra2': 60, 'v0': 0, 'v1': 1, 'seg5': 360, 'w4': 0, 'pa6': 0, 'pb7': 360,
      }
      let f4 = {
        'm1': 5, 'm2': 5, 'n1': 1000, 'n2': 600, 'n3': 600, 'a': 1, 'b': 1, // pentagon
        'ra2': 60, 'v0': 0, 'v1': 1, 'seg5': 360, 'w4': 0, 'pa6': 0, 'pb7': 360,
      }
      let f5 = {
        'm1': 5, 'm2': 5, 'n1': 2, 'n2': 7, 'n3': 7, 'a': 1, 'b': 1, // star
        'ra2': 60, 'v0': 0, 'v1': 1, 'seg5': 360, 'w4': 0, 'pa6': 0, 'pb7': 360,
      }
      let f6 = {
        'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 1, 'b': 1, // circle
        'ra2': 60, 'v0': 0, 'v1': 1, 'seg5': 360, 'w4': 0, 'pa6': 0, 'pb7': 360,
      }
      let f7 = {
        'm1': 3, 'm2': 3, 'n1': 1, 'n2': 1, 'n3': 1, 'a': 1, 'b': 1, // tri
        'ra2': 60, 'v0': 0, 'v1': 1, 'seg5': 360, 'w4': 0, 'pa6': 0, 'pb7': 360,
      }
      let f8 = {
        'm1': 3.93, 'm2': 3.93, 'n1': 2, 'n2': 2, 'n3': 1, 'a': 2.5, 'b': 1, // ellipse eye
        'ra2': 60, 'v0': 0, 'v1': 1, 'seg5': 360, 'w4': 0, 'pa6': 0, 'pb7': 360,
      }

      /*******************************************
 *    @animas
 */
      let p1 = {
        eohal: eonEohalMars,
        eofold: ani => eonMuonNatform.natMultiLineString({eoform: f1}),
        eocrom,
        eoric: {'gid': 'p', 'cid': 'p', 'fid': 'p1'},
        eomot: {
          proform: {projection: 'uniwen', scale: 1, rotate: [ 0, 0, 0 ], translate: [150 - 300, 100 - 200, 0] },
        },
        eoload: {eotim,
        },
      }
      let p2 = {
        eohal: eonEohalMars,
        eotim,
        eofold: p => eonMuonNatform.natMultiLineString({eoform: f2}),
        eocrom,
        eoric: {'gid': 'p', 'cid': 'p', 'fid': 'p2'},
        eomot: {
          proform: {projection: 'uniwen', scale: 1, rotate: [ 0, 0, 0 ], translate: [250 - 300, 100 - 200, 0] },
        },
        eoload: {
        },
      }
      let p3 = {
        eohal: eonEohalMars,
        eotim,
        eofold: p => eonMuonNatform.natMultiLineString({eoform: f3}),
        eocrom,
        eoric: {'gid': 'p', 'cid': 'p', 'fid': 'p3'},
        eomot: {
          proform: {projection: 'uniwen', scale: 1, rotate: [ 0, 0, 0 ], translate: [350 - 300, 100 - 200, 0] },
        },
        eoload: {
        },
      }
      let p4 = {
        eohal: eonEohalMars,
        eotim,
        eofold: p => eonMuonNatform.natMultiLineString({eoform: f4}),
        eocrom,
        eoric: {'gid': 'p', 'cid': 'p', 'fid': 'p4'},
        eomot: {
          proform: {projection: 'uniwen', scale: 1, rotate: [ 0, 0, 0 ], translate: [450 - 300, 100 - 200, 0] },
        },
        eoload: {
        },
      }
      let p5 = {
        eohal: eonEohalMars,
        eotim,
        eofold: p => eonMuonNatform.natMultiLineString({eoform: f5}),
        eocrom,
        eoric: {'gid': 'p', 'cid': 'p', 'fid': 'p5'},
        eomot: {
          proform: {projection: 'uniwen', scale: 1, rotate: [ 0, 0, 0 ], translate: [150 - 300, 300 - 200, 0] },
        },
        eoload: {
        },
      }
      let p6 = {
        eohal: eonEohalMars,
        eotim,
        eofold: p => eonMuonNatform.natMultiLineString({eoform: f6}),
        eocrom,
        eoric: {'gid': 'p', 'cid': 'p', 'fid': 'p6'},
        eomot: {
          proform: {projection: 'uniwen', scale: 1, rotate: [ 0, 0, 0 ], translate: [250 - 300, 300 - 200, 0] },
        },
        eoload: {
        },
      }
      let p7 = {
        eohal: eonEohalMars,
        eotim,
        eofold: p => eonMuonNatform.natMultiLineString({eoform: f7}),
        eocrom,
        eoric: {'gid': 'p', 'cid': 'p', 'fid': 'p7'},
        eomot: {
          proform: {projection: 'uniwen', scale: 1, rotate: [ 0, 0, 0 ], translate: [350 - 300, 300 - 200, 0] },
        },
        eoload: {
        },
      }
      let p8 = {
        eohal: eonEohalMars,
        eotim,
        eofold: p => eonMuonNatform.natMultiLineString({eoform: f8}),
        eocrom,
        eoric: {'gid': 'p', 'cid': 'p', 'fid': 'p8'},
        eomot: {
          proform: {projection: 'uniwen', scale: 1, rotate: [ 0, 0, 0 ], translate: [450 - 300, 300 - 200, 0] },
        },
        eoload: {
        },
      }

      let animas = [
        p1, // h.mars g.uniwen
        p2, // h.mars g.uniwen
        p3, // h.mars g.uniwen
        p4, // h.mars g.uniwen
        p5, // h.mars g.uniwen
        p6, // h.mars g.uniwen
        p7, // h.mars g.uniwen
        p8, // h.mars g.uniwen

      ]

      return animas
    }

    let enty = () => {}
    enty.z = z
    return enty
  }
  exports.eonZ719aD2forms = anitem
}))
