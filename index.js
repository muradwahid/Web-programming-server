const express = require("express");
const app = express();
const port = 5000;
const cors = require('cors');
const categories = require('./data/category.json')
const data=require('./data/data.json')
app.use(cors());
app.get("/categories", (req, res) => {
  res.send(categories)
});
app.get("/courses/:id", (req, res) => {
  const categoryId = req.params.id;
  const courses = data.filter((course) => course.category_id == categoryId);
  res.send(courses)
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
