const Image = require("../models/Image");
const mongoose = require("mongoose");
const User = require("../models/User.js");

imageRouter.post("/api/tree", async (req, res) => {
  const images = await Image.find({ public: "true" }).sort({
    createdAt: -1,
  });
  res.json(images);
});

imageRouter.post("/api/image/tree", async (req, res) => {
  if (req.body.id) {
    const images = await Image.find({
      "user._id": req.body.id,
      "user.email": req.body.email,
    }).sort({
      createdAt: -1,
    });
    res.json(images);
  }
});

// 본인 사진들만 리턴 (public 유무 상관없이)
imageRouter.get("/:id/album", async (req, res) => {
  try {
    if (!req.user) throw new Error("권한이 없습니다.");
    const images = await Image.find({ "user._id": req.user.id });
    res.json(images);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = imageRouter;
