const http = require('http');

const server = http.createServer((req, res) => {
      if (res.url === '/') {
            res.end('Welcome to Our Home Page !!!')
      }
      if (req.url === '/about') {
            res.end('Welcome to Our About Page !!!')
      }
      // console.log(req);
      // res.write('Welcome to our home page!');
      res.end(`
      <h1>Oops!</h1>
      <p>We can't seem to find the page you are looking for</p>
      <a herf="/">back home</a>
      `)
})

server.listen(5000);