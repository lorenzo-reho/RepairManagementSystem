const express = require("express");
const cors = require("cors");
const app = express();

const port = 3000;
const requestsRouter = require("./routes/repair-requests");

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.options('*', cors()) // include before other routes

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});



app.use("/repair-requests", requestsRouter);

app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH");
  res.header("Access-Control-Allow-Headers", "Accept, Content-Type, Authorization, X-Requested-With");

  next();
});

app.listen(port, () => {
  console.log(`Example app listening at http://192.168.1.176:${port}`);
});