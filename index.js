const express = require("express");
const app = express();
const port = 5000;
const cors = require('cors');
const categories = require('./data/category.json')
const data=require('./data/data.json')

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
