import express from "express";
import routes from "./routes/index.js";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
// const PORT = 8000;

app.use(cors());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

app.use("/api/v1", routes);

// app.get('/', (req, res) => {
//     res.send('Hello, Node.js!');
//   });

//   app.listen(PORT, () => {
//     console.log(`Server started on http://localhost:${PORT}`);
//   });


export default app;
