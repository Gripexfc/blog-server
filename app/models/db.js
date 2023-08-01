const mongoose = require('mongoose');
require('dotenv').config();
console.log(process.env.DATABASE_URL,'url');
// MongoDB 连接字符串
// const url = 'mongodb://localhost:27017';

// // 数据库名称
// const dbName = 'your-database-name';

// 连接 MongoDB 数据库
mongoose.connect(`${process.env.DATABASE_URL}`, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB 连接成功');
  })
  .catch((error) => {
    console.error('MongoDB 连接失败:', error);
  });

// 导出已连接的数据库对象
module.exports = mongoose.connection;
