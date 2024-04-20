const express = require('express');

const app = express();

app.get('/home', (req, res, next) => {
    console.log("home get middleware");
    res.end("home get response");
    next();
})



// app.use((req, res, next) => {
//     if (req.headers['content-type'] === 'application/json') {
//         req.on('data', (data) => {
//             const userInfo = JSON.parse(data.toString());
//             req.body = userInfo;
//         })
//         req.on('end', () => {
//             next();
//         })
//     } else {
//         next();
//     }
// })
app.use(express.json());

app.post('/login', (req, res, next) => {
    console.log(req.body);
    res.end("登录成功~");
});

app.listen(8000, () => {
    console.log("中间件服务器启动成功~");
})