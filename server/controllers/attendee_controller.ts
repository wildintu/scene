import { Request, Response } from 'express';
import attendeeService from '../services/attendee_service';

async function attendeesList(req: Request, res: Response) {
  const allAttendees = await attendeeService.getAttendees();
  res.json(allAttendees).status(200);
  console.log(allAttendees)
}

async function findAttendee(req: Request, res: Response) {
  const { id } = req.params;
  const attendeeSelected = await attendeeService.getAttendee(id);
  res.json(attendeeSelected).status(200);
}

const attendeeController = {
  attendeesList,
  findAttendee
}

export default attendeeController;