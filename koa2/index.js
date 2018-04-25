import Koa from 'koa';
import fs from 'fs';
import Router from 'koa-router';

const app = new Koa();
const home = new Router();

app.use(async (ctx) => {
    const url = ctx.request.url;
    ctx.body = url;
});

app.listen(3333);
console.log('[demo] start-quick is starting at port 3333');