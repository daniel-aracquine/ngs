const express = require('express')
const router = require('./route')
const app = express()
const host = '0.0.0.0';
const port = process.env.PORT || 3000
const { exec } = require('child_process');

// const packageName = 'numpy';

// exec(`pip install ${packageName}`, (error, stdout, stderr) => {
//   if (error) {
//     console.error(`Error: ${error.message}`);
//     return;
//   }
//   if (stderr) {
//     console.error(`stderr: ${stderr}`);
//     return;
//   }
//   console.log(`stdout: ${stdout}`);
// });

app.use(express.json())
app.use(router)
app.listen(port,host, () => {
    console.log('Server is up on port ' + port)
})