var fileUrl = require('file-url')

Object.defineProperty(document, 'currentScript', {
  value: document.createElement('script'),
})

if (typeof fetch !== 'function') {
  global.fetch = require('node-fetch-polyfill')
}

if (typeof URL !== 'function') {
  global.URL = require('node-url-polyfill')
}

const d3 = require('./d3-require.js')
global.d3 = d3

// ==================

const metas = new Map
const queue = []
const map = queue.map
const some = queue.some
const hasOwnProperty = queue.hasOwnProperty
const origin = "https://cdn.jsdelivr.net/npm/"
const identifierRe = /^((?:@[^/@]+\/)?[^/@]+)(?:@([^/]+))?(?:\/(.*))?$/
const versionRe = /^\d+\.\d+\.\d+(-[\w-.+]+)?$/
const extensionRe = /\.[^/]*$/
const mains = ["unpkg", "jsdelivr", "browser", "main"]

class RequireError extends Error {
  constructor(message) {
    super(message)
  }
}

RequireError.prototype.name = RequireError.name

function main(meta) {
  for (const key of mains) {
    const value = meta[key]
    if (typeof value === "string") {
      return extensionRe.test(value) ? value : `${value}.js`
    }
  }
}

function parseIdentifier(identifier) {
  const match = identifierRe.exec(identifier)
  return match && {
    name: match[1],
    version: match[2],
    path: match[3]
  }
}

function resolveMeta(target) {


  const url = `${origin}${target.name}${target.version ? `@${target.version}` : ""}/package.json`
  

  let meta = metas.get(url)
  if (!meta) metas.set(url, meta = fetch(url).then(response => {
    if (!response.ok) throw new RequireError("unable to load package.json")
    if (response.redirected && !metas.has(response.url)) metas.set(response.url, meta)
    return response.json()
  }))
  return meta
}

// async function resolve(name, base) {
async function mockResolve(name, base) {
  if (name.startsWith(origin)) name = name.substring(origin.length)
  if (/^(\w+:)|\/\//i.test(name)) return name
    if (/^[.]{0,2}\//i.test(name)) {

    return name  // _e_
    
  }
  if (!name.length || /^[\s._]/.test(name) || /\s$/.test(name)) throw new RequireError("illegal name")
  const target = parseIdentifier(name)
  if (!target) return `${origin}${name}`
  if (!target.version && base != null && base.startsWith(origin)) {
    const meta = await resolveMeta(parseIdentifier(base.substring(origin.length)))
    target.version = meta.dependencies && meta.dependencies[target.name] || meta.peerDependencies && meta.peerDependencies[target.name]
  }
  if (target.path && !extensionRe.test(target.path)) target.path += ".js"
  if (target.path && target.version && versionRe.test(target.version)) return `${origin}${target.name}@${target.version}/${target.path}`
  const meta = await resolveMeta(target)
  return `${origin}${meta.name}@${meta.version}/${target.path || main(meta) || "index.js"}`
}

const _require = d3.requireFrom(mockResolve)

d3.requireFrom = jest.fn((resolver) => {

  const cache = new Map
  const requireBase = requireRelative(null)

  function requireAbsolute(url) {

    if (typeof url !== "string") return url
    let module = cache.get(url)
    if (!module) cache.set(url, module = new Promise((resolve, reject) => {
      if (document.script !== undefined) {
          script.onload = () => {

            try { resolve(queue.pop()(requireRelative(url))) }
            catch (error) { reject(new RequireError("invalid module")) }
            script.remove()
          }
          script.onerror = () => {
            reject(new RequireError("unable to load module"))
            script.remove()
          }
          script.async = true
          script.src = url
          window.define = define
          document.head.appendChild(script)
      } else {
        
            try { resolve(require(url) )} // _e_
            catch (error) { reject(new RequireError("invalid module")) }
            
      }
    }))

    return module
  }

  function requireRelative(base) {
    return name => Promise.resolve(resolver(name, base)).then(requireAbsolute)
  }

  function requireAlias(aliases) {
    return d3.requireFrom((name, base) => {
      if (name in aliases) {
        name = aliases[name], base = null
        if (typeof name !== "string") return name
      }
      return resolver(name, base)
    })
  }

  function _require(name) {
    return arguments.length > 1
        ? Promise.all(map.call(arguments, requireBase)).then(merge)
        : requireBase(name)
  }

  _require.alias = requireAlias
  _require.mockResolve = resolver

  return _require
}
) // jest

function merge(modules) {
  const o = {}
  for (const m of modules) {
    for (const k in m) {
      if (hasOwnProperty.call(m, k)) {
        if (m[k] == null) Object.defineProperty(o, k, {get: getter(m, k)})
        else o[k] = m[k]
      }
    }
  }
  return o
}

function getter(object, name) {
  return () => object[name]
}

function isexports(name) {
  return (name + "") === "exports"
}

function define(name, dependencies, factory) {

  const n = arguments.length
  if (n < 2) factory = name, dependencies = []
  else if (n < 3) factory = dependencies, dependencies = typeof name === "string" ? [] : name
  queue.push(some.call(dependencies, isexports) ? _require => {
    const exports = {}
    return Promise.all(map.call(dependencies, name => {
      return isexports(name += "") ? exports : _require(name)
    })).then(dependencies => {
      factory.apply(null, dependencies)
      return exports
    })
  } : _require => {
    return Promise.all(map.call(dependencies, _require)).then(dependencies => {
      return typeof factory === "function" ? factory.apply(null, dependencies) : factory
    })
  })
}

define.amd = {}


// ==================


let d3Require = d3.requireFrom(mockResolve)


const xEonify = require('./eon-x-eonify.js')
let __eo = xEonify.xEo()
__eo({'xs': xEonify.xs(__eo)})
if (1 && 1) console.log('__eo', __eo)


let muon = jest.fn( async () => {
    const muonEocrom = await d3Require('./eon-muon-eocrom.js')
    const enty = await muonEocrom.muonEocrom(__eo)
    if (1 && 1) console.log('muonEocrom', enty)

    return enty
})

test('test', async () => {
  let enty = await muon(__eo)
if (1 && 1) console.log('enty', enty)

  expect(enty.kolor(777, 0)).toBe('rgb(251, 107, 11)')
})







