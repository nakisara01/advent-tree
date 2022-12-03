const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { registerRouter } = require("./routes/registerRouter");
const { loginRouter } = require("./routes/loginRouter");


app.get("/", (req, res) => {
  res.send("Landing Page");
});

/**
 * Middleware
 */
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());

/**
 * Router
 */
// app.use("/api/users", usersRouter);
app.use("/api", registerRouter);
app.use("/api", loginRouter);

/**
 * DB
 */
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
