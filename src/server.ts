import * as Koa from 'koa'

const app = new Koa()
let a: number = 5
let name: string = 'bob'

app.use(async (ctx, next) => {
    ctx.body = 'Hello Koa!' + a + name.trim()
    await next()
})

app.listen(4100, () => {
    console.log(`Server run on http://127.0.0.1:4100`)
})
