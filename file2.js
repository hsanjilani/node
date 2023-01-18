const http = require('http');

const server = http.createServer(function (req, res) {
  res.write('<h1>hello node</h1>');
  res.end();
});

server.listen(3000, (err) => {
  if (err){console.log(err)}
  else{
    console.log("le serveur est en cours d'execution sur le port 3000")
  }
});