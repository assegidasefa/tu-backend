import  express from "express";
import routes from "./routes/index.js"





const app = express();
const PORT = 8000;


app.use('/api/v1', routes)

// app.get('/', (req, res) => {
//     res.send('Hello, Node.js!');
//   });
  
  app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
  });