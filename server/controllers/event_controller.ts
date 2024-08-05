import { Request, Response } from 'express';
import eventService from '../services/event_service';

async function eventsList(req: Request, res: Response) {
  const allEvents = await eventService.getEvents();
  res.json(allEvents).status(200);
  console.log(allEvents)
}

const eventController = {
  eventsList
}

export default eventController;