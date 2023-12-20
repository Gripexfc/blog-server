const mongoose = require('mongoose');
const Article = require('../models/article')

// const mongoose = require('mongoose');
// const Article = require('./articleModel'); // 确保路径正确

// mongoose.connect('mongodb://localhost:27017/your_database_name', { useNewUrlParser: true, useUnifiedTopology: true });

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
    extensionField3: new Date()
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

