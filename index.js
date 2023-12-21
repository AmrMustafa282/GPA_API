const express = require('express')
const dotenv = require("dotenv");
const fs = require('fs')
const cors = require('cors')
const subjects = JSON.parse(fs.readFileSync(`${__dirname}/data/data.json`, "utf-8"));
dotenv.config({ path: "./config.env" });

const app = express();
app.use(cors())

// console.log(subjects);

app.listen(process.env.PORT,
console.log('app working on port 3000')
)

app.get('/getSubjects', (req, res) => {
  res.status(200).json({
    status: 'success',
    data:subjects
  })
})