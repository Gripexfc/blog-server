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
      //处理遇检请求   复杂请求会提前发送一个遇检请求  method为OPTIONS
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
      res.setHeader('Access-Control-Allow-Headers', 'content-type');
      res.status(200).end();
    } else {
        res.setHeader('Access-Control-Allow-Origin','*');
        next();
    }
});

// app.use('/login', verifyToken);

app.post('/login', (req, res, next) => {
    const body = req.body;
    let token = ''
    if (req.headers.authorization) {
        console.log(9999);
        verifyToken();
    } else {
        if (body.username === data.username && body.password === data.password) {
            console.log('1234565')
            token = generateToken({username: body.username})
            console.log(token,'token');
            res.writeHead(200, { 'Content-Type': 'application/json', 'X-Powered-By': 'bacon' });
            res.status(200).end(JSON.stringify({'token': token}))
        }
    }
})
app.listen(3002);