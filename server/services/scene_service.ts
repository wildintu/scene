import { prisma }  from '../utils/prisma'

export async function getScenes() {
  return await prisma.event.findMany()
}

export async function getScene(sceneId: string) {
  return await prisma.event.findFirst({ where: { id: Number(sceneId) } })
}