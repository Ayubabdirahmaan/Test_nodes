const express = require("express");
const app = express();
const path = require("path");
app.get("/page1", (req, res) => {
  res.send(`Hello Wolrd`);
});
app.get("/page2", (req, res) => {
  res.sendFile(path.join(__dirname, "form.html"));
});
app.get("/process", (req, res) => {
  name = req.query.txt1;
  tell = req.query.txt2;
  res.send(`Hi <b> ${name} i will call you ${tell} </b>`);
});
app.listen(3000, () => {
  console.log("Server is Runing");
});
