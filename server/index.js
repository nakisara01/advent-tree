const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

app.get("/123", (req, res) => {
  res.send("Hello World!");
});

/**
 * Middleware
 */
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://root:djffpqjffp123@43.201.18.76:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB 연결"))
  .catch();

app.listen(8080, () => {
  console.log("server started at 8080");
});
