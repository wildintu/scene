import express from 'express';
import { Request, Response, NextFunction } from 'express';
import club from './routes/club';
import scene from './routes/scene';
import venue from './routes/venue';
import attendee from './routes/attendee';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req: Request, res: Response) => {
  res.send('Scene - Club Event App - Home')
});

app.use('/club', club);
app.use('/venue', venue);
app.use('/scene', scene);
app.use('/attendee', attendee);

export default app;