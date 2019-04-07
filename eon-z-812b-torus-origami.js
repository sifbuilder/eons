/* ******************************************
 *    @z812bTorusOrigami
 *
 */
;(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? factory(exports)
    : typeof define === 'function' && define.amd
      ? define(['exports'], factory)
      : factory((global.z812bTorusOrigami = global.z812bTorusOrigami || {}))
})(this, function (exports) {
  'use strict'

  // .................. anitem
  async function anitem (__eo) {
    // .................. eons
    let [
      ctlWen,
      ctlVersor,
      eohalMars,
      muonNatform,
      renderWebgl,
      renderSvg,
    ] = await Promise.all([
      __eo('xs').c('wen'),
      __eo('xs').c('versor'),
      __eo('xs').e('mars'),
      __eo('xs').m('natform'),
      __eo('xs').r('webgl'),
      __eo('xs').r('svg'),
    ])
    try {
      renderSvg.scenecolor('black')
    } catch (e) {}
    // .................. animas
    let z = function () {
      // .................. pics
      let ctl
      try {
        ctl = ctlWen().control(renderSvg.svg())
      } catch (e) {
        ctl = () => [0, 0, 0]
      }

      let sin = Math.sin,
        cos = Math.cos

      let fact = n => (n - 1 > 0 ? n * fact(n - 1) : n)
      let fact0 = 1,
        fact1 = 1,
        fact2 = 2,
        fact3 = 6,
        fact4 = 24,
        fact5 = 120,
        fact6 = 720,
        fact7 = 5040,
        fact8 = 40320,
        fact9 = 362880
      let infact0 = 1 / fact0,
        infact1 = 1 / fact1,
        infact2 = 1 / fact2,
        infact3 = 1 / fact3,
        infact4 = 1 / fact4,
        infact5 = 1 / fact5,
        infact6 = 1 / fact6,
        infact7 = 1 / fact7,
        infact8 = 1 / fact8,
        infact9 = 1 / fact9

      let cost = [infact0, 0, -infact2, 0, infact4, 0, -infact6, 0, infact8]
      let sint = [0, infact1, 0, -infact3, 0, infact5, 0, -infact7, 0, infact9]
      let pihalf = Math.PI / 2

      // ............................. pics
      let eotim = {
        td: 18600,
        t0: 0,
        t1: 1,
        t2: 1,
        t3: 1,
        nostop: 1,
        tf: t => 1 + sin(pihalf + pihalf * t),
      }

      let conformSphere = {
        x: {
          m1: 4,
          m2: 4,
          n1: 2,
          n2: 2,
          n3: 2,
          a: 1,
          b: 1, // circ
          ra2: 60,
          v0: 0,
          v1: 1,
          w4: 0,
          seg5: 12,
          pa6: 0,
          pb7: -1,
          dom3: [-180, 180],
          c: [],
          e: [cost, 1, 1, cost],
          // 'fn0': (e,c) => {
          // return c[0] * cos(e[0]) * c[2] * cos(e[3])
          // },
        },
        y: {
          m1: 4,
          m2: 4,
          n1: 2,
          n2: 2,
          n3: 2,
          a: 1,
          b: 1, // circ
          ra2: 60,
          v0: 0,
          v1: 1,
          w4: 0,
          seg5: 12,
          pa6: 0,
          pb7: -1,
          dom3: [-180, 180],
          fn0: (e, c, dax) => {
            return c[1] * sin(e[0]) * c[2] * cos(e[3])
          },
        },

        z: {
          m1: 4,
          m2: 4,
          n1: 2,
          n2: 2,
          n3: 2,
          a: 1,
          b: 1, // circ
          ra2: 60,
          v0: 0,
          v1: 1,
          w4: 0,
          seg5: 12,
          pa6: 0,
          pb7: -1,
          dom3: [-90, 90],
          c: [], // [1, 1, [0,1], 1],
          e: [1, 1, 1, sint], // 1 * sin(v)
          // 'fn0': (e,c) => c[2] * sin(e[3]) ,
        },

        w: {
          m1: 4,
          m2: 4,
          n1: 2,
          n2: 2,
          n3: 2,
          a: 1,
          b: 1, // circ
          ra2: 60,
          v0: 0,
          v1: 1,
          w4: 0,
          seg5: 12,
          pa6: 0,
          pb7: -1,
          dom3: [-90, 90],
          // c: [ 0, 1 ],
          // e: [0, [1, 0, 0, 0, 0, 0, 0, 0, 0, 0] ], // 1 * id(q)
          fn0: (e, c) => c[3] * cos(e[2]),
        },
      }

      let conformLight = {
        x: {
          m1: 4,
          m2: 4,
          n1: 2,
          n2: 2,
          n3: 2,
          a: 1,
          b: 1, // circ
          ra2: 120,
          v0: 0,
          v1: 1,
          w4: 0,
          seg5: 18,
          pa6: 0,
          pb7: -1,
          dom3: [90, 270],
          c: [5, 1, 5, 1],
          // e: [ cost, 1, 1, cosht ],
          // e: [cost, 1, 1, cost],
          // 'fn0': (e, c) => c[0] * (10 + 5 * cos(e[0])) * c[2] * cos(e[3]),
          'fn0': (e, c, d) => e[0] * cos(e[0]) * d.c[2] * cos(e[3]),
        },
        y: {
          m1: 4,
          m2: 4,
          n1: 2,
          n2: 2,
          n3: 2,
          a: 1,
          b: 1, // circ
          ra2: 120,
          v0: 0,
          v1: 1,
          w4: 0,
          seg5: 18,
          pa6: 0,
          pb7: -1,
          dom3: [90, 270],
          c: [ 5, 1, 5, 1],
          // e: [ 1 , [0, [[[9,0]]], [[[-10, 1]]] ], 1 , 1 ]
          // e: [ 1 ,  [0, 0, 1, 0 ], 1, 1,  ]
          e: [cost, 1, 1, sint],
          // fn0: (e, c) => c[1] * (10 + 5 * cos(e[0])) * c[2] * sin(e[3]),
          fn0: (e, c, d) => e[0] * cos(e[0]) * d.c[2] * sin(e[3]),
        },

        z: {
          m1: 4,
          m2: 4,
          n1: 2,
          n2: 2,
          n3: 2,
          a: 1,
          b: 1, // circ
          ra2: 120,
          v0: 0,
          v1: 1,
          w4: 0,
          seg5: 18, // [[[2, 2, 12, 12, 18]]],
          pa6: 0,
          pb7: -1,
          dom3: [-180, 180],
          // c: [1, 1, 1, [0,1]],
          // e: [ 1, 1, sint, 1 ], // 1 * sin(v)
          fn0: (e, c) => c[3] * 5 * sin(e[0]),
        },

        w: {
          m1: 4,
          m2: 4,
          n1: 2,
          n2: 2,
          n3: 2,
          a: 1,
          b: 1, // circ
          dom3: [-180, 180],
          // c: [ 0, 0 ],
          // e: [0, [1, 1, 0, 0, 0, 0, 0, 0, 0, 0] ], // 1 * id(q)
          fn0: (e, c) => c[3] * cos(e[2]),
        },
      }

      // ............................. lightAni
      let lightAni = {
        eohal: eohalMars,
        eofold: ani => muonNatform.natMultiLineString({ eoform: ani.eoform }),
        eotim,
        eoric: { gid: 'q', cid: 'q', fid: 'q1' },
        eomot: {
          proform: {
            projection: 'uniwen',
            scale: [0.1, 0.1],
            prerotate: [[[ctl.rotation]]],
            translate: [0, 0, 0],
            rotate: [ 0, 0, 0 ],
            // rotate: [
            //   [[[0, 90, 0, 0, 45, 45, 0, 0]]],
            //   [[[0, 6, 0, 36, 36, 90, 180, 180]]],
            //   [[[0, 6, 0, 0, 45, 45, 45, 45]]],
            // ],
            lens: [0, 1, Infinity],
          },
        },
        eocrom: {
          csx: 0,
          cf: [[[666, 333, 666]]],
          co: [[[0.069, 0.06, 0.069]]],
          cs: [[[333, 333, 333]]],
          cw: [[[0.99, 0.99, 0.99]]],
          cp: [[[0.99, 0.99]]],
        },
        eoform: conformLight,
        eoload: {},
      }
      // ............................. sphereAni
      let sphereAni = {
        eotim: eotim,
        eohal: eohalMars,
        eoric: { gid: 'q', cid: 'q', fid: 'q2' },

        eofold: ani =>
          muonNatform.natMultiLineString({ eoform: ani.eoload.eoform }),

        eomot: {
          proform: {
            projection: 'uniwen',
            scale: [1.5, 1.5],
            prerotate: [[[ctl.rotation]]],
            translate: [[0, 0, 0]],
            rotate: [
              [[[0, 0, 36, -64, -64, -64]]],
              [[[0, 36, 36, 36, 36, 36]]],
              [[[0, 12, 36, 90, 12, 0]]],
            ],
            lens: [0, 1, Infinity],
          },
        },
        eocrom: {
          csx: 0,
          cf: [[[666, 333, 666]]],
          co: [[[0.069, 0.06, 0.069]]],
          cs: [[[333, 333, 333]]],
          cw: [[[0.0099, 0.0099, 0.99]]],
          cp: [[[0.99, 0.99]]],
        },
        eoload: {
          eoform: conformSphere,
        },
      }
      // ............................. animas
      let animas = [
        lightAni, // h.mars
        // sphereAni, // h.mars
      ]

      return animas
    }

    let enty = () => {}
    enty.z = z
    return enty
  }
  exports.z812bTorusOrigami = anitem
})
