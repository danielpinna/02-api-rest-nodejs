import fastify from 'fastify'
import { env } from './env'
import { transactionRoutes } from './routes/transactions'
// import crypto from 'node:crypto'

const app = fastify()

app.register(transactionRoutes)

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server Runing!')
  })
