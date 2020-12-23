var express = require("express");
var app = express();
var port = 3001;

var players = {
  Travis: {
    mouse: 'polla',
    keyboard: 'kolla',
    age: 19,
    gamertag: 'Trv'
  },
  Milahn: {
    mouse: 'jolla',
    keyboard: 'lpppa',
    age: 20,
    gamertag: 'Polla'
  }

};








app.get("/users", (req, res) => {
  res.send(players);
});



 
app.listen(port, () => {
  console.log("SERVER IS UP AND LISTENING " + port);
});









