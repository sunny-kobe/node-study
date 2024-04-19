const express = require('express');

const app = express();

// 案例二: 路径匹配中间件
app.use('/home', (req, res, next) => {
    console.log("home middleware 01");
    next();
});

app.use('/home', (req, res, next) => {
    console.log("home middleware 02");
    next();
    res.end("Hello Home middleware");
});

app.use((req, res, next) => {
    console.log("common middleware");
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
