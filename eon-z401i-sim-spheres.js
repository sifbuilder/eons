/* ******************************************
   *    @eonZ401iSimSpheres
   *
   */
  (function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports)
      : typeof define === 'function' && define.amd ? define(['exports'], factory)
        : (factory((global.eonZ401iSimSpheres = global.eonZ401iSimSpheres || {})))
  }(this, function (exports) {
    'use strict'
  
    async function anitem (__eo) {
  let [
    d3Geo,
    d3Force3d,
    ctlWen,
    eohalNatform,
    eohalMars,
    eohalPacer,
    eohalTextform,
    muonAnitem,
    muonEoforces,
    muonEoric,
    muonGraticule,
    muonNatform,
    muonProps,
    muonSnap,
    muonStace,
    protonUniwen,
    renderSvg,
  ] = await Promise.all([
    __eo('xs').b('d3-geo'),
    __eo('xs').b('d3-force-3d'),
    __eo('xs').c('wen'),
    __eo('xs').e('natform'),
    __eo('xs').e('mars'),
    __eo('xs').e('pacer'),
    __eo('xs').e('textform'),
    __eo('xs').m('anitem'),
    __eo('xs').m('eoforces'),
    __eo('xs').m('eoric'),
    __eo('xs').m('graticule'),
    __eo('xs').m('natform'),
    __eo('xs').m('props'),
    __eo('xs').m('snap'),
    __eo('xs').m('stace'),
    __eo('xs').p('uniwen'),
    __eo('xs').r('svg'),
  ])

  let muonStore = __eo('muonStore')
  let d3_force = d3Force3d
  try { renderSvg.scenecolor('black') } catch (e) {}

  // .................. animas
  let z = function () {
    // .................. pics
    let radians = Math.PI / 180, degrees = 180 / Math.PI,
      sin = Math.sin, cos = Math.cos, sqrt = Math.sqrt,
      sinh = Math.sinh, cosh = Math.cosh, tanh = Math.tanh

    let eotim = {'td': 16800, 't0': 0, 't1': 1, 't2': 1, 't3': 1 } // nostop: 1}

    // ....................... pacerNat
    let pacerNat = {

      eohal: eohalPacer,
      eotim: eotim,
      eoric: { gid: 'pacer', cid: 'pacer', fid: 'pacer' },

      eofold: {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [0, 0, 0],
        },
        properties: {orgen: [0, 0, 0], velin: [0, 0, 0], velang: [0, 0, 0], prevous: [0, 0, 0], geodelta: [0, 0, 0]},
      },

      eonode: {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [0, 0, 0],
        },
        properties: {orgen: [0, 0, 0], velin: [0, 0, 0], velang: [0, 0, 0], prevous: [0, 0, 0], geodelta: [0, 0, 0]},
      },

      eomot: {
        proform: {
          projection: 'uniwen',
          translate: [ 0, 0, 0], // mot
          scale: 1,
          rotate: [ 0, -200, 0 ],

          lens: [0, 1, Infinity],
          addNodeToTranslate: 1, // eonode
        },
      },

      eocrom: { 'csx': 0, 'cf': 777, 'co': 0.3, 'cs': [[[777, 222]]], 'cw': [[[0.4, 1.2]]], 'cp': 1},

      eoform: {
        x: {
          'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 1, 'b': 1, // circ
          'ra2': [[[3, 64]]], 'v0': 0, 'v1': 1, 'w4': 0, 'seg5': [[[24, 24]]], 'pa6': 0, 'pb7': -1,
          'dom3': [-180, 180],
          c: [ 1, 1, [[[1, 1]]], [[[1, 1]]]],
          'fn0': (e, c, d) => c[0] * (d.c[2] + d.c[3] * cos(e[0])) * c[2] * cos(e[3]) * sin(e[3]),
        },
        y: {
          'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 1, 'b': 1, // circ
          'ra2': [[[3, 64]]], 'v0': 0, 'v1': 1, 'w4': 0, 'seg5': [[[24, 24]]], 'pa6': 0, 'pb7': -1,
          'dom3': [-180, 180],
          c: [ 1, 1, [[[1, 1]]], [[[1, 1]]]],
          'fn0': (e, c, d) => c[1] * (d.c[2] + d.c[3] * cos(e[0])) * c[2] * sin(e[3]) * sin(e[3]),

        },
        z: {
          'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 1, 'b': 1, // circ
          'ra2': [[[3, 64]]], 'v0': 0, 'v1': 1, 'w4': 0, 'seg5': [[[24, 24]]], 'pa6': 0, 'pb7': -1,
          'dom3': [ -90, 90 ],
          c: [ 1, 1, 1, [[[1, 1]]] ],
          'fn0': (e, c, d) => d.c[3] * c[3] * sin(e[0]) * sin(e[3]),
        },
        w: {
          'm1': 4, 'm2': 4, 'n1': 2, 'n2': 2, 'n3': 2, 'a': 1, 'b': 1, // circ
          'dom3': [ -180, 180 ],
          'fn0': (e, c) => c[3] * cos(e[2]),
        },
      },

      eoforces: {},

      eoload: {

        pacer: {

          initN: 1, eventN: 0, autoN: 1, autoP: 0.18, outtimed: 0, maxN: 60, geospan: 0,
          pacedAnisort: 'anima',
          basePaceOnAniView: 'viewform',
          addItemToPacer: 0,

          eohal: eohalNatform,

          eoric: function (ani, props) {
            let eoric = muonProps.clone(ani.eoric)

            if (props.key === 'init') { // INIT
              let q = muonStore.animasInClassHowMany(eoric)
              let nextq = q + props.counter
              eoric.fid = muonEoric.idify(eoric.fid, props.key, nextq)
            } else if (props.key === 'auto') { // AUTO
              let q = muonStore.animasInClassHowMany(eoric)
              let nextq = q + props.counter
              eoric.fid = muonEoric.idify(eoric.fid, props.key, nextq)
            } else if (props.key === 'event') { // EVENT
              let q = muonStore.animasInClassHowMany(eoric)
              let nextq = q + props.counter
              eoric.fid = muonEoric.idify(eoric.fid, props.key, nextq)
            }

            eoric.uid = muonEoric.getuid(eoric)
            return eoric
          },

          eofold: function (ani, props) {
            let neweofold = ani => muonNatform.natMultiLineString({eoform: ani.eoform})
            return neweofold
          },

          eocrom: function (ani, props) {
            let neweocrom = ani.eocrom
            return neweocrom
          },

          eonode: function (ani, props) {
            let stace = [0, 0, 0]
            if (props.key === 'init') { // INIT
              let autocount = props.counter
              let C1 = -150
              let C2 = 2
              stace = [
                0 + (0.5 - Math.random()) * 500,
                Math.pow(-1, autocount) * C1 * Math.max(1, autocount % C2),
                0]
            } else if (props.key === 'auto') { // AUTO
              let autocount = props.counter
              let C1 = -150
              let C2 = 2
              stace = [
                0 + (0.5 - Math.random()) * 200,
                Math.pow(-1, autocount) * C1 * Math.max(1, autocount % C2),
                0]
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
              properties: {orgen: [0, 0, 0], velin: [0, 0, 0], velang: [0, 0, 0], prevous: [0, 0, 0], geodelta: [0, 0, 0]},
            }
            return res
          },

          eoforces: function (ani, props) {
            let forces = {}

            let forceGravity = muonProps.clone(force_gravity)
            forceGravity.properties.key = d => d.eoric.uid
            forceGravity.properties.gravity = d => {
              let gravity = 0

              let tue = d.eotim.unElapsed
              let tup = d.eotim.unPassed
              let tud = d.eotim.unitDelta
              let r = muonProps.v(muonSnap.snap(d.eoform.x.ra2, tup), d)

              console.assert(r !== Number.NaN)
              if (r > 36) gravity = 1.9
              return gravity
            }

            forceGravity.properties.filter = d => d.eoric.cid === 'paced'
            forces.forceGravity = forceGravity
            return forces
          },

        },
      },
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
      console.assert(gravity !== Number.NaN, `gravity ${gravity} is NaN`)

      let fforce = function force (...args) {
        for (let i = 0; i < nodes.length; ++i) {
          let node = nodes[i]
          let g = muonProps.v(gravity, node)

          node.vy += g
        }
      }
      fforce.initialize = () => {} // initialize

      let sys = {
        nodes: nodes,
        filter: filter,
        force: fforce,
      }

      let ffforce = muonEoforces.isolate(sys)
      console.assert(key || type !== null)
      let field = {
        key: key || type,
        force: ffforce,
      }

      return field // return force
    }

    let force_gravity = { // aniForce:{properties, field}
      properties: {
        gravity: -0.9,
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
          filter: d => d.eoric.gid === 'paced',
          id: d => d.eoric.uid,
          key: key,
        }

        params.properties = properties
        return forceGravity(params)
      },
    }
    // ............................. natAni
    let natAni1 = {
      eohal: eohalMars,
      eotim: eotim,
      eoric: {gid: 'nat', cid: 'nat', fid: 'nat1'},

      eofold: ani => muonNatform.natMultiLineString({eoform: ani.eoform}),

      eomot: {
        proform: {
          projection: 'uniwen',
          translate: [ 0, -160, 0], // mot
          scale: [1, 1, 1],
          rotate: [ 0, 0, 0 ],
          lens: [0, 1, Infinity],
        },
      },

      eocrom: { 'csx': 0, 'cf': [[[500, 888, 650]]], 'co': [[[0.19, 0.19]]], 'cs': [[[777, 777]]], 'cw': [[[0.99, 0.99]]], 'cp': [[[0.9, 0.9]]]},

      eoform: {

        x: {
          'm1': 4, 'm2': 4, 'n1': 100, 'n2': 100, 'n3': 100, 'a': 1, 'b': 1,
          'ra2': 400, 'v0': 0, 'v1': 1, 'w4': 0, 'seg5': 360, 'pa6': 0, 'pb7': -1,
          'dom3': [ -180, 180 ],
        },
        y: {
          'm1': 4, 'm2': 4, 'n1': 100, 'n2': 100, 'n3': 100, 'a': 1, 'b': 1,
          'ra2': 12, 'v0': 0, 'v1': 1, 'w4': 0, 'seg5': 360, 'pa6': 0, 'pb7': -1,
          'dom3': [ -180, 180 ],
        },

      },

      eoload: {},
    }

    // .................. animas
    let animas = [
      pacerNat, // h.pacer
      natAni1,

    ]

    return animas
  }

  let enty = () => {}
  enty.z = z
  return enty
}
  exports.eonZ401iSimSpheres = anitem
}))