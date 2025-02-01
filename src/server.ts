import fastify from 'fastify'
import { knex } from './database'
import { env } from './env'
// import crypto from 'node:crypto'

const app = fastify()

app.get('/hello', async () => {
  // const insert_transaction = await knex('transactions')
  //   .insert({
  //     id: crypto.randomUUID(),
  //     title: 'Transação de Teste',
  //     amount: 1000,
  //   })
  //   .returning('*')

  // return insert_transaction

  const transactions = await knex('transactions')
    .select('*')
    .where('amount', 5000)

  return transactions
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server Runing!')
  })
