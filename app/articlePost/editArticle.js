const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Article = require('../models/article');
const User = require('../models/user');

// 连接到 MongoDB 数据库
// mongoose.connect('mongodb://localhost:27017/your_database_name', { useNewUrlParser: true, useUnifiedTopology: true });

// 上传文章接口
router.post('/upload', async (req, res) => {
    try {
        const { title, body, userId } = req.body;
        // 创建新的文章实例
        const newArticle = new Article({
            title,
            body,
            user: userId,
            likes: 0,
            comments: [],
            created_at: new Date(),
            // 其他字段根据需要添加
        });

        // 保存文章到数据库
        const savedArticle = await newArticle.save();

        // 更新用户表中的文章信息
        const updatedUser = await User.findByIdAndUpdate(userId, { $push: { article_id: savedArticle._id } }, { new: true });

        res.json({ success: true, article: savedArticle, user: updatedUser });
    } catch (error) {
        console.error('上传文章时出现错误:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
});

// 编辑文章接口
router.post('/edit/:articleId', async (req, res) => {
    try {
        const { title, body } = req.body;
        const articleId = req.params.articleId;

        // 更新文章信息
        const updatedArticle = await Article.findByIdAndUpdate(articleId, { title, body }, { new: true });

        res.json({ success: true, article: updatedArticle });
    } catch (error) {
        console.error('编辑文章时出现错误:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
});

// 查询所有文章接口（按时间倒序）
router.post('/all', async (req, res) => {
    try {
        // 使用 Article 模型的 find 方法查询所有文章
        const articles = await Article.find().sort({ created_at: -1 });

        res.json({ success: true, articles });
    } catch (error) {
        console.error('查询文章时出现错误:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
});

module.exports = router;

