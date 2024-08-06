import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

async function getVenues() {
  return await prisma.venue.findMany();
}

async function getVenue(venueId: string) {
  return await prisma.venue.findFirst({ where: { id: Number(venueId) } });
}


const venueService = {
  getVenues,
  getVenue
}

export default venueService;