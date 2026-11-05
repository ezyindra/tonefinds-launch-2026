import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const sourceDirs = ['app', 'components', 'data', 'lib']
const sourceExtensions = new Set(['.ts', '.tsx', '.js', '.jsx'])
const imagePattern = /(?:src\s*=|image\s*:)\s*['"]?(\/images\/[^'"\s}`]+)['"]?/g
const errors = []
let checked = 0

function walk(directory) {
  if (!fs.existsSync(directory)) return []
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(directory, entry.name)
    return entry.isDirectory() ? walk(fullPath) : [fullPath]
  })
}

for (const directory of sourceDirs) {
  for (const file of walk(path.join(root, directory))) {
    if (!sourceExtensions.has(path.extname(file))) continue
    const content = fs.readFileSync(file, 'utf8')
    for (const match of content.matchAll(imagePattern)) {
      checked += 1
      const relativeAsset = match[1].replace(/^\/+/, '')
      const assetPath = path.join(root, 'public', relativeAsset)
      if (!fs.existsSync(assetPath)) {
        errors.push(`${path.relative(root, file)} -> ${match[1]} (missing)`)
      }
    }
  }
}

if (errors.length) {
  console.error(`Image check failed: ${errors.length} missing asset(s).`)
  errors.forEach((error) => console.error(` - ${error}`))
  process.exit(1)
}

console.log(`Image check passed: ${checked} local image reference(s) verified.`)
