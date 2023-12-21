const express = require('express');
const router = express.Router();
const Article = require('../models/article');

// 查询所有文章接口（按时间倒序）
router.post('/articles', async (req, res) => {
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
