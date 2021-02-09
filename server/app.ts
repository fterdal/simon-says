import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app = express();
app.use(express.json());

app.use(morgan('dev'));
app.use(cors());

// We're using a JSON file as a "database":
import "./users"

app.get('/', (req, res, next) => {
  res.json({
    message: 'Hello World'
  });
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server awaiting requests on port ${PORT}`);
});
