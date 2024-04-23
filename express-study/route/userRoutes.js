const express = require('express');
const userRouter = express.Router();

userRouter.get('/', (req, res, next) => {
    res.end("用户列表");
});

userRouter.post('/', (req, res, next) => {
    res.end("创建用户");
});

userRouter.delete('/', (req, res, next) => {
    res.end("删除用户");
});

module.exports = userRouter;
