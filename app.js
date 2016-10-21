var express = require('express');
var app = express();

app.get('/',function myFunction(request, response) {
    response.send("hello");
});

app.listen(3000);