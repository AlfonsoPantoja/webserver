var express = require('express');
var app = express();

//var site_folder = __dirname;
var site_folder = "C:\\DESARROLLO_GIT\\directory-backbone-bootstrap-require";


console.error(__dirname);
app.configure(function () {
    app.use(
        "/", //the URL throught which you want to access to you static content
        express.static(site_folder) //where your static content is located in your filesystem
    );
});
app.listen(3000); //the port you want to use