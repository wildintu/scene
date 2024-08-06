import { Request, Response } from 'express';
import sceneService from '../services/scene_service';

async function scenesList(req: Request, res: Response) {
  const allScenes = await sceneService.getScenes();
  res.json(allScenes).status(200);
}

async function findScene(req: Request, res: Response) {
  const { id } = req.params;
  const sceneSelected = await sceneService.getScene(id);
  res.json(sceneSelected).status(200);
}

const sceneController = {
  scenesList,
  findScene
}

export default sceneController;