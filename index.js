const express = require('express');
const path = require("path");

const port = 3000;

express()
  .use(express.static(path.join(__dirname, "/public")))
  .listen(port, () => console.log(`Listening on port ${port}!`));
