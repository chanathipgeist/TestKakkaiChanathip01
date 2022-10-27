 // content of index.js
   const http = require('http');
   const port = 8081;
   const requestHandler = (request, response) => {
   console.log(request.url);
   response.end('Hello Node.js Server!');
   };
   const server = http.createServer(requestHandler);
   server.listen(port, (err) => {
   if (err) { 
    return console.log('Nong Kai Error, err') 
}
   console.log(`server is listening on ${port}`);
   });