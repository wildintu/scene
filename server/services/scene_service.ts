import { prisma }  from '../utils/prisma'

export async function getScenes() {
  return await prisma.event.findMany()
}

export async function getScene(sceneId: Number) {
  return await prisma.event.findFirst({ where: { id: Number(sceneId) } })
}

export async function createScene(body: any) {
  const { club_id, venue_id, title, event_date, cost, start_at, end_at } = body
    return await prisma.event.create({
      data: {
        club_id: club_id,
        venue_id: venue_id,
        title: title,
        event_date: event_date,
        cost: cost,
        start_at: start_at,
        end_at: end_at
      },
    })
}

export async function updateScene(id: Number, params: any) {
  const { club_id, venue_id, title, event_date, cost, start_at, end_at } = params
  return await prisma.event.update({
    where: { id: Number(id) },
    data: {
      club_id: club_id,
      venue_id: venue_id,
      title: title,
      event_date: event_date,
      cost: cost,
      start_at: start_at,
      end_at: end_at
    },
  })
}

export async function deleteScene(sceneId: Number) {
  return await prisma.event.delete({ where: { id: Number(sceneId) }})
}