const { log } = require('console')
const http = require('http')

const server = http.createServer((req, res) => {
    
    if(req.url == '/'){
        res.end('welcome to our home page')
    }
    else if(req.url == '/about'){
        res.end('this is the history')
    }
    else res.end(`
        <h1>Oops!</h1>

        <p>we cant seem to find the page</p>
        <a href = "/">back home</a>
        `)
})

// server.listen(5000)
// Start the server and listen on port 5000
server.listen(5000, () => {
    console.log('Server is listening on port 5000');
});