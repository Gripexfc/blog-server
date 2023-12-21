const mongoose = require('mongoose');
const User = require('../models/user')
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

// const mongoose = require('mongoose');
// const User = require('./userModel'); // 确保路径正确

// 创建连接
// mongoose.connect('mongodb://localhost:27017/blog', { useNewUrlParser: true, useUnifiedTopology: true });

// 创建 User 模型实例
const newUser = new User({
    username: 'goodEat',
    password: '123456',
    account_number: '12345678901',
    article_id: new mongoose.Types.ObjectId(), // 自动生成一个 ObjectId 作为示例
    user_avatar: 'path/to/avatar.jpg',
    position: 'Software Engineer',
    description: 'A brief description of the user.',
    extension_field1: 'Value 1',
    extension_field2: 42,
    extension_field3: new Date(),
    created_at: new Date()
});

// 插入数据到数据库
const insertUser = async () => {
    try {
        const savedUser = await newUser.save();
        console.log('用户插入成功:', savedUser);
    } catch (error) {
        console.error('插入用户时出现错误:', error);
    } finally {
        // 关闭数据库连接
        mongoose.connection.close();
    }
};

// 调用插入函数
insertUser();


