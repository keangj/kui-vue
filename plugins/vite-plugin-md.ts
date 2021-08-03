import marked from 'marked'

const mdToJs = str => {
  const content = JSON.stringify(marked(str))
  return `export default ${content}`
}

export function vitePluginMd() {
  return {
    name: 'vitePluginMd',
    transform(code, id) {
      if (id.endsWith('.md')) {
        return mdToJs(code)
      }
    },
  }
}