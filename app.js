const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');

const app = express();

var items=[];
var newListItems = [];
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"))

app.set('view engine', 'ejs');

app.get('/', function (req, res){
  const today = new Date();

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
};

var day = today.toLocaleString("en-US", options);

res.render("list", {kindOfDay: day, newListItems: items})
});

app.post('/', function (req, res){
    var item =req.body.newItem;
    items.push(item);
    res.redirect('/');
})

app.listen(process.env.PORT ||3000, function() {
  console.log("Server is running on port 3000" );
});
