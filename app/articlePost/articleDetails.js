const express = require('express')
const router = express.Router();
const Article = require('../models/article');

router.post('/details:id', async (req, res) => {
    try {
        const id = req.params.id;

        // 使用 Article 模型的 find 方法查询文章详情
        const articles = await Article.findById(id);
        res.json({ success: true, data: articles });
    } catch (error) {
        console.error('查询文章时出现错误:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
});

module.exports = router