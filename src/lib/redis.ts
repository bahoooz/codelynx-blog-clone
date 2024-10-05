import { Redis } from '@upstash/redis'

export const redis = new Redis({
  url: 'https://dominant-tahr-26814.upstash.io',
  token: process.env.UPSTASH_REDIS_TOKEN,
})