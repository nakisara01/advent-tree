const { User } = require("../models/User");
const loginRouter = require("express").Router();
const jwt = require("jsonwebtoken");



loginRouter.post("/login", (req, res) => {
  // 요청된 이메일을 db에서 찾는다.
  const user = User.findOne({ nickname: req.body.nickname }, (err, user) => {
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: "Unvalid email",
      });
    }
    // 요청된 이메일이 db에 있다면 비밀번호 일치여부 확인
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({
          loginSuccess: false,
          message: "Wrong password",
        });
      // 일치 시, 토큰 생성
      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
        // 토큰을 쿠키에 저장
        res.cookie("x_auth", user.token).status(200).json({
          loginSuccess: true,
          userId: user._id,
        });
      });
    });
  });
});

module.exports = { loginRouter };
