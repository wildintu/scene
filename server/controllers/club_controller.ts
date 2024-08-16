import { NextFunction, Request, Response } from 'express';
import * as clubService from '../services/club_service';

export async function clubsList(req: Request, res: Response) {
  const allClubs = await clubService.getClubs();
  res.json(allClubs).status(200);
  console.log(allClubs)
}

export async function findClub(req: Request, res: Response) {
  const { id } = req.params;
  const clubSelected = await clubService.getClub(id);
  res.json(clubSelected).status(200);
}

export async function newClub(req: Request, res: Response, next: NextFunction) {
  const user = await clubService.createClub(req.body);
  res.json(user).status(200);
};

// async function updateUser(req, res, next) {
//   const { id } = req.params;
//   const user = await usersService.updateUser(id, req.body);
//   res.json(user).status(200);
// };

// async function deleteUser(req, res) {
//   const { id } = req.params;
//   const user = await usersService.deleteUser(id);
//   res.json(user).status(200);
// };