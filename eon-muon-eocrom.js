/***********
 *    @muonEocrom
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports)
    : typeof define === 'function' && define.amd ? define(['exports'], factory)
      : (factory((global.muonEocrom = global.muonEocrom || {})))
}(this, function (exports) {
  'use strict'

  async function muonEocrom (__mapper = {}) {
    let [
      d3interpolate,
      d3scale,
    ] = await Promise.all([
      __mapper('xs').b('d3-interpolate'),
      __mapper('xs').b('d3-scale'),
    ])

    function shadeRGBColor (color) {
      let p = 255,
        R = color[0],
        G = color[1],
        B = color[2]
      return (
        'rgb(' +
            (Math.round((t - R) * p) + R) + ',' +
            (Math.round((t - G) * p) + G) + ',' +
            (Math.round((t - B) * p) + B) + ')'
      )
    }

    // .................. color
    function color (d = 0) {
      let colors = {}

      colors.scales = {
        ambar: d3scale.scaleLinear().domain([0, 0.50, 1]).range(['black', '#FF2400', '#f8a413']), // 0 - black scarlet ambar
        redblue: d3scale.scaleLinear().domain([0, 0.33, 0.66, 1]).range(['wheat', 'red', 'blue', 'wheat' ]), // 1
        snow: d3scale.scaleLinear().domain([0, 0.33, 0.66, 1]).range(['#3e2707', '#8e5e0b', '#f8a413', '#E1E7E4']), // 2 - brown orange ambar ice
        browngreen: d3scale.scaleLinear().domain([0, 0.2, 0.5, 0.7, 1]).range(['#380100', '#381500', '#382600', '#383f00', '#389700', '#389700']), // 3
        bos: d3scale.scaleLinear().domain([0, 0.5, 1]).range(['black', '#FF2400', 'Wheat']), // 4 ex. 0
        wheat: d3scale.scaleLinear().domain([0, 0.5, 1]).range(['black', 'Wheat', '#FF2400']), // 5
        red: d3scale.scaleLinear().domain([0, 0.5, 1]).range(['#FF2400', 'Yellow']), // 6
        ry: d3scale.scaleLinear().domain([0, 1]).range(['red', 'yellow']), // 7
        bar: d3scale.scaleLinear().domain([0, 0.5, 1]).range(['black', '#FF2400', 'Yellow']), // 8
        lab: d3interpolate.interpolateLab('#FF2400', 'yellow'), // 9
        hsl: d3interpolate.interpolateLab('amber', 'steelblue'), // 10
        rbl: d3interpolate.interpolateLab('red', 'blue'), // 11
        plasma: d3interpolate.interpolatePlasma, // 12
        cool: d3interpolate.interpolateCool, // 13
        warm: d3interpolate.interpolateWarm, // 14
        magma: d3interpolate.interpolateMagma, // 15
        inferno: d3interpolate.interpolateInferno, // 16
        viridis: d3interpolate.interpolateViridis, // 17
        cubehelex: d3interpolate.interpolateCubehelexDefault, // 18
        rainbow: d3interpolate.interpolateRainbow, // 19
        bluered: d3scale.scaleLinear().domain([0, 0.5, 1]).range(['blue', 'Wheat', 'red' ]),  // 20
        blueblack: d3scale.scaleLinear().domain([0, 0.5, 1]).range(['blue', 'Wheat', 'black' ]), // 21
        redblack: d3scale.scaleLinear().domain([0, 0.5, 1]).range(['Black', '#FF2400',  'Steelblue' ]), // 22

      }

      colors.color = colors.scales.bos
      colors.array = Object.keys(colors.scales).map(key => colors.scales[key])
      return colors.array[Math.round(d)]
    }

    // .................. kolor
    let kolor = (v, d = 0) => color(d)(v / 1000)

    // .................. getStyle - process style attributes
    let getStyle = function (eocrom) {
      let style = {}
      if (eocrom !== undefined) {
        if (eocrom.csx === undefined) eocrom.csx = 0

        if (eocrom.cf !== undefined && eocrom.csx !== undefined) style['fill'] = kolor(eocrom.cf, eocrom.csx)
        if (eocrom.cs !== undefined && eocrom.csx !== undefined) style['stroke'] = kolor(eocrom.cs, eocrom.csx)
        if (eocrom.co !== undefined) style['fill-opacity'] = eocrom.co
        if (eocrom.cw !== undefined) style['stroke-width'] = eocrom.cw
        if (eocrom.cp !== undefined) style['stroke-opacity'] = eocrom.cp
      }

      return style
    }

    // .................. getColor
    let getColor = (v, s = 0) => kolor(v, s)

    // .................. @m.eocrom.geocromer(anigram, json)
    let geocromer = function (anigram, json) {
      if (json !== undefined && json !== null) {
        if (json.type === undefined) {

        } else if (typeof anigram.eocrom !== 'object') {

        } else if (json.type === 'Feature') { // Feature
          let feature = json

          let eocrom = {}, featureStyle = {}
          if (feature.properties !== undefined && feature.properties.eocrom !== undefined) {
            eocrom = feature.properties.eocrom
          } else if (anigram.eocrom) {
            eocrom = anigram.eocrom
          }

          let jsonStyle = getStyle(eocrom)

          if (feature.properties !== undefined && feature.properties.style !== undefined) {
            featureStyle = feature.properties.style
          }

          if (feature.properties === undefined) feature.properties = {}
          feature.properties.style = Object.assign(jsonStyle, featureStyle)
        } else if (json.type === 'FeatureCollection') {
          for (let i = 0; i < json.features.length; i++) {
            let feature = json.features[i]
            feature = geocromer(anigram, feature)
          }
        } else {
          console.log('m.eocrom.geocromer nothing done')
        }
      }

      return json
    }

    // eocrom definition

    let getdefault = function () {
      let res = { 'csx': 0, 'cf': 500, 'co': 1, 'cs': 500, 'cw': 1, 'cp': 1 }

      return res
    }

    // .................. enty
    function enty () { return enty }
    enty.geocromer = geocromer
    enty.getdefault = getdefault
    enty.getColor = getColor

    return enty
  }

  exports.muonEocrom = muonEocrom
}))
