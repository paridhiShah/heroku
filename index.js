const{exec}= require("child_process")
const cron=require("node-cron")
const express = require('express')
const app = express()
//const port = 3000
app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
  res.send('Check logs')
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
  console.log("Script started please be patient!");
});


app.listen(app.get('port'), () => {
  console.log(`slot machine tests. Please wait script has started!`)
})
