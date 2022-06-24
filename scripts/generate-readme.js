const fs = require('fs')
const companies = require('../companies.json')

const REMOTE_WORK_ICONS = {
  FLEX: '🔄',
  FULL: '✅',
  NONE: '🚫',
}

const tableHeader = '| Nombre | Remoto | Stack | Dirección |\n| :-- | :-- | :-- | :-- |\n'

const companiesMarkdown = companies.map(({ category, companies }, index) => {
  const header = `${!!index ? '\n' : ''}## ${category}\n${tableHeader}`
  const body = companies
    .sort(({ name }, { name: nameToCompare }) => name.toLowerCase().localeCompare(nameToCompare.toLowerCase()))
    .map(({ address, remoteWork, name, stack, url }) =>
      `| [${name}](${url}) | ${REMOTE_WORK_ICONS[remoteWork] || '﹖'} | ${stack || '﹖'} | ${address || '﹖'} |\n`
    ).join('')

  return `${header}${body}`
}).join('')

const markdown = `# 📂 Murcia Tech Hub

> Listado de empresas con trabajos tecnológicos dentro de la Región de Murcia.

Si conoces alguna más o puedes poner algún dato más sobre las que ya existen en el listado anímate y actualiza los datos, no olvides revisar la [guía de contribución](./CONTRIBUTING.md).

**Trabajo en remoto:**
﹖ No lo sabemos | 🚫 No | 🔄 Híbrido / flexible | ✅ 100% remoto

${companiesMarkdown}`

try {
  fs.writeFileSync(`${process.cwd()}/README.md`, markdown, 'utf-8')
  console.log('\x1b[32m%s\x1b[0m', 'README generated successfully! 🍋\n')
} catch (err) {
  throw err
}
