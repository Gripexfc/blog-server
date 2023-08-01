
const jwt = require("jsonwebtoken");

const secretKey = "secretKey";

// 生成token
module.exports.generateToken = function (payload) { 
  const token =
    "Bearer " +
    jwt.sign(payload, secretKey, {
      expiresIn: 60 * 60,
    });

  return token;
};

// 验证token
module.exports.verifyToken = function (req, res, next) {
  const token = res.headers?.authorization && res.headers?.authorization.split(" ")[1];

  return jwt.verify(token, secretKey, function (err, decoded) {
    if (err) {
      console.log("verify error", err);
      return res.status(404).json({msg: "token无效"})
    }
  });
};
