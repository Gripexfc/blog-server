const express = require('express');
const Post = require('../models/postModels');
const route = express.Router();

// 路由，处理添加帖子的请求
route.post('/addPost', async (req, res) => {
  try {
    // 创建一条帖子数据
    const post = new Post({
      postId: "123456",
      username: "朝阳",
      avatar: "user_avatar.jpg",
      position: "Web Developer",
      timestamp: "2023-07-24 14:30",
      title: "如何优化前端性能",
      content: "这是一篇关于前端性能优化的文章...",
      images: ["post_image1.jpg", "post_image2.jpg"],
      likes: 100,
      comments: [
        {
          commentId: "c123",
          username: "Alice",
          avatar: "alice_avatar.jpg",
          content: "非常有用的文章，谢谢分享！",
          timestamp: "2023-07-24 15:00",
        },
      ],
      views: 1000,
      postCategory: "技术",
      tags: ["前端", "性能优化"],
      isFeatured: true,
      authorId: "user123",
      isDraft: false,
      postUrl: "/posts/123456",
      shareCount: 50,
      replies: [
        {
          replyId: "r456",
          username: "Bob",
          avatar: "bob_avatar.jpg",
          content: "同意你的观点！",
          timestamp: "2023-07-24 15:30",
        },
      ],
      relatedPosts: [
        {
          postId: "789",
          title: "如何优化后端性能",
          postUrl: "/posts/789",
        },
      ],
      isHot: true,
    });

    // 将帖子数据保存到数据库
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    console.error('添加帖子时出现错误：', err);
    res.status(500).json({ error: '添加帖子时出现错误' });
  }
});

module.exports = route;