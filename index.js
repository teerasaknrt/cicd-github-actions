const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, DevOps!");
});

if (process.env.NODE_ENV !== "test") {
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
}

module.exports = app;