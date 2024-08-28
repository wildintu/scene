import { Request, Response } from 'express'
import attendeeService from '../services/attendee_service'

export async function attendeesList(req: Request, res: Response) {
  const allAttendees = await attendeeService.getAttendees()
  res.json(allAttendees).status(200);
}

export async function findAttendee(req: Request, res: Response) {
  const { id } = req.params
  const attendeeSelected = await attendeeService.getAttendee(id)
  res.json(attendeeSelected).status(200)
}