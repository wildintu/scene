import { NextFunction, Request, Response } from 'express'
import * as attendeeService from '../services/attendee_service'

export async function attendeesList(req: Request, res: Response) {
  const allAttendees = await attendeeService.getAttendees()
  res.json(allAttendees).status(200);
}

export async function findAttendee(req: Request, res: Response) {
  const { id } = req.params
  const attendeeSelected = await attendeeService.getAttendee(Number(id))
  res.json(attendeeSelected).status(200)
}

export async function newAttendee(req: Request, res: Response, next: NextFunction) {
  const attendee = await attendeeService.createAttendee(req.body)
  res.status(201).json(attendee)
}

export async function updateAttendee(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params
  const attendee = await attendeeService.updateAttendee(Number(id), req.body)
  res.json(attendee).status(200)
}

export async function deleteAttendee(req: Request, res: Response) {
  const { id } = req.params
  const attendee = await attendeeService.deleteAttendee(Number(id))
  res.json(attendee).status(200)
}