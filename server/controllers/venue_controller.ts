import { Request, Response } from 'express';
import venueService from '../services/venue_service';

async function venuesList(req: Request, res: Response) {
  const allVenues = await venueService.getVenues();
  res.json(allVenues).status(200);
  console.log(allVenues)
}

const venueController = {
  venuesList
}

export default venueController;