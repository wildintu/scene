import express from 'express';
import { Request, Response, NextFunction } from 'express';

const app = express();

// app.use(cors());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(morgan('combined'));

app.get('/', (req: Request, res: Response) => {
  res.send('Home page')
});

export { app };