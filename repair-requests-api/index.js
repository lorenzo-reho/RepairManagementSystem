const express = require("express");
const app = express();
const port = 3000;
const requestsRouter = require("./routes/repair-requests");

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});


app.use("/repair-requests", requestsRouter);

// app.use("/working_requests", requestsRouter);
app.use( (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ message: err.message });
    return;
}
);


app.listen(port, () => {
  console.log(`Example app listening at http://192.168.1.176:${port}`);
});