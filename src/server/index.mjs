import express from "express";
import dotenv from "dotenv";
//import "dotenv";
import actions from "./util/actions.mjs";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/", (req, res, next) => {
  console.log("Inside Root");
  //res.send({ greeting: "welcome!" });
  next();
});

app.post("/create", (req, res, next) => {
  console.log("Inside create post at root");
  console.log(req.body);
  let user = actions.create({ fname: req.body.fname, lname: req.body.lname });
  res.send(user);
});

app.post("/view", (req, res, next) => {
  console.log("Inside view");
  let user = actions.view({ userid: req.body.userid });
  res.send(user);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started successfully! at ${PORT}`);
});
