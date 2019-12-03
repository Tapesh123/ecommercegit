const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

//method for CORS - this is needed when we make a call from react/angular - frontend
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

let login = require("./Routes/Login");
app.use("/api", login);
let server = app.listen(5002, function() {
  console.log("Server Started");
});
