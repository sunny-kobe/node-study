const express = require('express');
const fs = require('fs');
const morgan = require('morgan');
const multer = require('multer');
const app = express();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
const upload = multer({
    storage
})
app.post('/upload', upload.array('files'), (req, res, next) => {
    console.log(req.file);
    res.end("文件上传成功~");
})

app.use(upload.any());
app.use('/login', (req, res, next) => {
    console.log(req.query);
    // 响应方式有两种：res.end()和res.json()
    // res.end("query请求成功~");
    res.json("query请求成功~");
    res.status(204);
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

app.listen(8000, () => {
    console.log("中间件服务器启动成功~");
})