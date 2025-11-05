// server.js
const http = require('http');

// 서버 생성
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Node.js Server!\n');
});

// 3000번 포트에서 대기
server.listen(3000, () => {
  console.log('✅ Server is running at http://localhost:3000');
});
