/* ******************************************
   *    @eonZ620aTree
   *
   */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports)
    : typeof define === 'function' && define.amd ? define(['exports'], factory)
      : (factory((global.eonZ620aTree = global.eonZ620aTree || {})))
}(this, function (exports) {
  'use strict'

  async function anitem (__eo) {
  // .................. eons
    let [
      eonDatLicht5, // eslint-disable-line no-unused-vars
      eonEohalSol,
      eonRenderSvg,
    ] = await Promise.all([
      __eo('xs').b('eon-dat-licht5'),
      __eo('xs').b('eon-eohal-sol'),
      __eo('xs').b('eon-render-svg'),
    ])
    try { eonRenderSvg.scenecolor('black') } catch (e) {}
    // .................. animas
    let z = function () {
    // .................. pics
      let eotim = {'td': 16800, 't0': 0, 't1': 1, 't2': 1, 't3': 1}

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
      // if (1 && 1) console.log('buildBranch', length, angle, depth, branchWidth)

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

        eohal: eonEohalSol,

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
            branchColor = eoload.tree.branchColor,
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
        eocrom: {'csx': 0, 'cf': 555, 'cs': 777, 'cw': 0.9, 'co': 0.72, 'cp': 0.7},
        eoload: {
          tree: {
            x0: 0,
            y0: -100,
            length0: 60,
            angle0: Math.PI / 2,

            maxDepth: [[[1, 6]]], // 11
            trunkWidth: 4, // 12
            branchColor: 'rgb(101, 67, 33)',
            branchShrinkage: 0.8,
            maxAngleDelta: Math.PI / 2,
            delay: 100,

          },
        },
      }

      // .................. animas
      let animas = [

        treeAni, // h.sol

      ]

      return animas
    }

    let enty = () => {}
    enty.z = z
    return enty
  }
  exports.eonZ620aTree = anitem
}))
