const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello world!');
});

const io = require('socket.io')(server);

io.on('connection', (socket) => {
  socket.emit('message', 'You are now connected!')
});

server.listen(8000, () => {
  console.log('Server running.')
});
