const express = require("express");
const router = new express.Router();
const {PythonShell} =require('python-shell');

router.post("/check",async(req,res) => {
  const { spawn } = require('child_process');
  const pythonProcess = spawn('python',["./test.py",12,2]);

  pythonProcess.stdout.on('data', (data) => {
    console.log(data.toString())
    res.status(201).send({})
   });
})

module.exports = router