const mongoose = require('mongoose');

// 创建回复的模式（Schema）
const replySchema = new mongoose.Schema({
  id: { type: String, required: true }, // 回复的唯一标识符，必填字段
  username: { type: String, required: true }, // 回复者的用户名，必填字段
  content: { type: String, required: true }, // 回复的内容，必填字段
}, { timestamps: true }); // timestamps 自动添加 createdAt 和 updatedAt 字段

// 创建评论的模式（Schema）
const commentSchema = new mongoose.Schema({
  id: { type: String, required: true }, // 评论的唯一标识符，必填字段
  username: { type: String, required: true }, // 评论者的用户名，必填字段
  content: { type: String, required: true }, // 评论的内容，必填字段
  replies: [replySchema], // 存储回复的数组，使用上面定义的 replySchema
}, { timestamps: true }); // timestamps 自动添加 createdAt 和 updatedAt 字段

// 创建帖子的模式（Schema）
const postSchema = new mongoose.Schema({
  id: { type: String, required: true }, // 帖子的唯一标识符，必填字段
  username: { type: String, required: true }, // 发布帖子的用户名，必填字段
  content: { type: String, required: true }, // 帖子的内容，必填字段
  image: { type: String }, // 帖子中包含的图片链接
  likes: { type: Number, default: 0 }, // 点赞数量，默认为0
  comments: [commentSchema], // 存储评论的数组，使用上面定义的 commentSchema
}, { timestamps: true }); // timestamps 自动添加 createdAt 和 updatedAt 字段

// 创建帖子的模型
const Review = mongoose.model('Review', postSchema);

module.exports = Review;
