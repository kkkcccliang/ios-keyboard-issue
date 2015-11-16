/**
 * Created by liangjz on 11/4/15.
 */


var http = require('http');
var url = require('url');
var fs = require('fs'); //fs
var server = http.createServer(function (req, res) {
    var pathname = url.parse(req.url).pathname;
    var realPath = "assets" + (pathname === '/' ? '/index.html' : pathname);
    console.log(realPath);
    fs.exists(realPath, function (exists) {
        if (!exists) {
            res.writeHead(404, {"Content-Type": "text/plain"});
            res.write("404\nNot Found!\n");
            res.end();
        } else {
            fs.readFile(realPath, "binary", function (err, file) {
                if (err) {
                    console.log(err);
                    return;
                }
                res.writeHead(200, {
                    'Content-Type': 'text/html'
                });
                res.write(file, "binary");
                res.end();
            });
        }
    });
});

server.listen(8080);
console.log("Server listening on port 8080");
