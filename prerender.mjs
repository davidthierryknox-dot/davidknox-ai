import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distPath = path.join(__dirname, 'dist')

// Load the server bundle built by Vite SSR
const { render } = await import(path.join(distPath, 'server', 'entry-server.js'))

// Render the app to HTML
const appHtml = render()

// Read the client-built index.html
const templatePath = path.join(distPath, 'index.html')
const template = fs.readFileSync(templatePath, 'utf-8')

// Inject pre-rendered HTML into the root div
const html = template.replace(
  '<div id="root"></div>',
  `<div id="root">${appHtml}</div>`
)

// Write back
fs.writeFileSync(templatePath, html)

console.log('Pre-rendered HTML injected into dist/index.html')
