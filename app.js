var express = require('express');
var moment = require('moment');
moment.locale("th");
var app = express();
app.use(express.static("www"));


app.get("/", welcome);
app.get("/today", showToday)

app.listen('3000');

function welcome(request, response){
    response.send("<h1>Express by Korawit</h1>");
}
function showToday(request, response){
    //edit 4
    console.log(moment().format("LLL"));
    response.send(moment().format("LLL"));
}