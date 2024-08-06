import { Request, Response } from 'express';
import venueService from '../services/venue_service';

async function venuesList(req: Request, res: Response) {
  const allVenues = await venueService.getVenues();
  res.json(allVenues).status(200);
  console.log(allVenues)
}

async function findVenue(req: Request, res: Response) {
  const { id } = req.params;
  const venueSelected = await venueService.getVenue(id);
  res.json(venueSelected).status(200);
}

const venueController = {
  venuesList,
  findVenue
}

export default venueController;