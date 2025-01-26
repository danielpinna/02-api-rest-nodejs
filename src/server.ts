import fastify from 'fastify'

const app = fastify()

app.get('/hello', () => {
  return 'Hello World 22'
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server Runing!')
  })
