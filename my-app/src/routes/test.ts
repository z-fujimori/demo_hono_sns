import { Hono } from 'hono'
import { getUsersHandler } from '../handlers/test'

export const testRoute = new Hono()

testRoute.get('/', getUsersHandler)
// usersRoute.post('/', createUserHandler)