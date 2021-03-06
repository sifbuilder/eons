/* ******************************************
   *    @eonZ855dTextpaths
   *
   */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports)
    : typeof define === 'function' && define.amd ? define(['exports'], factory)
      : (factory((global.eonZ855dTextpaths = global.eonZ855dTextpaths || {})))
}(this, function (exports) {
  'use strict'

  async function anitem (__eo) {
  // .................. eons
    let [
      eonCtlWen,
      eonEohalMars,
      eonEohalTextform,
      eonMuonNatform,
      eonMuonProps,
      eonRenderSvg,
    ] = await Promise.all([
      __eo('xs').b('eon-ctl-wen'),
      __eo('xs').b('eon-eohal-mars'),
      __eo('xs').b('eon-eohal-textform'),
      __eo('xs').b('eon-muon-natform'),
      __eo('xs').b('eon-muon-props'),
      __eo('xs').b('eon-render-svg'),
    ])
    try { eonRenderSvg.scenecolor('black') } catch (e) {}
    eonCtlWen.control(eonRenderSvg.svg())

    let z = function () {
    // .................. pics
      let ctl
      try {
        ctl = eonCtlWen().control(eonRenderSvg.svg())
      } catch (e) {
        ctl = () => [0, 0, 0]
      }

      let pi = Math.PI, radians = pi / 180, degrees = 180 / pi,
        sin = Math.sin, cos = Math.cos, sqrt = Math.sqrt,
        cosh = Math.cosh, sinh = Math.sinh,
        epsilon = 1e-5

      let eotim = {'td': 12800, 't0': 0, 't1': 1, 't2': 1, 't3': 1, nostop: 1, tp: t => Math.sin((Math.PI / 2) * t)}

      let conformT = {
        x: {
          'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 1, 'b': 1, // circ
          'ra2': 106, 'v0': 0, 'v1': 1, 'w4': 0, 'seg5': 18, 'pa6': 0, 'pb7': -1,
          'dom3': [ 0, 7 * 360 ],
          'fn0': (e, c) => e[0],
        },
        y: {
          'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 1, 'b': 1, // circ
          'ra2': 106, 'v0': 0, 'v1': 1, 'w4': 0, 'seg5': 18, 'pa6': 0, 'pb7': -1,
          'dom3': [0, 360],
          'fn0': (e, c) => 0.1 * sin(e[0]),
        },
      }

      let conformAB = {
        x: {
          'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 1, 'b': 1, // circ
          'ra2': 106, 'v0': 0, 'v1': 1, 'w4': 0, 'seg5': 18, 'pa6': 0, 'pb7': -1,
          'dom3': [ 0, 7 * 360 ],
          'fn0': (e, c) => e[0],
        },
        y: {
          'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 1, 'b': 1, // circ
          'ra2': 106, 'v0': 0, 'v1': 1, 'w4': 0, 'seg5': 18, 'pa6': 0, 'pb7': -1,
          'dom3': [0, 360],
          'fn0': (e, c) => 0 * sin(e[0]),
        },
      }

      let proformT = {
        projection: 'uniwen',
        scale: [ 0.2, 0.2 ],
        prerotate: [[[ ctl.rotation ]]],
        translate: [ 0, 0, 0 ], // iter
        rotate: [0, 0, 0],
        lens: [0, 1, Infinity ],
      }

      let proformA = {
        projection: 'uniwen',
        scale: [ 0.2, 0.2 ],
        prerotate: [[[ ctl.rotation ]]],
        translate: [ 150, -100, 0 ],
        rotate: [0, 0, 0],
        lens: [0, 1, Infinity ],
      }

      let proformB = {
        projection: 'uniwen',
        scale: [ 0.2, 0.2 ],
        prerotate: [[[ ctl.rotation ]]],
        translate: [ 150, -120, 0 ],
        rotate: [0, 0, 0],
        lens: [0, 1, Infinity ],
      }

      let proformAB = {
        projection: 'uniwen',
        scale: [ 0.2, 0.2 ],
        prerotate: [[[ ctl.rotation ]]],
        translate: [ 150, -140, 0 ],
        rotate: [0, 0, 0],
        lens: [0, 1, Infinity ],
      }

      let eocromT = { 'csx': 7, 'cf': 999, 'co': 0.9, 'cs': 999, 'cw': 0.1, 'cp': 0.99}

      let eocromA = { 'csx': 0, 'cf': 999, 'co': 0.19, 'cs': 999, 'cw': 0.99, 'cp': 0.99 }

      let eocromB = { 'csx': 0, 'cf': 666, 'co': 0.069, 'cs': 444, 'cw': 0.99, 'cp': 0.99 }

      let eocromAB = { 'csx': 20, 'cf': 666, 'co': 0.069, 'cs': 222, 'cw': 0.99, 'cp': 0.99 }

      // ............................. textAni
      let text = `Given two point sets or 
polygons A,B with n and m 
vertices their convolution 
or Minkowski sum 
is their point-wise sum
A+B = {a+b | a ∈ A,b ∈ B}.
Minkowski sums are used 
to plan the motion of an 
object among obstacles 
or to compute the set of
all its admissible positions`

      let textsegment = function (text, t) {
        let s = text // source
        let a = Array.from(s) // discretize source
        let q = a.length // length, number of elems
        let n = Math.ceil(q * t) // elems in time
        let v = a.slice(0, n) // segment in time
        let s1 = v.join('') // rejoin segment

        return s1
      }

      // .................. textAni
      let textAni = {
        eohal: eonEohalTextform,
        eotim: eotim,
        eoric: {gid: 'txtg', cid: 'txtcT', fid: 'txtfT'},

        eofold: ani => {
          let natipros = { eoform: ani.eoload.eoform, ghv: 1, gsa: 1, gco: 0 }
          return eonMuonNatform.natMultiLineString(natipros)
        },
        eomot: {
          proform: proformT,
        },
        eocrom: eocromT,

        eoload: {
          eoform: conformT,
          textform: {
            string: [[[function (t) {
              let txt = this.text
              let linenb = this.linenb
              let ttxt = textsegment(txt, t)
              let sttxt = ttxt.split('\n')

              return sttxt[linenb]
            }]]],
            text: text,
            style: {
              rotate: [[[ 0, 0 ]]],

              // eocromT
              // 'fill': "rgb(255, 215, 0)",
              // 'fill-opacity': 1,
              // 'stroke': "rgb(255, 215, 0)",
              // 'stroke-width': 0.1,
              // 'stroke-opacity': undefined,

              // 'dx': 444,
              // 'dy': 444,
              'font-size': [[[18, 18]]],
              'font-family': 'Verdana', // BankFuturistic, Arial
              // 'height': 56,
              'kerning': 4, // 1
              'lengthAdjust': 'spacing', // spacingAndGlyphs
              'letter-spacing': 1,
              'text-anchor': 'start', // start, middle, end
              'textLength': 0,
              // 'width': 111,
              'word-spacing': 1,
            // 'writing-mode': 'tb',
            },
          },
        },
      }

      let getanis = function (txt = '') {
        let anis = {}
        let a = txt.split('\n')
        for (let i = 0; i < a.length; i++) {
          let ani = eonMuonProps.clone(textAni)
          ani.eoric.fid = textAni.eoric.fid + '_' + i
          ani.eoric.cid = textAni.eoric.cid + '_' + i
          ani.eomot.proform.translate = [-285, 160 - 35 * i]
          ani.eoload.textform.linenb = i
          anis['ani' + '_' + i] = ani
        }
        return anis
      }

      // .................. textA
      let textA = {
        eohal: eonEohalTextform,
        eotim: eotim,
        eoric: {gid: 'txtg', cid: 'txtTA', fid: 'txtfA'},

        eofold: ani => {
          let natipros = { eoform: ani.eoload.eoform, ghv: 1, gsa: 1, gco: 0 }
          return eonMuonNatform.natMultiLineString(natipros)
        },
        eomot: {
          proform: proformA,
        },
        eocrom: eocromA,

        eoload: {
          eoform: conformAB,
          textform: {
            string: [[[function (t) { return this.text }]]],
            text: ` A ▬▬▬▬▬`,
            style: {
              rotate: [[[ 0, 0 ]]],
              // 'dx': 444,
              // 'dy': 444,
              'font-size': [[[9, 9]]],
              'font-family': 'Verdana', // BankFuturistic, Arial
              // 'height': 56,
              'kerning': 4, // 1
              'lengthAdjust': 'spacing', // spacingAndGlyphs
              'letter-spacing': 1,
              'text-anchor': 'start', // start, middle, end
              'textLength': 0,
              // 'width': 111,
              'word-spacing': 1,
            // 'writing-mode': 'tb',
            },
          },
        },
      }

      // .................. textB
      let textB = {
        eohal: eonEohalTextform,
        eotim: eotim,
        eoric: {gid: 'txtg', cid: 'txtcTB', fid: 'txtfB'},

        eofold: ani => {
          let natipros = { eoform: ani.eoload.eoform, ghv: 1, gsa: 1, gco: 0 }
          return eonMuonNatform.natMultiLineString(natipros)
        },
        eomot: {
          proform: proformB,
        },
        eocrom: eocromB,

        eoload: {
          eoform: conformAB,
          textform: {
            string: [[[function (t) { return this.text }]]],
            text: ` B ▬▬▬▬▬`,
            style: {
              rotate: [[[ 0, 0 ]]],
              // 'dx': 444,
              // 'dy': 444,
              'font-size': [[[9, 9]]],
              'font-family': 'Verdana', // BankFuturistic, Arial
              // 'height': 56,
              'kerning': 4, // 1
              'lengthAdjust': 'spacing', // spacingAndGlyphs
              'letter-spacing': 1,
              'text-anchor': 'start', // start, middle, end
              'textLength': 0,
              // 'width': 111,
              'word-spacing': 1,
            // 'writing-mode': 'tb',
            },
          },
        },
      }

      // .................. textAB
      let textAB = {
        eohal: eonEohalTextform,
        eotim: eotim,
        eoric: {gid: 'txtg', cid: 'txtcTAB', fid: 'txtfAB'},

        eofold: ani => {
          let natipros = { eoform: ani.eoload.eoform, ghv: 1, gsa: 1, gco: 0 }
          return eonMuonNatform.natMultiLineString(natipros)
        },
        eomot: {
          proform: proformAB,
        },
        eocrom: eocromAB,

        eoload: {
          eoform: conformAB,
          textform: {
            string: [[[function (t) { return this.text }]]],
            text: ` A+B ▬▬▬▬▬`,
            style: {
              rotate: [[[ 0, 0 ]]],
              // 'dx': 444,
              // 'dy': 444,
              'font-size': [[[9, 9]]],
              'font-family': 'Verdana', // BankFuturistic, Arial
              // 'height': 56,
              'kerning': 4, // 1
              'lengthAdjust': 'spacing', // spacingAndGlyphs
              'letter-spacing': 1,
              'text-anchor': 'start', // start, middle, end
              'textLength': 0,
              // 'width': 111,
              'word-spacing': 1,
            // 'writing-mode': 'tb',
            },
          },
        },
      }
      // .................. scene

      let scene = Object.assign(
        {},
        getanis(text),
        {
          textA,
          textB,
          textAB,
        }
      )

      return scene
    }

    let enty = () => {}
    enty.z = z
    return enty
  }
  exports.eonZ855dTextpaths = anitem
}))
