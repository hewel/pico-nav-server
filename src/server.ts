import * as Koa from 'koa'
import * as Router from 'koa-router'

import { Name } from './app'

const app = new Koa()
const router = new Router()

const name = new Name({ firstName: 'mike', lastName: 'jack' })
name.logAllName()

app.use(
    async (ctx, next): Promise<void> => {
        ctx.body = 'Hello Koa!'
        await next()
    }
)

router.get(
    '/router',
    async (ctx): Promise<void> => {
        ctx.body = 'Hello Koa Router!'
    }
)

app.use(router.routes()).use(router.allowedMethods())

app.listen(4100, (): void => {
    console.log(`Server run on http://127.0.0.1:4100`)
})
