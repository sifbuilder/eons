const fs = require('fs')
const path = require('path')
const http = require('http')
const { spawn } = require('child_process')
const { exec } = require('child_process')
var npm = require('npm')
const util = require('util');
const execFile = util.promisify(require('child_process').execFile);

let args = process.argv
let [cmd, scp, ...opts] = args

let scope = opts[0] // scope {eons (default), eonify, all}
if (scope === undefined) scope = "eons"  // default to eons

let dirname = path.dirname(require.main.filename)

const waitInPromise = delay => arg =>
  Number.isFinite(delay) && delay > 0
    ? new Promise(resolve => setTimeout(() => resolve(arg), delay))
    : Promise.resolve(arg)


const isDirectory = d => fs.lstatSync(d).isDirectory()
const isFile = d => fs.lstatSync(d).isFile()


// indir

const htmlpattern = new RegExp('^(eon.*)\.html$', 'i')
const eonpattern = new RegExp('^' + 'eon' + '.*' + '.*(.html|js)', 'i')
const eonifypattern = new RegExp('^' + 'eonify' + '.*' + '.*(.html|js)', 'i')
const testpattern = new RegExp('(.*)\.test\.(.*)$', 'i')
const mdpattern = /\/\/.?md:(.*)/mg // // md (global multiline)
const imgpattern = new RegExp('(.*)(.jpg)$', 'i')
const zpattern = new RegExp('(.*)(.html)$', 'i')

let indir = './'
let fromfile = ''

let infiles = []
  
infiles = fs.readdirSync(indir)
.filter(file => isFile(file))
  .filter(d => eonifypattern.test(d))
  .filter(d => !testpattern.test(d))
  .filter(d => !mdpattern.test(d))
  .filter(d => !imgpattern.test(d))  
  

let indirpath = (__dirname + '/').replace(/\\/g, '/') // z-indexes
let infilename = 'infilename.html'
let inpathname = `${indirpath}${infilename}`



let rootdirname = 'eons'
let netlifysite = "eons"
let netlifyurl = "https://github.com/gatsbyjs/gatsby-starter-hello-world"
let rootdirpath = `${__dirname}/../${rootdirname}/`
let sitepath = `${rootdirpath}${netlifysite}`



async function deploy() {
  await exec('node --version',
        {},
        function (error, stdout, stderr) {
           console.log('stdout: ' + stdout);
  })

  if (fs.existsSync(rootdirpath)) {
    console.log(`root folder ${rootdirpath} exists`) // ROOT DIR exists
  } else {
    console.log(`create dist folder ${rootdirpath}`) // CREATE ROOT DIR
    await fs.mkdir(rootdirpath)
  }


  let packPath = `${sitepath}/package.json`
  let pckExists = fs.existsSync(packPath)
  
  
  if (pckExists) {
    console.log(`folder ${sitepath} already has a npm project`)
  } else {
    console.log(`create npm project ${netlifysite} in ${sitepath}`)
    const { stdout } = await exec (`git clone https://github.com/sifbuilder/eons.git`,
      {cwd: `${rootdirpath}`}
    )  // cd to root dir
    console.log(stdout)
  }        
  
  let configMark = `${sitepath}/gatsby-config.js`
  if (fs.existsSync(configMark)) {
    console.log(`config already exist, no yarn`)
  } else {
    console.log(`yarn project ${netlifysite} in ${sitepath}`)
    const { stdout } = await exec (`yarn`,
      {cwd: `${sitepath}`}
    )  // cd to root dir
    console.log(stdout)
  }   
  
  
  
  let toAdminIndexPath = `${sitepath}/static/admin/index.html`
  let fromAdminIndexText = `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Content Manager</title>
</head>
<body>
  <!-- Include the script that builds the page and powers Netlify CMS -->
  <script src="https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js"></script>
</body>
</html>`
  if (fs.existsSync(toAdminIndexPath)) {
    console.log(`admin index file already exists`)
  } else {
    console.log(`create admin index file`)
    await fs.writeFile(toAdminIndexPath, fromAdminIndexText)  
  }  
  
  console.log(`src/cms/cms.js - upd - import from eon template `)
  console.log(`src/cms/preview-templates/EonPagePreview.js - craete`)
  console.log(`src/img/logo.svg - upd`)
  console.log(`src/img/twitter-icon.svg - create`)
  console.log(`src/components/Navbar - eons link`)
  console.log(`src/components/Navbar - twitter link`)
  console.log(`src/components/Eontiles.js`)
  console.log(`src/pages/about/index.md`)
  console.log(`src/pages/eontiles/`)
  console.log(`src/pages/eontiles/index.md`)
  console.log(`src/templates/eon-page.js`)
  console.log(`public/img/*`)
  console.log(`static/img/*`)
  
    
  if (pckExists) {
    console.log(`npm run develop`)
    // const { stdout } = await exec (`npm run develop`,
      // {cwd: `${sitepath}`}
    // )  // cd to root dir
    // console.log(stdout)
  } else {
    console.log(`folder ${sitepath} npm project does not exist, no run`)
  }
  
  
  
  
}



  deploy() 
  








