/* ******************************************
   *    @eonZ619nHandy
   *
   */
  (function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports)
      : typeof define === 'function' && define.amd ? define(['exports'], factory)
        : (factory((global.eonZ619nHandy = global.eonZ619nHandy || {})))
  }(this, function (exports) {
    'use strict'
  
    async function anitem (__eo) {
    // .................. eons
    let [
      eohalSol,
      muonGeoj,
      muonProj3ct,
      muonProfier,
      muonCastel,
      renderPortview,
      renderSvg,
    ] = await Promise.all([
      __eo('xs').e('sol'),
      __eo('xs').m('geoj'),
      __eo('xs').m('proj3ct'),
      __eo('xs').m('profier'),
      __eo('xs').m('castel'),
      __eo('xs').r('portview'),
      __eo('xs').r('svg'),
    ])
    try { renderSvg.scenecolor('black') } catch (e) { }

    // .................. animas
    let z = function () {
      // .................. pics
      let eotim = { 'td': 43800, 't0': 0, 't1': 1, 't2': 1, 't3': 1 }

      let svgdata = {

        width: '232.275mm', height: '145.238mm',
        viewBox: '0 0 878 549',
        path: {
          id: 'hand',
          fill: 'none', stroke: 'black', 'strokeWidth': '1',
          d: `M 240.00,233.38
           C 239.86,233.10 245.44,228.74 253.52,223.37
             266.37,249.93 290.62,229.25 290.62,229.25
             291.86,229.72 308.79,200.67 316.38,192.75
             316.38,192.75 383.75,169.75 385.50,162.62
             379.62,158.25 361.62,148.38 354.67,150.67
             345.62,163.25 322.50,176.38 313.88,178.75
             313.88,178.75 308.00,196.00 308.00,196.67
             308.30,203.12 293.70,222.33 293.62,222.25
             294.60,223.94 284.00,234.88 269.46,233.92
             262.88,234.12 256.50,230.50 254.00,216.67
             255.75,201.50 269.50,157.75 276.00,146.00
             276.00,145.33 314.67,104.67 316.00,103.33
             322.75,94.75 347.00,61.75 356.00,53.33
             365.75,48.75 380.00,51.75 391.33,53.33
             391.33,53.33 409.33,45.33 409.33,45.33
             439.75,52.25 492.25,75.00 516.00,71.33
             533.00,69.50 572.75,76.25 565.33,86.00
             565.33,86.00 391.50,162.50 391.50,162.50
             391.50,162.50 672.67,47.33 672.67,47.33
             687.00,44.25 704.50,78.50 695.75,95.50
             678.50,111.00 449.61,184.22 452.58,186.17
             525.19,159.96 576.09,144.55 609.25,137.50
             609.25,137.50 744.67,306.00 744.67,306.00
             755.00,316.50 793.50,345.00 809.33,366.00
             802.75,410.00 764.25,504.75 721.33,528.67
             722.03,528.13 682.25,494.75 672.67,489.33
             664.38,483.62 626.71,467.72 626.00,468.00
             618.12,464.75 612.12,466.25 604.00,465.33
             604.00,465.33 454.75,416.62 454.75,416.62
             454.75,416.62 410.67,385.33 410.67,385.33
             394.38,377.38 348.38,356.88 329.33,339.33
             324.50,328.50 323.38,315.25 314.00,298.67
             302.25,285.62 291.25,276.50 286.67,258.00
             284.75,253.38 285.62,243.38 292.00,237.75
             295.27,233.82 308.91,230.91 318.88,235.00
             318.88,235.00 356.67,250.00 356.67,250.00
             365.75,256.50 382.00,269.50 389.33,282.67
             407.00,290.75 434.00,293.50 460.00,282.75
             470.33,263.08 468.50,232.50 471.50,207.75
             468.00,207.50 449.50,194.75 447.52,190.86
             419.75,196.25 363.25,216.50 325.52,231.53
             314.16,229.86 307.36,228.18 297.36,230.09
             293.82,232.45 289.10,238.23 284.00,244.67
             276.43,249.39 267.78,251.78 257.56,252.12
             243.43,251.35 235.00,248.35 228.48,245.22
             228.31,245.13 240.00,233.38 240.00,233.38 Z`,
        },
      }
      let extent = svgdata.viewBox.split(' ').map(d => parseInt(d))

      let x0 = extent[0], y0 = extent[1], x1 = extent[2], y1 = extent[3]

      let width = renderPortview.width(), height = renderPortview.height()

      let r0 = width / (x1 - x0)
      let r1 = height / (y1 - y0)
      let rx = Math.sign(r0) * Math.min(Math.abs(r0), Math.abs(r1))
      let ry = -Math.sign(r1) * Math.min(Math.abs(r0), Math.abs(r1))

      let dx = -rx * (x1 - x0) / 2 // - 600 + (878 - 0) / 2 : - 160
      let dy = -ry * (y1 - y0) / 2 // 400 + (549 - 0) / 2 : 675

      let gjdata = muonCastel.castels(svgdata, { start: 0, stop: 0.9, step: 0.091 })

      let nb = muonGeoj.getCoordsLength(gjdata) // show (nb * t) dots,  eg. 894

      let proform = {
        projection: 'uniwen',
        translate: [dx, dy, 0],
        scale: [rx, ry],
        rotate: [0, 0, 0],
        lens: [0, 1, Infinity],
      }

      let project = muonProfier.uniweon(proform)
      let geoData = muonProj3ct(gjdata, project)

      // .................. polyForm
      let polyForm = {

        eohal: eohalSol,
        eotim: eotim,
        eoric: { gid: 'fouriers', cid: 'fouriers', fid: 'fourier' },

        eofold: ani => {
          let anigram = ani, // anigram
            eoload = ani.eoload // eoload

          let unElapsed = ani.eotim.unElapsed // unit time elapsed
          let t = ani.eoload.tf(unElapsed) || unElapsed // time function

          let nbt = Math.ceil(nb * t)
          let csi = t => muonGeoj.getCoordsInRange(geoData, nbt)

          let coords = csi(t).geometry.coordinates

          let ngj = {
            type: 'Feature',
            geometry: { type: 'Polygon', coordinates: [] },
            properties: {
              eocrom: { 'csx': 0, 'cf': 666, 'cs': 111, 'cw': 0.8, 'co': 1, 'cp': 0.9 },
            },
          }

          // ... a single line generates a LineString from muonProj3ct(geoData)
          if (geoData.geometry.type === 'LineString') ngj.geometry.coordinates = Array.of(coords)
          else if (geoData.geometry.type === 'MultiLineString') ngj.geometry.coordinates = coords
          else if (geoData.geometry.type === 'Polygon') ngj.geometry.coordinates = coords

          let rings = ngj.geometry.coordinates // rings in Polygon
          let newFeatureCollection = { type: 'FeatureCollection', features: [] }

          for (let i = 0; i < rings.length; i++) {
            let ring = rings[i]
            let feature = {
              type: 'Feature',
              geometry: { type: 'Polygon', coordinates: [ring] },
              properties: {},
            }
            if (i < rings.length - 1) { // first
              feature.properties.eocrom = { 'csx': 0, 'cf': 555, 'cs': 111, 'cw': 0.8, 'co': 1, 'cp': 1 }
            } else {
              feature.properties.eocrom = { 'csx': 0, 'cf': 555, 'cs': 111, 'cw': 0.8, 'co': 0.1, 'cp': 1 }
            }

            newFeatureCollection.features.push(feature)
          }

          newFeatureCollection.features = Array.of(ngj)

          let geodata = newFeatureCollection

          if (eoload.proform) {
            let proformion = muonProfier.proformion(anigram)
            newFeatureCollection = muonProj3ct(geodata, proformion)
          }

          return newFeatureCollection
        },

        eocrom: { 'csx': 0, 'cf': 555, 'cs': 111, 'cw': 0.9, 'co': 0.72, 'cp': 0.7 },
        eoload: { // eoload in polyForm
          tf: t => t,

        },
      }

      // .................. scene
      let scene = {

        polyForm, // h.sol

      }

      return scene
    }

    let enty = () => { }
    enty.z = z
    return enty
  }
  exports.eonZ619nHandy = anitem
}))