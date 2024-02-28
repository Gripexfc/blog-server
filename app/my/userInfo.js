const express = require('express');
const router = express.Router();
const User = require('../models/user'); // Make sure to provide the correct path to your user model
// const DWClient = require("dingtalk-stream");
const axios = require('axios')

// GET user details by ID
router.get('/user/:userId', async (req, res) => {
    try {
        // const config = require("./config.json"); https://oapi.dingtalk.com/topapi/message/corpconversation/asyncsend_v2
        console.log(DWClient,'DWClientDWClientDWClientDWClient');
        // sendNotify();

        // const userId = req.params.userId;
        // console.log(userId);
        // // Find the user by ID and populate the referenced article
        // const user = await User.findById(userId).populate('_id');

        // if (!user) {
        //     return res.status(404).json({ message: 'User not found' });
        // }
        res.status(200).json({"user": "成功"});
        // res.status(200).json(user);
    } catch (error) {
        console.error(error);
        // res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.get('/chat/', async (req, res) => {
    console.log('成功');
    res.status(200).json({"user": "成功"});
})

// const DWClient = require("dingtalk-stream-sdk-nodejs");
// // const config = require("./config.json");
// console.log(DWClient,'DWClientDWClientDWClientDWClientDWClient');
// const client = new DWClient.DWClient({
//     clientId: 'dingdxcc8tkyuy0h2vhe',
//     clientSecret: 'RUXxhBYFbiHIGE6svxbxe12jxBTvEzB6RKija19k9JcyAqwQ6rxlveK4EVNfJzMT',
// });
// console.log(client.registerCallbackListener,'----------------------------------');
// client.registerCallbackListener('/v1.0/im/bot/messages/get', async (res) => {
//     // 注册机器人回调事件
//     console.log("收到消息",res);
//   })
//   .connect();

//   client.on('connect', () => {
//     console.log('Connected to DingTalk');
// });

// client.on('error', (err) => {
//     console.error('Error connecting to DingTalk:', err);
// });


// const clientId = 'dingdxcc8tkyuy0h2vhe';
// const clientSecret = 'RUXxhBYFbiHIGE6svxbxe12jxBTvEzB6RKija19k9JcyAqwQ6rxlveK4EVNfJzMT';

// const data = {
//   clientId,
//   clientSecret,
//   subscriptions: [
//     {
//       type: 'EVENT',
//       topic: '*'
//     },
//     {
//       type: 'CALLBACK',
//       topic: '/v1.0/im/bot/messages/get'
//     }
//   ],
//   ua: 'dingtalk-sdk-java/1.0.2',
//   localIp: '10.34.22.11'
// };

// const options = {
//   method: 'POST',
//   url: 'https://api.dingtalk.com/v1.0/gateway/connections/open',
//   headers: {
//     'Content-Type': 'application/json',
//     'Accept': 'application/json'
//   },
//   data
// };

// axios(options)
//   .then(response => {
    
//     console.log('Success:', response.data);

//     axios({
//         method: 'GET',
//         url: `${response.data.endpoint}/?ticket=${response.data.ticket}`,
//         headers: {
//           'Upgrade': 'websocket'
//         }})
//     .then(response => {
//         console.log('Success:*****', response.data);
//     })
//     .catch(error => {
//         console.error('Error:', error.response ? error.response.data : error.message);
//     });
//     })
//     .catch(error => {
//         console.error('Error:', error.response ? error.response.data : error.message);
//     });



// const client = new DWClient({
//     clientId: 'dingdxcc8tkyuy0h2vhe',
//     clientSecret: 'RUXxhBYFbiHIGE6svxbxe12jxBTvEzB6RKija19k9JcyAqwQ6rxlveK4EVNfJzMT',
//     debug: true // 开启调试信息，默认关闭
//     });
//     client.registerCallbackListener('/v1.0/im/bot/messages/get', async (res) => {
//         // 注册机器人回调事件
//         console.log("收到消息");
//         // sendNotify('我是打卡机器人');
//         const {messageId} = res.headers;
//         const { text, senderStaffId, sessionWebhook } = JSON.parse(res.data);
//     })
//     .registerCallbackListener(
//         '/v1.0/graph/api/invoke',
//         async (res) => {
//         // 注册AI插件回调事件
//         console.log("收到ai消息");
//         const { messageId } = res.headers;

//         // 添加业务逻辑
//         console.log(res);
//         console.log(JSON.parse(res.data));

//         // 通过Stream返回数据
//         client.sendGraphAPIResponse(messageId, {
//             response: {
//             statusLine: {
//                 code: 200,
//                 reasonPhrase: "OK",
//             },
//             headers: {},
//             body: JSON.stringify({
//                 text: "你好",
//             }),
//             },
//         });
//         }
//     )
//     .connect();

// const sendNotify = (msg, atuids = []) => {
//     console.log('请求成功过sssssss');
//     let access_token = '05871bb919b3acd7d933ad20555b6918fb65ad8b52112fe1797a7ef5478e323b'; // Webhook 地址上的 access_token
//     // 消息模版配置
//     let infos = {
//       msgtype: 'text',
//       text: {
//         content: '测试机器人',
//       },
//     //   at: {
//     //     atUserIds: atuids,
//     //   },
//     };
//     // API 发送消息
//     axios.post(`https://oapi.dingtalk.com/robot/send`, infos, {
//       params: { access_token },
//     });
//   };
  

module.exports = router;
