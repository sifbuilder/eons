Object.defineProperty(document, 'currentScript', {
  value: document.createElement('script'),
})

if (typeof fetch !== 'function') {
  global.fetch = require('node-fetch-polyfill')
}


const d3 = require('./d3-require.js')
global.d3 = d3

// jest.mock('./d3-require.js')
d3.requireFrom = jest.fn(
  (resolver) => {

  const cache = new Map;
  const requireBase = requireRelative(null);

  function requireAbsolute(url) {
    if (typeof url !== "string") return url;
    let module = cache.get(url);
    if (!module) cache.set(url, module = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.onload = () => {
        try { resolve(queue.pop()(requireRelative(url))); }
        catch (error) { reject(new RequireError("invalid module")); }
        script.remove();
      };
      script.onerror = () => {
        reject(new RequireError("unable to load module"));
        script.remove();
      };
      script.async = true;
      script.src = url;
      window.define = define;
      document.head.appendChild(script);
    }));
    return module;
  }

  function requireRelative(base) {
    return name => Promise.resolve(resolver(name, base)).then(requireAbsolute);
  }

  function requireAlias(aliases) {
    return requireFrom((name, base) => {
      if (name in aliases) {
        name = aliases[name], base = null;
        if (typeof name !== "string") return name;
      }
      return resolver(name, base);
    });
  }

  function require(name) {
    return arguments.length > 1
        ? Promise.all(map.call(arguments, requireBase)).then(merge)
        : requireBase(name);
  }

  require.alias = requireAlias;
  require.resolve = resolver;

  return require;
  }
)



async function newResolve(name, base) {
  if (1 && 1) console.log(' ************* ', name, base)

  if (name.startsWith(origin)) name = name.substring(origin.length);
  if (/^(\w+:)|\/\//i.test(name)) return name;
  if (/^[.]{0,2}\//i.test(name)) return new URL(name, base == null ? location : base).href;
  if (!name.length || /^[\s._]/.test(name) || /\s$/.test(name)) throw new RequireError("illegal name");
  const target = parseIdentifier(name);
  if (!target) return `${origin}${name}`;
  if (!target.version && base != null && base.startsWith(origin)) {
    const meta = await resolveMeta(parseIdentifier(base.substring(origin.length)));
    target.version = meta.dependencies && meta.dependencies[target.name] || meta.peerDependencies && meta.peerDependencies[target.name];
  }
  if (target.path && !extensionRe.test(target.path)) target.path += ".js";
  if (target.path && target.version && versionRe.test(target.version)) return `${origin}${target.name}@${target.version}/${target.path}`;
  const meta = await resolveMeta(target);
  return `${origin}${meta.name}@${meta.version}/${target.path || main(meta) || "index.js"}`;
}


let newRequire = d3.requireFrom(newResolve)



const xEonify = require('./eon-x-eonify.js')
let __eo = xEonify.xEo()
__eo({'xs': xEonify.xs(__eo)})


const _muonProps = newRequire('./eon-muon-props.js')
  .then( m => {console.log( '**************** ')} )
const muonProps = _muonProps.muonProps(__eo)

test('test', () => {
  expect(1 + 1).toBe(2)
})

// test('test isPureArray', async () => {
  // let enty = await Promise.resolve(muonProps)
  // expect(enty.isPureArray([1,2])).toBe(true)
// })
// test('test is not PureArray', async () => {
  // let enty = await Promise.resolve(muonProps)
  // expect(enty.isPureArray([1, {}])).toBe(false)
// })
// test('test is not PureArray', async () => {
  // let enty = await Promise.resolve(muonProps)
  // expect(enty.isPureArray([1, ()=>{}])).toBe(false)
// })
