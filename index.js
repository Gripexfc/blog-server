/*
 * @Author: fanchen 2837903280@qq.com
 * @Date: 2023-06-29 17:18:06
 * @LastEditors: fanchen 2837903280@qq.com
 * @LastEditTime: 2023-06-30 17:18:59
 * @FilePath: \blogServer\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const express = require('express');
const app = express();
const bodyParse = require('body-parser')
const data = require('./index.json')
const {generateToken, verifyToken} = require('./app/login/authorization')

app.use(bodyParse.urlencoded({extended:false}))
app.use(bodyParse.json())

app.use(function (req, res, next) {
    if (req.method == 'OPTIONS') {
        //处理预检请求
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
        res.setHeader('Access-Control-Allow-Credentials', true);
        res.status(200).end();
    } else {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
        res.setHeader('Access-Control-Allow-Credentials', true);
        next();
    }
});

app.get('/login', (req, res, next) => {
    res.status(200).end(JSON.stringify({'token': '服务器启动'}))
})

app.post('/login', (req, res, next) => {
    const body = req.body;
    let token = ''
    if (req.headers.authorization) {
        console.log(9999);
         // 进行验证并处理验证结果
         if (verifyToken(req, res, next)) {
            // 验证通过
            // 省略部分代码...
            res.writeHead(200, { 'Content-Type': 'application/json', 'X-Powered-By': 'bacon', 'authorization': '' });
            res.status(200).end(JSON.stringify({'token': token}))
        } else {
            // 验证失败，返回错误响应
            res.status(401).json({ error: 'Authorization failed' });
        }
    } else {
        if (body.username === data.username && body.password === data.password) {
            token = generateToken({username: body.username})
            console.log(token,'token');
            res.writeHead(200, { 'Content-Type': 'application/json', 'X-Powered-By': 'bacon', 'authorization': '' });
            res.status(200).end(JSON.stringify({'token': token}))
        } else {
            res.status(401).end(JSON.stringify({'mas': '账号密码错误'}))
        }
    }
})
app.listen(3002,() => {
    console.log('服务器启动');
});