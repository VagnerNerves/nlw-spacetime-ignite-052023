import 'dotenv/config'

import fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import { memoriesRoutes } from './routes/memories'
import { authRoutes } from './routes/auth'

const app = fastify()

app.register(cors, {
  origin: true,
})

app.register(jwt, {
  secret: 'spacetime',
})

app.register(authRoutes)
app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
    host: '0.0.0.0',
    // cleahost: '127.0.0.1',
  })
  .then(() => {
    console.log('🚀 HTTP server running on port http://0.0.0.0:3333')
    // console.log('🚀 HTTP server running on port http://127.0.0.1:3333')
  })
