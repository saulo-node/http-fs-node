const http = require('http')
const fs = require('fs')
const port = process.env.port

const server = http.createServer((req, res) => {
    fs.readFile('site.html', (err, file) => {
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write(file)
        return res.end()
    })
})

server.listen(port || 3000, () => {console.log('Server running')})