const express = require('express');

const app = express();

app.get('/home', (req, res, next) => {
    console.log("home get middleware");
    res.end("home get response");
    next();
})

app.post('/login', (req, res, next) => {
    console.log("login post middleware");
    res.end("login post response");
    next();
});

app.listen(8000, () => {
    console.log("中间件服务器启动成功~");
})