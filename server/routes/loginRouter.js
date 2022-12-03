const { User } = require("../models/User");
const loginRouter = require("express").Router();

loginRouter.post("/login", (req, res) => {
  User.findOne({ nickname: req.body.nickname }, (err, user) => {
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: "Unvalid email",
      });
    }
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({
          loginSuccess: false,
          message: "Wrong password",
        });
      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
        res.cookie("x_auth", user.token).status(200).json({
          loginSuccess: true,
          userId: user._id,
        });
      });
    });
  });
});

module.exports = { loginRouter };
