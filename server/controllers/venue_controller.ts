import { NextFunction, Request, Response } from 'express'
import * as venueService from '../services/venue_service'

export async function venuesList(req: Request, res: Response) {
  const allVenues = await venueService.getVenues()
  res.json(allVenues).status(200)
}

export async function findVenue(req: Request, res: Response) {
  const { id } = req.params
  const venueSelected = await venueService.getVenue(Number(id))
  res.json(venueSelected).status(200)
}

export async function newVenue(req: Request, res: Response, next: NextFunction) {
  const venue = await venueService.createVenue(req.body)
  res.status(201).json(venue)
}

export async function updateVenue(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params
  const venue = await venueService.updateVenue(Number(id), req.body)
  res.json(venue).status(200)
}

export async function deleteVenue(req: Request, res: Response) {
  const { id } = req.params
  const venue = await venueService.deleteVenue(Number(id))
  res.json(venue).status(200)
}