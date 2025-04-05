import { Context } from 'hono'

export const getUsersHandler = async (c: Context) => {
    const result  = {
        title: "value"
    }

    console.log("test demo")
    return c.json(result)
}