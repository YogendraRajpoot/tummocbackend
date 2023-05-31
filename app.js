const express = require("express");
const app = express();
const fileProcessor = require("./utils/fileProcessor");

app.post("/file-upload", (req, res) => {
  // Code to handle file upload and trigger file processing
  const filePath = req.file.path;
  fileProcessor(filePath);

  res.json({ message: "File processing initiated" });
});

module.exports = app;
