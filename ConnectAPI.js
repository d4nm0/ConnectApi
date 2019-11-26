require('isomorphic-fetch');
const http=require('http');
const fs=require('fs');

http.createServer(function(req,res){
    url="http://localhost/~roza/stages.json";
    console.log(url);

    let r={};
    fetch(url)
        .then(x=>x.json())
        .then(xx=>{
            r=JSON.stringify(xx);
            console.log("ok");
            res.writeHead(200, {'Content-Type': 'application/json'});
            console.log(typeof r);
            res.write(r);
            console.log("ok2");
            res.end();
        })
        .catch(function(e){
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write("erreur");
            res.end();
        });
}).listen(3000);
console.log("serveur tourne sur le port");