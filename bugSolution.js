const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might fail
  setTimeout(() => {
    try {
      if (Math.random() < 0.5) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Success!');
      } else {
        // Handle the error
        throw new Error('Simulated asynchronous error');
      }
    } catch (err) {
      console.error('Error processing request:', err);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Server Error');
    }
  }, 100);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});