import { Hono } from 'hono'
import { testRoute } from './routes/test'

const app = new Hono()

Bun.serve({
  fetch: app.fetch,
  port: Number(process.env.PORT || 3000),
})

app.route('/test', testRoute)

app.get('/', (c) => {
  return c.text('Hello Hono!')
})
app.get('/hello', (c) => {
  return c.text('hello')
})
app.post('/post', (c) => {
  return c.text('post')
})
app.get('/search', async (c) => {
  const { q, limit, offset } = c.req.query()
  if (q) {
    console.log("q: ",q)
  }
  if (limit) {
    console.log("limit: ",limit)
  }
  if (offset) {
    console.log("offset: ",offset)
  }
  return c.text("logに表示")
})



export default app
