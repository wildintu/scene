import { Request, Response } from 'express';
import clubService from '../services/club_service';

async function clubsList(req: Request, res: Response) {
  const allClubs = await clubService.getClubs();
  res.json(allClubs).status(200);
  console.log(allClubs)
}

async function findClub(req: Request, res: Response) {
  const { id } = req.params;
  const clubSelected = await clubService.getClub(id);
  res.json(clubSelected).status(200);
}

const clubController = {
  clubsList,
  findClub
}

export default clubController;