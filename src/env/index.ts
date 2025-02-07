import { config } from 'dotenv'
import { z } from 'zod'

if (process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'development') {
  config({ path: '.env.test' })
} else {
  config()
}

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('production'),
  DATABASE_CLIENT: z.enum(['sqlite', 'pg']),
  DATABASE_URL: z.string(),
  PORT: z.coerce.number().default(3333),
  HOST: z.string(),
})

export const env = envSchema.parse(process.env)
