import { prisma }  from '../utils/prisma'

export async function getVenues() {
  return await prisma.venue.findMany()
}

export async function getVenue(venueId: string) {
  return await prisma.venue.findFirst({ where: { id: Number(venueId) } })
}