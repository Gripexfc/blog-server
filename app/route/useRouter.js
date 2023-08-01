const express = require('express');
const {generateToken, verifyToken} = require('../login/authorization')
const route = express.Router();
const mongoose = require('mongoose')
// mongoose.connect('mongodb://127.0.0.1:27017/blog');
// mongoose.connection.on('connected',function(){
//     console.log('连接成功');
// });
// mongoose.connection.on('error',function(){
//     console.log('连接失败');
// });
// mongoose.connection.on('disconnected',function(){
//     console.log('连接断开');
// });

const userSchema = new mongoose.Schema({
  // password: { type: String, required: true, select: false }, // 使用 select: false 隐藏密码字段
  // 省略部分代码...
});

const UserModel = mongoose.model('users', userSchema);

// 查询密码的函数
async function findPasswordByUsername(username) {
  try {
  // 使用 User 模型的 findOne 方法查询数据库
  const user = JSON.parse(JSON.stringify(await UserModel.findOne({ username })));
  // console.log(user.email,'user1');
  if (user) {
  // 如果找到用户，则返回用户的密码
  return user;
  } else {
  // 如果未找到用户，则返回 null 或自定义的默认值
  return null;
  }
  } catch (err) {
  console.error('查询密码时出现错误：', err);
  // 如果发生错误，则返回 null 或自定义的默认值
  return null;
  }
}

route.post('/login', async (res, req, next) => {
  const body = res.body;
  
    let token = ''
    if (res.headers?.authorization) {
         // 进行验证并处理验证结果
         console.log(verifyToken(req, res, next));
         if (verifyToken(req, res, next)) {
            // 验证通过
            // 省略部分代码...
            req.status(200).end(JSON.stringify({'token': token}))
        } else {
            // 验证失败，返回错误响应
            req.status(401).json({ error: 'Authorization failed' });
        }
    } else {
      console.log('验证账号密码');
        const user = await findPasswordByUsername(body.username);
        if (body.password === user.password) {
            token = generateToken({username: body.username, userId: user._id})
            req.writeHead(200, { 'Content-Type': 'application/json', 'X-Powered-By': 'bacon', 'authorization': '' });
            req.status(200).end(JSON.stringify({'token': token}))
        } else {
            req.status(401).end(JSON.stringify({'mas': '账号密码错误'}))
        }
    }
})


module.exports = route;