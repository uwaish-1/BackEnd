const http = require('http')
const users = [{
    id:1, name: 'xyz' , email: 'xyz@gmail.com'
    },
    {
    id:2, name: 'abc' ,email :'abc@gmail.com'
    },
    {
    id:3, name: 'wsx' ,email :'wsx@gmail.com'
    }
]
const server = http.createServer((req,res) =>{
    res.writeHead(200,{"content-type" : "application/json"});
    const namedata = users.map((user) =>{
        return user.name;
    })
    res.end(JSON.stringify(namedata));
});
const port = 3000;
server.listen(port,() =>{
console.log(`server running at http://localhost:${port}`);

});