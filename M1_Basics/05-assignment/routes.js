const fs = require('fs')

const requestHandler = (req, res) => {
  const url = req.url

  if (url === '/') {
    res.setHeader('Content-Type', 'text/html')
    res.write("<!DOCTYPE html> <html lang='en'>")
    res.write("<head><meta charset='UTF-8'><title>Hello!</title></head>")
    res.write("<body>")
    res.write("<h1>Hello there!</h1>")
    res.write("<form action='/create-user' method='POST'><input type='text' name='username' placeholder='Username...'/><button type='submit'>Send</button></form>")
    res.write("</body>")
    res.write("</html>")
    return res.end()
  }
  if (url === '/users') {
    res.setHeader('Content-Type', 'text/html')
    res.write("<!DOCTYPE html> <html lang='en'>")
    res.write("<head><meta charset='UTF-8'><title>Users</title></head>")
    res.write("<body>")
    res.write("<h1>Users:</h1>")
    res.write("<ul><li>User 1</li><li>User 2</li><li>User 3</li></ul>")
    res.write("</body>")
    res.write("</html>")
    return res.end()
  }
  if (url === '/create-user') {
    const body = []
    req.on('data', chunk => {
      body.push(chunk)
    })
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString()
      const user = parsedBody.split('=')[1]
      console.log(user)
    })
    res.statusCode = 302
    res.setHeader('Location', '/')
    res.end()
  }
}

module.exports = requestHandler