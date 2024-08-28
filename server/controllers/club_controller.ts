import { NextFunction, Request, Response } from 'express'
import * as clubService from '../services/club_service'

export async function clubsList(req: Request, res: Response) {
  const allClubs = await clubService.getClubs()
  res.json(allClubs).status(200)
}

export async function findClub(req: Request, res: Response) {
  const { id } = req.params
  const clubSelected = await clubService.getClub(Number(id))
  res.json(clubSelected).status(200)
}

export async function newClub(req: Request, res: Response, next: NextFunction) {
  const club = await clubService.createClub(req.body)
  res.status(201).json(club)
}

export async function updateClub(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params
  const club = await clubService.updateClub(Number(id), req.body)
  res.json(club).status(200)
}

export async function deleteClub(req: Request, res: Response) {
  const { id } = req.params
  const club = await clubService.deleteClub(Number(id))
  res.json(club).status(200)
}