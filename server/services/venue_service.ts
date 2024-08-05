import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

async function getVenues() {
  return await prisma.venue.findMany();
}

const venueService = {
  getVenues
}

export default venueService;