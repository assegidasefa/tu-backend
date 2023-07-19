import  express from "express";





const app = express();
const PORT = 8000;

app.get('/', (req, res) => {
    res.send('Hello, Node.js!');
  });
  
  app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
  });