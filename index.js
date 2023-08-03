
const express = require('express');
const app = express();
const bodyParse = require('body-parser')
require('./app/models/db')
const userRouter = require('./app/route/useRouter');
const userPost = require('./app/route/userPost');
const useReview = require('./app/route/review');

app.use(bodyParse.urlencoded({extended:false}))
app.use(bodyParse.json())

app.use(function (req, res, next) {
    if (req.method == 'OPTIONS') {
        //处理预检请求
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
        res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
        res.setHeader('Access-Control-Allow-Credentials', true);
        res.status(200).end();
    } else {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
        res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
        res.setHeader('Access-Control-Allow-Credentials', true);
        next();
    }
});

app.use('/blogUsers', userRouter)
app.use('/post', userPost)
app.use('/post', useReview)

app.listen(3002,() => {
    console.log('服务器启动');
});