/* ******************************************
   *    @eonZ757aAxis
   *
   */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports)
    : typeof define === 'function' && define.amd ? define(['exports'], factory)
      : (factory((global.eonZ757aAxis = global.eonZ757aAxis || {})))
}(this, function (exports) {
  'use strict'

  async function anitem (__eo) {
  // .................. eons
    let [
      eonCtlWen,
      eonEohalMars,
      eonEohalNatform,
      eonRenderSvg,
    ] = await Promise.all([
      __eo('xs').b('eon-ctl-wen'),
      __eo('xs').b('eon-eohal-mars'),
      __eo('xs').b('eon-eohal-natform'),
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

      let eotim = {'td': 13800, 't0': 0, 't1': 1, 't2': 1, 't3': 1}

      let proform = {

        projection: 'uniwen',
        translate: [ 0, 0 ],
        scale: 1,
        rotate: [0, 0, 0],
        prerotate: [[[ ctl.rotation ]]],
        lens: [0, 1, Infinity],

      }

      let eocrom = { 'csx': 0, 'cf': [[[444, 999]]], 'cs': [[[444, 999]]], 'cw': [[[0.7, 0.7]]], 'co': [[[0.7, 0.7]]], 'cp': [[[0.9, 0.9]]]}

      // ............................. axisBottom
      let axis1 = {
        eohal: 'axis',
        eofold: p => ({
          type: 'Feature',
          geometry: { type: 'LineString', coordinates: [ [0, 0, 0], [1, 0, 0] ] },
          properties: {},
        }),
        eotim: eotim,
        eoric: {gid: 'ax', cid: 'ax', fid: 'x1'},
        eocrom: eocrom,

        eomot: {
          proform: proform,
        },

        eoload: {
          axis: {
            label: 'space',
            rotate: 0,
            orient: 'axisBottom', // 'axisLeft',
            scaleType: 'scaleLinear', // "scaleTime",
            tickFormat: '.1f', // formatNumber
            tickPadding: 2,
            tickSize: 2,
            domain: [0, 180],
            range: [0, 200],
          },
        },
      }
      // ............................. axisLeft
      let axis2 = {
        eohal: eonEohalMars,
        eofold: p => ({
          type: 'Feature',
          geometry: { type: 'LineString', coordinates: [ [0, 0, 0], [0, 100, 0] ] },
          properties: {},
        }),
        eotim: eotim,
        eoric: {gid: 'ax', cid: 'ax', fid: 'x2'},
        eocrom: eocrom,
        eomot: {
          proform: proform,
        },
        eoload: {
          axis: {
            label: 'space',
            rotate: 0,
            orient: 'axisLeft',
            scaleType: 'scaleLinear',
            tickFormat: '.1f',
            tickPadding: 2,
            tickSize: 2,
            domain: [0, 180],
            range: [0, 200],
          },
        },
      }
      // ............................. axisLeft
      let axis3 = {
        eohal: 'axis',
        eofold: p => ({
          type: 'Feature',
          geometry: { type: 'LineString', coordinates: [ [0, 0, 0], [0, 0, 1] ] },
          properties: {},
        }),
        eotim: eotim,
        eoric: {gid: 'ax', cid: 'ax', fid: 'x3'},
        eocrom: eocrom,
        eomot: {
          proform: proform,
        },
        eoload: {
          axis: {
            label: 'space',
            rotate: 45,
            orient: 'axisLeft', // 'axisTop','axisRight','axisBotton','axisLeft'
            scaleType: 'scaleLinear', // "scaleTime",
            tickFormat: '.1f', // formatNumber
            tickPadding: 2,
            tickSize: 2,
            domain: [0, 180],
            range: [0, 200],
          },
        },
      }

      // .................. animas
      let animas = [

        // axis1, // h.axis
        axis2, // h.axis
        // axis3, // h.axis

      ]

      return animas
    }

    let enty = () => {}
    enty.z = z
    return enty
  }
  exports.eonZ757aAxis = anitem
}))
