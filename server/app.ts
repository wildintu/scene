import express from 'express';
import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();
const app = express();

// app.use(cors());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(morgan('combined'));

app.get('/', async (req: Request, res: Response) => {
  const allClubs = await prisma.club.findMany()
  const allVenues = await prisma.venue.findMany()
  const allEvents = await prisma.event.findMany()
  const allAttendees = await prisma.attendee.findMany()
  console.log(allClubs)
  console.log(allVenues)
  console.log(allEvents)
  console.log(allAttendees)
  res.send('Scene - Club Event App - Home')
});

export { app };