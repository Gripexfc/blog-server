// login.js
const express = require('express');
const router = express.Router();
const User = require('../models/user');
const mongoose = require('mongoose');
const { generateToken, verifyToken } = require('./authorization');
mongoose.connect('mongodb://127.0.0.1:27017/blog');
mongoose.connection.on('connected',function(){
    console.log('连接成功');
});
mongoose.connection.on('error',function(){
    console.log('连接失败');
});
mongoose.connection.on('disconnected',function(){
    console.log('连接断开');
});

// 处理用户登录和检查用户是否已登录
router.post('/user', async (req, res) => {
  const { username, password } = req.body;
  try {
    // 如果提供了用户名和密码，表示用户正在登录
    if (username && password) {
      // 检查用户是否存在于数据库中
      const user = await User.findOne({ username });

      if (!user) {
    
        return res.status(401).json({ code: 401, msg: '用户不存在' });
      }

      // 检查密码是否正确
      if (user.password !== password) {
        return res.status(401).json({ code: 401, msg: '密码错误' });
      }

      // 生成令牌并将其包含在响应中
      const token = generateToken({ username });
      res.json({ code: 200, msg: '登录成功', data: { token } });
    } else {
      // 没有提供用户名和密码，表示用户希望检查是否已登录
      // 使用中间件验证 token
      verifyToken(req, res, async () => {
        try {
          // 根据 token 中的用户名查找用户信息
          const user = await User.findOne({ username: req.decoded.username });

          if (!user) {
            return res.status(401).json({ code: 401, msg: '用户不存在' });
          }

          // 返回用户信息或其他必要的信息
          res.json({ code: 200, msg: '用户已登录', data: { user } });
        } catch (error) {
          res.status(500).json({ code: 500, msg: '服务器错误' });
        }
      });
    }
  } catch (error) {
    res.status(500).json({ code: 500, msg: '服务器错误' });
  }
});

module.exports = router;
