const mongoose = require('mongoose');
const Article = require('../models/article')
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

// 假设这是一个有效的用户 ObjectId，请替换为实际的用户 ObjectId
const userId = new mongoose.Types.ObjectId();

const newArticle = new Article({
    title: 'Sample Article',
    body: '# This is a sample article in Markdown.\n\n- Point 1\n- Point 2\n\n**Bold Text**',
    user: userId,
    likes: 0,
    comments: [
        { user: userId, content: 'Great article!' },
        { user: userId, content: 'I enjoyed reading this.' }
    ],
    otherUserInfo: 'Some information about the user',
    extensionField1: 'Value 1',
    extensionField2: 42,
    extensionField3: new Date(),
    imageUrl: 'https://img1.baidu.com/it/u=764650591,834555155&fm=253&fmt=auto&app=138&f=JPG?w=500&h=281'
});

newArticle.save()
    .then(savedArticle => {
        console.log('文章保存成功:', savedArticle);
    })
    .catch(error => {
        console.error('保存文章时出现错误:', error);
    })
    .finally(() => {
        mongoose.connection.close();
    });

