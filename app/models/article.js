const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true },
    created_at: { type: Date, default: Date.now }
});

const articleSchema = new Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    publishTime: { type: Date, default: Date.now },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    likes: { type: Number, default: 0 },
    comments: [commentSchema], // 评论数组
    otherUserInfo: { type: String }, // 其他用户信息，替换为实际需要的字段
    extensionField1: { type: String },
    extensionField2: { type: Number },
    extensionField3: { type: Date },
    imageUrl: { type: String } // 新增的图片字段
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;