const express = require("express");

const server = express();

server.get("/", (req, res) => {
  res.send("API is connected");
});

server.listen(5000, () => {
  console.log("Server running on port 5000");
});
