const Shell = require('node-powershell');
const express = require('express')
const bodyParser = require('body-parser')
var cors = require('cors')
// Create a new instance of express
const app = express()

// Tell express to use the body-parser middleware and to not parse extended bodies
app.use(bodyParser.urlencoded({ extended: false }), cors())

// Route that receives a POST request to /sms
app.post('/', function (req, res) {
  const body = req.body.Body
  console.log(body)
  const ps = new Shell({
  executionPolicy: 'Bypass',
  noProfile: true
});
 
ps.addCommand('Get-Printer | Get-PrintJob | Remove-PrintJob');
ps.invoke()
.then(output => {
  console.log(output);
})
.catch(err => {
  console.log(err);
});
})

// Tell our app to listen on port 3000
app.listen(5000, function (err) {
  if (err) {
    throw err
  }

  console.log('Server started on port 5000')
})