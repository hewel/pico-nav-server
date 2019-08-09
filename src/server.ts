import * as Koa from 'koa'
import * as Router from 'koa-router'

const app = new Koa()
const router = new Router()

app.use(async (ctx, next) => {
    ctx.body = 'Hello Koa!'
    await next()
})

router.get('/router', async ctx => {
    ctx.body = 'Hello Koa Router!'
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(4100, () => {
    console.log(`Server run on http://127.0.0.1:4100`)
})
