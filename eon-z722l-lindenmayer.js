/* ******************************************
   *    @eonZ722lLindenmayer
   *
   */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports)
    : typeof define === 'function' && define.amd ? define(['exports'], factory)
      : (factory((global.eonZ722lLindenmayer = global.eonZ722lLindenmayer || {})))
}(this, function (exports) {
  'use strict'

  async function anitem (__eo) {
  // .................. eons
    let [
      ctlWen,
      eohalMars,
      muonGeoj,
      muonLindenmayer,
      protonUniwen,
      renderSvg,
    ] = await Promise.all([
      __eo('xs').c('wen'),
      __eo('xs').e('mars'),
      __eo('xs').m('geoj'),
      __eo('xs').m('lindenmayer'),
      __eo('xs').p('uniwen'),
      __eo('xs').r('svg'),
    ])
    try { renderSvg.scenecolor('black') } catch (e) {}
    // .................. animas
    let z = function () {
    // .................. pics
      let ctl
      try {
        ctl = ctlWen().control(renderSvg.svg())
      } catch (e) {
        ctl = () => [0, 0, 0]
      }

      let aniForm = {

        eotim: { td: 18200, t0: 0, t1: 1, t2: 1, t3: 1, nostop: 1 },
        eoric: { gid: 'ani', cid: 'ani', fid: 'ani' },
        eohal: eohalMars,

        eofold: ani => {
          let lindenmayers = ani.eoload.lindenmayers
          let qLindenmayers = lindenmayers.length
          let pointer = 0 // Math.floor( (qLindenmayers -1) * ani.eotim.unElapsed)

          let gj = muonLindenmayer.multiLine(lindenmayers[pointer])
          return muonGeoj.timeSeg(gj, ani.eotim.unElapsed)
        // return gj
        },

        eocrom: { 'csx': 0, 'cf': [[[444, 666]]], 'cs': 900, 'cw': [[[0.9, 0.9]]], 'co': [[[0.1, 0.1]]], 'cp': [[[0.9, 0.9]]]},
        eomot: {
          proform: {
            projection: 'uniwen',
            scale: 1,
            translate: {'x': 0, 'y': 0 },
            prerotate: [[[ ctl.rotation ]]],
            rotate: [ 0, 0, 0 ],
          },
        },
        eoload: {

          lindenmayers: [

            { // tree
              linden: {
                axiom: 'FX',
                loopq: 7,
                rules: {
                  X: '[+FX][-FX]',

                },
              },
              mayer: {
                side: 16,
                // angunit: [[[15,15,15,30,30,30,60,60,60,90,90,90,120,15]]],
                angunit: [[[120, 90, 90, 60, 60, 60, 60, 60, 30, 15, 15, 15]]],

                angstart: 90,
                start: [0, 0],
              },
            },

            { // sierpinski triangle
              linden: {
                axiom: 'F',
                loopq: 7,
                rules: {
                  F: 'f-F-f',
                  f: 'F+f+F',
                },
              },
              mayer: {
                side: 1,
                angunit: 45,
                angstart: 0,
                start: [-250, -150],
              },
            },

            { // tree
              linden: {
                axiom: 'F',
                loopq: 7,
                rules: {
                  F1: 'F[+F]F[-F]F',
                  F2: 'F[+F]F',
                  F3: 'F[-F]F',
                },
              },
              mayer: {
                side: 1,
                angunit: 20,
                start: [0, 0],
              },
            },

            { // tree
              linden: {
                axiom: 'F',
                loopq: 7,
                rules: {
                  F: 'F[-F]F[+F]F',
                },
              },
              mayer: {
                side: 1,
                angunit: 20,
                start: [0, 0],
              },
            },

            { // tree
              linden: {
                axiom: 'X',
                loopq: 7,
                rules: {
                  X: '> F[+X]F[-X]+X',
                  F: 'FF',
                },
              },
              mayer: {
                side: 1,
                angunit: 20,
                start: [0, 0],
              },
            },

            { // hilbert
              linden: {
                axiom: 'L',
                loopq: 4,
                rules: {
                  L: '+RF-LFL-FR-',
                  R: '-LF+RFR+FL-',
                },
              },
              mayer: {
                side: 12,
                angunit: 90,
                start: [-100, 0],
              },
            },

            { // sierpinski tiles
              linden: {
                axiom: 'F-F-F-F',
                loopq: 4,
                rules: {
                  F: 'FF-F+F-F-FF',
                },
              },
              mayer: {
                side: 2,
                angunit: 90,
                start: [-100, -100],
              },
            },

            { // sierpinski cross
              linden: {
                axiom: 'F-F-F-F',
                loopq: 4,
                rules: {
                  F: 'FF-F-F-F-F-F+F',
                },
              },
              mayer: {
                side: 2,
                angunit: 90,
                start: [-100, -100],
              },
            },

            { // sierpinski square
              linden: {
                axiom: 'F-F-F-F',
                loopq: 4,
                rules: {
                  F: 'FF-F-F-F-FF',
                },
              },
              mayer: {
                side: 2,
                angunit: 90,
                start: [-100, -100],
              },
            },

            { // sierpinski triang
              linden: {
                axiom: 'F',
                loopq: 8,
                rules: {
                  F: 'f+F+f',
                  f: 'F-f-F',
                },
              },
              mayer: {
                side: 2,
                angunit: 60,
                start: [-100, -100],
              },
            },

            { // dragon
              linden: {
                axiom: 'FX',
                loopq: 8,
                rules: {
                  Y: '+FX--FY+',
                  X: '-FX++FY-',
                },
              },
              mayer: {
                side: 2,
                angunit: 45,
                angstart: 45,
                start: [-100, -100],
              },
            },

            { // grid
              linden: {
                axiom: '-X',
                loopq: 8,
                rules: {
                  Y: '+FX--FY+',
                  X: '-FX++FY-',
                },
              },
              mayer: {
                side: 12,
                angunit: 90,
                angstart: 90,
                start: [-100, -100],
              },
            },

            { // gosper
              linden: {
                axiom: '-FR',
                loopq: 3,
                rules: {
                  L: 'FLFL-FR-FR+FL+FL-FR-FRFL+FR+FLFLFR-FL+FR+FLFL+FR-FLFR-FR-FL+FL+FRFR-',
                  R: '+FLFL-FR-FR+FL+FLFR+FL-FRFR-FL-FR+FLFRFR-FL-FRFL+FL+FR-FR-FL+FL+FRFR',
                },
              },
              mayer: {
                side: 2,
                angunit: 90,
                start: [-100, -100],
              },
            },

            { // gosper
              linden: {
                axiom: 'F++F++F++F',
                loopq: 7,
                rules: {
                  F: 'F+F-F',
                },
              },
              mayer: {
                side: 2,
                angunit: 45,
                start: [-100, -100],
              },
            },

            { // penrose1
              linden: {
                axiom: '+WF--XF---YF--ZF',
                loopq: 0,
                rules: {
                  W: 'YF++ZF----XF[-YF----WF]++',
                  X: '+YF--ZF[---WF--XF]+',
                  Y: '-WF++XF[+++YF++ZF]-',
                  Z: '--YF++++WF[+ZF++++XF]--XF',
                },
              },
              mayer: {
                side: 6,
                angunit: 36,
                angstart: 0,
                start: [-100, -100],
              },
            },

            { // plant1
              linden: {
                axiom: 'X',
                loopq: 8,
                rules: {
                  X: 'F[-X]F[-X]+F[X]',
                  F: 'FF',
                },
              },
              mayer: {
                side: 0.6,
                angunit: 36,
                angstart: 60,
                start: [-150, -150],
              },
            },

            { // treegrid
              linden: {
                axiom: 'X',
                loopq: 3,
                rules: {
                  X: 'FY[+FY][--FY]FY',
                  F: 'FX[++FX][-FX]FX',
                },
              },
              mayer: {
                side: 6,
                angunit: 60,
                angstart: 0,
                start: [-100, -100],
              },
            },

            { // sierpinski
              linden: {
                axiom: 'FXF--FF--FF',
                loopq: 6,
                rules: {
                  F: 'FF',
                  X: '--FXF++FXF++FXF--',
                },
              },
              mayer: {
                side: 6,
                angunit: 60,
                angstart: 0,
                start: [-100, -100],
              },
            },

            { // snake
              linden: {
                axiom: 'FL',
                loopq: 3,
                rules: {
                  L: 'FL-FR--FR+FL++FLFL+FR-',
                  R: '+FL-FRFR--FR-FL++FL+FR',
                },
              },
              mayer: {
                side: 4,
                angunit: 60,
                angstart: 0,
                start: [-100, -100],
              },
            },

            { // Koch Island.
              linden: {
                axiom: '-F--F--F',
                loopq: 5,
                rules: {
                  F: 'F+F--F+F',
                },
              },
              mayer: {
                side: 2,
                angunit: 60,
                angstart: 0,
                start: [0, 0],
              },
            },

            { // tree
              linden: {
                axiom: 'F ',
                loopq: 7,
                rules: {
                  F: 'F[+F][-F]',
                },
              },
              mayer: {
                side: 24,
                angunit: 20,
                angstart: 90,
                start: [0, -100],
                randomizeStep: 20, // %
                randomizeAngle: 20, // %
              },
            },

            { // Lawrence
              linden: {
                axiom: 'W',
                loopq: 7,
                rules: {
                  W: '+++X--F--ZFX+',
                  X: '---W++F++YFW-',
                  Y: '+ZFX--F--Z+++',
                  Z: '-YFW++F++Y---',
                },
              },
              mayer: {
                side: 2,
                angunit: 30,
                angstart: 30,
                start: [0, 0],
              },
            },

            { // Penrose3 double penrose
              linden: {
                axiom: '[N]++[N]++[N]++[N]++[N]',
                loopq: 4,
                rules: {
                  M: 'OF++PF----NF[-OF----MF]++',
                  N: '+OF--PF[---MF--NF]+',
                  O: '-MF++NF[+++OF++PF]-',
                  P: '--OF++++MF[+PF++++NF]--NF',
                  F: '',
                },
              },
              mayer: {
                side: 24,
                angunit: 36,
                angstart: 0,
                start: [0, 0],
              },
            },
          ],

        },
      }

      // .................. animas
      let animas = [
        aniForm, // h.mars
      ]
      return animas
    }

    let enty = () => {}
    enty.z = z
    return enty
  }
  exports.eonZ722lLindenmayer = anitem
}))