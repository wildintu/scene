import { NextFunction, Request, Response } from 'express'
import * as sceneService from '../services/scene_service'

export async function scenesList(req: Request, res: Response) {
  const allScenes = await sceneService.getScenes()
  res.json(allScenes).status(200)
}

export async function findScene(req: Request, res: Response) {
  const { id } = req.params
  const sceneSelected = await sceneService.getScene(Number(id))
  res.json(sceneSelected).status(200)
}

export async function newScene(req: Request, res: Response, next: NextFunction) {
  const scene = await sceneService.createScene(req.body)
  res.status(201).json(scene)
}

export async function updateScene(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params
  const scene = await sceneService.updateScene(Number(id), req.body)
  res.json(scene).status(200)
}

export async function deleteScene(req: Request, res: Response) {
  const { id } = req.params
  const scene = await sceneService.deleteScene(Number(id))
  res.json(scene).status(200)
}