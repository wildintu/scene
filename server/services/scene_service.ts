import { prisma }  from '../utils/prisma'

async function getScenes() {
  return await prisma.event.findMany();
}

async function getScene(sceneId: string) {
  return await prisma.event.findFirst({ where: { id: Number(sceneId) } });
}


const sceneService = {
  getScenes,
  getScene
}

export default sceneService;