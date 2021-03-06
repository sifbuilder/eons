/* ******************************************
   *    @eonZ780eSimForces
   *
   */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports)
    : typeof define === 'function' && define.amd ? define(['exports'], factory)
      : (factory((global.eonZ780eSimForces = global.eonZ780eSimForces || {})))
}(this, function (exports) {
  'use strict'

  async function anitem (__eo) {
    let [
      d3Force3d,
      eonCtlRayder,
      eonEohalCore,
      eonEohalNatform,
      eonEohalMars,
      eonMuonProps,
      eonMuonEoforces,
      eonMuonNatform,
      eonMuonEoric,
      eonRenderPortview,
      eonRenderSvg,
    ] = await Promise.all([
      __eo('xs').b('d3-force-3d'),
      __eo('xs').b('eon-ctl-rayder'),
      __eo('xs').b('eon-eohal-core'),
      __eo('xs').b('eon-eohal-natform'),
      __eo('xs').b('eon-eohal-mars'),
      __eo('xs').b('eon-muon-props'),
      __eo('xs').b('eon-muon-eoforces'),
      __eo('xs').b('eon-muon-natform'),
      __eo('xs').b('eon-muon-eoric'),
      __eo('xs').b('eon-render-portview'),
      __eo('xs').b('eon-render-svg'),
    ])
    try { eonRenderSvg.scenecolor('black') } catch (e) {}
    let eonMuonStore = __eo('eonMuonStore')
    let d3_force = d3Force3d

    // .................. animas
    let z = function () {
    // .................... pics
      let eotim = {'td': 52800, 't0': 0, 't1': 1, 't2': 1, 't3': 1}

      // .................... natAni1
      let natAni1 = {

        eohal: eonEohalMars,

        eotim: eotim,
        eoric: {gid: 'ani', cid: 'ani', fid: 'ani1'},

        eofold: {
          type: 'Feature',
          geometry: {type: 'Point', coordinates: [0, 0, 0]},
          properties: {orgen: [0, 0, 0], velin: [0, 0, 0], prevous: [0, 0, 0], geodelta: [0, 0, 0]},
        },

        eonode: {
          type: 'Feature',
          geometry: null,
        },
        eomot: {
          proform: {
            projection: 'uniwen',
            translate: [-100, 0, 0],
            scale: 1,
            rotate: [ 0, 0, [[[0, 0]]] ],
            lens: [0, 1, 12],
            addNodeToTranslate: 1, // eonode
          },
        },

        eocrom: { 'csx': 0, 'cf': [[[500, 888, 650]]], 'co': [[[0.49, 0.49]]], 'cs': [[[666, 666]]], 'cw': [[[0.9, 0.9]]], 'cp': [[[0.7, 0.9]]]},

        eoform: {
          'x': {
            'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 1, 'b': 1,
            'ra2': 20, 'v0': 0, 'v1': 1, 'seg5': 12, 'w4': 90, 'pa6': 0, 'pb7': 360,
          },
          'y': {
            'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 1, 'b': 1,
            'ra2': 20, 'v0': 0, 'v1': 1, 'seg5': 12, 'w4': 90, 'pa6': 0, 'pb7': 360,
          },
          'z': {
            'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 1, 'b': 1,
            'ra2': 20, 'v0': 0, 'v1': 1, 'seg5': 12, 'w4': 90, 'pa6': 0, 'pb7': 360,
          },
        },
        eoload: {
        },
      }

      // .................... natAni2
      let natAni2 = {

        eohal: eonEohalMars,
        eoric: {gid: 'ani', cid: 'ani', fid: 'ani2'},

        eotim: eotim,
        eofold: function (ani) {
          return eonMuonNatform.natMultiLineString({eoform: ani.eoform})
        },

        eonode: {
          type: 'Feature',
          geometry: null,
        },

        eomot: {
          proform: {
            projection: 'uniwen',
            translate: [+10, 0, 0],
            scale: 1,
            rotate: [ 0, 0, 0 ],
            lens: [0, 1, 12],
            addNodeToTranslate: 1, // eonode
          },
        },

        eocrom: { 'csx': 0, 'cf': 888, 'co': 0.5, 'cs': 666, 'cw': 0.9, 'cp': 0.8 },

        eoform: {
          'x': {
            'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 1, 'b': 1,
            'ra2': 20, 'v0': 0, 'v1': 1, 'seg5': 12, 'w4': 90, 'pa6': 0, 'pb7': 360,
          },
          'y': {
            'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 1, 'b': 1,
            'ra2': 20, 'v0': 0, 'v1': 1, 'seg5': 12, 'w4': 90, 'pa6': 0, 'pb7': 360,
          },
          'z': {
            'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 1, 'b': 1,
            'ra2': 20, 'v0': 0, 'v1': 1, 'seg5': 12, 'w4': 90, 'pa6': 0, 'pb7': 360,
          },
        },
        eoload: {},
      }

      // ............................. force_energy
      let forceEnergy = function (params) { // force
        let nodes = params.nodes
        let properties = params.properties || {}
        let payload = params.properties.payload || {}

        let args = payload.args || []
        let opts = payload.opts || {}

        let key = properties.key
        let type = properties.type
        let filter = properties.filter

        let fName = __eo([type, 'force'])

        let fforce = function force (...args) {
          for (let i = 0; i < nodes.length; ++i) {
            let node = nodes[i]
          }
        }
        fforce.initialize = () => {} // initialize

        let sys = {
          nodes: nodes,
          filter: filter,
          force: fforce,
        }

        let ffforce = eonMuonEoforces.isolate(sys)
        console.assert(key || type !== null)
        let field = {
          key: key || type,
          force: ffforce,
        }

        return field // return force
      }

      let force_energy = { // aniForce

        properties: {
          alpha: 1,
          alphaMin: 0.001,
          alphaDecay: 0,
          alphaTarget: 0,
        },
        field: params => { // force.field
          let forces = []

          let nodes = params.nodes

          let alpha = params.alpha || params.properties.alpha
          let alphaMin = params.alphaMin || params.properties.alphaMin
          let alphaDecay = params.alphaDecay || params.properties.alphaDecay
          let alphaTarget = params.alphaTarget || params.properties.alphaTarget

          let key = params.properties.key || 'energy'

          let properties = {
            type: 'energy',
            src: d3_force,
            nodes: nodes,
            payload: { // passed to force in m.eoforces
              args: [],
              opts: {
                alpha: alpha,
                alphaMin: alphaMin,
                alphaDecay: alphaDecay,
                alphaTarget: alphaTarget,
              },
            },
            filter: d => true,
            key: key,
          }

          params.properties = properties
          return forceEnergy(params)
        },

      }

      // ............................. force_viscosity
      let forceViscosity = function (params) { // force
        let nodes = params.nodes
        let properties = params.properties || {}
        let payload = params.properties.payload || {}

        let args = payload.args || []
        let opts = payload.opts || {}

        let key = properties.key
        let type = properties.type
        let filter = properties.filter

        let fName = __eo([type, 'force'])

        let fforce = function force (...args) {
          for (let i = 0; i < nodes.length; ++i) {
            let node = nodes[i]
          }
        }
        fforce.initialize = () => {} // initialize

        let sys = {
          nodes: nodes,
          filter: filter,
          force: fforce,
        }

        let ffforce = eonMuonEoforces.isolate(sys)
        console.assert(key || type !== null)
        let field = {
          key: key || type,
          force: ffforce,
        }

        return field // return force
      }

      let force_viscosity = { // aniForce

        properties: {
          velocityDecay: 0.0002,
        },
        field: params => { // force.field
          let forces = []

          let nodes = params.nodes

          let velocityDecay = params.velocityDecay || params.properties.velocityDecay

          let key = params.properties.key || 'viscosity'

          let properties = {
            type: 'viscosity',
            src: d3_force,
            nodes: nodes,
            payload: { // passed to force in m.eoforces
              args: [],
              opts: {
                velocityDecay: velocityDecay,

              },
            },
            filter: d => true,
            key: key,
          }

          params.properties = properties
          return forceViscosity(params)
        },

      }

      // ............................. force_collide
      let force_collide = {
        properties: {
          payload: {
            args: [
              90,
            ],
            opts: {
              strength: 0.03, // strength
            },
          },
          type: 'collide',
          filter: d => d.eoric.gid === 'ani',
          id: d => d.eoric.uid,
          key: 'collide',
        },

        field: params => eonMuonEoforces.force(params),

      }

      // ............................. forceGravity
      let forceGravity = function (params) { // force
        let nodes = params.nodes
        let properties = params.properties || {}
        let payload = params.properties.payload || {}

        let args = payload.args || []
        let opts = payload.opts || {}

        let key = properties.key
        let type = properties.type
        let filter = properties.filter

        let fName = __eo([type, 'force'])

        let gravity = opts.gravity // gravity

        let fforce = function force (...args) { // d3force builtin (vs muon d3force)
          for (let i = 0; i < nodes.length; ++i) {
            let node = nodes[i]
            node.vy += gravity // node.vx += 0.001 * Math.random()
          }
        }
        fforce.initialize = () => {} // initialize

        let sys = {
          nodes: nodes,
          filter: filter,
          force: fforce,
        }

        let ffforce = eonMuonEoforces.isolate(sys)
        console.assert(key || type !== null)
        let field = {
          key: key || type,
          force: ffforce,
        }

        return field // return force
      }

      let force_gravity = { // aniForce:{properties, field}

        properties: {
          gravity: -0.2,

        },

        field: params => { // force.field
          let forces = []

          let nodes = params.nodes
          let gravity = params.gravity || params.properties.gravity
          let key = params.properties.key || 'gravity'

          let properties = {
            type: 'gravity',
            src: d3_force,
            nodes: nodes,
            payload: { // passed to force in m.eoforces
              args: [],
              opts: {
                gravity: gravity, // gravity
              },
            },
            filter: d => true,
            id: d => d.eoric.uid,
            key: key,
          }

          params.properties = properties
          return forceGravity(params)
        },
      }
      // .................... fieldAni
      let fieldAni = {

        eohal: eonEohalCore,
        eotim: eotim,
        eoric: {gid: 'core', cid: 'core', fid: 'core'},

        eofold: null,
        eoload: {},

      }

      fieldAni.eoforces = {
        force_energy,
        // force_viscosity,
        force_collide,
        force_gravity,
      }

      // .................. animas
      let animas = [

        natAni1, // h.mars
        natAni2, // h.mars
        fieldAni, // h.core

      ]

      return animas
    }

    let enty = () => {}
    enty.z = z
    return enty
  }
  exports.eonZ780eSimForces = anitem
}))
