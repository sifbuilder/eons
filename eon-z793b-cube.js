/* ******************************************
   *    @eonZ793bCube
   *
   */
  (function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports)
      : typeof define === 'function' && define.amd ? define(['exports'], factory)
        : (factory((global.eonZ793bCube = global.eonZ793bCube || {})))
  }(this, function (exports) {
    'use strict'
  
    async function anitem (__eo) {
  let [
    d3,
    d3Geo,
    THREE,
    ctlWen,
    eohalMars,
    eohalSol,
    eohalTextform,
    muonGeom,
    muonNatform,
    muonNets,
    muonProps,
    muonGeovoro,
    renderPortview,
    renderWebgl,
  ] = await Promise.all([
    __eo('xs').b('d3'),
    __eo('xs').b('d3-geo'),
    __eo('xs').b('three'),
    __eo('xs').c('wen'),
    __eo('xs').e('mars'),
    __eo('xs').e('sol'),
    __eo('xs').e('textform'),
    __eo('xs').m('geom'),
    __eo('xs').m('natform'),
    __eo('xs').m('nets'),
    __eo('xs').m('props'),
    __eo('xs').m('geovoro'),
    __eo('xs').r('portview'),
    __eo('xs').r('webgl'),
  ])
  try { renderSvg.scenecolor('black') } catch (e) {}
  let z = function () {
  // .................. pics

    let epsilon = 1e-6, epsilon2 = epsilon * epsilon, asin = Math.asin
    let atan = Math.atan, abs = Math.abs
    let pi = Math.PI, degrees = 180 / pi, asin1_3 = Math.asin(1 / 3)
    let sqrt = Math.sqrt
    let theta = atan(0.5) * degrees,
      sin = Math.sin, cos = Math.cos

    const eotim = {'td': 9800, 't0': 0, 't1': 1, 't2': 1, 't3': 1, nostop: 1}

    let def = `
:name
cube
:number
1
:symbol
{4,3}	@P sub 4 @
:dual
octahedron
:sfaces
6 6{4}
:svertices
8 8(@4 sup 3@)
:net
6 4
4 4 3 7 8
4 5 4 8 9
4 1 0 3 4
4 3 2 6 7
4 8 7 10 11
4 11 10 12 13
:solid
6 4
4 15 14 18 19
4 17 15 19 21
4 17 16 14 15
4 14 16 20 18
4 19 18 20 21
4 21 20 16 17
:hinges
5
0 0 2 2 1.5707963267948966
0 1 3 3 1.5707963267948966
0 2 4 0 1.5707963267948966
0 3 1 1 1.5707963267948966
5 0 4 2 1.5707963267948966
:dih
1
12 4 4 1.5707963267948966
:vertices
22 14
-1.5[-3/2] -.5[-1/2] 0[0]
-1.5[-3/2] .5[1/2] 0[0]
-.5[-1/2] -1.5[-3/2] 0[0]
-.5[-1/2] -.5[-1/2] 0[0]
-.5[-1/2] .5[1/2] 0[0]
-.5[-1/2] 1.5[3/2] 0[0]
.5[1/2] -1.5[-3/2] 0[0]
.5[1/2] -.5[-1/2] 0[0]
.5[1/2] .5[1/2] 0[0]
.5[1/2] 1.5[3/2] 0[0]
1.5[3/2] -.5[-1/2] 0[0]
1.5[3/2] .5[1/2] 0[0]
2.5[5/2] -.5[-1/2] 0[0]
2.5[5/2] .5[1/2] 0[0]
-3.5 -1.5 -2.0000000000000001
-3.5000000000000001 -1.4999999999999999 -1
-3.5 -.49999999999999994 -2.0000000000000002
-3.5 -.49999999999999987 -1.0000000000000001
-2.5 -1.5 -2.0000000000000001
-2.5 -1.4999999999999999 -1
-2.5 -.49999999999999994 -2.0000000000000002
-2.5 -.49999999999999992 -1.0000000000000001
:EOF`

    // .................. facesAni anima
    let facesAni = {

      eohal: eohalMars,
      eotim: eotim,
      eoric: {gid: 'facesAni', cid: 'facesAni', fid: 'facesAni'},

      eofold: anitem => {
        let tim = anitem.eoload.tim
        let colors = anitem.eoload.colors

        let parts = muonNets.parse({text: def})

        let net = {
          type: 'Feature',
          geometry: {
            type: 'MultiPoint',
            coordinates: parts.verts,
          },
          properties: {
            sort: 'threeobject',
            faces: parts.faces,
            hinges: parts.hinges,
            colors: colors,
            renderData: {
              t: tim,
              docenter: 1,
            },
          },
        }

        return net
      },

      eocrom: {'csx': 0, 'cf': 999, 'cs': 777, 'cw': 0.6, 'co': 0.999, 'cp': 0.999},

      eomot: {
        proform: {

          projection: 'uniwen',
          scale: [ [[[1, 3]]], [[[1, 3]]], [[[1, 3]]]],
          translate: [ 0, 0, 0 ],
          rotate: [ 0, 0, 0 ],
          lens: [0, 1, Infinity],
        },

      },
      eoload: {
        tim: [[[0, 0.2, 1]]],
        colors: [
          [ 0.7, 0.5, 0.2], // gold
          [ 0.0, 0.2, 0.99 ],
          [ 0.0, 0.99, 0.09 ],
        ],
      },
    }

    // .................. cameraOrthoAni anima
    let cameraOrthoAni = {

      eotim: eotim,
      eoric: {gid: 'camera', cid: 'camera', fid: 'cameraOrthoAni'},
      eohal: eohalSol,

      eofold: ani => {
        let json = {
          type: 'Feature',
          geometry: { type: 'Point', coordinates: [0, 0, 0] },
          properties: ani.eoload.properties,
        }
        return json
      },
      eoload: {
        properties: {

          sort: 'camera',
          type: 'OrthographicCamera',
          name: 'Orthographic',

          left: -(3 / 2) * 3.0,
          right: (3 / 2) * 3.0,
          top: 3.0,
          bottom: -3.0,
          near: 0.001,
          far: 20,

          position: [0, 0, -9],
          rotation: [0, 0, 0],
          distance2nodesFactor: 1,
          lookAt: [0, 0, 0],
        },

      },
    }
    // .................. textAni
    let net = muonNets.parse({text: def})

    let text = `(${net.number}) ${net.name}
symbol: ${net.symbol}
dual: ${net.dual}`

    let textsegment = function (text, t) {
      let s = text // source
      let a = Array.from(s) // discretize source
      let q = a.length // length, number of elems
      let n = Math.ceil(q * t) // elems in time
      let v = a.slice(0, n) // segment in time
      let s1 = v.join('') // rejoin segment

      return s1
    }
    let textAni = {
      eohal: eohalTextform,
      eotim: eotim,
      eoric: {gid: 'txtg', cid: 'txtcT', fid: 'txtfT'},

      eofold: ani => {
        let natipros = { eoform: ani.eoload.eoform, ghv: 1, gsa: 1, gco: 0 }
        return muonNatform.natMultiLineString(natipros)
      },
      eomot: {
        proform: {
          projection: 'uniwen',
          scale: [ 0.2, 0.2 ],

          translate: [ 0, 0, 0 ], // iter
          rotate: [0, 0, 0],
          lens: [0, 1, Infinity ],
        },
      },
      eocrom: { 'csx': 7, 'cf': 999, 'co': 0.9, 'cs': 999, 'cw': 0.1, 'cp': 0.99},

      eoload: {
        eoform: {
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
        },
        textform: {
          string: [[[function (t) {
            let txt = this.text
            let linenb = this.linenb
            let sttxt = txt.split('\n')
            return sttxt[linenb]
          }]]],
          text: text,
          style: {
            rotate: [[[ 0, 0 ]]],

            'font-size': [[[12, 12]]],
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
        let ani = muonProps.clone(textAni)
        ani.eoric.fid = textAni.eoric.fid + '_' + i
        ani.eoric.cid = textAni.eoric.cid + '_' + i
        ani.eomot.proform.translate = [75, -150 - 15 * i]
        ani.eoload.textform.linenb = i
        anis['ani' + '_' + i] = ani
      }
      return anis
    }
    // .................. cameraOrthoAni anima
    let ambientLight = {

      eotim: eotim,
      eoric: {gid: 'light', cid: 'light', fid: 'AmbientLight'},
      eohal: eohalSol,

      eofold: anitem => {
        let eoload = anitem.eoload
        let json = { // Feature
          type: 'Feature',
          geometry: { type: 'Point', coordinates: [0, 0, 0] },
          properties: anitem.eoload.light,
        }

        return json
      },
      eoload: {
        light: {
          sort: 'light',
          type: 'AmbientLight',
          name: 'AmbientLight',
          color: 0xeeeeee,
          intensity: 0.6,
          position: [400, 400, 400],
        },
      },

    }
    // .................. scene
    let scene = Object.assign(
      {},
      getanis(text),
      {
        facesAni, // h.mars
        cameraOrthoAni, // h.sol
        ambientLight, // h.sol
      }
    )

    return scene
  }

  let enty = () => {}
  enty.z = z
  return enty
}
  exports.eonZ793bCube = anitem
}))