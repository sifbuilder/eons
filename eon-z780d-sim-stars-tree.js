/* ******************************************
   *    @eonZ780dSimStarsTree
   *
   */
  (function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports)
      : typeof define === 'function' && define.amd ? define(['exports'], factory)
        : (factory((global.eonZ780dSimStarsTree = global.eonZ780dSimStarsTree || {})))
  }(this, function (exports) {
    'use strict'
  
    async function anitem (__eo) {
  let [
    d3Force3d,
    ctlRayder,
    ctlWen,
    eohalSol,
    eohalNatform,
    eohalPacer,
    eohalMars,
    muonEoric,
    muonEoforces,
    muonNatform,
    muonProps,
    muonStace,
    renderPortview,
    renderSvg,
  ] = await Promise.all([
    __eo('xs').b('d3-force-3d'),
    __eo('xs').c('rayder'),
    __eo('xs').c('wen'),
    __eo('xs').e('sol'),
    __eo('xs').e('natform'),
    __eo('xs').e('pacer'),
    __eo('xs').e('mars'),
    __eo('xs').m('eoric'),
    __eo('xs').m('eoforces'),
    __eo('xs').m('natform'),
    __eo('xs').m('props'),
    __eo('xs').m('stace'),
    __eo('xs').r('portview'),
    __eo('xs').r('svg'),
  ])
  try { renderSvg.scenecolor('black') } catch (e) {}
  let muonStore = __eo('muonStore')
  // .................. animas
  let z = function () {
    let width = renderPortview.width(),
      height = renderPortview.height()

    // .................... pics
    let eotim = {'td': 24800, 't0': 0, 't1': 1, 't2': 1, 't3': 1}

    // .................. shadeRGBColor
    function shadeRGBColor (color, percent) {
      var f = color.split(','),
        t = percent < 0 ? 0 : 255,
        p = percent < 0 ? percent * -1 : percent,
        R = parseInt(f[0].slice(4)),
        G = parseInt(f[1]),
        B = parseInt(f[2])
      return (
        'rgb(' +
            (Math.round((t - R) * p) + R) +
            ',' +
            (Math.round((t - G) * p) + G) +
            ',' +
            (Math.round((t - B) * p) + B) +
            ')'
      )
    }

    // .................. buildBranch - from branch end build new branch
    const buildBranch = (length, angle, depth, branchWidth, branchColor, maxAngleDelta, branchShrinkage, branches) => {
      let newDepth = depth - 1
      if (newDepth <= 0) { return branches }
      let newBranchWidth = branchWidth * branchShrinkage
      let newBranchColor = shadeRGBColor(branchColor, 0.1)

      let newAngle = angle + maxAngleDelta * (Math.random() * 0.5)
      let newLength = length * (branchShrinkage + Math.random() * (1.0 - branchShrinkage))

      let newbranches = branches
        .reduce((tree, branch) => {
          let x1 = branch[1][0]
          let y1 = branch[1][1]

          let newgen = Array.of(-1, 1).map(direction => {
            let dirAngle = newAngle + maxAngleDelta * (Math.random() * 0.5 * direction)
            let dirLength = newLength * (branchShrinkage + Math.random() * (1.0 - branchShrinkage))

            const x2 = x1 + dirLength * Math.cos(dirAngle)
            const y2 = y1 + dirLength * Math.sin(dirAngle)

            let newbranch = [ [x1, y1], [x2, y2] ]

            return newbranch
          })

          let r = [...tree, ...newgen]
          return r
        }, [])

      let newTree = [...branches, ...newbranches]

      return buildBranch(newLength, newAngle, newDepth, newBranchWidth, newBranchColor, maxAngleDelta, branchShrinkage, newTree)
    }

    // .................. buildTree - from tree init to leaves
    const buildTree = (x0, y0, length, angle, maxDepth, trunkWidth, branchColor, maxAngleDelta, branchShrinkage) => {
      let x1 = x0
      let y1 = y0
      let x2 = x1 + length * Math.cos(angle)
      let y2 = y1 + length * Math.sin(angle)
      let branches = Array.of([ [x1, y1], [x2, y2] ])

      let tree = buildBranch(length, angle, maxDepth, trunkWidth, branchColor, maxAngleDelta, branchShrinkage, branches)
      return tree
    }

    // .................. treeAni
    let treeAni = {

      eohal: eohalSol,

      eofold: ani => {
        let eoload = ani.eoload // eoload

        let newFeatureCollection = {type: 'FeatureCollection', features: []}
        let feature = {
          type: 'Feature',
          geometry: { type: 'MultiLineString', coordinates: []},
          properties: {},
        }

        const maxDepth = eoload.tree.maxDepth,
          trunkWidth = eoload.tree.trunkWidth,
          branchColor = `rgb(${eoload.tree.branchColor[0]}, ${eoload.tree.branchColor[1]}, ${eoload.tree.branchColor[2]})`,
          length = eoload.tree.length0,
          angle = eoload.tree.angle0,
          x0 = eoload.tree.x0,
          y0 = eoload.tree.y0,
          branchShrinkage = eoload.tree.branchShrinkage,
          maxAngleDelta = eoload.tree.maxAngleDelta

        let tree = buildTree(x0, y0, length, angle, maxDepth, trunkWidth, branchColor, maxAngleDelta, branchShrinkage)
        feature.geometry.coordinates = tree

        newFeatureCollection.features.push(feature)
        return newFeatureCollection
      },

      eotim: eotim,
      eoric: { gid: 'ani', cid: 'ani', fid: 'ani1'},
      eocrom: {'csx': 0, 'cf': 555, 'cs': [[[333, 888]]], 'cw': 1.3, 'co': 0.72, 'cp': 0.999},
      eoload: {
        tree: {
          x0: 100,
          y0: -100,
          length0: 60,
          angle0: Math.PI / 2,

          maxDepth: [[[1, 6]]], // 11
          trunkWidth: 6, // 12
          branchColor: [101, 67, 33, 1], // 'rgb(101, 67, 33)',
          branchShrinkage: 0.8,
          maxAngleDelta: Math.PI / 2,
          delay: 100,

        },
      },
    }

    // .................... paceLine
    let paceLine = {

      eohal: eohalPacer,
      eotim,
      eoric: {gid: 'traces', cid: 'traces', fid: 'traceLine'},

      eofold: {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: null,
        },
        properties: {},
      },
      eonode: {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [0, 0, 0],
        },
        properties: {orgen: null, velin: [0, 0, 0], velang: [0, 0, 0], prevous: null, geodelta: null},
      },

      eocrom: {'csx': 0, 'cf': 444, 'cs': 666, 'cw': 0.99, 'co': 0.4, 'cp': 0.99},

      eoload: {
        pacer: { // addItemToPacer for trace

          initN: 0, eventN: 0, autoN: 1, autoP: 0, autoT: 0, outtimed: 0, maxN: 60, geospan: 0,

          eohal: eohalMars,
          pacedAnisort: 'anigram',
          basePaceOnAniView: 'geo',
          addItemToPacer: 1,

          eofold: {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [0, 0, 0],
            },
            properties: {orgen: [0, 0, 0], velin: [0, 0, 0], velang: [0, 0, 0], prevous: [0, 0, 0], geodelta: [0, 0, 0]},
          },

          eonode: function (ani, props) {
            let stace = [0, 0, 0]
            if (props.key === 'init') { // INIT
              // stace is ani's transformed eonode
              stace = muonStace.getLocus([null, null, null], ani)
              if (1 && 1) console.log('stace', stace, ani)
            } else if (props.key === 'auto') { // AUTO
              stace = muonStace.getLocus([null, null, null], ani)
            } else if (props.key === 'event') { // EVENT
              if (ctlRayder.grabbed() !== undefined) {
                let grabbed = ctlRayder.grabbed()
                let x = grabbed[0]
                let y = grabbed[1]
                let z = 0
                stace = {x, y, z }
              }
            }

            let coordinates = stace
            let res = {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: coordinates,
              },
              properties: {orgen: null, velin: [0, 0, 0], velang: [0, 0, 0], prevous: null, geodelta: null},
            }
            return res
          },

        },
      },
    }

    // .................. animas
    let animas = [

      paceLine, // h.pacer
      treeAni, // h.sol
    ]

    return animas
  }

  let enty = () => {}
  enty.z = z
  return enty
}
  exports.eonZ780dSimStarsTree = anitem
}))