const express = require('express')
const fs = require('fs')
const cors = require('cors')
const subjects = JSON.parse(fs.readFileSync(`${__dirname}/data/data.json`, "utf-8"));


const app = express();
app.use(cors())

// console.log(subjects);

app.listen(3000,
console.log('app working on port 3000')
)

app.get('/getSubjects', (req, res) => {
  res.status(200).json({
    status: 'success',
    data:subjects
  })
})