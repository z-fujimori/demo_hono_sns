import { Hono } from 'hono'

const app = new Hono()

Bun.serve({
  fetch: app.fetch,
  port: Number(process.env.PORT || 3000),
})

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

export default app
