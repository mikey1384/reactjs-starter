const serve = require('serve')
const server = serve('build', {
  port: 80,
  ignore: ['node_modules']
})
