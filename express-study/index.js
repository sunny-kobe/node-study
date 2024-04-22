const express = require('express');
const fs = require('fs');
const morgan = require('morgan');
const multer = require('multer');

const app = express();
const upload = multer({
    dest: "uploads/"
})

app.get('/home', (req, res, next) => {
    console.log("home get middleware");
    res.end("home get response");
    next();
})

// 日志
const loggerWriter = fs.createWriteStream('./log/access.log', {
    flags: 'a+'
})
app.use(morgan('combined', { stream: loggerWriter }));

app.use(express.json());

app.post('/upload', upload.single('file'), (req, res, next) => {
    console.log(req.file);
    res.end("上传成功~");
})

app.listen(8000, () => {
    console.log("中间件服务器启动成功~");
})