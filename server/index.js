const express = require("express");
const app = express();

app.get("/123", (req, res) => {
  res.send("Hello World!");
});

app.listen(8080, () => {
  console.log("server started at 8080");
});
