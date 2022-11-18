var express = require('express');
var app     = express();
var cors    = require('cors');
var low     = require('lowdb');
var fs      = require('lowdb/adapters/FileSync');
var adapter = new fs('db.json');
var db      = low(adapter);


// used to serve static files from public directory
app.use(express.static('public'));
app.use(cors());
// init the data store
db.defaults({ posts: []}).write();
// create user account
app.get('/account/create/:name/:email/:password', function (req, res) {

    var post = {
        'name' : req.params.name,
        'email' : req.params.email,
        'password' : req.params.password,        
    }
    db.get('posts').push(post).write();
    console.log(db.get('posts').value());
    res.send(db.get('posts').value());
});

var port = 4000;
app.listen(port);
console.log('Running on port: ' + port);