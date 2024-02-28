/*
 * @LastEditTime: 2023-06-30 17:18:59
 * @FilePath: \blogServer\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const express = require('express');
const app = express();
const router = express.Router();
const bodyParse = require('body-parser')
const data = require('./index.json')
// const userRouter = require('./app/route/useRouter');
const articleRouter = require('./app/articlePost/editArticle')
const homeArticleRouter = require('./app/articlePost/homeArticle')
const articleDetails = require('./app/articlePost/articleDetails')
const loginRouter = require('./app/login/index')
const userInfo = require('./app/my/userInfo')
// require('./app/shell/article.js')

app.use(bodyParse.urlencoded({extended:false}))
app.use(bodyParse.json())

app.use(function (req, res, next) {
    if (req.method == 'OPTIONS') {
        //处理预检请求
        console.log('处理预检请求');
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

app.use('/login', loginRouter)
app.use('/article', articleRouter)
app.use('/article', homeArticleRouter)
app.use('/article', articleDetails)
app.use('/my', userInfo)

app.listen(8090,() => {
    console.log('8090 服务器启动');
});