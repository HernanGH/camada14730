const Koa = require('koa');

const app = new Koa();

app.use(async (context) => {
    context.body = 'Hello world!'; 
});

app.listen(8080);