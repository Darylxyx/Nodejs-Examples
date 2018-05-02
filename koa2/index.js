const Koa = require('koa');
const fs = require('fs');
const Router = require('koa-router');

const app = new Koa();
const home = new Router();

console.log(123123);

app.use(async (ctx) => {
    const url = ctx.request.url;
    ctx.body = url;
});

app.listen(3333);
console.log('[demo] start-quick is starting at port 3333');