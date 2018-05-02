const Koa = require('koa');
const Router = require('koa-router');
const logger = require('./middleware/logger');
const app = new Koa();

app.use(logger());

//创建根路由
const home = new Router();

home.get('/', async (ctx) => {
    const html = `<ul>
        <li><a href='/page/helloworld'>HelloWorld</a></li>
        <li><a href='/page/404'>404</a></li>
    </ul>`;
    ctx.body = html;
});

//创建子路由
const page = new Router();

page.get('/404', async (ctx) => {
    ctx.body = '404';
}).get('/helloworld', async (ctx) => {
    ctx.body = 'HelloWorld';
});


//装载路由
const router = new Router();
router.use('/', home.routes(), home.allowedMethods());
router.use('/page', page.routes(), home.allowedMethods());

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);

console.log('koa listening 3000 port.');