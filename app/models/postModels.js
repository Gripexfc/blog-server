const mongoose = require('mongoose');

// 连接 MongoDB 数据库
// mongoose.connect('mongodb://localhost:27017/blog', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// 创建 "帖子" 数据表的模型
const Post = mongoose.model('userPost', {
  postId: String,
  username: String,
  avatar: String,
  position: String,
  timestamp: String,
  title: String,
  content: String,
  images: [String],
  likes: Number,
  comments: [
    {
      commentId: String,
      username: String,
      avatar: String,
      content: String,
      timestamp: String,
    },
  ],
  views: Number,
  postCategory: String,
  tags: [String],
  isFeatured: Boolean,
  authorId: String,
  isDraft: Boolean,
  postUrl: String,
  shareCount: Number,
  replies: [
    {
      replyId: String,
      username: String,
      avatar: String,
      content: String,
      timestamp: String,
    },
  ],
  relatedPosts: [
    {
      postId: String,
      title: String,
      postUrl: String,
    },
  ],
  isHot: Boolean,
});

// 连接成功时输出日志
mongoose.connection.on('connected', () => {
  console.log('MongoDB 连接成功');
});

// 连接失败时输出日志
mongoose.connection.on('error', (err) => {
  console.error('MongoDB 连接失败', err);
});

// 导出模型，使其在其他文件中可以使用
module.exports = Post;
