import { Request, Response } from 'express';
import clubService from '../services/club_service';

async function clubsList(req: Request, res: Response) {
  const allClubs = await clubService.getClubs();
  res.json(allClubs).status(200);
  console.log(allClubs)
}

const clubController = {
  clubsList
}

export default clubController;