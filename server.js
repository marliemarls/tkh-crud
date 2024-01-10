// console.log("is this thing on?")

const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
    //if this doesnt work remember to save file after
})




app.listen(PORT, function() {
console.log(`Server is live! Listening at port ${PORT}`);
// if this does not work, remember to save your file after
})