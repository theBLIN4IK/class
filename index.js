const http = require('http')
const fs = require('fs')
const path = require('path') 
const PORT = 3002

const server = http.createServer((req, res) => {
    console.log('server req')
    res.setHeader('Content-Type', 'text/html')
    const createPath = (page) => path.resolve(__dirname, 'pages', `${page}.html`)
    let basePath = ''

    switch (req.url) {
       case '/':
        default:
            basePath = createPath('err')
            res.statusCode = 404
            break

        case '/page1':
            basePath = createPath('page1')
            res.statusCode = 200
            break 

            case '/page2':
                basePath = createPath('page2')
                res.statusCode = 200
                break 

                case '/page3':
                    basePath = createPath('page3')
                    res.statusCode = 200
                    break 

                        case '/page4':
                        res.setHeader('Content-Type', 'application/json')
                        basePath = createPath('page4')
                        res.statusCode = 200
                        break

                        case '/page5':
                            res.setHeader('Content-Type', 'text/plain')
                            basePath = createPath('page5')
                            res.statusCode = 200
                            break
    }

    fs.readFile(basePath, (err, data) => {
        if (err) {
            console.log(err)
            res.statusCode = 500 
            res.end()
        }
        else {
            res.write(data)
            res.end()
        }
    })
})

server.listen(PORT, 'localhost', (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`)
})
//http://localhost:3002