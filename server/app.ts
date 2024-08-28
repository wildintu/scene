import express from 'express'
import { Request, Response, NextFunction } from 'express'
import { club } from './routes/club'
import { scene } from './routes/scene'
import { venue } from './routes/venue'
import { attendee } from './routes/attendee'
import { swaggerSpec } from './utils/swagger_spec'
import swaggerUI from 'swagger-ui-express';
import { auth } from './routes/auth';
import { verifyTokenMiddleware } from './middleware/auth'
import cors from 'cors'

export const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', async (req: Request, res: Response) => {
  res.send('You are home.')
});

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
app.use('/venue', venue);
app.use('/scene', scene);

app.use('/login', auth);
app.use("*", verifyTokenMiddleware);

app.use('/club', club);
app.use('/attendee', attendee);