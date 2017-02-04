
var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("CI using Jenkins. IT automation using Ansible, Vagrant & VirtualVM - TEST");
});

app.listen(4000);