const{exec}= require("child_process")
const cron=require("node-cron")
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


cron.schedule('* * * * *', () => {
  
  exec('npm run test', (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`)
      return
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`)
      return
    }
    console.log(`stdout: ${stdout}`)
  })
  console.log("Script started please be patient");
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})