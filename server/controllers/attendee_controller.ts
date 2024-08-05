import { Request, Response } from 'express';
import attendeeService from '../services/attendee_service';

async function attendeesList(req: Request, res: Response) {
  const allAttendees = await attendeeService.getAttendees();
  res.json(allAttendees).status(200);
  console.log(allAttendees)
}

const attendeeController = {
  attendeesList
}

export default attendeeController;