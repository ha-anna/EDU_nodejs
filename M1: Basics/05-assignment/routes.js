const fs = require('fs')

const requestHandler = (req, res) => {
  const url = req.url
  const method = req.method

  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write("<!DOCTYPE html> <html lang='en'>")
    res.write("<head><meta charset='UTF-8'><title>Hello!</title></head>")
    res.write("<body>")
    res.write("<h1>Hello there!</h1>")
    res.write("<form action='/users' method='POST'><input type='text' name='user'/><button type='submit'>Send</button></form>")
    res.write("</body>")
    res.write("</html>")
    return res.end();
  }
  if (url === '/users' && method === 'POST') {
    const body = []
    req.on('data', chunk => {
      body.push(chunk)
    })
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString()
      const user = parsedBody.split('=')[1]
      console.log(user)
      res.write("<!DOCTYPE html> <html lang='en'>")
      res.write("<head><meta charset='UTF-8'><title>Users</title></head>")
      res.write("<body>")
      res.write("<h1>Users:</h1>")
      res.write("<ul><li>User 1</li><li>User 2</li><li>User 3</li></ul>")
      res.write("</body>")
      res.write("</html>")
      return res.end();
    })
  }
}



module.exports = requestHandler