var http = require('http');
var fs = require('fs');

var homePage = fs.readFileSync('index.html');
var aboutPage = fs.readFileSync('about.html');
var contactPage = fs.readFileSync('contact.html');
var nofoundPage = fs.readFileSync('nofound.html');


console.log('First node server, listening on port 3000');

var server = http.createServer(function (req, res) {
    console.log(req.url);
    if (req.url === '/about') {
        //console.log(req.url);
        //res.write('All about Node.JS.');
        res.write(aboutPage);
        //res.end();
    }

    else if (req.url === '/contact') {
        //console.log(req.url);
        //res.write('Contact for Node.JS.');
        res.write(contactPage);
        //res.end();
    }

    else if (req.url === '/') {
        //console.log(req.url);
        //res.write('This is Home of Node.JS.');
        res.write(homePage);
        //res.end();
    }

    else {
        res.writeHead(404)
        //res.write('Oops! page not found.');
        res.write(nofoundPage);
        //res.end();
    }
    res.end();
}
)

server.listen(3000);