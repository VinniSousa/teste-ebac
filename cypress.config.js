const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'f44htw',
  e2e: {
    baseUrl: 'http://lojaebac.ebaconline.art.br/',
  },
})
