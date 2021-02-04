import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app = express();
app.use(express.json());

app.use(morgan('dev'));
app.use(cors());

app.get('/', (req, res, next) => {
  res.send('hello world');
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server awaiting requests on port ${PORT}`);
});
