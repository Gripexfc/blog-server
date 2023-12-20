const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 创建 MongoDB 连接
// mongoose.connect('mongodb://localhost:27017/blog', { useNewUrlParser: true, useUnifiedTopology: true });

// 定义用户模型
const userSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    account_number: { type: String, unique: true, required: true },
    article_id: { type: Schema.Types.ObjectId, ref: 'Article' }, // 关联文章的ID，假设有一个 Article 模型
    user_avatar: { type: String },
    position: { type: String },
    description: { type: String },
    extension_field1: { type: String },
    extension_field2: { type: Number },
    extension_field3: { type: Date },
    created_at: { type: Date, default: Date.now }
});

// 创建 User 模型
const User = mongoose.model('User', userSchema);

module.exports = User;







// // 注册用户数据模型
// // const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/blog')
//   .then(() => {
//     const userSchema = new mongoose.Schema({
//         username: { type: String, required: true },
//         password: { type: String, required: true },
//         email: { type: String },
//         phone: { type: String },
//         avatar: { type: String },
//         roles: { type: [String] },
//         permissions: { type: [String] },
//         status: { type: String },
//         verificationCode: { type: String },
//         articles: { type: [ Number ]},
//         loginHistory: [
//           { ip: { type: String }, timestamp: { type: Number } }
//         ],
//         thirdPartyLogin: {
//           provider: { type: String },
//           providerId: { type: String },
//           nickname: { type: String },
//           avatar: { type: String }
//         }
//     });

//     const UserModel = mongoose.model('User', userSchema);

//     // 示例用户数据
//     const sampleUsers = [
//       {
//         username: "朝阳",
//         password: "123456",
//         email: "john.doe@example.com",
//         phone: "123-456-7890",
//         avatar: "user_avatar.jpg",
//         roles: ["user", "admin"],
//         permissions: ["read", "write", "delete"],
//         status: "active",
//         verificationCode: "123456",
//         articles: [1,2,3],
//         loginHistory: [
//           { ip: "192.168.1.100", timestamp: 1678923456 },
//           { ip: "192.168.1.101", timestamp: 1678924567 }
//         ],
//         thirdPartyLogin: {
//           provider: "google",
//           providerId: "google123",
//           nickname: "JohnDoe",
//           avatar: "google_avatar.jpg"
//         }
//       },
//       // 其他示例用户数据...
//     ];

//     // 插入示例数据到数据库
//     return UserModel.insertMany(sampleUsers);
//   })
//   .then(() => {
//     console.log('示例用户数据插入成功，数据库中的集合已创建。');
//   })
//   .catch((err) => {
//     console.error('连接数据库或插入数据时发生错误：', err);
//   });