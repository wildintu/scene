import express from 'express';
import { Request, Response, NextFunction } from 'express';
import club from './routes/club';
import scene from './routes/scene';
import venue from './routes/venue';
import attendee from './routes/attendee';
import auth from './routes/auth';
import { verifyTokenMiddleware } from './middleware/auth';
import cors from 'cors';


export const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req: Request, res: Response) => {
  res.send('Scene - app.ts - Home')
});

// app.use('/login', auth);
// app.use("*", verifyTokenMiddleware);

app.use('/club', club);
app.use('/venue', venue);
app.use('/scene', scene);
app.use('/attendee', attendee);