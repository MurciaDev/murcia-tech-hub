const companies = require('../companies.json')
const fs = require('fs')

const REMOTE_WORK_ICONS = { NO: '🚫', YES: '✅' }

const companiesMarkdown = companies.map(({ category, companies }, index) => {
  const header = `${!!index ? '\n' : ''}## ${category}\n| Nombre | Remoto | Stack | Dirección |\n| - | - | - | - |\n`
  const body = companies.map(({ address, hasRemoteWork, name, stack, url }) =>
    `| [${name}](${url}) | ${hasRemoteWork ? REMOTE_WORK_ICONS.YES : REMOTE_WORK_ICONS.NO} | ${stack || '-'} | ${address || '-'} |\n`
  ).join('')

  return `${header}${body}`
}).join('')

const markdown = `
# 📂 Murcia Tech Hub

> Listado de empresas con trabajos tecnológicos dentro de la Región de Murcia.

**Trabajo en remoto:**
﹖ No lo sabemos | 🚫 No | 🔄 Híbrido / flexible | ✅ 100% remoto

${companiesMarkdown}

Si conoces alguna más o puedes poner algún dato más sobre las que ya existen en el listado anímate a crear una PR!`

try {
  fs.writeFileSync(`${process.cwd()}/README.md`, markdown, 'utf-8')
  console.info('Markdown generated! 🍋')
} catch (err) {
  console.error(err)
}

