
var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("CI using Jenkins. IT automation using Ansible, Vagrant & VirtualVM - TEST - 002");
});

app.listen(4000);