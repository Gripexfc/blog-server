// const mongoose = require('mongoose');
const express = require('express');
const route = express.Router();
const Post = require('../models/reviewModels'); // 假设 discussionModel.js 的路径正确

route.post('/discussion', () => {
    const newPost = new Post({
        id: "1",
        username: "User123",
        content: "这是第一条讨论内容",
        image: "http://example.com/image1.jpg",
        likes: 10,
        comments: [
        {
            id: "1",
            username: "User456",
            content: "这是第一个评论",
            replies: [
            {
                id: "1",
                username: "User789",
                content: "这是对第一个评论的回复"
            }
            ]
        },
        {
            id: "2",
            username: "User789",
            content: "这是第二个评论",
            replies: []
        }
        ],
    });
    
    // 保存帖子到数据库
    newPost.save().then((savedPost) => {
        console.log('帖子保存成功:', savedPost);
    }).catch((error) => {
        console.error('保存帖子时出错:', error);
    });
    // })
    // .catch((error) => {
    // console.error('MongoDB connection error:', error);
    // });
})


  module.exports = route;
