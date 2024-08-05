import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

async function getEvents() {
  return await prisma.event.findMany();
}

const eventService = {
  getEvents
}

export default eventService;