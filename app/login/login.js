/*
 * @Author: fanchen 2837903280@qq.com
 * @Date: 2023-06-30 16:26:41
 * @LastEditors: fanchen 2837903280@qq.com
 * @LastEditTime: 2023-06-30 16:26:53
 * @FilePath: \blogServer\app\route\login\login.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// login.js
const express = require("express");
const router = express.Router();
const { generateToken } = require("./authorization");

// 路由
router.post("/", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const token = generateToken({ username: username });
  res.json({
    code: 200,
    msg: "登录成功",
    data: { token },
  });
});

module.exports = router;
