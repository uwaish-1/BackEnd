const http = require('http');
const fs = require('fs/promises');
const port = 3000
const server = http.createServer(async(req,res) => {
    // res.statusCode = 200;
    // res.setHeader('content-type':'text/plain')
    // res.writeHead(200,{'content-type': 'text/plain'});
    res.writeHead(200,{'content-type': 'text/html'});
    // res.write("hello")
    const readdata = await fs.readFile("./home.html",'utf8')
    res.end(readdata);
})

server.listen(port,()=>{
    console.log(`server is running on port ${port}`);
    
})
// node --watch http-plain.js ....http://localhost:3000




















// +++++++++++++++++++++++++++++


// const http = require('http');
// const fs = require('fs');
// const path = require('path');

// const port = 3000;

// const server = http.createServer((req, res) => {
//     const filePath = path.join(__dirname, 'home.html');

//     fs.readFile(filePath, (err, data) => {
//         if (err) {
//             res.writeHead(500, { 'Content-Type': 'text/plain' });
//             res.end('Internal Server Error');
//         } else {
//             res.writeHead(200, { 'Content-Type': 'text/html' });
//             res.end(data);
//         }
//     });
// });

// server.listen(port, () => {
//     console.log(`Server is running at http://localhost:${port}`);
// });
