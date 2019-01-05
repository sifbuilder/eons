/*******************************************
 *    @muonScene
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports)
    : typeof define === 'function' && define.amd ? define(['exports'], factory)
      : (factory((global.muonScene = global.muonScene || {})))
}(this, function (exports) {
  'use strict'

  async function muonScene (__eo = {}) {
    let [
      ctlEul,
      ctlWen,
      ctlVersor,
      ckey,
      ctlTimer,
      ctlRayder,
      renderSvg,
    ] = await Promise.all([
      __eo('xs').c('eul'),
      __eo('xs').c('wen'),
      __eo('xs').c('versor'),
      __eo('xs').c('key'),
      __eo('xs').c('timer'),
      __eo('xs').c('rayder'),
      __eo('xs').r('svg'),
    ])

    let manimation = __eo('muonAnimation')

    let state = {}
    state.scene = {
      canvas: 0,
      svg: 0, // SVG
      webgl: 0, // WEBGL
      bck: 0, // BCK IMAGE
      img: 'zimg-black.jpg', // BCK IMAGE
      wen: 0, // SVG WEN
      versor: 0, // SVG VERSOR
      gui: 0, // GUI https://github.com/dataarts/dat.gui
      key: 0, // KEYBRD CONTROLS
      ray: 0, // RAYDER mouse control
      fps: 0,
      stats: 0,
    }

    // .................. scene
    let scenify = function (p) {
      // ............................. ray control animation
      // if ray, add ray controls to svg
      if (p.ray && p.ray !== state.ray) {
        state.ray = 1
        let svg = renderSvg.svg()
        ctlRayder.control(svg)
      }

      // ............................. key control animation
      if (p.key && p.key !== state.scene.key) {
        state.scene.key = 1

        if (ckey !== undefined) {
          ckey.start() // KEYBRD CONTROLS
          let controltimerLeftArrowAlt = () => { // LEFT ARROW
            if (manimation.animationStop !== undefined) {
              console.log('controltimerLeftArrowAlt')
              if (ctlTimer.started()) {
                ctlTimer.stop()
              } else {
                ctlTimer.resume()
              }
            }
          }
          ckey.subscribe(controltimerLeftArrowAlt, 'leftArrowAlt')
        }

        if (ckey !== undefined) {
          let controltimerUpArrowAlt = () => { // UP ARROW
            console.log('controltimerUpArrowAlt')
            ctlWen.control(renderSvg.svg()) // SVG WEN
          }
          ckey.subscribe(controltimerUpArrowAlt, 'upArrowAlt')
        }

        let controltimerRightArrowAlt = () => { // RIGHT ARROW
          if (manimation.animationStop !== undefined) {
            if (ctlTimer.started()) {
              ctlTimer.stop()
            } else {
              ctlTimer.resume()
            }
          }
        }
        ckey.subscribe(controltimerRightArrowAlt, 'rightArrowAlt')
      }
    }

    let enty = {}
    enty.scenify = scenify
    enty.scene = _ => _ !== undefined ? (state.scene = _, enty) : state.scene
    return enty
  }

  exports.muonScene = muonScene
}))
