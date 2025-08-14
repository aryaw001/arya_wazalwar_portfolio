import express from 'express';

const app = express();
const PORT = 3002;

app.get('/', (req, res) => {
  res.send('Hello from test server!');
});

app.listen(PORT, 'localhost', () => {
  console.log(`Test server running at http://localhost:${PORT}`);
});
